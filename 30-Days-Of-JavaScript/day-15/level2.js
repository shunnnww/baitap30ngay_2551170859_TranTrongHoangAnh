// ==========================================
// 30 Days of JavaScript - Day 15: Classes
// LEVEL 2: Ghi đè phương thức (Method Overriding)
// ==========================================

{
  console.log('%c--- DAY 15: LEVEL 2 ---', 'color: orange; font-weight: bold; font-size: 14px');

  // Lớp cha Animal
  class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }

    getInfo() {
      return `${this.name} là một con vật ${this.age} tuổi, có bộ lông màu ${this.color} và ${this.legs} chân.`;
    }

    makeSound() {
      return `${this.name} đang phát ra âm thanh chung của động vật.`;
    }
  }

  // Câu 1: Ghi đè phương thức trong lớp con Dog
  // - Thêm thuộc tính mới: breed (giống chó) thông qua constructor và gọi super(...)
  // - Ghi đè phương thức makeSound() thành tiếng sủa "Gâu gâu! (Woof woof!)"
  // - Ghi đè phương thức getInfo() để bổ sung thông tin breed
  class Dog extends Animal {
    constructor(name, age, color, breed, legs = 4) {
      super(name, age, color, legs);
      this.breed = breed;
    }

    // Ghi đè phương thức makeSound() của lớp cha
    makeSound() {
      return `${this.name} sủa: Gâu gâu! (Woof woof!)`;
    }

    // Ghi đè phương thức getInfo() của lớp cha
    getInfo() {
      return `${this.name} là chú chó giống ${this.breed}, ${this.age} tuổi, lông màu ${this.color}, có ${this.legs} chân.`;
    }
  }

  // Câu 2: Ghi đè phương thức trong lớp con Cat
  // - Thêm thuộc tính mới: breed (giống mèo)
  // - Ghi đè phương thức makeSound() thành tiếng kêu "Meo meo! (Meow meow!)"
  // - Ghi đè phương thức getInfo() để bổ sung thông tin giống loài
  class Cat extends Animal {
    constructor(name, age, color, breed, legs = 4) {
      super(name, age, color, legs);
      this.breed = breed;
    }

    // Ghi đè phương thức makeSound() của lớp cha
    makeSound() {
      return `${this.name} kêu: Meo meo! (Meow meow!)`;
    }

    // Ghi đè phương thức getInfo() của lớp cha
    getInfo() {
      return `${this.name} là cô mèo giống ${this.breed}, ${this.age} tuổi, lông màu ${this.color}, có ${this.legs} chân.`;
    }
  }

  // Kiểm thử tạo đối tượng và kiểm tra tính năng ghi đè phương thức
  console.log('Câu 1: Kiểm thử ghi đè phương thức ở lớp Dog:');
  const myDog = new Dog('Lu Lu', 3, 'vàng kem', 'Golden Retriever');
  console.log(myDog.getInfo());
  console.log(myDog.makeSound());

  console.log('\nCâu 2: Kiểm thử ghi đè phương thức ở lớp Cat:');
  const myCat = new Cat('Mimi', 2, 'xám khói', 'Mèo Anh lông ngắn (British Shorthair)');
  console.log(myCat.getInfo());
  console.log(myCat.makeSound());
}
