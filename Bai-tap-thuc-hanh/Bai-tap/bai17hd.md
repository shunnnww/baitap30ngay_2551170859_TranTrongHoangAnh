# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 17
**Chủ đề:** Kiểm tra biểu mẫu đăng ký bằng JavaScript (Client-Side Form Validation)  
**Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh  
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Mã nguồn liên quan:** `bai17.html`, `bai17.css`, `bai17.js`

---

## GHI CHÚ CHUẨN BỊ TRƯỚC KHI BẤM QUAY OBS
- **Thiết lập màn hình:** Mở sẵn VS Code hiển thị 3 file (`bai17.html`, `bai17.css`, `bai17.js`) và một cửa sổ trình duyệt mở `bai17.html`.
- **Tác phong:** Giọng nói đĩnh đạc, rành mạch, chuẩn thuật ngữ chuyên ngành (Client-side validation, Regular Expression, Event Listener, DOM Manipulation).

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU TỔNG QUAN (Khoảng 30 - 45 giây)

*(Bật OBS quay giao diện trang form đăng ký trên trình duyệt)*

> **[LỜI THOẠI]:**  
> "Em xin kính chào Thầy/Cô cùng toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên năm 2 khoa Công nghệ Thông tin, tham gia học phần *Phát triển ứng dụng Web cơ bản*.  
>  
> Trong video ngày hôm nay, em xin được trình bày và thuyết minh giải pháp cho **Bài tập số 17: Kiểm tra biểu mẫu đăng ký tài khoản bằng JavaScript (Form Validation)**.  
>  
> Trong phát triển ứng dụng Web thực tế, việc xác thực dữ liệu ngay tại phía người dùng (Client-Side Validation) trước khi gửi lên máy chủ là cực kỳ quan trọng. Nó giúp tiết kiệm băng thông mạng, giảm tải cho server và mang lại phản hồi tức thì cho người dùng.  
>  
> Ở bài tập này, em đã xây dựng một form đăng ký có khả năng kiểm tra dữ liệu theo thời gian thực (Real-time Validation) đối với 4 trường: Họ tên, Email (sử dụng biểu thức chính quy Regex), Mật khẩu (độ dài tối thiểu) và Xác nhận mật khẩu khớp nhau, đi kèm hệ thống hiển thị trạng thái viền xanh/đỏ rất trực quan.  
>  
> Sau đây, em xin mời Thầy/Cô và các bạn cùng đi vào chi tiết mã nguồn!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai17.html`) (Khoảng 1.5 - 2 phút)

*(Chuyển sang cửa sổ VS Code, mở file `bai17.html`)*

> **[LỜI THOẠI]:**  
> "Đầu tiên là cấu trúc của file `bai17.html`. Toàn bộ nội dung được em đặt trong thẻ bao bọc `<div class="khung-chinh">`:  
>  
> - **Thẻ biểu mẫu `<form id="form-dang-ky" class="form-dang-ky" novalidate>` (dòng 12):**  
>   Một điểm cực kỳ quan trọng ở đây là em đã thêm thuộc tính `novalidate` vào thẻ `form`. Thuộc tính này sẽ vô hiệu hoá cơ chế kiểm tra mặc định đơn giản của trình duyệt, để toàn bộ quyền kiểm soát việc validate dữ liệu được nhường lại cho mã JavaScript chuyên sâu của chúng ta.  
>  
> - **Tiêu đề và phần mở đầu (dòng 13 - 14):**  
>   Gồm tiêu đề `<h2>` mang tên *'Đăng ký tài khoản'* và mô tả phụ thông báo rõ dữ liệu được kiểm tra bằng JavaScript trước khi gửi.  
>  
> - **4 nhóm trường nhập liệu `.nhom-o-nhap` (dòng 17 - 42):**  
>   Mỗi trường nhập liệu là một khối độc lập gồm 3 thẻ thành phần:  
>   1. Thẻ `<label>` chỉ dẫn rõ ràng với thuộc tính `for` liên kết chặt chẽ tới `id` của ô input tương ứng.  
>   2. Thẻ `<input>` nhận dữ liệu từ người dùng.  
>   3. Thẻ `<span class="thong-bao">` nằm ngay bên dưới để in ra lời nhắn lỗi hoặc dấu tích hợp lệ.  
>  
>   Trong mã nguồn HTML ban đầu, em đã chuẩn bị sẵn các dữ liệu và class mô phỏng mẫu:  
>   + **Trường 1 — Họ và tên (`#ho-ten`):** Giá trị *'Nguyễn Văn An'*, mang class `hop-le` và thông báo *'✓ Hợp lệ'*.  
>   + **Trường 2 — Email (`#email`):** Giá trị *'an.nv@'*, mang class `co-loi` và thông báo *'✗ Email không hợp lệ (thiếu tên miền)'*.  
>   + **Trường 3 — Mật khẩu (`#mat-khau`):** Type `password`, giá trị *'123'*, mang class `co-loi` cảnh báo mật khẩu dưới 6 ký tự.  
>   + **Trường 4 — Xác nhận mật khẩu (`#xac-nhan`):** Type `password`, giá trị *'123456'*, mang class `hop-le`.  
>  
> - **Nút gửi biểu mẫu (dòng 45):**  
>   Là thẻ `<button type="submit" class="btn-dang-ky" id="btn-dang-ky">Đăng ký</button>`, đóng vai trò kích hoạt sự kiện gửi form.  
>  
> - Cuối cùng, ở dòng 49, em kết nối file `bai17.js` để thực thi logic kiểm tra."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai17.css`) (Khoảng 2 phút)

