# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 5
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Sinh viên thực hiện:** Trần Trọng Hoàng Anh  
**Đề tài:** Thiết kế trang giới thiệu "Công ty Hoa tươi Nhân Ái" bằng HTML5 & CSS3  
**Thời lượng dự kiến:** 3 – 5 phút  

---

## CẤU TRÚC KỊCH BẢN TỔNG QUAN

| Phân đoạn | Nội dung chính | Thao tác trên màn hình (OBS) |
| :--- | :--- | :--- |
| **Phần 1** | Giới thiệu bản thân & mục tiêu bài tập | Bật webcam hoặc mở file `bai5.html` trên VS Code |
| **Phần 2** | Giải thích cấu trúc mã nguồn HTML | Cuộn chuột và bôi đen các khối phân cấp trong `bai5.html` |
| **Phần 3** | Giải thích chi tiết định dạng CSS | Chuyển sang `bai5.css`, phân tích bố cục Flexbox 2 cột, nhãn mục inline-block, list-style tùy biến |
| **Phần 4** | Thao tác demo giao diện trên trình duyệt | Mở Live Server để xem trang web hiển thị thực tế |
| **Phần 5** | Tổng kết và lời cảm ơn kết thúc | Quay lại màn hình chính và nói lời chào kết thúc |

---

## NỘI DUNG CHI TIẾT KỊCH BẢN

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 - 45 giây)

> **[Hành động]:** Mở giao diện Visual Studio Code với hai file `bai5.html` và `bai5.css`. Gương mặt rạng rỡ, giọng nói tự tin, lưu loát.

> **Lời thoại:**  
> "Xin kính chào Thầy/Cô cùng toàn thể các bạn đang theo dõi video thuyết minh thực hành!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong video này, em rất hào hứng được chia sẻ về **Bài tập thực hành số 5**: Thiết kế trang web giới thiệu doanh nghiệp cho thương hiệu *'Công ty Hoa tươi Nhân Ái'* sử dụng công nghệ HTML5 và CSS3.  
> 
> Đây là một bài tập rất thực tế, giúp chúng ta bước đầu tiếp cận với kỹ thuật dàn trang đa cột hiện đại bằng **CSS Flexbox**, phân chia màn hình thành cột hiển thị ảnh sản phẩm bên trái và cột nội dung thông tin bên phải. Bên cạnh đó, bài tập còn rèn luyện cách tạo các thẻ nhãn mục nổi bật với `inline-block`, tùy biến kiểu dáng các dấu đầu dòng của danh sách không có thứ tự (`list-style-type`), và định dạng liên kết bản quyền chuyên nghiệp.  
> 
> Sau đây, em xin kính mời Thầy/Cô và các bạn cùng đi vào chi tiết mã nguồn."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai5.html`) (Khoảng 1 - 1.5 phút)

> **[Hành động]:** Mở file `bai5.html`. Rê chuột từ trên xuống dưới, bôi đen các thẻ để người xem tiện theo dõi.

> **Lời thoại:**  
> "Đầu tiên, chúng ta cùng xem xét cấu trúc tài liệu trong file `bai5.html`.  
> 
> - Phần đầu trang `<head>` từ dòng 3 đến dòng 8 có đầy đủ các thẻ tiêu chuẩn: khai báo bộ mã `UTF-8` cho tiếng Việt, thẻ `viewport` tối ưu tỷ lệ hiển thị trên mọi thiết bị, tiêu đề `<title>` là *'Bài 5 - Trang công ty hoa tươi'*, và thẻ liên kết `<link>` đến tệp định dạng `bai5.css`.  
> 
> Phần thân trang trong thẻ `<body>` từ dòng 9 đến dòng 41 được cấu trúc vô cùng khoa học:  
> - Đầu tiên là thẻ bao bọc chung `<div class="khung-trang">` giúp gom toàn bộ bố cục vào chính giữa màn hình.  
> - Dòng 12 là thẻ tiêu đề chính `<h1>` với lớp `class="tieu-de-cong-ty"`, mang tên thương hiệu *'Công ty Hoa tươi Nhân Ái'*.  
> - Điểm cốt lõi về bố cục nằm ở dòng 14: thẻ container `<div class="khung-hai-cot">`. Thẻ này sẽ được định dạng bằng Flexbox để chia làm hai cột song song:  
>   + Cột thứ nhất bên trái từ dòng 15 đến 17 là `<div class="cot-anh">`, chứa thẻ hình ảnh bông hoa hồng duyên dáng: `<img src="../Kho-anh/Bai05/Rose.gif" alt="Hoa tươi Nhân Ái" class="anh-hoa">`.  
>   + Cột thứ hai bên phải từ dòng 19 đến 37 là `<div class="cot-noi-dung">`, chứa toàn bộ thông tin chi tiết của công ty.  
> - Trong cột nội dung, thông tin được phân nhóm rõ ràng:  
>   + Nhóm 1: Nhãn mục `<div class="nhan-muc">1. Giới thiệu</div>`, đi kèm bên dưới là danh sách không thứ tự `<ul class="danh-sach-vuong">` gồm 4 mục giới thiệu về ngày thành lập, mặt hàng cung cấp, số lượng hơn 20 cửa hàng bán lẻ và dịch vụ kết giỏ hoa theo yêu cầu.  
>   + Nhóm 2: Nhãn mục `<div class="nhan-muc">2. Liên hệ</div>`, đi kèm bên dưới là danh sách `<ul class="danh-sach-tron">` gồm số điện thoại bàn và địa chỉ tại Quận 5, TP.HCM.  
>   + Cuối cột nội dung là dòng bản quyền `<div class="dong-ban-quyen">` chứa một thẻ siêu liên kết `<a href="#">© Copyright: Công ty Hoa tươi Nhân Ái</a>`.  
> 
> Cấu trúc HTML phân cấp rất rành mạch, đúng chuẩn cấu trúc hai cột của một trang giới thiệu doanh nghiệp."

