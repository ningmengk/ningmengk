
  var a = 1
  var b = 2

  console.log(a + b)

var a = 2, b = 3, c = 5

console.log((a+b)*c);


var a = 1, b = 1, c = 3

console.log(parseInt((a+b)/c));

var a = 10, b = 3

console.log(parseInt(a / b), a % b);

var a = 5, b = 7

console.log((a / b).toFixed(9));

var a = 10433, b = 60

console.log(((b / a) * 100).toFixed(3) + '%');

var x = 2.31
var a = 1.2
var b = 2
var c = 2
var d = 3

console.log(((a*x**3) + (b*x**2) + (c*x) + d).toFixed(7));

var a = 41

console.log((5 * (a - 32) / 9).toFixed(5));

var r = 3,pi = 3.14159

console.log((2 * r).toFixed(4));
console.log((2 * pi * r).toFixed(4));
console.log((pi * r * r).toFixed(4));
var a = 1, b = 2

console.log((1 / (1 / a + 1 / b)).toFixed(2));

var a = 73.263, b = 0.9973

console.log((a % b).toFixed(4));

var a = 4 , b=3.14

console.log((4 / 3 * b * a * a * a).toFixed(2));

var a = 100

console.log(a % 10 + "" + parseInt((a / 10) % 10) + "" + parseInt(a /100));

var h = 23, r = 11,pi = 3.14159

console.log(Math.ceil((20 * 1000) / (pi * r * r * h)));

var a = 10, b = 4, c = 9

console.log(Math.floor(a - (c / b)));

var Xa = 1, Ya = 1
var Xb = 2, Yb = 2

console.log((Math.sqrt((Xb - Xa)+(Yb - Ya))).toFixed(3));

var X1 = 0, Y1 = 0
var X2 = 4, Y2 = 0
var X3 = 0, Y3 = 3

var p = ((X2- X1) + (Y3 - Y1) + Math.sqrt((X2 - X3)*(X2 - X3) + (Y3 - Y2 )*(Y3 - Y2 ))) / 2 

console.log((Math.sqrt(p*(p-(X2- X1))*(p- (Y3 - Y1))*(p-Math.sqrt((X2 - X3)*(X2 - X3) + (Y3 - Y2 )*(Y3 - Y2 ))))).toFixed(2));


var a = 1, b = 4, c = 100

console.log((a + (b - a) * c) - (b - a));

var a = 3, b = 4

console.log(a * b);

var a = 3

console.log(2 ** a);
a = 2
console.log(a.toFixed(2))

var n = 1
if (n > 0) {
  console.log('postitive');
} else if(n == 0){
  console.log('zero');
} else {
  console.log('negative');
}
var a = -3.14
console.log(Math.abs(a));

var n = 65
if (n % 2 == 1) {
  console.log('odd');
} else{
  console.log('even');
}

var n = "A"
console.log(n.charCodeAt());
if ((n.charCodeAt()) % 2 == 1) {
  console.log('YES');
} else{
  console.log('NO');
}
var x = 1000, y = 100
if (x > y) {
  console.log('>');
} else if(">"){
  console.log('=');
} else {
  console.log('<');
}
