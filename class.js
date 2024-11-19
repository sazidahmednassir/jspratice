class Student{

    constructor(sid, sname, sgrade){

        this.name=sname;
        this.id=sid;
        this.grade=sgrade;
       
    
    }
    

    // setDetails(sid, sname, sgrade){
    //     this.name=sname;
    //     this.id=sid;
    //     this.grade=sgrade;
    // }

    display(){
        console.log(this.name, this.id, this.grade);
    }
}

let stu1= new Student("nassir", 1, "A");
let stu2= new Student("ahmed", 2, "B");
let stu3= new Student("Sajeeb", 3, "C");
// stu.setDetails("nassir", 1, "A");
stu1.display();
stu2.display();
stu3.display();
