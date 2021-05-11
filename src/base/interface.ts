/** 
 * 接口：约束对象、函数以及类的结构和类型
*/
interface List {
    readonly id: String,
    name: String,
    // [x : string]: String
    age?: Number
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(res => {
        console.log (res.id, res.name)
    })
}

const result = {
    data: [
        { id: "1", name: "11"}
    ]
}

render(result);

let list: List = {
    id: "12",
    name: "11",
    age: 1
}

interface StringArray {
    [key:number] : string
}
let strArr: StringArray= { 
    1: "1"
}

// interface Add {
//     (x: number, y:number) : number
// }
type Add = (x:number, y:number) => number;
let add1:Add = (a:number, b:number) => {
    return a+b
}

interface Lib {
    ():void,
    test: String,
    doSomeString: Function
}

function getLib():Lib{
    const lib1 = (()=>{}) as Lib;
    lib1.test = "0";
    lib1.doSomeString = () => {
        console.log(lib1.test);
    }
    return lib1;
}


const lib1 = getLib();
lib1.doSomeString();