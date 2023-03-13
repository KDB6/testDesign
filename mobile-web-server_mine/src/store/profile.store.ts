import profileService from "@/composables/profile.service";
import { defineStore } from "pinia";

export const profileStore = defineStore("profile", () => {
  const { getProfileImage, sendProfileImage } = profileService();

  async function getImage() {
    const response = await getProfileImage();
    return response.data;
  }

  async function sendImage(file) {
    const response = await sendProfileImage(file);
    return response;
  }

  return {
    getImage,
    sendImage,
  };
});
