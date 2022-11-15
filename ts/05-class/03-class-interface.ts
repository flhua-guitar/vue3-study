// 如果一个类的内部存在没有实现的方法，则该方法必须要定义抽象方法，并且该类也必须是抽象类。该抽象类是不能被实例化，只能被其他的类进行继承，然后这个子类需要去实现所有的抽象方法，然后才能实例化
// interface 不光可以约束一个对象，还可以约束一个类的行为

interface Animal{
  say():string;
}

// 现在书写了一个类 必须存在一个say 方法 可以使用一个接口进行约束
// 接口只能被实现

class People1 implements Animal {
  say(): string {
    return "say"
  }
}

let p3 = new People1();
p3.say()