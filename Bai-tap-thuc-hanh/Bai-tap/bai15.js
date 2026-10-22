
// Biến lưu trữ biểu thức hiện tại của phép tính
let bieuThuc = '';

// Cờ đánh dấu đã bấm dấu bằng tính ra kết quả hay chưa
let daTinhXong = false;

// Lấy tham chiếu đến các phần tử hiển thị trên màn hình
const manHinhPhepTinh = document.getElementById('phep-tinh');
const manHinhKetQua = document.getElementById('ket-qua');

/**
 * Cập nhật chuỗi biểu thức lên giao diện màn hình
 */
function capNhatManHinh() {
    manHinhPhepTinh.textContent = bieuThuc;
}

/**
 * Nhập một ký tự số hoặc toán tử vào chuỗi biểu thức
 * @param {string} kyTu - Ký tự được bấm (0-9, ., +, −, ×, ÷, %)
 */
function nhapKyTu(kyTu) {
    const toanTu = ['+', '−', '×', '÷'];

    // Nếu vừa tính xong kết quả trước đó
    if (daTinhXong) {
        if (toanTu.includes(kyTu) || kyTu === '%') {
            // Nếu bấm tiếp toán tử: lấy kết quả vừa tính làm toán hạng đầu
            bieuThuc = manHinhKetQua.textContent + kyTu;
        } else {
            // Nếu bấm số mới: bắt đầu một phép tính hoàn toàn mới
            bieuThuc = (kyTu === '.') ? '0.' : kyTu;
            manHinhKetQua.textContent = '0';
        }
        daTinhXong = false;
        capNhatManHinh();
        return;
    }

    // Xử lý khi người dùng nhập toán tử
    if (toanTu.includes(kyTu)) {
        // Cho phép dấu trừ đứng đầu để biểu diễn số âm
        if (bieuThuc === '') {
            if (kyTu === '−') {
                bieuThuc = '−';
                capNhatManHinh();
            }
            return;
        }

        const kyTuCuoi = bieuThuc.slice(-1);
        // Nếu ký tự trước đó cũng là một toán tử thì thay thế bằng toán tử mới
        if (toanTu.includes(kyTuCuoi)) {
            bieuThuc = bieuThuc.slice(0, -1) + kyTu;
            capNhatManHinh();
            return;
        }
    }

    // Xử lý dấu chấm thập phân (tránh nhập nhiều dấu chấm trong cùng một toán hạng)
    if (kyTu === '.') {
        // Tách chuỗi theo các toán tử để lấy toán hạng đang nhập dở
        const cacPhan = bieuThuc.split(/[+\−×÷()]/);
        const soHienTai = cacPhan[cacPhan.length - 1];

        // Nếu toán hạng hiện tại đã có dấu chấm thì không thêm nữa
        if (soHienTai.includes('.')) {
            return;
        }

        // Nếu chưa nhập số nào trước dấu chấm thì tự động thêm '0.'
        if (soHienTai === '') {
            bieuThuc += '0.';
            capNhatManHinh();
            return;
        }
    }

    // Nối ký tự vừa bấm vào biểu thức
    bieuThuc += kyTu;
    capNhatManHinh();
}

/**
 * Xử lý đóng/mở ngoặc đơn ( ) một cách thông minh
 */
