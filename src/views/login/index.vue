<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="captchaSrc"
            @click="loadCaptchaData"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { getCaptcha, login } from '@/api/common'
import { ElForm } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import type { IElForm, IFormItemRule } from '@/types/element-plus'
import { setItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
// import type { FormItemRule } from 'element-plus/packages/components/form/src/form.type'
const router = useRouter()
const route = useRoute()
const form = ref< IElForm|null>(null)
const captchaSrc = ref('')

const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
// Record声明对象记录
// const rules = ref < Record<string, FormItemRule[]>>({
//   account: [
//     { required: true, message: '请输入账号', trigger: 'change' }
//   ],
//   pwd: [
//     { required: true, message: '请输入密码', trigger: 'change' }
//   ],
//   imgcode: [
//     { required: true, message: '请输入验证码', trigger: 'change' }
//   ]
// })
const rules = ref < IFormItemRule >({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

const handleSubmit = async () => {
  // 1. 表单验证
  const valid = await form.value?.validate()
  if (!valid) {
    return false
  }
  // 2. 表单验证通过,显示loading
  loading.value = true
  // 3. 请求提交
  const loginData = await login(user).finally(() => {
    loading.value = false
  })
  // 4. 处理响应
  setItem(USER, {
    ...loginData.user_info,
    token: loginData.token
  })

  // router.replace({
  //   name: 'home'
  // })
  // route.query.redirect 的类型是LocationQueryValue; LocationQueryValue = string | null
  let redirect = route.query.redirect || '/'
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  // router.replace的类型
  // export declare type RouteLocationRaw = string | (RouteQueryAndHash & LocationAsPath & RouteLocationOptions) | (RouteQueryAndHash & LocationAsRelativeRaw & RouteLocationOptions);
  router.replace(redirect)
}

onMounted(() => {
  loadCaptchaData()
})
const loadCaptchaData = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
