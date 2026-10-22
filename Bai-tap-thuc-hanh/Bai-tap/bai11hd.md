# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 11: THƯ VIỆN ẢNH (FIGURE / FIGCAPTION)
**Người trình bày:** Sinh viên Trần Trọng Hoàng Anh  
**Môn học:** Phát triển ứng dụng Web cơ bản  
**Chủ đề:** Xây dựng thư viện ảnh 6 danh thắng Việt Nam với thẻ ngữ nghĩa HTML5 và bố cục CSS Grid  

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU
*(Thời lượng dự kiến: ~45 giây)*

*[Hành động: Mở màn hình OBS hiển thị VS Code với file `bai11.html` và `bai11.css`, giọng nói tươi vui, tự tin, phát âm rõ ràng]*

"Xin chào thầy cô và tất cả các bạn!  
Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Hôm nay, trong video này, em xin phép được thuyết minh và hướng dẫn chi tiết quá trình hoàn thiện **Bài thực hành số 11: Xây dựng thư viện ảnh danh lam thắng cảnh Việt Nam**.

Mục tiêu chính của bài tập này là giúp chúng ta:
1. Thứ nhất: Ứng dụng chuẩn xác các thẻ ngữ nghĩa của chuẩn HTML5, cụ thể là cặp thẻ `<figure>` và `<figcaption>` để hiển thị hình ảnh kèm chú thích độc lập.
2. Thứ hai: Sử dụng kỹ thuật bố cục hiện đại **CSS Grid** để chia lưới 3 cột đều đặn, kết hợp hiệu ứng tương tác chuyển động `hover` mượt mà và khả năng co giãn tương thích **Responsive** trên nhiều kích thước màn hình khác nhau.

Ngay sau đây, em xin mời thầy cô và các bạn cùng đi vào chi tiết cấu trúc mã nguồn HTML của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai11.html`)
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Trỏ chuột vào các dòng code trong file `bai11.html`, cuộn từ từ từ đầu đến cuối trang]*

"Đầu tiên, chúng ta cùng quan sát tệp tin `bai11.html`.

- Ở phần đầu trang, tài liệu được khai báo chuẩn `<!DOCTYPE html>` với thuộc tính ngôn ngữ `lang="vi"`. Thẻ `<head>` bao gồm thẻ khai báo bảng mã UTF-8, thẻ `meta viewport` giúp trang hiển thị chuẩn xác trên thiết bị di động, và thẻ `<link>` để kết nối trực tiếp đến file định dạng `bai11.css`.

- Toàn bộ nội dung trang được bao bọc bên trong một khối `<div class="khung-thu-vien">`. Khối này đóng vai trò là container trung tâm, giúp giới hạn độ rộng tối đa và căn giữa toàn bộ giao diện bài tập.

- Tiếp theo, phần tiêu đề trang được định nghĩa bằng thẻ ngữ nghĩa `<header class="dau-thu-vien">`. Bên trong gồm một thẻ `<h1>` chứa tiêu đề nổi bật: *'Thư viện ảnh Việt Nam'*, và một đoạn văn `<p>` đóng vai trò làm dòng phụ đề giới thiệu ngắn gọn: *'Bộ sưu tập 6 danh thắng tiêu biểu — minh hoạ thẻ figure / figcaption'*.

- Trọng tâm của bài tập nằm ở khu vực nội dung chính, được bọc trong thẻ ngữ nghĩa `<main class="luoi-anh">`. Tại đây, em khai báo 6 thẻ `<figure class="the-anh">` đại diện cho 6 địa danh nổi tiếng của Việt Nam:
  1. Hình 1: Vịnh Hạ Long (`1-vinh-ha-long.jpg`)
  2. Hình 2: Hang Sơn Đoòng (`2-son-doong.jpg`)
  3. Hình 3: Thác Bản Giốc (`3-thac-ban-gioc.jpg`)
  4. Hình 4: Fansipan (`4-fansipan.jpg`)
  5. Hình 5: Đồng bằng sông Cửu Long (`5-mekong.jpg`)
  6. Hình 6: Động Phong Nha (`6-phong-nha.jpg`)

- Điểm mấu chốt ở đây là việc sử dụng cặp thẻ `<figure>` và `<figcaption>`. Thẻ `<figure>` biểu thị một đơn vị nội dung trực quan độc lập, và thẻ `<figcaption>` cung cấp chú thích văn bản gắn liền trực tiếp với hình ảnh đó. Đây là cấu trúc chuẩn ngữ nghĩa HTML5, rất tối ưu cho SEO cũng như các công cụ đọc màn hình hỗ trợ người khiếm thị."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai11.css`)
*(Thời lượng dự kiến: ~2 phút)*

