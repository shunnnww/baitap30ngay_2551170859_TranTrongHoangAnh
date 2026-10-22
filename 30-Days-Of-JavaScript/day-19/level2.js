// ==========================================
// 30 Days of JavaScript - Day 19: Closures
// File: level2.js (Cấp độ 2)
// ==========================================

console.log('\n--- DAY 19: LEVEL 2 ---');

/**
 * Đề bài Level 2:
 * Tạo một hàm closure trả về một đối tượng chứa 3 hàm con (hoặc nhiều hơn),
 * cùng thao tác chung trên một biến trạng thái nằm trong phạm vi (lexical scope) của hàm cha.
 * Cụ thể: tăng đếm (increment), giảm đếm (decrement), đặt lại (reset) và lấy giá trị (getValue).
 */

// Câu 1: Xây dựng hàm tạo bộ đếm counter closure với 3 hàm con thao tác chung
function createCounterManager(initialValue = 0) {
    // Biến private được bảo vệ bên trong closure
    let count = initialValue;

    // Hàm con 1: Tăng giá trị
    function increment(step = 1) {
        count += step;
        return count;
    }

    // Hàm con 2: Giảm giá trị
    function decrement(step = 1) {
        count -= step;
        return count;
    }

    // Hàm con 3: Đặt lại giá trị ban đầu
    function reset() {
        count = initialValue;
        return count;
    }

    // Hàm con bổ trợ: Lấy giá trị hiện tại mà không làm thay đổi biến
    function getValue() {
        return count;
    }

    // Trả về đối tượng chứa các hàm con (kỹ thuật Module Pattern qua Closure)
    return {
        increment,
        decrement,
        reset,
        getValue
    };
}

// Kiểm thử hàm Level 2
const myCounter = createCounterManager(10);

console.log('Giá trị ban đầu:', myCounter.getValue()); // 10
console.log('Tăng 1 lần (mặc định +1):', myCounter.increment()); // 11
console.log('Tăng tiếp 5 đơn vị:', myCounter.increment(5)); // 16
console.log('Giảm 1 lần (mặc định -1):', myCounter.decrement()); // 15
console.log('Giảm tiếp 3 đơn vị:', myCounter.decrement(3)); // 12
console.log('Đặt lại bộ đếm về ban đầu (10):', myCounter.reset()); // 10
console.log('Giá trị hiện tại sau reset:', myCounter.getValue()); // 10

// Khởi tạo một đối tượng đếm độc lập khác để chứng minh tính đóng gói (encapsulation)
const anotherCounter = createCounterManager(100);
console.log('Counter thứ hai (độc lập hoàn toàn):', anotherCounter.increment(25)); // 125
console.log('Counter thứ nhất vẫn giữ nguyên giá trị:', myCounter.getValue()); // 10
