// ==============================================================================
// 30 Days of JavaScript - Day 09: Higher Order Functions (Level 1)
// ==============================================================================

// Dữ liệu mẫu ban đầu theo đề bài
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log('--- DAY 09: LEVEL 1 ---');

// Câu 1: Giải thích sự khác biệt giữa forEach, map, filter, và reduce
/*
  - forEach: Duyệt qua từng phần tử của mảng để thực thi một tác vụ (side-effect), KHÔNG trả về mảng mới (kết quả trả về là undefined).
  - map: Duyệt qua từng phần tử, biến đổi phần tử đó qua hàm callback và TRẢ VỀ MẢNG MỚI có cùng số lượng phần tử với mảng ban đầu.
  - filter: Duyệt qua từng phần tử và kiểm tra theo điều kiện boolean, TRẢ VỀ MẢNG MỚI chỉ chứa những phần tử thỏa mãn điều kiện (callback return true).
  - reduce: Tích lũy (aggregate) các phần tử trong mảng lại thành một giá trị duy nhất (có thể là số, chuỗi, object, mảng...) dựa vào accumulator và giá trị khởi tạo.
*/
console.log('Câu 1: Đã giải thích chi tiết trong chú thích code.');

// Câu 2: Định nghĩa một hàm callback trước khi sử dụng trong forEach, map, filter hoặc reduce
const logItem = (item) => console.log('Item:', item);
const squareNumber = (num) => num * num;
const isEven = (num) => num % 2 === 0;

console.log('Câu 2: Callback mẫu:');
[1, 2, 3].forEach(logItem);

// Câu 3: Dùng forEach để in từng quốc gia trong mảng countries
console.log('Câu 3: In từng quốc gia trong mảng countries:');
countries.forEach((country) => {
  console.log(country);
});

// Câu 4: Dùng forEach để in từng tên trong mảng names
console.log('Câu 4: In từng tên trong mảng names:');
names.forEach((name) => {
  console.log(name);
});

// Câu 5: Dùng forEach để in từng số trong mảng numbers
console.log('Câu 5: In từng số trong mảng numbers:');
numbers.forEach((num) => {
  console.log(num);
});

// Câu 6: Dùng map tạo mảng mới biến đổi mỗi quốc gia thành chữ in hoa
const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log('Câu 6: Quốc gia in hoa:', uppercaseCountries);

// Câu 7: Dùng map tạo mảng mới chứa độ dài của từng quốc gia
const countriesLength = countries.map((country) => country.length);
console.log('Câu 7: Độ dài tên từng quốc gia:', countriesLength);

// Câu 8: Dùng map tạo mảng mới biến đổi mỗi số thành bình phương của nó
const squaredNumbers = numbers.map((num) => num ** 2);
console.log('Câu 8: Mảng bình phương:', squaredNumbers);

// Câu 9: Dùng map chuyển mỗi tên thành chữ in hoa trong mảng names
const uppercaseNames = names.map((name) => name.toUpperCase());
console.log('Câu 9: Tên in hoa:', uppercaseNames);

// Câu 10: Dùng map để chuyển mảng products thành mảng chứa giá tương ứng
const productPrices = products.map((item) => item.price);
console.log('Câu 10: Danh sách giá sản phẩm:', productPrices);

// Câu 11: Dùng filter lọc ra các quốc gia có chứa 'land' (không phân biệt hoa/thường)
const countriesWithLand = countries.filter((country) => country.toLowerCase().includes('land'));
console.log('Câu 11: Quốc gia chứa "land":', countriesWithLand);

// Câu 12: Dùng filter lọc ra các quốc gia có đúng 6 ký tự
const sixCharCountries = countries.filter((country) => country.length === 6);
console.log('Câu 12: Quốc gia có đúng 6 ký tự:', sixCharCountries);

// Câu 13: Dùng filter lọc ra các quốc gia có từ 6 ký tự trở lên
const sixOrMoreCharCountries = countries.filter((country) => country.length >= 6);
console.log('Câu 13: Quốc gia có từ 6 ký tự trở lên:', sixOrMoreCharCountries);

// Câu 14: Dùng filter lọc ra quốc gia bắt đầu bằng chữ 'E'
const countriesStartWithE = countries.filter((country) => country.startsWith('E'));
console.log('Câu 14: Quốc gia bắt đầu bằng "E":', countriesStartWithE);

