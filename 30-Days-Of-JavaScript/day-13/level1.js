// ==========================================
// 30 Days of JavaScript - Day 13: Console Object Methods
// LEVEL 1
// ==========================================

console.log('%c--- DAY 13: LEVEL 1 ---', 'color: green; font-weight: bold; font-size: 14px');

// Dữ liệu mẫu mảng các quốc gia (dạng chuỗi và dạng đối tượng)
const countriesArray = ['Vietnam', 'Japan', 'Canada', 'Finland', 'Germany', 'Australia'];

const countriesData = [
  { country: 'Vietnam', capital: 'Hanoi', population: 98000000 },
  { country: 'Japan', capital: 'Tokyo', population: 125800000 },
  { country: 'Canada', capital: 'Ottawa', population: 38250000 },
  { country: 'Finland', capital: 'Helsinki', population: 5540000 },
  { country: 'Germany', capital: 'Berlin', population: 83240000 }
];

// Đối tượng thông tin chi tiết một quốc gia
const countryObject = {
  name: 'Vietnam',
  capital: 'Hanoi',
  population: 98000000,
  languages: ['Vietnamese'],
  currency: 'VND'
};

// Câu 1: Hiển thị mảng countries dưới dạng bảng (console.table)
console.log('Câu 1: Hiển thị mảng các quốc gia dạng bảng:');
console.table(countriesArray);
console.table(countriesData);

// Câu 2: Hiển thị đối tượng country dưới dạng bảng (console.table)
console.log('Câu 2: Hiển thị đối tượng quốc gia dạng bảng:');
console.table(countryObject);

// Câu 3: Sử dụng console.group() và console.groupEnd() để nhóm các thông điệp log
console.log('Câu 3: Gom nhóm log bằng console.group:');

console.group('Danh sách thông tin các quốc gia châu Á');
console.log('Quốc gia 1: Vietnam - Thủ đô: Hanoi');
console.log('Quốc gia 2: Japan - Thủ đô: Tokyo');
console.log('Quốc gia 3: South Korea - Thủ đô: Seoul');
console.groupEnd();

console.group('Thông tin hệ thống và trình duyệt');
console.log('Platform:', typeof navigator !== 'undefined' ? navigator.platform : 'Browser/Runtime');
console.log('User Agent:', typeof navigator !== 'undefined' ? navigator.userAgent : 'Browser/Runtime');
console.groupEnd();
