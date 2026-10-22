/**
 * 30 Days of JavaScript - Day 16: JSON
 * Level 1
 */

// Dữ liệu mẫu đề bài cung cấp
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']

const age = 250

const isMarried = true

const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
}

console.log('%c=== DAY 16 - LEVEL 1 ===', 'color: #3498db; font-weight: bold; font-size: 14px;')

// Câu 1: Chuyển đổi mảng skills thành chuỗi JSON bằng JSON.stringify()
const skillsJSON = JSON.stringify(skills)
console.log('--- Câu 1: Mảng skills sau khi chuyển sang JSON ---')
console.log(skillsJSON)
console.log('Kiểu dữ liệu:', typeof skillsJSON)

// Câu 2: Chuyển đổi biến age thành chuỗi JSON
const ageJSON = JSON.stringify(age)
console.log('\n--- Câu 2: Biến age sau khi chuyển sang JSON ---')
console.log(ageJSON)
console.log('Kiểu dữ liệu:', typeof ageJSON)

// Câu 3: Chuyển đổi biến isMarried thành chuỗi JSON
const isMarriedJSON = JSON.stringify(isMarried)
console.log('\n--- Câu 3: Biến isMarried sau khi chuyển sang JSON ---')
console.log(isMarriedJSON)
console.log('Kiểu dữ liệu:', typeof isMarriedJSON)

// Câu 4: Chuyển đổi đối tượng student thành chuỗi JSON
const studentJSON = JSON.stringify(student, null, 2)
console.log('\n--- Câu 4: Đối tượng student sau khi chuyển sang JSON ---')
console.log(studentJSON)
console.log('Kiểu dữ liệu:', typeof studentJSON)
