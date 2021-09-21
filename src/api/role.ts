import request from '@/utils/request'
import { IListParams, Role, RolePostData, Menu, EditRole } from './types/role'

export const getRoles = (params: IListParams) => {
  return request<{
    count: number
    list: Role[]
  }>({
    method: 'GET',
    url: '/admin/setting/role',
    params
  })
}

export const saveRole = (id: number, data: RolePostData) => {
  return request({
    method: 'POST',
    url: `/admin/setting/role/${id}`,
    data
  })
}

export const deleteRole = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/admin/setting/role/${id}`
  })
}

export const updateRoleStatus = (id: number, status: 0 | 1) => {
  return request({
    method: 'PUT',
    url: `/admin/setting/role/set_status/${id}/${status}`
  })
}

export const getRole = (id: number) => {
  return request<{
    role: EditRole
    menus: Menu[]
  }>({
    method: 'GET',
    url: `/admin/setting/role/${id}/edit`
  })
}

export const getMenus = () => {
  return request<{
    menus: Menu[]
  }>({
    method: 'GET',
    url: '/admin/setting/role/create'
  })
}
