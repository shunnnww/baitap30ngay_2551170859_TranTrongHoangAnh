// Câu 1: Nhập tuổi người dùng, nếu từ 18 tuổi trở lên thì được lái xe, ngược lại báo số năm cần chờ
let age = 30;
if (age >= 18) {
    console.log('You are old enough to drive.');
} else {
    console.log(`You are left with ${18 - age} years to drive.`);
}

// Câu 2: So sánh myAge và yourAge xem ai lớn hơn
let myAge = 25;
let yourAge = 30;
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log('We are the same age.');
}

// Câu 3: So sánh a và b (Cách 1: dùng if...else, Cách 2: dùng toán tử 3 ngôi ternary)
let a = 4;
let b = 3;

// Cách 1: dùng if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// Cách 2: dùng toán tử 3 ngôi (ternary)
console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

// Câu 4: Kiểm tra số chẵn hay số lẻ (số chẵn chia hết cho 2 dư 0)
let num = 2;
if (num % 2 === 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number.`);
}
