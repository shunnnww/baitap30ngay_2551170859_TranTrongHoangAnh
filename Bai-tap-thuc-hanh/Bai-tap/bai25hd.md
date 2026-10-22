# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 25: TRANG DU LỊCH VỚI NAVBAR & GRID BOOTSTRAP 5

---

## THÔNG TIN CHUNG
- **Bài tập:** Bài 25 — Xây dựng Landing Page Du lịch hoàn chỉnh bằng Framework Bootstrap 5 (Navbar Responsive, Hero Box, Grid Cards & Footer)
- **Người thực hiện:** Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Công cụ quay màn hình:** OBS Studio
- **Thời lượng dự kiến:** 4 — 5 phút
- **Tập tin liên quan:** `bai25.html`

---

## HƯỚNG DẪN KỸ THUẬT QUAY BẰNG OBS CHO BẠN HOÀNG ANH
- **Scene chuẩn bị:**
  - *Scene 1:* VS Code hiển thị file mã nguồn `bai25.html` (cuộn từ thẻ `<head>`, khối `<nav>`, `<div class="hero-box">`, đến lưới `<div class="row g-4">` và thẻ `<footer`).
  - *Scene 2:* Trình duyệt mở trang web Bài 25.
- **Thao tác chuột khi demo:**
  - Trên màn hình máy tính: Rê chuột qua các nút bấm *Đặt tour ngay*, *Xem thêm* và các menu link.
  - Chuyển sang Responsive (F12): Thu nhỏ màn hình dưới 768px, nhấp chuột trực tiếp vào nút Hamburger Menu 3 gạch trên thanh Navbar để demo hiệu ứng đóng/mở menu tự động của Bootstrap 5.
- **Tác phong:** Giọng đọc đĩnh đạc, tự tin, chuyên nghiệp, thể hiện sự am hiểu sâu sắc về CSS Framework hiện đại hàng đầu thế giới — Bootstrap 5.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (ĐỌC TRỰC TIẾP)

```
[HÀNH ĐỘNG OBS: Mở màn hình hiển thị VS Code với file bai25.html]
```

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BÀN THÂN (Khoảng 30 giây)

> "Kính chào quý thầy cô và toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên môn Phát triển ứng dụng Web cơ bản.  
> 
> Trong video thuyết minh hôm nay, em rất vinh hạnh được giới thiệu tới thầy cô và các bạn **Bài tập số 25: Xây dựng Landing Page du lịch 'Khám phá Việt Nam' sử dụng thư viện CSS Framework Bootstrap 5**.  
> 
> Bootstrap 5 là framework CSS phổ biến và mạnh mẽ bậc nhất hiện nay, giúp tăng tốc độ phát triển giao diện web chuyên nghiệp với độ tương thích responsive hoàn hảo. Trong bài tập này, em đã vận dụng trọn vẹn các thành phần cốt lõi của Bootstrap 5 gồm: **Navbar điều hướng thông minh**, **khối giới thiệu Hero Section**, **hệ thống lưới Grid System 12 cột** và **thành phần Card đồ hoạ hiện đại**.  
> 
> Sau đây, em xin kính mời thầy cô cùng đi vào phần phân tích cấu trúc mã nguồn HTML."

---

```
[HÀNH ĐỘNG OBS: Rê chuột vào phần CDN ở <head> và các khối chính trong bai25.html]
```

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML & HỆ THỐNG BOOTSTRAP 5 (Khoảng 1 phút 30 giây)

