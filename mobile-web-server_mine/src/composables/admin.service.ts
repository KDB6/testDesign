import { onMounted } from 'vue';

import axios from '@/common/axios';
import { UserInfoDto } from '@/common/types/user-info.dto';


const API_URL = '/admin';

export default function useAdminService() {

    onMounted(() => {
        console.log("useAdminService is mounted")
    });

    async function fetchGetUser() {
        try {
            const response = await axios.get<UserInfoDto>(API_URL + '/my-info');
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (e) { 
            console.warn("fetchGetUser Error " + e);
        }
    }

    return {
        fetchGetUser
    }

}
