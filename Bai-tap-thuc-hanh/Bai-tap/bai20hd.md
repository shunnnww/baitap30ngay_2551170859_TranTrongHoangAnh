# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 20
**Chủ đề:** Bộ sưu tập hiệu ứng hình ảnh tương tác với CSS3 Filter, Transform và JavaScript  
**Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh  
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Mã nguồn liên quan:** `bai20.html`, `bai20.css`, `bai20.js`

---

## GHI CHÚ CHUẨN BỊ TRƯỚC KHI BẤM QUAY OBS
- **Thiết lập màn hình:** Mở sẵn VS Code hiển thị 3 file (`bai20.html`, `bai20.css`, `bai20.js`) và trình duyệt mở sẵn `bai20.html` trên nền giao diện tối Dark Mode.
- **Tác phong:** Giọng nói năng động, cuốn hút, hào hứng khi chuyển đổi qua lại giữa 13 hiệu ứng hình ảnh kỳ thú; phân tích chuẩn xác các thuộc tính CSS3 hiện đại.

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU TỔNG QUAN (Khoảng 30 - 45 giây)

*(Bật OBS quay giao diện tối huyền bí của trang web Bài 20 trên trình duyệt)*

> **[LỜI THOẠI]:**  
> "Em xin kính chào Thầy/Cô cùng toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên năm 2 khoa Công nghệ Thông tin, đang tham gia học phần *Phát triển ứng dụng Web cơ bản*.  
>  
> Hôm nay, em xin được trình bày và thuyết minh cho **Bài tập số 20: Ứng dụng tương tác chuyển đổi hiệu ứng hình ảnh với CSS3 Filter và JavaScript**.  
>  
> Trước đây trong thời kỳ Web cũ, để tạo ra các hiệu ứng hình ảnh như đen trắng, làm mờ, đảo màu hay biến dạng, lập trình viên thường phải dùng các phần mềm chỉnh sửa ảnh chuyên nghiệp như Photoshop để xuất ra hàng chục file ảnh khác nhau.  
>  
> Nhưng với sự phát triển vượt bậc của **CSS3 Filter** và **Transform**, chúng ta có thể áp dụng trực tiếp tới 13 bộ lọc kỹ thuật số đỉnh cao lên một bức ảnh duy nhất ngay trên trình duyệt trong thời gian thực. Kết hợp cùng một đoạn mã JavaScript ngắn gọn, người dùng chỉ cần click chuột là hình ảnh sẽ lập tức biến hóa kỳ diệu!  
>  
> Ngay bây giờ, em xin phép mời Thầy/Cô và các bạn cùng khám phá cấu trúc mã nguồn của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai20.html`) (Khoảng 1.5 - 2 phút)

*(Chuyển sang cửa sổ VS Code, mở file `bai20.html`)*

> **[LỜI THOẠI]:**  
> "Đầu tiên là cấu trúc của file `bai20.html`. Toàn bộ giao diện được thiết kế theo phong cách Dark Mode chuyên nghiệp, nằm bên trong thẻ bao bọc `<div class="khung-chinh">`:  
>  
> - **Khung ảnh trưng bày `<div class="hop-anh">` (dòng 13 - 16):**  
>   + Ở vị trí trung tâm là bức ảnh `<img src="hoahong.gif" alt="Hoa hồng" id="anh-hoa" class="anh-hoa filter-gray">`. Bức ảnh này được gắn sẵn `id="anh-hoa"` để JavaScript tương tác và có sẵn class ban đầu là `filter-gray` tương ứng với bộ lọc đen trắng.  
>   + Ngay phía dưới bức ảnh là dòng chữ nghệ thuật `<div class="chu-special">Special For You</div>` tạo điểm nhấn lãng mạn.  
>  
> - **Khu vực thanh nút điều khiển `<div class="cac-hang-nut">` (dòng 19 - 37):**  
>   Để giao diện cân đối và chuẩn với hình ảnh minh hoạ đề bài, em đã chia 13 nút điều khiển thành 2 hàng:  
>   + **Hàng thứ nhất (dòng 20 - 29):** Gồm 8 nút: *Gray, Xray, Invert, FlipH, FlipV, Glow, Shadow, Bold Shadow*. Nút đầu tiên *Gray* có thêm class `active` thể hiện trạng thái đang được chọn.  
>   + **Hàng thứ hai (dòng 30 - 36):** Gồm 5 nút: *DropShadow, Blur, Wave, Mask, Alpha*.  
>   + Điểm thiết kế thông minh ở đây là trên mỗi thẻ `<button>`, em đều đặt thuộc tính tùy biến `data-filter="..."` lưu trữ chính xác tên kiểu hiệu ứng, ví dụ `data-filter="glow"`, `data-filter="blur"`... Điều này giúp mã JavaScript về sau trở nên cực kỳ ngắn gọn và dễ mở rộng.  
>  
> - **Khối SVG Filter phục vụ hiệu ứng sóng nước Wave (dòng 41 - 46):**  
>   Em định nghĩa một thẻ `<svg style="display: none;">` ẩn chứa bộ lọc `<filter id="wave">`. Bên trong sử dụng hai thuật toán tạo nhiễu hạt `<feTurbulence>` và dịch chuyển điểm ảnh `<feDisplacementMap>`. Bộ lọc này sẽ tạo ra hiệu ứng mặt nước gợn sóng biến dạng mà các thuộc tính CSS thông thường không làm được!  
>  
> - Cuối cùng ở dòng 48, em liên kết file script `bai20.js`."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai20.css`) (Khoảng 2 - 2.5 phút)

