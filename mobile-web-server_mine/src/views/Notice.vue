<template>
    <div class="board-group">
        <div class="head">
            <button class="w-btn-pin" @click="goBack">뒤로 가기</button>
        </div>
        <div class="serach-group">
            <select class="selectType">
                <option selected>전 체</option>
                <option value="">배 차</option>
                <option>결 제</option>
                <option>기 타</option>
            </select>
            <div class="emptySpace"></div>
            <!-- <v-text-field class="searchText"></v-text-field> -->
                <!-- <input type="text" class="searchText"></input> -->
                <input type="text" class="searchText" id="name" name="name" required
       minlength="4" maxlength="8" size="10">
            <button class="searchButton" elevation="2"> 검색 </button>
        </div> 
        <!-- <div class="board-write">
            <select class="selectType">
                <option>공 지</option>
            </select>
        </div> -->
        <div class="board-list">
            <table class="bluetop">
                <tr>
                    <th>번 호</th>
                    <th class="text-center">프로젝트명</th>
                    <th class="text-center">차량 ID</th>
                    <th class="text-center">업데이트 시간</th>
                </tr>
                <tr v-for="project in list" :key="project">
                    <td>{{  }}</td>
                    <td>{{ project.name }}</td>
                    <td>{{ project.vehicleId }}</td>
                    <td>{{ project.updateAt }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { deliveryStore } from "@/store/delivery.store";
import { storeToRefs } from "pinia";
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import axios from "@/common/axios";

const { getList } = deliveryStore();
const router = useRouter();

let list: any = ref([]);

onMounted(async () => {
    list.value = await getList();
})

function goBack() {
    router.go(-1);
}

</script>

<style>
.head {
    /* padding-top: 30px; */
    padding-left: 20px;
    padding-top: 10px;
}
.board-group {
    /* padding: 30px; */
}
.serach-group {
    padding: 40px;
    display: flex;
}
.board-write {
    padding: 30px;
}
.selectType {
    flex: 1;
    width: 100px;
    height: 35px;
    text-align: center;
    border-color: gray;
    border: 1px;
    background-color: lightgray;
}
.emptySpace {
    flex: 3;
}
.searchText {
    flex: 1;
    padding: 20px;
    margin-right: 25px;
    border-color:#0982f0;
    width: 200px;
    height: 60px;
}
.searchButton {
    flex: 1;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-right: 20px;
}
input {outline:2px solid #0982f0;}

/* 테이블 */
.board-list { 
    padding: 30px;
    width: 100%;
    /* margin: auto; */
}
.bluetop {
    width: 100%;
  border-collapse: collapse;
  border-top: 3px solid #168;
}  
.bluetop th {
  color: #168;
  background: #f0f6f9;
}
.bluetop th, .bluetop td {
  padding: 13px;
  border: 1px solid #ddd;
}
.bluetop th:first-child, .bluetop td:first-child {
  border-left: 0;
}
.bluetop th:last-child, .bluetop td:last-child {
  border-right: 0;
}

/* button */
button{
  background:#1AAB8A;
  color:#fff;
  border:none;
  position:relative;
  height:60px;
  font-size:1.6em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
button:hover{
  background:#fff;
  color:#1AAB8A;
}
button:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,button:hover:after{
  width:100%;
  transition:800ms ease all;
}

</style>