# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 2
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Sinh viên thực hiện:** Trần Trọng Hoàng Anh  
**Đề tài:** Thiết kế trang quảng cáo tour du lịch Trung Hoa bằng HTML5 & CSS3  
**Thời lượng dự kiến:** 3 – 5 phút  

---

## CẤU TRÚC KỊCH BẢN TỔNG QUAN

| Phân đoạn | Nội dung chính | Thao tác trên màn hình (OBS) |
| :--- | :--- | :--- |
| **Phần 1** | Giới thiệu bản thân & mục tiêu bài tập | Bật webcam hoặc mở file `bai2.html` trên VS Code |
| **Phần 2** | Giải thích cấu trúc mã nguồn HTML | Cuộn chuột và bôi đen các thẻ HTML trong `bai2.html` |
| **Phần 3** | Giải thích chi tiết định dạng CSS | Chuyển tab sang file `bai2.css`, giải thích float, text-shadow, typography |
| **Phần 4** | Thao tác demo giao diện trên trình duyệt | Bật Open with Live Server trên trình duyệt để kiểm tra kết quả |
| **Phần 5** | Tổng kết và lời cảm ơn kết thúc | Quay lại màn hình chính và nói lời chào kết thúc |

---

## NỘI DUNG CHI TIẾT KỊCH BẢN

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU ĐỀ BÀI (Khoảng 30 - 45 giây)

> **[Hành động]:** Mở giao diện VS Code hiển thị sẵn thư mục bài tập cùng file `bai2.html` và `bai2.css`. Nét mặt tươi cười, giọng nói truyền cảm, dõng dạc.

> **Lời thoại:**  
> "Xin chào Thầy/Cô cùng tất cả các bạn đã quay trở lại với chuỗi video thực hành môn Phát triển ứng dụng Web cơ bản!  
> Em là **Trần Trọng Hoàng Anh**.  
> 
> Trong video này, em sẽ giới thiệu và giải thích chi tiết về **Bài tập thực hành số 2**: Xây dựng trang thông tin quảng bá tour du lịch khám phá Trung Hoa với câu khẩu hiệu nổi tiếng *'Bất đáo Trường Thành phi hảo hán'*.  
> 
> Mục tiêu cốt lõi của bài tập là ứng dụng kỹ thuật dàn trang văn bản kết hợp hình ảnh minh họa bằng thuộc tính `float: right` trong CSS, tạo viền trong suốt sang trọng cho hình ảnh, đồng thời áp dụng hiệu ứng đổ bóng văn bản `text-shadow` và căn chỉnh văn bản hai lề `text-align: justify` theo đúng tiêu chuẩn thiết kế bài báo du lịch chuyên nghiệp.  
> 
> Không để mọi người chờ lâu, sau đây em xin đi vào phân tích chi tiết mã nguồn."

