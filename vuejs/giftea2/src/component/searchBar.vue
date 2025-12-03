<template>
  <div class="searchBar">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" viewBox="0 0 24 24" class="search-icon"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
    <input type="text" :placeholder="placeholder" @input="emitChange" v-model="value">
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "searchBar",
  props: {
    placeholder: String
  },
  data(){
    return{
      value: "",
    }
  },
  methods: {
    emitChange(){
      this.$emit('emitValue', this.value);
    }
  }
})
</script>
<style scoped>
  input{
    padding: .5rem .5rem .5rem 2.5rem;

    width: 100%;
    height: 100%;
    background-color: #f3f3f5;
    color: #3a3a3c;
    border: none;
    border-radius: 5px;

    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  svg{
    position: absolute;
    top: 11px;
    left: 11px;
    color: #86878e;
  }
  .searchBar{
    position: relative;
    width: 100%;
  }
</style>
