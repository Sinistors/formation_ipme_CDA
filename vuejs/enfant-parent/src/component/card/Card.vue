
<template>
  <div class="card">
    <CardImage :img-path="imgPath"></CardImage>
    <div class="space-between">
      <CardContent
          :description="description"
          :title="title"
          :tag="tag"
      >
      </CardContent>
      <CardUser
          :avatar-path="avatarPath"
          :last-name="lastName"
          :first-name="firstName"
          :created-at="createdAt"
      >
      </CardUser>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CardImage from "@/component/card/CardImage.vue";
import CardContent from "@/component/card/CardContent.vue";
import CardUser from "@/component/card/CardUser.vue";

export default defineComponent({
  name: "Card",
  components: {CardUser, CardContent, CardImage},
  props: {
    imgPath: String,
    title: String,
    tag: String,
    description: String,
    avatarPath: String,
    lastName: String,
    firstName: String,
    createdAt: String
  }
})
</script>

<style scoped>
  .card{
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 400px;

    border-radius: 1rem;
    background-color: white;
  }
  .space-between{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>