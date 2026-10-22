// ==========================================
// 30 Days of JavaScript - Day 13: Console Object Methods
// LEVEL 2
// ==========================================

console.log('%c--- DAY 13: LEVEL 2 ---', 'color: orange; font-weight: bold; font-size: 14px');

// Câu 1: Sử dụng console.assert() để kiểm tra một khẳng định sai (10 > 2 * 10)
// console.assert() sẽ in ra thông báo lỗi nếu biểu thức đầu tiên là false.
// Ở đây 10 > 20 là false, do đó thông điệp sẽ được ghi vào console.
console.log('Câu 1: Kiểm thử khẳng định sai với console.assert():');
console.assert(10 > 2 * 10, 'Assertion Failed: 10 không thể lớn hơn 2 * 10 (20)!');

// Câu 2: Ghi thông báo cảnh báo bằng console.warn()
// Dùng để cảnh báo lập trình viên (ví dụ: hàm sắp bị deprecate, tham số không tối ưu)
console.log('Câu 2: Ghi cảnh báo với console.warn():');
console.warn('Cảnh báo (Warning): Bộ nhớ sắp đầy hoặc phiên bản API này sắp ngừng hỗ trợ!');

// Câu 3: Ghi thông báo lỗi bằng console.error()
// Dùng để thông báo lỗi nghiêm trọng trong chương trình
console.log('Câu 3: Ghi thông báo lỗi với console.error():');
console.error('Lỗi (Error): Không thể kết nối tới cơ sở dữ liệu hoặc yêu cầu mạng thất bại!');
