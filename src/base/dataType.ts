// 原始类型
let bool: boolean = true;
let str: string = "abc";
let num: number = 1;

// 数组
let arr1: number[] = [1, 2];
// 联合类型
let arr2: Array<string | number> = [1, "1", 2];

// 元祖: 特殊的数组，限定了数组的个数和类型 不能越界访问
let tuple: [string, number] = ["2", 3];

// 函数 
// 这里可以省略函数返回值类型的定义，ts的类型推断机制会自动推断出什么类型
let add = (a: number, b: number):number => a+b;
let compute : (x: number, y: number) => number;
compute = function(x, y){
    return x + y
}

// 对象
let obj:{x: number, y: number} = {
    x: 1,
    y: 2
}
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

// 定义为undefined和null类型，声明后不能赋值其他类型，只能赋值自身
// 在ts定义中 undefined和null 是任何类型的子类型，可以被赋值给其他类型，需要将strictNullChecks设置为false
let un: undefined = undefined;
let nu: null = null;
s1 = nu;
s2 = null;

// void 表示没有任何返回值的类型
let vo = () => {};
console.log(vo)

// any 任意类型
let x:any;
x = 1;
x = "2";
x = []

// never 不会有任何返回值的类型
// 这个函数每次都会抛出错误，所以它的类型就是never类型
let ne = () => {
    throw new Error("11");
}