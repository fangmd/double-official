/**
 * @description axios 添加拦截器
 */
export default function ({ $axios, redirect }) {
  // 添加自定义 Header
  //   $axios.setHeader('mClient', 'pc')

  // 请求拦截
  $axios.onRequest((config) => {
    // console.log(config)
    console.log(
      `request: ${config.baseURL}${config.url} ${
        config.method
      } ${JSON.stringify(config.params)}`
    )
  })

  // 请求结果拦截
  $axios.onResponse((res) => {
    // console.log(res)
    return res
  })
}
