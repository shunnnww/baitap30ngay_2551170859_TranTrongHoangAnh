// Câu 1: Khai báo một mảng rỗng
const emptyArr = [];
console.log(emptyArr);

// Câu 2: Khai báo một mảng có hơn 5 phần tử
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// Câu 3: Tìm độ dài của mảng
console.log(numbers.length);

// Câu 4: Lấy phần tử đầu tiên, phần tử ở giữa và phần tử cuối cùng của mảng
console.log(numbers[0]);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[numbers.length - 1]);

// Câu 5: Khai báo mảng mixedDataTypes chứa các kiểu dữ liệu khác nhau và in ra độ dài mảng
const mixedDataTypes = [10, 'JavaScript', true, null, undefined, { name: 'IT' }];
console.log(mixedDataTypes.length);

// Câu 6: Khai báo mảng itCompanies chứa tên các công ty IT
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Câu 7: In mảng itCompanies
console.log(itCompanies);

// Câu 8: In số lượng các công ty trong mảng
console.log(itCompanies.length);

// Câu 9: In công ty đầu tiên, công ty ở giữa và công ty cuối cùng
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// Câu 10: In ra từng công ty
itCompanies.forEach(company => console.log(company));

// Câu 11: Chuyển tên từng công ty thành chữ hoa và in ra
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Câu 12: In mảng dưới dạng câu hoàn chỉnh
console.log(`${itCompanies.slice(0, -1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// Câu 13: Kiểm tra xem một công ty có tồn tại trong mảng không
let checkCompany = 'Google';
console.log(itCompanies.includes(checkCompany) ? checkCompany : 'not found');

// Câu 14: Lọc các công ty có nhiều hơn một chữ 'o' (không dùng phương thức filter)
let companiesWithMultipleO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let countO = (itCompanies[i].match(/o/gi) || []).length;
    if (countO > 1) {
        companiesWithMultipleO.push(itCompanies[i]);
    }
}
console.log(companiesWithMultipleO);

// Câu 15: Sắp xếp mảng theo thứ tự bảng chữ cái bằng sort()
console.log([...itCompanies].sort());

// Câu 16: Đảo ngược mảng bằng reverse()
console.log([...itCompanies].reverse());

// Câu 17: Cắt lấy 3 công ty đầu tiên
console.log(itCompanies.slice(0, 3));

// Câu 18: Cắt lấy 3 công ty cuối cùng
console.log(itCompanies.slice(-3));

// Câu 19: Cắt lấy công ty ở giữa
let middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(middleIndex, middleIndex + 1));

// Câu 20: Xóa công ty đầu tiên khỏi mảng
let copy1 = [...itCompanies];
copy1.shift();
console.log(copy1);

// Câu 21: Xóa công ty ở giữa khỏi mảng
let copy2 = [...itCompanies];
copy2.splice(Math.floor(copy2.length / 2), 1);
console.log(copy2);

// Câu 22: Xóa công ty cuối cùng khỏi mảng
let copy3 = [...itCompanies];
copy3.pop();
console.log(copy3);

// Câu 23: Xóa tất cả các công ty khỏi mảng
let copy4 = [...itCompanies];
copy4.length = 0;
console.log(copy4);
