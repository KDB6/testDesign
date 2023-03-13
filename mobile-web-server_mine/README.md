# 하이브리드용 모바일 관제 웹 서버 

## 프로젝트 세팅

```
# 노드 버전 18 이상을 권장함( 이전 버전일 경우 새로 설치 ) 
node -v
v18.xx.xx

# 빌드 
npm install

```

### 프로젝트 실행

```

# npm
npm run dev


```

브라우저에서 아래 주소로  접속

http://localhost:3000/

### 배포시 빌드 

```

# npm
npm run build


```

### Lints and fixes files

```

# npm
npm run lint


### Lints and fixes files

```



# 기반 기술 
```
### Vue.js 3 : Composition script setup 
https://vuejs.org/

### 상태 관련 라이브러리 : pinia
https://pinia.vuejs.org/

### Bundling Tool : vite
https://vitejs.dev/

### UI Framework : vuetify 3
https://next.vuetifyjs.com

### Language : typescript
https://www.typescriptlang.org/

### Composition Utilities : vueuse
https://vueuse.org/


```

# 참고 사항 
```
- Vue.js의 composition 구성에서 this는 사용하지 않습니다. 역시 $route ,$store 등도 사용을 하지 않습니다.

현재 각 폴더별 역활은 아래와 같습니다. ( 원하는 대로 변경해주세요 )
- layouts  각 페이지를 구분짓는 Vue 컴포넌트 정의

- view     부분(Header,Footer)등을 제외하고 페이지 내에 변경되는 컴포넌트

- components    view를 구성하는 UI 컴포넌트 
- store    pinia에 저장되는 상태 관리및 module 별 API 정의

- composables   유틸리티 함수,  예)백엔드와 통신을 담당하는 composable 

- routes   경로 (routes) 관련 

- common 공통 기능 정의. types - 공통 인터페이스 dto 등 정의 


```