// Câu 15: Dùng filter lọc ra các sản phẩm chỉ có giá trị hợp lệ (bỏ qua chuỗi rỗng hoặc chỉ có khoảng trắng)
const validPriceProducts = products.filter((item) => typeof item.price === 'number' && !isNaN(item.price));
console.log('Câu 15: Sản phẩm có giá hợp lệ:', validPriceProducts);

// Câu 16: Khai báo hàm getStringLists nhận vào mảng và chỉ trả về mảng các phần tử kiểu string
function getStringLists(arr) {
  return arr.filter((item) => typeof item === 'string');
}
console.log('Câu 16: Lọc mảng chuỗi getStringLists([1, "apple", true, "banana", 42]):', getStringLists([1, 'apple', true, 'banana', 42]));

// Câu 17: Dùng reduce để tính tổng tất cả các số trong mảng numbers
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Câu 17: Tổng các số trong numbers:', totalSum);

// Câu 18: Dùng reduce để nối tất cả quốc gia thành câu:
// "Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries"
const northCountries = ['Estonia', ...countries];
const sentence = northCountries.reduce((acc, curr, index) => {
  if (index === 0) {
    return curr;
  }
  if (index === northCountries.length - 1) {
    return `${acc}, and ${curr} are north European countries`;
  }
  return `${acc}, ${curr}`;
}, '');
console.log('Câu 18: Nối chuỗi câu hoàn chỉnh:');
console.log(sentence);

// Câu 19: Giải thích sự khác biệt giữa some và every
/*
  - some: Kiểm tra xem có ÍT NHẤT MỘT phần tử trong mảng thỏa mãn điều kiện callback hay không.
          Chỉ cần 1 phần tử true thì kết quả là true; nếu toàn bộ false thì mới trả về false.
  - every: Kiểm tra xem TẤT CẢ các phần tử trong mảng có thỏa mãn điều kiện callback hay không.
          Chỉ cần 1 phần tử false thì kết quả là false; phải tất cả true mới trả về true.
*/
console.log('Câu 19: Đã giải thích chi tiết trong chú thích code.');

// Câu 20: Dùng some kiểm tra xem có tên nào có độ dài lớn hơn 7 trong mảng names
const hasLongName = names.some((name) => name.length > 7);
console.log('Câu 20: Có tên nào dài hơn 7 ký tự không?', hasLongName);

// Câu 21: Dùng every kiểm tra xem tất cả quốc gia có đều chứa từ 'land' hay không
const allContainLand = countries.every((country) => country.toLowerCase().includes('land'));
console.log('Câu 21: Tất cả quốc gia đều chứa "land"?', allContainLand);

// Câu 22: Giải thích sự khác biệt giữa find và findIndex
/*
  - find: Trả về PHẦN TỬ ĐẦU TIÊN trong mảng thỏa mãn điều kiện. Nếu không tìm thấy, trả về undefined.
  - findIndex: Trả về VỊ TRÍ CHỈ SỐ (index) ĐẦU TIÊN của phần tử thỏa mãn điều kiện. Nếu không tìm thấy, trả về -1.
*/
console.log('Câu 22: Đã giải thích chi tiết trong chú thích code.');

// Câu 23: Dùng find để tìm quốc gia đầu tiên có đúng 6 ký tự
const firstSixLetterCountry = countries.find((country) => country.length === 6);
console.log('Câu 23: Quốc gia đầu tiên có đúng 6 ký tự:', firstSixLetterCountry);

// Câu 24: Dùng findIndex để tìm vị trí của quốc gia đầu tiên có đúng 6 ký tự
const firstSixLetterIndex = countries.findIndex((country) => country.length === 6);
console.log('Câu 24: Vị trí của quốc gia đầu tiên có đúng 6 ký tự:', firstSixLetterIndex);

// Câu 25: Dùng findIndex để tìm vị trí của 'Norway' (trả về -1 nếu không tồn tại)
const norwayIndex = countries.findIndex((country) => country === 'Norway');
console.log('Câu 25: Vị trí của Norway:', norwayIndex);

// Câu 26: Dùng findIndex để tìm vị trí của 'Russia' (trả về -1 nếu không tồn tại)
const russiaIndex = countries.findIndex((country) => country === 'Russia');
console.log('Câu 26: Vị trí của Russia:', russiaIndex);
