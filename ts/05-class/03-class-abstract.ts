// 如果一个类的内部存在没有实现的方法，则该方法必须要定义抽象方法，并且该类也必须是抽象类。该抽象类是不能被实例化，只能被其他的类进行继承，然后这个子类需要去实现所有的抽象方法，然后才能实例化
abstract class Person {
  name: string;
  age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }

    //  方法实现
  //  say():void{};
   // 抽象方法
  abstract say():void;


}

class Man extends Person {
  say():void{
    console.log(this.name);
  }
}

let man = new Man("leehua",12)
man.say()