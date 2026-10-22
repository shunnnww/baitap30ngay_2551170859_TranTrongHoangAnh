// ==========================================
// 30 Days of JavaScript - Day 11: Level 2
// Destructuring and Spreading (Phân rã và Toán tử Spread)
// ==========================================

// Dữ liệu cho trước của đề bài
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS', 'React'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM', 'CSS', 'JS', 'React', 'Redux'],
    age: 20
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS', 'React'],
    age: 20
  }
];

// Câu 1: Duyệt qua mảng users và lấy tất cả các thuộc tính (keys) của từng đối tượng bằng kỹ thuật destructuring
console.log('=== CÂU 1: Duyệt mảng users và destructuring từng đối tượng ===');
for (const { name, scores, skills, age } of users) {
  console.log(`Tên: ${name.padEnd(7)} | Điểm: ${scores} | Tuổi: ${age} | Kỹ năng (${skills.length}): ${skills.join(', ')}`);
}

// Câu 2: Tìm những người có dưới 2 kỹ năng (skills.length < 2) sử dụng destructuring
console.log('\n=== CÂU 2: Tìm người có dưới 2 kỹ năng ===');
// Cách 1: Sử dụng filter với destructuring thuộc tính { skills }
const usersWithLessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);

console.log('Danh sách người có dưới 2 kỹ năng:', usersWithLessThanTwoSkills);
if (usersWithLessThanTwoSkills.length === 0) {
  console.log('=> Không có ai trong danh sách có dưới 2 kỹ năng (mỗi người đều có từ 2 kỹ năng trở lên).');
}

// Kiểm chứng thêm với trường hợp có người 1 kỹ năng hoặc 0 kỹ năng:
const extendedUsers = [
  ...users,
  { name: 'Helen', scores: 60, skills: ['HTM'], age: 24 },
  { name: 'Bob', scores: 50, skills: [], age: 19 }
];

console.log('\nKiểm chứng mở rộng với danh sách có thêm người dưới 2 kỹ năng:');
const foundExtended = extendedUsers.filter(({ name, skills }) => {
  if (skills.length < 2) {
    console.log(`- ${name} chỉ có ${skills.length} kỹ năng: [${skills.join(', ')}]`);
    return true;
  }
  return false;
});
console.log('Kết quả lọc danh sách mở rộng:', foundExtended);
