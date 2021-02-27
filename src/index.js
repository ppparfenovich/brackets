module.exports = function check(str, bracketsConfig) {
  
  let arr = [];
  let bracketsCheck = {};   //объект образцов скобок (key - открывающая, value - закрывающая)

  for (let i = 0; i < bracketsConfig.length; i++) {   //формируем объект образцов
    bracketsCheck[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  arr.push(str.charAt(0));      // добавляем первый эл. строки

  for(var i = 1; i < str.length; i += 1) {    // начинаем перебор со второго эл.
    if(str.charAt(i) === bracketsCheck[arr[arr.length - 1]]) {    //если i эл. строки равен value ключа (i эл. строки) в объекте образцов
      arr.pop();
    } else {
      arr.push(str.charAt(i)); 
    }
  }
  if (arr.length > 0) {return false;}
  return true;
}