---

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai2.html`) (Khoảng 1 - 1.5 phút)

> **[Hành động]:** Nhấp chuột chọn file `bai2.html`. Bôi đen lần lượt từng khối thẻ để người xem tiện quan sát.

> **Lời thoại:**  
> "Trước tiên là cấu trúc mã nguồn HTML trong file `bai2.html`.  
> 
> - Như thường lệ, từ dòng 1 đến dòng 8 là phần cấu trúc chuẩn của HTML5: thẻ khai báo `<!DOCTYPE html>`, thẻ `<head>` có đầy đủ mã hóa `UTF-8` cho tiếng Việt, thẻ `viewport` kiểm soát hiển thị trên thiết bị di động, thẻ tiêu đề `<title>` đặt tên là *'Bài 2 - Trang quảng cáo tour du lịch'*, và thẻ `<link>` dùng để gắn file style `bai2.css`.  
> 
> Đi sâu vào phần thân trang `<body>` từ dòng 9 đến dòng 26:  
> - Toàn bộ nội dung của bài viết được bao bọc bên trong một thẻ `<div class="khung-trang">`. Thẻ này đóng vai trò là container giới hạn kích thước bề ngang, giữ cho bài viết không bị tràn lan màn hình.  
> - Ở dòng 11 đến 13 là thẻ tiêu đề chính `<h1>` với `class="tieu-de"`, thể hiện câu danh ngôn: *'“Bất đáo Trường Thành phi hảo hán”...'*.  
> - Ngay bên dưới tiêu đề, ở dòng 14, em đặt thẻ nhúng hình ảnh `<img src="greatwall.jpg" alt="Vạn Lý Trường Thành" class="anh">`. Thẻ ảnh này được đặt ngay trước các đoạn văn bản để khi sử dụng kỹ thuật CSS `float: right`, hình ảnh sẽ trôi sang phía bên phải và văn bản phía sau sẽ tự động uốn lượn ôm quanh cạnh trái của bức ảnh.  
> - Tiếp theo là ba đoạn văn bản thuyết minh lôi cuốn từ dòng 15 đến dòng 23, mỗi đoạn được đóng gói trong một thẻ `<p class="doan-van">`:  
>   + Đoạn thứ nhất giới thiệu hành trình khởi đầu: chinh phục Vạn Lý Trường Thành, ghé Thập Tam Lăng, tham quan Cung Điện Mùa Hè.  
>   + Đoạn thứ hai đưa du khách đến với quảng trường Thiên An Môn, Cố Cung, thưởng thức ẩm thực vịt quay Bắc Kinh và ngắm cảnh bến sông Hoàng Phố tại Thượng Hải.  
>   + Đoạn thứ ba khép lại chuyến đi tại Hàng Châu cổ kính với câu chuyện tình kinh điển Lương Sơn Bá - Chúc Anh Đài và thiên đường ngọc trai quý hiếm.  
> 
> Như vậy, cấu trúc HTML rất tinh gọn, mạch lạc và chuẩn ngữ nghĩa bài báo."

---

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai2.css`) (Khoảng 1.5 - 2 phút)

> **[Hành động]:** Chuyển tab sang file `bai2.css`. Cuộn chuột giải thích cặn kẽ từng khối thuộc tính.

> **Lời thoại:**  
> "Tiếp theo, chúng ta cùng khám phá cách trang trí giao diện trong file `bai2.css`. Đây chính là linh hồn mang lại phong cách cổ điển, hoàng gia cho trang web.  
> 
> 1. **Định dạng toàn trang `body` (từ dòng 1 đến dòng 5):**  
>    - `background-color: #C9A227;`: Em chọn tông màu vàng đồng cổ điển, tạo cảm giác quý phái, mang đậm chất văn hóa lịch sử Trung Hoa.  
>    - `color: white;`: Toàn bộ văn bản dùng màu trắng tinh khôi, tạo độ tương phản cực kỳ cao và nổi bật trên nền vàng.  
>    - `margin: 0;`: Xóa bỏ khoảng cách lề mặc định của trình duyệt để màu nền phủ trọn khung nhìn.  
> 
> 2. **Khung bao `.khung-trang` (dòng 6 đến dòng 9):**  
>    - `width: 750px;`: Cố định độ rộng 750 pixel - đây là kích thước lý tưởng cho một bản tin hoặc chuyên mục tạp chí, giúp mắt người đọc quét dòng dễ dàng mà không bị mỏi.  
>    - `margin: 20px;`: Đẩy lùi toàn bộ khung cách mép màn hình 20px, tạo khoảng thở thoáng đãng.  
> 
> 3. **Tiêu đề ấn tượng `.tieu-de` (dòng 10 đến dòng 14):**  
>    - `text-align: center;`: Căn chữ vào chính giữa trang.  
>    - `font-size: 26px;`: Kích thước chữ to, nổi bật.  
>    - Đặc biệt là thuộc tính `text-shadow: 2px 2px 4px rgba(0,0,0,0.4);`: Thuộc tính này tạo bóng đổ lệch sang phải 2px, lệch xuống dưới 2px với độ nhòe 4px và màu đen mờ 40%. Điều này làm cho dòng chữ tiêu đề nổi khối 3D trên bề mặt nền vàng, trông rất có chiều sâu nghệ thuật.  
> 
> 4. **Kỹ thuật trôi ảnh `.anh` (dòng 15 đến dòng 21):**  
>    - `float: right;`: Đây là thuộc tính trọng tâm! Nó giúp bức ảnh trôi hẳn về bên phải khung trang.  
>    - `width: 280px;`: Khống chế chiều rộng ảnh 280px để bức ảnh chiếm khoảng 1/3 chiều rộng và nhường 2/3 không gian cho phần chữ.  
>    - `margin-left: 12px; margin-bottom: 12px;`: Đẩy văn bản cách xa ảnh 12px về bên trái và bên dưới, tránh hiện tượng chữ dính sát vào mép ảnh.  
>    - `border: 4px solid rgba(255,255,255,0.7);`: Viền ảnh dày 4px màu trắng mờ với độ trong suốt 70%, tạo cảm giác như bức ảnh được lồng vào một khung tranh thủy tinh sang trọng.  
> 
> 5. **Đoạn văn bản `.doan-van` (dòng 22 đến dòng 27):**  
>    - `text-align: justify;`: Căn đều hai bên lề trái và lề phải, tạo nên các khối văn bản vuông vức, chỉn chu như báo in.  
>    - `line-height: 1.5;`: Khoảng cách giữa các dòng được giãn cách 1.5 lần, tối ưu trải nghiệm đọc lướt.  
>    - `font-size: 17px;`: Cỡ chữ 17 pixel rõ ràng.  
>    - `margin-bottom: 16px;`: Tạo khoảng cách nhịp nhàng giữa các đoạn văn với nhau."