> "Mời thầy cô và các bạn cùng quan sát file `bai25.html`.  
> 
> Đầu tiên, ở dòng số 8 trong thẻ `<head>`, em nhúng trực tiếp thư viện **Bootstrap 5.3.3 CSS qua CDN**. Thẻ `body` được em áp dụng các Utility class cực kỳ hữu dụng của Bootstrap: `class="bg-light d-flex flex-column min-vh-100"`. Thiết lập này giúp trang có nền xám sáng thanh lịch và tạo cấu trúc Sticky Footer — tức chân trang luôn tự động neo chặt ở đáy màn hình ngay cả khi nội dung ngắn.  
> 
> Trang web được tổ chức thành 4 phân vùng ngữ nghĩa rõ ràng:  
> 
> 1. **Thanh điều hướng (`<nav class="navbar navbar-expand-md navbar-dark bg-primary py-2">`):**  
>    - Thanh nav mang tông màu xanh dương chủ đạo `bg-primary`, chữ trắng `navbar-dark`.  
>    - Brand thương hiệu: `<a class="navbar-brand fw-bold">CSE.TLU Travel</a>`.  
>    - Nút bấm thu gọn dạng 3 gạch: `<button class="navbar-toggler">` chứa biểu tượng `navbar-toggler-icon`. Nút này kết nối với menu thông qua 2 thuộc tính dữ liệu quan trọng của Bootstrap là `data-bs-toggle="collapse"` và `data-bs-target="#navTravel"`.  
>    - Danh sách liên kết điều hướng: Được đặt trong khối `<div class="collapse navbar-collapse justify-content-end" id="navTravel">` giúp căn toàn bộ menu sang góc phải màn hình, gồm các mục *Trang chủ*, *Điểm đến*, *Tour* và *Liên hệ*.  
> 
> 2. **Khối Hero giới thiệu đầu trang (`<div class="hero-box text-center">`):**  
>    Được đặt trong `<div class="container">`. Khối này sử dụng tiêu đề lớn `<h1 class="display-6 fw-bold text-primary mb-3">Khám phá Việt Nam</h1>`, dòng mô tả ngắn và một nút kêu gọi hành động lớn mang class `btn btn-primary px-4 py-2` với dòng chữ *'Đặt tour ngay'*.  
> 
> 3. **Lưới thẻ du lịch (`<div class="row g-4 mb-5">`):**  
>    Em áp dụng hệ thống Grid 12 cột của Bootstrap. Bên trong hàng `.row` có 3 cột mang class `col-md-4`. Trên màn hình từ kích thước Medium (768px) trở lên, mỗi thẻ chiếm đúng 4/12 cột, tức chia đều thành 3 cột cân xứng. Thuộc tính `g-4` tạo khoảng cách giãn cách đều 24px giữa các thẻ.  
>    - Mỗi cột chứa một thẻ hoàn chỉnh: `<div class="card h-100 shadow-sm border-0">`. Lớp `h-100` giúp cả 3 thẻ luôn có chiều cao bằng nhau tuyệt đối.  
>    - Trên cùng của thẻ là ảnh danh thắng `<img class="card-img-top anh-card">` hiển thị lần lượt 3 kỳ quan: *Vịnh Hạ Long*, *Thác Bản Giốc*, và *Đỉnh Fansipan*.  
>    - Thân thẻ `<div class="card-body d-flex flex-column p-4">`: Chứa tiêu đề địa danh, đoạn văn mô tả có gắn class `flex-grow-1` để tự giãn nở chiếm chỗ trống, đẩy nút bấm viền xanh *'Xem thêm'* (`btn btn-sm btn-outline-primary`) xuống thẳng đáy của mọi card.  
> 
> 4. **Chân trang (`<footer class="bg-dark text-white text-center py-3 mt-auto">`):**  
>    Phủ màu đen bóng `bg-dark`, chữ mờ `opacity-75` hiển thị thông tin sinh viên và bản quyền, lớp `mt-auto` đẩy footer xuống đáy màn hình."

---

```
[HÀNH ĐỘNG OBS: Cuộn chuột vào khối <style> ở đầu file bai25.html]
```

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS TÙY BIẾN (Khoảng 1 phút)

> "Mặc dù Bootstrap 5 đã cung cấp một kho tàng class tiện ích vô cùng đồ sộ, nhưng để giao diện đạt độ hoàn thiện cao nhất, em đã viết thêm một số quy tắc CSS tinh chỉnh bên trong thẻ `<style>` từ dòng 9 đến dòng 25:  
> 
> - **Lớp `.anh-card`:** Em cố định chiều cao ảnh ở mức `height: 190px;` kết hợp thuộc tính `object-fit: cover;`. Nhờ vậy, dù kích thước gốc của 3 tấm ảnh có khác nhau thì khi hiển thị lên thẻ, ảnh vẫn luôn sắc nét, vừa khít khung hình mà không bao giờ bị méo mó hay biến dạng hình ảnh.  
> - **Lớp `.hero-box`:** Em tạo nền màu trắng tinh `#ffffff`, bo tròn mềm mại 12px `border-radius: 12px;`, đệm trong rộng rãi `padding: 45px 20px;`, và tạo hiệu ứng đổ bóng mờ ảo cao cấp `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);`.  
> - **Lớp `.card`:** Em bo tròn góc 8px và thiết lập `overflow: hidden;` để hình ảnh phía trên ôm sát hoàn hảo vào đường viền bo góc của thẻ.  
> 
> Sự kết hợp khéo léo giữa Utility class của Bootstrap và CSS custom giúp code vừa ngắn gọn, sạch sẽ lại vừa đảm bảo phong cách thiết kế độc đáo riêng biệt."

