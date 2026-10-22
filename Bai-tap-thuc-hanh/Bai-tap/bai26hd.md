# KỊCH BẢN THUYẾT MINH VIDEO OBS - BÀI 26
## Đề bài: Xây dựng Form đăng ký thành viên CLB Lập trình Web bằng Bootstrap 5
- **Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 4 – 5 phút
- **File mã nguồn:** `bai26.html`

---

## GỢI Ý CHUẨN BỊ TRƯỚC KHI BẤM QUAY TRÊN OBS
1. **Thiết lập màn hình OBS:**
   - Cửa sổ bên trái (hoặc nửa màn hình): Trình soạn thảo **VS Code** mở file `bai26.html`.
   - Cửa sổ bên phải: Trình duyệt Google Chrome mở trang `bai26.html` qua Live Server hoặc đường dẫn file trực tiếp.
   - Bật micro, kiểm tra mức âm lượng thoại vừa nghe, rõ ràng, không bị rè.
2. **Tác phong:** Nói với ngữ điệu tự tin, nhịp điệu vừa phải, phát âm chuẩn các thuật ngữ chuyên ngành (Bootstrap, Grid system, Responsive, Form Control, Select, Checkbox, Radio inline).

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (LỜI THOẠI TRỰC TIẾP)

---

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 giây)

> **[Gợi ý thao tác OBS]:** Camera bật góc màn hình, con trỏ chuột trỏ vào tiêu đề trang web trên trình duyệt đang hiển thị Form đăng ký.

*(Lời thoại sinh viên):*

"Kính chào thầy cô và tất cả các bạn! Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản. 

Trong video ngày hôm nay, em xin phép được trình bày và thuyết minh chi tiết về quá trình xây dựng **Bài tập số 26**: Thiết kế một **Form đăng ký tham gia Câu lạc bộ Lập trình Web** chuẩn Responsive bằng thư viện **Bootstrap 5**.

Mục tiêu của bài tập này là giúp chúng ta áp dụng thành thạo hệ thống lưới Grid System của Bootstrap, kết hợp các thành phần Form Controls chuyên nghiệp như Input, Radio button inline, Select dropdown, Checkbox điều khoản và các nút tương tác Reset / Submit, nhằm tạo ra một giao diện thu thập thông tin người dùng vừa đẹp mắt, vừa tối ưu trên cả máy tính lẫn thiết bị di động.

Sau đây, em xin mời thầy cô và các bạn cùng đi vào cấu trúc mã nguồn HTML và các class Bootstrap mà em đã sử dụng."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Chuyển trỏ chuột sang VS Code, cuộn từ dòng 1 đến dòng 45 để người xem theo dõi cấu trúc.

*(Lời thoại sinh viên):*

