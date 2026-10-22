# KỊCH BẢN THUYẾT MINH VIDEO OBS - BÀI 29
## Đề bài: Xây dựng Bảng dữ liệu sinh viên với Table Striped, Hover, Responsive & Phân trang Pagination (Bootstrap 5)
- **Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 4 – 5 phút
- **File mã nguồn:** `bai29.html`

---

## GỢI Ý CHUẨN BỊ TRƯỚC KHI BẤM QUAY TRÊN OBS
1. **Thiết lập màn hình OBS:**
   - Cửa sổ bên trái: **VS Code** mở file `bai29.html`.
   - Cửa sổ bên phải: Trình duyệt mở `bai29.html` hiển thị bảng dữ liệu 5 sinh viên với đầy đủ huy hiệu Đạt/Thi lại và thanh phân trang.
   - Thử rê chuột qua từng hàng của bảng xem hiệu ứng hover đổi màu nền có rõ ràng không.
2. **Tác phong:** Nói với giọng điệu tự tin, chỉ rõ vai trò của tính năng `table-responsive` khi xem bảng trên thiết bị màn hình nhỏ, và ý nghĩa của các class trạng thái phân trang `disabled`, `active`.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (LỜI THOẠI TRỰC TIẾP)

---

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 giây)

> **[Gợi ý thao tác OBS]:** Camera chào mở đầu, trỏ chuột vào bảng dữ liệu sinh viên đang hiển thị sắc nét trên trình duyệt.

*(Lời thoại sinh viên):*

"Xin kính chào quý thầy cô và các bạn! Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Hôm nay, em xin được tiếp tục gửi tới thầy cô và các bạn video thuyết minh mã nguồn **Bài tập số 29**: Thiết kế giao diện **Bảng dữ liệu sinh viên kèm thanh phân trang Pagination** bằng thư viện **Bootstrap 5**.

Trong các hệ thống quản lý học vụ hay bảng điều khiển doanh nghiệp, bảng dữ liệu (Data Table) là thành phần cốt lõi để trình diễn thông tin. Mục tiêu của bài tập này là áp dụng các lớp định kiểu bảng hiện đại của Bootstrap như `table-striped`, `table-hover`, cơ chế chống vỡ giao diện trên di động `table-responsive`, kết hợp thiết kế nhãn trạng thái (Badges) và thanh điều hướng phân trang (Pagination) chuẩn mực.

Sau đây, em xin phép mở mã nguồn file `bai29.html` để chúng ta cùng khám phá chi tiết cấu trúc."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Cuộn file `bai29.html` trong VS Code, chỉ rõ 3 phần: Tiêu đề card, Thẻ Table responsive và Thanh phân trang nav.

*(Lời thoại sinh viên):*

"Nhìn vào cấu trúc mã nguồn trong file `bai29.html`:

- **Khung chứa chính (dòng 46 đến dòng 48):**
  - Toàn bộ nội dung được bao bọc trong một `<div class="container" style="max-width: 820px;">` kết hợp với một `<div class="card shadow-sm border-0 rounded-3 p-4 bg-white">`. Việc đặt bảng trong một khung Card viền trắng bo góc giúp giao diện nổi bật, trang nhã trên nền xám `bg-light`.

- **Thanh tiêu đề danh sách (dòng 50 đến dòng 53):**
  - Em sử dụng khối Flexbox `<div class="d-flex justify-content-between align-items-center mb-3">`:
    + Bên trái là tiêu đề `<h5>` in đậm: *'Danh sách sinh viên'*.
    + Bên phải là một huy hiệu Badge màu xanh dương `<span class="badge bg-primary px-3 py-2">Tổng: 42</span>` để thông báo nhanh tổng số lượng sinh viên hiện có.

- **Khối Bảng dữ liệu (dòng 56 đến dòng 111):**
  - Bảng được bọc an toàn trong một thẻ bọc cuộn ngang: `<div class="table-responsive rounded-2 overflow-hidden mb-4">`.
  - Bên trong là thẻ `<table class="table table-striped table-hover mb-0">`:
    + Phần `<thead>`: Định nghĩa 6 cột dữ liệu bao gồm: Thứ tự `#` (được cố định chiều rộng 50px), `Mã SV`, `Họ và tên`, `Lớp`, `Điểm` và `Trạng thái`.
    + Phần `<tbody>`: Chứa 5 hàng dữ liệu sinh viên mẫu đại diện cho 3 lớp CNTT1, CNTT2 và KTPM1.
    + Tại cột Trạng thái, em sử dụng các thẻ `<span>` mang class `.badge-dat` màu xanh lá cho các bạn có điểm đạt, và `.badge-thilai` màu vàng cho sinh viên cần thi lại.

