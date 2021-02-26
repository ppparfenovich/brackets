module.exports = function check(str, bracketsConfig) {
  const openers = ["{", "[", "("];
  const closers = ["}", "]", ")"];
  const match = {
    "}": "{",
    "]": "[",
    ")": "(",
    "|": "|"
  };
  
  var lastOpener = [];

  for (el in str) {
    if (openers.includes(str[el])) {
      lastOpener.push(str[el]);
    }
    if (closers.includes(str[el])) {
      const last = lastOpener.pop();
      if (last !== match[str[el]]) {
        return false;
      }
    }
  }
  return lastOpener.length == 0;
  
  
  // let brackets = "[]{}()||"
  // let arr = []

  // for(let bracket of str) {
  //   let bracketsIndex = brackets.indexOf(bracket)   //находим индекс скобки в brackets которая = текущей скобки из str

  //   if(bracketsIndex % 2 === 0) {
  //     arr.push(bracketsIndex + 1)   //добавляем в массив индекс закрывающей скобки для bracket из str
  //   } else {
  //     if(arr.length === 0 || arr.pop() !== bracketsIndex) {
  //       return false;
  //     }
  //   }
  // }
  // return arr.length === 0
}
