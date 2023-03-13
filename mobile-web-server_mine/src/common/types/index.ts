//import할때 한줄로 표현하기 위해서 index.ts에 내보낼 파일을 적어주고 아래 와 같이 임포트 한다

//import {AuthDto} from '@/types/auth.dto'  => X
//import {UserInfoDto} from '@/types/user-info.dto'  => X

//import {AuthDto,UserInfoDto} from '@/types'  => O


export * from "./auth.dto"
export * from "./user-info.dto"
export * from "./deliveryList.dto"