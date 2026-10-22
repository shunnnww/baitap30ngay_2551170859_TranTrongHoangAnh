// ==========================================
// 30 Days of JavaScript - Day 15: Classes
// LEVEL 1: Khởi tạo lớp & Kế thừa cơ bản
// ==========================================

{
  console.log('%c--- DAY 15: LEVEL 1 ---', 'color: green; font-weight: bold; font-size: 14px');

  // Câu 1: Tạo một lớp Animal với các thuộc tính: name, age, color, legs
  // và các phương thức getInfo(), makeSound()
  class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }

    // Phương thức trả về thông tin con vật
    getInfo() {
      return `${this.name} là một con vật ${this.age} tuổi, có bộ lông màu ${this.color} và có ${this.legs} chân.`;
    }

    // Phương thức phát ra âm thanh chung
    makeSound() {
      return `${this.name} đang phát ra âm thanh đặc trưng của động vật.`;
    }
  }

  // Kiểm thử khởi tạo đối tượng từ lớp Animal
  console.log('Câu 1: Kiểm thử lớp Animal:');
  const genericAnimal = new Animal('Thú rừng', 3, 'nâu', 4);
  console.log(genericAnimal.getInfo());
  console.log(genericAnimal.makeSound());

  // Câu 2: Tạo hai lớp con Dog và Cat kế thừa từ Animal bằng từ khóa extends và super
  console.log('\nCâu 2: Tạo lớp con Dog và Cat kế thừa từ Animal:');

  class Dog extends Animal {
    constructor(name, age, color, legs = 4) {
      // Gọi constructor của lớp cha Animal
      super(name, age, color, legs);
    }
  }

  class Cat extends Animal {
    constructor(name, age, color, legs = 4) {
      // Gọi constructor của lớp cha Animal
      super(name, age, color, legs);
    }
  }

  // Khởi tạo các thể hiện (instance) của lớp Dog và Cat
  const dog1 = new Dog('Cậu Vàng', 2, 'vàng kim');
  const cat1 = new Cat('Miu Miu', 1, 'trắng tinh');

  console.log('Thông tin Dog:', dog1.getInfo());
  console.log('Tiếng kêu Dog (kế thừa Animal):', dog1.makeSound());

  console.log('Thông tin Cat:', cat1.getInfo());
  console.log('Tiếng kêu Cat (kế thừa Animal):', cat1.makeSound());
}
