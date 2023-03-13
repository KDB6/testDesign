<template>    
      <div >        
        <v-card class="auth-card">
          <v-alert v-if="isLogin" type="info">
            사용자 {{ user.name }} 로그인 성공하였습니다.
          </v-alert>

          <v-alert v-if="isFailed" type="error">
            사용자 로그인 시도에 실패하였습니다
          </v-alert>

          <!-- logo -->          
          <v-card-title class="d-flex align-center justify-center py-7" color="smpInfo">
            <router-link to="/" class="d-flex align-center">
              <v-img              
                max-height="40px"
                max-width="150px"
                alt="logo"
                contain
                class="me-3"
              ></v-img>
            </router-link>
          </v-card-title>
  
          <!-- title -->
          <v-card-text>
            <p class="text-2xl font-weight-semibold text--primary mb-2">
              방문을 환영합니다.
            </p>
            <p class="mb-2"> 아이디로 로그인하세요. ( manager/123456 )</p>
          </v-card-text>
  
          <!-- login form -->
          <v-card-text>
            <v-form>
              <v-text-field
              v-model="id"
                outlined
                clearable
                label="id"
                placeholder="manager"
                hide-details
                class="mb-3"
              ></v-text-field>
  
              <v-text-field
                v-model="password"
                outlined
                clearable
                type="password"
                label="Password"
                placeholder="123456"             
                hide-details
              ></v-text-field>
  
  
              <v-btn
                block
                color="blue"
                class="mt-6"
                @click="login"
              >
                로그인
              </v-btn>

            </v-form>
          </v-card-text>
        </v-card>
      </div>  
  </template>

<script setup lang="ts">  
  import { useAuthStore } from "@/store/auth.store"
  import { storeToRefs } from "pinia";
  import { ref } from 'vue';
  import { useRouter } from "vue-router";
    
  
  const { signIn, getUser } =  useAuthStore(); // method의 경우에는 그냥 불러오면 된다

  const { isLogin , user } = storeToRefs( useAuthStore() ) ;// 반응형 변수(computed) 인경우에는 destructure를 할경우 반응성이 사라지므로 storeToRefs 를 해야 반응성을 유지한다 

  const id = ref<string>("");
  const password = ref<string>("");

    
  const isFailed = ref<boolean>(false);  
  

  const router = useRouter();
  const login = async () => {
    try {
      console.log( `login : ${id.value}   password : ${password.value}`)
      await signIn(id.value, password.value);
      const result = await getUser();      
      isFailed.value = false;
      router.push("/welcome"); 
    } catch (e) { 
      //alert("로그인에 실패하였습니다. => " + e);
      isFailed.value = true;
    }
  } 
  
  
  </script>