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
// 版本1
// vue2 思想写 vue3 代码  ！！！不推荐！！！
import { ref, reactive } from "vue"; // reactive 复合类型  ref 字符串

export default {
  name: "composition",
  setup() {
    console.log("setup");
    // console.log(this);

    // 1. 展示 模型数据
    var todos = reactive([
      // 不做任何处理的情况下，数据是不具有响应式的
      {
        id: 0,
        title: "吃饭",
      },
      {
        id: 1,
        title: "睡觉",
      },
      {
        id: 2,
        title: "打豆豆",
      },
    ]);

    // 2.新增

    /* 
    
    */
    var title = ref(""); // 对字符串包装
    function saveTodo() {
      console.log("saveTodo");
      console.log(title);
      var temp = { id: todos.length + 1, title: title.value };
      title.value = "";
      todos.push(temp);
    }
    // setup 执行后的 return 值 ，在页面上是可以使用的
    return { todos, title, saveTodo };
  },
};
</script>

<style>
</style> 