<template>
  <form>
    <div class="input-group">
      <label for="email">Email</label>
      <input id="email" required placeholder="caeaux@giftea.com">
    </div>
    <div class="input-group">
      <label for="password">Mot de passe</label>
      <input id="password" type="password" required>
    </div>
    <button type="submit" class="">Se connecter</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoginForm"
})
</script>
<style scoped>
  label{
    display: block;
    text-align: start;
    margin-bottom: 0.2rem;
  }
  form{
    width: 100%;
  }
  .input-group{
    margin-top: 0.5rem;
  }
  input{
    width: 100%;
  }

</style>