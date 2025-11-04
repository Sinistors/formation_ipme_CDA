<template>
  <main>
    <div class="cardlist">
      <Card
          v-for="card in cards"
          :img-path="card.imgPath"
          :title="card.title"
          :tag="card.tag"
          :description="card.description"
          :avatar-path="card.user.avatarPath"
          :last-name="card.user.lastName"
          :first-name="card.user.firstName"
          :created-at="card.createdAt"
      >
      </Card>
    </div>

  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Card from "@/component/card/Card.vue";

export default defineComponent({
  name: "CardList",
  components: {Card},
  data(){
    return{
      cards: [
        {
          imgPath: 'bg_lg_1.webp',
          title: "What's new in 2022 Tech",
          tag: "Technology",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu quam eu odio laoreet sodales. Sed sed mollis massa, quis porttitor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          user:{
            avatarPath: "profile_1.png",
            lastName: "Miller",
            firstName: "Ryan",
          },
          createdAt: "2h ago"
        },
        {
          imgPath: 'bg_xs_1.jpeg',
          title: "Delicious Food",
          tag: "Food",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu quam eu odio laoreet sodales. Sed sed mollis massa, quis porttitor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          user: {
            avatarPath: "profile_2.jpeg",
            lastName: "Johnson",
            firstName: "Emma",
          },
          createdAt: "Yesterday"
        },
        {
          imgPath: 'bg_xs_2.jpeg',
          title: "Race To Your Heart Content",
          tag: "Automobile",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu quam eu odio laoreet sodales. Sed sed mollis massa, quis porttitor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          user: {
            avatarPath: "profile_3.png",
            lastName: "Brooks",
            firstName: "Olivia",
          },
          createdAt: "2d ago"
        },
      ]
    }
  }
})
</script>

<style scoped>
 main{
   background-color: #0ab0da;
 }
 .cardlist{
   display: flex;
   flex-direction: row;
   gap: 1rem;
   padding: 2rem;
 }
</style>