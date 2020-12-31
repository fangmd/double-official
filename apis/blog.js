/**
 * Get 请求，参数可选
 */
export function getCategories($axios, data) {
  return $axios.$get('/api/blog/categories')
}

/**
 * 获取所有文章分页
 */
export function getArticles($axios, data) {
  return $axios.$get('/api/blog/articles', { params: data })
}

/**
 * 获取文章详情
 */
export function getArticle($axios, data) {
  return $axios.$get('/api/blog/article', { params: data })
}
