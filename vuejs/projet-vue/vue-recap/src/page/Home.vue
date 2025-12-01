<template>
  <h1>Page de home</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";
import api from "@/api/api";
import apiRoutes from "@/api/routes";
import {jwtDecode} from "jwt-decode";

export default defineComponent({
  name: "Home",
  async mounted(): any {
    const token = localStorage.getItem('token');

    let decoded = jwtDecode(token);

    console.log(decoded);

    // let response = await axios.get(import.meta.env.VITE_API_URL + '/gifts/self-gift',{
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //     "Authorization": 'Bearer ' + token
    //   }
    // })



    let response = await api.get(apiRoutes.selfGift);
    //console.log(response);
  }
})
</script>

<style scoped>

</style>