"Đầu tiên, nhìn vào phần `<head>` của file `bai26.html`:
- Em đã khai báo chuẩn tài liệu HTML5, thiết lập thẻ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` để hỗ trợ hiển thị đa thiết bị.
- Tại dòng số 8, em tích hợp thư viện **Bootstrap 5.3.3** thông qua đường link CDN trực tiếp, giúp tải toàn bộ các lớp CSS định kiểu sẵn có mà không cần tải file cục bộ.

Tiếp theo, đi vào thẻ `<body>`:
- Em bọc toàn bộ nội dung trong một `<div class="container">` để căn lề an toàn hai bên màn hình.
- Bên trong container là `<div class="row justify-content-center">` kết hợp với `<div class="col-md-9 col-lg-7">`. Cấu trúc này giúp khối nội dung được tự động căn giữa khung hình, chiếm 7 cột trên màn hình lớn và 9 cột trên màn hình trung bình, tạo cảm giác cân đối, không bị dàn trải quá rộng.
- Khung form chính được đóng gói trong một thẻ `<div class="card">`. Thẻ Card này chia làm 2 phân vùng ngữ nghĩa rõ ràng:
  1. **`card-header`**: Đóng vai trò là thanh tiêu đề nổi bật với dòng chữ: *'Đăng ký tham gia CLB Lập trình Web'*.
  2. **`card-body`**: Là không gian chứa toàn bộ thẻ `<form>`.

Trong thẻ `<form>`, em áp dụng hệ thống hàng lưới `<form class="row g-3">` để chia các trường nhập liệu thành từng cột khoa học:
- **Họ và tên** cùng với **Mã sinh viên**: Mỗi trường nằm trong một `<div class="col-md-6">`, có thẻ `<label>` tương ứng liên kết với `<input>` qua thuộc tính `for` và `id`.
- Tương tự, **Email** và **Số điện thoại** cũng được đặt trong hai khối `col-md-6` ở dòng tiếp theo, sử dụng đúng kiểu dữ liệu `type="email"` và `type="tel"`.
- Phần **Trình độ**: Chiếm trọn dòng với `col-12`, sử dụng thẻ radio button inline để người dùng lựa chọn một trong 3 cấp độ: Cơ bản, Khá, Tốt.
- Phần **Chọn lớp**: Sử dụng thẻ `<select>` với 4 tùy chọn lớp CNTT và KTPM.
- Phần **Cam kết**: Sử dụng thẻ input checkbox bắt buộc người dùng tích chọn.
- Cuối cùng là nhóm nút bấm bao gồm nút **Nhập lại** (type reset) và nút **Đăng ký** (type submit)."

---

### PHẦN 3: GIẢI THÍCH CÁC CLASS BOOTSTRAP 5 & CSS GIAO DIỆN (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Rê chuột làm nổi bật các class trên từng dòng code từ thẻ card đến các control.

*(Lời thoại sinh viên):*

"Bây giờ, em xin phân tích sâu hơn về các class Bootstrap 5 đã làm nên vẻ ngoài tinh tế của giao diện này:

1. **Khối Card bao bọc:**
   - `shadow-sm`: Tạo hiệu ứng đổ bóng mờ nhẹ, giúp khung form nổi bật trên nền xám nhạt `bg-light`.
   - `border-0`: Loại bỏ đường viền xám mặc định của Bootstrap, giúp giao diện trông hiện đại và thanh thoát.
   - `rounded-3`: Bo tròn các góc form với bán kính lớn (khoảng 0.5rem - 8px).
   - `overflow-hidden`: Giúp phần bo góc không bị phần header đè mất mép bo.

2. **Thanh Card Header:**
   - `bg-success`: Sử dụng mã màu xanh lá thành công đặc trưng của Bootstrap (#198754), mang lại cảm giác trẻ trung, tích cực.
   - `text-white text-center py-3`: Giúp chữ tiêu đề có màu trắng tương phản cao, căn giữa tuyệt đối và có độ dày đệm trên dưới rất vừa vặn.

3. **Hệ thống Grid nội bộ trong Form:**
   - Class `row g-3`: `g-3` là khoảng cách gutter bằng 1rem giữa các ô dữ liệu theo cả chiều ngang và dọc, giúp các ô không bị dính sát vào nhau.
   - `col-md-6`: Trên màn hình tablet và desktop (từ 768px trở lên), hai ô nhập liệu sẽ nằm song song trên cùng 1 hàng (chiếm 6 trên 12 cột). Khi xem trên điện thoại nhỏ hơn 768px, chúng tự động rơi dòng và chiếm đủ 100% bề ngang (`col-12` mặc định).
   - `form-label small fw-semibold`: Giúp nhãn chữ nhỏ gọn, in đậm nhẹ, tạo sự phân cấp rõ ràng với nội dung placeholder bên trong ô nhập.
   - `form-control` và `form-select`: Đem lại style viền bo chuẩn, hiệu ứng focus đổi màu viền xanh tinh tế khi người dùng nhấp chuột.
   - `form-check form-check-inline`: Giúp 3 nút Radio button nằm thẳng hàng ngang cạnh nhau thay vì xếp dọc, tiết kiệm không gian màn hình đáng kể.

4. **Khu vực chân Form:**
   - Khối bọc nút sử dụng `d-flex justify-content-end gap-2 mt-4`: Sử dụng Flexbox để đẩy hai nút sang sát mép phải, có khoảng cách `gap-2` ngăn cách nhau.
   - `btn btn-outline-secondary`: Nút 'Nhập lại' dạng viền xám mảnh, đóng vai trò là hành động phụ (secondary).
   - `btn btn-success fw-semibold`: Nút 'Đăng ký' màu xanh lá đồng bộ với header, đóng vai trò là hành động chính (primary action) cần thu hút sự chú ý của người dùng."

---

### PHẦN 4: GIẢI THÍCH CƠ CHẾ TƯƠNG TÁC VÀ VALIDATION (Khoảng 45 giây)

> **[Gợi ý thao tác OBS]:** Trỏ chuột vào các thuộc tính HTML5 trong form: `required`, `name`, `type="reset"`.

*(Lời thoại sinh viên):*

"Về mặt logic tương tác và kiểm tra dữ liệu đầu vào:
- **Tính năng bắt buộc nhập (HTML5 Validation):** Các ô Họ tên, Mã sinh viên, Email, Số điện thoại và Checkbox cam kết đều được em gán thuộc tính `required`. Khi người dùng bấm 'Đăng ký' mà để trống bất kỳ ô nào, trình duyệt sẽ tự động kích hoạt thông báo nhắc nhở và ngăn chặn việc gửi form.
- **Tính loại trừ của Radio Button:** Cả 3 nút radio đều mang chung thuộc tính `name="trinhDo"`. Điều này đảm bảo rằng tại một thời điểm, sinh viên chỉ được tích chọn duy nhất một trình độ phù hợp, mặc định em gán `checked` cho ô *'Cơ bản'*.
- **Hành vi Reset Form:** Nút 'Nhập lại' mang thuộc tính `type="reset"`, khi người dùng nhấp vào, toàn bộ dữ liệu đang gõ dở trong các trường text sẽ được xóa trắng, đưa các tùy chọn Radio và Checkbox về đúng trạng thái ban đầu mà không cần viết thêm mã JavaScript."

---

### PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> **[Gợi ý thao tác OBS]:** Phóng to cửa sổ trình duyệt Chrome, thực hiện từng thao tác tương ứng với lời thoại.

*(Lời thoại sinh viên):*

"Sau đây, em xin thực hiện thao tác demo trực tiếp giao diện trên trình duyệt để kiểm chứng kết quả:

- **Bước 1: Kiểm tra tính năng Validation**
  `[Thao tác: Bỏ trống các ô và bấm ngay vào nút 'Đăng ký']`
  'Thưa thầy cô và các bạn, khi em bấm nút Đăng ký, trình duyệt lập tức chặn lại và hiển thị cảnh báo: *Please fill out this field* tại ô Họ và tên, chứng minh thuộc tính `required` hoạt động chính xác.'

- **Bước 2: Điền dữ liệu thử nghiệm**
  `[Thao tác: Lần lượt gõ Họ tên: 'Trần Trọng Hoàng Anh', Mã SV: '2251060001', Email: 'hoanganh@tlu.edu.vn', SĐT: '0987654321']`
  'Tiếp theo, em chuyển lựa chọn Trình độ từ *Cơ bản* sang *Khá*. Chúng ta thấy nút radio hoạt động mượt mà, chỉ chọn một mục duy nhất. Trong menu thả xuống Lớp, em chọn *67CNTT1*.'

- **Bước 3: Thử nghiệm nút Nhập lại**
  `[Thao tác: Nhấp chuột vào nút 'Nhập lại']`
  'Khi em nhấp nút *Nhập lại*, toàn bộ các trường vừa nhập đã được hoàn nguyên về trạng thái ban đầu sạch sẽ.'

- **Bước 4: Kiểm tra tính co giãn Responsive**
  `[Thao tác: Nhấn F12 mở DevTools hoặc kéo thu hẹp bề ngang cửa sổ trình duyệt]`
  'Bây giờ, em tiến hành thu nhỏ bề rộng màn hình về kích thước điện thoại di động (dưới 768px). Quý thầy cô có thể quan sát thấy: các cặp trường Họ tên - Mã SV và Email - SĐT đang từ 2 cột đã tự động co dãn, chuyển thành dạng 1 cột đơn xếp chồng lên nhau rất ngay ngắn, các nút bấm vẫn căn đều và không bị tràn viền màn hình.'"

---

### PHẦN 6: LỜI KẾT THÚC & CẢM ƠN (Khoảng 20 giây)

> **[Gợi ý thao tác OBS]:** Trở lại màn hình toàn cảnh có camera sinh viên.

*(Lời thoại sinh viên):*

"Như vậy, qua việc áp dụng linh hoạt hệ thống lưới Grid System và các lớp thành phần Form Control của Bootstrap 5, em đã hoàn thành bài thực hành số 26 với một giao diện Form đăng ký chuẩn thẩm mỹ, đầy đủ tính năng và tương thích tốt trên mọi thiết bị.

Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi video thuyết minh của em! Xin kính chúc thầy cô dồi dào sức khỏe và hẹn gặp lại mọi người trong các bài tập tiếp theo!"

---
*Hết kịch bản Bài 26.*