*[Hành động: Chuyển sang tab `bai11.css`, bôi đen từng khối CSS khi giải thích]*

"Bây giờ, chúng ta sẽ chuyển sang tệp tin `bai11.css` để tìm hiểu cách tạo nên giao diện hiện đại và bắt mắt cho thư viện ảnh.

1. **Thiết lập cơ bản và Background:**
   - Em sử dụng bộ chọn toàn cục `*` với `box-sizing: border-box; margin: 0; padding: 0;` để loại bỏ khoảng cách mặc định của trình duyệt, giúp việc tính toán kích thước các phần tử luôn chuẩn xác.
   - Thẻ `body` được đặt màu nền tối hiện đại với mã màu `#0f172a` (màu xanh than đậm phong cách Slate), kết hợp với màu chữ trắng xám `#e2e8f0` giúp mắt nhìn rất êm dịu và làm nổi bật màu sắc rực rỡ của các bức ảnh.
   - Lớp `.khung-thu-vien` được đặt `max-width: 960px;` và `margin: 0 auto;` để căn đều giao diện vào giữa màn hình.

2. **Bố cục lưới CSS Grid (`.luoi-anh`):**
   - Ở đây, em kích hoạt thuộc tính `display: grid;`.
   - Dòng lệnh then chốt là `grid-template-columns: repeat(3, 1fr);`. Lệnh này tự động chia bố cục thành 3 cột bằng nhau, mỗi cột chiếm 1 phân số linh hoạt (`1fr`).
   - Thuộc tính `gap: 18px;` tạo khoảng cách đều đặn 18 pixel giữa các hàng và các cột mà không cần phải dùng `margin` thủ công.

3. **Tạo hình khối và hiệu ứng cho thẻ ảnh (`.the-anh`):**
   - Mỗi thẻ `.the-anh` có nền `#1e293b`, bo tròn góc 8px với `border-radius: 8px` và ẩn phần ảnh thừa bằng `overflow: hidden`.
   - Đổ bóng nhẹ phía sau bằng `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3)`.
   - Đặc biệt, khi người dùng rê chuột vào card ảnh: với selector `.the-anh:hover`, card sẽ được đẩy nổi nhẹ lên trên 4px thông qua `transform: translateY(-4px)` và bóng đổ đậm hơn, tạo chiều sâu 3D sống động nhờ `transition: transform 0.25s ease, box-shadow 0.25s ease`.

4. **Xử lý hình ảnh và chú thích:**
   - Đối với thẻ `img`, em thiết lập `width: 100%;` và cố định `height: 190px;`. Để ảnh không bao giờ bị méo mó hay co dãn sai tỉ lệ, em sử dụng thuộc tính cực kỳ hữu ích là `object-fit: cover;`. Thuộc tính này giữ nguyên tỉ lệ gốc của ảnh và tự động cắt cúp vừa vặn với khung hình 190px.
   - Thẻ `figcaption` được căn lề bên trong `padding: 12px 14px`, chữ màu xám sáng `#cbd5e1`, tạo sự tinh tế, trang nhã.

