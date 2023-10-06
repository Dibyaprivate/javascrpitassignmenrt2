// create an object representing a car
let car ={
    brand: "TATA",
    model: "Tata Tiago",
    model2:"Tata Nexon",
    manufacturedate:"1984 Aug 12",
}
// display all property of cars
function carsProperty(car) {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`);
        
    }
}
//console.log(carsProperty(car));
carsProperty(car);
//out put
// PS C:\assignment> node javascript.js
// brand: TATA
// model: Tata Tiago
// model2: Tata Nexon
// manufacturedate: 1984 Aug 12

//02 define object that represent a student's information
let student={
    name:"saraswati nayak",
    age:"18",
    grade:"A+"
}
//implement a method to update grade
function  updategrade(Student) {
   student.grade = Student;
}
  updategrade("B")
 console.log(student);
 //out put
 //{ name: 'saraswati nayak', age: '18', grade: 'B' }
 //03
function countproperty(abs) {
    return Object.keys(abs).length;
}
 const object ={}
 object.id = 'a',
 object.age = 26,
 object.brand= 'puma'
//  console.log(object);
 console.log(countproperty(object));
 //output 3
 //04 function to check if an object has a specified property
 function hasPproperty(obj, propertyname) {
    return obj.hasOwnProperty(propertyname);
 }
 const result ={
    name: "soumya",
    age:"23"
 }
 console.log(hasPproperty(result, 'age'));
 console.log(hasPproperty(result, 'name'));
 console.log(hasPproperty(result, 'location'));
//output 
//true
//true
//false
//05 program to calculate area of circle
const radius =8
const area =Math.PI*Math.pow(radius, 2);
console.log(area)
//201.06192982974676
//06 reverse a function to string
function reversetostring(input) {
    return input.split('').reverse('').join('');
}
const str ="hello bro";
const reversed =reversetostring(str);
console.log(reversed);
 //output  orb olleh
 //07using of map store   
 const usermap = new Map();
 function adduser(name, age, email) {
   const userinfo ={age, email}
   usermap.set(name,userinfo);
 }
function updateuser(name, age, email) {
    if (usermap.has(name)) {
       const userinfo = usermap.get(nmae);
       userinfo.age = age;
       userinfo.email = email; 
    }
}
 function deleteuser(name) {
    usermap.delete(name);
 } 
 adduser("Arun",30,"arun@example.com");
 adduser("boby", 25, "boby@example.com");
 console.log(usermap);
 deleteuser("boby");
 console.log(usermap); 
//output Map(2) {
 // 'Arun' => { age: 30, email: 'arun@example.com' },
 // 'boby' => { age: 25, email: 'boby@example.com' }
//}
//Map(1) { 'Arun' => { age: 30, email: 'alice@example.com' } }