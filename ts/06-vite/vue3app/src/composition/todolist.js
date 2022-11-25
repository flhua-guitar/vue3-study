import { reactive } from "vue";

function todoListFn() {
  var todos = reactive([
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
  return todos;
}

export default todoListFn;
