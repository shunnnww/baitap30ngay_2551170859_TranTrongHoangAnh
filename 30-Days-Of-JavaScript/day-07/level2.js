// ==========================================
// 30 DAYS OF JAVASCRIPT - DAY 07 (FUNCTIONS)
// LEVEL 2
// ==========================================

console.log('=== DAY 07 - LEVEL 2 ===');

// Câu 1: Phương trình bậc nhất hai ẩn (ax + by + c = 0)
// Giải tìm x theo y, hoặc y theo x, hoặc tính giá trị biểu thức
function solveLinEquation(a, b, c, x = null, y = null) {
  if (x !== null && y !== null) {
    return a * x + b * y + c;
  }
  if (x !== null && y === null) {
    if (b === 0) return 'Không thể chia cho 0 khi b = 0';
    return (-c - a * x) / b; // Tìm y
  }
  if (y !== null && x === null) {
    if (a === 0) return 'Không thể chia cho 0 khi a = 0';
    return (-c - b * y) / a; // Tìm x
  }
  return `Phương trình: ${a}x + ${b}y + ${c} = 0`;
}
console.log('Câu 1 - Giải PT bậc nhất (2x + 4y - 8 = 0, với x = 2 tìm y):', solveLinEquation(2, 4, -8, 2, null));

// Câu 2: Giải phương trình bậc 2 (ax^2 + bx + c = 0)
function solveQuadEquation(a = 0, b = 0, c = 0) {
  if (a === 0) {
    if (b === 0) {
      return c === 0 ? 'Phương trình vô số nghiệm' : 'Phương trình vô nghiệm';
    }
    return [-c / b];
  }
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return 'Phương trình không có nghiệm thực';
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
  }
}
console.log('Câu 2 - solveQuadEquation():', solveQuadEquation());
console.log('Câu 2 - solveQuadEquation(1, 4, 4):', solveQuadEquation(1, 4, 4));
console.log('Câu 2 - solveQuadEquation(1, -1, -2):', solveQuadEquation(1, -1, -2));
console.log('Câu 2 - solveQuadEquation(1, 7, 12):', solveQuadEquation(1, 7, 12));
console.log('Câu 2 - solveQuadEquation(1, 0, 1):', solveQuadEquation(1, 0, 1));

// Câu 3: Hàm printArray nhận một mảng và in từng phần tử ra console
function printArray(arr) {
  for (const item of arr) {
    console.log(item);
  }
}
console.log('Câu 3 - In mảng:');
printArray(['HTML', 'CSS', 'JavaScript', 'React']);

// Câu 4: Hàm showDateTime hiển thị thời gian hiện tại theo định dạng DD/MM/YYYY HH:mm
function showDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
console.log('Câu 4 - Thời gian hiện tại:', showDateTime());

// Câu 5: Hàm swapValues hoán đổi giá trị của x và y
function swapValues(x, y) {
  const temp = x;
  x = y;
  y = temp;
  return [x, y];
}
console.log('Câu 5 - swapValues(3, 4):', swapValues(3, 4));
console.log('Câu 5 - swapValues(4, 5):', swapValues(4, 5));

// Câu 6: Hàm reverseArray đảo ngược một mảng mà không dùng phương thức reverse()
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log('Câu 6 - reverseArray([1, 2, 3, 4, 5]):', reverseArray([1, 2, 3, 4, 5]));
console.log("Câu 6 - reverseArray(['A', 'B', 'C']):", reverseArray(['A', 'B', 'C']));

// Câu 7: Hàm capitalizeArray viết hoa tất cả phần tử trong mảng chuỗi
function capitalizeArray(arr) {
  return arr.map(item => String(item).toUpperCase());
}
console.log('Câu 7 - capitalizeArray:', capitalizeArray(['vietnam', 'japan', 'korea']));

// Câu 8: Hàm addItem thêm một phần tử vào mảng và trả về mảng mới
function addItem(arr, item) {
  const newArr = [...arr];
  newArr.push(item);
  return newArr;
}
console.log('Câu 8 - addItem:', addItem(['Táo', 'Chuối'], 'Cam'));

// Câu 9: Hàm removeItem xóa phần tử tại vị trí index và trả về mảng mới
function removeItem(arr, index) {
  const newArr = [...arr];
  if (index >= 0 && index < newArr.length) {
    newArr.splice(index, 1);
  }
  return newArr;
}
console.log('Câu 9 - removeItem index 1:', removeItem(['Táo', 'Chuối', 'Cam'], 1));

// Câu 10: Hàm sumOfNumbers tính tổng các số từ 1 đến n
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('Câu 10 - sumOfNumbers(10):', sumOfNumbers(10));

// Câu 11: Hàm sumOfOdds tính tổng các số lẻ từ 1 đến n
function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
  }
  return sum;
}
console.log('Câu 11 - sumOfOdds(10):', sumOfOdds(10));

// Câu 12: Hàm sumOfEven tính tổng các số chẵn từ 1 đến n
function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}
console.log('Câu 12 - sumOfEven(10):', sumOfEven(10));

// Câu 13: Hàm evensAndOdds đếm số chẵn và lẻ từ 0 đến n
function evensAndOdds(n) {
  let evens = 0;
  let odds = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`The number of odds are ${odds}.`);
  console.log(`The number of evens are ${evens}.`);
  return { evens, odds };
}
console.log('Câu 13 - evensAndOdds(100):');
evensAndOdds(100);

// Câu 14: Hàm nhận số lượng tham số bất kỳ và tính tổng
function sumAllArguments(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log('Câu 14 - sumAllArguments(1, 2, 3):', sumAllArguments(1, 2, 3));
console.log('Câu 14 - sumAllArguments(1, 2, 3, 4, 5):', sumAllArguments(1, 2, 3, 4, 5));

// Câu 15: Hàm randomUserIp sinh địa chỉ IP ngẫu nhiên dạng IPv4
function randomUserIp() {
  const octet1 = Math.floor(Math.random() * 256);
  const octet2 = Math.floor(Math.random() * 256);
  const octet3 = Math.floor(Math.random() * 256);
  const octet4 = Math.floor(Math.random() * 256);
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
console.log('Câu 15 - randomUserIp():', randomUserIp());

// Câu 16: Hàm randomMacAddress sinh địa chỉ MAC ngẫu nhiên
function randomMacAddress() {
  const hexDigits = '0123456789ABCDEF';
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const part = hexDigits[Math.floor(Math.random() * 16)] + hexDigits[Math.floor(Math.random() * 16)];
    parts.push(part);
  }
  return parts.join(':');
}
console.log('Câu 16 - randomMacAddress():', randomMacAddress());

// Câu 17: Hàm randomHexaNumberGenerator sinh mã màu thập lục phân (hexadecimal)
function randomHexaNumberGenerator() {
  const hexDigits = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log('Câu 17 - randomHexaNumberGenerator():', randomHexaNumberGenerator());

// Câu 18: Hàm userIdGenerator tạo chuỗi ID ngẫu nhiên gồm 7 ký tự
function userIdGenerator() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    userId += characters[randomIndex];
  }
  return userId;
}
console.log('Câu 18 - userIdGenerator():', userIdGenerator());
