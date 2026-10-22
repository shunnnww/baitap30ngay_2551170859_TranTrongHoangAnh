# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 25: THIẾT KẾ LANDING PAGE DU LỊCH HIỆN ĐẠI BẰNG BOOTSTRAP 5 (NAVBAR RESPONSIVE HAMBURGER, HERO BANNER & LƯỚI CARD 3 CỘT)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Mở song song VS Code bên trái (`Windows + Mũi tên trái`) và Chrome hiển thị `bai25.html` bên phải (`Windows + Mũi tên phải`). Đặt tài liệu kịch bản này ở góc nhìn thuận mắt để đọc tự tin, không bị vấp.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói dõng dạc, rành mạch, nhấn mạnh vào các lớp tiện ích (Utility Classes) và hệ thống lưới Grid System của Bootstrap 5.
   - 🎬 **Thao tác:** Hành động chuột, bấm nút hamburger menu trên mobile, rê chuột vào các thẻ card, mở F12 kiểm tra Bootstrap CDN và co dãn Responsive.
   - ⏱️ **Mốc thời gian:** Định hướng kiểm soát tiến độ thuyết trình suốt 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây / Mốc: 00:00 - 02:30)

🎬 **Thao tác:**
- Bật OBS ghi hình toàn màn hình hoặc cửa sổ làm việc.
- Mở trang `bai25.html` trên trình duyệt Chrome, cuộn mượt mà từ thanh Navbar xanh dương, qua khối Hero trắng tinh tế đến lưới 3 Cards du lịch và chân trang Footer tối màu.
- Thu nhỏ cửa sổ trình duyệt để thấy nút 3 gạch Hamburger xuất hiện, bấm vào nút gạt mở menu xổ xuống.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản cùng toàn thể các bạn sinh viên đang theo dõi video báo cáo bài tập thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được trình bày và thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 25: Xây dựng Landing Page du lịch Việt Nam chuyên nghiệp bằng CSS Framework Bootstrap 5 với thanh điều hướng Navbar thích ứng Hamburger, khối Hero Banner trung tâm và Lưới Card 3 cột cân xứng**.
> 
> Thưa thầy cô và các bạn, trong thực tế phát triển phần mềm doanh nghiệp, việc xây dựng giao diện từ con số không (From Scratch) bằng CSS thuần tuy giúp chúng ta rèn luyện nền tảng vững chắc, nhưng khi bước vào các dự án thương mại đòi hỏi tốc độ phát triển nhanh chóng và tính đồng bộ cao, các **CSS Framework** chuyên nghiệp như **Bootstrap 5** chính là vũ khí tối thượng của các kỹ sư Front-end.
> 
> Bootstrap 5 mang lại một hệ thống lưới 12 cột chuẩn mực quốc tế, hàng trăm lớp tiện ích (Utility Classes) mạnh mẽ và các thành phần giao diện được kiểm thử nghiêm ngặt trên hàng tỷ thiết bị trên thế giới.
> 
> Với Bài tập số 25, chúng em đặt ra 4 mục tiêu kỹ thuật trọng tâm:
> - Thứ nhất: Tích hợp thư viện Bootstrap 5 phiên bản mới nhất `5.3.3` qua CDN, bao gồm cả tệp CSS định kiểu và tệp JavaScript Bundle xử lý tương tác logic.
> - Thứ hai: Làm chủ thành phần **Navbar Responsive**, thiết kế thanh menu đa năng tự động hiển thị đầy đủ trên màn hình máy tính và tự động gập gọn thành biểu tượng menu 3 gạch (Hamburger Toggler) có thể đóng/mở mượt mà trên thiết bị di động mà không cần viết thêm một dòng JavaScript tùy biến nào.
> - Thứ ba: Ứng dụng mô hình **Bootstrap Grid System** với lớp `row g-4` và `col-md-4`, kết hợp thành phần `card h-100 shadow-sm` để tạo ra lưới 3 điểm đến danh lam thắng cảnh Việt Nam với chiều cao bằng nhau tuyệt đối và hình ảnh tỉ lệ chuẩn với `object-fit: cover`.
> - Thứ tư: Kỹ thuật giữ chân trang luôn dính chặt ở đáy màn hình (**Sticky Footer**) bằng bộ ba lớp Flexbox của Bootstrap: `d-flex flex-column min-vh-100` kết hợp với `mt-auto`.
> 
> Cấu trúc buổi thuyết minh của em sẽ gồm 6 phần:
> 1. Tổng quan lý thuyết về Bootstrap 5 Grid System và Component Architecture.
> 2. Phân tích chi tiết từng thẻ HTML và class Bootstrap trong `bai25.html`.
> 3. Giải mã các đoạn CSS tùy biến bổ trợ thẩm mỹ.
> 4. Phân tích cơ chế hoạt động của Bootstrap JavaScript Plugin trong Navbar Collapse.
> 5. Trực tiếp thực hành demo trên trình duyệt, soi F12 Developer Tools và kiểm thử tương tác Responsive trên nhiều thiết bị.
> 6. Tổng kết bài học và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & NỀN TẢNG KỸ THUẬT CỐT LÕI (Thời lượng: ~3 phút 30 giây / Mốc: 02:30 - 06:00)

