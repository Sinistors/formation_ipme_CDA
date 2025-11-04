<template>
  <main class="container">
    <div class="login-page">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
        <span class="gradient-title">Giftéa</span>
      </h1>
      <h2>Ne perd plus tes idées de cadeaux !</h2>
      <p>Crée tes groupes, ajoute tes proches et conserve
        toutes tes idées de cadeaux au même endroit.</p>
      <img src="https://giftea.jp-dev.fr/assets/gift_1-f2ajdsyA.jpeg" class="gift-img">
      <div class="form-container">
        <p>Rejoins Giftéa</p>
        <div class="loginBtns">
          <button>Connexion</button>
          <button>Inscription</button>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LoginForm from "@/component/LoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {LoginForm}
})
</script>

<style scoped>
  h1 svg{
    color: #f6339a;
    width: 60px;
    height: 60px;
  }
  h1{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
  }
  .gradient-title{
    font-weight: 400;
    background: linear-gradient(to right,#ec4899,#a855f7,#3b82f6);
    background-clip: text;
    color: transparent;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .login-page{
    max-width: 540px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  .gift-img{
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 4px 15px #00000040;
  }
  .form-container{
    margin-top: 1.5rem;
    max-width: 550px;
    width: 100%;
    background-color: #fef8ff;
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px #0000001a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>