---

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai5.css`) (Khoảng 1.5 - 2 phút)

> **[Hành động]:** Chuyển tab sang file `bai5.css`. Chỉ rõ bố cục Flexbox, nhãn mục và danh sách.

> **Lời thoại:**  
> "Bây giờ, em xin chuyển sang file `bai5.css` để phân tích các kỹ thuật định dạng giao diện tinh tế của bài tập này.  
> 
> 1. **Khởi tạo và căn chỉnh khung trang (từ dòng 5 đến dòng 15):**  
>    - Thẻ `body` được thiết lập nền trắng thanh nhã `#ffffff`, phông chữ `Arial, sans-serif` hiện đại, dễ đọc, và khoảng cách đệm `padding: 40px 20px;`.  
>    - Khối `.khung-trang` có thuộc tính `max-width: 750px; margin: 0 auto;` giúp trang web luôn được căn giữa màn hình một cách gọn gàng, cân đối.  
> 
> 2. **Tiêu đề thương hiệu `.tieu-de-cong-ty` (từ dòng 17 đến dòng 24):**  
>    - `color: #C2185B;`: Em sử dụng sắc đỏ cánh sen (Fuchsia/Rose Red) rực rỡ nhưng rất sang trọng, cực kỳ phù hợp với chủ đề hoa tươi.  
>    - `font-size: 26px; font-weight: bold; text-align: center;`: Chữ to, in đậm, căn giữa tạo ấn tượng mạnh mẽ ngay từ ánh nhìn đầu tiên.  
> 
> 3. **Bố cục hai cột với Flexbox hiện đại `.khung-hai-cot` (từ dòng 26 đến dòng 47):**  
>    - `display: flex;`: Kích hoạt cơ chế Flexbox container. Thay vì phải dùng kỹ thuật float truyền thống dễ gây vỡ layout, flexbox giúp chia cột cực kỳ mượt mà.  
>    - `gap: 30px;`: Tạo khoảng cách giãn cách 30px giữa cột ảnh và cột chữ một cách tự nhiên.  
>    - `align-items: flex-start;`: Căn hai cột bắt đầu gióng hàng từ mép trên cùng.  
>    - Cột ảnh `.cot-anh`: Được gán `flex-shrink: 0; width: 220px;` để cố định chiều rộng 220px, không bị co lại khi màn hình thay đổi. Ảnh `.anh-hoa` có thuộc tính `max-width: 100%; height: auto;` giúp ảnh luôn vừa khít cột.  
>    - Cột nội dung `.cot-noi-dung`: Được gán `flex: 1;`, cho phép nó linh hoạt chiếm trọn toàn bộ khoảng không gian còn lại bên phải.  
> 
> 4. **Tạo kiểu cho các nhãn mục `.nhan-muc` (từ dòng 49 đến dòng 60):**  
>    - `background-color: #FFC0CB;`: Nền màu hồng phấn (Pink) ngọt ngào, tạo sự đồng bộ với tiêu đề chính.  
>    - `font-weight: bold; font-style: italic;`: Vừa in đậm vừa in nghiêng để tạo sự khác biệt.  
>    - `display: inline-block;`: Đây là thuộc tính mấu chốt! Nó giúp dải nền màu hồng chỉ ôm sát vừa khít phần chữ, thay vì kéo dài hết toàn bộ bề ngang của dòng.  
>    - `padding: 4px 12px; border-radius: 4px;`: Bo góc nhẹ 4px và tạo khoảng đệm xung quanh cho nhãn mục trông giống như một chiếc tag xinh xắn.  
> 
> 5. **Tùy biến dấu đầu dòng danh sách (từ dòng 62 đến dòng 81):**  
>    - Danh sách mục 1 `.danh-sach-vuong`: Sử dụng `list-style-type: square;` để biến các dấu bullet thành hình vuông đặc trưng.  
>    - Danh sách mục 2 `.danh-sach-tron`: Sử dụng `list-style-type: circle;` để tạo bullet dạng hình tròn rỗng. Sự khác biệt về bullet này giúp người xem phân biệt được hai nhóm thông tin một cách trực quan.  
>    - Thuộc tính `line-height: 1.8;` cho khoảng cách dòng rộng rãi, dễ theo dõi từng ý.  
> 
> 6. **Liên kết bản quyền `.dong-ban-quyen` (từ dòng 83 đến dòng 93):**  
>    - Căn giữa cột nội dung, thẻ `<a>` có màu xanh dương `#0000EE`, gạch chân `text-decoration: underline;` và in đậm `font-weight: bold`, thể hiện đúng quy ước nhận diện liên kết trên website."

