# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 14: TRANG 6 KỲ QUAN THIÊN NHIÊN VIỆT NAM
**Người trình bày:** Sinh viên Trần Trọng Hoàng Anh  
**Môn học:** Phát triển ứng dụng Web cơ bản  
**Chủ đề:** Thiết kế trang giới thiệu 6 kỳ quan thiên nhiên Việt Nam với CSS Grid, Flexbox và kỹ thuật sắp xếp thứ tự hiển thị bằng thuộc tính `order`  

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU
*(Thời lượng dự kiến: ~45 giây)*

*[Hành động: Mở màn hình OBS hiển thị VS Code với các tệp tin `bai14.html` và `bai14.css`, giọng nói tươi vui, tự tin, phát âm rõ ràng]*

"Xin chào quý thầy cô và các bạn!  
Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Hôm nay, em xin trân trọng giới thiệu kịch bản thuyết minh và phân tích mã nguồn của **Bài thực hành số 14: Trang giới thiệu 6 kỳ quan thiên nhiên Việt Nam**.

Bài tập này hướng đến các mục tiêu kiến thức quan trọng trong lập trình giao diện Web:
1. Thứ nhất: Xây dựng cấu trúc tài liệu đạt chuẩn ngữ nghĩa HTML5 với các thẻ phân vùng chuyên biệt như `<header>`, `<main>`, `<article>` và các cấp tiêu đề chuẩn SEO `<h1>`, `<h2>`.
2. Thứ hai: Kết hợp nhuần nhuyễn giữa **CSS Grid** để chia lưới bố cục tổng thể và **Flexbox** để định dạng chi tiết từng thẻ card kỳ quan.
3. Thứ ba: Vận dụng thuộc tính đặc biệt `order: -1` trong Flexbox để điều khiển thứ tự hiển thị hình ảnh lên trên nội dung văn bản một cách thông minh mà không làm phá vỡ thứ tự ngữ nghĩa trong file HTML.

Ngay sau đây, em xin kính mời thầy cô và các bạn cùng đi vào chi tiết cấu trúc mã nguồn!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai14.html`)
*(Thời lượng dự kiến: ~1 phút 45 giây)*

*[Hành động: Trỏ chuột vào các khối thẻ trong file `bai14.html`, cuộn từ từ để người xem dễ theo dõi]*

"Chúng ta cùng bắt đầu với tệp tin `bai14.html`.

- Phần `<head>` được thiết lập đầy đủ các thông tin tiêu chuẩn gồm: bảng mã tiếng Việt `UTF-8`, cấu hình khung nhìn `viewport` và liên kết đến tệp định dạng ngoại tuyến `bai14.css`.

- Phần thân trang `<body>` được bố trí bên trong một khối bọc chính mang tên `<div class="khung-chinh">`. Bên trong khối này được tổ chức theo 3 phần mạch lạc:

1. **Phần đầu trang (`<header class="dai-tieu-de">`):**
   - Sử dụng thẻ ngữ nghĩa `<header>` để làm dải banner tiêu đề nổi bật.
   - Bên trong chứa thẻ tiêu đề cấp cao nhất `<h1>` với dòng chữ: *'6 kỳ quan thiên nhiên Việt Nam'*.

2. **Đoạn văn dẫn nhập (`<p class="doan-dan-nhap">`):**
   - Đóng vai trò là lời mở đầu giới thiệu ngắn gọn, truyền cảm hứng về vẻ đẹp non nước Việt Nam: *'Việt Nam sở hữu nhiều kỳ quan thiên nhiên được thế giới công nhận — từ vịnh biển, hang động đến núi cao và miền sông nước.'*

3. **Khu vực nội dung chính (`<main class="luoi-ky-quan">`):**
   - Sử dụng thẻ ngữ nghĩa `<main>` làm container chứa lưới hiển thị các địa danh.
   - Mỗi địa danh được đóng gói độc lập bên trong một thẻ ngữ nghĩa `<article class="the-ky-quan">`. Tổng cộng gồm 6 thẻ `<article>` tương ứng với 6 danh thắng:
     - Kỳ quan 1: Vịnh Hạ Long (`1-vinh-ha-long.jpg`)
     - Kỳ quan 2: Hang Sơn Đoòng (`2-son-doong.jpg`)
     - Kỳ quan 3: Thác Bản Giốc (`3-thac-ban-gioc.jpg`)
     - Kỳ quan 4: Fansipan (`4-fansipan.jpg`)
     - Kỳ quan 5: Đồng bằng sông Cửu Long (`5-mekong.jpg`)
     - Kỳ quan 6: Động Phong Nha (`6-phong-nha.jpg`)

- Điểm đáng chú ý trong mỗi thẻ `<article>`:
  - Khối nội dung văn bản `<div class="noi-dung-ky-quan">` bao gồm tiêu đề địa danh đặt trong thẻ `<h2>` và đoạn mô tả vị trí địa lý đặt trong thẻ `<p>`.
  - Thẻ hình ảnh `<img class="anh-ky-quan">` được khai báo kèm thuộc tính `alt` mô tả chuẩn chỉ.
  - Trong cấu trúc HTML, thẻ nội dung được viết ở trên và thẻ ảnh viết ở dưới. Lát nữa sang phần CSS, chúng ta sẽ thấy cách điều khiển thứ tự hiển thị bằng Flexbox rất kỳ diệu!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai14.css`)