🎬 **Thao tác:**
- Chuyển sang VS Code, cuộn đến dòng 8 và dòng 106 trong file `bai25.html` để chỉ vào liên kết CDN của Bootstrap 5 CSS và JS.
- Bôi đen cụm từ `col-md-4`, `navbar-expand-md`, `data-bs-toggle="collapse"`.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng code cụ thể, em xin phép dành ra hơn 3 phút để hệ thống hóa 3 trụ cột kỹ thuật của Bootstrap 5 mà dự án này áp dụng:
> 
> **Thứ nhất: Hệ thống lưới 12 cột (Bootstrap 5 12-Column Grid System).**
> - Bootstrap chia chiều ngang của vùng chứa (`.container`) thành đúng 12 phần bằng nhau.
> - Cú pháp dàn trang chuẩn luôn tuân theo mô hình 3 cấp bậc lồng nhau:
>   `Container -> Row -> Col`.
> - Trong bài tập 25, chúng em sử dụng lớp `.col-md-4`:
>   + Tiền tố `col`: Khai báo phần tử là một cột trong lưới.
>   + Hậu tố điểm ngắt `md` (Medium): Đại diện cho mốc kích thước màn hình từ `768px` trở lên (tương đương máy tính bảng và laptop).
>   + Con số `4`: Chiều rộng của mỗi cột chiếm 4/12 phần không gian. Do $4 \times 3 = 12$, nên 3 cột này sẽ dàn hàng ngang vừa vặn hoàn hảo trên một hàng!
>   + Khi màn hình thu nhỏ xuống dưới mốc `768px` (thiết bị di động), vì không có tiền tố cho màn hình nhỏ, Bootstrap sẽ tự động đưa các cột về kích thước mặc định 12/12, tức là tự động xếp chồng thành một cột thẳng đứng.
> - Lớp `.g-4` (Gutters level 4): Thiết lập khoảng cách rãnh giữa các cột và hàng là 1.5rem (tương đương 24px) theo cả trục ngang và trục dọc.
> 
> **Thứ hai: Cơ chế hoạt động của Bootstrap Navbar Collapse Component.**
> - Thanh điều hướng Navbar sử dụng lớp `.navbar-expand-md`:
>   + Trên màn hình lớn hơn 768px, toàn bộ danh sách menu sẽ 'mở rộng' (expand) nằm ngang cân đối.
>   + Dưới 768px, menu sẽ tự động 'co lại' (collapse) và ẩn đi.
> - Để kích hoạt menu trên điện thoại, Bootstrap sử dụng thuộc tính dữ liệu HTML5 (Data Attributes):
>   `data-bs-toggle="collapse"` và `data-bs-target="#navTravel"`.
>   Khi người dùng bấm vào nút ba gạch có class `.navbar-toggler`, thư viện `bootstrap.bundle.min.js` sẽ tự động tìm kiếm phần tử có `id="navTravel"` và thực hiện hoạt ảnh trượt thả mềm mại mà lập trình viên không cần viết bất kỳ dòng mã xử lý nào.
> 
> **Thứ ba: Kỹ thuật căn chỉnh chiều cao thẻ Card với h-100 và Flexbox.**
> - Một trong những vấn đề đau đầu nhất khi làm lưới Card là: các đoạn văn miêu tả có độ dài ngắn khác nhau, dẫn đến thẻ Card dài thẻ Card ngắn, và các nút bấm bị thụt thò không thẳng hàng.
> - Bootstrap 5 giải quyết triệt để vấn đề này bằng bộ công cụ:
>   + Lớp `.h-100` trên thẻ Card ép tất cả các Card trong cùng hàng phải cao bằng nhau 100%.
>   + Lớp `.d-flex .flex-column` trên phần `.card-body` biến thân thẻ thành Flexbox trục đứng.
>   + Đặt lớp `.flex-grow-1` lên đoạn văn bản mô tả để đoạn văn tự động chiếm trọn phần không gian thừa ở giữa, qua đó đẩy khối nút bấm 'Xem thêm' nằm sát đáy thẻ một cách ngay ngắn tăm tắp."

