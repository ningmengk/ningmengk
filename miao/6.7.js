
/*y = XXXX // 写出表达式，当x是奇数时，y为真，否则为假
y = XXXX // 写出表达式，当x是偶数时，y为真，否则为假
y = XXXX // 写出表达式，让y表示当前是x世纪
y = XXXX // 写出表达式，当x是闰年时，y为真，否则为假
y = XXXX // 写出表达式，当x是素数时（此时x为100以内的数），y为真，否则为假
x的5次方。
x是否在50到100以内。
x是否大于200且为3的倍数但不是7的倍数。*/
var x = 2021
console.log( x % 2 ==1  ? true: false);

console.log( x % 2 == 0 ?true:false);


console.log(parseInt((x-1) / 100) + 1);

console.log( x % 4 ==0 && x % 100 || x % 400 == 0 ?true:false);

console.log( (x!== 2 || x !==3 || x!== 5 || x !==7) || (x % 2 == 0  && x%3 == 0 && x % 5 == 0&& x%7 == 0)?false:true);

console.log( x ** 5);

console.log(100 > x&&x > 50 ? true : false);

console.log(x > 200 && x % 3 == 0 && x % 7 !== 0 ? true : false);

var a = 3 , b = 9 , c = 5 

var delta = b * 4 - 4 * a * c
var sd = Math.sqrt(delta)

var x1 = (-b + sd) / (2 * a)
var x2 = (-b - sd) / 2 / a

console.log(x1)
console.log(x2);

