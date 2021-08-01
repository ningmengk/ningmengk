var ningmengk = function () {
  function chunk(arr, n) {
    var a = []
    var b = []
    for (var i = 0;arr.length; i++){
      if (i == n) {
        b.push(a)
        a = []
        i == 0
        arr.splice(0, n)
      }
      if (arr.length <= n) {
        b.push(arr)
        break
      }
      a.push(arr[i])
    }
    return b
  }
  function compact(arr) {
    var a = []
    for (var x of arr) {
      if (x) {
        a.push(x)
      }
    }
    return a
  }
  function difference(arr, ...value) {
    var a = new Set(arr)
    var b = [].concat(...value)
    for (var x of b) {
      if(a.has(x)) a.delete(x)
    }
    return [...a]
  }
  function drop(arr, n=1) {
    var a = []
    if (n > arr.length) return a
    for (var i = n; i < arr.length; i++){
      a.push(arr[i])
    }
    return a
  }
  function dropRight(arr, n=1) {
    var a = []
    var b= arr.length;
    if (n > b) return a
    for (var i = 0; i < b - n ; i++){
      a.push(arr[i])
    }
    return a
  }
  function sum(arr) {
    var sum = 0
    for (var x of arr) {
      sum += x
    }
    return sum
  }
  function reverse(arr) {
    var a = []
    for (var i = arr.length - 1; i >= 0; i--){
      a.push(arr[i])
    }
    return a
  }
  function NaN(value) {
    var reg = /D/
    return reg.test(value)
  }
  function isNull(value) {
    if (value==null && value !== undefined) return true
    return false
  }
  function add(number,number2) {
    return number + number2
  }
  function max(arr) {
    var a =arr[0]
    for (var i = 0; i < arr.length - 1; i++){
      if (arr[i] > a) {
        a = arr[i]
      }
    }
    return a
  }
  function mean(arr) {
    var sum = 0
    for (var x of arr) {
      sum += x
    }
    return sum/arr.length
  }
  function min(arr) {
    var a =arr[0]
    for (var i = 0; i < arr.length - 1; i++){
      if (arr[i] < a) {
        a = arr[i]
      }
    }
    return a
  }
  function multiply(multiplier, multiplicand) {
    return multiplier*multiplicand
  }
  function subtract(multiplier, multiplicand) {
    return multiplier-multiplicand
  }
  function clamp(number, lower, upper) {
    if (number > 0) {
      if(number > upper) return upper
    } else {
      if(number < lower) return lower
    }
    return false
  }
  function inRange(number, start, end = 0) {
    if (start >end) {
      [start, end] =[end,start]
    }
    return number>=start && number<end
  }
  function head(array) {
    return array[0]
  }
  function indexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] = value) {
          return i + 1
        }
      }

    } else {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] = value) {
          return i + 1
        }
      }
    }
    return -1
  }
  function initial(array) {
    array.pop()
    return array
  }
  function last(array) {
    return array[array.length-1]
  }
  function nth(array, n = 0) {
    if (n >= 0) return array[n]
    if (n < 0) return array[array.length - Math.abs(n)]
  }
  function divided(dividend, divisor) {
    return dividend/divisor
  }
  function subtract(minuend, subtrahend) {
    return minuend- subtrahend
  }
  function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return array
  }
  function head(array) {
    return array[0]
  }
  function pull(array, ...values) {
    for (let x of array) {
      if (x == value) {
          array.delete(x)
        }
    }
    return array
  }
  function tail(array) {
    var a = []
    for (let i = 1; array.length; i++){
      a.push(arr[i])
    }
    return a
  }
  function take(array, n = 1) {
    if (n = 0) return []
    if(n> array.length) n=array.length
    var a = []
    for (var i = 0; i < n; i++){
      a.push(array[i])
    }
    return a
  }
  function flattenDeep(array) {
    var a = []
    for (var i of array) {
      a.push(i)
    }
    return a
  }
  function intersection(...arrs) {
    
    for (var x of arr) {
      for (var y of x) {
        if (arr.has(y)) {
           return y
         } 
       }   
    }
  }
  function fill(array, value, start = 0, end = array.length) {
    for (; start <= end; start++){
      array[start] = value
    }
    return array
  }
  function join(array, separator = ',') {
    var a = ''
    for (var x of array) {
      a +=  x + separator
    }
    a = a - separator
    return a
  }
  return {
    chunk,
    compact,
    difference,
    drop,
    dropRight,
    sum,
    reverse,
    NaN,
    isNull,
    add,
    max,
    mean,
    min,
    multiply,
    subtract,
    clamp,
    inRange,
    head,
    indexOf,
    initial,
    last,
    nth,
    divided,
    subtract,
    fill,
    head,
    pull,
    tail,
    take,
    flattenDeep,
    intersection,
    join
  };
}()
