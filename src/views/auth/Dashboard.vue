<script setup lang="ts">
import axiosInstance from '@/lib/axios'
import type { User } from '@/types';
import { ref } from 'vue'

const user = ref<User | null>(null);
const getUser = async () => {

    try {
        const response = await axiosInstance.get('user')
        user.value = response.data
    } catch (e) {
        console.log(e)
    }
}
const logout = async () => {

    try {
        const response = await axiosInstance.post('logout')
        user.value = null;
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}

getUser();
</script>

<template>
    <h1 class="text-3xl text-slate-900 p-4">Dashboard</h1>
    <div class="flex items-center justify-between">
        <div>
            <p class="text-lg text-slate-900">Welcome back, {{ user?.name }}</p>
            <p class="text-sm text-slate-900">{{ user?.email }}</p>
        </div>
        <button @click="logout" class="btn btn-primary">Logout</button>
    </div>
</template>