---

## ⏱️ PHẦN 3: PHÂN TÍCH CHI TIẾT TỪNG DÒNG MÃ NGUỒN HTML (`bai25.html`) (Thời lượng: ~5 phút / Mốc: 06:00 - 11:00)

🎬 **Thao tác:**
- Mở toàn màn hình tệp `bai25.html` trong VS Code.
- Bôi đen và phân tích tuần tự 5 phân khu: Phần Head & CDN, Thanh điều hướng Navbar, Khối Hero trung tâm, Lưới 3 Cards và Chân trang Sticky Footer.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng đi vào mổ xẻ chi tiết từng khối mã nguồn trong tệp `bai25.html`.
> 
> Tệp tin bao gồm 109 dòng code HTML5 kết hợp cùng hệ sinh thái lớp tiện ích của Bootstrap 5:
> 
> - **Dòng 1 đến dòng 8: Khai báo tài liệu và nhúng Bootstrap CSS:**
>   - Dòng 1 đến 6: Các thẻ tiêu chuẩn `<!DOCTYPE html>`, `lang="vi"`, mã hóa `UTF-8` và Viewport. Tiêu đề `<title>`: *'Bài 25 - Trang du lịch với Navbar & Grid'*.
>   - Dòng 8: Nhúng tệp CSS của Bootstrap 5 thông qua mạng phân phối nội dung CDN chính thức:
>     `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`.
> 
> - **Dòng 9 đến dòng 25: Khối CSS tùy biến nội bộ (`<style>`):**
>   - `.anh-card`: Cố định chiều cao ảnh danh lam thắng cảnh là `190px`, kết hợp `object-fit: cover;` để ảnh luôn vừa khít khung mà không bị méo tỉ lệ.
>   - `.hero-box`: Tạo khối nền trắng bo góc 12px, đệm lề rộng rãi 45px, khoảng cách trên dưới thoáng đãng và đổ bóng nhẹ sang trọng.
>   - `.card`: Bo góc tròn mềm mại 8px và ẩn phần tràn bằng `overflow: hidden;`.
> 
> - **Dòng 27: Thẻ `<body>` với kỹ thuật dàn trang dính chân trang:**
>   - Lớp `bg-light`: Nền trang màu xám sáng thanh lịch đặc trưng của Bootstrap.
>   - Bộ ba lớp: `d-flex flex-column min-vh-100`: Biến body thành Flexbox cột với chiều cao tối thiểu bằng 100% chiều cao màn hình trình duyệt.
> 
> - **Dòng 30 đến dòng 45: Thanh điều hướng Navbar chuẩn mực:**
>   - Thẻ `<nav class="navbar navbar-expand-md navbar-dark bg-primary py-2">`:
>     + `bg-primary`: Nền xanh dương đậm tràn đầy sức sống du lịch.
>     + `navbar-dark`: Chữ và biểu tượng tự động chuyển sang màu sáng tương phản.
>     + `py-2`: Đệm lề trên dưới nhẹ nhàng.
>   - Dòng 31: Khối bao `.container` giúp giữ nội dung menu thẳng lề với phần thân bên dưới.
>   - Dòng 32: Thương hiệu trang web `<a class="navbar-brand fw-bold" href="#">CSE.TLU Travel</a>`.
>   - Dòng 33 đến 35: Nút bấm ba gạch di động `<button class="navbar-toggler">` chứa biểu tượng `.navbar-toggler-icon`.
>   - Dòng 36 đến 43: Vùng menu co dãn `<div class="collapse navbar-collapse justify-content-end" id="navTravel">`:
>     + `justify-content-end`: Đẩy toàn bộ các mục liên kết về sát mép bên phải.
>     + 4 mục menu: *Trang chủ* (được làm nổi bật với chữ trắng `text-white fw-semibold`), cùng các mục *Điểm đến*, *Tour*, *Liên hệ* mang màu trắng mờ thanh nhã `text-white-50`.
> 
> - **Dòng 47 đến dòng 54: Khối Hero Banner chào đón:**
>   - Được đặt trong `.container` với class `.hero-box text-center`.
>   - Tiêu đề cực lớn chuẩn typography: `<h1 class="display-6 fw-bold text-primary mb-3">Khám phá Việt Nam</h1>`.
>   - Đoạn phụ đề mô tả tinh tế: `<p class="text-secondary mb-4">Hành trình qua những kỳ quan thiên nhiên đẹp nhất đất nước.</p>`.
>   - Nút kêu gọi hành động to bản: `<button class="btn btn-primary px-4 py-2" type="button">Đặt tour ngay</button>`.
> 
> - **Dòng 56 đến dòng 98: Lưới 3 Cards danh thắng du lịch (`.row g-4 mb-5`):**
>   - Mỗi thẻ điểm đến được đặt gọn trong một cột `<div class="col-md-4">`:
>   - Cấu trúc từng Card gồm:
>     + Thẻ bao ngoài: `<div class="card h-100 shadow-sm border-0">`: Loại bỏ viền thô và thêm bóng đổ mờ cao cấp.
>     + Thẻ ảnh: `<img src="..." class="card-img-top anh-card">`.
>     + Thân thẻ: `<div class="card-body d-flex flex-column p-4">`.
>     + Tiêu đề địa danh: `<h5 class="card-title fw-bold text-dark mb-2">`.
>     + Lời mô tả: `<p class="card-text text-muted small flex-grow-1">`.
>     + Nút xem chi tiết: `<button class="btn btn-sm btn-outline-primary" type="button">Xem thêm</button>`.
>   - Ba kỳ quan thiên nhiên tiêu biểu được giới thiệu:
>     1. *Vịnh Hạ Long* (`1-vinh-ha-long.jpg`): Di sản thiên nhiên thế giới với gần 2.000 đảo đá vôi.
>     2. *Thác Bản Giốc* (`3-thac-ban-gioc.jpg`): Thác nước đẹp nhất Việt Nam tại tỉnh Cao Bằng.
>     3. *Fansipan* (`4-fansipan.jpg`): Mái nhà Đông Dương hùng vĩ cao 3.147 mét tại Lào Cai.
> 
> - **Dòng 102 đến dòng 104: Chân trang Footer (`<footer>`):**
>   - Mang các lớp: `bg-dark text-white text-center py-3 mt-auto`.
>   - Lớp `mt-auto` (Margin Top Auto) là phép màu của Flexbox: nó tự động hấp thu toàn bộ khoảng trống thừa của trang để đẩy Footer xuống dính sát đáy cửa sổ màn hình, bất kể trang web có ít nội dung đến đâu!
>   - Dòng thông tin bản quyền: *CSE.TLU - ChimCanhCut - 0868600513*.
> 
> - **Dòng 106: Nhúng Bootstrap JavaScript Bundle:**
>   - Thẻ `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>` nạp trọn gói mã JavaScript của Bootstrap cùng Popper.js, bảo đảm các tính năng collapse, dropdown hoạt động hoàn hảo."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT TƯ DUY TIỆN ÍCH (UTILITY-FIRST) TRONG BOOTSTRAP 5 (Thời lượng: ~3 phút 30 giây / Mốc: 11:00 - 14:30)

