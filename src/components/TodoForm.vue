
<template>
    <div>
      <input v-model="newTodoText" class="todo-input" placeholder="Add a new todo" />
      <button @click="addNewTodo" class="add-btn">Add Todo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodoText: '',
      };
    },
    methods: {
      addNewTodo() {
        const newTodo = {
          id: Date.now(),
          text: this.newTodoText,
        };
        this.$emit('addTodo', newTodo);
        this.newTodoText = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .todo-input {
    padding: 8px;
    width: 60%;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
  }
  
  .add-btn {
    background-color: #2ecc71;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 3px;
  }
  </style>
  