# KỊCH BẢN THUYẾT MINH VIDEO OBS - BÀI 27
## Đề bài: Xây dựng Trang giới thiệu Danh lam thắng cảnh với Card, Modal & Accordion (Bootstrap 5)
- **Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 4 – 5 phút
- **File mã nguồn:** `bai27.html`

---

## GỢI Ý CHUẨN BỊ TRƯỚC KHI BẤM QUAY TRÊN OBS
1. **Thiết lập màn hình OBS:**
   - Cửa sổ bên trái: **VS Code** mở file `bai27.html`.
   - Cửa sổ bên phải: Trình duyệt mở `bai27.html`, đảm bảo các ảnh (`2-son-doong.jpg`, `5-mekong.jpg`, `6-phong-nha.jpg`) hiển thị đầy đủ, không bị lỗi đường dẫn.
   - Thử bấm trước nút mở Modal và Accordion xem hiệu ứng trượt có mượt mà không.
2. **Tác phong:** Trình bày tự tin, rành mạch; giải thích rõ mối quan hệ giữa thuộc tính kích hoạt (`data-bs-*`) và ID của phần tử đích.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (LỜI THOẠI TRỰC TIẾP)

---

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 giây)

> **[Gợi ý thao tác OBS]:** Camera chào khán giả, con trỏ chuột lướt nhẹ qua 3 thẻ Card du lịch trên màn hình trình duyệt.

*(Lời thoại sinh viên):*

"Xin kính chào quý thầy cô và các bạn! Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Hôm nay, em xin phép được đồng hành cùng thầy cô và các bạn qua video thuyết minh **Bài tập số 27**: Thiết kế trang web giới thiệu **Danh lam thắng cảnh Việt Nam** kết hợp 3 thành phần giao diện nâng cao trong **Bootstrap 5**: Thẻ Card, Hộp thoại bật lên Modal và Danh sách thu gọn Accordion.

Mục tiêu trọng tâm của bài thực hành này là nắm vững kỹ thuật dựng bố cục lưới linh hoạt cho các thẻ Card sản phẩm, kiểm soát chiều cao và tỉ lệ ảnh, đồng thời sử dụng các thuộc tính dữ liệu `data-bs-*` của Bootstrap JavaScript để điều khiển các tương tác đóng mở pop-up và chuyển đổi nội dung mượt mà mà không cần phải viết thêm một dòng script phức tạp nào.

Sau đây, em xin phép mở mã nguồn file `bai27.html` để cùng phân tích chi tiết."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Cuộn file `bai27.html` trong VS Code, chỉ rõ 3 phần: Tiêu đề + Card Grid, Accordion và nhóm 3 thẻ Modal.

*(Lời thoại sinh viên):*

"Quan sát tổng thể file `bai27.html`, cấu trúc mã nguồn được phân chia thành 3 phân vùng chính rất mạch lạc:

- **Phần 1: Khối Tiêu đề và Lưới Thẻ Card (dòng 18 đến dòng 65):**
  - Tiêu đề chính trang web sử dụng thẻ `<h2>` với dòng chữ *'Danh lam thắng cảnh'*.
  - Tiếp theo là hàng chứa các sản phẩm `<div class="row g-3 mb-4">`. Bên trong gồm 3 cột đại diện cho 3 điểm đến nổi tiếng: **Hang Sơn Đoòng**, **Đồng bằng sông Cửu Long** và **Động Phong Nha**.
  - Mỗi thẻ card được cấu tạo từ:
    + Thẻ `<img>` mang class `card-img-top anh-card` để hiển thị hình ảnh minh họa địa danh.
    + Khối `card-body` chứa tiêu đề địa danh trong thẻ `<h6>`, một câu mô tả ngắn trong thẻ `<p>` và một nút bấm `<button>` có nhãn *'Chi tiết'*.

- **Phần 2: Khối Accordion Hỏi đáp & Thông tin (dòng 68 đến 93):**
  - Sử dụng thẻ bao ngoài `<div class="accordion" id="accordionDuLich">`.
  - Bên trong chia làm 2 mục thông tin `accordion-item`: Mục thứ nhất là *'Kinh nghiệm du lịch'* và mục thứ hai là *'Chi phí dự kiến'*. Mỗi mục gồm một `accordion-header` chứa nút bấm chuyển đổi và một `accordion-collapse` bọc phần thân nội dung giải thích.

