# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 3
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Sinh viên thực hiện:** Trần Trọng Hoàng Anh  
**Đề tài:** Thiết kế trang giới thiệu "Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới" bằng HTML5 & CSS3  
**Thời lượng dự kiến:** 3 – 5 phút  

---

## CẤU TRÚC KỊCH BẢN TỔNG QUAN

| Phân đoạn | Nội dung chính | Thao tác trên màn hình (OBS) |
| :--- | :--- | :--- |
| **Phần 1** | Giới thiệu bản thân & mục tiêu bài tập | Bật webcam hoặc mở file `bai3.html` trên VS Code |
| **Phần 2** | Giải thích cấu trúc mã nguồn HTML | Cuộn chuột và bôi đen các thẻ trong `bai3.html` |
| **Phần 3** | Giải thích chi tiết định dạng CSS | Chuyển sang `bai3.css`, giải thích background gradient, card shadow, Drop Cap `::first-letter` |
| **Phần 4** | Thao tác demo giao diện trên trình duyệt | Bật Open with Live Server để kiểm tra giao diện thực tế |
| **Phần 5** | Tổng kết và lời cảm ơn kết thúc | Quay lại màn hình chính và nói lời chào kết thúc |

---

## NỘI DUNG CHI TIẾT KỊCH BẢN

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 - 45 giây)

> **[Hành động]:** Mở giao diện VS Code với tab `bai3.html`. Giọng nói hào hứng, đĩnh đạc và tự tin.

> **Lời thoại:**  
> "Xin nhiệt liệt chào mừng Thầy/Cô cùng các bạn đã đến với video thuyết minh bài tập thực hành tiếp theo của em!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên chuyên ngành Công nghệ Thông tin.  
> 
> Trong video ngày hôm nay, em xin được trình bày về sản phẩm **Bài tập thực hành số 3**: Thiết kế trang báo điện tử giới thiệu thắng cảnh kỳ quan nổi tiếng *'Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới'*.  
> 
> Với bài tập này, chúng ta sẽ được nâng cao kỹ năng thiết kế giao diện hiện đại với dải màu chuyển sắc `linear-gradient` mô phỏng màu nước biển sâu, thiết kế khung bài viết dạng thẻ card nổi đổ bóng `box-shadow`, bo tròn góc `border-radius`, và đặc biệt là kỹ thuật tạo chữ hoa đầu đoạn phóng lớn (**Drop Cap**) bằng phần tử ảo `::first-letter` thường thấy trên các tạp chí danh tiếng.  
> 
> Ngay sau đây, em xin đi vào chi tiết cấu trúc HTML và các dòng mã CSS ấn tượng của bài."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai3.html`) (Khoảng 1 - 1.5 phút)

> **[Hành động]:** Rê chuột chỉ vào mã nguồn trong file `bai3.html`.