5. **Đáp ứng trên mọi thiết bị (Responsive Design):**
   - Em sử dụng 2 truy vấn `@media`:
     - Khi màn hình nhỏ hơn hoặc bằng 768px (máy tính bảng): lưới ảnh tự động chuyển sang 2 cột với `grid-template-columns: repeat(2, 1fr);`.
     - Khi màn hình nhỏ hơn 480px (điện thoại di động): lưới chuyển về 1 cột đơn `grid-template-columns: 1fr;` để người dùng dễ dàng cuộn xem trên điện thoại."

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Giữ màn hình VS Code hoặc chuyển nhẹ sang trình duyệt]*

"Về mặt JavaScript: Bài tập số 11 tập trung hoàn toàn vào việc rèn luyện cấu trúc ngữ nghĩa HTML5 (`figure`, `figcaption`) và kỹ thuật dàn trang thuần CSS Grid kết hợp hiệu ứng chuyển động CSS Transition. Do đó, bài tập không cần đến mã nguồn JavaScript mà vẫn đảm bảo trải nghiệm người dùng mượt mà, tối ưu hiệu năng tối đa khi render trên trình duyệt."

---

## PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Chuyển sang trình duyệt Google Chrome hoặc Edge hiển thị trang `bai11.html`]*

"Và ngay bây giờ, em xin mời thầy cô và các bạn cùng quan sát kết quả hiển thị thực tế trên trình duyệt web!

1. **Kiểm tra bố cục tổng thể:**
   - Như mọi người có thể thấy trên màn hình, trang web hiển thị rất rõ ràng với tiêu đề lớn màu trắng sáng trên nền tối hiện đại.
   - 6 bức ảnh danh lam thắng cảnh được sắp xếp đều tăm tắp thành 3 cột và 2 hàng. Nhờ có `object-fit: cover`, tất cả 6 bức ảnh đều có chiều cao bằng nhau chính xác là 190 pixel mà không hề bị méo hình.

2. **Trải nghiệm tương tác chuột (Hover Effect):**
   *[Hành động: Rê chuột lần lượt qua từng thẻ ảnh]*
   - Khi em rê chuột vào từng thẻ ảnh như Vịnh Hạ Long, Hang Sơn Đoòng hay Thác Bản Giốc, thẻ ảnh ngay lập tức nhấc nhẹ lên trên và đổ bóng sâu hơn, tạo cảm giác thẻ đang nổi lên mặt phẳng màn hình rất ấn tượng và chuyên nghiệp.

3. **Kiểm tra tính năng Responsive:**
   *[Hành động: Nhấn F12 mở Chrome DevTools, kéo thanh điều chỉnh độ rộng màn hình hoặc bật chế độ Device Toolbar]*
   - Em sẽ thu nhỏ dần cửa sổ trình duyệt:
     - Khi chiều rộng màn hình xuống dưới 768px, lưới ảnh tự động co lại thành 2 cột một cách rất mượt mà.
     - Tiếp tục thu nhỏ xuống dưới 480px như màn hình điện thoại iPhone hay Android, toàn bộ 6 thẻ ảnh đã xếp thành 1 cột dọc thẳng đứng, các bức ảnh vẫn giữ trọn vẹn độ nét và chú thích rõ ràng.
   - Mọi thứ hoạt động hoàn toàn chính xác theo đúng yêu cầu đề bài!"

---

## PHẦN 6: LỜI CẢM ƠN KẾT THÚC
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Đưa màn hình về lại giao diện hoàn chỉnh của trang web, giọng nói chân thành, chào tạm biệt]*

"Dạ, phần trình bày thuyết minh về **Bài thực hành số 11 — Thư viện ảnh danh thắng Việt Nam** của em xin phép được khép lại tại đây.

Qua bài tập này, em đã nắm vững cách khai báo các thẻ ngữ nghĩa HTML5, cách tận dụng sức mạnh linh hoạt của CSS Grid và kỹ thuật viết Media Query để xử lý giao diện đáp ứng.

Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi video của em. Kính chúc thầy cô luôn dồi dào sức khỏe và chúc các bạn học tập thật tốt! Xin chào và hẹn gặp lại trong bài tập tiếp theo ạ!"
