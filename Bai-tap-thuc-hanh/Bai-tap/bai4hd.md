# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 4
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Sinh viên thực hiện:** Trần Trọng Hoàng Anh  
**Đề tài:** Thiết kế trang giới thiệu "Đà Nẵng – Thành phố đáng sống" bằng HTML5 & CSS3  
**Thời lượng dự kiến:** 3 – 5 phút  

---

## CẤU TRÚC KỊCH BẢN TỔNG QUAN

| Phân đoạn | Nội dung chính | Thao tác trên màn hình (OBS) |
| :--- | :--- | :--- |
| **Phần 1** | Giới thiệu bản thân & mục tiêu bài tập | Bật webcam hoặc mở file `bai4.html` trên VS Code |
| **Phần 2** | Giải thích cấu trúc mã nguồn HTML | Cuộn chuột và bôi đen các khối thẻ trong `bai4.html` |
| **Phần 3** | Giải thích chi tiết định dạng CSS | Chuyển sang `bai4.css`, phân tích full-width banner, Drop Cap màu tương phản, thanh phụ căn phải |
| **Phần 4** | Thao tác demo giao diện trên trình duyệt | Bật Open with Live Server để kiểm tra giao diện thực tế |
| **Phần 5** | Tổng kết và lời cảm ơn kết thúc | Quay lại màn hình chính và nói lời chào kết thúc |

---

## NỘI DUNG CHI TIẾT KỊCH BẢN

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 - 45 giây)

> **[Hành động]:** Mở sẵn Visual Studio Code với file `bai4.html` và `bai4.css`. Giọng nói tràn đầy năng lượng, tự tin và hào hứng.

> **Lời thoại:**  
> "Xin chào quý Thầy/Cô cùng toàn thể các bạn sinh viên đang theo dõi video!  
> Em tên là **Trần Trọng Hoàng Anh**.  
> 
> Trong video ngày hôm nay, em rất vui được tiếp tục đồng hành cùng mọi người trong **Bài tập thực hành số 4**: Xây dựng trang web giới thiệu điểm đến du lịch nổi tiếng *'Đà Nẵng – Thành phố đáng sống'*.  
> 
> Khác với phong cách dàn trang trôi ảnh ở các bài trước, bài tập này hướng đến phong cách thiết kế tạp chí du lịch hiện đại (Modern Travel Magazine layout): sử dụng hình ảnh banner lớn toàn cảnh (full-width banner) trải rộng 100%, kết hợp thanh tiêu đề phụ căn phải tạo nhịp điệu bất đối xứng, phối hợp màu sắc tương phản giữa sắc xanh dương chủ đạo và ký tự khởi đầu Drop Cap màu đỏ rực rỡ.  
> 
> Sau đây, em xin mời Thầy/Cô và các bạn cùng đi vào chi tiết mã nguồn của bài."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai4.html`) (Khoảng 1 - 1.5 phút)

> **[Hành động]:** Rê chuột cuộn chậm qua từng dòng mã trong file `bai4.html`.

