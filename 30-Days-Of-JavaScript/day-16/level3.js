/**
 * 30 Days of JavaScript - Day 16: JSON
 * Level 3
 */

// Chuỗi JSON chứa danh sách người dùng
const txt = `{
  "Alex": {
    "email": "alex@alex.com",
    "skills": ["HTML", "CSS", "JavaScript"],
    "age": 20,
    "isLoggedIn": false,
    "points": 30
  },
  "Asab": {
    "email": "asab@asab.com",
    "skills": ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    "age": 25,
    "isLoggedIn": false,
    "points": 50
  },
  "Brook": {
    "email": "daniel@daniel.com",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Redux"],
    "age": 30,
    "isLoggedIn": true,
    "points": 50
  },
  "Daniel": {
    "email": "daniel@alex.com",
    "skills": ["HTML", "CSS", "JavaScript", "Python"],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "John": {
    "email": "john@john.com",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    "age": 20,
    "isLoggedIn": true,
    "points": 50
  },
  "Thomas": {
    "email": "thomas@thomas.com",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "Paul": {
    "email": "paul@paul.com",
    "skills": ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  }
}`

console.log('%c=== DAY 16 - LEVEL 3 ===', 'color: #e67e22; font-weight: bold; font-size: 14px;')

// Câu 1: Phân tích chuỗi JSON txt thành đối tượng JavaScript thông qua JSON.parse()
const users = JSON.parse(txt)
console.log('--- Câu 1: Đối tượng sau khi phân tích chuỗi JSON txt ---')
console.log(users)

// Câu 2: Tìm người dùng có nhiều kỹ năng nhất (the user who has the most skills)
let userWithMostSkills = ''
let maxSkillsCount = 0

for (const username in users) {
  const user = users[username]
  const currentSkillsCount = user.skills ? user.skills.length : 0
  
  if (currentSkillsCount > maxSkillsCount) {
    maxSkillsCount = currentSkillsCount
    userWithMostSkills = username
  }
}

console.log('\n--- Câu 2: Người dùng có nhiều kỹ năng nhất ---')
console.log(`Người có nhiều kỹ năng nhất là: ${userWithMostSkills}`)
console.log(`Số lượng kỹ năng: ${maxSkillsCount}`)
console.log('Danh sách các kỹ năng:', users[userWithMostSkills].skills)
console.log('Thông tin chi tiết:', users[userWithMostSkills])

// Cách 2: Sử dụng Object.entries và reduce
const [topUserName, topUserData] = Object.entries(users).reduce(
  (maxUser, currentUser) => {
    const [, maxData] = maxUser
    const [, currData] = currentUser
    return currData.skills.length > maxData.skills.length ? currentUser : maxUser
  }
)

console.log('\n--- Kiểm tra lại bằng phương pháp functional (Object.entries & reduce) ---')
console.log(`Kết quả: ${topUserName} với ${topUserData.skills.length} kỹ năng.`)
