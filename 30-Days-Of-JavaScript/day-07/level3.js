// ==========================================
// 30 DAYS OF JAVASCRIPT - DAY 07 (FUNCTIONS)
// LEVEL 3
// ==========================================

console.log('=== DAY 07 - LEVEL 3 ===');

// Câu 1: Hàm userIdGeneratedByUser sinh số lượng ID và độ dài ID theo yêu cầu
function userIdGeneratedByUser(charCount = null, idCount = null) {
  // Nếu chạy trên trình duyệt và không truyền tham số, dùng prompt
  if (charCount === null && typeof prompt === 'function') {
    charCount = parseInt(prompt('Nhập số ký tự của ID:') || '7', 10);
  } else if (charCount === null) {
    charCount = 5;
  }

  if (idCount === null && typeof prompt === 'function') {
    idCount = parseInt(prompt('Nhập số lượng ID cần tạo:') || '5', 10);
  } else if (idCount === null) {
    idCount = 5;
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const ids = [];

  for (let i = 0; i < idCount; i++) {
    let id = '';
    for (let j = 0; j < charCount; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
    ids.push(id);
  }

  return ids.join(' ');
}
console.log('Câu 1 - userIdGeneratedByUser(5, 5):', userIdGeneratedByUser(5, 5));

// Câu 2: Hàm rgbColorGenerator sinh màu RGB ngẫu nhiên
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log('Câu 2 - rgbColorGenerator():', rgbColorGenerator());

// Câu 3: Hàm arrayOfHexaColors trả về mảng các mã màu hexa
function arrayOfHexaColors(count = 1) {
  const hexDigits = '0123456789abcdef';
  const colors = [];
  for (let i = 0; i < count; i++) {
    let hex = '#';
    for (let j = 0; j < 6; j++) {
      hex += hexDigits[Math.floor(Math.random() * 16)];
    }
    colors.push(hex);
  }
  return colors;
}
console.log('Câu 3 - arrayOfHexaColors(3):', arrayOfHexaColors(3));

// Câu 4: Hàm arrayOfRgbColors trả về mảng các mã màu RGB
function arrayOfRgbColors(count = 1) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(rgbColorGenerator());
  }
  return colors;
}
console.log('Câu 4 - arrayOfRgbColors(3):', arrayOfRgbColors(3));

