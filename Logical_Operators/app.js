// =====================
// 논리적 AND 연산자
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    // 둘 다 참이어야 출력하는 단계로 넘어갈 수 있음
    // 공백제거
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// =====================
// 재방문 AGE EXAMPLE
// =====================

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

const age = 23;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else { /*음수일 경우*/
    console.log("INVALID AGE!")
}

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    // 반대값을 반환하고 싶다면 !을 넣어서 뒤집어주기
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}