> **Lời thoại:**  
> "Đầu tiên, kính mời Thầy/Cô và các bạn cùng quan sát file `bai3.html`.  
> 
> - Tại dòng số 2, em đặt thuộc tính `lang="vi"` để khai báo trang web sử dụng tiếng Việt, hỗ trợ tối ưu cho các công cụ tìm kiếm và trình đọc màn hình.  
> - Phần thẻ `<head>` bao gồm các thông số chuẩn: bảng mã `UTF-8`, thẻ `viewport` responsive, tiêu đề trang `<title>` là *'Bài 3 - Trang giới thiệu Vịnh Hạ Long'*, và đường dẫn liên kết CSS ngoài `bai3.css`.  
> 
> Tiếp theo là phần thân bài viết nằm trong thẻ `<body>` từ dòng 9 đến dòng 29:  
> - Toàn bộ bài báo được đóng gói cẩn thận trong một container lớn là `<div class="khung-bai-viet">`. Đây là lớp bao bọc chính để tạo hình tượng một tấm thẻ trắng thanh lịch nằm giữa trang.  
> - Dòng 12 là thẻ tiêu đề chính `<h1>` với `class="tieu-de"`: *'Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới'*.  
> - Dòng 14 đến 16 là một khối văn bản đặc biệt: `<div class="khoi-mo-dau">`. Khối này đóng vai trò như đoạn tóm tắt (Sapo hay Lead của bài báo) với nội dung nhấn mạnh việc Vịnh Hạ Long sở hữu gần 2.000 đảo đá vôi và được UNESCO công nhận là di sản thiên nhiên thế giới. Việc tách riêng khối này giúp tạo điểm dừng thị giác ấn tượng trước khi độc giả bước vào nội dung chi tiết.  
> - Dòng 18 là thẻ hình ảnh `<img src="../Kho-anh/Bai03/vinh-ha-long.jpg" alt="Vịnh Hạ Long" class="anh-minh-hoa">`. Bức ảnh này sẽ được căn trôi float sang phải.  
> - Và cuối cùng từ dòng 20 đến 26 là hai đoạn văn bản thuyết minh `<p class="doan-van">`:  
>   + Đoạn văn thứ nhất miêu tả vùng biển Đông Bắc, trải nghiệm ngủ đêm trên du thuyền, chèo thuyền kayak, ngắm bình minh trên đảo Titop và vẻ đẹp huyền ảo của hang Sửng Sốt.  
>   + Đoạn văn thứ hai ca ngợi ẩm thực hải sản phong phú và nét đẹp bốn mùa của Vịnh Hạ Long.  
> 
> Cấu trúc HTML của bài tập rất chặt chẽ, mạch lạc và thể hiện đúng tính chất một bài phóng sự du lịch."