*(Chuyển sang file `bai17.css` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Bây giờ em xin chuyển sang file định dạng `bai17.css`. Bảng màu và phong cách thiết kế của bài tập này được xây dựng theo gam màu ấm áp, lấy tông cam nâu làm điểm nhấn:  
>  
> - **Thiết lập nền và căn giữa trang (dòng 5 - 20):**  
>   Body có nền màu kem cam dịu mắt `#fef5eb`, font chữ hệ thống không chân hiện đại, chiều cao bao phủ toàn màn hình `min-height: 100vh`, và dùng Flexbox để căn giữa khối form vào chính giữa màn hình.  
>  
> - **Khung form `.form-dang-ky` (dòng 26 - 34):**  
>   Được giới hạn chiều rộng tối đa `480px`, nền trắng tinh `#ffffff`, đường viền màu cam sữa tinh tế `1.5px solid #fed7aa`, góc bo cong tròn trịa `14px`, và bóng đổ mờ cam nhẹ `box-shadow: 0 8px 25px rgba(234, 88, 12, 0.06)`.  
>  
> - **Tiêu đề `.tieu-de-form` (dòng 36 - 41):**  
>   Sử dụng màu cam cháy đậm mã màu `#c2410c`, cỡ chữ 21px, in đậm font weight 700 nổi bật.  
>  
> - **Trạng thái viền của ô nhập liệu (dòng 62 - 81):**  
>   Ô input thông thường có viền xám `#d1d5db`, bo góc 8px. Và đây là điểm mấu chốt:  
>   + Khi có lỗi (class `.co-loi`), em đổi viền thành màu đỏ cảnh báo `#dc2626 !important`.  
>   + Khi dữ liệu chuẩn xác (class `.hop-le`), em đổi viền sang màu xanh lá cây thành công `#16a34a !important`.  
>   Việc sử dụng cờ `!important` giúp đảm bảo độ ưu tiên cao nhất khi JavaScript gán hoặc gỡ bỏ class trên ô nhập.  
>  
> - **Thông báo trạng thái (dòng 83 - 97):**  
>   Thẻ span `.thong-bao` hiển thị kiểu `block` ngay dưới ô input. Khi lỗi thì mang class `.text-do` màu `#dc2626`, khi hợp lệ thì mang class `.text-xanh` màu `#16a34a`.  
>  
> - **Nút bấm `.btn-dang-ky` (dòng 99 - 116):**  
>   Chiều rộng phủ kín 100%, nền cam rực rỡ `#c2410c`, chữ trắng in đậm, bo góc 8px, và khi rê chuột `:hover` sẽ chuyển sang màu cam đất trầm hơn `#9a3412` với hiệu ứng chuyển đổi mượt 0.2s."

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (`bai17.js`) (Khoảng 2.5 phút)

*(Chuyển sang file `bai17.js` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Tiếp theo, em xin giải thích chi tiết tư duy lập trình và thuật toán trong file `bai17.js`:  
>  
> - **1. Truy vấn các phần tử DOM (dòng 5 - 9):**  
>   Em dùng `getElementById` để nắm giữ đối tượng `form` cùng 4 ô nhập: `hoTen`, `email`, `matKhau` và `xacNhan`.  
>  
> - **2. Hàm bổ trợ dùng chung `kiemTra()` (dòng 11 - 23):**  
>   Để tránh việc lặp đi lặp lại mã nguồn gán class, em đã viết một hàm dùng chung nhận vào 5 tham số: ô input, thẻ thông báo, giá trị boolean `hopLe`, thông điệp lỗi và thông điệp thành công.  
>   + Nếu `hopLe` là `true`: gán class `.hop-le` cho ô input, gán class `.thong-bao.text-xanh` và text *'✓ Hợp lệ'* cho span, rồi trả về `true`.  
>   + Ngược lại: gán class `.co-loi` cho input, gán class `.thong-bao.text-do` kèm chuỗi lỗi cụ thể cho span, rồi trả về `false`.  
>  
> - **3. Hàm kiểm tra Họ và tên `validateHoTen()` (dòng 25 - 29):**  
>   Cắt bỏ khoảng trắng thừa bằng `.trim()`. Điều kiện hợp lệ là chuỗi phải có độ dài lớn hơn 0 (`val.length > 0`), nếu rỗng sẽ báo: *'✗ Họ tên không được để trống'*.  
>  
> - **4. Hàm kiểm tra Email `validateEmail()` (dòng 31 - 42):**  
>   Đây là phần rất hay: em sử dụng biểu thức chính quy **Regular Expression** chuẩn:  
>   `const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;`  
>   Biểu thức này đòi hỏi: phải có phần tên trước `@`, ký tự `@`, phần tên miền máy chủ, dấu chấm `.` và đuôi tên miền (như .com, .vn), đồng thời không được chứa khoảng trắng.  
>   + Nếu chuỗi rỗng: thông báo *'✗ Email không được để trống'*.  
>   + Nếu thiếu ký tự `@` hoặc không khớp biểu thức regex: báo lỗi *'✗ Email không hợp lệ (thiếu tên miền)'*.  
>   + Nếu chuẩn: trả về hợp lệ.  
>  
> - **5. Hàm kiểm tra Mật khẩu `validateMatKhau()` (dòng 44 - 48):**  
>   Kiểm tra độ dài chuỗi ký tự mật khẩu phải đạt ít nhất 6 ký tự (`val.length >= 6`). Nếu dưới 6 ký tự sẽ báo lỗi: *'✗ Mật khẩu phải có ít nhất 6 ký tự'*.  
>  
> - **6. Hàm kiểm tra Xác nhận mật khẩu `validateXacNhan()` (dòng 50 - 55):**  
>   Kiểm tra hai điều kiện đồng thời: ô xác nhận không được để trống và giá trị của nó phải hoàn toàn trùng khớp với giá trị của ô mật khẩu (`val === matKhau.value`). Nếu sai báo: *'✗ Mật khẩu xác nhận không khớp'*.  
>  
> - **7. Lắng nghe sự kiện thời gian thực (Real-time Event Listeners) (dòng 57 - 63):**  
>   Em dùng sự kiện `input` trên cả 4 ô. Bất cứ khi nào người dùng gõ thêm hoặc xoá bớt một ký tự, hàm validate tương ứng sẽ chạy ngay lập tức.  
>   Đặc biệt, ở ô `matKhau`, khi người dùng thay đổi mật khẩu gốc, hàm sẽ đồng thời kiểm tra lại luôn ô `xacNhan` nếu ô xác nhận đã có dữ liệu, tránh trường hợp sửa mật khẩu gốc nhưng ô xác nhận vẫn báo xanh!  
>  
> - **8. Sự kiện Submit biểu mẫu (dòng 65 - 75):**  
>   Khi người dùng nhấn nút 'Đăng ký', em gọi `e.preventDefault()` để chặn hành vi reload trang web mặc định. Sau đó chạy đồng loạt cả 4 hàm validate. Nếu tất cả đều trả về `true` (`ok1 && ok2 && ok3 && ok4`), một hộp thoại `alert` chúc mừng: *'Đăng ký tài khoản thành công!'* sẽ xuất hiện!"

---

## PHẦN 5: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT (Khoảng 2 phút)

*(Chuyển toàn màn hình OBS sang trình duyệt hiển thị `bai17.html`)*

> **[LỜI THOẠI & HÀNH ĐỘNG]:**  
> "Sau đây, em xin thực hiện thao tác kiểm thử trực tiếp trên trình duyệt:  
>  
> **1. Quan sát trạng thái ban đầu:**  
> - Các bạn có thể thấy, trang web đang hiển thị 4 ô với trạng thái mẫu: Họ tên hợp lệ (viền xanh), Email thiếu tên miền (viền đỏ), Mật khẩu mới 3 ký tự (viền đỏ), Xác nhận mật khẩu (viền xanh).  
>  
> **2. Kiểm tra ô 'Họ và tên':**  
> *(Xóa trắng toàn bộ ô Họ và tên)*  
> - Khi em xoá sạch ô Họ tên -> Ngay lập tức viền chuyển sang đỏ rực, xuất hiện thông báo: *'✗ Họ tên không được để trống'*.  
> *(Gõ chữ: 'Trần Trọng Hoàng Anh')*  
> - Em gõ lại họ tên của em -> Viền lập tức chuyển sang xanh lá cây với dấu tích *'✓ Hợp lệ'*.  
>  
> **3. Kiểm tra ô 'Email':**  
> *(Bấm vào ô email đang có 'an.nv@')*  
> - Hiện tại email đang thiếu tên miền nên viền đỏ.  
> *(Xóa hết chữ)*  
> - Khi xoá hết chữ -> Báo lỗi: *'✗ Email không được để trống'*.  
> *(Gõ vào: 'hoanganh@gmail')*  
> - Vẫn báo lỗi viền đỏ do chưa có đuôi tên miền dấu chấm.  
> *(Gõ thêm: '.com' thành 'hoanganh@gmail.com')*  
> - Ngay khoảnh khắc gõ xong chữ 'm', biểu thức Regex khớp thành công -> Viền chuyển xanh lá cây ngay tức thì!  
>  
> **4. Kiểm tra ô 'Mật khẩu' và 'Xác nhận mật khẩu':**  
> *(Bấm vào ô Mật khẩu đang có '123')*  
> - Mật khẩu đang có 3 ký tự -> Viền đỏ báo: *'✗ Mật khẩu phải có ít nhất 6 ký tự'*.  
> *(Gõ tiếp: '45' (5 ký tự))* -> Vẫn đỏ.  
> *(Gõ tiếp: '6' thành '123456')* -> Đủ 6 ký tự, viền chuyển xanh ngay lập tức!  
> *(Xuống ô Xác nhận mật khẩu, gõ thêm số '7' thành '1234567')*  
> - Ngay lập tức ô xác nhận chuyển sang viền đỏ: *'✗ Mật khẩu xác nhận không khớp'*.  
> *(Xoá số '7' đi để hai ô đều là '123456')*  
> - Hai mật khẩu đã trùng khớp hoàn toàn, cả hai ô đều hiện viền xanh lá tuyệt đối đẹp mắt.  
>  
> **5. Thao tác gửi biểu mẫu (Submit Form):**  
> *(Click chuột vào nút 'Đăng ký')*  
> - Em bấm nút 'Đăng ký' -> Trình duyệt bật ngay cửa sổ popup thông báo: *'Đăng ký tài khoản thành công!'*.  
> - Bấm 'OK', trang không hề bị load lại, toàn bộ trạng thái được giữ nguyên vẹn. Mọi kịch bản kiểm tra đã hoàn thành chính xác 100%!"

---

## PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 - 30 giây)

> **[LỜI THOẠI]:**  
> "Qua bài tập số 17, chúng ta đã thấy được sức mạnh và sự linh hoạt của JavaScript trong việc kiểm soát dữ liệu người dùng tại Client-side một cách chặt chẽ và chuyên nghiệp.  
>  
> Em xin chân thành cảm ơn Thầy/Cô và các bạn đã chú ý lắng nghe phần trình bày của em. Em xin phép kết thúc video tại đây và hẹn gặp lại ở Bài tập số 18!"
