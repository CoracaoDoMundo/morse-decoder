const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "*****": " ",
};

function decode(expr) {
  let arr = Array.from(expr);
  let arrNumber = arr.map((value) => Number(value));

  let arrParts = [];

  for (let i = 0; i < arrNumber.length; i += 10) {
    arrParts.push(arrNumber.slice(i, i + 10));
  }

  for (let i = 0; i < arrParts.length; i++) {
    let arry = arrParts[i];
    for (let j = arry.length - 1; j >= 0; j--) {
      if (j % 2 == 0) {
        arry[j] = `${arry[j]}${arry[j + 1]}`;
      } else {
      }
    }
  }

  let arrAllTogether = arrParts.flat();
  let arrNoNumbers = arrAllTogether.filter((item) => typeof item !== "number");

  let arrByFive = [];

  for (let i = 0; i < arrNoNumbers.length; i += 5) {
    arrByFive.push(arrNoNumbers.slice(i, i + 5));
  }

  for (let i = 0; i < arrByFive.length; i++) {
    for (let j = arrByFive[i].length - 1; j >= 0; j--) {
      if (arrByFive[i][j] == "10") {
        arrByFive[i][j] = ".";
      } else if (arrByFive[i][j] == "11") {
        arrByFive[i][j] = "-";
      } else if (arrByFive[i][j] == "00") {
        arrByFive[i].splice(j, 1);
      } else if (arrByFive[i][j] == "NaNNaN") {
        arrByFive[i][j] = "*";
      }
    }
  }

  let arrString = [];

  for (let i = 0; i < arrByFive.length; i++) {
    arrString.push(arrByFive[i].join(''));
  }

 let result = arrString.map(item => item = MORSE_TABLE[item]);
 let totalResult = result.join('');

  return totalResult;
}

module.exports = {
  decode,
};
