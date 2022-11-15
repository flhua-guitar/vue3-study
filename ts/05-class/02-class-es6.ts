// 类就是一个模板，用于实例化化生成对象。
//  js 弱语言，对面向对象的支持不是很友好；面向对象：封装，继承，多态
class People2{
  name:string;
  age:number;

  // static 代表该属性是静态，只能被当前的类使用，实例对象没办法使用
  static type:string = "Human"
  // 静态方法
  static fn(){
    console.log(this.type);
  }
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }

  // 方法默认是public代表的含义是外部可以被访问
  // private意味着外部和继承的类都不可以使用，只能在自己内部使用
  private say(){
    console.log(this.name+this.age);
  }
  sayHi(){
    // 内部
    this.say()
  }
}

// es6 里面类的写法 只是es5里面构造函数的语法糖

let p2 = new People2("lihua",18);
console.log(People2.type);
People2.fn()

// p2.say()
p2.sayHi()


// extends 继承

// 
class Coder extends People2{
  // 继承如果自己有constructor 手工调用super
  constructor(name:string,age:number,height:number){
    super(name,age)
  }
  work(){
    this.sayHi()
    console.log(this.name+"is working");
  }
}

let C2 = new Coder("xiaocai", 12,1.8)
console.log(C2.age);
C2.sayHi()
