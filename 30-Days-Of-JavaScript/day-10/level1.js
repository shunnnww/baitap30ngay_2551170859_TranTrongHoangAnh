// ==============================================================================
// 30 Days of JavaScript - Day 10: Sets and Maps (Level 1)
// ==============================================================================

console.log('--- DAY 10: LEVEL 1 ---');

// Dữ liệu ban đầu
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Câu 1: Tạo một Set rỗng
const emptySet = new Set();
console.log('Câu 1: Tạo Set rỗng:', emptySet);

// Câu 2: Tạo một Set chứa các số từ 0 đến 10 bằng vòng lặp
const numbersSet = new Set();
for (let i = 0; i <= 10; i++) {
  numbersSet.add(i);
}
console.log('Câu 2: Set từ 0 đến 10 bằng vòng lặp:', numbersSet);

// Câu 3: Xóa một phần tử khỏi Set
numbersSet.delete(0); // Xóa số 0
console.log('Câu 3: Set sau khi xóa phần tử 0:', numbersSet);

// Câu 4: Xóa sạch toàn bộ phần tử trong Set (clear)
const setTemp = new Set([1, 2, 3, 4, 5]);
setTemp.clear();
console.log('Câu 4: Set sau khi clear():', setTemp);

// Câu 5: Tạo một Set gồm 5 phần tử chuỗi từ một mảng
const stringArray = ['JavaScript', 'Python', 'Java', 'C++', 'Rust', 'JavaScript', 'Python'];
const stringSet = new Set(stringArray.slice(0, 5));
console.log('Câu 5: Set 5 phần tử chuỗi từ mảng:', stringSet);

// Câu 6: Tạo một Map chứa tên quốc gia và độ dài (số ký tự) của quốc gia đó
const countriesLengthMap = new Map();
countries.forEach((country) => {
  countriesLengthMap.set(country, country.length);
});

console.log('Câu 6: Map quốc gia và số lượng ký tự:');
console.log(countriesLengthMap);
// In ra chi tiết các cặp key - value trong Map
for (const [country, length] of countriesLengthMap) {
  console.log(`- ${country}: ${length} ký tự`);
}
