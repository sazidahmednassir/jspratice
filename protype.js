function student(){
    this.name="sazid"
    this.gender="male";
}

student.prototype.age=28;

std1=new student();
console.log(std1.name, std1.gender, std1.age);

std2=new student();
console.log(std1.name="salekin", std1.gender, std1.age=29);