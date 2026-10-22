// ==========================================
// 30 DAYS OF JAVASCRIPT - DAY 08 (OBJECTS)
// LEVEL 3
// ==========================================

console.log('=== DAY 08 - LEVEL 3 ===');

// Câu 1: Tạo đối tượng personAccount quản lý tài chính cá nhân
// Có các thuộc tính: firstName, lastName, incomes, expenses
// Có các phương thức: totalIncome, totalExpense, accountInfo, addIncome, addExpense, accountBalance
const personAccount = {
  firstName: 'Nguyễn Văn',
  lastName: 'An',
  // Danh sách các khoản thu nhập (mỗi phần tử có số tiền và mô tả)
  incomes: [
    { amount: 15000000, description: 'Lương chính thức hàng tháng' },
    { amount: 4500000, description: 'Dự án Freelance thiết kế Website' },
    { amount: 1200000, description: 'Cổ tức đầu tư' }
  ],
  // Danh sách các khoản chi tiêu (mỗi phần tử có số tiền và mô tả)
  expenses: [
    { amount: 4500000, description: 'Tiền thuê căn hộ' },
    { amount: 3500000, description: 'Chi phí ăn uống sinh hoạt' },
    { amount: 800000, description: 'Hóa đơn điện, nước, internet' },
    { amount: 1000000, description: 'Xăng xe và bảo dưỡng' }
  ],

  // Phương thức tính tổng thu nhập
  totalIncome: function() {
    return this.incomes.reduce((total, item) => total + item.amount, 0);
  },

  // Phương thức tính tổng chi phí
  totalExpense: function() {
    return this.expenses.reduce((total, item) => total + item.amount, 0);
  },

  // Phương thức thêm khoản thu nhập mới
  addIncome: function(amount, description) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Số tiền thu nhập không hợp lệ');
      return;
    }
    this.incomes.push({ amount, description });
    console.log(`Đã thêm thu nhập: ${description} (+${amount.toLocaleString('vi-VN')} VND)`);
  },

  // Phương thức thêm khoản chi tiêu mới
  addExpense: function(amount, description) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Số tiền chi tiêu không hợp lệ');
      return;
    }
    this.expenses.push({ amount, description });
    console.log(`Đã thêm chi tiêu: ${description} (-${amount.toLocaleString('vi-VN')} VND)`);
  },

  // Phương thức tính số dư tài khoản (Tổng thu - Tổng chi)
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  },

  // Phương thức tóm tắt thông tin tài khoản
  accountInfo: function() {
    const totalInc = this.totalIncome().toLocaleString('vi-VN');
    const totalExp = this.totalExpense().toLocaleString('vi-VN');
    const balance = this.accountBalance().toLocaleString('vi-VN');

    return (
      `========================================\n` +
      `THÔNG TIN TÀI KHOẢN CÁ NHÂN\n` +
      `Chủ tài khoản : ${this.firstName} ${this.lastName}\n` +
      `Tổng thu nhập : ${totalInc} VND\n` +
      `Tổng chi tiêu : ${totalExp} VND\n` +
      `Số dư hiện tại: ${balance} VND\n` +
      `Số khoản thu  : ${this.incomes.length}\n` +
      `Số khoản chi  : ${this.expenses.length}\n` +
      `========================================`
    );
  }
};

// Kiểm thử các phương thức của personAccount
console.log('Câu 1 - Thông tin tài khoản ban đầu:');
console.log(personAccount.accountInfo());

console.log('\nCâu 1 - Thực hiện giao dịch mới:');
personAccount.addIncome(2000000, 'Thưởng dự án hoàn thành sớm');
personAccount.addExpense(600000, 'Mua sách chuyên ngành lập trình Web');

console.log('\nCâu 1 - Thông tin tài khoản sau khi cập nhật giao dịch:');
console.log(personAccount.accountInfo());
console.log('Tổng thu nhập hiện tại:', personAccount.totalIncome().toLocaleString('vi-VN'), 'VND');
console.log('Tổng chi tiêu hiện tại:', personAccount.totalExpense().toLocaleString('vi-VN'), 'VND');
console.log('Số dư tài khoản hiện tại:', personAccount.accountBalance().toLocaleString('vi-VN'), 'VND');

// Câu 2 (Mở rộng): Xây dựng hệ thống quản lý đăng ký và đăng nhập người dùng (signUp, signIn)
const userDatabase = [];

function signUp(username, email, password) {
  const userExists = userDatabase.some(u => u.username === username || u.email === email);
  if (userExists) {
    return `Đăng ký thất bại: Tên người dùng hoặc email "${username}" đã tồn tại!`;
  }
  const newUser = {
    id: Date.now(),
    username,
    email,
    password, // Trong thực tế cần băm (hash) mật khẩu
    createdAt: new Date().toISOString()
  };
  userDatabase.push(newUser);
  return `Đăng ký thành công tài khoản: ${username}`;
}

function signIn(usernameOrEmail, password) {
  const user = userDatabase.find(
    u => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password
  );
  if (user) {
    return `Đăng nhập thành công! Chào mừng trở lại, ${user.username}.`;
  }
  return 'Đăng nhập thất bại: Sai tên đăng nhập/email hoặc mật khẩu!';
}

console.log('\nCâu 2 (Mở rộng) - Thử nghiệm hàm signUp và signIn:');
console.log(signUp('annguyen', 'an@example.com', '123456'));
console.log(signUp('annguyen', 'an2@example.com', 'abcdef')); // Báo trùng
console.log(signIn('annguyen', '123456')); // Thành công
console.log(signIn('annguyen', 'wrongpass')); // Thất bại