---

### PHẦN 4: HƯỚNG DẪN THAO TÁC DEMO TRÊN TRÌNH DUYỆT (Khoảng 45 giây)

> **[Hành động]:** Mở trình duyệt hiển thị trang `bai5.html`. Rê chuột chỉ vào hai cột, các bullet và liên kết bản quyền.

> **Lời thoại:**  
> "Sau đây, em xin mời Thầy/Cô cùng các bạn chuyển sang màn hình trình duyệt để theo dõi kết quả thực tế của Bài tập 5!  
> 
> *(Màn hình hiển thị trang web hoàn thiện)*  
> 
> Mọi người có thể thấy rõ:  
> - Tiêu đề *Công ty Hoa tươi Nhân Ái* màu hồng cánh sen nổi bật, căn giữa hoàn hảo.  
> - Bố cục hai cột hiển thị cực kỳ chuẩn xác và hài hòa: Bên trái là bức ảnh hoa hồng tươi tắn với độ rộng 220px, bên phải là toàn bộ khối thông tin giới thiệu.  
> - Hai chiếc nhãn nền hồng phấn *'1. Giới thiệu'* và *'2. Liên hệ'* ôm gọn chữ rất bắt mắt.  
> - Các dấu đầu dòng ở phần giới thiệu là các khối hình vuông nhỏ, trong khi ở phần liên hệ là các vòng tròn rỗng, đúng như yêu cầu của đề bài.  
> - Cuối cùng, dòng bản quyền © Copyright nằm cân đối ở phía dưới với màu xanh liên kết rõ ràng.  
> - Tổng thể trang web mang lại cảm giác nhẹ nhàng, nữ tính, tinh tế và đậm nét thẩm mỹ của một cửa hàng hoa tươi chuyên nghiệp."

---

### PHẦN 5: LỜI CẢM ƠN KẾT THÚC (Khoảng 20 - 30 giây)

> **[Hành động]:** Chuyển lại góc camera hoặc màn hình chính, nét mặt tươi vui, chắp tay hoặc gật đầu chào lịch sự.

> **Lời thoại:**  
> "Như vậy là em đã hoàn thành phần trình bày chi tiết về Bài tập thực hành số 5, đồng thời cũng khép lại chặng đường 5 bài tập thực hành giao diện Web cơ bản đầu tiên.  
> Qua chuỗi 5 bài tập này, em đã nắm vững từ kỹ thuật cấu trúc tài liệu HTML5 ngữ nghĩa, định dạng typography, dàn trang với Float và Flexbox, cho đến phối màu và hiệu ứng CSS hiện đại.  
> 
> Em xin chân thành gửi lời cảm ơn sâu sắc đến Thầy/Cô đã tận tình giảng dạy và hướng dẫn chúng em. Cảm ơn các bạn đã luôn theo dõi và ủng hộ các video của mình!  
> 
> Xin kính chúc Thầy/Cô dồi dào sức khỏe và chúc các bạn học tập thật tốt! Xin chào và hẹn gặp lại mọi người trong những bài tập tiếp theo!"
