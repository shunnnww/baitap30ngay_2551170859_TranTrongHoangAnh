# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 17: KIỂM TRA TÍNH HỢP LỆ BIỂU MẪU (FORM VALIDATION) BẰNG JAVASCRIPT

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Học phần:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Mã nguồn liên quan:** `bai17.html`, `bai17.css`, `bai17.js`.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Thiết lập màn hình:** Chia đôi màn hình máy tính (`Windows + Mũi tên trái` cho VS Code mở 3 tệp `bai17.html`, `bai17.css`, `bai17.js`; `Windows + Mũi tên phải` cho trình duyệt Chrome hiển thị form đăng ký).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép `> "..."` là **lời nói trực tiếp** của bạn. Hãy đọc to, rõ ràng, dứt khoát, giữ ngữ điệu học thuật tự tin.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bôi đen code, gõ test case trên form, mở tab F12 DevTools.
   - ⏱️ **Mốc thời gian:** Định mức ước lượng giúp bạn làm chủ nhịp điệu bài thuyết minh từ 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình hoặc cửa sổ trình duyệt đang hiển thị trang Đăng ký tài khoản Bài 17.
- Rê chuột qua các ô nhập: Họ tên (có viền xanh, tích hợp lệ), Email (viền đỏ báo lỗi thiếu tên miền), Mật khẩu (viền đỏ báo lỗi ngắn hơn 6 ký tự), Xác nhận mật khẩu (viền xanh), và nút Đăng ký màu cam rực rỡ.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em xin phép được thực hiện video thuyết minh chi tiết và hướng dẫn kỹ thuật đối với **Bài tập thực hành số 17: Kiểm tra tính hợp lệ biểu mẫu (Form Validation) bằng JavaScript thuần**.
> 
> Trong kiến trúc ứng dụng web, biểu mẫu (Form) chính là cánh cửa giao tiếp trực tiếp giữa người dùng và hệ thống. Nếu không có cơ chế xác thực dữ liệu chặt chẽ ngay từ phía máy khách (Client-side Validation), hệ thống máy chủ (Server-side) sẽ phải gánh chịu rất nhiều yêu cầu rác, dữ liệu sai định dạng và các nguy cơ tấn công bảo mật.
> 
> Bài thực hành số 17 này đặt ra một bài toán thực tế vô cùng điển hình: Xây dựng một biểu mẫu Đăng ký tài khoản với 4 trường dữ liệu căn bản:
> - **Họ và tên:** Kiểm tra bắt buộc không được bỏ trống.
> - **Email:** Kiểm tra định dạng hòm thư điện tử chuẩn mực thông qua Biểu thức chính quy (Regular Expression - Regex).
> - **Mật khẩu:** Kiểm tra độ dài tối thiểu an toàn, yêu cầu ít nhất từ 6 ký tự trở lên.
> - **Xác nhận mật khẩu:** So sánh đối chiếu logic đảm bảo chuỗi mật khẩu gõ lại phải trùng khớp 100% với mật khẩu đã nhập ở trên.
> 
> Điểm đặc sắc của bài toán là chúng em xây dựng cơ chế **Phản hồi tức thì thời gian thực (Real-time Validation)**: Ngay khi người dùng đang gõ phím, hệ thống lập tức đánh giá và cập nhật trực quan màu viền ô nhập (viền xanh lá khi hợp lệ, viền đỏ khi có lỗi) cùng thông điệp giải thích rõ ràng bên dưới, thay vì chỉ chờ người dùng bấm nút gửi mới báo lỗi.
> 
> Cấu trúc bài thuyết minh hôm nay gồm 7 phần:
> - Phần 1: Giới thiệu tổng quan và mục tiêu bài tập.
> - Phần 2: Cơ sở lý thuyết nền tảng (Regex, Real-time Event, PreventDefault).
> - Phần 3: Thuyết minh chi tiết cấu trúc HTML (`bai17.html`).
> - Phần 4: Thuyết minh chi tiết bảng định dạng CSS (`bai17.css`).
> - Phần 5: Thuyết minh chuyên sâu giải thuật JavaScript (`bai17.js`).
> - Phần 6: Thực nghiệm demo trực tiếp trên trình duyệt, kiểm thử các test case biên và soi F12 DevTools.
> - Phần 7: Tổng kết bài học và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | 02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code mở tệp `bai17.js`.
- Bôi đen dòng 34 chứa chuỗi Regex email `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` và dòng 66 `e.preventDefault()`.

