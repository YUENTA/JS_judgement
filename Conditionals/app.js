// =====================
// BASIC IF/ELSE
// =====================

let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
} else {
    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
// 입력받은 문자열 소문자로 바꾸는 함수 사용

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {  /*별로인 날*/ 
    console.log("MEH")
}


// =====================
// TICKET 가격
// =====================

// 0-5 - 무료
// 5 - 10 어린이 $10 
// 10 - 65 성인 $20 
// 65+ 시니어 $10

const age = 890;

if (age < 5) {
    console.log("You are a baby.  You get in for free!")
} else if (age < 10) {
    console.log("You are a child.  You pay $10")
} else if (age < 65) {
    console.log("You are an adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}


// =====================
// 조건부 NESTING
// =====================

const password = prompt("please enter a new password");

// 비밀번호 6자리 이상이어야 함
if (password.length >= 6) {
    // 비밀번호는 공백을 포함할 수 없음
    if (password.indexOf(' ') === -1) {
        // indexOf()는 문자열에서 특정 문자나 문자열이 처음으로 등장하는 위치를 반환하는 함수
        // -1을 반환: indexOf에서 찾는 문자열이 해당 문자열에 처음부터 끝까지 없을 경우
        // 만약 있을 시, -1을 반환하지 않고 해당 문자가 나타난 인덱스 반환
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}



 



