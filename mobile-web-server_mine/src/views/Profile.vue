<template>
  <div class="container">
    <form>
      <div class="profile-container">
        <div class="profile-container-low">
          <div class="profile">
            <v-avatar color="surface-variant" size="80">
              <v-img alt="" src="">{{}} </v-img>
            </v-avatar>
          </div>
          <div class="custom-file">
            <input
              id="customFile"
              type="file"
              ref="file"
              @change="handleFileChange"
              accept="image/*"
            />
            <!-- <label class="custom-file-label" for="customFile">{{file_name}}</label> -->
            <v-btn variant="tonal" @click="submit">사진 변경</v-btn>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import axios from "@/common/axios";
import { profileStore } from "@/store/profile.store";
import { onBeforeMount, onMounted } from "vue";
import { ref } from "vue";

const { getImage, sendImage } = profileStore();

var file_name = "파일을 선택하세요.";
var message = "Hello, world";
var file;
var profileImage = ref();
const accessToken =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNzExNzY5NDgwLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjRiNTZlNDJhLTczMWEtNDNhMC1iMDZkLTAwNDRkNTZmZmU5NyIsImNsaWVudF9pZCI6ImFsb2EtYWRtaW4ifQ.exgBdp1Fyy6XDA8uCEXLzQ93yzPMVrTV8WfeVLEJNEff2UtizdNPNLyX-8eRCkPV9S7W7bxPqiOt1erR_oFfMI16P9gKH0jsUkGanLqVMbsehs-k-Gu3ham9RfU17x5FFKeA3gGvUcgE5ZHoD0Q70rPgqIOXV8szRJKs7wzVThPXTuAKiDAklDix8RNFUCSu2JZNxMpyMCsCsrP13JcscH3xJ6wTeoz3rQFN9yNhEb21Jy-j4sJcCMbrxjuzd-ZDyldlOzTRnhxIscRPFw8cRZNNuqxl4jL0HChV-RQVtwoqhVEvDXe3MdckxPIQSA_zyziu3CqZn9dU958tnpZOFw";

onBeforeMount(async () => {
  const response = await getImage();
  if (!response) {
    alert("Failed to load a pic");
    return;
  } else {
    profileImage.value = response;
    console.log("src : profileImage", profileImage);
  }
}),
  onMounted(async () => {
    profileImage.value = await getImage();
    console.log("profileImage", profileImage);
  });

function handleFileChange(e) {
  file_name = e.target.files[0].name;
  file = e.target.files[0];
  console.log(file_name);
  console.log(file);
}

async function submit() {
  if (!file) return;

  var formData = new FormData();
  formData.append("imageFile", file, file.name);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: accessToken,
    },
  };

  try {
    const response = await axios.put(
      "https://aloa-dev.logisteq.com:7171/api/riders/3743/profile-image",
      formData,
      config
    );

    console.log(response);

    if (!response.data) {
      message = "변경 실패";
      return;
    }

    message = "변경 완료";
    profileImage.value = await getImage();
  } catch (error) {
    console.error(error);
    message = "변경 실패";
  }
}

// async function submit() {
//   if (!file) return;

//   // var frm = new FormData();
//   // frm.append("imageFile", file);

//   console.log(file);

//   const response = await sendImage(file);

//   console.log(response);

//   if (!response) {
//     message = "이미지 변경에 실패하였습니다.";
//     return;
//   }
//   // axios.put('https://aloa-dev.logisteq.com:7171/api/riders/3743/profile-image', frm, {
//   //     headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //         'Accept': '*/*',
//   //         'Authorization': accessToken,
//   //     }
//   // })
//   //     .then((response) => {
//   //         console.log('성공');
//   //     })
//   //     .catch((error) => {
//   //         // 예외 처리
//   //         console.log('실패');
//   //     })
// }
</script>

<style>
.container {
  margin: 30px;
}
.profile-container {
  margin: 5px;
}
.profile {
  margin: 10px;
}
</style>
