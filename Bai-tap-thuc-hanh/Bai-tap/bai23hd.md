# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 23: THƯ VIỆN ẢNH HIỆU ỨNG HOVER

---

## THÔNG TIN CHUNG
- **Bài tập:** Bài 23 — Thư viện ảnh danh lam thắng cảnh với hiệu ứng Hover (CSS Grid & Transform Scale)
- **Người thực hiện:** Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Công cụ quay màn hình:** OBS Studio
- **Thời lượng dự kiến:** 3 — 4 phút
- **Tập tin liên quan:** `bai23.html`, `bai23.css`

---

## HƯỚNG DẪN KỸ THUẬT QUAY BẰNG OBS CHO BẠN HOÀNG ANH
- **Scene chuẩn bị:**
  - *Scene 1:* VS Code mở hai file `bai23.html` và `bai23.css`.
  - *Scene 2:* Trình duyệt mở trang web Bài 23.
- **Thao tác chuột khi demo:** Rê chuột chậm rãi qua từng bức ảnh để khán giả thấy rõ chuyển động zoom mượt mà; sau đó mở DevTools (F12) co hẹp màn hình để chứng minh responsive.
- **Tác phong:** Giọng đọc truyền cảm, hào hứng khi giới thiệu các địa danh đẹp của Việt Nam, phát âm chuẩn các thuật ngữ CSS Grid, transform scale, gradient overlay.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (ĐỌC TRỰC TIẾP)

```
[HÀNH ĐỘNG OBS: Màn hình VS Code, mở file bai23.html]
```

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BÀN THÂN (Khoảng 30 giây)

> "Xin chào quý thầy cô và các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên môn Phát triển ứng dụng Web cơ bản.  
> 
> Trong video này, em xin trân trọng giới thiệu và thuyết minh về **Bài tập số 23: Xây dựng Thư viện ảnh danh lam thắng cảnh Việt Nam với hiệu ứng tương tác Hover sinh động**.  
> 
> Bài tập này tập trung khai thác sức mạnh vượt trội của **CSS Grid** trong việc chia lưới layout đa chiều, kết hợp kỹ thuật biến đổi hình ảnh **CSS Transform: scale** và **Gradient Mask** để tạo ra một bộ sưu tập ảnh đậm chất nghệ thuật, tương tác mượt mà và hoàn toàn đáp ứng (responsive) trên mọi thiết bị.  
> 
> Sau đây, em xin đi vào chi tiết cấu trúc mã nguồn HTML."

---

```
[HÀNH ĐỘNG OBS: Cuộn chuột xem các khối mã trong bai23.html]
```

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút)

> "Mời thầy cô và các bạn cùng quan sát file `bai23.html`.  
> 
> Toàn bộ cấu trúc của trang web được thiết kế vô cùng mạch lạc và chuẩn ngữ nghĩa HTML5:  
> 
> 1. Bao ngoài cùng là khối `<div class="khung-chinh">` giúp căn giữa nội dung và khống chế độ rộng tối đa 860px để mắt người xem dễ chịu nhất.  
> 2. Phía trên là thẻ `<header class="phan-tieu-de">` gồm tiêu đề chính `<h2>` *'Thư viện ảnh — Hiệu ứng Hover'* và một đoạn văn mô tả hướng dẫn người dùng rê chuột lên ảnh.  
> 3. Trung tâm của trang web là thẻ `<main class="luoi-anh">`. Đây chính là Grid container chứa đúng 6 khối ô ảnh mang class `.o-anh`, tương ứng với 6 thắng cảnh nổi tiếng của non sông Việt Nam:  
>    - Ô số 1: Vịnh Hạ Long.  
>    - Ô số 2: Hang Sơn Đoòng.  
>    - Ô số 3: Thác Bản Giốc.  
>    - Ô số 4: Đỉnh Fansipan.  
>    - Ô số 5: Đồng bằng sông Cửu Long.  
>    - Ô số 6: Động Phong Nha.  
> 
> Bên trong mỗi `.o-anh` đều có 2 thành phần con thiết yếu:  
> - Thứ nhất là thẻ `<img>` với class `.anh-danh-thang`, đường dẫn nguồn ảnh và thẻ thuộc tính `alt` mô tả tên địa danh đầy đủ để tối ưu hóa SEO cũng như khả năng tiếp cận (Accessibility).  
> - Thứ hai là một thẻ `div` mang class `.lop-phu-ten` chứa tên địa danh viết bằng tiếng Việt in hoa dấu ngay ngắn."

---

```
[HÀNH ĐỘNG OBS: Chuyển sang file bai23.css, dừng lại ở các đoạn CSS Grid và Hover]
```

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (Khoảng 1 phút 30 giây)

