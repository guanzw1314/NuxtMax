interface Response {
  status: number
  success: boolean
  data: Record<string, any>[]
}

/**
 * @name: 获取列表
 */
export const getList = () => {
  return useRequest<Response>(
    'getTenArticleList',
    {
      key: 'getData',
      method: 'get'
    }
  )
}
