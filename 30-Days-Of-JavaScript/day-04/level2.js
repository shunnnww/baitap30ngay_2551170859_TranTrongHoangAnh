// Câu 1: Xếp loại học lực của sinh viên theo điểm số
let score = 85;
if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score < 80) {
    console.log('B');
} else if (score >= 60 && score < 70) {
    console.log('C');
} else if (score >= 50 && score < 60) {
    console.log('D');
} else {
    console.log('F');
}

// Câu 2: Kiểm tra mùa trong năm dựa vào tháng
let month = 'September'.toLowerCase();
if (month === 'september' || month === 'october' || month === 'november') {
    console.log('Autumn');
} else if (month === 'december' || month === 'january' || month === 'february') {
    console.log('Winter');
} else if (month === 'march' || month === 'april' || month === 'may') {
    console.log('Spring');
} else if (month === 'june' || month === 'july' || month === 'august') {
    console.log('Summer');
}

// Câu 3: Kiểm tra xem một ngày là ngày cuối tuần hay ngày làm việc
let dayInput = 'Saturday'.toLowerCase();
if (dayInput === 'saturday' || dayInput === 'sunday') {
    console.log('Saturday is a weekend.');
} else {
    console.log('Friday is a working day.');
}
