// 枚举：一组具有名字的常量集合

// 数字枚举 - 反向映射
enum Role {
    Mother = 1,
    Fother,
    Daughter,
    Son
}

// 字符串枚举 - 没有反向映射
enum Message {
    Success = "success",
    Fail = "fail"
}

// 异构枚举
enum Answer {
    N,
    Y = "yes"
}

enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed (运行环境时才会被计算)
    d = Math.random(),
    e = "123".length,
    f = 1
}

console.log(Char);

// 常量枚举
const enum Month {
    Fan,
    Jun
}

// 枚举类型
enum E {a, b}
enum F {a=0, b=1}
enum G {a="apple", b="bnanan"};

let e:E = 1;
let f:F = 2;
let e1:E.a = 3;
let e2:E.b = 2;
let e3:E.a = 3;
// e1 === e2; 两个不同的枚举成员类型不能比较
// e === f;
e1 === e3;

// 定义了字符串枚举，取值只能枚举成员类型
let g1:G = G.a;
let g2:G = G.b;
