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
  function difference(arr, [value]) {
    var a = new Set()
    for (let x of arr) {
      a.add(x)
    }
    var b = []
    for (var x of [value]) {
      if(a.has(x)) a.delete(x)
    }
    return a
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
    if (value==null) return true
    return false
  }
  function add(number,number) {
    return number +number
  }
  function max(arr) {
    var a = null
    for (var i = 0; i < arr.length-1; i++){
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
    var a = null
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
    if (number > upper - lower) {
      return false
    }
    if (number >= 0) {
      return lower + number
    } else {
      return upper - number
    }
  }
  function inRange(number, start = 0, end) {
    return number>=start &&number<end

  }
  function head(array) {
    return array[0]
  }
  function indexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      for (var i = arr.length-1; i>=0; i--) {
        if (array[i] = value) {
          return i + 1
        }
      }

    }
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] = value) {
        return i + 1
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
    var a = arr.length 
    if (n >= 0) return array[n]
    if( n < 0) return array[a - abs(n)]
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
  };
}()
