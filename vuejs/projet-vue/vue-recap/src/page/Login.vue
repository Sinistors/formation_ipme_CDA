<template>
  <h1>Login</h1>
  <p v-if="isBadLoggin">Mauvais identifiant ou mot de passe !</p>
  <LoginForm @data-form="handleLoginSubmit"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LoginForm from "@/component/LoginForm.vue";
import axios from "axios";

export default defineComponent({
  name: "Login",
  components: {LoginForm},
  methods: {
    async handleLoginSubmit(data: any)
    {
      try{
        const response = await axios.post(import.meta.env.VITE_API_URL + '/login', data, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        });
        this.isBadLoggin = false;
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      }
      catch (error)
      {
        this.isBadLoggin = true;
      }
    }
  },
  data(){
    return{
      isBadLoggin: false
    }
  }
})
</script>

<style scoped>

</style>