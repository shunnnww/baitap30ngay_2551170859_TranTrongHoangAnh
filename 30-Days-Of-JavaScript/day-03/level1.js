// Câu 1: Khai báo các biến firstName, lastName, country, city, age, isMarried, year và dùng typeof kiểm tra kiểu dữ liệu
let firstName = 'Hoàng Anh';
let lastName = 'Trần Trọng';
let country = 'Việt Nam';
let city = 'Hà Nội';
let age = 19;
let isMarried = false;
let year = 2026;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Câu 2: Kiểm tra typeof '10' có bằng 10 không
console.log(typeof '10' === 10);

// Câu 3: Kiểm tra parseInt('9.8') có bằng 10 không
console.log(parseInt('9.8') === 10);

// Câu 4.1: Viết 3 biểu thức trả về giá trị chân trị (truthy)
console.log(Boolean('JavaScript'));
console.log(Boolean(100));
console.log(Boolean(true));

// Câu 4.2: Viết 3 biểu thức trả về giá trị giả trị (falsy)
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));

// Câu 5: Xác định kết quả của các phép so sánh
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// Câu 5.12: So sánh độ dài của 'python' và 'jargon' để tạo một biểu thức falsy
console.log('python'.length !== 'jargon'.length);

// Câu 6: Xác định kết quả của các biểu thức logic
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// Câu 6.11: Kiểm tra khẳng định "Không có 'on' trong cả dragon và python"
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

// Câu 7: Dùng đối tượng Date để lấy các thông tin thời gian
const now = new Date();

// 7.1: Năm hiện tại
console.log(now.getFullYear());

// 7.2: Tháng hiện tại dưới dạng số (0 - 11)
console.log(now.getMonth() + 1);

// 7.3: Ngày hôm nay
console.log(now.getDate());

// 7.4: Thứ trong tuần dưới dạng số (0: Chủ nhật - 6: Thứ 7)
console.log(now.getDay());

// 7.5: Giờ hiện tại
console.log(now.getHours());

// 7.6: Phút hiện tại
console.log(now.getMinutes());

// 7.7: Số giây đã trôi qua kể từ ngày 1/1/1970 đến nay
console.log(Math.floor(now.getTime() / 1000));
