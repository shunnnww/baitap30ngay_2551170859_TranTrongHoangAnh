/**
 * 30 Days of JavaScript - Day 16: JSON
 * Level 2
 */

// Dữ liệu đối tượng student
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
}

console.log('%c=== DAY 16 - LEVEL 2 ===', 'color: #2ecc71; font-weight: bold; font-size: 14px;')

// Câu 1: Chuyển đổi đối tượng student sang chuỗi JSON chỉ giữ lại các thuộc tính firstName, lastName và skills
// Sử dụng tham số thứ 2 (replacer) là một mảng chứa tên các thuộc tính cần trích xuất
const studentFilteredJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)

console.log('--- Câu 1: Chuỗi JSON chỉ chứa firstName, lastName và skills ---')
console.log(studentFilteredJSON)

// Cách khác: Sử dụng hàm lọc (replacer function)
const studentFilteredByFunc = JSON.stringify(student, (key, value) => {
  if (key === 'age' || key === 'isMarried') {
    return undefined // Loại bỏ các trường không mong muốn
  }
  return value
}, 2)

console.log('\n--- Cách khác (dùng hàm lọc replacer): ---')
console.log(studentFilteredByFunc)
