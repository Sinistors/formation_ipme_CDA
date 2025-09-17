<template>
<!--  <CounterComponent></CounterComponent>-->
<!--  <CoursVariable></CoursVariable>-->
  <ToDoListComponent></ToDoListComponent>
</template>
<script>
import CoursVariable from '@/Component/CoursVariable.vue'
import CounterComponent from '@/component/CounterComponent.vue'
import ToDoListComponent from '@/component/ToDoListComponent.vue'
export default {
  name: 'App',
  components: { ToDoListComponent, CounterComponent, CoursVariable },
}
</script>
<style scoped></style>
