<template>
    <li>
      <span v-if="!editing" class="todo-text">{{ todo.text }}</span>
      <input v-model="editedText" v-if="editing" @keyup.enter="saveTodo" @blur="saveTodo" class="edit-input" />
      <button @click="toggleEditing" class="edit-btn">{{ editing ? 'Save' : 'Edit' }}</button>
      <button @click="deleteTodo" class="delete-btn">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object,
    },
    data() {
      return {
        editing: false,
        editedText: this.todo.text,
      };
    },
    methods: {
      toggleEditing() {
        this.editing = !this.editing;
      },
      saveTodo() {
        if (this.editedText.trim() !== '') {
          const updatedTodo = { ...this.todo, text: this.editedText };
          this.$emit('updateTodo', updatedTodo);
          this.toggleEditing();
        }
      },
      deleteTodo() {
        this.$emit('deleteTodo', this.todo.id);
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    list-style-type: none;
    margin: 0px 250px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  
  .todo-text {
    flex-grow: 1;
    margin-right: 10px;
  }
  
  .edit-input {
    flex-grow: 1;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  
  .edit-btn, .delete-btn {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .edit-btn {
    margin-right: 5px;
  }
  
  .delete-btn {
    background-color: #e74c3c;
  }
  </style>
  