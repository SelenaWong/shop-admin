export default () => {
  return (
    <div>
      <h1>foo函数式组件</h1>
    </div>
  )
}
// 使用OptionsAPI
// import { defineComponent } from '@vue/runtime-core'
// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   render () {
//     return (<div>{ this.msg }</div>)
//   }
// })
// 使用组合式API
// import { ref, defineComponent } from '@vue/runtime-core'
// interface PropsType {
//   msg: string
// }
// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   setup () {
//     const count = ref(0)
//     return (props: PropsType) => {
//       <div>
//         <p>{ props.msg }</p>
//         <p>{ count }</p>
//       </div>
//     }
//   }
// })
