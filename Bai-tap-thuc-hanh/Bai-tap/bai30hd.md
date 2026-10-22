# KỊCH BẢN THUYẾT MINH VIDEO OBS - BÀI 30
## Đề bài: Xây dựng Giao diện Bảng điều khiển Quản trị (Admin Dashboard) với Sidebar, Thẻ thống kê & Thanh tiến độ (Bootstrap 5)
- **Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 4 – 5 phút
- **File mã nguồn:** `bai30.html`

---

## GỢI Ý CHUẨN BỊ TRƯỚC KHI BẤM QUAY TRÊN OBS
1. **Thiết lập màn hình OBS:**
   - Cửa sổ bên trái: **VS Code** mở file `bai30.html`.
   - Cửa sổ bên phải: Trình duyệt mở `bai30.html` ở chế độ toàn màn hình để khoe trọn bố cục Dashboard 2 cột (Sidebar bên trái, Nội dung bên phải).
   - Kiểm tra các thanh Progress Bar 4px và các Badge màu sắc hiển thị đúng chuẩn.
2. **Tác phong:** Trình bày chuyên nghiệp, đĩnh đạc, nhấn mạnh vào kiến trúc bố cục Flexbox chia 2 vùng và tư duy thiết kế Dashboard hiện đại.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (LỜI THOẠI TRỰC TIẾP)

---

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 giây)

> **[Gợi ý thao tác OBS]:** Camera mở đầu, con trỏ chuột lướt tổng thể giao diện Bảng điều khiển Quản trị rất hiện đại trên trình duyệt.

*(Lời thoại sinh viên):*

"Kính chào quý thầy cô và các bạn! Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Hôm nay, em xin được trình bày video thuyết minh cho **Bài tập số 30**: Thiết kế giao diện **Bảng điều khiển quản trị - Admin Dashboard** cho hệ thống quản lý học tập CSE.TLU Admin bằng thư viện **Bootstrap 5**.

Đây là bài thực hành tổng hợp vô cùng quan trọng, mô phỏng một giao diện trang quản trị thực tế bao gồm thanh điều hướng Sidebar màu tối cố định bên trái, khu vực hiển thị nội dung chính bên phải với hàng loạt thẻ thống kê số liệu (Metric Cards), các thanh chỉ báo tiến độ mảnh mai (Slim Progress Bars) và danh sách theo dõi tiến độ học tập theo chương.

Sau đây, em xin mời thầy cô và các bạn cùng đi vào chi tiết mã nguồn file `bai30.html`."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Cuộn file `bai30.html` trong VS Code, chỉ rõ 2 khối con trực tiếp trong layout flexbox: `<aside class="sidebar">` và `<main class="flex-grow-1">`.

*(Lời thoại sinh viên):*

"Về mặt kiến trúc layout, nhìn vào thẻ `<body>`, toàn bộ trang web được tổ chức trong một bộ khung Flexbox hai cột: `<div class="d-flex min-vh-100">`:

- **Cột thứ nhất: Thanh điều hướng dọc Sidebar (dòng 72 đến 88):**
  - Em sử dụng thẻ ngữ nghĩa `<aside class="sidebar">`.
  - Trên cùng là logo thương hiệu hệ thống: `<div class="sidebar-brand">CSE.TLU Admin</div>`.
  - Bên dưới là menu điều hướng dạng dọc sử dụng `<ul class="nav nav-pills flex-column">` gồm 4 liên kết chức năng: **Bảng điều khiển** (đang ở trạng thái `active`), **Bài tập**, **Sinh viên** và **Điểm số**.

- **Cột thứ hai: Khu vực nội dung chính Main Content (dòng 91 đến 172):**
  - Sử dụng thẻ `<main class="flex-grow-1 p-4">` để tự động giãn nở lấp đầy toàn bộ phần chiều rộng còn lại của màn hình.
  - Phía trên là thanh tiêu đề ngang kết hợp tiêu đề trang `<h4>Bảng điều khiển</h4>` cùng khối tiện ích gồm một huy hiệu thông báo *'3 bài mới'* và nút bấm hành động *'Xuất báo cáo'*.
  - Tiếp theo là **Lưới 4 thẻ thống kê số liệu** nằm trong `<div class="row g-3 mb-4">`, mỗi thẻ đại diện cho một chỉ số then chốt: Tổng số sinh viên, Số bài đã nộp, Số bài chưa nộp và Điểm trung bình.
  - Phía dưới cùng là **Khung tiến độ theo chương** `<div class="khung-tien-do-chuong">`, bên trong sử dụng danh sách `<ul class="list-group list-group-flush">` liệt kê tiến độ hoàn thành từ Chương 1 đến Chương 4."

