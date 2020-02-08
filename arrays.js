//------ArrrayRandom--------//

let arr = [],
arraysLength = Math.round(30 + Math.random() * 20)
for (let i = 0; i < arraysLength; i++) {
    arr.push(Math.round(-100 + Math.random() * (100 + 100)))
}
console.log(arraysLength,arr)


// -------- element +2 ------//

arr = arr.map((element) => element + 2 )
console.log(arr)



// ----- String revers -----///

let str = "Lorem ipsum dolor sit amet"
    backStr = str.split('').reverse('').join('')
    console.log(backStr)


