# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 1
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Sinh viên thực hiện:** Trần Trọng Hoàng Anh  
**Đề tài:** Thiết kế trang thơ "Bốn mùa" bằng HTML5 & CSS3  
**Thời lượng dự kiến:** 3 – 5 phút  

---

## CẤU TRÚC KỊCH BẢN TỔNG QUAN

| Phân đoạn | Nội dung chính | Thao tác trên màn hình (OBS) |
| :--- | :--- | :--- |
| **Phần 1** | Giới thiệu bản thân & mục tiêu bài tập | Bật webcam hoặc mở file `bai1.html` trên VS Code |
| **Phần 2** | Giải thích cấu trúc mã nguồn HTML | Cuộn chuột và bôi đen các thẻ HTML trong `bai1.html` |
| **Phần 3** | Giải thích chi tiết định dạng CSS | Chuyển tab sang file `bai1.css`, giải thích từng selector |
| **Phần 4** | Thao tác demo giao diện trên trình duyệt | Bật Open with Live Server trên trình duyệt để kiểm tra |
| **Phần 5** | Tổng kết và lời cảm ơn kết thúc | Quay lại màn hình chính và nói lời chào kết thúc |

---

## NỘI DUNG CHI TIẾT KỊCH BẢN

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 - 45 giây)

> **[Hành động]:** Mở trình soạn thảo Visual Studio Code với dự án chứa hai file `bai1.html` và `bai1.css`. Giọng nói rõ ràng, tự tin, nét mặt tươi tắn.

> **Lời thoại:**  
> "Xin kính chào Thầy/Cô cùng toàn thể các bạn đang theo dõi video!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong video ngày hôm nay, em xin phép được trình bày và thuyết minh về sản phẩm **Bài tập thực hành số 1**: Xây dựng trang hiển thị bài thơ mang tên *'Bốn mùa'* sử dụng ngôn ngữ đánh dấu HTML5 và định dạng phong cách giao diện với CSS3.  
> 
> Mục tiêu của bài tập này là giúp chúng ta làm quen với việc cấu trúc một đoạn văn bản nghệ thuật, sử dụng các thẻ tiêu đề, ngắt dòng, đường kẻ phân cách ngữ nghĩa trong HTML, đồng thời rèn luyện kỹ năng định dạng màu sắc, căn chỉnh văn bản, viền khung và màu nền bằng CSS cơ bản.  
> 
> Sau đây, em xin đi vào chi tiết cấu trúc mã nguồn của bài tập."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai1.html`) (Khoảng 1 - 1.5 phút)

> **[Hành động]:** Trỏ chuột vào file `bai1.html`. Rê chuột từ dòng 1 xuống dòng 32 để người xem tiện theo dõi.

