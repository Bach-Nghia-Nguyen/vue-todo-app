<template>
  <div class="todoWrapper">
    <button class="removeTodo" v-on:click="removeTodo">Remove</button>
    {{ todo.text }}
  </div>
</template>

<script src="./todoItem.js"></script>

<style src="./todoItem.css"></style>
