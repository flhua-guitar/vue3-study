<template>
  <div>
    <h2>Vue3 的组合特性</h2>

    <input type="text" v-model="title" @change.13="saveTodo" />
    <div v-for="item in todos">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
// 版本2
// 模块化思想写 vue3 代码  ！！！推荐！！！
import saveTodoFn from "../composition/saveTodo";
import todoListFn from "../composition/todolist";

export default {
  name: "composition",
  setup() {
    // console.log("setup");

    const todos = todoListFn();

    let { title, saveTodo } = saveTodoFn(todos);

    return { todos, title, saveTodo };
  },
};
</script>

<style>
</style> 