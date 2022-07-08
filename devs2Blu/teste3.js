let _ = require('lodash');

function IsPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/*function ToNumber(num) {
  let result = parseFloat(num.toString().replace(",", ""));
  return result;
}*/

function CheckAll(num) {

  let result = 0;
  let numbers = String(num).split("").map((num) => {
    return Number(num);
  });
  let attempt = numbers.length * (numbers.length - 1);
  let arrays = [];
  let check;

  for (let i = 0; i <= attempt; i++) {
    let shuffle = _.shuffle(numbers);
    check = arrays.includes(shuffle);
    if (check) {
      i--; 
    } else {
      arrays.push(shuffle);
    }
  }

  for (let i = 0; i < arrays.length; i++) {
    let value = parseFloat(arrays[i].toString().replace(",", ""));
    if (IsPrime(value)) {
      result++;
    };
  }


  if (result > 0) {
    return true;
  }
}


  function MathChallenge(num) {

    if (IsPrime(num)) {
      return 1;
    } else if (CheckAll(num)) {
      return 1;
    } else {
      return 0;
    }

  }

  // keep this function call here 
console.log(MathChallenge(98));