// =============================================
// BÀI 16 — JAVASCRIPT: Danh sách việc cần làm
// =============================================

const oNhapViec = document.getElementById('o-nhap-viec');
const btnThem = document.getElementById('btn-them');
const danhSach = document.getElementById('danh-sach');
const soViecCon = document.getElementById('so-viec-con');

// Cập nhật số việc còn lại
function capNhatDem() {
    const tongSo = danhSach.querySelectorAll('.muc-viec').length;
    const daXong = danhSach.querySelectorAll('.muc-viec.hoan-thanh').length;
    const conLai = tongSo - daXong;
    soViecCon.textContent = `Còn ${conLai} việc chưa hoàn thành`;
}

// Thêm việc mới
function themViec() {
    const noiDung = oNhapViec.value.trim();
    if (!noiDung) return;

    const li = document.createElement('li');
    li.className = 'muc-viec';
    li.innerHTML = `
        <span class="o-danh-dau"></span>
        <span class="noi-dung-viec">${noiDung}</span>
        <button type="button" class="btn-xoa">Xoá</button>
    `;

    danhSach.appendChild(li);
    oNhapViec.value = '';
    oNhapViec.focus();
    capNhatDem();
}

btnThem.addEventListener('click', themViec);

oNhapViec.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        themViec();
    }
});

// Xử lý đánh dấu hoàn thành & xoá việc
danhSach.addEventListener('click', function(e) {
    const mucViec = e.target.closest('.muc-viec');
    if (!mucViec) return;

    if (e.target.classList.contains('btn-xoa')) {
        mucViec.remove();
        capNhatDem();
        return;
    }

    if (e.target.classList.contains('o-danh-dau') || e.target.classList.contains('noi-dung-viec')) {
        mucViec.classList.toggle('hoan-thanh');
        capNhatDem();
    }
});
