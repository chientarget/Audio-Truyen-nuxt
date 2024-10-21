<template>
  <div class="min-h-screen flex items-center justify-center bg-[#1a1625]">
    <div class="w-[400px] bg-[#242235] p-8 rounded-2xl shadow-xl">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-[#b769e6]">Đăng nhập</h2>
        <p class="mt-2 text-gray-400">Chào mừng bạn đến với thế giới truyện</p>
      </div>

      <Form :model="formState" name="basic" @finish="onFinish" @finishFailed="onFinishFailed" layout="vertical">
        <FormItem label="Tên đăng nhập" name="username" :rules="[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]" class="mb-4">
          <Input v-model:value="formState.username" size="large" class="bg-[#2f2b42] border-[#3c3651] text-white placeholder-gray-400" placeholder="Nhập tên đăng nhập"/>
        </FormItem>

        <FormItem label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]" class="mb-4">
          <Input v-model:value="formState.password" type="password" size="large" class="bg-[#2f2b42] border-[#3c3651] text-white placeholder-gray-400" placeholder="Nhập mật khẩu"/>
        </FormItem>

        <div class="flex justify-between mb-6">
          <FormItem name="remember" class="m-0">
            <Checkbox v-model:checked="formState.remember" class="text-gray-300">Ghi nhớ đăng nhập</Checkbox>
          </FormItem>

          <NuxtLink to="/forgot-password" class="text-[#b769e6] hover:text-[#c785ed]">Quên mật khẩu?</NuxtLink>
        </div>

        <FormItem>
          <Button type="primary" html-type="submit" size="large" class="w-full bg-[#b769e6] border-[#b769e6] hover:bg-[#c785ed] hover:border-[#c785ed]">Đăng nhập</Button>
        </FormItem>
      </Form>

      <div class="text-center mt-4">
        <p class="text-gray-400">Chưa có tài khoản?
          <NuxtLink to="/register" class="text-[#b769e6] hover:text-[#c785ed] font-medium">Đăng ký ngay</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Form, FormItem, Input, Checkbox, Button } from 'ant-design-vue';
import { login } from '@@/services/api/auth';


interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});

const router = useRouter();

const onFinish = async (values: any) => {
  try {
    const response = await login(formState.username, formState.password);
    console.log('Login successful:', response);

    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('token', response.token);

    // Redirect to dashboard or desired page after login
    await router.push('/');
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
