import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
  count: number
}
// 定义injection key
export const key: InjectionKey<Store<State>> = Symbol('store')
// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
