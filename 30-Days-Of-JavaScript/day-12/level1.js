// ==========================================
// 30 Days of JavaScript - Day 12: Level 1
// Regular Expressions (Biểu thức chính quy - Regex)
// ==========================================

// Câu 1: Tính tổng thu nhập hàng năm từ đoạn văn bản bằng cách trích xuất số bằng biểu thức chính quy (Regex)
// Đoạn văn: "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
console.log('=== CÂU 1: Tính tổng thu nhập hàng năm ===');
const textIncome = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// Biểu thức chính quy /\d+/g: tìm tất cả các chuỗi số liên tiếp
const incomeNumbers = textIncome.match(/\d+/g).map(Number);
console.log('Các số trích xuất được từ văn bản:', incomeNumbers);

const monthlySalary = incomeNumbers[0];  // 4000 euro / tháng
const annualBonus = incomeNumbers[1];    // 10000 euro / năm (thưởng)
const monthlyCourses = incomeNumbers[2]; // 5500 euro / tháng (khóa học online)

// Tính tổng thu nhập cả năm = (lương tháng * 12) + thưởng năm + (thu nhập khóa học * 12)
const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);
console.log(`Lương tháng: ${monthlySalary} € * 12 = ${monthlySalary * 12} €`);
console.log(`Thưởng hàng năm: ${annualBonus} €`);
console.log(`Thu nhập dạy học online: ${monthlyCourses} € * 12 = ${monthlyCourses * 12} €`);
console.log(`=> Tổng thu nhập hàng năm: ${totalAnnualIncome.toLocaleString()} euro`);


// Câu 2: Trích xuất tọa độ các hạt trên trục hoành x và tìm khoảng cách giữa hai hạt xa nhất
// Đoạn văn: "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."
console.log('\n=== CÂU 2: Khoảng cách giữa hai hạt xa nhất trên trục số ===');
const textPoints = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';

// Biểu thức chính quy /-?\d+/g: tìm các số nguyên bao gồm cả dấu âm (-) nếu có
const points = textPoints.match(/-?\d+/g).map(Number);
console.log('Tọa độ các hạt trích xuất được:', points);

// Sắp xếp các điểm theo thứ tự tăng dần từ nhỏ nhất đến lớn nhất
const sortedPoints = [...points].sort((a, b) => a - b);
console.log('Tọa độ các hạt sau khi sắp xếp:', sortedPoints);

// Khoảng cách = điểm xa nhất bên phải - điểm xa nhất bên trái
const minPoint = sortedPoints[0];
const maxPoint = sortedPoints[sortedPoints.length - 1];
const distance = maxPoint - minPoint;

console.log(`Điểm nhỏ nhất (xa nhất bên âm): ${minPoint}`);
console.log(`Điểm lớn nhất (xa nhất bên dương): ${maxPoint}`);
console.log(`=> Khoảng cách giữa hai hạt xa nhất: ${maxPoint} - (${minPoint}) = ${distance}`);


// Câu 3: Viết hàm kiểm tra xem một chuỗi có phải là tên biến hợp lệ trong JavaScript hay không
console.log('\n=== CÂU 3: Kiểm tra tên biến hợp lệ trong JavaScript ===');

/**
 * Quy tắc đặt tên biến trong JavaScript:
 * - Phải bắt đầu bằng chữ cái (a-z, A-Z), dấu gạch dưới (_) hoặc dấu đô la ($)
 * - Các ký tự tiếp theo có thể gồm chữ cái, chữ số (0-9), dấu gạch dưới (_) hoặc dấu đô la ($)
 * - Không được chứa dấu gạch ngang (-), khoảng trắng hay các ký tự đặc biệt khác
 * - Không được bắt đầu bằng chữ số
 */
function is_valid_variable(variableName) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(variableName);
}

// Tạo alias camelCase chuẩn JavaScript
const isValidVariable = is_valid_variable;

console.log("is_valid_variable('first_name'):", is_valid_variable('first_name'));   // true
console.log("is_valid_variable('first-name'):", is_valid_variable('first-name'));   // false (chứa dấu gạch ngang -)
console.log("is_valid_variable('1first_name'):", is_valid_variable('1first_name')); // false (bắt đầu bằng chữ số)
console.log("is_valid_variable('firstname'):", is_valid_variable('firstname'));     // true
console.log("is_valid_variable('$total_sum'):", is_valid_variable('$total_sum'));   // true
console.log("is_valid_variable('_variable'):", is_valid_variable('_variable'));     // true
console.log("is_valid_variable('user name'):", is_valid_variable('user name'));     // false (chứa khoảng trắng)
