import { notStrictEqual } from 'assert';

// 페이지 경로 맵핑
const routes = [
    {
        path: '/',
        redirect: 'welcome',        
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/layouts/LogIn.vue'),
        meta: {//로그인 페이지는 auth가 필요 없음
            requiresAuth: false,
        },
    },
    {
        path: '/welcome',        
        component: () => import('@/layouts/Welcome.vue'),    
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/home',
        component: () => import('@/layouts/Default.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                name: 'home',            
                component: () => import( '@/views/Home.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: 'test',
                name: 'test',            
                component: () => import('@/views/Test.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
    // {
    //     path: '/notice',
    //     name: 'notice',
    //     component: () => import('@/layouts/Notice.vue'),
    //     meta: {
    //     requiresAuth: true,
    //     },                
    // },
    {
        path: '/menu',
        component: () => import('@/layouts/BoardDefault.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
          {
            path: '',
            name: 'menu',
            component: () => import('@/views/MenuTree.vue'),
            meta: {
                requiresAuth: true,
            },
          },
            {
                path: 'notice',
                name: 'notice',
                component: () => import('@/views/Notice.vue'),
                // component: '@/views/Notice.vues',
                meta: {
                    requiresAuth: true,
                },
                // children: [
                //     {
                //         path: '',
                //         name: 'notice'
                //     }
                // ]
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('@/views/Profile.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: '/fileupload',
                name: 'fileupload',
                component: () => import('@/layouts/Fileupload.vue'),
                meta: {
                    requiresAuth: true,
                },
            }
        ],
    },
    // {
    //     path: '/fileupload',
    //     name: 'fileupload',
    //     component: () => import('@/layouts/Fileupload.vue'),
    //     meta: {
    //         requiresAuth: true,
    //     },
    // },
];

export default routes;
