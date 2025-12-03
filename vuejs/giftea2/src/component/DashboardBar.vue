<template>
  <div class="dashBar">
    <div class="leftElement">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
      <div class="titleContainer">
        <h1>Giftea</h1>
        <p>Salut {{ username }} ! 👋</p>
      </div>
    </div>
    <div class="rightElement">
      <button class="disconnect-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" viewBox="0 0 24 24"><path d="m16 17 5-5-5-5M21 12H9M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
        <span>Déconnexion</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { jwtDecode } from 'jwt-decode';

export default defineComponent({
  name: 'DashboardBar',
  data(){
    return {
      username: ""
    }
  },
  mounted(): void{
    const token = localStorage.getItem('token');
    if (token)
    {
      const jwtDecoded = jwtDecode(token);
      this.username = jwtDecoded.fullName;
    }

  }
})
</script>


<style scoped>
  .dashBar{
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right,#ec4899,#a855f7,#3b82f6);
    color: #fff;
    box-shadow: 0 8px 14px #0000002b;
  }
  .leftElement{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.75rem;
  }
  .leftElement svg{
    width: 35px;
    height: 35px;
  }
  .titleContainer{
    width: auto;
  }
  .titleContainer h1{
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    font-weight: normal;
  }
  .titleContainer p{
    font-size: 1rem;
    padding: 0;
    margin: 0;
  }
  .disconnect-btn{
    background: none;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: .5rem;
    padding: .6rem;
    border-radius: .5rem;
    transition-duration: .4s;
    font-size: .9rem;
    &:hover{
      background-color: #ffffff1f;
    }
  }
</style>