🗣️ **Lời đọc:**
> "Trước khi mổ xẻ từng dòng code, em xin tóm lược 4 trụ cột kiến thức lý thuyết cốt lõi của bài toán Form Validation:
> 
> **Thứ nhất: Thuộc tính novalidate và phương thức e.preventDefault().**
> - Mặc định, các trình duyệt hiện đại như Chrome hay Edge đều có sẵn tính năng HTML5 Validation (hiển thị các bong bóng tooltip màu trắng báo lỗi). Tuy nhiên, giao diện của tooltip mặc định này rất thô, không thể can thiệp kiểu dáng và không đồng nhất giữa các hệ điều hành. Do đó, trên thẻ `<form>`, chúng em chủ động thêm thuộc tính boolean `novalidate`. Thuộc tính này ra lệnh cho trình duyệt vô hiệu hóa hoàn toàn cơ chế kiểm tra mặc định để nhường toàn quyền kiểm soát cho JavaScript.
> - Kế tiếp, khi người dùng nhấn nút 'Đăng ký' (kích hoạt sự kiện `submit`), hành vi tự nhiên của trình duyệt là sẽ làm mới (reload) lại trang hoặc gửi dữ liệu qua phương thức GET/POST. Phương thức `e.preventDefault()` có nhiệm vụ chặn đứng hành vi tải lại trang mặc định này, cho phép JavaScript chạy toàn bộ các hàm kiểm tra trước; nếu tất cả đều đạt chuẩn thì mới tiến hành xử lý tiếp.
> 
> **Thứ hai: Biểu thức chính quy Regular Expression (Regex) kiểm tra Email.**
> Biểu thức chính quy là một mẫu mẫu hình chuỗi mạnh mẽ được dùng để so khớp văn bản. Trong tệp `bai17.js`, chúng em sử dụng biểu thức: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
> Hãy cùng bóc tách từng thành phần toán học của biểu thức này:
> - Dấu mũ `^`: Neo bắt đầu chuỗi ký tự.
> - Khối `[^\s@]+`: Ngoặc vuông kèm dấu mũ `^` bên trong mang ý nghĩa phủ định. Nghĩa là phần tên hòm thư (Local-part) phải chứa một hoặc nhiều ký tự bất kỳ, miễn là **không phải khoảng trắng `\s`** và **không phải ký tự `@`**.
> - Ký tự `@`: Bắt buộc phải có đúng một dấu a-còng nằm ở giữa.
> - Khối `[^\s@]+`: Tương tự, tên miền máy chủ hòm thư không được chứa dấu cách và không chứa a-còng.
> - Cụm `\.`: Dấu chấm thoát ký tự (Escaped Dot). Vì trong Regex dấu chấm mang ý nghĩa đại diện cho bất kỳ ký tự nào, nên ta phải thêm dấu gạch chéo ngược `\` để trình duyệt hiểu đây là một dấu chấm thập phân thực sự.
> - Khối `[^\s@]+`: Phần mở rộng tên miền (ví dụ: `com`, `vn`, `edu`).
> - Dấu đô-la `$`: Neo kết thúc chuỗi.
> Phương thức `regex.test(val)` sẽ trả về giá trị logic `true` nếu chuỗi khớp hoàn toàn với mẫu và `false` nếu sai lệch.
> 
> **Thứ ba: Sự kiện input và Cơ chế Real-time Validation.**
> Nhiều bạn sinh viên thường dùng sự kiện `change`. Nhưng sự kiện `change` chỉ kích hoạt khi người dùng rời chuột ra khỏi ô nhập (Mất tiêu điểm - Blur). Trong khi đó, sự kiện `input` kích hoạt **ngay lập tức trong thời gian thực tại từng ký tự** mà người dùng vừa gõ vào, xóa đi hoặc dán văn bản từ clipboard. Điều này đem lại trải nghiệm người dùng cực kỳ mượt mà.
> 
> **Thứ tư: Tư duy thiết kế hàm tái sử dụng (DRY - Don't Repeat Yourself).**
> Cả 4 ô nhập đều có cơ chế hiển thị lỗi giống nhau: đổi class ô input thành `hop-le` hoặc `co-loi`, đổi nội dung và màu chữ của thẻ thông báo bên dưới. Thay vì viết lặp đi lặp lại 4 lần đoạn code đổi màu, chúng em đã trừu tượng hóa nó thành một hàm dùng chung duy nhất có tên là `kiemTra()`."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai17.html`) (Thời lượng: ~4 phút | 06:00 - 10:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai17.html` trên VS Code.
- Bôi đen từ dòng 1 đến dòng 52 theo từng khối khi thuyết minh.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô cùng phân tích chi tiết tệp cấu trúc `bai17.html`:
> 
> - **Phần khai báo mở đầu (Dòng 1 đến dòng 8):**
>   - Đầy đủ các thẻ tiêu chuẩn: `<!DOCTYPE html>`, `<html lang="vi">`, `<meta charset="UTF-8">`, và thẻ điều chỉnh tỷ lệ di động `viewport`.
>   - Dòng 6: Thẻ `<title>` ghi rõ: *'Bài 17 - Kiểm tra biểu mẫu bằng JavaScript'*.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai17.css">` liên kết bảng định kiểu.
> 
> - **Khung chính bao bọc (Dòng 11 đến dòng 47):**
>   - Toàn bộ form được bao bọc trong `<div class="khung-chinh">`.
>   - Thẻ `<form id="form-dang-ky" class="form-dang-ky" novalidate>`: Chú ý thuộc tính `novalidate` ở dòng 12 đã được khai báo tường minh.
>   - Dòng 13 - 14: Tiêu đề form `<h2>` *'Đăng ký tài khoản'* và đoạn mô tả phụ `<p>` *'Dữ liệu được kiểm tra bằng JavaScript trước khi gửi.'*.
> 
> - **Bốn nhóm ô nhập liệu chuẩn mực (Dòng 16 đến dòng 43):**
>   Mỗi nhóm được đóng gói trong một thẻ `<div class="nhom-o-nhap">` mang một `id` riêng để dễ định vị:
> 
>   1. **Nhóm 1: Họ và tên (`id="nhom-ho-ten"`) (Dòng 17 đến 21):**
>      - Cặp thẻ `<label for="ho-ten">Họ và tên</label>` đi liền với ô `<input type="text" id="ho-ten">`.
>      - Trong mã nguồn khởi tạo ban đầu, em gán giá trị mẫu `value="Nguyễn Văn An"` và class `hop-le`.
>      - Thẻ `<span class="thong-bao text-xanh">✓ Hợp lệ</span>` sẵn sàng hiển thị trạng thái thành công.
> 
>   2. **Nhóm 2: Email (`id="nhom-email"`) (Dòng 24 đến 28):**
>      - Thẻ `<input type="text" id="email">` có giá trị mẫu là `value="an.nv@"` và class `co-loi`.
>      - Thẻ thông báo: `<span class="thong-bao text-do">✗ Email không hợp lệ (thiếu tên miền)</span>`.
> 
>   3. **Nhóm 3: Mật khẩu (`id="nhom-mat-khau"`) (Dòng 31 đến 35):**
>      - Thẻ `<input type="password" id="mat-khau">` giúp ẩn ký tự dưới dạng dấu chấm tròn bảo mật.
>      - Giá trị mẫu `value="123"` chỉ có 3 ký tự, đi kèm class `co-loi` và thông báo lỗi: *'✗ Mật khẩu phải có ít nhất 6 ký tự'*.
> 
>   4. **Nhóm 4: Xác nhận mật khẩu (`id="nhom-xac-nhan"`) (Dòng 38 đến 42):**
>      - Thẻ `<input type="password" id="xac-nhan">` với giá trị `value="123456"`, class `hop-le` và thông báo *'✓ Hợp lệ'*.
> 
> - **Nút gửi biểu mẫu (Dòng 45):**
>   - `<button type="submit" class="btn-dang-ky" id="btn-dang-ky">Đăng ký</button>`. Thẻ button có `type="submit"` để khi nhấn phím Enter hoặc nhấp chuột, sự kiện `submit` của biểu mẫu sẽ được phát đi.
> 
> - **Dòng 49:** Nhúng tệp `bai17.js` ở cuối tài liệu trước thẻ đóng `</body>`, đảm bảo các phần tử HTML đã sẵn sàng trong bộ nhớ."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai17.css`) (Thời lượng: ~3 phút 30 giây | 10:00 - 13:30)

🎬 **Thao tác:** 
- Chuyển sang tab `bai17.css`.
- Rê chuột qua các khối CSS, làm nổi bật tông màu cam `#c2410c`, các quy tắc đổi màu viền input `.co-loi` và `.hop-le`.

🗣️ **Lời đọc:**
> "Tiếp theo, em xin phân tích bảng định dạng kiểu dáng `bai17.css` với 116 dòng code:
> 
> - **Định dạng nền trang và căn giữa (Dòng 5 đến dòng 19):**
>   - Reset toàn cục `*` với `box-sizing: border-box; margin: 0; padding: 0;`.
>   - Màu nền `background-color: #fef5eb;`: Đây là tông màu vàng cam phấn vô cùng ấm áp, dịu nhẹ và hiện đại.
>   - Hệ phông chữ không chân hiện đại `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`.
>   - Bố cục Flexbox toàn màn hình `min-height: 100vh; display: flex; justify-content: center; align-items: center;` giúp căn chỉnh toàn bộ khối form vào chính giữa màn hình.
> 
> - **Thẻ Form chính `.form-dang-ky` (Dòng 21 đến dòng 33):**
>   - Độ rộng cực đại `max-width: 480px; width: 100%;` chuẩn hóa cho một form đăng ký người dùng tiêu chuẩn.
>   - Nền trắng tinh khiết `#ffffff`, đường viền màu cam pastel thanh lịch `border: 1.5px solid #fed7aa;`, bo góc tròn 14px.
>   - Hiệu ứng đổ bóng đặc sắc: `box-shadow: 0 8px 25px rgba(234, 88, 12, 0.06);` với ánh cam mờ ảo tạo sự đồng điệu tuyệt đối với màu viền.
> 
> - **Tiêu đề và nhãn ô nhập (Dòng 36 đến dòng 60):**
>   - Tiêu đề `.tieu-de-form` mang màu cam đất đậm đà `#c2410c`, kích thước 21px in đậm.
>   - Thẻ `<label>` được đặt `display: block;` và `margin-bottom: 6px;` để nhãn luôn nằm gọn gàng bên trên ô nhập liệu, phông chữ 14px in đậm `font-weight: 600`.
> 
> - **Quy tắc định kiểu ô nhập và trạng thái Validation (Dòng 62 đến dòng 80):**
>   - Trạng thái mặc định: viền xám `#d1d5db`, bo góc 8px, `outline: none`, có hiệu ứng chuyển cảnh mềm mại `transition: border-color 0.2s, background-color 0.2s;`.
>   - **Trạng thái có lỗi:** `.nhom-o-nhap input.co-loi`: Đường viền chuyển sang màu đỏ báo động `border-color: #dc2626 !important;`.
>   - **Trạng thái hợp lệ:** `.nhom-o-nhap input.hop-le`: Đường viền chuyển sang màu xanh lục an toàn `border-color: #16a34a !important;`.
>   - Từ khóa `!important` được sử dụng có chủ đích nhằm đảm bảo màu viền trạng thái luôn được ưu tiên áp dụng tuyệt đối mà không bị các quy tắc hover hay focus ghi đè.
> 
> - **Dòng thông báo phản hồi `.thong-bao` (Dòng 83 đến dòng 96):**
>   - Cỡ chữ 12.5px, in đậm vừa phải `font-weight: 500`.
>   - Lớp `.text-xanh` có màu xanh lá `#16a34a` cho thông điệp '✓ Hợp lệ'.
>   - Lớp `.text-do` mang màu đỏ rực `#dc2626` cho các thông điệp cảnh báo lỗi.
> 
> - **Nút bấm đăng ký `.btn-dang-ky` (Dòng 99 đến dòng 115):**
>   - Chiều rộng `width: 100%` trải dài cân đối hết chiều ngang form.
>   - Màu nền cam đậm `#c2410c`, chữ trắng, bo góc 8px. Khi rê chuột (`:hover`), màu nền sẫm lại thành `#9a3412` đem lại phản hồi thị giác cực kỳ tự nhiên."

---

## ⏱️ PHẦN 5: THUYẾT MINH CHUYÊN SÂU JAVASCRIPT (`bai17.js`) (Thời lượng: ~4 phút 30 giây | 13:30 - 18:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai17.js`.
- Bôi đen từng hàm: hàm dùng chung `kiemTra()`, các hàm validate riêng lẻ, và khối lắng nghe sự kiện `input` và `submit`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta sẽ đi sâu vào logic lập trình trong tệp `bai17.js` gồm 76 dòng mã chuẩn mực:
> 
> - **Bước 1: Khởi tạo biến DOM (Dòng 5 đến dòng 9):**
>   - Sử dụng `document.getElementById` để truy xuất form cùng 4 trường nhập liệu: `form`, `hoTen`, `email`, `matKhau`, `xacNhan`.
> 
> - **Bước 2: Thiết kế hàm đa năng `kiemTra()` (Dòng 11 đến dòng 23):**
>   - Đây là giải pháp kiến trúc mã nguồn sạch (Clean Code) của chúng em:
>   - Hàm nhận vào 5 tham số:
>     - `input`: Đối tượng ô nhập liệu cần đổi class.
>     - `thongBaoElement`: Thẻ span bên dưới dùng hiển thị thông báo.
>     - `hopLe`: Biểu thức logic kiểu boolean (`true` hoặc `false`).
>     - `thongDiepLoi`: Chuỗi thông báo nếu `hopLe` là false.
>     - `thongDiepHopLe`: Chuỗi thông báo mặc định là `'✓ Hợp lệ'`.
>   - Logic xử lý:
>     - Nếu `hopLe === true`: Gán `input.className = 'hop-le'`, thẻ span nhận `className = 'thong-bao text-xanh'` và hiển thị dấu tích xanh, sau đó trả về `true`.
>     - Nếu `hopLe === false`: Gán `input.className = 'co-loi'`, thẻ span nhận `className = 'thong-bao text-do'` và hiển thị nội dung lỗi tương ứng, sau đó trả về `false`.
>   - Hàm này giúp chúng ta loại bỏ hoàn toàn mã trùng lặp trong toàn bộ chương trình!
> 
> - **Bước 3: Bốn hàm kiểm tra nghiệp vụ chuyên biệt (Dòng 25 đến dòng 55):**
> 
>   1. **Hàm `validateHoTen()` (Dòng 25 đến 29):**
>      - Cắt tỉa khoảng trắng bằng `.trim()`.
>      - Kiểm tra độ dài: `val.length > 0`. Nếu người dùng xóa trắng ô thì báo lỗi: *'✗ Họ tên không được để trống'*.
> 
>   2. **Hàm `validateEmail()` (Dòng 31 đến 42):**
>      - Khởi tạo hằng số Regex: `const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;`.
>      - Xử lý phân nhánh logic:
>        + Nếu chuỗi rỗng: Báo lỗi *'✗ Email không được để trống'*.
>        + Nếu chuỗi không chứa ký tự `@` hoặc không vượt qua bài kiểm tra `!regex.test(val)`: Báo lỗi rõ ràng *'✗ Email không hợp lệ (thiếu tên miền)'*.
>        + Nếu vượt qua cả hai điều kiện trên: Gọi `kiemTra(email, span, true, '')` để gắn viền xanh hợp lệ.
> 
>   3. **Hàm `validateMatKhau()` (Dòng 44 đến 48):**
>      - Lấy chuỗi mật khẩu thô `matKhau.value` (mật khẩu không dùng trim vì khoảng trắng có thể là một ký tự mật khẩu có chủ ý).
>      - Kiểm tra điều kiện: `val.length >= 6`. Nếu ngắn hơn 6 ký tự, hiển thị thông báo: *'✗ Mật khẩu phải có ít nhất 6 ký tự'*.
> 
>   4. **Hàm `validateXacNhan()` (Dòng 50 đến 55):**
>      - Lấy giá trị ô xác nhận.
>      - Biểu thức logic so khớp kép: `const hopLe = val.length > 0 && val === matKhau.value;`.
>      - Phải có ít nhất 1 ký tự và phải trùng khớp hoàn toàn với chuỗi trong ô `matKhau.value`. Nếu không khớp, lập tức báo lỗi: *'✗ Mật khẩu xác nhận không khớp'*.
> 
> - **Bước 4: Đăng ký sự kiện thời gian thực (Dòng 57 đến dòng 63):**
>   - Chúng em gắn trình lắng nghe sự kiện `input` cho cả 4 trường:
>     - Khi người dùng gõ họ tên -> hàm `validateHoTen` chạy ngay.
>     - Khi gõ email -> hàm `validateEmail` chạy ngay.
>     - **Đặc biệt tại ô Mật khẩu (Dòng 59 - 62):** Khi người dùng sửa đổi mật khẩu chính, hàm `validateMatKhau()` chạy, đồng thời kiểm tra thêm: `if (xacNhan.value) validateXacNhan();`. Đây là một kỹ thuật UX cực kỳ tinh tế: Nếu người dùng đã gõ ô xác nhận từ trước mà sau đó lại quay lên đổi mật khẩu bên trên, ô xác nhận bên dưới sẽ tự động được kiểm tra lại ngay để tránh hiện tượng mật khẩu bị lệch mà không biết!
> 
> - **Bước 5: Xử lý sự kiện Submit gửi form (Dòng 65 đến dòng 75):**
>   - Lắng nghe `form.addEventListener('submit', ...)`.
>   - Dòng 66: Gọi ngay `e.preventDefault();` để ngăn chặn tải lại trang.
>   - Kích hoạt đồng thời cả 4 hàm kiểm tra: `const ok1 = validateHoTen(); const ok2 = validateEmail(); const ok3 = validateMatKhau(); const ok4 = validateXacNhan();`.
>   - Dòng 72: Sử dụng toán tử logic VÀ `if (ok1 && ok2 && ok3 && ok4)`: Chỉ khi và chỉ khi cả 4 hàm đều trả về `true`, hộp thoại thông báo thành công mới xuất hiện: `alert('Đăng ký tài khoản thành công!');`."

---

## ⏱️ PHẦN 6: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~3 phút 30 giây | 18:00 - 21:30)

🎬 **Thao tác:** 
- Mở rộng cửa sổ trình duyệt Chrome.
- Làm tuần tự từng kịch bản kiểm thử dưới đây, vừa thao tác vừa thuyết minh.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn theo dõi phần thực nghiệm chạy thử ứng dụng trực tiếp trên trình duyệt Chrome.
> 
> 1. **Quan sát trạng thái khởi tạo mẫu:**
>    - Khi vừa mở trang, dữ liệu mẫu ban đầu đang mô phỏng tình huống thực tế:
>      + Ô Họ tên: 'Nguyễn Văn An' -> Viền xanh lá, tích '✓ Hợp lệ'.
>      + Ô Email: 'an.nv@' -> Viền đỏ, cảnh báo '✗ Email không hợp lệ (thiếu tên miền)'.
>      + Ô Mật khẩu: '123' -> Viền đỏ, cảnh báo '✗ Mật khẩu phải có ít nhất 6 ký tự'.
>      + Ô Xác nhận: '123456' -> Viền xanh '✓ Hợp lệ'.
> 
> 2. **Thử bấm nút Đăng ký khi còn lỗi:**
>    - Em bấm chuột vào nút **'Đăng ký'**.
>    - *[Thao tác: Bấm nút Đăng ký]*
>    - Thầy cô có thể thấy trang web hoàn toàn không bị tải lại hay nhấp nháy, không có popup alert nào xuất hiện vì hai ô Email và Mật khẩu vẫn đang viền đỏ báo lỗi. Điều này chứng minh `e.preventDefault()` và điều kiện `if (ok1 && ok2 && ok3 && ok4)` hoạt động hoàn hảo.
> 
> 3. **Kiểm tra phản hồi thời gian thực trên ô Email:**
>    - Bây giờ em nhấp chuột vào ô Email, gõ tiếp tên miền `gmail.com`.
>    - *[Thao tác: Gõ thêm 'gmail.com' vào sau 'an.nv@']*
>    - Thầy cô hãy quan sát: Ngay khi em vừa gõ xong chữ 'm' của `.com`, chuỗi trở thành `an.nv@gmail.com`, viền đỏ lập tức biến mất và thay thế bằng viền xanh lục cùng dòng chữ *'✓ Hợp lệ'*!
>    - Thử nghiệm tiếp: Em xóa chữ `.com` đi, viền lập tức chuyển sang màu đỏ ngay tức khắc.
> 
> 4. **Kiểm tra phản hồi trên ô Mật khẩu và Xác nhận mật khẩu:**
>    - Ở ô Mật khẩu đang có '123', em gõ tiếp '456' để trở thành chuỗi '123456'.
>    - *[Thao tác: Gõ thêm '456']*
>    - Viền đỏ lập tức chuyển sang màu xanh lá cây!
>    - Lúc này, cả hai ô Mật khẩu và Xác nhận mật khẩu đều là '123456' nên cả hai đều xanh.
>    - Bây giờ em gõ thêm số '7' vào ô Mật khẩu bên trên.
>    - *[Thao tác: Gõ số 7 thành '1234567']*
>    - Nhờ khối mã kiểm tra liên đới mà em đã giải thích ở dòng 61, ngay khi ô trên thành '1234567', ô Xác nhận mật khẩu bên dưới lập tức đổi sang viền đỏ và báo lỗi: *'✗ Mật khẩu xác nhận không khớp'*. Trải nghiệm người dùng vô cùng nhạy bén và thông minh!
>    - Em xuống ô dưới gõ thêm số 7 cho khớp: Cả hai ô lại cùng xanh mượt mà!
> 
> 5. **Bấm gửi form thành công:**
>    - Hiện tại cả 4 trường dữ liệu đều đã hợp lệ và hiển thị viền xanh.
>    - Em bấm nút **'Đăng ký'**.
>    - *[Thao tác: Bấm nút Đăng ký]*
>    - Một hộp thoại pop-up hiện lên trang trọng: *'Đăng ký tài khoản thành công!'*.
> 
> 6. **Bật F12 Developer Tools soi chuyên sâu:**
>    - *[Thao tác: Nhấn phím F12]*
>    - Tab **Console**: Hoàn toàn sạch bóng lỗi.
>    - Tab **Elements**: Em chọn vào ô `<input id="email">` và xóa thử ký tự trên màn hình. Thầy cô có thể thấy trong tab Elements, thuộc tính `class="co-loi"` và `class="hop-le"` được hoán đổi nhịp nhàng, các class text màu của thẻ span cũng biến chuyển tương ứng.
>    - Nhấn `Ctrl + Shift + M` mở chế độ **Device Toolbar**: Em thử nghiệm trên màn hình iPhone 12 Pro (390px) và Samsung Galaxy S20. Toàn bộ khối form ôm sát lề màn hình nhờ thuộc tính `max-width: 480px; width: 100%`, các nhãn label và ô nhập hiển thị rõ ràng, không bị xô lệch."

---

## ⏱️ PHẦN 7: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | 21:30 - 23:00)

🎬 **Thao tác:** 
- Chuyển màn hình về giao diện form hoàn chỉnh hoặc VS Code.
- Đọc với ngữ điệu đúc kết, chân thành.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, bài tập thực hành số 17 đã đem lại cho bản thân em những bài học kinh nghiệm lập trình quý giá:
> - Nắm vững nguyên lý hoạt động của Form Validation phía Client: Hiểu rõ vai trò của thuộc tính `novalidate` và phương thức chặn sự kiện `e.preventDefault()`.
> - Làm chủ Biểu thức chính quy (Regex) và phương thức `regex.test()` trong việc kiểm tra các khuôn mẫu chuỗi phức tạp như Email, số điện thoại hay mật khẩu mạnh.
> - Xây dựng tư duy thiết kế trải nghiệm người dùng hiện đại với sự kiện `input` thời gian thực, kết hợp kỹ thuật ràng buộc logic chéo giữa hai trường mật khẩu.
> - Rèn luyện kỹ năng viết mã nguồn sạch (Clean Code), biết cách trừu tượng hóa các thao tác giao diện lặp lại thành một hàm `kiemTra()` tái sử dụng linh hoạt.
> 
> Bài thuyết minh về Bài thực hành số 17 của em đến đây xin phép được kết thúc.
> Em xin chân thành cảm ơn quý thầy cô giáo đã theo dõi và đánh giá bài báo cáo của em. Cảm ơn các bạn sinh viên đã lắng nghe.
> 
> Kính chúc quý thầy cô luôn dồi dào sức khỏe và công tác tốt! Chúc toàn thể các bạn học tập hiệu quả và luôn tự tin trên con đường chinh phục lập trình web! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 17 — Sẵn sàng thu âm và ghi hình OBS Studio.*
