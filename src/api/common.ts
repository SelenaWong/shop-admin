/**
 * 公共基础接口封装
 *
 * **/
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from '@/api/types/common'

// interface ResponseData <T = any>{
//   status: number,
//   msg: string,
//   data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
  // request.get支持范型
  // return request.get<ResponseData<{
  //   logo_square: string,
  //   logo_rectangle: string,
  //   login_logo: string,
  //   slide: string[]
  //  }>>('/login/info').then(res => {
  //      return res.data.data
  // })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/admin/captcha_pro',
    params: { // 避免缓存问题
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据，二进制
  })
}

export const login = (data: {account: string, pwd: string, imgcode: string}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}

export const logout = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/admin/setting/admin/logout'
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
}
