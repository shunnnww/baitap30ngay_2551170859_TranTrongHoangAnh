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
  'Kenya'
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

// Câu 1: Tạo một chuỗi ID ngẫu nhiên có độ dài bất kỳ (ví dụ 12 ký tự)
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let idLength = 12;
let randomAnyId = '';
for (let i = 0; i < idLength; i++) {
    randomAnyId += chars[Math.floor(Math.random() * chars.length)];
}
console.log(randomAnyId);

// Câu 2: Tạo một mã màu Hex ngẫu nhiên (ví dụ #ee33df)
let hexChars = '0123456789abcdef';
let hexColor = '#';
for (let i = 0; i < 6; i++) {
    hexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
}
console.log(hexColor);

// Câu 3: Tạo một mã màu RGB ngẫu nhiên (ví dụ rgb(240,180,80))
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
console.log(`rgb(${r},${g},${b})`);

// Câu 4: Tạo mảng mới chứa tên các quốc gia viết hoa toàn bộ
let upperCountries = [];
for (let c of countries) {
    upperCountries.push(c.toUpperCase());
}
console.log(upperCountries);

// Câu 5: Tạo mảng chứa độ dài ký tự của từng quốc gia
let countryLengths = [];
for (let c of countries) {
    countryLengths.push(c.length);
}
console.log(countryLengths);

// Câu 6: Tạo mảng lồng nhau chứa [Tên, Mã 3 chữ cái viết hoa, Độ dài]
let countriesInfo = [];
for (let c of countries) {
    countriesInfo.push([c, c.slice(0, 3).toUpperCase(), c.length]);
}
console.log(countriesInfo);

// Câu 7: Lọc các quốc gia có chứa từ 'land'
let landCountries = [];
for (let c of countries) {
    if (c.toLowerCase().includes('land')) {
        landCountries.push(c);
    }
}
console.log(landCountries.length > 0 ? landCountries : 'All these countries are without land');

// Câu 8: Lọc các quốc gia kết thúc bằng đuôi 'ia'
let iaCountries = [];
for (let c of countries) {
    if (c.toLowerCase().endsWith('ia')) {
        iaCountries.push(c);
    }
}
console.log(iaCountries.length > 0 ? iaCountries : 'These are countries ends without ia');

// Câu 9: Tìm quốc gia có số ký tự nhiều nhất
let longestCountry = countries[0];
for (let c of countries) {
    if (c.length > longestCountry.length) {
        longestCountry = c;
    }
}
console.log(longestCountry);

// Câu 10: Tìm các quốc gia có đúng 5 ký tự
let fiveCharCountries = [];
for (let c of countries) {
    if (c.length === 5) {
        fiveCharCountries.push(c);
    }
}
console.log(fiveCharCountries);

// Câu 11: Tìm từ dài nhất trong mảng webTechs
let longestTech = webTechs[0];
for (let t of webTechs) {
    if (t.length > longestTech.length) {
        longestTech = t;
    }
}
console.log(longestTech);

// Câu 12: Tạo mảng lồng nhau gồm [Công nghệ, Độ dài] từ webTechs
let techsWithLength = [];
for (let t of webTechs) {
    techsWithLength.push([t, t.length]);
}
console.log(techsWithLength);

// Câu 13: Tạo từ viết tắt MERN từ mảng mernStack
let mernAcronym = '';
for (let tech of mernStack) {
    mernAcronym += tech[0];
}
console.log(mernAcronym);

// Câu 14: Lặp qua mảng webTechs bằng for...of và in từng phần tử
for (let tech of webTechs) {
    console.log(tech);
}

// Câu 15: Đảo ngược mảng trái cây bằng vòng lặp (không dùng reverse)
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

// Câu 16: In tất cả các phần tử trong mảng lồng nhau fullStack viết hoa
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (let row of fullStack) {
    for (let item of row) {
        console.log(item.toUpperCase());
    }
}