> **Lời thoại:**  
> "Đầu tiên, chúng ta cùng quan sát file `bai1.html`.  
> 
> - Ở dòng đầu tiên, em sử dụng khai báo `<!DOCTYPE html>` để chuẩn hóa tài liệu theo tiêu chuẩn HTML5 hiện đại nhất.  
> - Phần thẻ `<head>` từ dòng 3 đến dòng 8 chứa các thẻ khai báo siêu dữ liệu cần thiết: bảng mã ký tự tiếng Việt `UTF-8` giúp không bị lỗi font dấu, thẻ `viewport` hỗ trợ hiển thị trên nhiều kích thước màn hình, tiêu đề trang web đặt trong thẻ `<title>` là *'Bài 1 - Trang thơ "Bốn mùa"'*, và đặc biệt là thẻ `<link rel="stylesheet" href="bai1.css">` để liên kết trực tiếp với file CSS rời mà em đã viết.  
> 
> Tiếp theo, bước vào phần nội dung hiển thị trong thẻ `<body>`:  
> - Toàn bộ bài thơ được em gói trọn vẹn trong một thẻ bao bọc chung là `<div class="khung-bai-tho">`. Việc bọc thẻ `div` này giúp chúng ta dễ dàng định kích thước, viền và căn chỉnh bài thơ nằm gọn gàng giữa trang.  
> - Dòng 11 là thẻ tiêu đề chính `<h1>` với `class="tieu-de"` chứa nội dung **BỐN MÙA** in hoa nổi bật.  
> - Bài thơ gồm có 3 khổ:  
>   + Khổ 1 gồm 3 câu thơ đầu: *'Xuân về hoa nở khắp trời / Hạ sang nắng cháy rạng ngời phố quen / Thu về lá rụng bên thềm'*. Em đặt trong thẻ đoạn văn `<p>` với lớp `class="mau-xanh"`. Để ngắt xuống dòng cho từng câu thơ lục bát đúng nhịp điệu mà không tạo khoảng cách đoạn quá lớn, em đã dùng thẻ đơn `<br>` ở cuối mỗi câu.  
>   + Ngăn cách giữa khổ 1 và khổ 2 là một thẻ kẻ ngang `<hr>` ở dòng 17, giúp tạo đường phân giới thị giác trang nhã.  
>   + Khổ 2 từ dòng 18 đến dòng 22 mô tả mùa đông: *'Đông sang gió lạnh bên em đợi chờ / Bốn mùa là bốn giấc mơ / Thời gian đi mãi ta chờ đợi ai'*. Khổ này được gắn `class="mau-do"` để tạo sự chuyển đổi màu sắc cảm xúc.  
>   + Tiếp tục là một thẻ `<hr>` phân cách.  
>   + Và khổ thứ 3 từ dòng 24 đến dòng 28: *'Một năm rồi lại một năm / Vẫn còn câu hát thì thầm quê hương / Chờ xuân nắng mới soi đường'* được quay trở lại với `class="mau-xanh"`.  
> 
> Như vậy, cấu trúc HTML của bài rất trong sáng, đúng ngữ nghĩa và phân chia khối rành mạch."

---

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai1.css`) (Khoảng 1.5 - 2 phút)

> **[Hành động]:** Click chuột chuyển tab sang file `bai1.css`. Lần lượt trỏ vào từng bộ chọn (selector).

> **Lời thoại:**  
> "Bây giờ, em xin chuyển sang file `bai1.css` để giải thích cách thức phối màu và tạo kiểu dáng cho trang thơ.  
> 
> 1. **Khối bao ngoài `.khung-bai-tho` (từ dòng 1 đến dòng 7):**  
>    - `width: 450px;`: Em giới hạn độ rộng của khung là 450 pixel, vừa vặn với độ dài của các câu thơ, giúp nội dung không bị bè ngang trên màn hình lớn.  
>    - `border: 1px solid #9E9E9E;`: Tạo một đường viền đơn thanh mảnh màu xám xung quanh khung để gom khối bài thơ lại.  
>    - `background-color: #FFFDE7;`: Sử dụng mã màu vàng kem nhạt dịu mắt, mang hơi hướng của trang giấy tập cổ điển, tạo cảm giác ấm áp và nghệ thuật.  
>    - `font-style: italic;`: Cho toàn bộ chữ trong khung được in nghiêng mặc định, mang nét mềm mại của thơ ca.  
>    - `text-align: center;`: Căn toàn bộ các dòng chữ và đường kẻ vào chính giữa khung bài thơ.  
> 
> 2. **Tiêu đề `.tieu-de` (từ dòng 8 đến dòng 14):**  
>    - `background-color: #FFD9E6;`: Em tạo một thanh nền màu hồng phấn nhẹ nhàng cho tiêu đề.  
>    - `color: #D40000;`: Chữ tiêu đề dùng màu đỏ đậm để tạo điểm nhấn mạnh mẽ ngay khi người đọc vừa nhìn vào.  
>    - `font-style: normal;`: Ghi đè lại thuộc tính in nghiêng của khung cha, giúp chữ tiêu đề đứng thẳng, trang trọng và rõ nét.  
>    - `padding-top: 6px; padding-bottom: 6px;`: Tạo khoảng đệm trên dưới 6px để thanh tiêu đề trông đầy đặn, không bị sát chữ vào mép viền.  
> 
> 3. **Phối màu các khổ thơ `.mau-xanh` và `.mau-do` (từ dòng 15 đến dòng 22):**  
>    - Lớp `.mau-xanh` dùng mã màu `#0033CC` - một tông màu xanh lam đậm dịu mát dành cho khổ xuân - hạ - thu và khổ kết thúc.  
>    - Lớp `.mau-do` dùng mã màu `#D40000` - sắc đỏ nồng ấm cho khổ mùa đông. Sự xen kẽ xanh - đỏ giữa các khổ thơ mang lại nhịp điệu thị giác rất cuốn hút.  
>    - Thuộc tính `line-height: auto;` giúp khoảng cách các dòng chữ giãn ra tự nhiên, thoáng và dễ đọc.  
> 
> 4. **Đường kẻ ngang `.hr` (dòng 23 đến 26):**  
>    - `width: 55%;`: Thay vì để đường kẻ tràn hết 100% chiều ngang, em thu gọn lại còn 55%, giúp phân đoạn nhẹ nhàng, tinh tế.  
>    - `border: 1px solid #0033CC;`: Viền kẻ màu xanh đồng bộ với màu chữ của khổ thơ 1 và 3, tạo nên sự liền mạch trong tổng thể giao diện."