// Câu 5: Hàm convertHexaToRgb chuyển mã hexa thành rgb
function convertHexaToRgb(hex) {
  // Loại bỏ dấu # nếu có
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  if (hex.length !== 6) return 'Mã hex không hợp lệ';

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
console.log("Câu 5 - convertHexaToRgb('#ffffff'):", convertHexaToRgb('#ffffff'));
console.log("Câu 5 - convertHexaToRgb('#ff5733'):", convertHexaToRgb('#ff5733'));

// Câu 6: Hàm convertRgbToHexa chuyển rgb thành hexa
function convertRgbToHexa(rgbStr) {
  const matches = rgbStr.match(/\d+/g);
  if (!matches || matches.length < 3) return 'Chuỗi RGB không hợp lệ';

  const [r, g, b] = matches.map(Number);
  const toHex = num => num.toString(16).padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
console.log("Câu 6 - convertRgbToHexa('rgb(255, 87, 51)'):", convertRgbToHexa('rgb(255, 87, 51)'));

// Câu 7: Hàm generateColors sinh bất kỳ số lượng mã màu hexa hoặc rgb
function generateColors(type, count) {
  type = type.toLowerCase();
  if (type === 'hexa') {
    const list = arrayOfHexaColors(count);
    return count === 1 ? list[0] : list;
  } else if (type === 'rgb') {
    const list = arrayOfRgbColors(count);
    return count === 1 ? list[0] : list;
  }
  return 'Loại màu không hợp lệ. Hãy chọn "hexa" hoặc "rgb".';
}
console.log("Câu 7 - generateColors('hexa', 3):", generateColors('hexa', 3));
console.log("Câu 7 - generateColors('hexa', 1):", generateColors('hexa', 1));
console.log("Câu 7 - generateColors('rgb', 3):", generateColors('rgb', 3));
console.log("Câu 7 - generateColors('rgb', 1):", generateColors('rgb', 1));

// Câu 8: Hàm shuffleArray xáo trộn một mảng (Fisher-Yates Shuffle)
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
console.log('Câu 8 - shuffleArray([1, 2, 3, 4, 5, 6, 7]):', shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// Câu 9: Hàm factorial tính giai thừa của một số nguyên không âm
function factorial(n) {
  if (n < 0) return 'Giai thừa chỉ áp dụng cho số nguyên không âm';
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log('Câu 9 - factorial(5):', factorial(5));
console.log('Câu 9 - factorial(0):', factorial(0));

// Câu 10: Hàm isEmpty kiểm tra một giá trị có rỗng hay không
function isEmpty(val) {
  if (val === null || val === undefined) return true;
  if (typeof val === 'string' || Array.isArray(val)) return val.length === 0;
  if (typeof val === 'object') return Object.keys(val).length === 0;
  return false;
}
console.log("Câu 10 - isEmpty(''):", isEmpty(''));
console.log('Câu 10 - isEmpty([]):', isEmpty([]));
console.log('Câu 10 - isEmpty({}):', isEmpty({}));
console.log("Câu 10 - isEmpty('Hello'):", isEmpty('Hello'));

// Câu 11: Hàm sum nhận bất kỳ số lượng đối số nào và trả về tổng
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log('Câu 11 - sum(10, 20, 30, 40):', sum(10, 20, 30, 40));

// Câu 12: Hàm sumOfArrayItems tính tổng các phần tử trong mảng (kiểm tra kiểu số)
function sumOfArrayItems(arr) {
  if (!Array.isArray(arr)) return 'Đối số phải là một mảng';
  let total = 0;
  for (const item of arr) {
    if (typeof item !== 'number' || isNaN(item)) {
      return 'Lỗi: Tất cả các phần tử trong mảng phải là kiểu số (number).';
    }
    total += item;
  }
  return total;
}
console.log('Câu 12 - sumOfArrayItems([1, 2, 3, 4, 5]):', sumOfArrayItems([1, 2, 3, 4, 5]));
console.log("Câu 12 - sumOfArrayItems([1, 2, '3', 4]):", sumOfArrayItems([1, 2, '3', 4]));

// Câu 13: Hàm average tính trung bình cộng các phần tử trong mảng
function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 'Mảng không hợp lệ hoặc rỗng';
  let total = 0;
  for (const item of arr) {
    if (typeof item !== 'number' || isNaN(item)) {
      return 'Lỗi: Tất cả các phần tử trong mảng phải là kiểu số (number).';
    }
    total += item;
  }
  return total / arr.length;
}
console.log('Câu 13 - average([2, 4, 6, 8, 10]):', average([2, 4, 6, 8, 10]));

// Câu 14: Hàm modifyArray thay đổi phần tử thứ 5 thành viết hoa
function modifyArray(arr) {
  if (arr.length < 5) {
    return 'Item not found';
  }
  const result = [...arr];
  result[4] = String(result[4]).toUpperCase();
  return result;
}
console.log(
  'Câu 14 - modifyArray đủ 6 phần tử:',
  modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
);
console.log(
  'Câu 14 - modifyArray 4 phần tử:',
  modifyArray(['Google', 'Facebook', 'Apple', 'Amazon'])
);

// Câu 15: Hàm isPrime kiểm tra xem một số có phải số nguyên tố hay không
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log('Câu 15 - isPrime(7):', isPrime(7));
console.log('Câu 15 - isPrime(12):', isPrime(12));
console.log('Câu 15 - isPrime(29):', isPrime(29));

// Câu 16: Hàm areAllUnique kiểm tra các phần tử trong mảng có duy nhất hay không
function areAllUnique(arr) {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return false;
    seen.add(item);
  }
  return true;
}
console.log('Câu 16 - areAllUnique([1, 2, 3, 4, 5]):', areAllUnique([1, 2, 3, 4, 5]));
console.log('Câu 16 - areAllUnique([1, 2, 3, 2, 5]):', areAllUnique([1, 2, 3, 2, 5]));

// Câu 17: Hàm isSameType kiểm tra tất cả phần tử trong mảng có cùng kiểu dữ liệu không
function isSameType(arr) {
  if (arr.length === 0) return true;
  const firstType = typeof arr[0];
  return arr.every(item => typeof item === firstType);
}
console.log("Câu 17 - isSameType(['a', 'b', 'c']):", isSameType(['a', 'b', 'c']));
console.log("Câu 17 - isSameType(['a', 1, 'c']):", isSameType(['a', 1, 'c']));

// Câu 18: Hàm isValidVariable kiểm tra tên biến JavaScript có hợp lệ không
function isValidVariable(varName) {
  // Biến hợp lệ: bắt đầu bằng chữ cái, $ hoặc _, tiếp theo là chữ cái, số, $ hoặc _
  // Không được là từ khóa bảo lưu (reserved keywords)
  const reservedWords = [
    'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
    'delete', 'do', 'else', 'export', 'extends', 'finally', 'for', 'function',
    'if', 'import', 'in', 'instanceof', 'new', 'return', 'super', 'switch',
    'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield',
    'let', 'static', 'enum', 'await'
  ];

  if (reservedWords.includes(varName)) return false;
  const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return validPattern.test(varName);
}
console.log("Câu 18 - isValidVariable('myVar_1'):", isValidVariable('myVar_1'));
console.log("Câu 18 - isValidVariable('123var'):", isValidVariable('123var'));
console.log("Câu 18 - isValidVariable('first-name'):", isValidVariable('first-name'));
console.log("Câu 18 - isValidVariable('let'):", isValidVariable('let'));

// Câu 19: Hàm sevenRandomNumbers trả về mảng 7 số ngẫu nhiên duy nhất trong khoảng 0-9
function sevenRandomNumbers() {
  const numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numbers);
}
console.log('Câu 19 - sevenRandomNumbers():', sevenRandomNumbers());

// Câu 20: Hàm reverseCountries sao chép mảng các quốc gia và trả về mảng đảo ngược
function reverseCountries(countries) {
  const copy = [...countries];
  return copy.reverse();
}
const sampleCountries = ['Vietnam', 'Japan', 'France', 'Germany', 'Canada'];
console.log('Câu 20 - reverseCountries:', reverseCountries(sampleCountries));
console.log('Câu 20 - Mảng gốc không bị biến đổi:', sampleCountries);
