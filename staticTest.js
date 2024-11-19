class staticTest{

    static a=10;
    b = 20;

    static m1(){
        console.log("this is static method");
    }
    
    m2(){
        console.log("this non static method");
    }

}

console.log(staticTest.a);
// console.log(staticTest.b);
staticTest.a=10000;
console.log(staticTest.a);
staticTest.m1();

let t= new staticTest();
console.log(t.b);
t.m2();