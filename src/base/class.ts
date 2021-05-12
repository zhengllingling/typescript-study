class Dog {
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
    name: string;
    protected type: string;
    static run(){}
}

class Husky extends Dog {
    constructor(name:string, type:string, color:string){
        super(name, type)
        this.color = color;
    }
    private color:string;
}
// static
// readonly 只读属性
// 公有属性 可以被任何访问
// 私有属性 只能被类本身使用 实例和子类不允许访问
const husky = new Husky("柯基", "dog", "red");    
// 被保护属性 只能被自身和子类继承使用，实例和子类不允许访问
// husky.type

// 基类，抽象类，定义公共属性实现公共方法
abstract class Animal {
    eat(){}
    abstract name:string;
    abstract run():void;
}

class Cat extends Animal {
    constructor(name:string) {
        super();
        this.name
    }
    name:string
    run(){
        console.log("Cat running")
    }
}