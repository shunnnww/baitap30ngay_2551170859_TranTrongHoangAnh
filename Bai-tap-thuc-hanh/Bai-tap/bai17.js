

const form = document.getElementById('form-dang-ky');
const hoTen = document.getElementById('ho-ten');
const email = document.getElementById('email');
const matKhau = document.getElementById('mat-khau');
const xacNhan = document.getElementById('xac-nhan');

function kiemTra(input, thongBaoElement, hopLe, thongDiepLoi, thongDiepHopLe = '✓ Hợp lệ') {
    if (hopLe) {
        input.className = 'hop-le';
        thongBaoElement.className = 'thong-bao text-xanh';
        thongBaoElement.textContent = thongDiepHopLe;
        return true;
    } else {
        input.className = 'co-loi';
        thongBaoElement.className = 'thong-bao text-do';
        thongBaoElement.textContent = thongDiepLoi;
        return false;
    }
}

function validateHoTen() {
    const val = hoTen.value.trim();
    const span = document.querySelector('#nhom-ho-ten .thong-bao');
    return kiemTra(hoTen, span, val.length > 0, '✗ Họ tên không được để trống');
}

function validateEmail() {
    const val = email.value.trim();
    const span = document.querySelector('#nhom-email .thong-bao');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val === '') {
        return kiemTra(email, span, false, '✗ Email không được để trống');
    } else if (!val.includes('@') || !regex.test(val)) {
        return kiemTra(email, span, false, '✗ Email không hợp lệ (thiếu tên miền)');
    } else {
        return kiemTra(email, span, true, '');
    }
}

function validateMatKhau() {
    const val = matKhau.value;
    const span = document.querySelector('#nhom-mat-khau .thong-bao');
    return kiemTra(matKhau, span, val.length >= 6, '✗ Mật khẩu phải có ít nhất 6 ký tự');
}

function validateXacNhan() {
    const val = xacNhan.value;
    const span = document.querySelector('#nhom-xac-nhan .thong-bao');
    const hopLe = val.length > 0 && val === matKhau.value;
    return kiemTra(xacNhan, span, hopLe, '✗ Mật khẩu xác nhận không khớp');
}

hoTen.addEventListener('input', validateHoTen);
email.addEventListener('input', validateEmail);
matKhau.addEventListener('input', function() {
    validateMatKhau();
    if (xacNhan.value) validateXacNhan();
});
xacNhan.addEventListener('input', validateXacNhan);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const ok1 = validateHoTen();
    const ok2 = validateEmail();
    const ok3 = validateMatKhau();
    const ok4 = validateXacNhan();

    if (ok1 && ok2 && ok3 && ok4) {
        alert('Đăng ký tài khoản thành công!');
    }
});
