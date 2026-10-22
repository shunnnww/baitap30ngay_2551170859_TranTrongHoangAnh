// Câu 1: In câu trích dẫn có chứa dấu nháy đơn
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Câu 2: In câu trích dẫn của Mẹ Teresa có chứa dấu ngoặc kép
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Câu 3: Kiểm tra typeof '10' có bằng 10 không. Nếu không, ép kiểu để bằng 10
console.log(typeof '10' === typeof 10);
console.log(Number('10') === 10);

// Câu 4: Kiểm tra parseFloat('9.8') có bằng 10 không. Nếu không, làm tròn để bằng 10
console.log(parseFloat('9.8') === 10);
console.log(Math.round(parseFloat('9.8')) === 10);

// Câu 5: Kiểm tra xem 'on' có xuất hiện trong cả 'python' và 'jargon' không
console.log('python'.includes('on') && 'jargon'.includes('on'));

// Câu 6: Kiểm tra xem 'jargon' có nằm trong câu không
let sentenceJargon = 'I hope this course is not full of jargon.';
console.log(sentenceJargon.includes('jargon'));

// Câu 7: Tạo một số ngẫu nhiên từ 0 đến 100
console.log(Math.floor(Math.random() * 101));

// Câu 8: Tạo một số ngẫu nhiên từ 50 đến 100
console.log(Math.floor(Math.random() * 51) + 50);

// Câu 9: Tạo một số ngẫu nhiên từ 0 đến 255
console.log(Math.floor(Math.random() * 256));

// Câu 10: Truy cập ngẫu nhiên vào một ký tự trong chuỗi 'JavaScript'
let jsString = 'JavaScript';
console.log(jsString[Math.floor(Math.random() * jsString.length)]);

// Câu 11: In mẫu hình số bằng ký tự xuống dòng \n
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Câu 12: Cắt cụm từ 'because because because' ra khỏi câu
let sentenceToCut = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceToCut.substr(sentenceToCut.indexOf('because'), 'because because because'.length));
