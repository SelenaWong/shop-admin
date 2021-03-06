/***
 * admin模块
 */

import request from '@/utils/request'
import { IListParams, AdminPostData, IAdminResponse } from '@/api/types/admin'
import { IFormData } from '@/api/types/form'
export const getAdmins = (params: IListParams) => {
  return request<IAdminResponse>({
    method: 'GET',
    url: '/admin/setting/admin',
    params
  })
}
export const createAdmin = (data: AdminPostData) => {
  return request({
    method: 'POST',
    url: '/admin/setting/admin',
    data
  })
}

export const updateAdmin = (id: number, data: AdminPostData) => {
  return request({
    method: 'PUT',
    url: `/admin/setting/admin/${id}`,
    data
  })
}

export const deleteAdmin = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/admin/setting/admin/${id}`
  })
}

export const updateAdminStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/admin/setting/set_status/${id}/${status}`
  })
}
export const getRoles = () => {
  return request<IFormData>({
    method: 'GET',
    url: '/admin/setting/admin/create'
  }).then(data => {
    const roles = data.rules.find(item => item.field === 'roles')
    if (roles && roles.options) {
      return roles.options
    }
    return []
  })
}

export const getAdmin = (id: number) => {
  return request<IFormData>({
    method: 'GET',
    url: `/admin/setting/admin/${id}/edit`
  }).then(data => {
    const obj: Record<string, any> = {}
    data.rules.forEach((item:any) => {
      obj[item.field] = item.value
    })
    // return obj as {
    //     account: string
    //     pwd: string
    //     conf_pwd: string
    //     real_name: string
    //     roles: number[]
    //     status: 0 | 1
    //   }
    return obj as AdminPostData
  })
}
