/**
 * 30 Days of JavaScript - Day 17: Web Storages
 * Level 1
 */

console.log('%c=== DAY 17 - LEVEL 1 ===', 'color: #3498db; font-weight: bold; font-size: 14px;')

// Câu 1: Lưu trữ firstName, lastName, age, country, city vào localStorage của trình duyệt
// Kiểm tra môi trường hỗ trợ localStorage
if (typeof localStorage !== 'undefined') {
  // Lưu trữ các giá trị đơn lẻ bằng setItem(key, value)
  localStorage.setItem('firstName', 'Long')
  localStorage.setItem('lastName', 'Nguyen Ngoc')
  localStorage.setItem('age', '20')
  localStorage.setItem('country', 'Vietnam')
  localStorage.setItem('city', 'Da Nang')

  console.log('--- Câu 1: Đã lưu các giá trị cá nhân vào localStorage ---')

  // Đọc lại các giá trị đã lưu bằng getItem(key)
  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')
  const age = localStorage.getItem('age')
  const country = localStorage.getItem('country')
  const city = localStorage.getItem('city')

  console.log(`Họ và tên: ${lastName} ${firstName}`)
  console.log(`Tuổi: ${age}`)
  console.log(`Quốc gia: ${country}`)
  console.log(`Thành phố: ${city}`)

  // In toàn bộ đối tượng localStorage
  console.log('\nToàn bộ localStorage hiện tại:', localStorage)
} else {
  console.warn('Trình duyệt hoặc môi trường hiện tại không hỗ trợ Web Storage (localStorage).')
}
