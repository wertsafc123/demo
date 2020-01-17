import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import {
  isNull
} from './prototype'
import jsonminify from 'jsonminify'

const service = axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
})

service.interceptors.request.use(
  config => {
    if (config.data) {
      let dataStr = qs.stringify(config.data)
      if (config.method == 'post') {
        config.data = dataStr
      } else if (config.method == 'get') {
        config.url = config.url + '?' + dataStr
      }
    }
    return config
  },
  err => {
    Toast.fail('传参异常')
    return Promise.reject(err)
  })

service.interceptors.response.use(
  response => {
    let isJSON = response.headers['content-type'].includes('json')
    let dataNative = response.data
    let data = (dataNative.constructor == String && isJSON) ? JSON.parse(jsonminify(dataNative)) : dataNative

    if (isNull(data)) {
      Toast.fail('接口数据返回空,请后端检查下')
      return Promise.reject(data)
    }
    if (data.status != 1) {
      Toast.fail(data.info || '请求出错')
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          Toast.fail('错误类型400')
          break
        case 401:
          Toast.fail('登录失效，错误类型401')
          break
        case 404:
          Toast.fail('错误代码：404,请求不存在')
          break
        case 405:
          Toast.fail('拒绝调用')
          break
        case 500:
          Toast.fail('错误代码：500，请刷新或稍后再试')
          break
      }
    } else {
      Toast.fail('请求超时')
    }
    return Promise.reject(error)
  })

export default service