<template>
  <h1>
    {{ msg }}
  </h1>
  <p>{{ props.msg }}</p>
  <button
    type="button"
    @click="increment"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<!-- 语法糖 -->
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['increment'])
const count = ref(100)
const increment = () => {
  console.log(props.msg) // 这里是没有this的
  count.value++
  emit('increment')
}
</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