> "Bây giờ, em xin chuyển sang file `bai23.css` để phân tích các kỹ thuật styling chuyên sâu:  
> 
> 1. **Thiết lập lưới đa cột bằng CSS Grid:**  
>    Ở dòng 42, khối `.luoi-anh` được em khai báo:  
>    `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;`  
>    Nhờ cú pháp `repeat(3, 1fr)`, CSS Grid sẽ tự động chia đều khoảng trống thành 3 cột bằng nhau tuyệt đối, với khoảng cách giãn cách giữa các ô là 16px vô cùng thoáng đãng.  
> 
> 2. **Kỹ thuật bao bọc và xử lý ô ảnh (.o-anh):**  
>    - Ô ảnh được gán chiều cao cố định `height: 180px`, bo tròn 4 góc `border-radius: 10px`, và đổ bóng nhẹ `box-shadow`.  
>    - **Đặc biệt lưu ý:** Em bắt buộc phải khai báo thuộc tính `position: relative;` để định vị lớp phủ tên, và cực kỳ quan trọng là `overflow: hidden;`. Thuộc tính `overflow: hidden` này đóng vai trò như một chiếc khung tranh, giữ cho tấm ảnh khi phóng to không bao giờ bị tràn hay lòi ra ngoài các góc bo viền.  
> 
> 3. **Xử lý ảnh và hiệu ứng phóng to (Zoom Effect):**  
>    - Thẻ ảnh `.anh-danh-thang` được gán `width: 100%; height: 100%; object-fit: cover;`. Thuộc tính `object-fit: cover` đảm bảo ảnh luôn lấp đầy khung hình mà không bị méo mó hay co dãn tỷ lệ khung hình.  
>    - Em thêm `transition: transform 0.4s ease;` để mọi biến đổi chuyển động diễn ra mượt mà trong 0.4 giây.  
>    - Khi rê chuột vào ô ảnh: `.o-anh:hover .anh-danh-thang { transform: scale(1.12); }`. Bức ảnh sẽ được phóng to nhẹ nhàng lên 1.12 lần (tức tăng 12% kích thước), tạo cảm giác ống kính đang zoom cận cảnh vào phong cảnh thiên nhiên.  
> 
> 4. **Tạo lớp phủ dải màu dốc Gradient bóng mờ (.lop-phu-ten):**  
>    - Lớp này được đặt `position: absolute; bottom: 0; left: 0; right: 0;`.  
>    - Em sử dụng dải màu thông minh: `background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);`. Dải màu này đen đậm ở đáy và nhạt dần lên trong suốt ở đỉnh. Nhờ lớp phủ bóng mờ này, dù bức ảnh phía sau có màu sắc sáng chói hay tối thẫm thì dòng chữ trắng tên địa danh bên trên vẫn luôn nổi bật và đọc được rõ ràng từng chữ.  
>    - Thuộc tính `pointer-events: none;` giúp chuột xuyên qua chữ mà không cản trở tương tác lên ô ảnh.  
> 
> 5. **Tối ưu Responsive linh hoạt:**  
>    - Khi màn hình nhỏ hơn 768px: Lưới tự động chuyển về 2 cột (`repeat(2, 1fr)`).  
>    - Khi màn hình nhỏ hơn 480px (điện thoại): Lưới chuyển thành 1 cột đơn (`1fr`), giúp trải nghiệm xem ảnh trên di động cực kỳ trực quan."

---

### PHẦN 4: VỀ XỬ LÝ JAVASCRIPT (Khoảng 15 giây)

> "Toàn bộ bài tập 23 này hoàn toàn thuần HTML5 và CSS3 hiện đại. Em không cần viết một dòng mã JavaScript nào mà vẫn tạo ra hiệu ứng hoạt họa 60 FPS mượt mà. Việc tận dụng trực tiếp bộ tăng tốc phần cứng GPU của trình duyệt qua `transform: scale` giúp trang web đạt hiệu năng xử lý tối đa."

---

```
[HÀNH ĐỘNG OBS: Chuyển sang trình duyệt web, thực hiện thao tác hover chuột lần lượt lên từng ảnh]
```

### PHẦN 5: THAO TÁC DEMO TRỰC QUAN TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> "Sau đây, em xin kính mời thầy cô và các bạn cùng chiêm ngưỡng kết quả thực tế trên trình duyệt web.  
> 
> *(Hoàng Anh rê chuột lên ảnh Vịnh Hạ Long, sau đó chuyển sang Hang Sơn Đoòng và Thác Bản Giốc)*:  
> - Thầy cô có thể thấy, ngay khi con trỏ chuột chạm vào bất kỳ ô ảnh nào, bức ảnh bên trong từ từ phóng lớn 12% một cách êm ái, trong khi đường viền bo góc bên ngoài vẫn cố định hoàn hảo nhờ `overflow: hidden`.  
> - Dòng chữ tên danh lam thắng cảnh màu trắng nổi bật trên nền gradient đen mờ, tạo nên cảm giác rất cao cấp và chuyên nghiệp như các tạp chí du lịch hàng đầu.  
> 
> *(Hoàng Anh nhấn phím F12, chuyển sang chế độ Responsive và co dần độ rộng màn hình)*:  
> - Khi em thu hẹp cửa sổ về kích thước máy tính bảng dưới 768px, lưới ảnh tự động chia lại thành 2 cột cân xứng.  
> - Và khi tiếp tục thu nhỏ về kích thước điện thoại 480px, thư viện ảnh lập tức chuyển thành một danh sách 1 cột cuộn dọc thẳng thớm, kích thước ảnh tự động thích ứng hoàn mỹ với chiều rộng màn hình."

---

### PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 giây)

> "Đó là toàn bộ phần trình bày về giải pháp thiết kế thư viện ảnh tương tác trong Bài tập 23 của em.  
> Em xin chân thành cảm ơn thầy cô và các bạn đã theo dõi video!  
> Em rất mong nhận được những nhận xét và góp ý từ thầy cô.  
> Xin chào và hẹn gặp lại mọi người trong video Bài tập số 24 tiếp theo!"
