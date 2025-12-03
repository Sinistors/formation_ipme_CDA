<template>
  <div class="modal-mask">
    <div class="modal">
      <div class="modal-header">
        <button @click="closeModal" class="closeBtn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg></button>
        <slot name="modal-header"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  mounted() {
    document.body.classList.toggle('remove-scrolling');
  },
  unmounted() {
    document.body.classList.toggle('remove-scrolling');
  },
  methods: {
    closeModal()
    {
      this.$emit('closeModal');
    }
  }
})
</script>

<style scoped>
.modal-mask {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  left: 0;
  top: 0;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  background-color: white;
}

.modal-header{
  position: relative;
}
.closeBtn{
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
