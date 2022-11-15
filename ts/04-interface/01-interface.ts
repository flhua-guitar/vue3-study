// 需求：希望可以约束一下对象这种数据类型的属性

// 约定俗成： 一般使用interface这个关键字声明的类型，需要加 I 大写
// IPerson 这个代表用户自己扩充了一种新的数据类型

interface IPerson{
  readonly id:number ; // 使用分号  主键id都是不可修改的  readonly  只读
  username: string ; 
  age:number ; 
  salary?:number ;
}

const userInfo:IPerson = {
  id:1,
  username:"lihua",
  age:18
}

const userInfo2:IPerson = {
  id:1,
  username:"lihua",
  age:18,
  salary:8000
}

// userInfo.id =2
let id2 = userInfo.id
id2 = 3
