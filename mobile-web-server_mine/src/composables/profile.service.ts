import axios from "axios";


const BASE_URL = "https://aloa-dev.logisteq.com:7171";
const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNzExNzY5NDgwLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjRiNTZlNDJhLTczMWEtNDNhMC1iMDZkLTAwNDRkNTZmZmU5NyIsImNsaWVudF9pZCI6ImFsb2EtYWRtaW4ifQ.exgBdp1Fyy6XDA8uCEXLzQ93yzPMVrTV8WfeVLEJNEff2UtizdNPNLyX-8eRCkPV9S7W7bxPqiOt1erR_oFfMI16P9gKH0jsUkGanLqVMbsehs-k-Gu3ham9RfU17x5FFKeA3gGvUcgE5ZHoD0Q70rPgqIOXV8szRJKs7wzVThPXTuAKiDAklDix8RNFUCSu2JZNxMpyMCsCsrP13JcscH3xJ6wTeoz3rQFN9yNhEb21Jy-j4sJcCMbrxjuzd-ZDyldlOzTRnhxIscRPFw8cRZNNuqxl4jL0HChV-RQVtwoqhVEvDXe3MdckxPIQSA_zyziu3CqZn9dU958tnpZOFw";
const riderId = 3743

export default function profileService() {

    const getProfileImage = async () => {
        try {
            const response = await axios.get(BASE_URL + '/api/riders/' + riderId + '/profile-image',
                { 'headers': { Authorization: 'Bearer' + accessToken } }
            )
            console.log('response', response);
            return response.data;
        } catch (e) {
            console.log('error', e);
        }
    }

    const sendProfileImage = async (image) => {
        // try {
        //     const response = await axios.put('https://aloa-dev.logisteq.com:7171/api/riders/3743/profile-image', image, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             'Accept': '*/*',
        //             'Authorization': 'Bearer' + accessToken,
        //         }
        //     })
        //     console.log('response', response);
        //     return response;
        // } catch (e) {
        //     console.log('error', e);
        // }
        axios.put('https://aloa-dev.logisteq.com:7171/api/riders/3743/profile-image', image, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': '*/*',
                    'Authorization': 'Bearer' + accessToken,
                }
        })
            .then((reponse) => {
                console.log('성공');
            })
            .catch((error) => {
                console.log('error', error);
        })
    }

    return {
        getProfileImage,
        sendProfileImage,
    }
}