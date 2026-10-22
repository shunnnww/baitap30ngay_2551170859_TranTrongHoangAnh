// Câu 1: Lặp từ 0 đến 10 bằng vòng lặp for, while và do while
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let w1 = 0;
while (w1 <= 10) {
    console.log(w1);
    w1++;
}

let d1 = 0;
do {
    console.log(d1);
    d1++;
} while (d1 <= 10);

// Câu 2: Lặp từ 10 về 0 bằng vòng lặp for, while và do while
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let w2 = 10;
while (w2 >= 0) {
    console.log(w2);
    w2--;
}

let d2 = 10;
do {
    console.log(d2);
    d2--;
} while (d2 >= 0);

// Câu 3: Lặp từ 0 đến n bằng vòng lặp for
let n = 5;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

// Câu 4: In mẫu hình tam giác dấu thăng (#)
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}

// Câu 5: In bảng nhân từ 0 đến 10
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// Câu 6: In bảng lũy thừa i, i^2, i^3 từ 0 đến 10
console.log('i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

// Câu 7: Lặp từ 0 đến 100 và in các số chẵn
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// Câu 8: Lặp từ 0 đến 100 và in các số lẻ
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Câu 9: Lặp từ 0 đến 100 và in các số nguyên tố
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

// Câu 10: Tính tổng tất cả các số từ 0 đến 100 (kết quả 5050)
let sumAll = 0;
for (let i = 0; i <= 100; i++) {
    sumAll += i;
}
console.log(sumAll);

// Câu 11: Tính tổng các số chẵn và tổng các số lẻ từ 0 đến 100
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(sumEven);
console.log(sumOdd);

// Câu 12: In tổng số chẵn và tổng số lẻ dưới dạng một mảng [2550, 2500]
console.log([sumEven, sumOdd]);

// Câu 13: Tạo một mảng gồm 5 số ngẫu nhiên
let randomNums = [];
for (let i = 0; i < 5; i++) {
    randomNums.push(Math.floor(Math.random() * 100));
}
console.log(randomNums);

// Câu 14: Tạo một mảng gồm 5 số ngẫu nhiên duy nhất (không trùng lặp)
let uniqueNums = [];
while (uniqueNums.length < 5) {
    let r = Math.floor(Math.random() * 100);
    if (!uniqueNums.includes(r)) {
        uniqueNums.push(r);
    }
}
console.log(uniqueNums);

// Câu 15: Tạo một chuỗi ID ngẫu nhiên gồm 6 ký tự
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
    randomId += characters[Math.floor(Math.random() * characters.length)];
}
console.log(randomId);
