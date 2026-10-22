// ==========================================
// 30 Days of JavaScript - Day 19: Closures
// File: level3.js (Cấp độ 3)
// ==========================================

console.log('\n--- DAY 19: LEVEL 3 ---');

/**
 * Đề bài Level 3:
 * Xây dựng hàm personAccount theo kỹ thuật Closure.
 * - Các biến bên trong: firstname, lastname, incomes, expenses (được bảo vệ như private variables).
 * - incomes là tập hợp các khoản thu nhập kèm mô tả: [{ description: string, amount: number }]
 * - expenses là tập hợp các khoản chi phí kèm mô tả: [{ description: string, amount: number }]
 * - Các hàm con công khai:
 *   + totalIncome(): Tính tổng các khoản thu nhập
 *   + totalExpense(): Tính tổng các khoản chi phí
 *   + accountBalance(): Số dư tài khoản = totalIncome - totalExpense
 *   + addIncome(description, amount): Thêm một khoản thu nhập mới
 *   + addExpense(description, amount): Thêm một khoản chi phí mới
 *   + accountInfo(): Trả về chuỗi tổng quan thông tin tài khoản và chi tiết thu chi
 */

function personAccount(firstname, lastname) {
    // Các biến private, đóng gói bên trong closure, bên ngoài không thể can thiệp trực tiếp
    const _firstname = firstname;
    const _lastname = lastname;
    const _incomes = [];
    const _expenses = [];

    // Tính tổng thu nhập
    function totalIncome() {
        return _incomes.reduce((acc, curr) => acc + curr.amount, 0);
    }

    // Tính tổng chi phí
    function totalExpense() {
        return _expenses.reduce((acc, curr) => acc + curr.amount, 0);
    }

    // Tính số dư khả dụng
    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    // Thêm một khoản thu nhập mới
    function addIncome(description, amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.error('Lỗi: Số tiền thu nhập phải là số dương hợp lệ!');
            return false;
        }
        _incomes.push({ description, amount });
        return true;
    }

    // Thêm một khoản chi phí mới
    function addExpense(description, amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.error('Lỗi: Số tiền chi phí phải là số dương hợp lệ!');
            return false;
        }
        _expenses.push({ description, amount });
        return true;
    }

    // Lấy thông tin tài khoản đầy đủ
    function accountInfo() {
        const fullName = `${_firstname} ${_lastname}`;
        const incomeTotal = totalIncome();
        const expenseTotal = totalExpense();
        const balance = accountBalance();

        let info = `========================================\n`;
        info += `📊 BÁO CÁO TÀI CHÍNH TÀI KHOẢN: ${fullName}\n`;
        info += `========================================\n`;
        info += `🟢 Tổng thu nhập: ${incomeTotal.toLocaleString('vi-VN')} VND\n`;
        info += `🔴 Tổng chi phí : ${expenseTotal.toLocaleString('vi-VN')} VND\n`;
        info += `💰 Số dư tài khoản: ${balance.toLocaleString('vi-VN')} VND\n`;
        info += `----------------------------------------\n`;
        info += `Chi tiết các nguồn thu (${_incomes.length}):\n`;
        _incomes.forEach((item, index) => {
            info += `  ${index + 1}. ${item.description}: ${item.amount.toLocaleString('vi-VN')} VND\n`;
        });
        info += `Chi tiết các khoản chi (${_expenses.length}):\n`;
        _expenses.forEach((item, index) => {
            info += `  ${index + 1}. ${item.description}: ${item.amount.toLocaleString('vi-VN')} VND\n`;
        });
        info += `========================================`;

        return info;
    }

    // Trả về giao diện công khai (public API) của tài khoản
    return {
        totalIncome,
        totalExpense,
        accountBalance,
        addIncome,
        addExpense,
        accountInfo
    };
}

// Kiểm thử hàm personAccount
const myAccount = personAccount('Nguyễn', 'Văn An');

// Thêm các nguồn thu nhập
myAccount.addIncome('Lương tháng cơ bản', 15000000);
myAccount.addIncome('Thưởng dự án Web', 3500000);
myAccount.addIncome('Dạy gia sư lập trình', 2000000);

// Thêm các khoản chi tiêu
myAccount.addExpense('Tiền thuê nhà trọ', 3500000);
myAccount.addExpense('Ăn uống sinh hoạt', 4000000);
myAccount.addExpense('Hóa đơn điện nước & Internet', 800000);
myAccount.addExpense('Mua sách chuyên ngành', 500000);

// In kết quả kiểm thử
console.log('Tổng thu nhập:', myAccount.totalIncome().toLocaleString('vi-VN'), 'VND');
console.log('Tổng chi tiêu:', myAccount.totalExpense().toLocaleString('vi-VN'), 'VND');
console.log('Số dư còn lại:', myAccount.accountBalance().toLocaleString('vi-VN'), 'VND');
console.log('\n' + myAccount.accountInfo());

// Chứng minh tính bảo mật của biến private:
console.log('Kiểm tra truy cập trực tiếp biến _incomes từ bên ngoài:', myAccount._incomes); // undefined (không thể truy cập hay sửa đổi trái phép)
