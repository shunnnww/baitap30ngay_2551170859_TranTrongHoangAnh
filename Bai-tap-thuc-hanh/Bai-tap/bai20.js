// =============================================
// BÀI 20 — JAVASCRIPT: Hiệu ứng ảnh với CSS Filter
// =============================================

const anhHoa = document.getElementById('anh-hoa');
const cacNut = document.querySelectorAll('.btn-filter');

cacNut.forEach(function(nut) {
    nut.addEventListener('click', function() {
        cacNut.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        const kieuFilter = this.getAttribute('data-filter');
        anhHoa.className = 'anh-hoa filter-' + kieuFilter;
    });
});
