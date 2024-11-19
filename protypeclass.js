class student{

    constructor(id, name){
        this.id=id;
        this.name=name;
    }

}

student.prototype.salary=2000000;
student.prototype.display=function(){
    console.log(this.id, this.name, this.salary);
}

std1=new student(23, "Nassir");
std1.display();


std2=new student(28, "Sazid");
console.log(std2.id, std2.name, std2.salary=3500000);