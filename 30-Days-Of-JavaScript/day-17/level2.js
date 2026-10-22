/**
 * 30 Days of JavaScript - Day 17: Web Storages
 * Level 2
 */

console.log('%c=== DAY 17 - LEVEL 2 ===', 'color: #2ecc71; font-weight: bold; font-size: 14px;')

// Câu 1: Tạo đối tượng student với các thuộc tính firstName, lastName, age, skills, country, enrolled
const student = {
  firstName: 'Ngoc Long',
  lastName: 'Nguyen',
  age: 20,
  skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
  country: 'Vietnam',
  enrolled: true
}

console.log('--- Đối tượng student ban đầu ---')
console.log(student)

// Lưu đối tượng student vào localStorage
// Lưu ý: localStorage chỉ lưu trữ kiểu chuỗi (string), do đó phải dùng JSON.stringify() để chuyển đổi object thành chuỗi JSON
if (typeof localStorage !== 'undefined') {
  const studentJSON = JSON.stringify(student)
  localStorage.setItem('student', studentJSON)
  console.log('\n--- Đã lưu đối tượng student dạng chuỗi JSON vào localStorage ---')
  console.log('Chuỗi JSON trong localStorage:', localStorage.getItem('student'))

  // Đọc lại đối tượng từ localStorage và giải mã ngược lại bằng JSON.parse()
  const retrievedStudent = JSON.parse(localStorage.getItem('student'))
  console.log('\n--- Đối tượng student sau khi đọc từ localStorage và phân tích cú pháp (JSON.parse) ---')
  console.log(retrievedStudent)
  console.log(`Sinh viên: ${retrievedStudent.lastName} ${retrievedStudent.firstName}, Kỹ năng: ${retrievedStudent.skills.join(', ')}`)
} else {
  console.warn('localStorage không khả dụng trong môi trường hiện tại.')
}
