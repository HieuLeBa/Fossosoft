import { EntityError } from '@/lib/http'
import { type ClassValue, clsx } from 'clsx'
import { UseFormSetError, FieldValues } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import jwt, { JwtPayload } from 'jsonwebtoken'
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
    error.payload.errors.forEach((item: { field: keyof T; message: string }) => {
      setError(item.field, {
        type: 'server',
        message: item.message
      })
    })
  } else {
    toast.error(
      (error as { payload?: { message?: string } })?.payload?.message ?? 'Lỗi không xác định',
      { duration: duration ?? 5000 }
    )
  }
}

/**
 * Xóa đi ký tự `/` đầu tiên của path
 */
export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}

export const decodeJWT = <T extends JwtPayload | null>(token: string): T => {
  return jwt.decode(token) as T
}
