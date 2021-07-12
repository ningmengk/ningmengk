var ningmengk = function () {
  function chunk(arr, n) {
    let a = [];
    let b = []
    for (let i = 0; i < arr.length; i++){
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
    let a = []
    for (let x of arr) {
      if (x !== false && x !== null && x !== undefined && x != 0 && x !== '' && x !== NaN) {
        a.push(x)
      }
    }
    return a
  }
  function difference(arr, [value]) {
    let a = new Set(arr)
    for (let x of [value]) {
      if(a.has(x)) a.delete(x)
    }
  }
  return a
}