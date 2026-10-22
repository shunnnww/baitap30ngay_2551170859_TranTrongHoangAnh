// ==========================================
// 30 DAYS OF JAVASCRIPT - DAY 07 (FUNCTIONS)
// LEVEL 1
// ==========================================

console.log('=== DAY 07 - LEVEL 1 ===');

// Câu 1: Khai báo hàm fullName in họ tên đầy đủ ra console
function fullName() {
  const name = 'Nguyen Van A';
  console.log('Câu 1 - Họ và tên:', name);
}
fullName();

// Câu 2: Khai báo hàm fullName nhận tham số firstName, lastName và trả về họ tên đầy đủ
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log('Câu 2 - Họ tên đầy đủ:', getFullName('Nguyễn', 'Văn An'));

// Câu 3: Khai báo hàm addNumbers nhận hai tham số và trả về tổng
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log('Câu 3 - Tổng 2 số (15 + 25):', addNumbers(15, 25));

// Câu 4: Tính diện tích hình chữ nhật (area = length * width)
function areaOfRectangle(length, width) {
  return length * width;
}
console.log('Câu 4 - Diện tích hình chữ nhật (dài 10, rộng 5):', areaOfRectangle(10, 5));

// Câu 5: Tính chu vi hình chữ nhật (perimeter = 2 * (length + width))
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log('Câu 5 - Chu vi hình chữ nhật (dài 10, rộng 5):', perimeterOfRectangle(10, 5));

// Câu 6: Tính thể tích hình hộp chữ nhật (volume = length * width * height)
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log('Câu 6 - Thể tích hình hộp chữ nhật (10 x 5 x 2):', volumeOfRectPrism(10, 5, 2));

// Câu 7: Tính diện tích hình tròn (area = PI * r * r)
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log('Câu 7 - Diện tích hình tròn bán kính 7:', areaOfCircle(7).toFixed(2));

// Câu 8: Tính chu vi hình tròn (circumference = 2 * PI * r)
function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log('Câu 8 - Chu vi hình tròn bán kính 7:', circumOfCircle(7).toFixed(2));

// Câu 9: Tính khối lượng riêng của chất (density = mass / volume)
function density(mass, volume) {
  if (volume === 0) return 'Thể tích phải khác 0';
  return mass / volume;
}
console.log('Câu 9 - Khối lượng riêng (khối lượng 100kg, thể tích 20m3):', density(100, 20), 'kg/m³');

// Câu 10: Tính tốc độ di chuyển (speed = distance / time)
function speed(distance, time) {
  if (time === 0) return 'Thời gian phải khác 0';
  return distance / time;
}
console.log('Câu 10 - Vận tốc (quãng đường 120km, thời gian 2 giờ):', speed(120, 2), 'km/h');

// Câu 11: Tính trọng lượng vật thể (weight = mass * gravity)
function weight(mass, gravity = 9.81) {
  return mass * gravity;
}
console.log('Câu 11 - Trọng lượng (khối lượng 60kg trên Trái Đất):', weight(60), 'N');

// Câu 12: Đổi nhiệt độ từ độ C sang độ F (oF = (oC * 9/5) + 32)
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log('Câu 12 - 30°C đổi sang °F:', convertCelsiusToFahrenheit(30), '°F');

// Câu 13: Tính chỉ số khối cơ thể (BMI = weight / (height * height)) và phân loại
function bmi(weightKg, heightM) {
  const bmiValue = weightKg / (heightM * heightM);
  let status = '';

  if (bmiValue < 18.5) {
    status = 'Thiếu cân (Underweight)';
  } else if (bmiValue <= 24.9) {
    status = 'Cân nặng bình thường (Normal weight)';
  } else if (bmiValue <= 29.9) {
    status = 'Thừa cân (Overweight)';
  } else {
    status = 'Béo phì (Obese)';
  }

  return `BMI: ${bmiValue.toFixed(2)} - Tình trạng: ${status}`;
}
console.log('Câu 13 - Kiểm tra BMI (65kg, 1.70m):', bmi(65, 1.70));
console.log('Câu 13 - Kiểm tra BMI (85kg, 1.65m):', bmi(85, 1.65));

// Câu 14: Hàm checkSeason kiểm tra mùa theo tháng nhập vào
function checkSeason(month) {
  if (typeof month === 'string') {
    month = month.toLowerCase().trim();
    if (['december', 'january', 'february', 'tháng 12', 'tháng 1', 'tháng 2'].includes(month)) {
      return 'Winter (Mùa đông)';
    } else if (['march', 'april', 'may', 'tháng 3', 'tháng 4', 'tháng 5'].includes(month)) {
      return 'Spring (Mùa xuân)';
    } else if (['june', 'july', 'august', 'tháng 6', 'tháng 7', 'tháng 8'].includes(month)) {
      return 'Summer (Mùa hè)';
    } else if (['september', 'october', 'november', 'tháng 9', 'tháng 10', 'tháng 11'].includes(month)) {
      return 'Autumn (Mùa thu)';
    }
  } else if (typeof month === 'number') {
    if (month === 12 || month === 1 || month === 2) return 'Winter (Mùa đông)';
    if (month >= 3 && month <= 5) return 'Spring (Mùa xuân)';
    if (month >= 6 && month <= 8) return 'Summer (Mùa hè)';
    if (month >= 9 && month <= 11) return 'Autumn (Mùa thu)';
  }
  return 'Tháng không hợp lệ';
}
console.log('Câu 14 - Mùa của tháng October:', checkSeason('October'));
console.log('Câu 14 - Mùa của tháng 4:', checkSeason(4));

// Câu 15: Hàm findMax tìm giá trị lớn nhất trong 3 số mà KHÔNG dùng Math.max
function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;
  return max;
}
console.log('Câu 15 - findMax(0, -10, -2):', findMax(0, -10, -2));
console.log('Câu 15 - findMax(0, 10, 5):', findMax(0, 10, 5));
