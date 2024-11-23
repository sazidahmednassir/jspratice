 let text=`{
        "employee":{"name":"John", "age":30, "city":"New York"},
        "employee2":{"name":"Hasan", "age":30, "city":"New York"}
        }`;

let jsonobj=JSON.parse(text);

console.log(`Employee one ${jsonobj.employee.name} Another: ${jsonobj.employee2.name}`);
