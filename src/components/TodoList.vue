<template>
    <div>
      <ul>
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" @updateTodo="updateTodo" @deleteTodo="deleteTodo" />
      </ul>
      <todo-form @addTodo="addTodo" />
      
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  import TodoForm from './TodoForm.vue';
  
  export default {
  components: {
    TodoItem,
    TodoForm,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    updateTodo(updatedTodo) {
      const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        // Use Vue.set to ensure reactivity
        Object.assign(this.todos[index], updatedTodo);
      }
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
  },
};
</script>
  