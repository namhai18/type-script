console.log("Hello");
var a = 3 ;

let z:boolean = true;
console.log(z);

let diemToan: number = 0;

let ten:string = "It me";

// Khong the doi kieu du lieu nhu js

// ten = 5;

let arr1: Array<number> = [1,2,3,4,5];

let arr2: string[] = ["one","two"];

// kieu long ghep 2 gia tri
let tupple: [string,number] = ['age',18];

let tupple1: [string,boolean] = ['heya',true];

enum Color {Red = 1 , Green = 2, Blue = 3};

console.log("Color",Color.Red);

// Khong biet kieu du lieu la gi dung any, hạn chế xài
let notSure: any = 1 ;
notSure = "abc";
console.log(notSure);

// undefined-khai báo 1 biến ko gán giá trị
let temp ;

// type of null là 1 object
let temp1 = null;
console.log(typeof temp1);

// type of undefined là 1 undefined
let temp2 = undefined;
console.log(typeof temp2);

let obj = {
    address : {
        main: '123'
    },
    name : null
}

console.log("obj.name: ", obj.name);

// tự define trong typescripts - @@@ nên define all value trả về từ API
type User = {
    name : string;
    age: number;
    address: string;
    email?: string; // @@@ field này có hay ko cũng dc
}
// Khi khi bao user can define đủ trường
let user:User = {
    name: 'Dan',
    age: 24,
    address: '123',
    email : 'abc',
}

console.log (user.age);

interface UserA  {
    name: string;
    age: number;
}

// interface cho 1 object binh thuong
const userA: UserA = {
    name: "a",
    age: 23
}

interface UserB  {
    name: string;
    age: number;
}

type SuperUser = UserA & UserB;

// Arrow function
function foo(name: string){
    console.log('Hello'+ name);
}
foo('me');

// Tham so mac dinh la empty
const bar = (name= "") => {
    console.log('Hello'+ name);
}

bar('TEXT');

// Thông số khai báo truoc dc get tu phia sau
const getParent = () => 10 ; 
const getBonus = (value = 10 + getParent(), num = value* 10 ) => {
    console.log(num);
};

// Khai bao mang ko biet truoc so phan tu - @@@ spread operator
const displayColor = (...collor:string[])=> {
    for (let index = 0; index < collor.length; index++) {
        console.log(collor[index]);
    }
}

displayColor("Red","Green","Blue");

const arrayColor = ["Red","Blue"];

// clone và truyền all vào @@@
displayColor(...arrayColor);

// boc tách phan tu
const date = [15,12,2020];
const [day,month,year] = date;

const obj1:User = {
    name: 'Nam',
    age: 24,
    address: 'abc',
}

const {name: fullname, age,address} = obj1;
// name da dc đỏi tên thành fullname @@@ ung dung convert name khi API ve
console.log (fullname);

// string template
const stringDemo = 'Hello ' + fullname + 'age ' +age;
const stringTemplate = `Hello ${fullname} age ${age}`;
console.log(stringTemplate);

// For in tự tính toán độ dài lenght
console.log("For in tự tính toán độ dài lenght");
for(let i in arrayColor){
    console.log(arrayColor[i]);
}

for (let item of arrayColor){
    console.log(item);
}

// Thêm tiền tố <HTMLInputElement> khi cần get element
let input = (<HTMLInputElement>document.getElementById("input1")).value;
console.log(input);
// <HTMLElement> all element oki