🎬 **Thao tác:**
- Mở song song mã nguồn `bai25.html` và trỏ chuột vào các chuỗi class: `d-flex flex-column min-vh-100 mt-auto`, `shadow-sm border-0`, `btn-outline-primary`.

🗣️ **Lời đọc:**
> "Thưa thầy cô và các bạn, thông qua tệp `bai25.html`, chúng ta có thể thấy rõ sức mạnh của tư duy lập trình **Utility-First** mà Bootstrap 5 mang lại:
> 
> - Thay vì chúng ta phải mở tệp CSS ra và tự định nghĩa hàng chục selector riêng lẻ như `.footer { background: #212529; color: white; text-align: center; }`, Bootstrap 5 đã đóng gói sẵn các lớp tiện ích nguyên tử:
>   + Màu sắc ngữ nghĩa: `bg-primary`, `bg-light`, `bg-dark`, `text-primary`, `text-white`, `text-secondary`, `text-muted`.
>   + Khoảng cách (Spacing): `py-2`, `py-3`, `px-4`, `mb-3`, `mb-4`, `mb-5`, `p-4`, `gap-2`. Các giá trị này được chuẩn hóa theo tỷ lệ vàng của thiết kế giao diện từ cấp độ 1 đến 5.
>   + Bố cục và hiển thị: `d-flex`, `flex-column`, `justify-content-end`, `flex-grow-1`, `text-center`.
>   + Đường viền và đổ bóng: `border-0`, `shadow-sm`.
>   + Nút bấm component: `btn btn-primary`, `btn-sm btn-outline-primary` với đầy đủ trạng thái hover, focus, active và accessibility được tối ưu sẵn.
> - Cách làm này giúp giảm thiểu tới 80% dung lượng mã CSS tự viết, bảo đảm tính nhất quán về kích thước và màu sắc trên toàn bộ hệ thống trang web, đồng thời tăng tốc độ lập trình lên gấp nhiều lần."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI KIỂM TRA BẰNG F12 DEVTOOLS (Thời lượng: ~4 phút / Mốc: 14:30 - 18:30)