> **Lời thoại:**  
> "Đầu tiên là cấu trúc HTML trong file `bai4.html`.  
> 
> - Thẻ `<head>` từ dòng 3 đến dòng 8 vẫn tuân thủ đầy đủ các tiêu chuẩn hiện đại: mã hóa `UTF-8` hỗ trợ tiếng Việt có dấu, viewport responsive, tiêu đề trang `<title>` là *'Bài 4 - Trang giới thiệu thành phố Đà Nẵng'*, và liên kết file định dạng ngoài `bai4.css`.  
> 
> Bước vào phần nội dung hiển thị trong `<body>` từ dòng 9 đến dòng 30:  
> - Toàn bộ cấu trúc được đặt trong một thẻ container `<div class="khung-bai-viet">` để khống chế bề rộng và căn giữa trang.  
> - Dòng 12 đến 15 là thẻ tiêu đề chính `<h1>` với `class="tieu-de"`. Em sử dụng thẻ ngắt dòng `<br>` để chia tiêu đề thành 2 dòng cân đối: dòng trên là tên thành phố *'ĐÀ NẴNG'*, và dòng dưới là khẩu hiệu *'THÀNH PHỐ ĐÁNG SỐNG'*.  
> - Dòng 17 là thẻ ảnh `<img src="../Kho-anh/Bai04/da-nang.jpg" alt="Thành phố Đà Nẵng" class="anh-thanh-pho">`. Khác với bài trước đặt ảnh trôi một bên, ở đây ảnh được đặt nằm ngang độc lập ngay dưới tiêu đề, đóng vai trò như một bức tranh toàn cảnh (panorama banner) thu hút trọn vẹn thị giác người xem.  
> - Dòng 19 đến 21 là đoạn văn đầu tiên `<p class="doan-van">` giới thiệu về vị trí địa lý của Đà Nẵng bên bờ sông Hàn. Các địa danh tiêu biểu như **Cầu Rồng**, **Cầu Sông Hàn**, **Bà Nà Hills**, và **bán đảo Sơn Trà** được em đóng gói cẩn thận trong các thẻ ngữ nghĩa `<strong>` để nhấn mạnh từ khóa và làm đậm chữ nổi bật.  
> - Dòng 23 là một điểm nhấn cấu trúc: thẻ `<div class="thanh-tieu-de-phu">Cầu Rồng — biểu tượng sông Hàn</div>`. Thẻ này đóng vai trò là một dải ruy-băng phân cách các chủ đề nhỏ trong bài viết.  
> - Dòng 25 đến 27 là đoạn văn thứ hai `<p class="doan-van">` miêu tả trải nghiệm xem Cầu Rồng phun lửa vào cuối tuần và nét văn hóa ẩm thực đặc trưng với **mì Quảng**, **bánh xèo**, **hải sản tươi ngon** – tất cả đều được in đậm với thẻ `<strong>`.  
> 
> Cấu trúc tài liệu rất rõ ràng, phân cấp logic và giàu ngữ nghĩa."

---

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai4.css`) (Khoảng 1.5 - 2 phút)

> **[Hành động]:** Nhấp chuột chuyển sang tab `bai4.css`. Chỉ rõ từng khối CSS và cách phối màu.

> **Lời thoại:**  
> "Bây giờ, em xin chuyển sang file `bai4.css` để phân tích các quyết định thiết kế giao diện.  
> 
> 1. **Tổng thể trang `body` (từ dòng 5 đến dòng 10):**  
>    - `background-color: #f4f8fb;`: Thay vì dùng màu trắng tinh đơn điệu, em chọn một tông màu trắng ánh xanh băng rất nhẹ, mang lại cảm giác thanh thoát, mát mẻ và tôn lên vẻ đẹp của thành phố biển.  
>    - `font-family: Arial, sans-serif;`: Sử dụng phông chữ không chân hiện đại, các nét chữ thẳng thớm, trẻ trung, rất phù hợp cho các trang tin tức năng động.  
>    - `padding: 30px 15px;`: Đảm bảo nội dung luôn cách lề màn hình một khoảng thoáng đãng.  
> 
> 2. **Khung thẻ `.khung-bai-viet` (từ dòng 12 đến dòng 20):**  
>    - `max-width: 800px; margin: 0 auto;`: Khung rộng tối đa 800px và tự động căn giữa.  
>    - `background: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);`: Nền trắng với bóng đổ xám nhẹ tạo hiệu ứng một tấm thẻ card thanh lịch nổi trên nền xanh băng.  
> 
> 3. **Tiêu đề chính `.tieu-de` (từ dòng 22 đến dòng 31):**  
>    - `color: #1565C0;`: Màu xanh dương đậm rực rỡ, tượng trưng cho biển trời Đà Nẵng.  
>    - `text-transform: uppercase;`: Tự động viết hoa toàn bộ chữ cái để tăng phần trang trọng.  
>    - `text-align: center; font-size: 26px; line-height: 1.4;`: Căn giữa, cỡ chữ lớn và khoảng cách dòng thông thoáng.  
> 
> 4. **Banner ảnh toàn cảnh `.anh-thanh-pho` (từ dòng 33 đến dòng 38):**  
>    - `width: 100%;`: Bức ảnh mở rộng trọn vẹn 100% bề ngang của khung bài viết.  
>    - `display: block; border-radius: 8px; margin-bottom: 20px;`: Hiển thị dạng khối, bo tròn 4 góc 8px ăn khớp hoàn hảo với khung ngoài.  
> 
> 5. **Đoạn văn và kỹ thuật Drop Cap màu tương phản (từ dòng 40 đến dòng 57):**  
>    - Các đoạn văn `.doan-van` được căn đều hai lề `text-align: justify;` với khoảng cách dòng `line-height: 1.7` cho trải nghiệm đọc mượt mà.  
>    - Tại bộ chọn phần tử giả `.doan-van::first-letter`, em thiết lập:  
>      `font-size: 48px; font-weight: bold; float: left; line-height: 1; margin-right: 6px;`  
>      Và điểm đặc biệt nhất chính là `color: #C62828;` (màu đỏ đô rực rỡ). Chữ hoa đầu dòng màu đỏ tạo nên sự đối lập mạnh mẽ và cực kỳ nổi bật trên tổng thể tông xanh chủ đạo của bài viết, thu hút ngay ánh nhìn của độc giả.  
> 
> 6. **Thanh tiêu đề phụ phá cách `.thanh-tieu-de-phu` (từ dòng 59 đến dòng 68):**  
>    - `background-color: #1565C0; color: #FFFFFF;`: Nền xanh dương chữ trắng đồng điệu với màu tiêu đề chính.  
>    - `text-align: right;`: Đây là điểm phá cách! Việc căn lề phải cho tiêu đề phụ tạo nên sự đối trọng với khối văn bản căn đều, làm cho bố cục trang web không bị khô cứng mà sinh động, hiện đại hơn rất nhiều."

