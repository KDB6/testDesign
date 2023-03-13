<template>    
    <div >        
        <v-card>
            {{ user.name }} 님 방문을 환영합니다
          <p>
            <router-link to="/home">페이지 이동 Vue.js</router-link>
          </p>
          <p>
            <router-link to="/home/test">페이지 이동 Test</router-link>
          </p>
          <p>
            <router-link to="/menu/notice">페이지 이동 Notice</router-link>
          </p>
          <p>
            <router-link to="/menu">페이지 이동 Menu</router-link>
          </p>
          <p>
            <router-link to="/fileupload">페이지 이동 Fileupload</router-link>
          </p>

            <v-btn 
              block
              color="red"
              class="mt-6"
              @click="logOut">
              로그아웃
            </v-btn>

          
        
      </v-card>
    </div>  
</template>

<script setup lang="ts">  
import { useAuthStore } from "@/store/auth.store"
import { storeToRefs } from "pinia";  
import { useRouter }  from "vue-router";


const {  signOut } =  useAuthStore(); // method의 경우에는 그냥 불러오면 된다
const { user } = storeToRefs(useAuthStore());// 반응형 변수(computed) 인경우에는 destructure를 할경우 반응성이 사라지므로 storeToRefs 를 해야 반응성을 유지한다 

const router = useRouter();
const logOut = () => {    
    signOut();
    router.push("/login");
};



</script>/