*(Thời lượng dự kiến: ~2 phút)*

*[Hành động: Chuyển sang tệp `bai14.css`, bôi đen và phân tích từng khối định dạng]*

"Bây giờ, chúng ta cùng phân tích tệp định dạng `bai14.css`. Ở đây, bài tập áp dụng một phong cách màu sắc mang đậm hơi thở thiên nhiên tươi mát với tông màu chủ đạo là xanh lá cây rừng nhiệt đới.

1. **Khung bao bọc trung tâm (`.khung-chinh`):**
   - Đặt `max-width: 860px; margin: 0 auto;` giúp trang web luôn hiển thị gọn gàng ở giữa màn hình.
   - Nền màu trắng `#ffffff`, bo tròn góc 8px với `border-radius: 8px`, và đổ bóng mờ nhẹ nhàng `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08)` trên nền trang xám nhạt `#f5f7fa`.
   - `overflow: hidden;` giúp các góc bo ở đỉnh dải tiêu đề được cắt gọn gàng, không bị tràn ra ngoài.

2. **Dải tiêu đề rực rỡ (`.dai-tieu-de`):**
   - Mang sắc xanh lá cây đậm `#2E7D32`.
   - Chữ tiêu đề `h1` bên trong được phủ sắc vàng tươi rực rỡ `#FFEB3B` với cỡ chữ 22px in đậm, tạo sự tương phản thị giác rất mạnh mẽ và bắt mắt, đúng với không khí tự hào non nước quê hương.

3. **Đoạn dẫn nhập (`.doan-dan-nhap`):**
   - Mang màu xanh lá đậm tông `#1b5e20`, được tạo kiểu in nghiêng `font-style: italic`, căn giữa và tạo khoảng cách đệm trên dưới hợp lý.

4. **Bố cục lưới CSS Grid (`.luoi-ky-quan`):**
   - Áp dụng `display: grid;`.
   - Lệnh `grid-template-columns: repeat(3, 1fr);` chia đều không gian thành 3 cột cân xứng hoàn hảo.
   - Khoảng cách giữa các card được định nghĩa bằng `gap: 20px;`.

5. **Kỹ thuật Flexbox và thuộc tính `order: -1` trên thẻ card (`.the-ky-quan`):**
   - Mỗi thẻ `.the-ky-quan` được thiết lập `display: flex; flex-direction: column;`, có viền xám mảnh `border: 1px solid #e0e0e0` và bo góc 6px.
   - **Điểm sáng tạo nhất của bài viết:** Đối với lớp `.anh-ky-quan`, em áp dụng thuộc tính:  
     `order: -1;`  
     Trong mô hình Flexbox, giá trị mặc định của `order` là 0. Khi ta đặt `order: -1`, trình duyệt sẽ ngay lập tức đẩy hình ảnh lên hiển thị ở vị trí đầu tiên của card, nằm phía trên phần văn bản! Nhờ đó, ta vừa giữ được tính ngữ nghĩa trong HTML, vừa kiểm soát được vị trí hiển thị giao diện theo đúng ý muốn thiết kế.
   - Hình ảnh được gán chiều cao cố định `height: 140px;` kết hợp `object-fit: cover;` để không bị méo góc nhìn.
   - Dưới chân mỗi bức ảnh có một đường viền xanh lá dày 3px: `border-bottom: 3px solid #2E7D32;`, tạo thành một đường chỉ kẻ ngăn cách rất duyên dáng và đồng bộ với dải banner trên cùng.

