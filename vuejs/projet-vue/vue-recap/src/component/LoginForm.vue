<template>
  <form @submit.prevent="formSubmit">
    <label for="email">Email</label>
    <input v-model="emailValue" type="text" required id="email" placeholder="exemple@mail.com">
    <p v-if="passwordError">Mot de passe trop court</p>
    <label for="password">Mot de Passe</label>
    <input v-model="passwordValue" id="password" required type="password">
    <button type="submit">Se connecter</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoginForm",
  data(){
    return {
      emailValue: "",
      passwordValue: "",
      passwordError: false,
    }
  },
  methods : {
    formSubmit()
    {
      if (this.passwordValue.length < 3)
      {
        this.passwordError = true;
      }
      else
      {
        this.$emit('dataForm', {
          email: this.emailValue,
          password: this.passwordValue
        })
      }

    }
  }
})
</script>

<style scoped>

</style>