import { EntityError } from '@/lib/http'
import { type ClassValue, clsx } from 'clsx'
import { UseFormSetError, FieldValues, Path } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import jwt from 'jsonwebtoken'
import { toast } from 'sonner'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleErrorApi = <T extends FieldValues>({
  error,
  setError,
  duration
}: {
  error: unknown
  setError?: UseFormSetError<T>
  duration?: number
}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item) => {
      setError(item.field as Path<T>, {
        type: 'server',
        message: item.message
      })
    })
  } else {
    toast.error(
      (error as { payload?: { message?: string } })?.payload?.message ??
        'Lỗi không xác định',
      { duration: duration ?? 5000 }
    )
  }
}

/**
 * Xóa đi ký tự `/` đầu tiên của path
 */
export const normalizePath = (path: string): string => {
  return path.startsWith('/') ? path.slice(1) : path
}

export const decodeJWT = <Payload = unknown>(token: string): Payload | null => {
  return jwt.decode(token) as Payload | null
}
