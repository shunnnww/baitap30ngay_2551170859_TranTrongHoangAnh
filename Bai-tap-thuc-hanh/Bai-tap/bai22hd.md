# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 22: CHẾ ĐỘ SÁNG / TỐI (DARK / LIGHT MODE)

---

## THÔNG TIN CHUNG
- **Bài tập:** Bài 22 — Chuyển đổi giao diện Sáng / Tối bằng CSS Variables kết hợp JavaScript
- **Người thực hiện:** Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Công cụ quay màn hình:** OBS Studio
- **Thời lượng dự kiến:** 3.5 — 4.5 phút
- **Tập tin liên quan:** `bai22.html`, `bai22.css`, `bai22.js`

---

## HƯỚNG DẪN KỸ THUẬT QUAY BẰNG OBS CHO BẠN HOÀNG ANH
- **Scene chuẩn bị:**
  - *Scene 1:* VS Code mở 3 file: `bai22.html`, `bai22.css`, `bai22.js` (hoặc mở lần lượt từng file khi nói đến phần tương ứng).
  - *Scene 2:* Trình duyệt mở trang web Bài 22.
- **Thao tác tương tác:** Khi demo, nhấp chuột vào công tắc Toggle Switch nhiều lần để người xem cảm nhận được độ mượt mà của hiệu ứng chuyển dải màu (transition 0.3s).
- **Tác phong:** Giọng đọc tràn đầy năng lượng, phát âm chính xác các thuật ngữ như CSS Variables, root, DOM classList, transition.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (ĐỌC TRỰC TIẾP)

```
[HÀNH ĐỘNG OBS: Màn hình VS Code, mở sẵn file bai22.html]
```

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BÀN THÂN (Khoảng 30 giây)

> "Xin kính chào thầy cô và các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên môn Phát triển ứng dụng Web cơ bản.  
> 
> Hôm nay, em rất hào hứng được gửi đến thầy cô và các bạn video thuyết minh về **Bài tập số 22: Thiết kế giao diện chuyển đổi Chế độ Sáng / Tối (Light & Dark Theme)**.  
> 
> Chế độ Dark Mode hiện nay là một tiêu chuẩn trải nghiệm người dùng (UX) cực kỳ quan trọng trên các nền tảng web hiện đại giúp giảm mỏi mắt và tiết kiệm năng lượng. Trong bài tập này, em đã ứng dụng kỹ thuật **Biến CSS (CSS Variables)** kết hợp với **lập trình JavaScript bắt sự kiện DOM** để tạo ra một tính năng chuyển đổi giao diện mượt mà, chuyên nghiệp.  
> 
> Sau đây, em xin phép bắt đầu với phần cấu trúc HTML của bài tập."

---

```
[HÀNH ĐỘNG OBS: Cuộn và chỉ chuột vào các dòng code trong bai22.html]
```

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút)

> "Mời thầy cô và các bạn cùng nhìn vào file `bai22.html`.  
> 
> Ngay tại thẻ mở `<html lang="vi" class="toi">` và thẻ `<body class="toi">`, em đã gắn sẵn class `.toi`. Điều này giúp trang web mặc định khởi động ngay ở chế độ Dark Mode huyền bí và hiện đại.  
> 
> Nội dung chính của trang được gói gọn bên trong thẻ `<div class="the-chinh">`:  
> 
> 1. **Phần đầu thẻ (`<header class="dau-the">`):**  
>    Gồm tiêu đề chính `<h2>` mang tên *'Chế độ Tối / Sáng'* và một cụm công tắc gạt dạng chuyển đổi `<label class="cong-tac-gat">`. Bên trong nhãn này là thẻ `<input type="checkbox" id="nut-gat" checked>` kèm theo một thẻ `<span>` mang class `.thanh-gat`. Nhờ thuộc tính `checked`, nút gạt được bật sẵn để khớp với theme tối ban đầu.  
> 
> 2. **Danh sách thẻ nội dung (`<div class="danh-sach-the">`):**  
>    Em bố trí 3 khối thẻ con mang class `.the-muc`. Mỗi thẻ đại diện cho một kiến thức cốt lõi của bài học:  
>    - Thẻ thứ nhất nói về *Biến CSS (CSS Variables)*.  
>    - Thẻ thứ hai nói về *Chuyển đổi trạng thái bằng JavaScript*.  
>    - Thẻ thứ ba nói về *Hiệu ứng chuyển màu mượt transition*.  
> 
> 3. **Phần chân thẻ (`<footer class="chan-the">`):**  
>    Chứa một thẻ `<span id="dong-trang-thai">` dùng để hiển thị câu thông báo trạng thái hiện tại đang bật chế độ Tối hay chế độ Sáng.  
> 
> Cuối cùng, ở dòng 45 là thẻ script nhúng file `bai22.js` để tiếp nhận các hành động người dùng."

---

```
[HÀNH ĐỘNG OBS: Chuyển sang file bai22.css, chỉ vào khối :root và body.toi]
```

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (Khoảng 1 phút 30 giây)

