<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import router from '@/router';
import type { RegisterForm } from '@/types';
import type { FormKitNode } from '@formkit/core';
import { AxiosError } from 'axios';
import { reactive } from 'vue';


const form = reactive<RegisterForm>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
})

const register = async (payload: RegisterForm, node?: FormKitNode) => {
    await axiosInstance.get('sanctum/csrf-cookie', {
        baseURL: 'http://localhost:8000/'
    });
    try {
        const response = await axiosInstance.post('register', payload)
        router.push("/dashboard")
        console.log(response.data)
    } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 422) {
            node?.setErrors([], e.response.data.errors)
        }
    }
}
</script>

<template>
    <h1 class="text-3xl text-slate-900 p-4">Register</h1>

    <div class="max-w-[24em] mx-auto rounded-lg p-4">
        <FormKit type="form" submit-label="Login" @submit="register">
            <FormKit type="text" label="Name" name="name" />
            <FormKit type="email" label="Email" name="email" />
            <FormKit type="password" label="Password" name="password" />
            <FormKit type="password" label="Password Confirmation" name="password_confirmation" />
        </FormKit>
    </div>
</template>