🎬 **Thao tác:**
- Phóng to cửa sổ Chrome hiển thị `bai25.html`.
- Rê chuột vào các liên kết trên Navbar và các nút 'Xem thêm', 'Đặt tour ngay'.
- Bấm phím `F12` mở Chrome DevTools.
- Mở tab **Console** để chứng minh Bootstrap CDN nạp mượt mà, không có lỗi.
- Mở tab **Network** (lọc JS/CSS) để thấy `bootstrap.min.css` và `bootstrap.bundle.min.js` trả về mã trạng thái HTTP 200 OK.
- Bật **Device Toolbar** (`Ctrl + Shift + M`), thu nhỏ màn hình về kích thước điện thoại di động (375px), bấm vào nút ba gạch Hamburger để menu mở ra, bấm lại để đóng vào.

🗣️ **Lời đọc:**
> "Và bây giờ, em xin kính mời quý thầy cô và các bạn cùng quan sát phần thực nghiệm chạy thử ứng dụng trực tiếp trên trình duyệt web:
> 
> 1. **Kiểm tra trạng thái hiển thị chuẩn trên màn hình máy tính (Desktop):**
>    - Phía trên là thanh Navbar xanh dương đậm sang trọng, logo *CSE.TLU Travel* in đậm sắc nét, 4 mục menu được căn lề phải ngay ngắn với hiệu ứng đổi màu mờ khi di chuột.
>    - Khối Hero nằm ở vị trí trung tâm nổi bật trên nền xám nhạt với tiêu đề lớn màu xanh, lời giới thiệu truyền cảm hứng và chiếc nút 'Đặt tour ngay' nổi bật.
>    - Bên dưới là lưới 3 Card danh thắng: Vịnh Hạ Long, Thác Bản Giốc và Fansipan. Cả 3 thẻ có chiều cao bằng nhau tuyệt đối, hình ảnh được cắt cúp sắc nét đồng đều ở chiều cao 190px. Cả 3 nút 'Xem thêm' nằm thẳng hàng ngang tăm tắp ở đáy mỗi thẻ card.
>    - Dưới cùng là thanh Footer đen tuyền dính chặt ở đáy trang web một cách chuyên nghiệp.
> 
> 2. **Kiểm tra Tab Console và Network trong F12 Developer Tools:**
>    - *[Thao tác: Bấm F12, mở tab Console]*
>    - Bảng Console sạch sẽ 100%, không hề có lỗi tiêm mã hay xung đột script.
>    - *[Thao tác: Chuyển sang tab Network]*
>    - Các tệp thư viện từ jsDelivr CDN đều trả về mã `200 OK` với tốc độ phản hồi cực nhanh chỉ vài chục mili-giây.
> 
> 3. **Kiểm thử tính năng Responsive và Nút bấm Hamburger trên điện thoại:**
>    - *[Thao tác: Bấm tổ hợp phím `Ctrl + Shift + M` để bật Toggle Device Toolbar]*
>    - Em chọn thiết bị mô phỏng là **iPhone 14 Pro** (độ rộng 393px):
>      + Ngay lập tức, 4 mục menu trên thanh Navbar đã được thu gọn lại hoàn toàn, nhường chỗ cho nút bấm ba gạch Hamburger ở góc bên phải.
>      + Bây giờ em bấm vào nút ba gạch:
>        *[Thao tác: Nhấp chuột vào nút ba gạch Hamburger]*
>        Menu xổ xuống mượt mà với 4 mục liên kết xếp dọc, chạm ngón tay vào rất dễ dàng.
>      + Em bấm lại một lần nữa:
>        *[Thao tác: Bấm lại vào nút]*
>        Menu tự động cuộn gập lên một cách êm ái.
>      + Khối Hero tự động co hẹp lề đệm, tiêu đề tự ngắt dòng cân xứng.
>      + Lưới 3 Cards du lịch tự động dàn thành 3 hàng dọc độc lập. Mỗi thẻ card hiển thị to bản, rõ nét, người dùng dùng ngón tay vuốt lướt theo chiều dọc vô cùng tự nhiên và thuận mắt."