> "Bây giờ, em xin chuyển sang file `bai22.css` — trái tim điều khiển màu sắc của ứng dụng này.  
> 
> **Điểm sáng tạo cốt lõi ở đây là em sử dụng hệ thống Biến CSS:**  
> - Tại bộ chọn `:root` (từ dòng 6 đến 15), em định nghĩa bảng màu cho **Chế độ Sáng**: Nền trang web `--nen-trang` là màu trắng xám `#f1f5f9`, nền thẻ chính `--nen-the-chinh` là màu trắng tinh `#ffffff`, màu chữ chính `--chu-chinh` là xanh đen `#1e293b`, và màu tiêu đề thẻ là xanh dương `#2563eb`.  
> - Ngay bên dưới, tại bộ chọn `body.toi` (từ dòng 18 đến 27), em **ghi đè toàn bộ các biến màu này sang bảng màu Tối**: Nền trang đổi thành xanh đen vũ trụ sâu thẳm `#0b0f19`, nền thẻ chính là `#0f172a`, viền thẻ là `#334155`, chữ chuyển sang màu trắng tinh `#ffffff`, và tiêu đề thẻ chuyển thành xanh dương sáng `#60a5fa`.  
> 
> Nhờ cách làm này, toàn bộ các selector CSS trong trang chỉ cần tham chiếu qua hàm `var(...)`. Khi đổi chế độ, ta không cần phải viết lại CSS cho từng thẻ mà chỉ cần thay đổi class trên thẻ `body`.  
> 
> **Kỹ thuật chuyển động mượt mà (Smooth Transition):**  
> Tại selector toàn cục `*` ở dòng 33, em thiết lập:  
> `transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;`  
> Nhờ có dòng lệnh này, mỗi khi chuyển theme, màu nền, màu chữ và viền sẽ chuyển đổi êm dịu trong 0.3 giây mà không bị chớp hay giật khung hình.  
> 
> **Thiết kế công tắc Toggle Switch tinh tế:**  
> Em ẩn thẻ checkbox mặc định bằng `opacity: 0; width: 0; height: 0;`. Thay vào đó, em dùng thẻ `.thanh-gat` bo tròn dạng viên thuốc và tạo nút tròn màu trắng bằng pseudo-element `::before`. Khi người dùng bật công tắc, selector `input:checked + .thanh-gat` sẽ đổi nền sang xanh `#2563eb` và đẩy nút tròn dịch chuyển sang phải 22px bằng thuộc tính `transform: translateX(22px);`."

---

```
[HÀNH ĐỘNG OBS: Chuyển sang file bai22.js, chỉ rõ từng dòng lệnh]
```

### PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (Khoảng 45 giây)

> "Tiếp theo, em xin giải thích file xử lý logic `bai22.js`. Code rất ngắn gọn, xúc tích nhưng hiệu quả tối đa:  
> 
> - Ở dòng 5 và 6, em dùng phương thức `document.getElementById` để bắt lấy 2 phần tử DOM cần thao tác: Nút checkbox `#nut-gat` và dòng chữ thông báo `#dong-trang-thai`.  
> - Sau đó, em đăng ký sự kiện `change` trên nút gạt bằng phương thức `addEventListener`:  
>   + Khi người dùng gạt công tắc, hàm callback được kích hoạt.  
>   + Nếu `this.checked` là `true`: JavaScript sẽ thực thi `document.body.classList.add('toi')` để gắn class `.toi` vào thẻ body, đồng thời đổi nội dung text thành: *'Đây là giao diện ở chế độ TỐI (đang bật).'*.  
>   + Ngược lại, nếu `this.checked` là `false`: JavaScript lập tức gọi `document.body.classList.remove('toi')` để gỡ bỏ class `.toi`, giao diện tự động quay về biến màu mặc định trong `:root`, và dòng trạng thái đổi thành: *'Đây là giao diện ở chế độ SÁNG.'*."

---

```
[HÀNH ĐỘNG OBS: Chuyển màn hình sang Trình duyệt Web, thực hiện gạt công tắc demo]
```

### PHẦN 5: THAO TÁC DEMO TRỰC QUAN TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> "Bây giờ, em xin chuyển sang trình duyệt để demo trực quan tính năng này.  
> 
> Khi vừa load trang, chúng ta thấy một giao diện Dark Mode đậm chất công nghệ với tông màu xanh đen sang trọng, các thẻ bo góc nổi khối 3D đổ bóng rất đẹp mắt. Dòng trạng thái ở dưới thông báo rõ ràng: *'Đây là giao diện ở chế độ TỐI (đang bật)'*.  
> 
> *(Hoàng Anh nhấp chuột vào nút gạt chuyển sang Sáng)*:  
> - Ngay lập tức, thanh gạt chuyển sang xám và nút tròn trượt sang trái. Toàn bộ nền trang web chuyển sang gam màu sáng thanh lịch, màu nền các thẻ con và màu chữ biến đổi êm dịu trong 0.3 giây. Dòng trạng thái bên dưới cập nhật ngay thành *'Đây là giao diện ở chế độ SÁNG'*.  
> 
> *(Hoàng Anh nhấp gạt lại về Tối)*:  
> - Gạt trở lại, giao diện lại biến chuyển nhịp nhàng sang Dark Mode.  
> - Bố cục trang được căn chính giữa màn hình bằng Flexbox hoàn hảo, hoạt động mượt mà trên mọi độ phân giải."

---

### PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 giây)

> "Qua bài tập này, em đã nắm vững cách khai báo biến CSS Custom Properties, kỹ thuật tạo animation cho nút gạt toggle và cách phối hợp JavaScript để quản lý trạng thái giao diện một cách sạch sẽ và chuyên nghiệp nhất.  
> Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi video thuyết trình của em!  
> Hẹn gặp lại thầy cô trong video Bài 23 tiếp theo!"