- **Phần 3: Nhóm 3 Hộp thoại Modal chi tiết (dòng 97 đến 149):**
  - Em đặt các khối Modal này ở ngoài cùng thẻ container, ngay trước thẻ đóng `</body>`.
  - Ba Modal có ID tương ứng là `#modalSonDoong`, `#modalMekong` và `#modalPhongNha`.
  - Mỗi Modal đều tuân thủ cấu trúc chuẩn 3 phần của Bootstrap: `modal-header` (có tiêu đề và nút đóng chéo `btn-close`), `modal-body` (chứa bài viết giới thiệu chi tiết) và `modal-footer` (gồm nút Đóng và nút Đặt ngay)."

---

### PHẦN 3: GIẢI THÍCH CLASS BOOTSTRAP 5 & CSS TÙY BIẾN (Khoảng 1 phút 15 giây)

> **[Gợi ý thao tác OBS]:** Đánh dấu phần `<style>` ở dòng 9-14 và các class quan trọng: `h-100`, `flex-grow-1`, `col-sm-6 col-lg-4`.

*(Lời thoại sinh viên):*

"Bây giờ, em xin đi sâu vào các lớp CSS và giải pháp thiết kế bố cục:

1. **Xử lý tỉ lệ ảnh đồng đều qua CSS tùy biến:**
   - Trong thẻ `<style>`, em định nghĩa class `.anh-card { height: 180px; object-fit: cover; }`.
   - Thuộc tính `object-fit: cover` là cực kỳ quan trọng: nó giúp cả 3 bức ảnh dù có kích thước gốc khác nhau đều được căn chỉnh vừa vặn trong khung cao đúng 180 pixel mà không bao giờ bị méo hình, giãn ảnh hay làm lệch hàng.

2. **Bố cục lưới Responsive đa điểm ngắt (Breakpoints):**
   - Mỗi cột sử dụng `class="col-sm-6 col-lg-4"`:
     + Trên màn hình lớn Desktop (`lg` >= 992px): 12 cột chia cho 4 = 3 thẻ trên 1 hàng ngang.
     + Trên màn hình tablet (`sm` >= 576px): chia làm 2 cột mỗi hàng (chiếm 6 cột).
     + Trên điện thoại nhỏ (< 576px): mặc định chiếm trọn 100% bề ngang, tạo trải nghiệm cuộn dọc dễ nhìn.

3. **Kỹ thuật căn bằng chiều cao thẻ Card (Equal Height Cards):**
   - Thẻ card mang class `card h-100 shadow-sm border-0`. `h-100` đảm bảo cả 3 thẻ card trong cùng một hàng luôn có chiều cao bằng nhau tuyệt đối, bất kể đoạn văn mô tả dài hay ngắn.
   - Đặc biệt, bên trong `card-body`, em sử dụng Flexbox với `d-flex flex-column`, và gán cho đoạn văn mô tả class `flex-grow-1`. Nhờ vậy, đoạn văn bản sẽ tự động chiếm trọn khoảng trống còn lại, đẩy nút bấm *'Chi tiết'* xuống dính sát đáy thẻ card, tạo nên sự thẳng hàng tăm tắp giữa các nút bấm trên cả 3 cột!

4. **Hiệu ứng Modal và Accordion:**
   - Modal sử dụng class `modal-dialog-centered` giúp khung cửa sổ bật lên luôn được căn giữa màn hình theo phương thẳng đứng, tạo cảm giác sang trọng và tập trung mắt người nhìn."

---

### PHẦN 4: GIẢI THÍCH LOGIC TƯƠNG TÁC BOOTSTRAP JAVASCRIPT (Khoảng 50 giây)

> **[Gợi ý thao tác OBS]:** Đưa chuột chỉ vào các cặp thuộc tính: `data-bs-toggle`, `data-bs-target`, `data-bs-parent`, `data-bs-dismiss`.

*(Lời thoại sinh viên):*

"Về mặt logic tương tác, Bootstrap 5 cung cấp cơ chế Data Attributes vô cùng mạnh mẽ:

- **Cơ chế gọi Modal:**
  Tại mỗi nút *'Chi tiết'*, ta khai báo:
  `data-bs-toggle="modal"` và `data-bs-target="#modalSonDoong"`.
  Khi người dùng click vào nút, bộ mã script `bootstrap.bundle.min.js` sẽ tìm đến thẻ có ID trùng khớp là `#modalSonDoong`, thêm class `show` và tạo một lớp màn phủ mờ nền đen `modal-backdrop`. 
  Để đóng lại, nút dấu nhân ở header và nút Đóng ở footer chỉ cần khai báo `data-bs-dismiss="modal"`.

