// 类就是一个模板，用于实例化生成对象

// es5构造函数，用于实例化对象
function People(name,age){
  this.name = name;
  this.age = age;

  this.say = function(){
    console.log(this.name+this.age);
  }
}

let p1 = new People("lihua",18);
