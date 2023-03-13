// Composables
import { useAuthStore } from '@/store/auth.store';
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

interface RouteInfo  {
  fullPath: string;  
  meta?: { requiresAuth?: boolean, authorization?: string[] }
}

router.beforeEach(( to:Partial<RouteInfo>, from: Partial<RouteInfo> , next) => {
  
  console.log(`[Route] router : ${from.fullPath}  auth : ${to?.meta?.requiresAuth} =>   ${to.fullPath}`)
  
  //optional chaining ?.  => 설명  (  ?. 앞의 변수 값이 undefined(또는 null)이면   undefined을 리턴함. )
  // ?? 왼쪽이 undefined또는 null이면 ?? 의  오른쪽 값을 취함 
  //  '||'와 유사한데  0, false 값도 undefined, null 과 동일하게 처리되어서 ?? 
  const isNeedAuth = to?.meta?.requiresAuth ?? true

  //인증이 필요한 페이지인 경우 로그인 정보가 없을때 로그인 화면으로 가도록 한다 
  if (isNeedAuth === true) {    
    const { isLogin } = useAuthStore();//로그인 여부를 검사하여 로그인 되지 않았을 경우 로그인 페이지로 이동한다 
    console.log(`[Route] isLogin : ${isLogin}  `);
    if ( isLogin ) {
      next();
    } else {
      console.log(`[Route] 로그인 되지 않았습니다. 해당 페이지 ${to.fullPath} 에 접근할수 없습니다. 로그인 페이지로 이동합니다`);
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
    
  } else { //인증이 필요 없을때는 페이지 이동한다 
    next();    
  }
});


export default router