---

### PHẦN 3: GIẢI THÍCH CÁC CLASS BOOTSTRAP 5 & CSS TÙY BIẾN (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Rê chuột phân tích khối `<style>` ở dòng 9-66 và các class tiện ích trong layout.

*(Lời thoại sinh viên):*

"Bây giờ, em xin phân tích các kỹ thuật CSS và các class Bootstrap 5 nổi bật đã định hình nên vẻ đẹp chuyên nghiệp của Dashboard này:

1. **Kỹ thuật bố cục Sidebar với CSS:**
   - Trong thẻ `<style>`, class `.sidebar` được định nghĩa:
     + Chiều rộng cố định `width: 230px;` và nền màu xám đen sang trọng `#212529`.
     + `min-height: 100vh;` đảm bảo dải menu luôn phủ kín chiều cao màn hình.
     + Thuộc tính `flex-shrink: 0;` là mấu chốt, giúp Sidebar không bao giờ bị co rúm lại khi nội dung bên phải phình to.
   - Các liên kết `.sidebar .nav-link` có màu xám mờ `#9ca3af`. Khi hover vào, chữ đổi sang màu trắng và nền sáng nhẹ `rgba(255, 255, 255, 0.08)`. Khi `active`, liên kết nhận màu xanh dương chuẩn `#0d6efd`.

2. **Lưới thẻ Thống kê (Metric Cards):**
   - Mỗi cột sử dụng `class="col-sm-6 col-md-3"`: Trên màn hình máy tính từ 768px trở lên, 4 thẻ sẽ dàn đều thành 4 cột thẳng hàng. Trên màn hình tablet, chúng chia thành 2 hàng x 2 cột.
   - Bên trong, class `.the-thong-ke` được bo góc 8px với bóng đổ mờ `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)` trên nền trắng.
   - Điểm nhấn tinh tế là thanh tiến độ `.progress` được em đặt độ cao siêu mảnh `style="height: 4px;"`. Mỗi thẻ mang một màu sắc biểu trưng: Xanh dương cho Tổng sinh viên, Xanh lá cho Đã nộp (75%), Đỏ cho Chưa nộp (25%) và Vàng cảnh báo cho Điểm trung bình (7.8 điểm - 78%).

3. **Danh sách List Group Flush:**
   - Class `list-group-flush` loại bỏ viền ngoài cùng của danh sách, giúp các mục tiến độ chương hòa quyện vào khung nền trắng một cách liền mạch.
   - Mỗi mục dùng `d-flex justify-content-between align-items-center` để căn đều tên chương sang mép trái và huy hiệu tỉ lệ phần trăm bo tròn `rounded-pill` sang mép phải."

---

### PHẦN 4: GIẢI THÍCH CƠ CHẾ HIỂN THỊ DỮ LIỆU & ĐIỀU HƯỚNG (Khoảng 45 giây)

> **[Gợi ý thao tác OBS]:** Trỏ chuột vào các thanh `.progress-bar` với thuộc tính `style="width: ...%"` và các lớp màu Bootstrap.

*(Lời thoại sinh viên):*

"Về mặt cấu trúc biểu diễn dữ liệu và điều hướng:
- Hệ thống sử dụng bảng màu ngữ nghĩa chuẩn của Bootstrap (Color Semantics): Màu xanh dương `primary` đại diện cho dữ liệu cơ sở; màu xanh lá `success` biểu thị trạng thái tích cực đã hoàn thành; màu đỏ `danger` cảnh báo các bài còn tồn đọng; và màu vàng `warning` thu hút sự chú ý vào điểm số cần cải thiện.
- Các thanh tiến độ sử dụng thẻ div `.progress-bar` với thuộc tính độ rộng `style="width: 75%;"` tương ứng chính xác với tỉ lệ số học: 96 trên 128 bài nộp chính là 75%, giúp người quản trị chỉ cần liếc mắt là nắm bắt ngay được bức tranh tổng quan của lớp học.
- Thanh Sidebar bên trái sẵn sàng cho việc mở rộng các trang quản lý chuyên biệt như Quản lý Bài tập, Danh sách Sinh viên và Bảng điểm khi hệ thống phát triển thêm các module backend."

