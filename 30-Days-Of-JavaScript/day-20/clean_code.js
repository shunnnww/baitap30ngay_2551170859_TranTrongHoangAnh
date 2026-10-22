// ==============================================================================
// 30 Days of JavaScript - Day 20: Writing Clean Code
// File: clean_code.js
// Bộ quy chuẩn viết mã sạch Clean Code theo Airbnb & Google JavaScript Style Guide
// ==============================================================================

console.log('=================================================================');
console.log('🚀 DAY 20: BỘ QUY CHUẨN VIẾT MÃ SẠCH (CLEAN CODE JAVASCRIPT)');
console.log('=================================================================\n');

// ------------------------------------------------------------------------------
// 1. QUY TẮC KHAI BÁO BIẾN (Variable Declarations: No var, use const & let)
// ------------------------------------------------------------------------------
console.log('📌 1. QUY TẮC KHAI BÁO BIẾN:');
/**
 * - Ưu tiên mặc định sử dụng `const` cho tất cả các định danh không thay đổi giá trị.
 * - Chỉ sử dụng `let` khi chắc chắn biến sẽ được gán lại giá trị trong tương lai.
 * - Tuyệt đối KHÔNG sử dụng `var` (vì có cơ chế hoisting gây khó đoán, không có block scope).
 */

// ❌ Bad Code:
// var count = 10;
// var title = "JavaScript";

//  Clean Code:
const MAX_LOGIN_ATTEMPTS = 5; // Hằng số cố định dùng UPPER_SNAKE_CASE
let currentLoginAttempts = 0; // Biến có thể thay đổi dùng camelCase

currentLoginAttempts++;
console.log(`Số lần đăng nhập hiện tại: ${currentLoginAttempts} / ${MAX_LOGIN_ATTEMPTS}`);


// ------------------------------------------------------------------------------
// 2. NGUYÊN TẮC ĐẶT TÊN CÓ NGHĨA (Meaningful Naming Conventions)
// ------------------------------------------------------------------------------
console.log('\n📌 2. ĐẶT TÊN CÓ Ý NGHĨA RÕ RÀNG:');
/**
 * - Biến & hàm: camelCase (ví dụ: `userData`, `calculateTotalPrice`).
 * - Hằng số toàn cục / config: UPPER_SNAKE_CASE (ví dụ: `DEFAULT_TIMEOUT_MS`, `API_BASE_URL`).
 * - Lớp (Class) & Constructor: PascalCase (ví dụ: `UserAccount`, `ShoppingCart`).
 * - Biến Boolean: Bắt đầu bằng tiền tố `is`, `has`, `can`, `should` (ví dụ: `isActive`, `hasPermission`).
 * - Tránh viết tắt tối nghĩa (như `x`, `arr1`, `temp`, `fn`).
 */

// ❌ Bad Code:
// const d = 86400;
// const u = { n: 'Long', a: 20 };
// function chk(u) { return u.a >= 18; }

//  Clean Code:
const SECONDS_PER_DAY = 86400;
const currentUser = {
    fullName: 'Nguyễn Văn An',
    age: 20,
    isActive: true
};

function isAdult(user) {
    const LEGAL_ADULT_AGE = 18;
    return user.age >= LEGAL_ADULT_AGE;
}

console.log(`Người dùng ${currentUser.fullName} đã đủ 18 tuổi? -> ${isAdult(currentUser) ? 'Đã đủ' : 'Chưa đủ'}`);


// ------------------------------------------------------------------------------
// 3. KHỬ MAGIC NUMBERS VÀ HARDCODED STRINGS (Avoid Magic Numbers)
// ------------------------------------------------------------------------------
console.log('\n📌 3. LOẠI BỎ MAGIC NUMBERS & HARDCODED STRINGS:');
/**
 * - Không để những con số vô nghĩa xuất hiện trực tiếp trong phép tính.
 * - Hãy đặt tên hằng số rõ ràng để diễn tả mục đích của số đó.
 */

// ❌ Bad Code:
// function calcFee(amount) {
//     return amount * 0.08 + 15000; // 0.08 và 15000 là gì?
// }

//  Clean Code:
const VAT_RATE = 0.08; // Thuế suất GTGT 8%
const SHIPPING_FEE_VND = 15000; // Cước vận chuyển cố định 15.000 VND

function calculateOrderTotal(subtotal) {
    const taxAmount = subtotal * VAT_RATE;
    const finalTotal = subtotal + taxAmount + SHIPPING_FEE_VND;
    return {
        subtotal,
        taxAmount,
        shippingFee: SHIPPING_FEE_VND,
        finalTotal
    };
}

const orderBill = calculateOrderTotal(250000);
console.log('Hóa đơn đặt hàng:', orderBill);


