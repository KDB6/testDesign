<template>
    <div>
    <p>
      user name =>  {{ user.name  }} / IsLogin  =>  {{ isLogin  }} 
    </p>


    <router-link   to="/home">
         vue 페이지 이동
    </router-link>
  
    </div>
  </template>
  
  <script setup lang="ts">
  
  import { useAuthStore } from "@/store/auth.store"
  import { computed, reactive  } from 'vue';
  
  const state = reactive<{ user: any }>({
    user: {}
  });
  
  console.log("Home page");
  const {  user } = useAuthStore();
  
  const isLogin = computed( () => user.loginId && user.loginId.length > 0 )
 
  
  
  </script>