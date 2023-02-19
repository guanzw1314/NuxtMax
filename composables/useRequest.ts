import { NitroFetchRequest } from 'nitropack'
import { FetchOptions } from 'ofetch'
import { AsyncDataOptions } from '#app'
import { requestConfig } from '~~/config/requestConfig'

type requestOptionsInt<T> = FetchOptions<'json'> & {
  key?: string
  method?: HTTPMethod | Lowercase<HTTPMethod>
  asyncDataOptions?: AsyncDataOptions<T>
}

/**
 * @name: 请求函数
 * @param { NitroFetchRequest } url 请求地址
 * @param { requestOptionsInt<T> } requestOptionsInt 请求参数
 */
export const useRequest = async <T = any> (
  url: NitroFetchRequest,
  requestOptionsInt?: requestOptionsInt<T>
) => {
  const {
    key,
    asyncDataOptions,
    ...FetchOptions
  } = { ...requestOptionsInt } as requestOptionsInt<T>

  const request = () => $fetch<T>(url, {
    ...requestConfig,
    ...FetchOptions
  })

  if (key) {
    return await useAsyncData<T>(key, request, asyncDataOptions)
  }
  return await useAsyncData<T>(request, asyncDataOptions)
}
