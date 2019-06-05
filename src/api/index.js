import ajax from './ajax'
const BASE = '/api'

// 根据经纬度获取位置
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude}, ${longitude}`)
// 获取食品分类
export const reqCategory = () => ajax(BASE + '/index_category')
// 获取商铺
export const reqShops = (latitude, longitude) => ajax(BASE + '/shops', {latitude, longitude})