// ------------------------------------------------------------------------------
// 4. NGUYÊN TẮC ĐƠN TRÁCH NHIỆM CHO HÀM (Single Responsibility Principle - SRP)
// ------------------------------------------------------------------------------
console.log('\n📌 4. HÀM ĐƠN TRÁCH NHIỆM (SINGLE RESPONSIBILITY):');
/**
 * - Mỗi hàm chỉ làm DUY NHẤT MỘT VIỆC và làm thật tốt việc đó.
 * - Tên hàm là một động từ (Verb phrase) mô tả chính xác hành động.
 * - Tách các tác vụ phức tạp thành nhiều hàm nhỏ dễ kiểm thử và tái sử dụng.
 */

// ❌ Bad Code: Một hàm vừa lọc, vừa tính tổng, vừa định dạng in ra
// function processCart(items) {
//     let s = 0;
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].inStock) {
//             s += items[i].price * items[i].qty;
//         }
//     }
//     console.log('Tổng là: ' + s);
// }

//  Clean Code: Chia nhỏ thành các hàm độc lập
const cartItems = [
    { name: 'Bàn phím cơ', price: 1200000, quantity: 1, inStock: true },
    { name: 'Chuột không dây', price: 450000, quantity: 2, inStock: true },
    { name: 'Tai nghe Bluetooth', price: 850000, quantity: 1, inStock: false } // Hết hàng
];

// Hàm 1: Chỉ chịu trách nhiệm lọc các sản phẩm còn hàng
function getAvailableItems(items) {
    return items.filter(item => item.inStock);
}

// Hàm 2: Chỉ chịu trách nhiệm tính toán tổng số tiền
function calculateSubtotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Hàm 3: Chỉ chịu trách nhiệm định dạng tiền tệ Việt Nam Đồng
function formatCurrencyVND(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

const availableItems = getAvailableItems(cartItems);
const cartSubtotal = calculateSubtotal(availableItems);
console.log('Tổng tiền các món còn hàng:', formatCurrencyVND(cartSubtotal));


// ------------------------------------------------------------------------------
// 5. ÁP DỤNG GUARD CLAUSES & EARLY RETURN (Tránh lồng if/else sâu)
// ------------------------------------------------------------------------------
console.log('\n📌 5. ÁP DỤNG GUARD CLAUSES & EARLY RETURN:');
/**
 * - Xử lý các điều kiện lỗi / ngoại lệ / biên ngay từ đầu và return sớm.
 * - Giúp code thẳng hàng, không bị thụt lề nhiều cấp bậc ("Pyramid of Doom").
 */

// ❌ Bad Code: Lồng ghép if-else phức tạp
// function registerUser(username, password) {
//     if (username) {
//         if (password) {
//             if (password.length >= 6) {
//                 return 'Đăng ký thành công!';
//             } else {
//                 return 'Mật khẩu quá ngắn';
//             }
//         } else {
//             return 'Thiếu mật khẩu';
//         }
//     } else {
//         return 'Thiếu tên đăng nhập';
//     }
// }

//  Clean Code: Sử dụng Guard Clauses
function registerUser(username, password) {
    const MIN_PASSWORD_LENGTH = 6;

    if (!username || username.trim() === '') {
        return { success: false, message: 'Tên đăng nhập không được để trống!' };
    }

    if (!password) {
        return { success: false, message: 'Mật khẩu không được để trống!' };
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
        return { success: false, message: `Mật khẩu phải chứa ít nhất ${MIN_PASSWORD_LENGTH} ký tự!` };
    }

    // Luồng chính (Happy Path) được giữ thẳng hàng
    return { success: true, message: `Người dùng '${username}' đã đăng ký tài khoản thành công.` };
}

console.log('Test đăng ký rỗng:', registerUser('', '123456'));
console.log('Test mật khẩu ngắn:', registerUser('nguyenvanan', '123'));
console.log('Test hợp lệ:', registerUser('nguyenvanan', 'MatKhauBaoMat@2026'));


// ------------------------------------------------------------------------------
// 6. CÚ PHÁP HIỆN ĐẠI ES6+ (Destructuring, Default Params, Spread)
// ------------------------------------------------------------------------------
console.log('\n📌 6. TẬN DỤNG CÚ PHÁP RÚT GỌN VÀ HIỆN ĐẠI ES6+:');

// 6.1 Destructuring & Default Parameters:
function renderUserProfile({ username, email, role = 'Thành viên', score = 0 } = {}) {
    return `Người dùng: ${username} | Email: ${email} | Vai trò: ${role} | Điểm tích lũy: ${score}`;
}

const profile = renderUserProfile({
    username: 'long_dev',
    email: 'long@example.com'
});
console.log('Profile rendering:', profile);

// 6.2 Spread Operator để clone và merge an toàn mà không mutate object gốc:
const defaultSettings = { theme: 'light', showNotifications: true, language: 'vi' };
const userPreferences = { theme: 'dark' };

const finalConfiguration = { ...defaultSettings, ...userPreferences };
console.log('Cấu hình ứng dụng hoàn chỉnh:', finalConfiguration);

console.log('\n✅ Toàn bộ các tiêu chuẩn Clean Code đã được thực thi và kiểm tra thành công!');