---

### PHẦN 4: HƯỚNG DẪN THAO TÁC DEMO TRÊN TRÌNH DUYỆT (Khoảng 45 giây)

> **[Hành động]:** Mở trình duyệt hiển thị trang `bai4.html`. Cuộn chuột từ trên xuống dưới, chỉ vào các từ khóa in đậm và thanh tiêu đề phụ.

> **Lời thoại:**  
> "Sau đây, em xin phép khởi chạy trang web trên trình duyệt để chúng ta cùng thưởng thức kết quả thực tế!  
> 
> *(Màn hình trình duyệt xuất hiện)*  
> 
> Mời Thầy/Cô và các bạn cùng nhìn lại tổng thể:  
> - Phía trên cùng là tiêu đề hai dòng *ĐÀ NẴNG - THÀNH PHỐ ĐÁNG SỐNG* xanh thẫm, vững chãi và cân xứng.  
> - Bức ảnh cầu sông Hàn và toàn cảnh thành phố trải dài 100% sắc nét, góc bo tròn mềm mại.  
> - Chữ **'Đ'** và chữ **'M'** ở đầu hai đoạn văn xuất hiện dưới dạng Drop Cap màu đỏ rực rỡ, ôm sát lấy các dòng chữ phía sau.  
> - Các cụm từ quan trọng như Cầu Rồng, Bà Nà Hills, Mì Quảng... hiện lên in đậm rõ nét, giúp người đọc nắm bắt thông tin cực nhanh.  
> - Dải ruy-băng xanh căn phải *'Cầu Rồng — biểu tượng sông Hàn'* phân tách hai đoạn văn một cách rất duyên dáng và chuyên nghiệp."

---

### PHẦN 5: LỜI CẢM ƠN KẾT THÚC (Khoảng 20 - 30 giây)

> **[Hành động]:** Quay lại màn hình chính, nét mặt thân thiện, chào kết thúc.

> **Lời thoại:**  
> "Đó là toàn bộ phần trình bày về Bài tập số 4 của em.  
> Qua bài này, em đã làm chủ kỹ thuật thiết kế banner toàn chiều rộng (full-width), phối màu tương phản giữa xanh và đỏ, cũng như kỹ thuật tạo nhịp điệu thị giác với tiêu đề phụ căn phải.  
> 
> Em xin chân thành cảm ơn Thầy/Cô cùng các bạn đã quan tâm theo dõi!  
> Hẹn gặp lại mọi người trong video Bài tập số 5 - bài cuối cùng trong chuỗi bài tập mở đầu này!"
