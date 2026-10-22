// ==========================================
// 30 Days of JavaScript - Day 15: Classes
// LEVEL 3: Lớp Statistics và PersonAccount
// ==========================================

{
  console.log('%c--- DAY 15: LEVEL 3 ---', 'color: purple; font-weight: bold; font-size: 14px');

  // ==========================================
  // Câu 1: Xây dựng lớp Statistics tính toán các chỉ số thống kê
  // ==========================================
  console.log('%cCâu 1: Xây dựng lớp Statistics', 'font-weight: bold; color: #0d6efd');

  class Statistics {
    constructor(data = []) {
      this.data = data;
    }

    // Đếm số lượng phần tử
    count() {
      return this.data.length;
    }

    // Tính tổng tất cả phần tử
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }

    // Tìm giá trị nhỏ nhất
    min() {
      if (this.data.length === 0) return 0;
      return Math.min(...this.data);
    }

    // Tìm giá trị lớn nhất
    max() {
      if (this.data.length === 0) return 0;
      return Math.max(...this.data);
    }

    // Khoảng biến thiên (range = max - min)
    range() {
      return this.max() - this.min();
    }

    // Giá trị trung bình (mean)
    mean() {
      if (this.data.length === 0) return 0;
      const avg = this.sum() / this.count();
      return Math.round(avg); // Làm tròn theo chuẩn bài học gốc (30)
    }

    // Giá trị trung bình chính xác (dạng thập phân)
    meanExact() {
      if (this.data.length === 0) return 0;
      return Number((this.sum() / this.count()).toFixed(2));
    }

    // Số trung vị (median)
    median() {
      if (this.data.length === 0) return 0;
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
      }
      return sorted[mid];
    }

    // Giá trị mốt (mode - xuất hiện nhiều nhất)
    mode() {
      if (this.data.length === 0) return null;
      const frequencyMap = {};
      this.data.forEach((val) => {
        frequencyMap[val] = (frequencyMap[val] || 0) + 1;
      });

      let maxCount = 0;
      let modeVal = null;
      for (const key in frequencyMap) {
        if (frequencyMap[key] > maxCount) {
          maxCount = frequencyMap[key];
          modeVal = Number(key);
        }
      }
      return { mode: modeVal, count: maxCount };
    }

    // Phương sai (Variance)
    var() {
      if (this.data.length === 0) return 0;
      const mean = this.sum() / this.count();
      const variance = this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count();
      return Number(variance.toFixed(1));
    }

    // Độ lệch chuẩn (Standard Deviation)
    std() {
      return Number(Math.sqrt(this.var()).toFixed(1));
    }

    // Phân phối tần suất (Frequency Distribution)
    freqDist() {
      if (this.data.length === 0) return [];
      const frequencyMap = {};
      const total = this.count();

      this.data.forEach((val) => {
        frequencyMap[val] = (frequencyMap[val] || 0) + 1;
      });

      const distList = Object.keys(frequencyMap).map((key) => {
        const count = frequencyMap[key];
        const percentage = Number(((count / total) * 100).toFixed(1));
        return { percentage, value: Number(key), count };
      });

      // Sắp xếp giảm dần theo tỷ lệ phần trăm
      distList.sort((a, b) => b.percentage - a.percentage);

      // Trả về dạng mảng tuple [(percentage, value), ...] như định dạng của bài học
      return distList.map((item) => `(${item.percentage}, ${item.value})`);
    }

    // Tóm tắt thống kê toàn bộ dữ liệu
    describe() {
      return `=== THỐNG KÊ MÔ TẢ ===
Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: (${this.mode().mode}, ${this.mode().count})
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${this.freqDist().join(', ')}`;
    }
  }

  // Dữ liệu mẫu tuổi của bài học Day 15
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);

  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 30
  console.log('Median: ', statistics.median()); // 29
  console.log('Mode: ', statistics.mode()); // { mode: 26, count: 5 }
  console.log('Variance: ', statistics.var()); // 17.5
  console.log('Standard Deviation: ', statistics.std()); // 4.2
  console.log('Frequency Distribution: ', statistics.freqDist());
  console.log('\n' + statistics.describe());

  // ==========================================
  // Câu 2: Xây dựng lớp PersonAccount quản lý thu chi tài chính cá nhân
  // ==========================================
  console.log('\n%cCâu 2: Xây dựng lớp PersonAccount', 'font-weight: bold; color: #0d6efd');

  class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = [];   // Danh sách các khoản thu: [{ amount, description }]
      this.expenses = [];  // Danh sách các khoản chi: [{ amount, description }]
    }

    // Phương thức thêm khoản thu nhập
    addIncome(amount, description) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.error('Số tiền thu nhập phải là số dương hợp lệ!');
        return;
      }
      this.incomes.push({ amount, description: description || 'Thu nhập khác' });
    }

    // Phương thức thêm khoản chi tiêu
    addExpense(amount, description) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.error('Số tiền chi tiêu phải là số dương hợp lệ!');
        return;
      }
      this.expenses.push({ amount, description: description || 'Chi tiêu khác' });
    }

    // Tính tổng thu nhập
    totalIncome() {
      return this.incomes.reduce((total, item) => total + item.amount, 0);
    }

    // Tính tổng chi tiêu
    totalExpense() {
      return this.expenses.reduce((total, item) => total + item.amount, 0);
    }

    // Tính số dư tài khoản (Số dư = Tổng thu - Tổng chi)
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }

    // Hiển thị thông tin tài khoản chi tiết
    accountInfo() {
      return `=== THÔNG TIN TÀI KHOẢN TÀI CHÍNH ===
Chủ tài khoản: ${this.firstname} ${this.lastname}
Tổng thu nhập: ${this.totalIncome().toLocaleString('vi-VN')} VND
Tổng chi tiêu: ${this.totalExpense().toLocaleString('vi-VN')} VND
Số dư khả dụng: ${this.accountBalance().toLocaleString('vi-VN')} VND`;
    }
  }

  // Khởi tạo tài khoản cá nhân và thử nghiệm các phương thức
  const myAccount = new PersonAccount('Nguyen', 'Van A');

  // Thêm các nguồn thu nhập
  myAccount.addIncome(20000000, 'Lương kỹ sư phần mềm hàng tháng');
  myAccount.addIncome(5000000, 'Thu nhập dự án làm ngoài (Freelance)');
  myAccount.addIncome(2000000, 'Lãi tiền gửi tiết kiệm');

  // Thêm các khoản chi tiêu
  myAccount.addExpense(6000000, 'Tiền thuê căn hộ');
  myAccount.addExpense(4000000, 'Chi phí ăn uống sinh hoạt');
  myAccount.addExpense(1500000, 'Hóa đơn điện nước & Internet');
  myAccount.addExpense(2000000, 'Khóa học lập trình và sách');

  // Kiểm tra kết quả
  console.log('Tổng thu nhập:', myAccount.totalIncome().toLocaleString('vi-VN'), 'VND');
  console.log('Tổng chi tiêu:', myAccount.totalExpense().toLocaleString('vi-VN'), 'VND');
  console.log('Số dư tài khoản:', myAccount.accountBalance().toLocaleString('vi-VN'), 'VND');
  console.log('\n' + myAccount.accountInfo());
}
