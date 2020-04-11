console.log("Hello");
var a = 3;
var z = true;
console.log(z);
var diemToan = 0;
var ten = "It me";
// Khong the doi kieu du lieu nhu js
// ten = 5;
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["one", "two"];
// kieu long ghep 2 gia tri
var tupple = ['age', 18];
var tupple1 = ['heya', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
console.log("Color", Color.Red);
// Khong biet kieu du lieu la gi dung any, hạn chế xài
var notSure = 1;
notSure = "abc";
console.log(notSure);
// undefined-khai báo 1 biến ko gán giá trị
var temp;
// type of null là 1 object
var temp1 = null;
console.log(typeof temp1);
// type of undefined là 1 undefined
var temp2 = undefined;
console.log(typeof temp2);
var obj = {
    address: {
        main: '123'
    },
    name: null
};
console.log("obj.name: ", obj.name);
// Khi khi bao user can define đủ trường
var user = {
    name: 'Dan',
    age: 24,
    address: '123',
    email: 'abc',
};
console.log(user.age);
// interface cho 1 object binh thuong
var userA = {
    name: "a",
    age: 23
};
// Arrow function
function foo(name) {
    console.log('Hello' + name);
}
foo('me');
// Tham so mac dinh la empty
var bar = function (name) {
    if (name === void 0) { name = ""; }
    console.log('Hello' + name);
};
bar('TEXT');
// Thông số khai báo truoc dc get tu phia sau
var getParent = function () { return 10; };
var getBonus = function (value, num) {
    if (value === void 0) { value = 10 + getParent(); }
    if (num === void 0) { num = value * 10; }
    console.log(num);
};
// Khai bao mang ko biet truoc so phan tu - @@@ spread operator
var displayColor = function () {
    var collor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collor[_i] = arguments[_i];
    }
    for (var index = 0; index < collor.length; index++) {
        console.log(collor[index]);
    }
};
displayColor("Red", "Green", "Blue");
var arrayColor = ["Red", "Blue"];
// clone và truyền all vào @@@
displayColor.apply(void 0, arrayColor);
// boc tách phan tu
var date = [15, 12, 2020];
var day = date[0], month = date[1], year = date[2];
var obj1 = {
    name: 'Nam',
    age: 24,
    address: 'abc',
};
var fullname = obj1.name, age = obj1.age, address = obj1.address;
// name da dc đỏi tên thành fullname @@@ ung dung convert name khi API ve
console.log(fullname);
// string template
var stringDemo = 'Hello ' + fullname + 'age ' + age;
var stringTemplate = "Hello " + fullname + " age " + age;
console.log(stringTemplate);
// For in tự tính toán độ dài lenght
console.log("For in tự tính toán độ dài lenght");
for (var i in arrayColor) {
    console.log(arrayColor[i]);
}
for (var _i = 0, arrayColor_1 = arrayColor; _i < arrayColor_1.length; _i++) {
    var item = arrayColor_1[_i];
    console.log(item);
}
// Thêm tiền tố <HTMLInputElement> khi cần get element
var input = document.getElementById("input1").value;
console.log(input);
// <HTMLElement> all element oki
