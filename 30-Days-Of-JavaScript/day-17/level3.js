/**
 * 30 Days of JavaScript - Day 17: Web Storages
 * Level 3
 */

console.log('%c=== DAY 17 - LEVEL 3 ===', 'color: #e67e22; font-weight: bold; font-size: 14px;')

// Câu 1: Xây dựng đối tượng personAccount quản lý thu chi cá nhân và đồng bộ với localStorage
const personAccount = {
  firstName: 'Ngoc Long',
  lastName: 'Nguyen',
  incomes: [
    { description: 'Lương lập trình viên part-time', amount: 8000000 },
    { description: 'Dự án Freelance Website', amount: 4500000 },
    { description: 'Trợ cấp học bổng', amount: 2000000 }
  ],
  expenses: [
    { description: 'Tiền thuê trọ & điện nước', amount: 3500000 },
    { description: 'Ăn uống & sinh hoạt', amount: 3000000 },
    { description: 'Khóa học trực tuyến & sách', amount: 1200000 },
    { description: 'Xăng xe & đi lại', amount: 500000 }
  ],

  // Phương thức thêm khoản thu nhập mới
  addIncome: function(description, amount) {
    if (typeof amount === 'number' && amount > 0) {
      this.incomes.push({ description, amount })
      this.saveToLocalStorage()
    } else {
      console.error('Số tiền thu nhập phải là số dương hợp lệ.')
    }
  },

  // Phương thức thêm khoản chi tiêu mới
  addExpense: function(description, amount) {
    if (typeof amount === 'number' && amount > 0) {
      this.expenses.push({ description, amount })
      this.saveToLocalStorage()
    } else {
      console.error('Số tiền chi tiêu phải là số dương hợp lệ.')
    }
  },

  // Phương thức tính tổng thu nhập
  totalIncome: function() {
    return this.incomes.reduce((total, item) => total + item.amount, 0)
  },

  // Phương thức tính tổng chi phí
  totalExpense: function() {
    return this.expenses.reduce((total, item) => total + item.amount, 0)
  },

  // Phương thức tính số dư tài khoản (Số dư = Tổng thu - Tổng chi)
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense()
  },

  // Phương thức hiển thị thông tin tài khoản
  accountInfo: function() {
    const formattedIncome = this.totalIncome().toLocaleString('vi-VN')
    const formattedExpense = this.totalExpense().toLocaleString('vi-VN')
    const formattedBalance = this.accountBalance().toLocaleString('vi-VN')

    return `Chủ tài khoản: ${this.lastName} ${this.firstName}
- Tổng thu nhập: ${formattedIncome} VND
- Tổng chi tiêu: ${formattedExpense} VND
- Số dư hiện tại: ${formattedBalance} VND`
  },

  // Phương thức lưu dữ liệu tài khoản vào localStorage
  saveToLocalStorage: function() {
    if (typeof localStorage !== 'undefined') {
      const dataToSave = {
        firstName: this.firstName,
        lastName: this.lastName,
        incomes: this.incomes,
        expenses: this.expenses
      }
      localStorage.setItem('personAccount', JSON.stringify(dataToSave))
    }
  },

  // Phương thức tải dữ liệu tài khoản từ localStorage nếu có
  loadFromLocalStorage: function() {
    if (typeof localStorage !== 'undefined') {
      const savedData = localStorage.getItem('personAccount')
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData)
          this.firstName = parsed.firstName || this.firstName
          this.lastName = parsed.lastName || this.lastName
          this.incomes = parsed.incomes || this.incomes
          this.expenses = parsed.expenses || this.expenses
          console.log('-> Đã khôi phục dữ liệu personAccount từ localStorage!')
        } catch (error) {
          console.error('Lỗi khi đọc personAccount từ localStorage:', error)
        }
      }
    }
  }
}

// Khôi phục dữ liệu đã lưu nếu có
personAccount.loadFromLocalStorage()

console.log('--- Thông tin tài khoản ban đầu ---')
console.log(personAccount.accountInfo())

// Thêm khoản thu chi mẫu để kiểm tra tính năng cập nhật và lưu trữ
console.log('\n--- Thực hiện thêm thu nhập và chi phí mới ---')
personAccount.addIncome('Thưởng dự án cuối tuần', 1500000)
personAccount.addExpense('Mua tai nghe lập trình mới', 850000)

console.log(personAccount.accountInfo())

// Lưu trạng thái hiện tại vào localStorage
personAccount.saveToLocalStorage()

if (typeof localStorage !== 'undefined') {
  console.log('\n--- Dữ liệu lưu trong localStorage[\'personAccount\'] ---')
  console.log(JSON.parse(localStorage.getItem('personAccount')))
}