6. **Phần nội dung văn bản (`.noi-dung-ky-quan`):**
   - Được thiết lập `flex: 1` để tự động kéo dãn đều nhau giữa các card có độ dài văn bản khác nhau.
   - Tiêu đề `.tieu-de-ky-quan` mang sắc xanh đậm `#1b5e20`, còn đoạn mô tả `.mo-ta-ky-quan` dùng màu xám tro dịu mắt `#555555` với độ giãn dòng `line-height: 1.5` rất dễ đọc."

---

## PHẦN 4: GIẢI THÍCH VỀ JAVASCRIPT
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Giữ màn hình code hoặc chuẩn bị mở trình duyệt]*

"Về mặt JavaScript: Bài thực hành số 14 là một bài tập tập trung chuyên sâu vào kỹ năng tổ chức HTML5 ngữ nghĩa và xử lý nghệ thuật bố cục giao diện thuần CSS. Bằng việc làm chủ sức mạnh của CSS Grid kết hợp các thuộc tính chuyên sâu của Flexbox như `flex-direction` và `order`, chúng ta hoàn toàn có thể tạo nên một trang web giới thiệu danh lam thắng cảnh sinh động, trực quan và tối ưu tốc độ tải trang mà không cần viết thêm mã JavaScript phức tạp."

---

## PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Chuyển màn hình sang trình duyệt web đang hiển thị trang `bai14.html`]*

"Và ngay bây giờ, em xin kính mời thầy cô và các bạn cùng chiêm ngưỡng giao diện hoàn thiện của bài tập số 14 trên trình duyệt!

1. **Quan sát tổng quan giao diện:**
   - Trang web hiện lên với vẻ đẹp trang nhã và tươi mát.
   - Dải banner màu xanh lá nổi bật với dòng chữ vàng rực rỡ *'6 kỳ quan thiên nhiên Việt Nam'*.
   - Đoạn văn dẫn nhập in nghiêng xanh lá tạo cảm giác thanh lịch, dẫn dắt người xem vào bộ sưu tập.

2. **Quan sát 6 thẻ card kỳ quan:**
   *[Hành động: Rê chuột lần lượt qua từng card: Hạ Long, Sơn Đoòng, Bản Giốc, Fansipan, Sông Cửu Long, Phong Nha]*
   - Cả 6 kỳ quan được bố trí ngay ngắn thành lưới 3 cột và 2 hàng.
   - Nhờ thuộc tính `order: -1`, toàn bộ 6 bức ảnh đều nằm ngay ngắn phía trên cùng của từng card.
   - Đường viền xanh 3px dưới mỗi ảnh tạo thành một điểm nhấn thẩm mỹ rất bắt mắt, kết nối hài hòa giữa phần ảnh và phần chữ.
   - Nhờ thuộc tính `object-fit: cover`, mọi bức ảnh từ Vịnh Hạ Long mờ sương, đỉnh Fansipan hùng vĩ đến miền sông nước Cửu Long đều hiển thị sắc nét, vuông vắn và chuẩn tỉ lệ 140px.
   - Toàn bộ nội dung mô tả bên dưới đều tăm tắp, cân đối và rất thuận tiện để người xem nắm bắt thông tin."

---

## PHẦN 6: LỜI CẢM ƠN KẾT THÚC
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Bật webcam toàn cảnh, nở nụ cười tự tin, nói lời cảm ơn]*

"Dạ, phần thuyết minh và hướng dẫn về **Bài thực hành số 14: Trang 6 kỳ quan thiên nhiên Việt Nam** của em xin được tạm dừng tại đây.

Qua bài tập này, em đã củng cố thêm rất nhiều kiến thức bổ ích về cách phối hợp giữa CSS Grid và Flexbox, hiểu rõ cách dùng thuộc tính `order` để tùy biến giao diện hiển thị mà vẫn bảo toàn ngữ nghĩa HTML.

Em xin chân thành cảm ơn thầy cô và tất cả các bạn đã chú ý lắng nghe và đồng hành cùng video này! Hẹn gặp lại thầy cô và các bạn trong video bài tập tiếp theo ạ!"
