<template>
  <div class="rowBetween">
    <div class="tab-header">
      <h1>Mes souhaits</h1>
      <p>Ta liste privée de tout ce qui te fait envie</p>
    </div>
    <div class="header-btns">
      <button @click="downloadExcel">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M6 2H14L18 6V22H6V2Z" stroke="white" stroke-width="2" stroke-linejoin="round"></path><path d="M14 2V6H18" stroke="white" stroke-width="2" stroke-linejoin="round"></path><path d="M12 10V16" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M9 13L12 16L15 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        Télécharger en excel
      </button>
      <button @click="isModal = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4 mr-2" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Nouveau souhait
      </button>
    </div>
  </div>

  <div class="m-y">
    <SearchBar placeholder="Rechercher un souhait..." @emit-value="filterGift" />
  </div>
  <div class="wishList">
    <WishBar v-for="gift in gifts" :gift="gift" />
  </div>

  <Modal v-if="isModal" @close-modal="closeModal">
    <template #modal-header>
      <h2>Ma modale</h2>
    </template>
  </Modal>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import WishBar from '@/component/WishBar.vue'
import defaultStore from '@/store/defaultStore.ts'
import SearchBar from '@/component/searchBar.vue'
import {Gift} from '@/class/Gift.ts'
import apiRoutes from '@/api/routes.ts'
import api from '@/api/api.ts'
import Modal from '@/component/Modal.vue'

export default defineComponent({
  name: "Wishes",
  computed: {
    defaultStore() {
      return defaultStore
    }
  },
  data(){
    return{
      gifts: [] as Array<Gift>,
      isModal: false
    }
  },
  methods: {
    filterGift(value: string)
    {
      if (value === "")
      {
        this.gifts = defaultStore.selfGifts;
      }
      else
      {
        const newArray = [] as Array<Gift>;
        for (const item of defaultStore.selfGifts)
        {
          if (item.label.toLowerCase().includes(value))
          {
            newArray.push(item);
          }
        }
        this.gifts = newArray;
      }
    },
    async downloadExcel()
    {
      const response = await api.post(apiRoutes.selfGiftExcel, this.getSelfGiftIds(), { responseType: 'blob' });

      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', 'gift.xlsx'); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    },
    getSelfGiftIds()
    {
      const object = {ids: [] as Array<number>};
      object.ids = [];
      for (const gift of defaultStore.selfGifts)
      {
        object.ids.push(gift.id);
      }
      return object;
    },
    closeModal()
    {
      this.isModal = false;
    }
  },
  mounted() {
    this.gifts = defaultStore.selfGifts;
  },
  components: { Modal, SearchBar, WishBar }
})
</script>

<style scoped>
.wishList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.m-y {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.rowBetween{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header-btns{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.header-btns svg{
  width: 1rem;
  height: 1rem;
}
.header-btns button{
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 2.25rem;
  border-radius: .375rem;
  font-size: .875rem;
  font-weight: 500;
  font-family: inherit;
  transition: all .2s ease;
  border: 0;
  color: #fff;
  background: linear-gradient(to right,#ec4899,#a855f7);
  &:hover{
    background: linear-gradient(to right,#db2777,#9333ea);
    cursor: pointer;
  }
}
</style>
