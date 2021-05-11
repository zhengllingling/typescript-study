// 函数定义
function count(x:number, y:number) {
    return x + y
}

type count1 = (x:number, y:number) => number;

interface count2 {
    (x: number, y:number): number
}

// 函数参数
function count3(x:number,y?:number) {
    return x + y;
}
count3(1);

function count4(x:number, y = 1, z:number, p = 2):number {
    return x+y+z+p
}
count4(1, undefined, 2);

function count5(x:number, ...y:number[]):number {
    return x + y.reduce((cur,pev)=>cur+pev, 0)
}
count5(1, 2, 3, 4);

// 函数重载 同一个函数根据参数等的不同做不同的事情
function count6(...rest: number[]) : number;
function count6(...rest: string[]) : string;
function count6(...rest: any[]) : any {
    const data = rest.reduce((pev,cur)=> pev+cur )
    return data;
}

console.log(count6(1, 2, 3));
console.log(count6("a", "b", "c"));

