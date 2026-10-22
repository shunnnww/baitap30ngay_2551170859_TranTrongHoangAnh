// Câu 1: Tạo định dạng thời gian YYYY-MM-DD HH:mm với giờ và phút luôn luôn có 2 chữ số (ví dụ: 07:05)
const now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