---

## ⏱️ PHẦN 6: TỔNG KẾT BÀI HỌC KINH NGHIỆM & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây / Mốc: 18:30 - 20:00)

🎬 **Thao tác:**
- Tắt DevTools, chuyển lại màn hình giao diện Landing Page ở góc nhìn đẹp nhất trên trình duyệt.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và các bạn sinh viên, qua quá trình nghiên cứu, triển khai và hoàn thiện Bài tập số 25, em đã đúc rút được những bài học chuyên môn vô cùng giá trị:
> - Thứ nhất: Nắm vững nguyên lý hoạt động của **Bootstrap 5 Grid System**, hiểu sâu sắc cơ chế phân bổ 12 cột và các điểm ngắt Responsive `md`, `lg`.
> - Thứ hai: Làm chủ thành phần **Navbar Responsive** và cơ chế kích hoạt JavaScript qua thuộc tính dữ liệu `data-bs-*` mà không cần viết thêm mã script thủ công.
> - Thứ ba: Thành thạo tư duy thiết kế bằng các lớp tiện ích (Utility Classes) của Bootstrap để tăng tốc độ xây dựng sản phẩm và đảm bảo tính đồng bộ chuẩn mực trong các dự án web chuyên nghiệp.
> 
> Video thuyết minh báo cáo Bài thực hành số 25 của em đến đây xin phép được khép lại.
> 
> Em xin bày tỏ lòng biết ơn chân thành nhất đến quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản đã luôn tận tụy dìu dắt, truyền thụ cho chúng em những kiến thức thực chiến quý giá. Cảm ơn các bạn đã dành thời gian theo dõi toàn bộ video báo cáo này.
> 
> Kính chúc thầy cô luôn dồi dào sức khỏe, hạnh phúc và thành công trên con đường trồng người! Chúc các bạn sinh viên luôn tự tin, đam mê và gặt hái thật nhiều thành tựu trong học tập và sự nghiệp lập trình!
> Em xin trân trọng cảm ơn!"

---
*Hết kịch bản chi tiết Bài 25 — Mã nguồn và cấu trúc chuẩn mực cho việc quay video OBS Studio.*