---

```
[HÀNH ĐỘNG OBS: Cuộn xuống dòng 106, chỉ vào thẻ script bootstrap.bundle.min.js]
```

### PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT & BOOTSTRAP DATA ATTRIBUTES (Khoảng 40 giây)

> "Ở dòng 106, em nhúng thư viện JavaScript `bootstrap.bundle.min.js`.  
> 
> Điểm cực kỳ mạnh mẽ của Bootstrap 5 là **cơ chế tương tác hoàn toàn tự động thông qua Data Attributes**:  
> - Trên nút bấm Hamburger menu, chúng ta khai báo `data-bs-toggle="collapse"` và `data-bs-target="#navTravel"`.  
> - Trình thông dịch của Bootstrap Bundle sẽ tự động lắng nghe sự kiện click trên nút bấm này, sau đó tự tính toán chiều cao và kích hoạt hiệu ứng trượt mở (slide down/up) cho thanh menu có id `#navTravel` mà em không cần phải viết thêm một dòng lệnh JavaScript thủ công nào.  
> - Điều này giúp giảm thiểu tối đa khả năng xảy ra lỗi mã nguồn và duy trì hiệu năng mượt mà 60 FPS."

---

```
[HÀNH ĐỘNG OBS: Chuyển màn hình sang Trình duyệt Web, bắt đầu demo thao tác]
```

### PHẦN 5: THAO TÁC DEMO TRỰC QUAN TRÊN TRÌNH DUYỆT (Khoảng 1 phút 15 giây)

> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng quan sát giao diện thực tế của website trên trình duyệt web.  
> 
> *(Hoàng Anh chỉ chuột trên màn hình máy tính)*:  
> - Phía trên cùng là thanh Navbar màu xanh đậm đà mang thương hiệu *CSE.TLU Travel*, các liên kết Trang chủ, Điểm đến, Tour, Liên hệ được căn lề phải rất thoáng mắt.  
> - Ở giữa là khối Hero *'Khám phá Việt Nam'* sáng bừng, nút 'Đặt tour ngay' nổi bật thôi thúc người dùng nhấp chuột.  
> - Phía dưới là lưới 3 danh lam thắng cảnh Việt Nam: Vịnh Hạ Long, Thác Bản Giốc và Đỉnh Fansipan. Chiều cao của cả 3 thẻ và vị trí nút bấm 'Xem thêm' đều thẳng tắp hàng ngang tăm tắp nhờ `h-100` và flexbox.  
> - Dưới cùng là chân trang đen sang trọng được ghim chặt ở đáy trang.  
> 
> *(Hoàng Anh nhấn F12, bật Device Toolbar và co nhỏ màn hình xuống kích thước điện thoại dưới 768px)*:  
> - Thầy cô có thể thấy, ngay khi độ rộng màn hình vượt qua điểm ngắt Responsive `md` (768px), thanh Navbar lập tức ẩn danh sách liên kết và xuất hiện nút Hamburger 3 gạch tinh tế.  
> *(Hoàng Anh nhấp chuột vào nút Hamburger)*:  
> - Menu điều hướng trượt xuống mượt mà, đầy đủ các liên kết. Nhấp thêm một lần nữa, menu thu gọn lại êm ái!  
> - Lưới 3 card du lịch cũng tự động chuyển đổi từ 3 cột ngang thành các khối xếp chồng theo chiều dọc một cách hoàn hảo, không hề xuất hiện lỗi vỡ giao diện hay thanh cuộn ngang."

---

### PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 giây)

> "Thưa thầy cô và các bạn, bài tập số 25 đã giúp em làm chủ hoàn toàn các kỹ năng xây dựng giao diện chuẩn thương mại bằng Bootstrap 5 hiện đại.  
> Em xin chân thành cảm ơn thầy cô đã nhiệt tình giảng dạy và hướng dẫn em trong suốt học phần. Cảm ơn các bạn đã theo dõi chuỗi video bài tập thực hành của mình!  
> Em xin kính chúc thầy cô nhiều sức khỏe và thành công. Em xin trân trọng kính chào!"
