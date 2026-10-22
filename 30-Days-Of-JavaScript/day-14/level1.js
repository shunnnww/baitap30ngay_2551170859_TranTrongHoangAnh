// ==========================================
// 30 Days of JavaScript - Day 14: Error Handling
// LEVEL 1: Xử lý ngoại lệ trong JavaScript
// ==========================================

console.log('%c--- DAY 14: ERROR HANDLING ---', 'color: red; font-weight: bold; font-size: 14px');

// ==========================================
// Câu 1: Cấu trúc cơ bản của khối lệnh try...catch
// ==========================================
console.log('%cCâu 1: Khối lệnh try...catch cơ bản', 'font-weight: bold; color: #0d6efd');
try {
  // Thử truy cập một biến chưa từng được khai báo
  let lastName = 'Yetayeh';
  let fullName = firstName + ' ' + lastName; // firstName chưa khai báo -> gây lỗi
  console.log(fullName);
} catch (err) {
  console.log('Đã bắt được lỗi thành công trong catch block:');
  console.log('- Tên loại lỗi (err.name):', err.name);
  console.log('- Thông điệp lỗi (err.message):', err.message);
}

// ==========================================
// Câu 2: Cấu trúc đầy đủ try...catch...finally
// ==========================================
console.log('\n%cCâu 2: Khối lệnh try...catch...finally (finally luôn được thực thi)', 'font-weight: bold; color: #0d6efd');
try {
  console.log('Bắt đầu khối try...');
  let result = 10 / 2;
  console.log('Kết quả phép tính hợp lệ:', result);
  // Cố ý truy cập thuộc tính của undefined
  let obj = undefined;
  console.log(obj.property);
} catch (err) {
  console.log('Khối catch được kích hoạt do lỗi:', err.message);
} finally {
  console.log('Khối finally: Luôn luôn chạy dù có lỗi hay không có lỗi!');
}

// ==========================================
// Câu 3: Cơ chế ném lỗi tùy biến bằng throw và throw new Error()
// ==========================================
console.log('\n%cCâu 3: Ném lỗi tùy biến với throw new Error()', 'font-weight: bold; color: #0d6efd');
function validateAge(age) {
  if (age === undefined || age === null || age === '') {
    throw new Error('Dữ liệu tuổi không được để trống!');
  }
  if (typeof age !== 'number' || isNaN(age)) {
    throw new TypeError('Tuổi phải là một giá trị số hợp lệ!');
  }
  if (age < 0) {
    throw new RangeError('Tuổi không thể là số âm (< 0)!');
  }
  if (age > 120) {
    throw new RangeError('Tuổi không thể lớn hơn 120!');
  }
  return `Tuổi hợp lệ: ${age}`;
}

const testAges = [25, '', 'hai muoi', -5, 150];

testAges.forEach((val) => {
  try {
    console.log(`Đang kiểm tra tuổi: [${val}]`);
    let res = validateAge(val);
    console.log('->', res);
  } catch (err) {
    console.log(`-> Bắt lỗi [${err.name}]: ${err.message}`);
  }
});

// ==========================================
// Câu 4: Nhận diện và xử lý ReferenceError
// ==========================================
console.log('\n%cCâu 4: Lỗi tham chiếu ReferenceError', 'font-weight: bold; color: #0d6efd');
// ReferenceError xảy ra khi ta tham chiếu đến một biến chưa tồn tại
try {
  let x = 10;
  let y = 20;
  let z = x + y + undefinedVariable;
  console.log(z);
} catch (err) {
  console.log('Loại lỗi:', err.name);
  console.log('Chi tiết:', err.message);
}

// ==========================================
// Câu 5: Nhận diện và xử lý TypeError
// ==========================================
console.log('\n%cCâu 5: Lỗi kiểu dữ liệu TypeError', 'font-weight: bold; color: #0d6efd');
// TypeError xảy ra khi thực hiện thao tác không phù hợp với kiểu dữ liệu
try {
  let num = 12345;
  // Cố gọi phương thức toLowerCase() của chuỗi trên một số
  num.toLowerCase();
} catch (err) {
  console.log('Loại lỗi:', err.name);
  console.log('Chi tiết:', err.message);
}

try {
  const PI = 3.14;
  PI = 3.14159; // Gán lại giá trị cho hằng số const
} catch (err) {
  console.log('Loại lỗi (gán hằng số):', err.name);
  console.log('Chi tiết:', err.message);
}

// ==========================================
// Câu 6: Nhận diện và xử lý RangeError
// ==========================================
console.log('\n%cCâu 6: Lỗi phạm vi RangeError', 'font-weight: bold; color: #0d6efd');
// RangeError xảy ra khi một giá trị nằm ngoài tập giá trị được cho phép
try {
  // Tạo mảng với độ dài là số âm
  let invalidArray = new Array(-10);
  console.log(invalidArray);
} catch (err) {
  console.log('Loại lỗi (độ dài mảng âm):', err.name);
  console.log('Chi tiết:', err.message);
}

try {
  let num = 42.123456;
  // toFixed chỉ nhận tham số từ 0 đến 100
  console.log(num.toFixed(200));
} catch (err) {
  console.log('Loại lỗi (toFixed ngoài khoảng):', err.name);
  console.log('Chi tiết:', err.message);
}

// ==========================================
// Câu 7: Nhận diện và xử lý SyntaxError
// ==========================================
console.log('\n%cCâu 7: Lỗi cú pháp SyntaxError', 'font-weight: bold; color: #0d6efd');
// Lưu ý: Lỗi cú pháp viết trực tiếp trong file code JS sẽ dừng trình thông dịch ngay lúc parse.
// Tuy nhiên, SyntaxError trong thời gian chạy (runtime) có thể bắt được thông qua JSON.parse()
try {
  let malformedJson = '{"name": "Asabeneh", "age": 250, }'; // Dư dấu phẩy cuối cùng
  JSON.parse(malformedJson);
} catch (err) {
  console.log('Loại lỗi (JSON không hợp lệ):', err.name);
  console.log('Chi tiết:', err.message);
}

// ==========================================
// Câu 8: Ứng dụng thực tế: Phân tích JSON an toàn (safeJsonParse)
// ==========================================
console.log('\n%cCâu 8: Ứng dụng thực tế - Hàm safeJsonParse an toàn', 'font-weight: bold; color: #0d6efd');
function safeJsonParse(jsonString, defaultValue = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.warn(`[safeJsonParse] Không thể phân tích JSON hợp lệ: "${jsonString}". Lỗi: ${error.message}`);
    return defaultValue;
  } finally {
    console.log('[safeJsonParse] Hoàn tất quá trình xử lý chuỗi JSON.');
  }
}

const validJson = '{"name": "JavaScript", "creator": "Brendan Eich"}';
const invalidJson = '{name: Brendan}'; // Chuỗi JSON lỗi

console.log('Dữ liệu hợp lệ:', safeJsonParse(validJson));
console.log('Dữ liệu không hợp lệ (fallback mặc định):', safeJsonParse(invalidJson, {}));
