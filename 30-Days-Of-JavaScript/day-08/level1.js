// ==========================================
// 30 DAYS OF JAVASCRIPT - DAY 08 (OBJECTS)
// LEVEL 1
// ==========================================

console.log('=== DAY 08 - LEVEL 1 ===');

// Câu 1: Tạo một đối tượng rỗng có tên là dog
const dog = {};
console.log('Câu 1 - Đối tượng dog vừa tạo:', dog);

// Câu 2: In đối tượng dog ra console
console.log('Câu 2 - In đối tượng dog:', dog);

// Câu 3: Thêm các thuộc tính name, legs, color, age và phương thức bark cho đối tượng dog
// Thuộc tính bark là một phương thức trả về chuỗi "woof woof"
dog.name = 'Corgi';
dog.legs = 4;
dog.color = 'Vàng trắng';
dog.age = 2;
dog.bark = function() {
  return 'woof woof';
};
console.log('Câu 3 - Đối tượng dog sau khi thêm thuộc tính:');
console.log(dog);
console.log('Câu 3 - Tiếng sủa của dog (dog.bark()):', dog.bark());

// Câu 4: Lấy giá trị của name, legs, color, age và bark từ đối tượng dog
console.log('Câu 4 - Tên chú chó:', dog.name);
console.log('Câu 4 - Số chân:', dog.legs);
console.log('Câu 4 - Màu lông:', dog.color);
console.log('Câu 4 - Tuổi:', dog.age);
console.log('Câu 4 - Phương thức bark:', dog.bark());

// Câu 5: Thiết lập các thuộc tính mới cho đối tượng dog: breed và getDogInfo
dog.breed = 'Welsh Corgi Pembroke';
dog.getDogInfo = function() {
  return `${this.name} là một chú chó giống ${this.breed}, có bộ lông màu ${this.color}, ${this.legs} chân và hiện tại ${this.age} tuổi.`;
};

console.log('Câu 5 - Giống chó (breed):', dog.breed);
console.log('Câu 5 - Thông tin chi tiết (getDogInfo()):', dog.getDogInfo());