- **Cơ chế độc quyền của Accordion (Single Open Collapse):**
  Điểm hay nhất của khối Accordion nằm ở thuộc tính `data-bs-parent="#accordionDuLich"` được đặt trong các thẻ `accordion-collapse`.
  Chính thuộc tính này thông báo cho Bootstrap biết rằng: hai mục này thuộc cùng một nhóm cha. Khi người dùng bấm mở mục *'Chi phí dự kiến'*, mục *'Kinh nghiệm du lịch'* sẽ tự động cuộn gấp lại ngay lập tức, đảm bảo tại một thời điểm chỉ có duy nhất 1 nội dung được hiển thị, giúp trang web luôn gọn gàng."

---

### PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> **[Gợi ý thao tác OBS]:** Mở toàn màn hình trình duyệt, tương tác chậm rãi, rõ ràng từng chi tiết.

*(Lời thoại sinh viên):*

"Sau đây, em xin thực hiện thao tác demo trực tiếp trên trình duyệt web:

- **Bước 1: Bật Modal chi tiết sản phẩm**
  `[Thao tác: Nhấp chuột vào nút 'Chi tiết' màu đỏ ở Thẻ 1 - Hang Sơn Đoòng]`
  'Thưa thầy cô, khi em nhấp nút Chi tiết, ngay lập tức hộp thoại Modal Hang Sơn Đoòng xuất hiện ở chính giữa màn hình với hiệu ứng làm mờ nền xung quanh rất êm ái.'
  `[Thao tác: Bấm nút 'Đặt ngay']`
  'Khi em nhấp nút *Đặt ngay*, sự kiện JavaScript inline `onclick="alert(...)"` lập tức kích hoạt hộp thông báo: *Đã ghi nhận yêu cầu đặt tour!* rất trực quan.'
  `[Thao tác: Nhấp vào dấu chéo 'X' hoặc nút 'Đóng' hoặc nhấp ra vùng nền đen bên ngoài]`
  'Em nhấp nút Đóng, Modal đóng lại và trả lại tương tác cho trang chính.'
  `[Thao tác: Nhấp thử nút Chi tiết của Thẻ 2 - ĐBSCL và Thẻ 3 - Động Phong Nha để chứng minh từng ID hoạt động độc lập chính xác]`

- **Bước 2: Tương tác với Accordion**
  `[Thao tác: Quan sát mục 'Kinh nghiệm du lịch' đang mở mặc định. Nhấp chuột vào mục 'Chi phí dự kiến']`
  'Tiếp theo, ở phần Accordion bên dưới: Hiện tại mục *Kinh nghiệm du lịch* đang mở. Khi em nhấp vào tiêu đề *Chi phí dự kiến*, thầy cô có thể thấy nội dung chi phí trượt xuống, đồng thời mục kinh nghiệm phía trên tự động gấp gọn lại nhờ thuộc tính `data-bs-parent`.'

- **Bước 3: Kiểm tra Responsive trên các kích thước màn hình**
  `[Thao tác: Kéo thu hẹp cửa sổ trình duyệt từ Desktop -> Tablet -> Mobile]`
  'Cuối cùng là khả năng co giãn Responsive: Từ 3 cột trên máy tính, khi thu về kích thước máy tính bảng, hệ thống tự chuyển thành 2 cột; và khi thu hẹp về điện thoại di động, 3 thẻ xếp thành 1 cột dọc hoàn hảo, không có bất kỳ hiện tượng vỡ layout nào.'"

---

### PHẦN 6: LỜI KẾT THÚC & CẢM ƠN (Khoảng 20 giây)

> **[Gợi ý thao tác OBS]:** Chuyển về màn hình chào kết thúc.

*(Lời thoại sinh viên):*

"Thông qua Bài tập số 27, em đã làm chủ được cách phối hợp giữa cấu trúc thẻ Card hiện đại, hộp thoại Modal tương tác và thanh Accordion tiết kiệm không gian của Bootstrap 5.

Em xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe bài thuyết trình của em. Chúc thầy cô một ngày làm việc tràn đầy năng lượng và xin hẹn gặp lại trong bài tập số 28!"

---
*Hết kịch bản Bài 27.*