---

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai3.css`) (Khoảng 1.5 - 2 phút)

> **[Hành động]:** Chuyển tab sang file `bai3.css`. Lần lượt cuộn chuột và nhấn mạnh vào background gradient, shadow và Drop Cap.

> **Lời thoại:**  
> "Bây giờ là phần thú vị nhất: Trang trí giao diện trong file `bai3.css`.  
> 
> 1. **Hiệu ứng nền toàn trang `body` (từ dòng 5 đến dòng 12):**  
>    - Thuộc tính `background: linear-gradient(to bottom, #7ec8e3, #0a5c8a);`: Em sử dụng kỹ thuật dải màu chuyển tiếp từ trên xuống dưới, bắt đầu từ sắc xanh ngọc nhạt của mặt biển nông `#7ec8e3` chuyển dần sang sắc xanh thẫm sâu thẳm `#0a5c8a`. Dải màu này gợi nhớ ngay đến không gian biển trời bao la của Vịnh Hạ Long.  
>    - `font-family: 'Times New Roman', Times, serif;`: Phông chữ có chân mang phong thái cổ điển, trang trọng và đậm chất văn học.  
>    - `min-height: 100vh;` kết hợp `padding: 40px 15px;` và `box-sizing: border-box;`: Đảm bảo màu nền phủ kín chiều cao màn hình và khung bài viết không bị dính sát mép trên dưới.  
> 
> 2. **Khung thẻ bài viết `.khung-bai-viet` (từ dòng 14 đến dòng 22):**  
>    - `max-width: 780px; margin: 0 auto;`: Khống chế độ rộng tối đa 780px và tự động căn giữa màn hình.  
>    - `background-color: #ffffff; border-radius: 8px;`: Nền trắng nổi bật với các góc được bo tròn mềm mại 8px.  
>    - `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);`: Hiệu ứng đổ bóng mờ xung quanh, làm cho khung bài viết nổi lên như một tấm thẻ 3D cao cấp.  
>    - `overflow: hidden;`: Giúp tự động bao trọn các phần tử con trôi nổi bên trong mà không bị vỡ bố cục (kỹ thuật clearfix).  
> 
> 3. **Tiêu đề và khối sapo mở đầu (từ dòng 24 đến dòng 42):**  
>    - `.tieu-de`: Mang mã màu `#0b3d5c` - xanh đại dương đậm, căn giữa, chữ đậm cỡ 26px uy nghi.  
>    - `.khoi-mo-dau`: Sử dụng nền xanh đại dương `#0b3d5c` kết hợp chữ trắng tinh `#ffffff`, kiểu chữ in nghiêng `italic`, đệm lót `padding: 16px 20px` và bo tròn góc 8px. Khối này tạo điểm nhấn tương phản cực kỳ cuốn hút ngay đầu trang.  
> 
> 4. **Ảnh minh họa `.anh-minh-hoa` (từ dòng 44 đến dòng 50):**  
>    - `width: 290px; float: right;`: Định kích thước ảnh 290px và thả trôi sang lề phải.  
>    - `border-radius: 8px;`: Bo nhẹ 4 góc ảnh cho đồng bộ với thiết kế card.  
>    - `margin-left: 20px; margin-bottom: 12px;`: Tạo khoảng hở an toàn với các dòng chữ.  
> 
> 5. **Kỹ thuật đỉnh cao Drop Cap với `.doan-van::first-letter` (dòng 61 đến 69):**  
>    - Đây là điểm sáng kỹ thuật của bài tập! Bằng cách sử dụng bộ chọn phần tử giả `::first-letter`, em can thiệp trực tiếp vào chữ cái đầu tiên của mỗi đoạn văn.  
>    - `font-size: 48px; font-weight: bold; color: #0b3d5c;`: Phóng to chữ cái đầu lên gấp 3 lần với màu xanh thẫm và in đậm.  
>    - `float: left; line-height: 1; margin-right: 6px;`: Cho chữ cái đầu này trôi về bên trái và ép các dòng văn bản phía sau ôm sát vào nó. Kỹ thuật này chuẩn xác như cách bài trí trên các tạp chí cao cấp."

---

### PHẦN 4: HƯỚNG DẪN THAO TÁC DEMO TRÊN TRÌNH DUYỆT (Khoảng 45 giây)

> **[Hành động]:** Mở trình duyệt hiển thị file `bai3.html`. Cuộn chuột nhẹ từ trên xuống dưới, chỉ vào kỹ thuật Drop Cap.

> **Lời thoại:**  
> "Và đây là thành quả khi chúng ta chạy file `bai3.html` trên trình duyệt!  
> 
> *(Chờ màn hình hiển thị toàn bộ trang web)*  
> 
> Kính mời Thầy/Cô và các bạn cùng chiêm ngưỡng:  
> - Dải màu nền gradient chuyển tiếp từ xanh da trời sang xanh biển thẫm ôm trọn khung nhìn vô cùng mướt mắt.  
> - Khung bài viết màu trắng nổi bật với bóng đổ mềm mại, góc bo cong rất tinh tế.  
> - Hộp giới thiệu mở đầu màu xanh thẫm mang phong cách chuyên nghiệp như một bản tin thời sự.  
> - Bức ảnh Vịnh Hạ Long nằm gọn bên phải với góc bo mềm.  
> - Đặc biệt, chữ cái đầu tiên của hai đoạn văn – chữ **'V'** trong *'Vịnh'* và chữ **'H'** trong *'Hải sản'* – đã tự động phóng to thành chữ Drop Cap cực kỳ ấn tượng và chuẩn quy cách báo in.  
> - Các dòng văn bản được căn đều hai biên (`justify`), tạo cảm giác đọc rất sang trọng và lôi cuốn."

---

### PHẦN 5: LỜI CẢM ƠN KẾT THÚC (Khoảng 20 - 30 giây)

> **[Hành động]:** Chuyển về góc máy camera chào tạm biệt với nụ cười thân thiện.

> **Lời thoại:**  
> "Bài thuyết minh về Bài tập số 3 của em xin được khép lại tại đây.  
> Thông qua bài học này, em đã thành thạo kỹ thuật phối màu chuyển sắc gradient, đổ bóng card hiện đại và kỹ thuật tạo chữ Drop Cap nghệ thuật trong CSS.  
> 
> Em xin chân thành cảm ơn Thầy/Cô và các bạn đã chú ý lắng nghe!  
> Xin chào và hẹn gặp lại mọi người trong video Bài tập số 4!"
