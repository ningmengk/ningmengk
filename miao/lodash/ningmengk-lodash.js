var ningmengk = function () {
  function chunk(arr, n) {
    var a = [];
    var b = []
    for (var i = 0; i < arr.length; i++){
      a.push(arr[i])
      if (i == n) {
        b.push(a)
        a = []
        i == 0
        arr.splice(0, i)
      }
    }
    b.push(a)
    return b
  }
  function compact(arr) {
    var a = []
    for (var x of arr) {
      if (x !== false && x !== null && x !== undefined && x != 0 && x !== '' && x !== NaN) {
        a.push(x)
      }
    }
    return a
  }
  function difference(arr, [value]) {
    var a = new Set(arr)
    for (var x of [value]) {
      if(a.has(x)) a.devare(x)
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
  function dropright(arr, n=1) {
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
  return {
    chunk,
    compact,
    difference,
    drop,
    dropright,
    sum,

  }
}()