- **Thanh phân trang Pagination (dòng 114 đến dòng 122):**
  - Được cấu trúc bằng thẻ ngữ nghĩa `<nav aria-label="Phân trang">` kết hợp danh sách `<ul class="pagination pagination-sm">` gồm 5 nút bấm: nút lùi trang `&laquo;`, các trang 1, 2, 3 và nút tiến trang `&raquo;`."

---

### PHẦN 3: GIẢI THÍCH CÁC CLASS BOOTSTRAP 5 & CSS TÙY BIẾN (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Rê chuột làm nổi bật đoạn `<style>` ở dòng 9-42 và các class table trên từng thẻ HTML.

*(Lời thoại sinh viên):*

"Bây giờ, em xin phân tích các lớp CSS và giải pháp thẩm mỹ đã được áp dụng trong bài:

1. **Bộ đôi class Table đặc trưng của Bootstrap:**
   - `table-striped`: Tự động áp dụng màu nền xám mờ xen kẽ cho các dòng chẵn (dòng 2, dòng 4). Kỹ thuật này giúp mắt người xem dễ dàng phân biệt từng dòng dữ liệu, tránh bị nhìn nhầm từ cột này sang hàng khác khi đọc bảng nhiều cột.
   - `table-hover`: Kích hoạt hiệu ứng đổi màu nền sáng lên khi con trỏ chuột rê qua bất kỳ dòng nào, tạo cảm giác phản hồi xúc giác rất tự nhiên và tương tác cao.

2. **Tùy biến tiêu đề Thead và căn chỉnh ô dữ liệu:**
   - Trong phần `<style>`, em định nghĩa `.table thead th`: Ép màu nền đen than `#212529 !important` với chữ trắng tương phản `#ffffff !important`, cỡ chữ 13.5px và in đậm. Điều này tạo ra một điểm nhấn vững chắc, giúp thanh tiêu đề tách biệt hoàn toàn khỏi thân bảng.
   - Thêm vào đó, em dùng thuộc tính `.table tbody td { vertical-align: middle; }` để toàn bộ văn bản và huy hiệu badge luôn được căn thẳng chính giữa ô theo phương đứng.
   - Hai cột Điểm và Trạng thái được căn giữa bằng class `.cot-diem` và `.cot-trang-thai { text-align: center; }` giúp dữ liệu số và badge nhìn vô cùng cân đối.

3. **Thiết kế nhãn Badge thẩm mỹ:**
   - Thay vì dùng badge bo tròn hình bầu dục mặc định, em viết hai class `.badge-dat` và `.badge-thilai` với góc bo vuông nhẹ 4px, padding vừa vặn 4px 10px, cỡ chữ 12px đậm nét, giúp thể hiện trạng thái kết quả học tập rõ ràng, chuyên nghiệp.

4. **Kỹ thuật bao bọc `table-responsive`:**
   - Class `table-responsive` của Bootstrap đóng vai trò như một cơ chế bảo vệ: Khi bảng có quá nhiều cột hoặc khi hiển thị trên màn hình điện thoại hẹp, Bootstrap sẽ tự động kích hoạt thanh cuộn ngang bên trong khung bảng, tuyệt đối không làm bung vỡ layout của trang web chính."

---

### PHẦN 4: GIẢI THÍCH CẤU TRÚC ĐIỀU HƯỚNG PHÂN TRANG (Khoảng 45 giây)

> **[Gợi ý thao tác OBS]:** Trỏ chuột vào thẻ `<ul class="pagination">` và các thẻ `<li>` chứa class `disabled`, `active`.

*(Lời thoại sinh viên):*

