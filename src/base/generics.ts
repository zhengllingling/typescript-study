/** 
 * 泛型:类型在使用时确定 类型以参数传递的方式
*/
function log<T>(value:T) {
    console.log(value)
}

log<number>(1)
log('99')

interface Log<T=string> {
    (value:T):void
}

const log1:Log=function (name:string) {

}

const log2:Log<number> = function(age:number) {

}

class Log1<T> {
    // 不能使用static
    run(value:T) {
        console.log(value)
    }
}

const l1 = new Log1<string>();
l1.run('22')

// 类型约束
interface Length {
    length: number
}
function log22<T extends Length>(value:T):T{
    console.log(value, value.length);    
    return value
}