# KỊCH BẢN THUYẾT MINH VIDEO OBS - BÀI 28
## Đề bài: Xây dựng Giao diện Giới thiệu Tour Du lịch với Carousel & Tabs (Bootstrap 5)
- **Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 4 – 5 phút
- **File mã nguồn:** `bai28.html`

---

## GỢI Ý CHUẨN BỊ TRƯỚC KHI BẤM QUAY TRÊN OBS
1. **Thiết lập màn hình OBS:**
   - Cửa sổ bên trái: **VS Code** hiển thị toàn bộ mã nguồn `bai28.html`.
   - Cửa sổ bên phải: Trình duyệt mở `bai28.html`, kiểm tra các ảnh slide (`1-vinh-ha-long.jpg`, `2-son-doong.jpg`, `3-thac-ban-gioc.jpg`) đã load tốt.
   - Quan sát xem Carousel có tự động chuyển slide sau vài giây hay không và các nút tab có chuyển đổi mượt mà không.
2. **Tác phong:** Trình bày mạch lạc, chỉ chuột chính xác vào thuộc tính kích hoạt tự động chạy (`data-bs-ride`) và cơ chế chuyển tab không tải lại trang (`data-bs-toggle="pill"`).

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (LỜI THOẠI TRỰC TIẾP)

---

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 giây)

> **[Gợi ý thao tác OBS]:** Camera mở đầu, trỏ chuột vào thanh trình chiếu slide ảnh đang tự động trượt trên trình duyệt.

*(Lời thoại sinh viên):*

"Em xin kính chào thầy cô và các bạn! Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp môn học Phát triển ứng dụng Web cơ bản.

Hôm nay, em rất vui được tiếp tục chia sẻ video hướng dẫn và thuyết minh mã nguồn cho **Bài tập số 28**: Xây dựng giao diện web **Khám phá điểm đến** ứng dụng hai thành phần tương tác vô cùng phổ biến trong **Bootstrap 5**, đó là **Trình chiếu ảnh Carousel** và **Thanh điều hướng chuyển tab Nav Pills & Tab Content**.

Mục tiêu của bài tập nhằm giúp chúng ta nắm chắc cơ chế thiết lập một slideshow tự động chuyển đổi hình ảnh kèm chú thích mô tả, cùng với kỹ thuật tổ chức thông tin dạng thẻ tab để tiết kiệm không gian hiển thị, mang lại trải nghiệm xem liền mạch, hiện đại cho người dùng.

Sau đây, em xin mời quý thầy cô cùng mở file mã nguồn `bai28.html` để theo dõi chi tiết cấu trúc code."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Cuộn file `bai28.html` trong VS Code, chỉ rõ 2 khối giao diện chính: Khối Carousel và Khối Tabs.

*(Lời thoại sinh viên):*

"Quan sát file `bai28.html`, toàn bộ trang web được bọc gọn trong một `<div class="container" style="max-width: 800px;">`. Việc giới hạn chiều rộng 800px giúp bố cục tour du lịch trông tập trung, tinh gọn giống như một thẻ bài viết chuẩn mực.

Cấu trúc trang gồm hai phần trọng tâm:

- **Phần thứ nhất: Thành phần Carousel trình chiếu ảnh (dòng 50 đến dòng 82):**
  - Khối cha mang ID `#carouselDiemDen`.
  - Bên trong gồm hai thành phần con:
    1. `<div class="carousel-indicators">`: Chứa 3 nút bấm chỉ số hình chữ nhật nhỏ nằm ở đáy banner, đại diện cho 3 slide ảnh (chỉ số 0, 1 và 2).
    2. `<div class="carousel-inner">`: Khung chứa 3 slide thực tế. Mỗi slide được đặt trong một `<div class="carousel-item">`. Slide đầu tiên có thêm class `active` để hiển thị ngay khi tải trang.
    3. Trong mỗi slide, ta có thẻ `<img>` hiển thị các danh thắng: Vịnh Hạ Long, Hang Sơn Đoòng, Thác Bản Giốc; và khối `<div class="carousel-caption">` chứa tiêu đề `<h5>` cùng dòng chú thích `<p>`.