function nhapNgoac() {
    // Nếu vừa tính xong, bắt đầu biểu thức mới
    if (daTinhXong) {
        bieuThuc = '';
        manHinhKetQua.textContent = '0';
        daTinhXong = false;
    }

    // Đếm số lượng dấu ngoặc mở và đóng trong biểu thức
    const soMo = (bieuThuc.match(/\(/g) || []).length;
    const soDong = (bieuThuc.match(/\)/g) || []).length;
    const kyTuCuoi = bieuThuc.slice(-1);

    // Danh sách ký tự không thể đi liền trước dấu đóng ngoặc ')'
    const toanTuHoacMoNgoac = ['+', '−', '×', '÷', '%', '(', ''];

    // Nếu còn ngoặc mở chưa đóng và ký tự trước là số hoặc ngoặc đóng -> đóng ngoặc ')'
    if (soMo > soDong && !toanTuHoacMoNgoac.includes(kyTuCuoi)) {
        bieuThuc += ')';
    } else {
        // Nếu ký tự trước đó là số hoặc ngoặc đóng -> tự động chèn dấu nhân '×('
        if (kyTuCuoi !== '' && !toanTuHoacMoNgoac.includes(kyTuCuoi)) {
            bieuThuc += '×(';
        } else {
            bieuThuc += '(';
        }
    }

    capNhatManHinh();
}

/**
 * Xóa toàn bộ biểu thức và kết quả (nút C)
 */
function xoaTatCa() {
    bieuThuc = '';
    daTinhXong = false;
    manHinhPhepTinh.textContent = '';
    manHinhKetQua.textContent = '0';
}

/**
 * Xóa 1 ký tự cuối cùng (hỗ trợ phím Backspace)
 */
function xoaKyTuCuoi() {
    if (daTinhXong) {
        xoaTatCa();
        return;
    }
    bieuThuc = bieuThuc.slice(0, -1);
    capNhatManHinh();
}

/**
 * Tính toán và hiển thị kết quả biểu thức (nút =)
 */
function tinhKetQua() {
    // Không làm gì nếu biểu thức đang rỗng
    if (!bieuThuc.trim()) return;

    try {
        // 1. Chuẩn hóa chuỗi biểu thức:
        // Thay thế ký tự nhân × thành *
        // Thay thế ký tự chia ÷ thành /
        // Thay thế ký tự trừ − thành -
        let chuoiTinh = bieuThuc
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/[−-]/g, '-');

        // Xử lý ký tự % (phần trăm): chuyển dạng 50% thành 50/100
        chuoiTinh = chuoiTinh.replace(/%([^\d]|$)/g, '/100$1');

        // Tự động đóng các dấu ngoặc còn thiếu trước khi tính
        const soMo = (chuoiTinh.match(/\(/g) || []).length;
        const soDong = (chuoiTinh.match(/\)/g) || []).length;
        if (soMo > soDong) {
            chuoiTinh += ')'.repeat(soMo - soDong);
        }

        // 2. Sử dụng eval() để tính toán giá trị biểu thức
        let ketQua = eval(chuoiTinh);

        // 3. Kiểm tra tính hợp lệ của kết quả
        if (ketQua === Infinity || ketQua === -Infinity || isNaN(ketQua)) {
            manHinhKetQua.textContent = 'Lỗi phép tính';
        } else {
            // Làm tròn tối đa 8 số thập phân để khử sai số dấu phẩy động
            ketQua = Math.round(ketQua * 100000000) / 100000000;
            manHinhKetQua.textContent = ketQua;
        }

        daTinhXong = true;
    } catch (error) {
        // Bắt lỗi cú pháp hoặc tính toán không hợp lệ
        manHinhKetQua.textContent = 'Lỗi';
        daTinhXong = true;
    }
}

/**
 * Hỗ trợ nhập liệu từ bàn phím máy tính
 */
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        nhapKyTu(key);
    } else if (key === '.') {
        nhapKyTu('.');
    } else if (key === '+') {
        nhapKyTu('+');
    } else if (key === '-') {
        nhapKyTu('−');
    } else if (key === '*') {
        nhapKyTu('×');
    } else if (key === '/') {
        event.preventDefault(); // Ngăn mở tìm kiếm nhanh của trình duyệt
        nhapKyTu('÷');
    } else if (key === '%') {
        nhapKyTu('%');
    } else if (key === '(' || key === ')') {
        nhapNgoac();
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        tinhKetQua();
    } else if (key === 'Backspace') {
        xoaKyTuCuoi();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        xoaTatCa();
    }
});
