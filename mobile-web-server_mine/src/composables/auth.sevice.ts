import { onMounted, ref } from 'vue';

//tsconfig.json 에 axio를 사용하도록 함
import axios from '@/common/axios';

//interface 인 경우 import type 으로 import함
import type { AuthDto } from '@/common/types'


const API_URL = "/auth/token";


//vue 에서는 재사용 가능한 모듈을  function 형태로 구현된 모듈을 컴포저블 이라고 사용한다 
//기본적으로 제공하는 컴포저블 모듈은  https://github.com/vueuse/vueuse 참조 한다.
export default function useAuthService() {    
    const BASIC_AUTH_STR = 'Basic ' + btoa('web_monitor' + ':' + 'KDfoi4jef6OIKDJ');
    const headers =          {
        "Authorization": BASIC_AUTH_STR,
        'content-type': 'application/x-www-form-urlencoded'
    };

    //ref (기본 데이터, number, string ) , reactive (배열,객차) 으로 사용할 경우 반응성을 가지게 된다
    //반응성은 값이 바뀔때 binding된 html element가 자동으로 업데이트 됨을 의미한다. ( 또는 이를 사용하는 다른 반응형 변수의 값이 적용됨 )
    const failedCount = ref<number>(0);

    //호출시 로딩 될때 호출되는 초기화 함수 
    onMounted(() => {
        console.log("useAuthService is mounted")
    });
  
    const fetchSignIn = async (loginId: string, password: string) => {
        
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('scope', 'read write');
        params.append('username', loginId);
        params.append('password', password);
        
        try {
            // api호출시에 generic<..> 표현으로 하면 response.data 를 유출하여 사용할수 있나.
            const response = await axios.post<AuthDto>(API_URL, params, { 'headers': headers });                            

            // DTO interface를 쉽게 만들려면 결과를 로그를 찍어 복사한 다음에 https://app.quicktype.io/?l=ts 에서 붙여넣기를 하면 쉽게 만들수 있다 ( 사이트에서 옵션에 typescrip한다음 나머지 옵션을 모두 on 체크 )
            // CamelCase로 변환되니 조심.. (원래 Camel로 API로 리턴해줘야 하나 그렇게 안주는 API도 존재함.)
            console.log(JSON.stringify(response.data) ) ; 
            if (response.status !== 200) {
                const error = response.data && response.data?.message;
                throw (error);
            }

            //ref로 선언된 데이터는 value로 접근해야 한다.
            failedCount.value = 0;

            //성공시 토큰값을 저장하면 이 axios를 통해서 auth 인증만 사용할수 있는 api를 호출할수 있다.
            const token = saveTokenToAxios(response.data);
            return token;
        } catch (e) { 
            failedCount.value++;
            //오류시 처리 
            console.error(e)
            throw e;
        }
    };

    const fetchSignOut = () => {
        delete axios.defaults.headers.common['Authorization'];
        console.log("delete Axios Authorization Header value ")
    };


    //GET test  버전 불러오기 
    const getBinaryInfo = async () => { 

        //axios비동기 호출일 경우 2가지 방식이 있다.
        
        //첫번째 async / await 방식 . 함수 정의에 aync 키워드를 정의한다. async 키워드가 있는 함수는 리턴되는 데이터는 Promise형으로 리턴된다 
        try {
            const result = await axios.get('/app/1/binary-infos')
            console.log("Success result " + result);
            return result.data;
        } catch (e) { 
            console.log(e)
        }

        //두번째 함수 정의에 aync는 필요없이 then,catch 를 상요  . then에서 리턴하는 변수는 리턴되는 데이터는 Promise형으로 리턴된다 
        // axios.get('/app/1/binary-infos').then((result) => {
        //     console.log("Success result " + result);
        //     return result.data;
        // }).catch( (e) => console.log(e));
    }


    const saveTokenToAxios = (data: AuthDto) => {
        const token = data.access_token;
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            console.log( `Set Token ${token} to Axios`)
        }
        return token;
    }


    return {
        fetchSignIn,
        fetchSignOut,
        failedCount,
    };

}
