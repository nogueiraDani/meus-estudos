function CheckNumberOfCharacters(str) {
  if (str.length >= 4 && str.length <= 25) {
    return true;
  } else {
    return false;
  }
}

function CheckFirstCharacter(str) {
  let firstChar = str.charAt(0);
  if (isNaN(firstChar) && firstChar != "_") {
    return true;
  } else {
    return false;
  }
}

function CheckCharacterTypes(str) {
  let string = str.toLowerCase();
  let strings = Array.from(string);
  let result;
  for (let i = 0; i < strings.length; i++) {
    let str = string[i];
    if (str.includes("a") || str.includes("b") || str.includes("c") || str.includes("d") ||
        str.includes("e") || str.includes("f") || str.includes("g") || str.includes("h") ||
        str.includes("i") || str.includes("j") || str.includes("k") || str.includes("l") ||
        str.includes("m") || str.includes("n") || str.includes("o") || str.includes("p") ||
        str.includes("q") || str.includes("r") || str.includes("s") || str.includes("t") ||
        str.includes("u") || str.includes("v") || str.includes("w") || str.includes("x") ||
        str.includes("y") || str.includes("z") || str.includes("_") || str.includes("0") ||
        str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") ||
        str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") ||
        str.includes("9")) {
          result = true;
        } else {
          result = false;
          break;
        }
  } return result;
} 


function CheckLastCharacter(str) {
  let lastChar = str.charAt(str.length - 1);
  if (lastChar != "_") {
    return true;
  } else {
    return false;
  }
}


function SearchingChallenge(str) {

  if (CheckNumberOfCharacters(str) && CheckFirstCharacter(str) &&
    CheckLastCharacter(str) && CheckCharacterTypes(str)) {
    return true;
  } else {
    return false;
  }
}




console.log(SearchingChallenge("jnuhygtbvhgtrfde%r5289__p"));