---

### PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> **[Gợi ý thao tác OBS]:** Chuyển sang trình duyệt Chrome, tương tác trực tiếp với các thành phần giao diện.

*(Lời thoại sinh viên):*

"Sau đây, em xin kính mời thầy cô và các bạn cùng theo dõi phần trải nghiệm thực tế giao diện trên trình duyệt web:

- **Bước 1: Trải nghiệm tương tác với Sidebar Menu**
  `[Thao tác: Di chuột lần lượt qua các mục menu: Bài tập, Sinh viên, Điểm số]`
  'Thưa thầy cô, khi em rê chuột qua các mục menu bên Sidebar, hiệu ứng chuyển màu nền xám mờ và đổi màu chữ trắng xuất hiện rất êm ái, trong khi mục Bảng điều khiển vẫn giữ trạng thái active nổi bật.'

- **Bước 2: Quan sát trực quan các Thẻ Thống kê & Thanh Progress**
  `[Thao tác: Lần lượt trỏ chuột vào 4 ô số liệu: 128, 96, 32, 7.8]`
  'Bốn thẻ thống kê hiển thị cực kỳ rõ ràng với cỡ số to 24px in đậm. Phía dưới mỗi thẻ là thanh tiến độ mảnh 4px rất tinh tế với các màu xanh, đỏ, vàng trực quan, không chiếm dụng nhiều diện tích mà vẫn truyền tải trọn vẹn thông điệp.'

- **Bước 3: Xem danh sách Tiến độ theo chương**
  `[Thao tác: Di chuột qua 4 mục trong danh sách List Group]`
  'Tại khối Tiến độ theo chương: Chương 1 HTML5 đã đạt 100% với huy hiệu màu xanh lá, Chương 2 JavaScript đạt 82%, Chương 3 CSS3 đạt 74% và Chương 4 Bootstrap 5 đạt 45% với nhãn xám tròn viên thuốc rất bắt mắt.'

- **Bước 4: Kiểm tra tính co giãn linh hoạt**
  `[Thao tác: Thu hẹp cửa sổ trình duyệt để quan sát sự chuyển đổi của lưới thống kê]`
  'Khi em thử thay đổi kích thước cửa sổ trình duyệt: 4 thẻ thống kê từ 1 hàng 4 cột tự động chuyển sang 2 hàng 2 cột gọn gàng, khu vực nội dung chính tự co dãn vừa khít mà thanh Sidebar 230px vẫn giữ nguyên sự vững chãi bên cánh trái.'"

---

### PHẦN 6: LỜI KẾT THÚC & CẢM ƠN (Khoảng 20 giây)

> **[Gợi ý thao tác OBS]:** Màn hình quay trở lại toàn cảnh chào kết thúc của sinh viên.

*(Lời thoại sinh viên):*

"Kính thưa thầy cô và các bạn, như vậy qua Bài tập số 30, em đã hoàn thành việc xây dựng một giao diện Bảng điều khiển Quản trị hoàn chỉnh, chuyên nghiệp với sự kết hợp hài hòa giữa cấu trúc Flexbox, Sidebar hiện đại và các thành phần giao diện Bootstrap 5 tiên tiến.

Đây cũng là bài tập khép lại chuỗi bài thực hành phát triển ứng dụng Web cơ bản của em. Em xin bày tỏ lòng biết ơn sâu sắc tới quý thầy cô đã tận tình giảng dạy và hướng dẫn chúng em trong suốt học phần. Em xin chân thành cảm ơn thầy cô và các bạn đã theo dõi video! Kính chúc thầy cô luôn dồi dào sức khỏe và công tác tốt!"

---
*Hết kịch bản Bài 30.*
