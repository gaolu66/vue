import ajax from './ajax'
const BASE = '/api'

// 根据经纬度获取位置
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude}, ${longitude}`)
