// =============================================
// BÀI 12 — JAVASCRIPT: In lịch
// =============================================

function capNhatLich() {
    const ngay = parseInt(document.getElementById('nhap-ngay').value, 10);
    const thang = parseInt(document.getElementById('nhap-thang').value, 10);
    const nam = parseInt(document.getElementById('nhap-nam').value, 10);

    if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
        alert('Vui lòng nhập đầy đủ ngày, tháng, năm hợp lệ!');
        return;
    }

    // Tạo đối tượng Date (Lưu ý: tháng trong JS tính từ 0 - 11)
    const ngayDuocChon = new Date(nam, thang - 1, ngay);

    // Mảng tên các thứ trong tuần (getDay() trả về 0: Chủ nhật, 1: Thứ hai...)
    const cacThu = [
        'Chủ nhật',
        'Thứ hai',
        'Thứ ba',
        'Thứ tư',
        'Thứ năm',
        'Thứ sáu',
        'Thứ bảy'
    ];

    const thuTrongTuan = cacThu[ngayDuocChon.getDay()];

    // Cập nhật giao diện ô lịch
    document.getElementById('hien-thi-nam').textContent = nam;
    document.getElementById('hien-thi-thang').textContent = 'Tháng ' + thang;
    document.getElementById('hien-thi-ngay').textContent = ngay;
    document.getElementById('hien-thi-thu').textContent = thuTrongTuan;

    // Lời chào theo thời gian hệ thống hiện tại (getHours())
    const gioHienTai = new Date().getHours();
    let cauChao = 'Chào buổi sáng!';

    if (gioHienTai >= 12 && gioHienTai < 18) {
        cauChao = 'Chào buổi chiều!';
    } else if (gioHienTai >= 18 || gioHienTai < 5) {
        cauChao = 'Chào buổi tối!';
    }

    document.getElementById('loi-chao').textContent = cauChao;
}

// Bắt sự kiện khi nhấn nút "In lịch"
document.getElementById('btn-in-lich').addEventListener('click', capNhatLich);

// Gọi hàm cập nhật lần đầu khi tải trang
window.addEventListener('DOMContentLoaded', capNhatLich);
