//---OOP 
//Example-01
// class hello{
//     message(){
//         console.log("Hello Everyone");
//     }
//     sorry(){
//         console.log("Sorry Everyone");
//     }
// }
// let obj_a = new hello();
// obj_a.message();
// obj_a.sorry();


//Example-02
// class student{
//     constructor(){
//         var name;
//         //console.log("Constructor Function");
//     }
//     hello(){
//         console.log("Hello " + this.name);
//     }
// }
// let a = new student();
// a.name = "Santa Sing";

// // Output 
// a.hello();


//Example-03
// class user{
//     constructor(){
//         var name;
//     }
//     hello(){
//         console.log("Hi " + this.name);
//     }
// }
// let a = new user();
// a.name = "Naimur Zaman";
// a.hello();


//Example-04
// class player{
//     constructor(){
//         var name;
//         console.log("This is universal truth!");
//     }
//     message(){
//         console.log(this.name + " You should agree with me");
//     }
// }
// let a = new player();
// a.name = "Roky";
// a.message();


//Example-05 //Shortcut Way
// class user{
//     constructor(name){
//         this.Studentname = name;
//     }
//     message(){
//         console.log(this.Studentname + " How are you?")
//     }
// }
// let a = new user('Santo');
// a.message();



//Example-06 //Shortcut Way
// class user{
//     constructor(name,age){
//         this.Studentname = name;
//         this.Studentage = age;
//     }
//     message(){
//         console.log("Your name is" + this.Studentname + " Your age is " +this.Studentage);
//     }
// }
// let a = new user(' Santo. ',25);
// a.message();



//Example-07 //Shortcut Way
// class user{
//     constructor(name,age){
//         this.Studentname = name;
//         this.Studentage = age;
//     }
//     message(){
//         console.log(`Your name is ${this.Studentname}. Your age is ${this.Studentage}`);
//     }
// }
// let a = new user('Santo',25);
// a.message();



//Example-08
// class user{
//     constructor(name,age){
//         this.Studentname = name;
//         this.Studentage = age;
//     }
//     message(){
//         document.write(`Your name is ${this.Studentname}. Your age is ${this.Studentage}`);
//     }
// }
// let a = new user('Santo',25);
// a.message();



//Example-09
// class user{
//     constructor(name,age){
//         this.Studentname = name;
//         this.Studentage = age;
//     }
//     message(){
//         document.write(`Your name is ${this.Studentname}. Your age is ${this.Studentage}<br>`);
//     }
// }
// let a = new user('Santo',25);
// let b = new user('Banta',27);
// a.message();
// b.message();



//Example-09
class user{
    constructor(name,age){
        this.Studentname = name;
        this.Studentage = age;
    }
    message(){
        document.write(`Your name is ${this.Studentname}. Your age is ${this.Studentage}<br>`);
    }
    static staticMethod(){
        console.log("Static Method Function");
    }
}
let a = new user('Santo',25);
let b = new user('Banta',27);
a.message();
b.message();

//---Output Without Object Create
user.staticMethod();


















