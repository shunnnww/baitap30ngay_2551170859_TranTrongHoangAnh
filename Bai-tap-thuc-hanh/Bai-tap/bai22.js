// =============================================
// BÀI 22 — JAVASCRIPT: Chế độ Sáng / Tối
// =============================================

const nutGat = document.getElementById('nut-gat');
const dongTrangThai = document.getElementById('dong-trang-thai');

nutGat.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('toi');
        dongTrangThai.textContent = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        document.body.classList.remove('toi');
        dongTrangThai.textContent = 'Đây là giao diện ở chế độ SÁNG.';
    }
});
