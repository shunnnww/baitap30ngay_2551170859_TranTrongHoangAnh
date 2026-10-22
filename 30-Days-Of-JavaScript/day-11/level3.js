// ==========================================
// 30 Days of JavaScript - Day 11: Level 3
// Destructuring and Spreading (Phân rã và Toán tử Spread)
// ==========================================

// Câu 1: Phân rã đối tượng countries để in ra name, capital, population và languages của tất cả các quốc gia
console.log('=== CÂU 1: Destructuring danh sách các quốc gia ===');

// Tập dữ liệu mẫu đại diện các quốc gia với đầy đủ cấu trúc thuộc tính
const countriesData = [
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    population: 98000000,
    languages: ['Vietnamese']
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5530719,
    languages: ['Finnish', 'Swedish']
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    population: 125800000,
    languages: ['Japanese']
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    population: 8654622,
    languages: ['German', 'French', 'Italian', 'Romansh']
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    population: 38005238,
    languages: ['English', 'French']
  }
];

// Sử dụng for...of kết hợp object destructuring trực tiếp ở danh sách tham số vòng lặp
for (const { name, capital, population, languages } of countriesData) {
  console.log(`Quốc gia: ${name}`);
  console.log(`- Thủ đô: ${capital}`);
  console.log(`- Dân số: ${population.toLocaleString()} người`);
  console.log(`- Ngôn ngữ chính: ${languages.join(', ')}`);
  console.log('-------------------------------------------');
}

// Câu 2: Một lập trình viên mới vào nghề lưu tên, kỹ năng và điểm số của học sinh trong mảng lồng mảng.
// Đề bài yêu cầu destructure mảng student thành:
// name, mảng skills, mảng scores, điểm JavaScript (jsScore), và điểm React (reactScore) trên cùng một dòng.
console.log('\n=== CÂU 2: Destructuring lồng nhau trong 1 dòng ===');
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

// Giải pháp 1 dòng: Lấy name, mảng skills, mảng scores, đồng thời bóc tách jsScore và reactScore từ scores
const [name, skills, scores] = student;
const [, , [, , jsScore, reactScore]] = student;

// Hoặc kết hợp cú pháp lồng nhau hoàn chỉnh:
const [sName, sSkills, [, , sJsScore, sReactScore]] = student;

console.log('Tên học sinh (name):', name);
console.log('Danh sách kỹ năng (skills):', skills);
console.log('Danh sách điểm số (scores):', scores);
console.log('Điểm JavaScript (jsScore):', jsScore);
console.log('Điểm React (reactScore):', reactScore);

// Câu 3: Viết hàm convertArrayToObject để chuyển đổi mảng các mảng học sinh thành mảng các đối tượng có cấu trúc
console.log('\n=== CÂU 3: Viết hàm convertArrayToObject ===');

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

/**
 * Chuyển mảng các mảng thành mảng đối tượng { name, skills, scores }
 * @param {Array} arr - Mảng chứa các mảng con thông tin học sinh
 * @returns {Array} - Mảng các đối tượng học sinh
 */
const convertArrayToObject = (arr) => {
  return arr.map(([name, skills, scores]) => ({
    name,
    skills,
    scores
  }));
};

const studentsObjects = convertArrayToObject(students);
console.log('Kết quả sau khi chuyển đổi:');
console.log(JSON.stringify(studentsObjects, null, 2));

// Câu 4: Sao chép đối tượng student thành newStudent mà không làm thay đổi (mutate) đối tượng gốc
// Thêm các thông tin sau vào newStudent:
// - Thêm Bootstrap với level 8 vào tập kỹ năng frontEnd
// - Thêm Express với level 9 vào tập kỹ năng backEnd
// - Thêm SQL với level 8 vào tập kỹ năng dataBase
// - Thêm SQL (không có level) vào tập kỹ năng dataScience
console.log('\n=== CÂU 4: Sao chép sâu đối tượng bằng Spread Operator và cập nhật dữ liệu ===');

const originalStudent = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 }
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

// Sử dụng Spread Operator ở từng cấp để tạo bản sao mới (immutable update)
const newStudent = {
  ...originalStudent,
  skills: {
    ...originalStudent.skills,
    frontEnd: [
      ...originalStudent.skills.frontEnd,
      { skill: 'Bootstrap', level: 8 }
    ],
    backEnd: [
      ...originalStudent.skills.backEnd,
      { skill: 'Express', level: 9 }
    ],
    dataBase: [
      ...originalStudent.skills.dataBase,
      { skill: 'SQL', level: 8 }
    ],
    dataScience: [
      ...originalStudent.skills.dataScience,
      'SQL'
    ]
  }
};

console.log('--- newStudent sau khi thêm kỹ năng mới: ---');
console.log(JSON.stringify(newStudent, null, 2));

console.log('\n--- Kiểm tra đối tượng gốc originalStudent (đảm bảo không bị thay đổi): ---');
console.log('Số kỹ năng frontEnd gốc (phải là 4):', originalStudent.skills.frontEnd.length);
console.log('Số kỹ năng frontEnd mới (phải là 5):', newStudent.skills.frontEnd.length);
console.log('Số kỹ năng backEnd gốc (phải là 2):', originalStudent.skills.backEnd.length);
console.log('Số kỹ năng backEnd mới (phải là 3):', newStudent.skills.backEnd.length);
console.log('Số kỹ năng dataBase gốc (phải là 1):', originalStudent.skills.dataBase.length);
console.log('Số kỹ năng dataBase mới (phải là 2):', newStudent.skills.dataBase.length);
console.log('Kỹ năng dataScience gốc (phải là 3):', originalStudent.skills.dataScience);
console.log('Kỹ năng dataScience mới (phải là 4):', newStudent.skills.dataScience);
console.log('originalStudent === newStudent:', originalStudent === newStudent, '(Phải là false - hai tham chiếu độc lập)');
console.log('originalStudent.skills === newStudent.skills:', originalStudent.skills === newStudent.skills, '(Phải là false)');
