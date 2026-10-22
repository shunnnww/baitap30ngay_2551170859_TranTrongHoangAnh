// ==========================================
// 30 Days of JavaScript - Day 13: Console Object Methods
// LEVEL 3
// ==========================================

console.log('%c--- DAY 13: LEVEL 3 ---', 'color: purple; font-weight: bold; font-size: 14px');

// Câu 1: So sánh hiệu năng tốc độ chạy giữa while loop, for loop, for...of loop và forEach trên mảng 100,000 phần tử
console.log('Câu 1: Đo lường và so sánh hiệu năng của các vòng lặp trên mảng 100,000 phần tử:');

const SIZE = 100000;
const testArray = Array.from({ length: SIZE }, (_, i) => i);

console.log(`Đã khởi tạo mảng gồm ${SIZE.toLocaleString()} phần tử để thử nghiệm.`);

// 1. Kiểm tra hiệu năng vòng lặp for thông thường
console.time('Vòng lặp for');
let sumFor = 0;
for (let i = 0; i < testArray.length; i++) {
  sumFor += testArray[i];
}
console.timeEnd('Vòng lặp for');

// 2. Kiểm tra hiệu năng vòng lặp while
console.time('Vòng lặp while');
let sumWhile = 0;
let j = 0;
while (j < testArray.length) {
  sumWhile += testArray[j];
  j++;
}
console.timeEnd('Vòng lặp while');

// 3. Kiểm tra hiệu năng vòng lặp for...of
console.time('Vòng lặp for...of');
let sumForOf = 0;
for (const item of testArray) {
  sumForOf += item;
}
console.timeEnd('Vòng lặp for...of');

// 4. Kiểm tra hiệu năng phương thức forEach
console.time('Vòng lặp forEach');
let sumForEach = 0;
testArray.forEach((item) => {
  sumForEach += item;
});
console.timeEnd('Vòng lặp forEach');

// Nhận xét tổng kết về hiệu năng
console.log('%cĐánh giá chung: Vòng lặp for truyền thống và while thường có tốc độ thực thi nhanh nhất do không có overhead gọi hàm callback như forEach hay khởi tạo iterator như for...of.', 'color: #0d6efd; font-style: italic;');