---

### PHẦN 4: HƯỚNG DẪN THAO TÁC DEMO TRÊN TRÌNH DUYỆT (Khoảng 45 giây)

> **[Hành động]:** Bấm **Open with Live Server** hoặc mở trình duyệt Chrome để xem trang `bai2.html`. Di chuyển chuột quanh vùng ảnh và các đoạn văn bản.

> **Lời thoại:**  
> "Bây giờ, em xin mời Thầy/Cô và các bạn cùng quan sát giao diện thực tế khi chạy trên trình duyệt!  
> 
> *(Màn hình chuyển sang trình duyệt web)*  
> 
> Xin mọi người hãy chú ý:  
> - Nền trang web màu vàng đồng hiện lên rất ấm áp và quyền quý.  
> - Tiêu đề *“Bất đáo Trường Thành phi hảo hán”* có bóng đổ mờ nhẹ phía sau, tạo cảm giác sang trọng và uy nghi.  
> - Bức ảnh kỳ quan Vạn Lý Trường Thành nằm ngay ngắn ở phía bên phải với khung viền trắng tinh tế.  
> - Các đoạn văn bản màu trắng được căn lề đều tăm tắp hai bên (`justify`), lượn bao quanh cạnh trái và tràn xuống phía dưới bức ảnh một cách hoàn toàn tự nhiên, không hề bị lỗi bố cục.  
> - Tổng thể trang web tạo cho người xem cảm giác muốn xách ba lô lên và đi khám phá ngay tour du lịch hấp dẫn này!"

---

### PHẦN 5: LỜI CẢM ƠN KẾT THÚC (Khoảng 20 - 30 giây)

> **[Hành động]:** Chuyển khung hình về lại màn hình chính hoặc chào trước camera.

> **Lời thoại:**  
> "Đó là toàn bộ phần thuyết minh và minh họa trực quan cho Bài tập số 2 của em.  
> Qua bài này, em đã nắm vững kỹ thuật dàn trang với `float`, căn chỉnh văn bản báo chí và tạo hiệu ứng chiều sâu với `text-shadow`.  
> 
> Em xin chân thành cảm ơn Thầy/Cô cùng các bạn đã chú ý lắng nghe!  
> Hẹn gặp lại mọi người ở video tiếp theo - Bài tập số 3!"
