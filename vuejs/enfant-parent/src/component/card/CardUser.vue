<template>
  <div class="userDiv">
    <img :src="avatarPath">
    <div>
      <div>{{ lastName }} {{ firstName }}</div>
      <div>{{ createdAt }}</div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardUser",
  props: {
    avatarPath: String,
    lastName: String,
    firstName: String,
    createdAt: String
  }
})
</script>

<style scoped>
.userDiv{
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 0.75rem;
}
img{
  width: 30px;
  height: 30px;
}
</style>