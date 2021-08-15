function parseTrue() {
  i += 4
  return true
}
function parseNull() {
  i += 4
  return null
}
function parseFalse() {
  i += 5
  return false
}
function parseString() {
  i++
  var a = ''
  while (str[i]!=='"') {
    a+= str[i++]
  }
  i++
  return a
}
function parseNumber() {
  var numstr = ''
  while (str[i]>='0' && str[i]<='9') {
    numstr+= str[i++]
  }
  return Number(numstr)
}
function parseArray() {
  i++
  var result = []
  if (str[i] == '"') {
    i++
    return result
  }
  while (true) {
    var val = parseValue()
    result.push(val)
    if (str[i] == '"') {
      i++
      return result
    }else if (str[i] == ',') {
      i++
    }
  }
}
function parseObject() {
  var result = {}
  i++
  if (str[i] == '}') {
    i++
    return result
  }
  while (true) {
    var key = parseString()
    i++  //跳过冒号
    var val = parseValue()
    if (str[i] == '}') {
      i++
      return result
    } else if (str[i] == ',') {
      i++
    }
  }
}
function outputLisp(tree) {
  if (typeof tree == 'list') {
    if () {
      
    }
  }

  return String(tree)

}


