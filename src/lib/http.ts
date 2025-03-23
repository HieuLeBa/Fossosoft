import envConfig from '@/config'
import { normalizePath } from '@/lib/utils'
import { LoginResType } from '@/schemaValidations/auth.schema'
import { redirect } from 'next/navigation'

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined
}

type EntityErrorPayload = {
  message: string
  errors: {
    field: string
    message: string
  }[]
}

type HttpErrorPayload = {
  message: string
  [key: string]: unknown
}

export class HttpError extends Error {
  status: number
  payload: HttpErrorPayload

  constructor({ status, payload }: { status: number; payload: HttpErrorPayload }) {
    super('Http Error')
    this.status = status
    this.payload = payload
  }
}

export class EntityError extends HttpError {
  status: 422
  payload: EntityErrorPayload

  constructor({ status, payload }: { status: 422; payload: EntityErrorPayload }) {
    super({ status, payload })
    this.status = status
    this.payload = payload
  }
}

let clientLogoutRequest: Promise<Response> | null = null

export const isClient = () => typeof window !== 'undefined'

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options?: CustomOptions
): Promise<{ status: number; payload: Response }> => {
  let body: FormData | string | undefined
  if (options?.body instanceof FormData) {
    body = options.body
  } else if (options?.body) {
    body = JSON.stringify(options.body)
  }

  const baseHeaders: Record<string, string> = body instanceof FormData ? {} : { 'Content-Type': 'application/json' }

  if (isClient()) {
    const sessionToken = localStorage.getItem('sessionToken')
    if (sessionToken) {
      baseHeaders.Authorization = `Bearer ${sessionToken}`
    }
  }

  const baseUrl = options?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT
  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...(options?.headers as Record<string, string>),
    },
    body,
    method,
  })

  let payload: Response
  try {
    payload = await res.json()
  } catch {
    payload = {} as Response
  }

  const data = { status: res.status, payload }

  if (!res.ok) {
    if (res.status === 422) {
      throw new EntityError(data as { status: 422; payload: EntityErrorPayload })
    } else if (res.status === 401) {
      if (isClient()) {
        if (!clientLogoutRequest) {
          clientLogoutRequest = fetch('/api/auth/logout', {
            method: 'POST',
            body: JSON.stringify({ force: true }),
            headers: { ...baseHeaders },
          })
          try {
            await clientLogoutRequest
          } finally {
            localStorage.removeItem('sessionToken')
            localStorage.removeItem('sessionTokenExpiresAt')
            clientLogoutRequest = null
            location.href = '/login'
          }
        }
      } else {
        const sessionToken = (options?.headers as Record<string, string>)?.Authorization?.split('Bearer ')[1]
        redirect(`/logout?sessionToken=${sessionToken}`)
      }
    } else {
      throw new HttpError({ status: res.status, payload: payload as HttpErrorPayload })
    }
  }

  if (isClient()) {
    if (['auth/login', 'auth/register'].includes(normalizePath(url))) {
      const { token, expiresAt } = (payload as LoginResType).data
      localStorage.setItem('sessionToken', token)
      localStorage.setItem('sessionTokenExpiresAt', expiresAt)
    } else if ('auth/logout' === normalizePath(url)) {
      localStorage.removeItem('sessionToken')
      localStorage.removeItem('sessionTokenExpiresAt')
    }
  }

  return data
}

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('GET', url, options)
  },
  post<Response>(url: string, body: unknown, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('POST', url, { ...options, body: body as BodyInit | null | undefined })
  },
  put<Response>(url: string, body: unknown, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('PUT', url, { ...options, body: body as BodyInit | null | undefined })
  },
  delete<Response>(url: string, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('DELETE', url, options)
  },
}

export default http