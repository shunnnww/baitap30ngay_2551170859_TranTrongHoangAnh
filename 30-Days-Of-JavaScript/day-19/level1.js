// ==========================================
// 30 Days of JavaScript - Day 19: Closures
// File: level1.js (Cấp độ 1)
// ==========================================

console.log('--- DAY 19: LEVEL 1 ---');

/**
 * Đề bài Level 1:
 * Tạo một hàm bao bọc bên ngoài (outer function) có chứa một biến cục bộ,
 * và trả về một hàm bên trong (inner function / closure) có quyền truy cập và sử dụng biến đó.
 */

// Câu 1: Khởi tạo hàm outerFunction và trả về closure innerFunction
function outerFunction() {
    let count = 0; // Biến cục bộ trong phạm vi (lexical scope) của outerFunction

    // Hàm bên trong (closure) giữ tham chiếu đến biến count của hàm cha
    function innerFunction() {
        count++;
        return `Giá trị hiện tại của count là: ${count}`;
    }

    return innerFunction;
}

// Kiểm thử hàm closure Level 1
const counter = outerFunction();

console.log('Lần gọi 1:', counter()); // Giá trị: 1
console.log('Lần gọi 2:', counter()); // Giá trị: 2
console.log('Lần gọi 3:', counter()); // Giá trị: 3

// Ví dụ 2: Hàm closure tạo lời chào cá nhân hóa
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}! Chúc bạn một ngày học JavaScript hiệu quả.`;
    };
}

const sayHello = createGreeter('Xin chào');
const sayGoodMorning = createGreeter('Chào buổi sáng');

console.log(sayHello('Nguyễn Văn A'));
console.log(sayGoodMorning('Trần Thị B'));
