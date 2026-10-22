const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'United States',
  'United Kingdom',
  'Chad',
  'Oman',
  'Peru'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Câu 1: Sao chép mảng countries (tránh biến đổi mảng gốc)
const copyCountries = [...countries];
console.log(copyCountries);

// Câu 2: Sắp xếp mảng đã sao chép và lưu vào biến sortedCountries
const sortedCountries = [...countries].sort();
console.log(sortedCountries);

// Câu 3: Sắp xếp mảng webTechs và mernStack
console.log([...webTechs].sort());
console.log([...mernStack].sort());

// Câu 4: Trích xuất tất cả các quốc gia chứa từ 'land'
let landList = [];
for (let c of countries) {
    if (c.toLowerCase().includes('land')) {
        landList.push(c);
    }
}
console.log(landList);

// Câu 5: Tìm quốc gia có số ký tự nhiều nhất
let longestCountryName = countries[0];
for (let c of countries) {
    if (c.length > longestCountryName.length) {
        longestCountryName = c;
    }
}
console.log(longestCountryName);

// Câu 6: Trích xuất các quốc gia chỉ có đúng 4 ký tự
let fourCharCountries = [];
for (let c of countries) {
    if (c.length === 4) {
        fourCharCountries.push(c);
    }
}
console.log(fourCharCountries);

// Câu 7: Trích xuất các quốc gia có chứa từ 2 từ trở lên
let twoOrMoreWords = [];
for (let c of countries) {
    if (c.includes(' ')) {
        twoOrMoreWords.push(c);
    }
}
console.log(twoOrMoreWords);

// Câu 8: Đảo ngược mảng countries và viết hoa tất cả các quốc gia
let reversedAndCapitalized = [];
for (let i = countries.length - 1; i >= 0; i--) {
    reversedAndCapitalized.push(countries[i].toUpperCase());
}
console.log(reversedAndCapitalized);
