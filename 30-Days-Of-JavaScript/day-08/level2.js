// ==========================================
// 30 DAYS OF JAVASCRIPT - DAY 08 (OBJECTS)
// LEVEL 2
// ==========================================

console.log('=== DAY 08 - LEVEL 2 ===');

// Đối tượng users mẫu theo đề bài
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// Câu 1: Tìm người có nhiều kỹ năng nhất trong đối tượng users
let maxSkills = 0;
let personWithMostSkills = '';

for (const [name, user] of Object.entries(users)) {
  if (user.skills.length > maxSkills) {
    maxSkills = user.skills.length;
    personWithMostSkills = name;
  }
}
console.log(`Câu 1 - Người có nhiều kỹ năng nhất là: ${personWithMostSkills} (${maxSkills} kỹ năng)`);

// Câu 2: Đếm số người dùng đang đăng nhập (isLoggedIn === true) và số người có điểm >= 50 (points >= 50)
let loggedInCount = 0;
let pointsGte50Count = 0;

for (const user of Object.values(users)) {
  if (user.isLoggedIn) {
    loggedInCount++;
  }
  if (user.points >= 50) {
    pointsGte50Count++;
  }
}
console.log(`Câu 2 - Số người dùng đang đăng nhập (isLoggedIn): ${loggedInCount}`);
console.log(`Câu 2 - Số người dùng có điểm >= 50: ${pointsGte50Count}`);

// Câu 3: Tìm những người là lập trình viên MERN stack (kỹ năng chứa: MongoDB, Express, React, Node)
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const mernDevelopers = [];

for (const [name, user] of Object.entries(users)) {
  const isMernDev = mernStack.every(skill => user.skills.includes(skill));
  if (isMernDev) {
    mernDevelopers.push(name);
  }
}
console.log('Câu 3 - Những lập trình viên MERN Stack:', mernDevelopers);

// Câu 4: Thêm tên của bạn vào đối tượng users mà KHÔNG làm biến đổi đối tượng users gốc
const updatedUsers = {
  ...users,
  AnNguyen: {
    email: 'annguyen@example.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    age: 21,
    isLoggedIn: true,
    points: 100
  }
};

console.log('Câu 4 - Đối tượng users sau khi thêm (bản sao mới):', updatedUsers);
console.log('Câu 4 - Kiểm tra đối tượng users gốc không có AnNguyen:', 'AnNguyen' in users); // false

// Câu 5: Lấy tất cả các khóa (keys) của đối tượng users
const userKeys = Object.keys(users);
console.log('Câu 5 - Danh sách tất cả keys của đối tượng users:', userKeys);

// Câu 6: Lấy tất cả các giá trị (values) của đối tượng users
const userValues = Object.values(users);
console.log('Câu 6 - Danh sách tất cả values của đối tượng users:', userValues);

// Câu 7: Sử dụng đối tượng countries để in tên quốc gia, thủ đô, dân số và ngôn ngữ
const countries = {
  Vietnam: {
    capital: 'Hà Nội',
    population: 98000000,
    languages: ['Tiếng Việt']
  },
  Japan: {
    capital: 'Tokyo',
    population: 125000000,
    languages: ['Tiếng Nhật']
  },
  Germany: {
    capital: 'Berlin',
    population: 83000000,
    languages: ['Tiếng Đức']
  },
  France: {
    capital: 'Paris',
    population: 67000000,
    languages: ['Tiếng Pháp']
  },
  USA: {
    capital: 'Washington, D.C.',
    population: 331000000,
    languages: ['Tiếng Anh']
  }
};

console.log('Câu 7 - Thông tin các quốc gia trong đối tượng countries:');
for (const [countryName, details] of Object.entries(countries)) {
  console.log(`- Quốc gia: ${countryName}`);
  console.log(`  + Thủ đô: ${details.capital}`);
  console.log(`  + Dân số: ${details.population.toLocaleString('vi-VN')} người`);
  console.log(`  + Ngôn ngữ: ${details.languages.join(', ')}`);
}
