import AppHeader from "./components/AppHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      todos: [
        { id: 0, text: "Make dinner tonight!" },
        { id: 1, text: "Fold the laundry." },
        { id: 2, text: "Learn to make a Vue app!" },
      ],
      nextId: 3,
    };
  },
  methods: {
    uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    addTodo(text) {
      this.todos.push({ id: this.nextId, text: text });
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id !== id);
    },
  },
};
