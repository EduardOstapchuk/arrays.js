"use strict";

//------Work 1--------//

let arr = [],
  arraysLength = Math.round(30 + Math.random() * 20);
for (let i = 0; i < arraysLength; i++) {
  arr.push(Math.round(-100 + Math.random() * (100 + 100)));
}
console.log(arraysLength, arr);

// -------- Work 1-2 ------//

arr = arr.map(element => element + 2);
console.log(arr);

// -------- Work 1-3 ------//

let numMidIn = Math.ceil(arr.length / 2),
  midElementNum = arr[numMidIn];
console.log(numMidIn);

// -------- Work 1-4 ------//
arr.splice(0, 1, numMidIn);
console.log(arr);

// -------- Work 1-5 ------//

let elemZero = arr.every(element => element > 0);
console.log(elemZero);

// ----- Work 2 -----///

let str = "Lorem ipsum dolor sit amet";
let backStr = str
  .split("")
  .reverse("")
  .join("");
console.log(backStr);

// ----- Work 2 - 1 -----///

let strText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let twoStr = strText.split(". ");
twoStr[twoStr.length - 1] = twoStr[twoStr.length - 1].toUpperCase();
let newStrText = twoStr.join("\n");
console.log(newStrText);

// ----- Work 4 - 1 -----///
let arrTen = [];
for (let i = 0; i <= 10; i++) {
  arrTen.push(Math.round(Math.random() * 10));
}
console.log(arrTen);
// ----- Work 4 - 2 -----///
let arrTwenty = [];
for (let i = 0; i <= 20; i++) {
  arrTwenty.push(Math.round(-10 * Math.random()));
}
console.log(arrTwenty);
// ----- Work 4 - 3 -----///

let twoNum = arrTen.concat(arrTwenty);
console.log(twoNum);

// ----- Work 4 - 4 -----///
let moreLess = twoNum.map(element => element / 5);
console.log(moreLess);

// ----- Work 4 - 5 -----///

moreLess.sort((ten, twenty) => twenty - ten);
console.log(moreLess);

// ----- Work 4 - 6 -----///

moreLess = moreLess.filter(element => Number.isInteger(element));
console.log(moreLess);

// ----- Work 4 - 7 -----///
moreLess = [];
console.log(moreLess);

// ----- Work 5 -----///

let arrTemp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomTemp = arrTemp.sort(() => Math.random() - 0.5);
console.log(randomTemp);
