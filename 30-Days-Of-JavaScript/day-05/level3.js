// Câu 1: Phân tích mảng độ tuổi của 10 sinh viên
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sắp xếp mảng tăng dần
ages.sort((a, b) => a - b);
console.log(ages);

// Tìm độ tuổi nhỏ nhất (min) và lớn nhất (max)
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
console.log(minAge);
console.log(maxAge);

// Tìm độ tuổi trung vị (median age)
let mid = Math.floor(ages.length / 2);
let medianAge = ages.length % 2 === 0 ? (ages[mid - 1] + ages[mid]) / 2 : ages[mid];
console.log(medianAge);

// Tìm độ tuổi trung bình (average age)
let totalAge = ages.reduce((acc, curr) => acc + curr, 0);
let averageAge = totalAge / ages.length;
console.log(averageAge);

// Tìm khoảng biến thiên độ tuổi (range = max - min)
console.log(maxAge - minAge);

// So sánh |min - average| và |max - average|
console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));

// Câu 2: Cắt lấy 10 quốc gia đầu tiên từ mảng countries
const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
  'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados'
];
console.log(countries.slice(0, 10));

// Câu 3: Tìm quốc gia ở vị trí chính giữa mảng
let middleCountryIndex = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
    console.log(countries.slice(middleCountryIndex - 1, middleCountryIndex + 1));
} else {
    console.log(countries[middleCountryIndex]);
}

// Câu 4: Chia mảng thành 2 nửa (nếu số phần tử lẻ thì nửa đầu nhiều hơn 1 phần tử)
let halfIndex = Math.ceil(countries.length / 2);
let firstHalf = countries.slice(0, halfIndex);
let secondHalf = countries.slice(halfIndex);
console.log(firstHalf);
console.log(secondHalf);
