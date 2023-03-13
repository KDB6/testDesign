<template>
<div class="menu">
    <a @click="goHome"> 홈으로 </a>
    <a @click="goBack"> 뒤로가기 </a>
    <a @click="goNotice"> 공지사항 </a>
</div>
</template>

<script setup lang="ts">
import router from '@/router';
  
function goHome() {
    router.push('/');
}
function goBack() {
    router.go(-1);
}
function goNotice() {
    router.push('menu/notice');
}

</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

</style>