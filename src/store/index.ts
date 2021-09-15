import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

const state = {
  count: 1,
  isCollapse: false,
  // user: JSON.parse(window.localStorage.getItem('user') || 'null') as IUserInfo | null
  user: getItem<{token: string} & IUserInfo>(USER) // 合并token属性
}

export type State = typeof state
// 定义injection key
export const key: InjectionKey<Store<State>> = Symbol('store')
// 创建一个新的 store 实例
export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
