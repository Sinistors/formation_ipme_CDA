<template>
  <h1>Todo list component</h1>
  <input v-model="inputText" />
  <button @click="addTask">Add task</button>
  <p>Nombre de tache à faire : {{ taskDoneCount }}</p>
  <div>
    <transition-group name="list" tag="ul" class="taskList">
      <li class="task" @click="checkTask(task)" :class="{ taskDone: task.isDone }" v-for="(task, index) in tasks" :key="index">
        {{ task.text }}
        <button @click="removeTask(index)">Supprimer</button>
      </li>
    </transition-group>
  </div>
</template>
<script>
import { Task } from '@/class/Task.js'

export default {
  name: 'ToDoListComponent',
  data() {
    return {
      inputText: '',
      tasks: [],
    }
  },
  computed: {
    taskDoneCount()
    {
      let count = 0;
      for (const task of this.tasks)
      {
        if (!task.isDone)
        {
          count++;
        }
      }
      return count;
    }
  },
  methods: {
    addTask()
    {
      let task = new Task();
      task.text = this.inputText
      this.tasks.push(task)
    },
    checkTask(task)
    {
      task.isDone = !task.isDone;
    },
    removeTask(id)
    {
      this.tasks.splice(id, 1);
    }
  },
}
</script>
<style scoped>
.taskDone {
  text-decoration: line-through;
  background-color: red;
}
.task{
  list-style: none;
  padding: 1rem;
  border: 1px solid black;
}
.taskList{
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
