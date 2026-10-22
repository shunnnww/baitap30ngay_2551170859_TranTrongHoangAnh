// Câu 1: Tính diện tích hình tam giác (diện tích = 0.5 * đáy * chiều cao)
let b = 20;
let h = 10;
console.log(0.5 * b * h);

// Câu 2: Tính chu vi hình tam giác (chu vi = a + b + c)
let sideA = 5;
let sideB = 4;
let sideC = 3;
console.log(sideA + sideB + sideC);

// Câu 3: Tính diện tích và chu vi hình chữ nhật
let length = 10;
let width = 5;
console.log(length * width);
console.log(2 * (length + width));

// Câu 4: Tính diện tích và chu vi hình tròn (pi = 3.14)
const pi = 3.14;
let radius = 7;
console.log(pi * radius * radius);
console.log(2 * pi * radius);

// Câu 5: Tính độ dốc (slope), giao điểm trục x và trục y của y = 2x - 2
let slope1 = 2;
let xIntercept = 1;
let yIntercept = -2;
console.log(slope1);
console.log(xIntercept);
console.log(yIntercept);

// Câu 6: Tính độ dốc m giữa 2 điểm (2, 2) và (6, 10)
let slope2 = (10 - 2) / (6 - 2);
console.log(slope2);

// Câu 7: So sánh độ dốc của hai câu trên
console.log(slope1 === slope2);

// Câu 8: Tính y = x^2 + 6x + 9 và tìm giá trị của x để y = 0 (khi x = -3)
let x = -3;
let y = x ** 2 + 6 * x + 9;
console.log(y);

// Câu 9: Tính tiền lương nhận được trong tuần (số giờ * lương mỗi giờ)
let hours = 40;
let ratePerHour = 28;
console.log(hours * ratePerHour);

// Câu 10: Nếu độ dài tên lớn hơn 7 thì in ra 'your name is long', ngược lại in 'your name is short'
let myName = 'Hoàng Anh';
console.log(myName.length > 7 ? 'your name is long' : 'your name is short');

// Câu 11: So sánh độ dài họ và tên
let fName = 'Hoàng Anh';
let lName = 'Trần Trọng';
console.log(fName.length > lName.length
    ? `Your first name, ${fName} is longer than your family name, ${lName}`
    : `Your first name, ${fName} is shorter than your family name, ${lName}`);

// Câu 12: So sánh độ tuổi giữa myAge và yourAge
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// Câu 13: Kiểm tra người dùng đã đủ 18 tuổi để lái xe hay chưa
let birthYear = 2005;
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
console.log(userAge >= 18
    ? `You are ${userAge}. You are old enough to drive`
    : `You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);

// Câu 14: Tính số giây một người có thể sống trong 100 năm
let years = 100;
console.log(years * 365 * 24 * 60 * 60);

// Câu 15: Định dạng thời gian theo các mẫu dễ đọc
const d = new Date();
let YYYY = d.getFullYear();
let MM = String(d.getMonth() + 1).padStart(2, '0');
let DD = String(d.getDate()).padStart(2, '0');
let HH = String(d.getHours()).padStart(2, '0');
let mm = String(d.getMinutes()).padStart(2, '0');

console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`);
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`);
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`);
