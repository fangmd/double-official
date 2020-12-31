// 时间格式化
import dayjs from 'dayjs'

// 2020-2-10 10:25:49
// tss: timestamp 毫秒
// yyyy-M-D HH:mm:ss
export const timeFormate = (tss) => {
  const d = dayjs(tss)
  // console.log(d);
  return d.format('YYYY-M-D HH:mm:ss') // 'yyyy-M-D HH:mm:ss'
}

// 2020-2-10 10:25:49
// ts: timestamp 秒
// yyyy-M-D HH:mm:ss
export const timeFormateS = (tss) => {
  const d = dayjs.unix(tss)
  // console.log(d);
  return d.format('YYYY-M-D HH:mm:ss') // 'yyyy-M-D HH:mm:ss'
}

/**
 * 返回显示的时间
 * @param {string} serverTime 服务器接口返回的时间
 */
export const formateServerTime = (serverTime) => {
  const d = dayjs(serverTime)
  return d.format('YYYY-M-D HH:mm:ss') // 'yyyy-M-D HH:mm:ss'
}
