<template>
    <form>
        <div id="app">
            <div class="custom-file">
                <input id="customFile" type="file" ref="file" @change="handleFileChange"/>
                <label class="custom-file-label" for="customFile">{{file_name}}</label>
                <button style="outline: auto;" @click="submit">submit</button>
            </div>
        </div>
    </form>

</template>

<script setup lang="ts">
import axios from "@/common/axios";

var file_name = "파일을 선택하세요.";
var message = "Hello, world";
var file;

function handleFileChange(e) {
    file_name = e.target.files[0].name;
    file = e.target.files[0];
}

function submit() {

}
</script>

<style>

</style>
