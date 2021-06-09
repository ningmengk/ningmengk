
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

var a = 54
if (a >= 10 && a <= 99) {
  console.log('1')
} else {
  console.log('0');
}

var a = 11, b = 19

if (a > 10) {
  console.log('1');
} else if (b > 20) {
  console.log('1');
} else {
  console.log('0')
}
var a = 9
if (a % 3 === 0) {
  if (a % 5 == 0) {
    console.log('YES');
  }
    else {
      console.log('NO');
    }
} else {
  console.log('NO');
}

var a = 35
if (a % 3 === 0) {
  if (a % 5 == 0) {
    if (a % 7 == 0) {
      console.log(3, 5, 7);
    }
    else {
      console.log(3, 5);
    }
  }
  else if (a % 7 == 0) {
    console.log(3, 7);
  }
  else {
    console.log(3);
  }  
} else if (a % 5 == 0) {
  if (a % 7 == 0) {
    console.log(5, 7);
  }
  else {
    console.log(5);
  }
} else if (a % 7 == 0) {
  console.log(7);
} else {
  console.log('n');
}

var a = 50, b = 80
if (a < 60) {
  console.log(1);
} else if (b < 60) {
  console.log(1);
} else {
  console.log(0);
}
var a = 1
if (a != 1 && a != 3 && a != 5) {
  console.log('YES');
} else {
  console.log("NO");
}

var a = 120
if (((a / 3) + 50) > (a/1.2)) {
  console.log('Walk');
} else if (((a / 3) + 50) < (a / 1.2)) {
  console.log('Bike');
} else {
  console.log('All');
}

var x = 1.0

if (x>=0&&x<5) {
  console.log((-x+ 2.5).toFixed(3));
} else if (x >= 5 && x < 10) {
  console.log((2-1.5*(x-3)*(x-3)).toFixed(3));
} else if (x >= 10 && x < 20) {
  console.log((x / 2 -1.5).toFixed(3));
} else {
  console.log('你有问题');
}

var a = 1200, b = 'y'

if (a > 1000) {
   c = 8 + (Math.ceil((a -1000)/500)*4)
} else {
  c =8 
}

if (b == 'y') {
  console.log(c+5);
} else {
  console.log(c);
}

var a = 10, b = 20, c = 56
if (a > b) {
  if (a > c) {
    console.log(a);
  }
  else {
    console.log(b);
  }
} else if(b > c) {
  console.log(b);
} else {
  console.log(c);
}

var a = 3, b = 4, c = 5

if (a * a + b * b == c * c) {
  console.log('yes');
} else {
  console.log('no');
}

var a = 2012

if (a % 4 == 0 || a % 100 == 0 && a % 400 == 0) {
  console.log('Y');
} else {
  console.log('N');
}

var x1 = 1, y1 = -1, x2 = 1, y2 = 1, x3 = -1, y3 = -1, x4 = -1, y4 = -1

a = Math.max(x1, x2, x3, x4)
b = Math.max(y1, y2, y3, y4)
e = Math.min(x1, x2, x3, x4)
f = Math.min(y1, y2, y3, y4)
var c = -1, d = -1
if (c > 0) {
  if (c > a || Math.abs(d) > b) {
    console.log('no');
  } else {
    console.log('yes');
  }
} else if (c < 0) {
  if (c < e || Math.abs(d) > Math.abs(f)) {
    console.log('no');
  } else {
    console.log('yes');
  }
}

var a = 1, b = 2 , c ='+'

if (c == "+") {
  console.log(a+b);
} else if (c == "-") {
  console.log(a-b);
} else if (c == '*') {
  console.log(a*b);
} else if (c == '/') {
  if (b == 0) {
    console.log('Divided by zero!');
  } else {
    console.log(a/b);
  }
} else {
  console.log('Invalid operator!')
}
var a = 1, b = 0, c = 1
if (b * b == 4 * a * c) {
  console.log('x1=x2='+((-b + Math.sqrt(b*b-4*a*c))/(2*a)));
} else if (b * b > 4 * a * c) {
  console.log("x1=" + (-b + Math.sqrt(b*b-4*a*c))/(2*a)+";"+"x2="+(-b - Math.sqrt(b*b-4*a*c))/(2*a));
} else {
  console.log("x1=" + ((-b / (2*a))).toFixed(5) + "+" + ((Math.sqrt(4*a*c-b*b) / (2*a))).toFixed(5)+"i" + ";" +'x2=' + ((-b / (2*a))).toFixed(5) + "-" +((Math.sqrt(4*a*c-b*b) / (2*a))).toFixed(5)+"i" );

}



var a = 10, b = 4, c = 9

console.log(a - (Math.ceil(c / b)));