"Về mặt cấu trúc điều hướng phân trang (Pagination):
- Em sử dụng class `pagination-sm` để tạo kích thước nút bấm nhỏ gọn, tinh tế, vừa vặn với kích thước dòng chữ trong bảng.
- Em bọc toàn bộ thẻ `<nav>` trong class tiện ích `d-flex justify-content-center`, giúp thanh phân trang luôn được căn chính giữa đáy của khung Card.
- **Trạng thái trực quan của các nút:**
  + Nút mũi tên lùi trang `&laquo;` được gán class `page-item disabled`. Class này làm mờ nút và ngăn con trỏ chuột bấm vào, thể hiện một cách logic rằng người dùng đang ở trang số 1, không thể lùi về trước được nữa.
  + Nút số `1` được gán class `page-item active`, tự động nhận nền màu xanh dương đặc trưng để thông báo cho người dùng biết đây là trang hiện hành.
  + Các nút `2`, `3` và mũi tên tới `&raquo;` là các liên kết đang sẵn sàng để người dùng nhấp chuyển trang."

---

### PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> **[Gợi ý thao tác OBS]:** Mở toàn màn hình trình duyệt Chrome, thực hiện các thao tác di chuột và kiểm tra giao diện.

*(Lời thoại sinh viên):*

"Sau đây, em xin thực hiện thao tác demo trực tiếp trên trình duyệt web:

- **Bước 1: Kiểm tra hiệu ứng Hover và sọc xen kẽ**
  `[Thao tác: Di chuyển con trỏ chuột lần lượt từ dòng 1 của bạn Nguyễn Văn An xuống dòng 5 của bạn Hoàng Gia Hân]`
  'Thưa thầy cô và các bạn, khi em di chuột qua từng hàng, hiệu ứng `table-hover` lập tức làm nổi bật nền dòng được chọn, kết hợp với các hàng kẻ sọc `table-striped` màu xám nhạt xen kẽ giúp mắt em theo dõi điểm số 8.5, 7.0, 5.5 rất rành mạch.'

- **Bước 2: Quan sát màu sắc huy hiệu Trạng thái**
  `[Thao tác: Trỏ chuột vào các nhãn 'Đạt' và 'Thi lại']`
  'Các nhãn trạng thái Đạt màu xanh lá và Thi lại màu vàng cam nổi bật ngay giữa cột, giúp việc phân loại kết quả học vụ trở nên trực quan tức thì.'

- **Bước 3: Trải nghiệm thanh phân trang**
  `[Thao tác: Rê chuột qua nút mũi tên lùi (đang bị disabled), sau đó di chuột qua các số 2, số 3]`
  'Tại thanh phân trang bên dưới: Nút lùi đang hiển thị con trỏ cấm `not-allowed` rất chuẩn UX vì đang ở trang 1; trong khi các nút trang 2 và trang 3 có hiệu ứng hover đổi màu sáng đón nhận cú click của người dùng.'

- **Bước 4: Kiểm tra tính năng Cuộn ngang Responsive**
  `[Thao tác: Kéo thu hẹp cửa sổ trình duyệt về bề ngang nhỏ khoảng 400px (màn hình di động)]`
  'Bây giờ, em kéo thu hẹp cửa sổ trình duyệt xuống kích thước điện thoại. Như thầy cô có thể quan sát: Nhờ có class `table-responsive`, bảng dữ liệu xuất hiện một thanh cuộn ngang mượt mà bên dưới, chúng ta có thể vuốt sang trái phải để xem đầy đủ cột Điểm và Trạng thái mà khung card và toàn bộ trang web bên ngoài không hề bị méo mó hay tràn viền.'"

---

### PHẦN 6: LỜI KẾT THÚC & CẢM ƠN (Khoảng 20 giây)

> **[Gợi ý thao tác OBS]:** Màn hình trở về khung hình chào kết thúc của sinh viên.

*(Lời thoại sinh viên):*

"Như vậy, qua Bài tập số 29, em đã xây dựng thành công một giao diện Bảng dữ liệu chuẩn mực, sạch sẽ, tối ưu trải nghiệm đọc với đầy đủ các tính năng Striped, Hover, Responsive và Phân trang chuyên nghiệp bằng Bootstrap 5.

Em xin chân thành cảm ơn thầy cô và các bạn đã theo dõi video của em! Xin hẹn gặp lại mọi người trong bài tập cuối cùng của chuỗi bài thực hành, Bài số 30!"

---
*Hết kịch bản Bài 29.*
