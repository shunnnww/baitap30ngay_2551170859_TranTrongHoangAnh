// Câu 1: Cho biết số ngày trong một tháng (năm thường)
let inputMonth = 'February'.toLowerCase();
switch (inputMonth) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log('31');
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log('30');
        break;
    case 'february':
        console.log('28');
        break;
}

// Câu 2: Cho biết số ngày trong một tháng có tính đến năm nhuận
let checkMonth = 'February'.toLowerCase();
let checkYear = 2024; // Năm 2024 là năm nhuận

let isLeapYear = (checkYear % 4 === 0 && checkYear % 100 !== 0) || (checkYear % 400 === 0);

switch (checkMonth) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log('31');
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log('30');
        break;
    case 'february':
        console.log(isLeapYear ? '29' : '28');
        break;
}
