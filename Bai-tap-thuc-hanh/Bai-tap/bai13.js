

/**
 * Chuyển đổi một số (giờ, phút, giây) thành chuỗi 2 chữ số (ví dụ: 9 -> "09", 14 -> "14")
 * @param {number} so - Số nguyên cần định dạng
 * @returns {string} Chuỗi gồm 2 chữ số
 */
function dinhDangHaiChuSo(so) {
    return so < 10 ? '0' + so : String(so);
}

/**
 * Trả về đường dẫn file ảnh GIF tương ứng với một ký tự chữ số ('0' đến '9')
 * Ví dụ: chữ số '1' -> "01.gif", chữ số '4' -> "04.gif"
 * @param {string} chuSo - Ký tự chữ số từ '0' đến '9'
 * @returns {string} Tên file ảnh GIF
 */
function layDuongDanAnh(chuSo) {
    return '0' + chuSo + '.gif';
}

/**
 * Cập nhật hiển thị đồng hồ số và lời chào theo thời gian thực
 */
function capNhatDongHo() {
    // 1. Lấy thời gian hiện tại từ hệ thống
    const bayGio = new Date();
    const gio = bayGio.getHours();
    const phut = bayGio.getMinutes();
    const giay = bayGio.getSeconds();

    // 2. Định dạng giờ, phút, giây sang chuỗi 2 chữ số
    const chuoiGio = dinhDangHaiChuSo(gio);
    const chuoiPhut = dinhDangHaiChuSo(phut);
    const chuoiGiay = dinhDangHaiChuSo(giay);

    // 3. Gán ảnh GIF tương ứng cho từng chữ số của giờ, phút, giây
    // Giờ (hàng chục và hàng đơn vị)
    document.getElementById('gio-chuc').src = layDuongDanAnh(chuoiGio.charAt(0));
    document.getElementById('gio-don-vi').src = layDuongDanAnh(chuoiGio.charAt(1));

    // Phút (hàng chục và hàng đơn vị)
    document.getElementById('phut-chuc').src = layDuongDanAnh(chuoiPhut.charAt(0));
    document.getElementById('phut-don-vi').src = layDuongDanAnh(chuoiPhut.charAt(1));

    // Giây (hàng chục và hàng đơn vị)
    document.getElementById('giay-chuc').src = layDuongDanAnh(chuoiGiay.charAt(0));
    document.getElementById('giay-don-vi').src = layDuongDanAnh(chuoiGiay.charAt(1));

    // 4. Xác định lời chào dựa trên giờ hệ thống
    // 5 - 11: sáng, 12 - 17: chiều, 18 - 4: tối
    let loiChao = '';
    if (gio >= 5 && gio <= 11) {
        loiChao = 'Chào buổi sáng';
    } else if (gio >= 12 && gio <= 17) {
        loiChao = 'Chào buổi chiều';
    } else {
        loiChao = 'Chào buổi tối';
    }

    // Hiển thị lời chào ra màn hình
    document.getElementById('loi-chao').textContent = loiChao;
}

// Tự động chạy ngay khi trang web được tải
capNhatDongHo();

// Cập nhật đồng hồ mỗi giây một lần (1000ms)
setInterval(capNhatDongHo, 1000);
