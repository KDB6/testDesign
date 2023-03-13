import { ref ,reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import useAuthService from '@/composables/auth.sevice';
import useAdminService from '@/composables/admin.service';
import { useLocalStorage } from '@vueuse/core'

type User = {
    bizId?: number,
    name?: string,
    loginId?: string,
}

//chrome extension에서 Vue.js devtools beta 플러그인 설치시 pinia 값 확인 가능
export const useAuthStore = defineStore('auth', () => {

    //store에서 저장되는 data에 해당하는 부분. ref, reactive로 정의한다. 
  const token = ref<string | undefined>(undefined);
  
  //const user = reactive<User>({});
  //로그인 정보는 localStorage에 저장하기 위해서 useLocalStorage 로 감싸준다  
  const user = useLocalStorage<User>('user', {});

    //computed 는 getter에 해당한다 
  const isLogin = computed( () => user.value.loginId && user.value.loginId.length > 0 )

    //외부 컴포저블을 사용하여 data를 업데이트 한다. 
  const { fetchSignIn, fetchSignOut } = useAuthService();
  const { fetchGetUser } = useAdminService();

    // function은 action에 해당하며 따로 mutation은 존재하지 않는다.
  async function signIn( loginId , password ) {
      token.value = await fetchSignIn(loginId, password);
      return token;
  }
   
  async function signOut() {
      fetchSignOut();
      token.value = undefined;
      user.value.bizId = undefined;
      user.value.name = undefined;
      user.value.loginId = undefined;        
  }

  async function getUser () {
      const data = await fetchGetUser();        
      user.value.name = data?.name;
      user.value.loginId = data?.loginId;
      user.value.bizId = data?.companyId;
      return user;
  }

  return {
    signIn,
    signOut,
    getUser,
    isLogin,
    user,
  }
})
