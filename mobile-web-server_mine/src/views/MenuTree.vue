<template>
    <div class="container">
        <div class="title">
            <h3>고객센터</h3>
        </div>
        <div class="menu-link">
            <router-link to="/menu/notice">공지사항</router-link>
        </div>
        <div class="menu-link">
            <router-link to="/menu/profile">프로필</router-link>
        </div>
        <div class="menu-link">
            <!-- <router-link to="/">서비스 약관</router-link> -->
            <!-- <a href="https://www.logisteq.com/terms_of_use.html">서비스 약관</a> -->
            <a href="">서비스 약관</a>
        </div>
        <div class="menu-link">
            <router-link to="/">뒤로 가기</router-link>
        </div>
    </div>
  
</template>

<script setup lang="ts">

</script>

<style>
.container {
    padding: 40px;
}
.title {
    padding: 20px;
}
.menu-link {
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>