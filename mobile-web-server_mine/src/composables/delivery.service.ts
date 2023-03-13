import { onMounted } from "vue";
import axios from "axios";
import { DeliveryListDto } from "@/common/types/deliveryList.dto";

const BASE_URL = "https://aloa-dev.logisteq.com:7171";
// const riderId = 3743; // 강현우
const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU3MTQ5ODcsInVzZXJfbmFtZSI6IjpvYXV0aDpAUklERVJAMzg0N0A1NDIwMSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQVBQIl0sImp0aSI6IjhhNzVlMTdlLTAwMDAtNGY4MC1iOTAxLWU1ZDIyYzMyZGM2MSIsImNsaWVudF9pZCI6ImFsb2EtYXBwIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.hU2P-ZUrIq_YMAyadewScGJtcLzwm7cgRPMt9WwfQo4lDKHbDQtxkGflO1i69Jd2qL31aYB5HxyE_AnMeUXk8M2Rs8ArvwJZR0ijreTJl3Umcd02C9lASUBhvui1ezAqytY8hbbw2nKuokcbxFWFeaQyZ_OpoP_7eYdLxv7aghq21Wx1kMFfR1O1jTvv7eB26_9M516bN3cGq_ukaJ89d_aFbGowRbTKs_vJT51u4XOSPB3UakDWrbBZ4cU_gGO9YIo8ECXrlSuNFSV8lMbmHylkmBIdV7ii1X3Y4aDLk2h8SHUWqLqWmOk95XMirZcUoIlgaJF4Fh0KX9Uox_emDA";

export default function deliveryService() {
    const riderId = 3847; // 김지태

    onMounted(() => {
        console.log("delivery.service.ts"); 
    })

    const getProjectList = async () => {
        try {
            // current: (): Promise<>
            const response = await axios.get<DeliveryListDto>(BASE_URL + '/api/projects?riderId=' + riderId,
                {
                    'headers': { Authorization: 'Bearer' + accessToken },
                }) 
            console.log('response.data : ', response.data);
            return response.data;
        } catch (e) {
            console.log("이슈 발생 : ", e);
        }
    }

    return {
        getProjectList
    }

}