<template>
  <div class="card" :class="[tab?.cssClass, {selected: tab?.id === defaultStore.currentTab}]" @click="changeTab">
    <div class="circle">
      <img :src="'/svg/' + tab?.svg" height="26px" width="26px"/>
    </div>
    <h2>{{ tab?.title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Tab } from '@/class/Tab.ts'
import defaultStore from '@/store/defaultStore.ts'

export default defineComponent({
  name: 'DashboardTab',
  computed: {
    defaultStore() {
      return defaultStore
    }
  },
  props: {
    tab: Tab,
  },
  mounted(): any {
    // console.log(this.tab?.svg);
  },
  methods: {
    changeTab()
    {
      if (this.tab?.id)
      {
        defaultStore.currentTab = this.tab.id;
      }
    }
  }
})
</script>

<style scoped>

  .card.selected:after{
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    bottom: -5px;
    left: calc(50% - 5px);
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.24);
  }
  .card{
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    background-color: #f3f4f6;
    border-radius: .6rem;
    width: 200px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #4d7dff;
    position: relative;

    &:hover, &.selected{
      cursor: pointer;
      transition-duration: .25s;
      transform: scale(1.05);
    }
    &.cad{
      color: #a74eff;
      &:hover, &.selected{
        color: white;
        background: linear-gradient(to right,#a855f7,#ec4899);
      }
    }
    &.grp{
      color: #4d7dff;
      &:hover, &.selected{
        color: white;
        background: linear-gradient(to right,#3b82f6,#14b8a6);
      }
    }
    &.pro{
      color: #42c55a;
      &:hover, &.selected{
        color: white;
        background: linear-gradient(to right,#22c55e,#10b981);
      }
    }
    &.wsh{
      color: #e64b98;
      &:hover, &.selected{
        color: white;
        background: linear-gradient(to right,#ec4899,#ef4444);
      }
    }
  }
  .card h2{
    padding: 0;
    margin: 0;
    font-size: .9rem;
  }

  .circle{
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>
