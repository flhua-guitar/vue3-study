import { ref } from "vue";
function saveTodoFn(todos) {
  // 2.新增
  var title = ref(""); // 对字符串包装
  function saveTodo() {
    console.log("saveTodo");

    var temp = { id: todos.length + 1, title: title.value };
    title.value = "";
    todos.push(temp);
  }

  return { saveTodo, title };
}
export default saveTodoFn;
