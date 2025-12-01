<template>
  <h1>Les promises :</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Promise",
  async mounted() {
    console.log("Bienvenue sur promise");
    // let test = this.sleep(false).then((data: any) => {
    //   console.log(data);
    // }).catch((error:any) => {
    //     console.log("erreur");
    // })
    // ;
    // console.log(test);
    try {
      let data = await this.sleep(false);
      console.log(data);
    }
    catch (error: any)
    {
      console.log("non");
    }

    //@ts-ignore
    const array = await Promise.all([
        this.sleep(true),
        this.sleep(true),
        this.sleep(true),
    ]);

    console.log(array);
  },
  methods: {
    sleep(status: boolean)
    {
      //@ts-ignore
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (status === true)
          {
            resolve("allo");
          }
          else
          {
            reject('rejected');
          }
        }, 2000);
      })
    }
  }
})
</script>
<style scoped>

</style>