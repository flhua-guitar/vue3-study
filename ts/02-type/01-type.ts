// 1.声明了一个字符串类型，该变量只能存放字符类型
let username:string = 'caoyang'


// username = 12;
// username = true;

// 布尔类型 true  false 。 之前听过非0的值为真；0为假
let isDone:boolean = true;

// isDone = 12;
// isDone = '';

// 数字类型
let number1:number = 123;
 
number1 = 12.45;
//  number1 = '123';

// 方式一
// 数组一类数据的集合 number[] 代表现在声明一个数组，数组的元素是数字类型
let numberArr:number[] = [1,2,3,4,5];

// 方式二
// 数组一类数据的集合 Array<string> 代表现在声明一个数组，数组的元素是字符串类型
let numberArrNews:Array<string> = ['1','2','3','4','5'];

// 需求:需要把不同的数据类型的元素放置在一个容器里面该如何处理？
// 可以使用一个种新的数据类型，元祖，可以在一个容器里面存放多种数据类型
// string number boolean 传统方式只能通过对象

/* var userinfo = {
  id:12,
  name:'caoyang',
  age:18,
  isAdult:false,
} */

// var userInfoTyple = [12,'andy',23,true]; // 普通的js
// 数组里面若果指定了类型，则这种方式叫做元祖。python 里面有元祖
let userinfoType:[number,string,number,boolean] = [12,'andy',23,true]; // ts

// 元祖的用法上和数组类型(JavaScript里面的数组元素是可以不同类型的)

let isNull:null = null;

let isUndefined = undefined;

// null 和 undefined 是任意类型的子类型

let noSure:number | null;  // 包含null的number类型

noSure = null;

// 任意类型 一般来说尽量不要再ts里面使用any
let noVar:any =12;
noVar = 'andy'
noVar = true;

// 类型推导，如果一个变量在声明的时候没有给类型，则该变量的类型，取决于所赋值的值得类型

let noType = 12; // noType:number
// noType = false


// 联合声明 希望一个变量可以存放几种数据类型
let noSureVar:boolean|string|null; // boolean number null

noSureVar = true;
noSureVar = "andy";
noSureVar = null;
// noSureVar = 12;

let test:number = 123123;