- **Phần thứ hai: Thành phần Tabs chuyển trang nội dung (dòng 85 đến dòng 108):**
  - Danh sách nút điều hướng sử dụng thẻ `<ul class="nav nav-pills">`. Tại đây có 3 nút bấm dạng viên thuốc tương ứng với 3 nội dung: **Giới thiệu**, **Lịch trình** và **Chi phí**.
  - Bên dưới danh sách nút là `<div class="tab-content">` chứa 3 khung nội dung `<div class="tab-pane fade">` có ID tương ứng là `#tab-gt`, `#tab-lt` và `#tab-cp`."

---

### PHẦN 3: GIẢI THÍCH CÁC CLASS BOOTSTRAP 5 & CSS NỘI BỘ (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Rê chuột phân tích khối `<style>` ở dòng 9-41 và các class tiện ích trong HTML.

*(Lời thoại sinh viên):*

"Tiếp theo, em xin giải thích các lớp CSS của Bootstrap và phần CSS tùy biến đã tạo nên sự tinh tế cho bài thực hành:

1. **Định hình ảnh Slide với CSS:**
   - Trong thẻ `<style>`, em đặt class `.anh-slide` có chiều cao cố định `height: 340px;` kết hợp `object-fit: cover;`.
   - Điều này giúp cả 3 bức ảnh phong cảnh dù có độ phân giải gốc khác nhau đều lấp đầy khung hình chuẩn 340px mà không hề bị co méo hay vỡ tỉ lệ ảnh.
   - Thẻ Carousel cha còn có các class tiện ích của Bootstrap như `rounded-3 overflow-hidden shadow-sm`, giúp bo tròn 4 góc của banner và tạo bóng mờ nhẹ nhàng sang trọng.

2. **Tùy biến phần chú thích (Carousel Caption):**
   - Mặc định của Bootstrap chữ nằm khá sát đáy, em đã tùy biến `.carousel-caption { bottom: 25px; }` cùng cỡ chữ `h5` là 18px in đậm và thẻ `p` có độ trong suốt `opacity: 0.9` để người dùng dễ đọc chữ trên nền ảnh phong cảnh.

3. **Định kiểu cho Thanh Tabs dạng Nav Pills:**
   - Em sử dụng `nav-pills justify-content-center gap-2`: Các nút bấm được căn chính giữa trang, bo góc viên thuốc mềm mại `border-radius: 6px;` và cách nhau một khoảng cách vừa vặn `gap-2`.
   - Nút tab đang được chọn mang class `active`, sẽ tự động nhận màu nền xanh dương đặc trưng của Bootstrap (`#0d6efd`) với chữ trắng nổi bật.

4. **Khung nội dung Tab Content:**
   - Khung `.khung-tab-content` được em định dạng với nền trắng tinh khôi `#ffffff`, viền xám mảnh `border: 1px solid #e5e7eb`, đệm padding rộng rãi 16px trên dưới, 20px trái phải và bo góc 8px.
   - Khi kết hợp với class `fade` của Bootstrap, mỗi khi chuyển tab, nội dung cũ sẽ mờ dần và nội dung mới sẽ hiện lên một cách vô cùng mềm mại."

---

### PHẦN 4: GIẢI THÍCH LOGIC TƯƠNG TÁC BOOTSTRAP JAVASCRIPT (Khoảng 50 giây)

> **[Gợi ý thao tác OBS]:** Trỏ vào các thuộc tính: `data-bs-ride="carousel"`, `data-bs-slide-to`, `data-bs-toggle="pill"`, `data-bs-target`.

*(Lời thoại sinh viên):*

"Về mặt logic tương tác tương tự như bài trước, toàn bộ tính năng chuyển động đều do Bootstrap 5 JS điều khiển thông qua các thuộc tính HTML5 đặc thù:

