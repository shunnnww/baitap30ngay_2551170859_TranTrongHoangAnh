// Câu 1: Sử dụng mảng countries và webTechs (từ countries.js và web_techs.js)
const countriesList = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];
const techsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

console.log(countriesList);
console.log(techsList);

// Câu 2: Xóa tất cả các dấu câu, chuyển chuỗi thành mảng từ và đếm số từ
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[,.]/g, '').split(' ');
console.log(words);
console.log(words.length);

// Câu 3: Thêm, xóa, sửa các phần tử trong giỏ hàng shoppingCart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Thêm 'Meat' vào đầu giỏ hàng nếu chưa có
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Thêm 'Sugar' vào cuối giỏ hàng nếu chưa có
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Xóa 'Honey' khỏi giỏ hàng
let honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
}

// Sửa 'Tea' thành 'Green Tea'
let teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// Câu 4: Kiểm tra nếu 'Ethiopia' có trong mảng thì in ra 'ETHIOPIA', nếu không thì thêm vào
if (countriesList.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countriesList.push('Ethiopia');
}

// Câu 5: Kiểm tra nếu 'Sass' có trong webTechs thì in ra, nếu chưa thì thêm Sass vào mảng
if (techsList.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    techsList.push('Sass');
    console.log(techsList);
}

// Câu 6: Nối mảng frontEnd và backEnd thành mảng fullStack
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