---

### PHẦN 4: HƯỚNG DẪN THAO TÁC DEMO TRÊN TRÌNH DUYỆT (Khoảng 45 giây)

> **[Hành động]:** Nhấp chuột phải vào `bai1.html` chọn **Open with Live Server** (hoặc mở file trực tiếp trên trình duyệt Google Chrome/Microsoft Edge). Phóng to màn hình hiển thị.

> **Lời thoại:**  
> "Và ngay bây giờ, em xin phép mở trang web trên trình duyệt để kiểm tra kết quả hiển thị thực tế!  
> 
> *(Chờ trình duyệt hiển thị)*  
> 
> Như Thầy/Cô và các bạn có thể thấy trên màn hình:  
> - Toàn bộ bài thơ đã hiển thị chuẩn xác trong một khung hình chữ nhật 450px với nền vàng kem ấm áp.  
> - Tiêu đề *BỐN MÙA* nổi bật với nền hồng nhạt và chữ đỏ thẳng hàng.  
> - Ba khổ thơ được căn lề giữa rất cân đối. Khổ 1 chữ xanh, khổ 2 chữ đỏ ấm áp, khổ 3 quay lại chữ xanh.  
> - Các đường gạch ngang phân cách ngắn gọn ở mức 55% nằm ngay chính giữa hai khổ thơ, đúng với ý đồ thiết kế ban đầu của đề bài.  
> - Khi em thu phóng kích thước cửa sổ trình duyệt, khối bài thơ vẫn giữ nguyên tỷ lệ và thẩm mỹ hài hòa."

---

### PHẦN 5: LỜI CẢM ƠN KẾT THÚC (Khoảng 20 - 30 giây)

> **[Hành động]:** Chuyển góc quay về lại VS Code hoặc webcam toàn cảnh, giữ thái độ lịch sự, vui vẻ.

> **Lời thoại:**  
> "Phần trình bày về Bài tập 1 - Trang thơ 'Bốn mùa' của em đến đây là hoàn thành.  
> Em xin chân thành cảm ơn Thầy/Cô và các bạn đã dành thời gian theo dõi video thuyết minh này. Rất mong nhận được những góp ý quý báu của Thầy/Cô để bài làm của em ngày càng hoàn thiện hơn nữa trong những bài tập tiếp theo.  
> 
> Xin kính chào và hẹn gặp lại mọi người ở video Bài 2!"
