// Câu 1: Khai báo một biến tên là challenge và gán giá trị '30 Days Of JavaScript'
let challenge = '30 Days Of JavaScript';

// Câu 2: In chuỗi ra màn hình console
console.log(challenge);

// Câu 3: In độ dài của chuỗi
console.log(challenge.length);

// Câu 4: Chuyển toàn bộ các ký tự thành chữ hoa
console.log(challenge.toUpperCase());

// Câu 5: Chuyển toàn bộ các ký tự thành chữ thường
console.log(challenge.toLowerCase());

// Câu 6: Cắt lấy từ đầu tiên của chuỗi
console.log(challenge.substring(0, 2));

// Câu 7: Cắt cụm từ 'Days Of JavaScript' ra khỏi chuỗi
console.log(challenge.substring(3));

// Câu 8: Kiểm tra xem chuỗi có chứa từ 'Script' không
console.log(challenge.includes('Script'));

// Câu 9: Tách chuỗi thành một mảng
console.log(challenge.split());

// Câu 10: Tách chuỗi tại khoảng trắng để tạo thành mảng các từ
console.log(challenge.split(' '));

// Câu 11: Tách chuỗi các công ty tại dấu phẩy
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// Câu 12: Đổi 'JavaScript' thành 'Python'
console.log(challenge.replace('JavaScript', 'Python'));

// Câu 13: Ký tự ở vị trí chỉ số 15 trong chuỗi
console.log(challenge.charAt(15));

// Câu 14: Mã ký tự của chữ 'J' trong chuỗi
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Câu 15: Vị trí xuất hiện đầu tiên của chữ 'a'
console.log(challenge.indexOf('a'));

// Câu 16: Vị trí xuất hiện cuối cùng của chữ 'a'
console.log(challenge.lastIndexOf('a'));

// Cho câu sau dùng cho các câu 17, 18, 19:
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// Câu 17: Vị trí xuất hiện đầu tiên của từ 'because'
console.log(sentence.indexOf('because'));

// Câu 18: Vị trí xuất hiện cuối cùng của từ 'because'
console.log(sentence.lastIndexOf('because'));

// Câu 19: Tìm vị trí của từ 'because' đầu tiên bằng search()
console.log(sentence.search('because'));

// Câu 20: Loại bỏ khoảng trắng ở đầu và cuối chuỗi
let whitespaceString = ' 30 Days Of JavaScript ';
console.log(whitespaceString.trim());

// Câu 21: Kiểm tra chuỗi bắt đầu bằng '30'
console.log(challenge.startsWith('30'));

// Câu 22: Kiểm tra chuỗi kết thúc bằng 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

// Câu 23: Tìm tất cả các chữ 'a' trong chuỗi
console.log(challenge.match(/a/g));

// Câu 24: Nối hai chuỗi '30 Days of' và 'JavaScript'
let part1 = '30 Days of';
let part2 = 'JavaScript';
console.log(part1.concat(' ', part2));

// Câu 25: Lặp lại chuỗi 2 lần
console.log(challenge.repeat(2));
