// ==========================================
// 30 Days of JavaScript - Day 11: Level 1
// Destructuring and Spreading (Phân rã và Toán tử Spread)
// ==========================================

// Dữ liệu cho trước của đề bài
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

// Câu 1: Phân rã (destructure) và gán các phần tử của mảng constants cho các biến:
// e, pi, gravity, humanBodyTemp, waterBoilingPoint
const [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = constants;

console.log('=== CÂU 1: Destructuring mảng constants ===');
console.log('e (Hằng số Euler):', e);
console.log('pi (Số Pi):', pi);
console.log('gravity (Gia tốc trọng trường):', gravity);
console.log('humanBodyTemp (Thân nhiệt con người °C):', humanBodyTemp);
console.log('waterBoilingPoint (Điểm sôi của nước °C):', waterBoilingPoint);

// Câu 2: Phân rã và gán các phần tử của mảng countries cho các biến:
// fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;

console.log('\n=== CÂU 2: Destructuring mảng countries ===');
console.log('fin (Finland):', fin);
console.log('est (Estonia):', est);
console.log('sw (Sweden):', sw);
console.log('den (Denmark):', den);
console.log('nor (Norway):', nor);

// Câu 3: Phân rã đối tượng rectangle theo các thuộc tính: width, height, area, perimeter
const { width, height, area, perimeter } = rectangle;

console.log('\n=== CÂU 3: Destructuring đối tượng rectangle ===');
console.log('width (Chiều rộng):', width);
console.log('height (Chiều cao):', height);
console.log('area (Diện tích):', area);
console.log('perimeter (Chu vi):', perimeter);
