import { NitroFetchRequest } from 'nitropack'
import { UseFetchOptions } from '#app'
import { requestConfig } from '~~/config/requestConfig'

type FetchRequest =
  | Ref<NitroFetchRequest>
  | NitroFetchRequest
  | (() => NitroFetchRequest)

export interface ResOptions<T> {
  data?: T
  code?: number
  message?: string
  success?: boolean
}

export const useRequest = <T>(
  url: FetchRequest,
  useFetchOptions?: UseFetchOptions<T>
) => {
  return useFetch(url, {
    ...requestConfig,
    ...useFetchOptions
  })
}

export const useHttp = {
  get<T = any>(
    url: string,
    params?: Record<string, any>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'get', params, ...opts })
  },
  post<T = any>(
    url: string,
    body?: Record<string, any>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'post', body, ...opts })
  },
  put<T = any>(
    url: string,
    body?: Record<string, any>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'put', body, ...opts })
  }
}
