# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 5: THIẾT KẾ TRANG GIỚI THIỆU CÔNG TY HOA TƯƠI VỚI BỐ CỤC FLEXBOX 2 CỘT, DANH SÁCH TÙY BIẾN VÀ NHÃN MỤC INLINE-BLOCK (HTML5 & CSS3)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file kịch bản này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với tốc độ vừa phải, tự tin, phát âm chuẩn các thuật ngữ Flexbox, list-style, và thuộc tính display.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển tab hoặc bật công cụ để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng để bạn kiểm soát tiến độ không bị quá nhanh hay quá chậm.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | Mốc 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình.
- Trên màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai5.html`, `bai5.css` cùng file ảnh `Rose.gif`.
- Bật sẵn tab trình duyệt hiển thị giao diện trang giới thiệu Công ty Hoa tươi Nhân Ái với bố cục 2 cột cân đối và gam màu hoa hồng tươi tắn.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh hạnh được gửi tới thầy cô và các bạn video thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 5: Thiết kế trang thông tin doanh nghiệp 'Công ty Hoa tươi Nhân Ái' với bố cục Flexbox 2 cột hiện đại, tùy biến danh sách Unordered List và tạo huy hiệu nhãn mục bằng Inline-block trong HTML5 và CSS3**.
> 
> Trong kỷ nguyên thương mại điện tử và hiện diện số, mọi doanh nghiệp — từ các tập đoàn lớn cho đến những thương hiệu kinh doanh hoa tươi, quà tặng — đều cần có một trang giới thiệu 'About Us' thật chuyên nghiệp, tinh tế và mạch lạc. Khách hàng khi ghé thăm trang web cần nhìn thấy ngay hình ảnh đại diện thương hiệu sống động ở một bên, và các thông tin then chốt như lịch sử thành lập, năng lực cung ứng, hệ thống cửa hàng và thông tin liên hệ được trình bày khoa học ở bên còn lại.
> 
> Bài tập thực hành số 5 này chính là bài học nền tảng giúp sinh viên chúng em làm chủ toàn bộ kỹ năng xây dựng bố cục đa cột và định dạng danh sách chuyên nghiệp:
> 
> - Thứ nhất: Khai thác sức mạnh của mô hình hộp linh hoạt **CSS Flexbox** (`display: flex`) để dàn trang bố cục 2 cột song song: cột hình ảnh sản phẩm bên trái (`.cot-anh`) và cột nội dung chi tiết bên phải (`.cot-noi-dung`).
> - Thứ hai: Làm chủ thuộc tính `display: inline-block` để tạo các nhãn mục (Badge / Pill tags) với nền màu hồng phấn dịu ngọt, vừa có thể ôm sát nội dung chữ vừa cho phép định dạng padding, margin hoàn chỉnh.
> - Thứ ba: Tùy biến dấu đầu dòng của danh sách không có thứ tự bằng thuộc tính `list-style-type: square` (dấu chấm vuông) cho mục Giới thiệu và `list-style-type: circle` (vòng tròn rỗng) cho mục Liên hệ.
> - Thứ tư: Định dạng liên kết bản quyền thương hiệu trang trọng ở đáy trang với thẻ `<a>` và thuộc tính `text-decoration: underline`.
> 
> Lộ trình video hôm nay gồm có 6 phần:
> 1. Lời mở đầu & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết cốt lõi về mô hình Flexbox, hệ thống danh sách HTML và xử lý đa phương tiện hình ảnh trên web.
> 3. Giải thích chi tiết từng dòng mã nguồn HTML `bai5.html`.
> 4. Giải thích chi tiết bảng định dạng CSS `bai5.css`.
> 5. Thực hành demo trực tiếp trên trình duyệt, soi F12 Developer Tools (Elements, Flexbox Badge, Box Model, kiểm tra responsive).
> 6. Tổng kết bài học kinh nghiệm, lưu ý kỹ thuật và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bắt đầu bước vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | Mốc 02:30 - 06:00)

🎬 **Thao tác:** 
- Rê chuột vào phần mở đầu file `bai5.html` và `bai5.css` trong VS Code.
- Bôi đen thuộc tính `display: flex`, `list-style-type`, và `display: inline-block`.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng code thực tế, em xin tóm lược các kiến thức lý thuyết nền tảng mà bài tập này vận dụng:
> 
> **1. Bố cục hiện đại với CSS Flexbox:**
> Trước khi Flexbox ra đời, các lập trình viên web thường phải dàn cột bằng kỹ thuật `float` kết hợp `clear` rất phức tạp và dễ phát sinh lỗi vỡ khung. Flexbox (Flexible Box Layout) ra đời như một cuộc cách mạng:
> - Chỉ với một khai báo đơn giản `display: flex;` tại phần tử cha, các phần tử con trực tiếp bên trong sẽ ngay lập tức được xếp thành hàng ngang (Flex Row).
> - Thuộc tính `gap: 30px;` tự động tạo khoảng cách giãn cách hoàn hảo giữa các cột mà không cần phải tính toán trừ lề `margin` thủ công.
> - `align-items: flex-start;` giữ cho các cột căn đỉnh trên cùng một cách tự nhiên.
> - Cặp thuộc tính phân chia tỷ lệ: `flex-shrink: 0;` giúp cột ảnh giữ nguyên kích thước cố định 220px không bị co dúm lại, và `flex: 1;` cho phép cột nội dung tự động nở rộng chiếm trọn phần không gian còn lại của khung trang.
> 
> **2. Mô hình hiển thị Display và thuộc tính Inline-block:**
> Trong CSS, mỗi phần tử đều có một cơ chế hiển thị:
> - `block`: Chiếm trọn 100% chiều ngang màn hình và luôn ngắt dòng.
> - `inline`: Chiếm vừa vặn độ dài của chữ, nằm cùng hàng với các chữ khác, nhưng **không thể** thiết lập chiều rộng, chiều cao, hay padding trên dưới một cách chuẩn mực.
> - `inline-block`: Là sự kết hợp hoàn hảo của cả hai thế giới! Nó chỉ chiếm độ rộng vừa đủ bằng nội dung bên trong như inline, nhưng lại cho phép ta thoải mái định dạng `padding`, `margin`, `border-radius` và `background-color` như một khối hộp block hoàn chỉnh. Đây chính là bí quyết để tạo nên các thẻ nhãn mục (`.nhan-muc`) tuyệt đẹp trong bài này.
> 
> **3. Tùy biến dấu đầu dòng danh sách List-style-type:**
> Thẻ danh sách không thứ tự `<ul>` (Unordered List) theo mặc định sẽ hiển thị dấu chấm tròn đặc đen (`disc`). Tuy nhiên, CSS cho phép chúng ta thay đổi linh hoạt thông qua thuộc tính `list-style-type`:
> - `list-style-type: square;`: Dấu chấm hình vuông sắc nét, tạo cảm giác dứt khoát, chuyên nghiệp cho các điều khoản giới thiệu.
> - `list-style-type: circle;`: Vòng tròn rỗng thanh lịch, tạo sự phân hóa thị giác rõ ràng cho phần thông tin liên hệ.
> - Ngoài ra, chúng ta còn có thể dùng `none` để xóa bỏ hoàn toàn dấu đầu dòng khi làm menu thanh điều hướng Navbar.
> 
> **4. Đa phương tiện và hình ảnh trong định vị thương hiệu:**
> Trong bài tập này, việc nhúng bức ảnh bông hoa hồng `Rose.gif` mang lại sinh khí và màu sắc sống động cho trang web. Ngoài ra trong HTML5, khi làm việc với đa phương tiện, chúng ta còn có cặp thẻ ngữ nghĩa `<figure>` và `<figcaption>` để chú thích ảnh, các thẻ `<audio>`, `<video>` cho âm thanh và phim giới thiệu, hoặc đồ họa vector `<svg>` cho logo sắc nét ở mọi độ phân giải."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai5.html`) (Thời lượng: ~4 phút 30 giây | Mốc 06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai5.html`.
- Bôi đen tuần tự các dòng từ dòng 1 đến dòng 43, chỉ rõ cấu trúc lồng nhau của hai cột.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi vào mổ xẻ chi tiết 43 dòng mã nguồn của tệp `bai5.html`:
> 
> - **Phần `<head>` từ dòng 1 đến dòng 8:**
>   - Dòng 1: Khai báo chuẩn `<!DOCTYPE html>`.
>   - Dòng 2: `<html lang="vi">` quy định ngôn ngữ tiếng Việt.
>   - Dòng 4: Khai báo `<meta charset="UTF-8">`, bảo đảm hiển thị sắc nét toàn bộ các từ ngữ tiếng Việt có dấu như 'Công ty Hoa tươi Nhân Ái', 'Nguyễn Văn Cừ', 'bán lẻ'.
>   - Dòng 5: Thẻ viewport thích ứng co dãn trên điện thoại.
>   - Dòng 6: Thẻ `<title>Bài 5 - Trang công ty hoa tươi</title>` hiển thị tiêu đề tab.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai5.css">` liên kết đến bảng định kiểu bên ngoài.
> 
> - **Tiếp theo là phần thân trang `<body>` từ dòng 9 đến dòng 41:**
>   - Dòng 11: Toàn bộ nội dung được bao bọc trong `<div class="khung-trang">`. Thẻ này đóng vai trò giới hạn chiều rộng trang web ở mức 750px và căn giữa màn hình.
>   
>   - Dòng 12: Thẻ tiêu đề chính cấp 1:
>     `<h1 class="tieu-de-cong-ty">Công ty Hoa tươi Nhân Ái</h1>`.
>     Tiêu đề thương hiệu mang tông màu hồng tím sẫm của hoa hồng nhung, tạo ấn tượng ấm áp và tin cậy ngay từ cái nhìn đầu tiên.
> 
>   - Dòng 14: Thẻ container trọng tâm của bố cục: `<div class="khung-hai-cot">`. Thẻ này sẽ được kích hoạt thuộc tính `display: flex` trong CSS để chia trang web thành hai cột độc lập:
> 
>     - **Cột thứ nhất bên trái (Dòng 15 - 17): `<div class="cot-anh">`:**
>       - Bên trong chứa thẻ hình ảnh: `<img src="../Kho-anh/Bai05/Rose.gif" alt="Hoa tươi Nhân Ái" class="anh-hoa">`.
>       - Bức ảnh bông hoa hồng đỏ thắm nở rộ được đặt ở cột này, đóng vai trò như linh hồn hình ảnh của công ty.
> 
>     - **Cột thứ hai bên phải (Dòng 19 - 37): `<div class="cot-noi-dung">`:**
>       - Chứa toàn bộ thông tin hoạt động của doanh nghiệp, được chia làm 2 phần rành mạch:
>       
>       - **Phần 1 - Giới thiệu (Dòng 20 - 26):**
>         - Nhãn mục tiêu đề: `<div class="nhan-muc">1. Giới thiệu</div>`.
>         - Theo sau là danh sách không thứ tự `<ul class="danh-sach-vuong">` gồm 4 thẻ `<li>`:
>           + `<li>Thành lập ngày 25/05/2007</li>`
>           + `<li>Chuyên cung cấp các loại hoa tươi</li>`
>           + `<li>Có trên 20 cửa hàng bán lẻ tại TP.HCM</li>`
>           + `<li>Nhận kết giỏ hoa theo yêu cầu của khách hàng</li>`
> 
>       - **Phần 2 - Liên hệ (Dòng 28 - 32):**
>         - Nhãn mục tiêu đề: `<div class="nhan-muc">2. Liên hệ</div>`.
>         - Theo sau là danh sách không thứ tự `<ul class="danh-sach-tron">` gồm 2 thẻ `<li>`:
>           + `<li>Điện thoại: 84-08-8351056</li>`
>           + `<li>Địa chỉ: 227 Nguyễn Văn Cừ, Quận 5, TP.HCM</li>`
> 
>       - **Phần 3 - Dòng thông tin bản quyền (Dòng 34 - 36):**
>         - `<div class="dong-ban-quyen"><a href="#">© Copyright: Công ty Hoa tươi Nhân Ái</a></div>`.
>         - Thẻ siêu liên kết `<a>` với biểu tượng bản quyền `© Copyright` khẳng định tính chính danh và chuyên nghiệp của doanh nghiệp.
> 
>   - Dòng 38 và 39 đóng các thẻ `div` khung hai cột và khung trang.
> 
> Cấu trúc mã nguồn HTML vô cùng khoa học, ngữ nghĩa trong sáng, phân tách rạch ròi giữa cột đồ họa và cột văn bản thông tin."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai5.css`) (Thời lượng: ~4 phút 30 giây | Mốc 10:30 - 15:00)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai5.css`.
- Rê chuột qua 94 dòng CSS, bôi đen và phân tích từng quy tắc: `body`, `.khung-trang`, `.tieu-de-cong-ty`, `.khung-hai-cot`, `.cot-anh`, `.nhan-muc`, `.danh-sach-vuong`, `.danh-sach-tron`, và `.dong-ban-quyen`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng phân tích bảng định dạng kiểu dáng `bai5.css` gồm 94 dòng code được thiết kế rất chỉn chu:
> 
> **1. Định dạng thẻ toàn trang `body` và khung bao (từ dòng 5 đến dòng 15):**
> - `body`: Nền trắng sáng tinh khôi `#ffffff`, sử dụng font chữ `Arial, sans-serif` hiện đại, dễ đọc, khoảng đệm `padding: 40px 20px;` giúp bố cục không bị sát mép màn hình.
> - `.khung-trang`: Đặt `max-width: 750px; margin: 0 auto;` giúp trang web luôn nằm ở vị trí trung tâm màn hình một cách cân xứng.
> 
> **2. Tiêu đề thương hiệu `.tieu-de-cong-ty` (từ dòng 17 đến dòng 24):**
> - `color: #C2185B;`: Sử dụng mã màu hồng hoa vân anh (Deep Pink / Magenta), một tông màu sang trọng, ngọt ngào, gắn liền với các sản phẩm hoa tươi nghệ thuật.
> - `text-align: center; font-size: 26px; font-weight: bold; margin-bottom: 30px;`: Căn giữa, chữ to nổi bật và tạo khoảng cách 30px thông thoáng với khối 2 cột phía dưới.
> 
> **3. Bố cục Flexbox 2 cột `.khung-hai-cot` (từ dòng 26 đến dòng 47):**
> - `display: flex;`: Kích hoạt mô hình Flexbox, tự động biến hai khối con `.cot-anh` và `.cot-noi-dung` nằm song song trên một hàng ngang.
> - `gap: 30px;`: Tạo khoảng hở 30px giữa hai cột một cách chuẩn xác mà không cần dùng margin.
> - `align-items: flex-start;`: Căn đều đỉnh trên của hai cột, giúp bức ảnh và dòng nhãn mục đầu tiên nằm ngang hàng thẳng thớm.
> - `.cot-anh`: Đặt `width: 220px; flex-shrink: 0;` — nghĩa là cột ảnh luôn giữ đúng bề rộng 220px, tuyệt đối không bị co lại khi màn hình thu nhỏ. Thẻ `.anh-hoa` có `max-width: 100%; height: auto; display: block;` đảm bảo bức ảnh hiển thị sắc nét theo đúng tỷ lệ gốc.
> - `.cot-noi-dung`: Khai báo `flex: 1;`, cho phép cột nội dung tự động co dãn chiếm trọn toàn bộ phần không gian còn lại bên phải.
> 
> **4. Nghệ thuật tạo nhãn mục `.nhan-muc` (từ dòng 49 đến dòng 60):**
> - `background-color: #FFC0CB;`: Nền màu hồng phấn nhẹ nhàng (Pink), tạo sự ăn ý tuyệt đối với màu hoa hồng của tiêu đề.
> - `color: #000000; font-weight: bold; font-style: italic;`: Chữ đen in đậm và nghiêng nhẹ.
> - `display: inline-block;`: Đây là thuộc tính mấu chốt! Nhờ `inline-block`, nhãn chỉ dài vừa bằng độ dài của chữ '1. Giới thiệu' hay '2. Liên hệ', nhưng lại cho phép ta thêm `padding: 4px 12px;` và `border-radius: 4px;` để tạo hình một chiếc huy hiệu bo góc xinh xắn.
> - `margin-bottom: 12px; margin-top: 10px;`: Tạo khoảng thở trên dưới nhịp nhàng.
> 
> **5. Tùy biến dấu đầu dòng danh sách (từ dòng 62 đến dòng 81):**
> - `.danh-sach-vuong`: Khai báo `list-style-type: square;` — biến các dấu chấm thành hình vuông sắc nét.
> - `.danh-sach-tron`: Khai báo `list-style-type: circle;` — biến các dấu chấm thành các vòng tròn rỗng thanh mảnh.
> - Cả hai danh sách đều có `padding-left: 20px;` để lùi đầu dòng vừa vặn, và các thẻ `li` được thiết lập cỡ chữ 15px, màu xám đậm `#222222`, cùng khoảng cách dòng `line-height: 1.8;` tạo độ thông thoáng tuyệt hảo cho mắt người đọc.
> 
> **6. Dòng bản quyền `.dong-ban-quyen` (từ dòng 83 đến dòng 94):**
> - `text-align: center; margin-top: 15px;`: Căn giữa dòng chữ ở đáy cột nội dung.
> - Thẻ link `a`: Mang sắc xanh dương `#0000EE`, gạch chân `text-decoration: underline;`, font in đậm 14px, đúng chuẩn phong cách liên kết pháp lý trên các trang web chính thức."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~4 phút | Mốc 15:00 - 19:00)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị trang `bai5.html`.
- Bấm phím `F12` mở Developer Tools.
- Lần lượt thực hiện các thao tác:
  1. Trình diễn toàn bộ giao diện 2 cột trên trình duyệt.
  2. Bật tab Elements, trỏ vào thẻ `.khung-hai-cot`, chỉ cho người xem huy hiệu **flex** màu tím của Chrome DevTools.
  3. Bật chế độ hiển thị lưới Flexbox Overlay để thấy đường phân chia cột và khoảng cách `gap: 30px`.
  4. Trỏ vào nhãn `.nhan-muc` kiểm tra thuộc tính `display: inline-block` và Box Model.
  5. Soi vào hai danh sách `ul`, phóng to để người xem nhìn rõ các dấu chấm vuông `square` và vòng tròn rỗng `circle`.
  6. Bật tab Console kiểm tra không có lỗi tải ảnh.
  7. Bật Device Toolbar (`Ctrl + Shift + M`), kiểm tra độ co dãn trên các thiết bị.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn quan sát trực tiếp kết quả chạy thực nghiệm trên trình duyệt Google Chrome!
> 
> **1. Quan sát giao diện tổng thể:**
> - Toàn bộ trang web hiện lên với vẻ đẹp thanh lịch, nữ tính và rất chuyên nghiệp.
> - Tiêu đề lớn 'Công ty Hoa tươi Nhân Ái' màu hồng sẫm `#C2185B` nổi bật ngay trung tâm.
> - Bố cục hai cột được phân chia vô cùng ngăn nắp:
>   + Bên trái là bức ảnh bông hoa hồng nhung duyên dáng trong khung 220px.
>   + Bên phải là cột nội dung với hai chiếc huy hiệu nhãn mục màu hồng phấn xinh xắn: '1. Giới thiệu' và '2. Liên hệ'.
> - Phía dưới mục Giới thiệu, 4 dòng thông tin được đánh dấu bằng các dấu chấm vuông đen sắc nét (`square`).
> - Phía dưới mục Liên hệ, số điện thoại và địa chỉ được đánh dấu bằng các vòng tròn rỗng (`circle`) tinh tế.
> - Dưới cùng là dòng bản quyền liên kết màu xanh dương uy tín.
> 
> **2. Mổ xẻ công cụ F12 Developer Tools:**
> - *[Thao tác: Bấm F12, chọn tab Elements, click chọn thẻ `<div class="khung-hai-cot">`]*
> - Thầy cô có thể thấy trên tab Elements, Chrome hiển thị ngay một huy hiệu nhỏ màu tím ghi chữ **flex**.
> - *[Thao tác: Nhấp vào huy hiệu flex để bật Flexbox Overlay]*
> - Ngay lập tức, trình duyệt vẽ lên màn hình các đường lưới trực quan: Cột ảnh bên trái rộng đúng 220px, khoảng hở `gap: 30px` được tô vân sọc chéo màu xám mờ ở giữa, và cột nội dung bên phải tự động chiếm trọn vẹn phần diện tích còn lại.
> - Trỏ chuột vào thẻ `.nhan-muc`: Trong cửa sổ Styles hiển thị rõ `display: inline-block`. Nhờ đó nhãn mục chỉ ôm vừa vặn chữ '1. Giới thiệu' chứ không hề bị tràn hết chiều ngang như thẻ `div` mặc định.
> 
> **3. Kiểm tra Console và Responsive:**
> - *[Thao tác: Chuyển tab Console]*
> - Console hoàn toàn sạch bóng lỗi, file `Rose.gif` tải về trơn tru với mã HTTP 200.
> - *[Thao tác: Bật Device Toolbar `Ctrl + Shift + M`]*
> - Khi em thay đổi độ phân giải màn hình máy tính bảng và laptop, khoảng cách giữa hai cột vẫn duy trì tỷ lệ 30px hoàn hảo, không bị đè lấn nội dung lên nhau."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | Mốc 19:00 - 20:30)

🎬 **Thao tác:** 
- Chuyển màn hình về lại Visual Studio Code hoặc giữ khung hình toàn cảnh trang web.
- Giọng nói trang trọng, tự tin và truyền cảm hứng.

🗣️ **Lời đọc:**
> "Qua việc nghiên cứu và hoàn thành Bài tập thực hành số 5, bản thân em đã gặt hái được những kinh nghiệm lập trình giao diện hết sức thiết thực:
> 
> - **Thứ nhất:** Làm chủ mô hình dàn trang hiện đại Flexbox (`display: flex`, `gap`, `flex-shrink`, `flex: 1`). Đây là nền tảng cốt lõi của mọi framework giao diện phổ biến hiện nay như Bootstrap hay Tailwind CSS.
> - **Thứ hai:** Phân biệt rõ rệt và thành thạo sử dụng các giá trị của thuộc tính `display`, đặc biệt là ứng dụng của `inline-block` trong việc tạo các thành phần giao diện nhỏ như thẻ Tag, Badge, nút bấm hay thanh điều hướng.
> - **Thứ ba:** Nắm vững cách tùy biến dấu đầu dòng danh sách bằng thuộc tính `list-style-type`, giúp cấu trúc thông tin của trang web trở nên sống động, có thứ bậc rõ ràng hơn rất nhiều so với cách trình bày văn bản đơn thuần.
> 
> Video thuyết minh chi tiết cho Bài tập số 5 của em đến đây xin được phép khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo cùng toàn thể các bạn sinh viên đã luôn đồng hành, theo dõi và ủng hộ chuỗi video bài tập thực hành này. Kính chúc quý thầy cô luôn dồi dào sức khỏe, hạnh phúc và thành công trên con đường giảng dạy! Chúc các bạn sinh viên luôn học tập thật tốt và tạo ra thêm nhiều sản phẩm web ấn tượng!
> 
> Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 5 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
