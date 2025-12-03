<template>
<div class="wishBar">
  <div class="leftElements">
    <button class="hoverBtn drag-color"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></button>
    <div class="heart-color"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg></div>
    <h3>{{ gift?.label }}</h3>
  </div>
  <div class="rightElements">
    <button class="hoverBtn copy-color" @click="copyLink" v-if="gift?.link !== null"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button>
    <button class="hoverBtn link-color" @click="goToLink" v-if="gift?.link !== null"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></button>
    <button class="hoverBtn edit-color"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg></button>
    <button class="hoverBtn delete-color"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Gift } from '@/class/Gift.ts'

export default defineComponent({
  name: 'WishBar',
  props: {
    gift: Gift
  },
  methods: {
    copyLink()
    {
      if (this.gift)
      {
        navigator.clipboard.writeText(this.gift.link);
      }
    },
    goToLink()
    {
      if (this.gift)
      {
        window.open(this.gift.link, '_blank')?.focus();
      }
    }
  }
})
</script>

<style scoped>
h3{
  color: #000;
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 0 15px;
}
.wishBar{
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(168,168,168,.3607843137);
  border-radius: 15px;
}
.leftElements, .rightElements{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.leftElements{
  justify-content: left;
}
.rightElements{
  justify-content: right;
}
.heart-color{
  color: #f7329a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drag-color{
  color: #2c3e50;
}
.copy-color{
  color: #3498db;
}
.link-color{
  color: #3498db;
}
.edit-color{
  color: #2ecc71;
}
.delete-color{
  color: #e74c3c;
}
.hoverBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: unset;
  border: none;
  padding: 0.5rem;
  border-radius: .4rem;
  transition-duration: .2s;
  &:hover{
    background-color: #3498db33;
    cursor: pointer;
  }
}
</style>