- **Tính năng tự động trình chiếu ảnh (Auto-play Carousel):**
  Thuộc tính `data-bs-ride="carousel"` đặt tại thẻ cha báo cho trình duyệt biết cần kích hoạt bộ đếm thời gian. Cứ sau mỗi chu kỳ mặc định khoảng 5 giây, Carousel sẽ tự động chuyển sang slide tiếp theo theo vòng lặp vô tận.
  Đồng thời, khi người dùng bấm vào các thanh chỉ báo ở đáy slide, thuộc tính `data-bs-slide-to="0"`, `"1"`, `"2"` sẽ điều hướng người xem trực tiếp đến bức ảnh mong muốn.

- **Tính năng chuyển Tab không tải lại trang:**
  Mỗi nút tab mang cặp thuộc tính:
  `data-bs-toggle="pill"` và `data-bs-target="#tab-lt"`.
  Khi người dùng click vào nút 'Lịch trình', Bootstrap sẽ tự động gỡ bỏ class `active` ở tab 'Giới thiệu', thêm class `active` vào nút 'Lịch trình', đồng thời kích hoạt hiệu ứng hiển thị khối `<div id="tab-lt">` tương ứng trong phần `tab-content` mà trang web không cần phải reload hay gửi bất kỳ request nào lên máy chủ."

---

### PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> **[Gợi ý thao tác OBS]:** Chuyển sang trình duyệt Chrome, tương tác trực tiếp với Carousel và Tabs.

*(Lời thoại sinh viên):*

"Bây giờ, em xin mời thầy cô và các bạn quan sát màn hình demo thực tế:

- **Bước 1: Trải nghiệm Carousel tự động và điều hướng thủ công**
  `[Thao tác: Để yên chuột khoảng 3-5 giây để slide tự động chuyển từ Vịnh Hạ Long sang Hang Sơn Đoòng]`
  'Thưa thầy cô, như chúng ta thấy, sau vài giây bức ảnh Vịnh Hạ Long đã tự động trượt sang Hang Sơn Đoòng một cách rất mượt mà nhờ thuộc tính `data-bs-ride`.'
  `[Thao tác: Nhấp chuột vào nút chỉ số gạch ngang thứ 3 ở đáy banner]`
  'Khi em nhấp vào nút chỉ báo thứ 3, slide lập tức chuyển ngay sang Thác Bản Giốc với đầy đủ phần chú thích nổi bật phía trên ảnh.'

- **Bước 2: Trải nghiệm chuyển đổi các Tab nội dung**
  `[Thao tác: Hiện tại Tab 'Giới thiệu' đang active. Nhấp chuột vào Tab 'Lịch trình']`
  'Tiếp theo, ở khối bên dưới: khi em click sang Tab *Lịch trình*, hiệu ứng `fade` kích hoạt nhẹ nhàng, nội dung chi tiết ngày 1, ngày 2, ngày 3 lập tức xuất hiện.'
  `[Thao tác: Tiếp tục nhấp sang Tab 'Chi phí']`
  'Và khi nhấp sang Tab *Chi phí*, thông tin giá tour 2.850.000đ trọn gói hiện lên ngay lập tức. Toàn bộ quá trình diễn ra tức thì, trực quan và không hề giật cục.'

- **Bước 3: Kiểm tra tính hiển thị trên màn hình hẹp**
  `[Thao tác: Kéo thu nhỏ cửa sổ trình duyệt]`
  'Khi em thu nhỏ cửa sổ trình duyệt, khối container 800px co giãn rất tự nhiên, ảnh slide vẫn giữ đúng tỉ lệ 340px chiều cao nhờ `object-fit: cover` và thanh tab tự căn chỉnh ngay ngắn ở chính giữa.'"

---

### PHẦN 6: LỜI KẾT THÚC & CẢM ƠN (Khoảng 20 giây)

> **[Gợi ý thao tác OBS]:** Màn hình quay trở lại góc nhìn sinh viên thuyết trình.

*(Lời thoại sinh viên):*

"Như vậy, em đã hoàn thành việc trình bày và giải thích toàn bộ mã nguồn cũng như cơ chế hoạt động của Bài tập số 28 với hai thành phần Carousel và Tabs của Bootstrap 5.

Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi! Xin hẹn gặp lại mọi người trong video bài tập tiếp theo, Bài số 29!"

---
*Hết kịch bản Bài 28.*