*(Chuyển sang file `bai20.css` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Bây giờ, chúng ta sẽ bước vào thế giới thị giác tuyệt đẹp của file `bai20.css`:  
>  
> - **Không gian nền và căn chỉnh (dòng 5 - 25):**  
>   Thẻ `body` mang màu đen sâu thẳm `#111827`, sử dụng Flexbox căn giữa toàn bộ khối ứng dụng vào trọng tâm màn hình.  
>  
> - **Hộp ảnh trưng bày và dòng chữ nghệ thuật (dòng 28 - 57):**  
>   + Hộp `.hop-anh` có màu nền xám than `#1c2226`, bo góc 12px, độ rộng tối đa 460px.  
>   + Thẻ ảnh `.anh-hoa` được trang bị hiệu ứng chuyển động mượt mà:  
>     `transition: filter 0.25s, transform 0.25s, opacity 0.25s;`  
>     Nhờ dòng lệnh này, mỗi khi người dùng bấm chuyển đổi hiệu ứng, bức ảnh sẽ biến hình trong 0.25 giây một cách êm ái chứ không bị giật cục.  
>   + Dòng chữ `.chu-special`: Em sử dụng phông Georgia in nghiêng kết hợp kỹ thuật tô màu Gradient chữ độc đáo: `background: linear-gradient(180deg, #fde047 0%, #eab308 100%);` phối hợp `-webkit-background-clip: text;` và `-webkit-text-fill-color: transparent;` giúp dòng chữ óng ánh màu vàng kim loại hoàng gia lộng lẫy!  
>  
> - **Kiểu dáng nút bấm `.btn-filter` (dòng 75 - 94):**  
>   Các nút bình thường mang màu nền tối `#232b30`, viền xám `#374151`, chữ trắng ngà. Khi được chọn (class `.active`), nút lập tức bừng sáng với màu xanh dương hiện đại `#0d6efd` kèm viền đồng màu.  
>  
> - **Bảng 13 hiệu ứng CSS3 Filter & Transform đỉnh cao (dòng 96 - 149):**  
>   1. `.filter-gray`: Dùng `filter: grayscale(1);` chuyển ảnh sang đen trắng 100%.  
>   2. `.filter-xray`: Phối hợp kép `filter: grayscale(1) invert(1);` tạo ảnh phim chụp X-quang đen trắng đảo màu.  
>   3. `.filter-invert`: Dùng `filter: invert(1);` đảo ngược toàn bộ bảng màu âm bản rực rỡ.  
>   4. `.filter-fliph`: Dùng Transform `transform: scaleX(-1);` lật gương đối xứng theo trục ngang.  
>   5. `.filter-flipv`: Dùng `transform: scaleY(-1);` lật ngược bông hoa theo trục dọc thẳng đứng.  
>   6. `.filter-glow`: Dùng `filter: drop-shadow(0 0 10px #fbbf24);` tạo quầng hào quang màu vàng rực rỡ tỏa tròn quanh viền bông hoa.  
>   7. `.filter-shadow`: `filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.6));` đổ bóng mềm tự nhiên.  
>   8. `.filter-boldshadow`: `drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.9));` tạo bóng cứng sắc nét.  
>   9. `.filter-dropshadow`: `drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.7));` tạo chiều sâu 3D tách biệt khỏi nền.  
>   10. `.filter-blur`: Dùng `filter: blur(3px);` làm mờ ảnh như đang nhìn qua làn sương mỏng.  
>   11. `.filter-wave`: Dùng `filter: url(#wave);` nhúng bộ lọc SVG tạo sóng nước biến dạng uốn éo.  
>   12. `.filter-mask`: Kết hợp `opacity: 0.4` và `filter: contrast(1.8)` tăng độ tương phản sắc nét.  
>   13. `.filter-alpha`: Dùng `opacity: 0.4` điều chỉnh độ trong suốt mờ ảo."

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (`bai20.js`) (Khoảng 1.5 - 2 phút)

*(Chuyển sang file `bai20.js` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Bây giờ, xin mời Thầy/Cô và các bạn cùng xem xét mã JavaScript trong file `bai20.js`. Toàn bộ logic tương tác chỉ gói gọn trong 17 dòng code nhưng cực kỳ tối ưu và thông minh:  
>  
> - **Lấy các phần tử DOM (dòng 5 - 6):**  
>   + `const anhHoa = document.getElementById('anh-hoa');` truy xuất phần tử ảnh.  
>   + `const cacNut = document.querySelectorAll('.btn-filter');` lấy ra danh sách NodeList chứa tất cả 13 nút bấm.  
>  
> - **Vòng lặp sự kiện `forEach` (dòng 8 - 16):**  
>   Em duyệt qua từng nút bấm bằng hàm `cacNut.forEach(...)` và gắn bộ lắng nghe sự kiện `click`:  
>   + **Thứ nhất — Cập nhật trạng thái nút Active:** Khi người dùng bấm vào một nút, câu lệnh `cacNut.forEach(n => n.classList.remove('active'))` sẽ dọn sạch class `active` ở toàn bộ 13 nút, sau đó gán lại `this.classList.add('active')` cho chính nút vừa được bấm. Nhờ đó, nút được bấm sẽ lập tức đổi sang màu xanh sáng!  
>   + **Thứ hai — Đọc loại hiệu ứng:** Em dùng phương thức `this.getAttribute('data-filter')` để lấy chuỗi định danh, ví dụ `'xray'`, `'glow'`, `'wave'`...  
>   + **Thứ ba — Áp dụng hiệu ứng lên ảnh:** Em chỉ cần gán lại class cho ảnh:  
>     `anhHoa.className = 'anh-hoa filter-' + kieuFilter;`  
>   Ngay lập tức, trình duyệt sẽ gỡ bỏ class filter cũ và nạp class filter mới, kích hoạt thuộc tính CSS tương ứng.  
>  
> Cách viết này loại bỏ hoàn toàn các câu lệnh `if...else` hay `switch...case` cồng kềnh, giúp mã nguồn đạt độ thanh lịch và tính bảo trì cao nhất!"

---

## PHẦN 5: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT (Khoảng 2.5 phút)

*(Chuyển OBS toàn màn hình sang trình duyệt mở trang `bai20.html`)*

> **[LỜI THOẠI & HÀNH ĐỘNG]:**  
> "Sau đây, em xin phép thao tác demo trực tiếp toàn bộ 13 hiệu ứng trên trình duyệt:  
>  
> **1. Quan sát trạng thái ban đầu:**  
> - Giao diện nền tối rất sang trọng và huyền bí. Bông hoa hồng ban đầu đang ở chế độ **Gray** với màu đen trắng cổ điển, nút Gray đang sáng màu xanh dương active, và dòng chữ nghệ thuật 'Special For You' vàng óng ả phía dưới.  
>  
> **2. Bấm thử các hiệu ứng màu sắc:**  
> *(Bấm nút 'Xray')*  
> - Khi em click vào nút 'Xray' -> Bông hoa lập tức chuyển sang dạng ảnh chụp phim X-quang với hai màu đen trắng đảo ngược, nút Xray sáng xanh.  
> *(Bấm nút 'Invert')*  
> - Bấm nút 'Invert' -> Toàn bộ sắc tố màu đỏ và xanh của hoa bị đảo ngược thành màu âm bản đối lập vô cùng ấn tượng!  
>  
> **3. Bấm thử các hiệu ứng biến đổi hình học (Transform):**  
> *(Bấm nút 'FlipH')*  
> - Bấm 'FlipH' -> Bông hoa quay lật ngang 180 độ theo trục X như nhìn vào gương.  
> *(Bấm nút 'FlipV')*  
> - Bấm 'FlipV' -> Bông hoa lập tức lộn ngược xuống theo chiều thẳng đứng trục Y.  
>  
> **4. Bấm thử các hiệu ứng phát sáng và đổ bóng:**  
> *(Bấm nút 'Glow')*  
> - Bấm nút 'Glow' -> Bông hoa bừng sáng một quầng hào quang màu vàng hổ phách rực rỡ bao quanh từng cánh hoa!  
> *(Bấm nút 'Shadow')*  
> - Bấm 'Shadow' -> Xuất hiện bóng đổ xám mờ mềm mại phía sau hoa.  
> *(Bấm nút 'Bold Shadow')*  
> - Bấm 'Bold Shadow' -> Bóng trở nên đen đậm và sắc nét, tạo cảm giác đồ họa Pop-art.  
> *(Bấm nút 'DropShadow')*  
> - Bấm 'DropShadow' -> Bông hoa nổi khối không gian 3 chiều ấn tượng.  
>  
> **5. Bấm thử các hiệu ứng đặc biệt:**  
> *(Bấm nút 'Blur')*  
> - Bấm 'Blur' -> Bông hoa mờ ảo mộng mị với bán kính 3px.  
> *(Bấm nút 'Wave')*  
> - Bấm 'Wave' -> Nhờ bộ lọc SVG, hình ảnh bông hoa bị biến dạng dập dềnh như đang chìm dưới làn nước sóng sánh!  
> *(Bấm nút 'Mask' và nút 'Alpha')*  
> - Bấm 'Mask' và 'Alpha' -> Độ tương phản và độ mờ trong suốt thay đổi rõ rệt.  
>  
> Các bạn có thể thấy, bất kỳ nút nào được click thì hiệu ứng đều chuyển đổi mượt mà trong 0.25 giây nhờ CSS Transition, và nút đó đều được tô sáng xanh chuẩn xác!"

---

## PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 30 giây)

> **[LỜI THOẠI]:**  
> "Thưa Thầy/Cô và các bạn, như vậy là em đã hoàn thành xuất sắc việc trình bày, giải thích mã nguồn và kiểm thử tương tác thực tế cho Bài tập số 20 — Hiệu ứng hình ảnh với CSS Filter.  
>  
> Đây cũng là bài tập khép lại chuỗi video bài tập thực hành từ Bài 16 đến Bài 20 trong chương trình học phần *Phát triển ứng dụng Web cơ bản*. Qua các bài tập này, em đã rèn luyện được tư duy lập trình vững chắc từ việc dàn layout HTML/CSS cho tới xử lý logic DOM và hiệu ứng giao diện hiện đại bằng JavaScript.  
>  
> Em xin bày tỏ lòng biết ơn sâu sắc đến Thầy/Cô đã tận tình giảng dạy và hướng dẫn em trong suốt quá trình học tập. Cảm ơn các bạn đã luôn theo dõi và ủng hộ các video của mình!  
> Em xin kính chúc Thầy/Cô luôn dồi dào sức khỏe và chúc các bạn học tập thật tốt! Em xin trân trọng cảm ơn và kính chào!"
