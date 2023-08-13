const userInput = prompt("Enter something");

if (userInput) {  /*다른 것과 비교할 필요 없으므로 userInput 적은 후, 빈 문자열이 아니면 TRUTHY 반환, 맞으면 FALSY 반환*/
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}


// 0, null, NaN, undefined, 공백 등은 모두 FALSY를 반환한다.
// 비어있지 않으면 공백이 있어도 TRUTHY를 반환한다.
// if (0) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (NaN) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (undefined) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (' ') {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

