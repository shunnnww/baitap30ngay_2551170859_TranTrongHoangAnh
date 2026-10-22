# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 28: TRÌNH CHIẾU ẢNH CAROUSEL TỰ ĐỘNG CHẠY & CHUYỂN ĐỔI NỘI DUNG NAV PILLS / TABS (BOOTSTRAP 5)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Tệp mã nguồn:** `bai28.html`

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code mở `bai28.html`, `Windows + Mũi tên phải` cho Chrome mở trang bài 28).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Giọng nói hào hứng, cuốn hút, phát âm rành mạch các thuật ngữ: Carousel, Indicators, Autoplay interval, Slide transition, Nav Pills, Tab Pane, Fade animation.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, quan sát trình chiếu ảnh tự chạy, click chọn chấm chuyển slide, click chuyển tab, kiểm tra F12.
   - ⏱️ **Thời gian:** Mốc thời gian tương ứng giúp bạn kiểm soát tiến độ hoàn thành trong khung 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình. Cửa sổ Chrome mở sẵn trang Khám phá điểm đến Bài 28.
- Để yên chuột để người xem thấy slide ảnh Carousel đang tự động chuyển động mượt mà, sau đó rê chuột qua 3 nút Tab phía dưới.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Trong video ngày hôm nay, em xin phép được thuyết minh và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 28: Xây dựng trình chiếu hình ảnh Banner Carousel tự động chạy kết hợp bộ chuyển đổi nội dung linh hoạt Nav Pills và Tab Content trong Bootstrap 5**.
> 
> Thưa thầy cô và các bạn, trên trang chủ của bất kỳ website du lịch, báo chí hay sàn thương mại điện tử hiện đại nào, khu vực Banner luôn là 'mảnh đất vàng' đắt giá nhất. Một thanh trình chiếu Carousel chuyển động mượt mà kèm chú thích hình ảnh sinh động sẽ ngay lập tức thu hút ánh nhìn thị giác của khách hàng ngay từ giây đầu tiên truy cập.
> 
> Đồng thời, để trình bày khối lượng thông tin chi tiết về tour du lịch bao gồm: Giới thiệu tổng quan, Lịch trình chi tiết từng ngày, và Bảng dự toán chi phí mà không làm trang web bị kéo dài lê thê, giải pháp phân tách nội dung theo thẻ Tab (Tabbed Navigation) chính là sự lựa chọn tối ưu nhất về mặt trải nghiệm người dùng (UX).
> 
> Mục tiêu cốt lõi của Bài tập số 28 gồm:
> - **Thứ nhất:** Xây dựng linh kiện **Carousel** 3 slide hình ảnh phong cảnh Việt Nam tuyệt đẹp (Vịnh Hạ Long, Hang Sơn Đoòng, Thác Bản Giốc), thiết lập chế độ tự động trình chiếu (`data-bs-ride="carousel"`), tích hợp thanh chỉ số báo vị trí slide (**Carousel Indicators**) và lớp phủ phụ đề trực quan (**Carousel Caption**).
> - **Thứ hai:** Làm chủ linh kiện điều hướng **Nav Pills** dạng viên thuốc thanh lịch, kết hợp với bộ chứa nội dung **Tab Content** và các tấm ngăn **Tab Pane**.
> - **Thứ ba:** Ứng dụng hiệu ứng chuyển đổi mờ dần tinh tế (`fade show active`) khi chuyển đổi giữa các tab mà không gây giật lag giao diện.
> - **Thứ tư:** Tùy biến CSS nâng cao: xử lý tỷ lệ khung hình ảnh bằng `object-fit: cover`, đổ bóng nhẹ `shadow-sm`, bo tròn góc `rounded-3` và tạo viền khung tinh tế cho khối nội dung.
> 
> Video của em sẽ được triển khai theo 6 phân đoạn rõ ràng:
> 1. Lời mở đầu & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết chuyên sâu về Carousel và Tab component trong Bootstrap 5.
> 3. Thuyết minh chi tiết từng dòng mã nguồn HTML trong file `bai28.html`.
> 4. Phân tích chi tiết định dạng CSS tùy biến và các class tiện ích Bootstrap.
> 5. Trình diễn demo tương tác thực tế: quan sát auto-slide, click indicators, bấm chuyển tab và soi F12 DevTools.
> 6. Đúc kết bài học kinh nghiệm và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bước vào Phần 2: Cơ sở lý thuyết nền tảng."

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code, cuộn đến đoạn mã khai báo `#carouselDiemDen` và danh sách `#tabMenu`.
- Bôi đen thuộc tính `data-bs-ride="carousel"` và `data-bs-toggle="pill"` để người xem theo dõi.

🗣️ **Lời đọc:**
> "Để làm chủ được hai linh kiện tương tác mạnh mẽ này trong Bootstrap 5, chúng ta cần đào sâu vào 4 nguyên lý lý thuyết cốt lõi:
> 
> **1. Nguyên lý thứ nhất: Cơ chế vận hành của Bootstrap Carousel (Trình chiếu trượt ảnh).**
> Carousel là một linh kiện trình diễn dạng slideshow lặp tuần hoàn (Cyclic slideshow). Bên dưới lớp vỏ giao diện, Bootstrap quản lý Carousel thông qua các thuộc tính CSS Transform:
> - Thuộc tính `data-bs-ride="carousel"`: Ra lệnh cho JavaScript của Bootstrap tự động kích hoạt vòng lặp chuyển slide ngay khi trang web tải xong mà không cần người dùng phải bấm nút bắt đầu.
> - Cấu trúc gồm 2 thành phần cốt tử:
>   + Lớp chứa các bức ảnh `.carousel-inner`: Bên trong chứa các phần tử con `.carousel-item`. Trong số các item này, **bắt buộc phải có đúng một item** được gán class `.active`. Class `.active` này quyết định slide nào sẽ hiển thị đầu tiên trên màn hình. Nếu thiếu class này, toàn bộ Carousel sẽ bị ẩn biến mất do thuộc tính `display: none` của các item không active.
>   + Thanh chỉ số vị trí `.carousel-indicators`: Gồm các nút button nằm ở đáy ảnh. Thuộc tính `data-bs-slide-to="0"`, `"1"`, `"2"` xác định chính xác số thứ tự chỉ mục (Index) của slide mà người dùng muốn nhảy cóc tới khi click chuột.
> - Lớp phủ chú thích `.carousel-caption`: Tự động căn giữa và thả nổi đoạn văn bản lên trên bề mặt hình ảnh thông qua kỹ thuật định vị tuyệt đối `position: absolute; right: 15%; bottom: 1.25rem; left: 15%;`.
> 
> **2. Nguyên lý thứ hai: Cơ chế chuyển đổi trạng thái bằng Tab Plugins (Nav Tabs/Pills).**
> Khác với việc chuyển trang truyền thống khiến trình duyệt phải tải lại toàn bộ tài nguyên (Reload), linh kiện Nav Pills hoạt động theo cơ chế Single Page Interaction (Tương tác đơn trang):
> - Thẻ `<ul>` đóng vai trò là thanh điều hướng mang class `.nav.nav-pills`.
> - Các thẻ `<button>` mang thuộc tính `data-bs-toggle="pill"` và `data-bs-target="#id"`.
> - Khu vực nội dung `.tab-content` chứa các tấm ngăn con mang class `.tab-pane`.
> - Khi người dùng click vào một nút tab: Bootstrap JS sẽ lập tức gỡ bỏ class `.active` và `.show` khỏi tab pane cũ, đồng thời gán class `.active` và `.show` vào tab pane mục tiêu được chỉ định bởi `data-bs-target`.
> - Class `.fade` đảm bảo quá trình hoán đổi này diễn ra với hiệu ứng chuyển đổi độ mờ đục (Opacity transition) vô cùng mượt mà, thời gian chuyển đổi khoảng 150 mili-giây, đem lại cảm giác mượt như ứng dụng di động bản địa.
> 
> **3. Nguyên lý thứ ba: Khả năng tiếp cận ngữ nghĩa (Accessibility - ARIA roles).**
> Cả Carousel và Tabs đều được Bootstrap tích hợp đầy đủ các tiêu chuẩn trợ năng WAI-ARIA:
> - Thuộc tính `role="tablist"` trên thẻ danh sách cha.
> - Thuộc tính `role="tab"` trên các nút bấm.
> - Giúp những người sử dụng bàn phím hoặc công cụ đọc màn hình có thể dễ dàng dùng phím mũi tên trái/phải để duyệt qua các tab một cách trực quan.
> 
> **4. Nguyên lý thứ tư: Kiểm soát không gian hiển thị (Layout Boundary).**
> Để một banner slider và tab không bị vỡ bố cục trên các màn hình siêu rộng (Ultra-wide 2K, 4K), việc bọc toàn bộ giao diện trong một khung giới hạn `container` với thuộc tính CSS `max-width: 800px;` là một quyết định kiến trúc giao diện vô cùng sáng suốt, giữ cho mắt người xem luôn tập trung vào vùng trung tâm thị giác."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT TỪNG DÒNG HTML (`bai28.html`) (06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển hẳn sang file `bai28.html` trên VS Code.
- Bôi đen tuần tự từng khối code từ dòng 1 đến dòng 114 theo tiến trình bài giảng.

🗣️ **Lời đọc:**
> "Bây giờ, em xin phân tích chi tiết từng khối mã nguồn HTML trong file `bai28.html`. Tài liệu được thiết kế tối ưu với 114 dòng mã chuẩn mực:
> 
> - **Từ dòng 1 đến dòng 42: Phần `<head>` và các định nghĩa kiểu dáng:**
>   - Khai báo tiêu chuẩn HTML5, ngôn ngữ tiếng Việt `lang="vi"`, mã hóa UTF-8 và thẻ `viewport` chuẩn responsive.
>   - Dòng 8: Nhúng liên kết CDN Bootstrap 5.3.3.
>   - Từ dòng 9 đến 41: Khối `<style>` tùy biến chiều cao ảnh slide, vị trí caption, khung chứa nội dung tab và hình dáng viên thuốc nav-pills.
> 
> - **Dòng 43 đến dòng 48: Mở thẻ `<body>` và Tiêu đề trang:**
>   - `<body class="bg-light py-5">`: Nền sáng, khoảng đệm trên dưới 48px.
>   - Dòng 45: `<div class="container" style="max-width: 800px;">`: Khối giới hạn chiều rộng 800px, tự động căn giữa trang, tạo tỷ lệ khung nhìn cân đối tuyệt đối.
>   - Dòng 47: `<h3 class="text-center text-primary fw-bold mb-4">Khám phá điểm đến</h3>`: Tiêu đề nổi bật với gam màu xanh dương thương hiệu Bootstrap (`text-primary` - mã màu `#0d6efd`), in đậm và đệm đáy 1.5rem.
> 
> - **Từ dòng 50 đến dòng 82: Cấu trúc Linh kiện Trình chiếu Carousel (`#carouselDiemDen`):**
>   - Dòng 50: Khối bao bọc chính `<div id="carouselDiemDen" class="carousel slide rounded-3 overflow-hidden shadow-sm mb-4" data-bs-ride="carousel">`:
>     + `id="carouselDiemDen"`: Định danh duy nhất để các nút indicator và bộ điều khiển liên kết tới.
>     + `carousel slide`: Khai báo phần tử này là một Carousel và áp dụng hoạt cảnh trượt mượt mà.
>     + `rounded-3 overflow-hidden shadow-sm`: Bo tròn 4 góc 16px, giấu các phần góc nhọn của bức ảnh và đổ bóng nổi nhẹ.
>     + `data-bs-ride="carousel"`: Kích hoạt chế độ tự động chạy slide tuần hoàn.
>   - **Thanh nút chỉ số (Indicators - Dòng 52 đến 56):**
>     + `<div class="carousel-indicators">`: Khối chứa 3 nút bấm tương ứng với 3 slide.
>     + Nút 1: Có class `active` và `data-bs-slide-to="0"` trỏ tới slide đầu tiên.
>     + Nút 2 và 3: Lần lượt có `data-bs-slide-to="1"` và `data-bs-slide-to="2"`.
>   - **Khối chứa các slide ảnh (Carousel Inner - Dòng 59 đến 81):**
>     + `<div class="carousel-inner">`: Vùng chứa chính.
>     + **Slide 1 (Dòng 60 đến 66):** Có class `carousel-item active`. Chứa bức ảnh Vịnh Hạ Long `<img src="1-vinh-ha-long.jpg" class="d-block w-100 anh-slide">`. Lớp `d-block w-100` ép bức ảnh hiển thị dạng khối chiếm trọn 100% bề ngang khung slide. Phía trên phủ một khối `<div class="carousel-caption">` gồm tiêu đề `<h5>Vịnh Hạ Long</h5>` và mô tả `'Di sản thiên nhiên thế giới'`.
>     + **Slide 2 (Dòng 67 đến 73):** Thẻ `carousel-item` thứ hai chứa ảnh Hang Sơn Đoòng `2-son-doong.jpg`, phụ đề: *'Hang động tự nhiên lớn nhất thế giới'*.
>     + **Slide 3 (Dòng 74 đến 80):** Thẻ `carousel-item` thứ ba chứa ảnh Thác Bản Giốc `3-thac-ban-gioc.jpg`, phụ đề: *'Thác nước đẹp nhất Việt Nam'*.
> 
> - **Từ dòng 84 đến dòng 95: Thanh Điều Hướng Nav Pills (`#tabMenu`):**
>   - `<ul class="nav nav-pills justify-content-center gap-2 mb-3" id="tabMenu" role="tablist">`:
>     + `nav nav-pills`: Tạo danh sách điều hướng dạng viên thuốc bo góc.
>     + `justify-content-center`: Căn chỉnh toàn bộ cụm 3 nút tab ra chính giữa tâm màn hình.
>     + `gap-2`: Tạo khoảng cách 8px đều đặn giữa các nút.
>   - 3 mục tab con:
>     1. Nút 1: `id="tab-gt-btn"`, class `nav-link active`, thuộc tính `data-bs-toggle="pill"` và `data-bs-target="#tab-gt"`: Nhãn 'Giới thiệu'.
>     2. Nút 2: `id="tab-lt-btn"`, class `nav-link text-primary`, `data-bs-target="#tab-lt"`: Nhãn 'Lịch trình'.
>     3. Nút 3: `id="tab-cp-btn"`, class `nav-link text-primary`, `data-bs-target="#tab-cp"`: Nhãn 'Chi phí'.
> 
> - **Từ dòng 97 đến dòng 108: Bộ Chứa Nội Dung Tab (`tab-content`):**
>   - `<div class="tab-content">`: Lớp bao bọc toàn bộ các tấm panel nội dung.
>   - **Tấm 1 (`#tab-gt`):** `<div class="tab-pane fade show active khung-tab-content" id="tab-gt">`: Khởi tạo mở sẵn với nội dung: *'Tour 3 ngày 2 đêm khám phá các danh thắng miền Bắc, khởi hành hằng tuần.'*
>   - **Tấm 2 (`#tab-lt`):** `<div class="tab-pane fade khung-tab-content" id="tab-lt">`: Chứa lịch trình chi tiết ngày 1 Hạ Long, ngày 2 Cao Bằng, ngày 3 Thác Bản Giốc.
>   - **Tấm 3 (`#tab-cp`):** `<div class="tab-pane fade khung-tab-content" id="tab-cp">`: Chứa thông tin giá tour trọn gói 2.850.000 ₫/khách bao gồm xe đưa đón, khách sạn 3 sao và vé tham quan.
> 
> - **Dòng 111:** Nạp thư viện `bootstrap.bundle.min.js` để kích hoạt bộ máy JavaScript chuyển động."

---

## ⏱️ PHẦN 4: PHÂN TÍCH BẢNG ĐỊNH KIỂU CSS VÀ CÁC CLASS BOOTSTRAP (10:30 - 15:00)

🎬 **Thao tác:** 
- Bôi đen phần `<style>` từ dòng 9 đến 41 trên VS Code.
- Mở F12 DevTools bên Chrome, inspect vào `.carousel-item.active` và `.nav-pills .nav-link.active` để chỉ ra cách màu sắc và viền được thay đổi.

🗣️ **Lời đọc:**
> "Bây giờ, em xin đi sâu phân tích tệp định kiểu CSS tùy biến và cách nó kết hợp nhuần nhuyễn với các class tiện ích của Bootstrap 5:
> 
> **1. Tùy biến hình ảnh trình chiếu `.anh-slide` (Dòng 10 đến 14):**
> ```css
> .anh-slide {
>     height: 340px;
>     object-fit: cover;
>     border-radius: 8px;
> }
> ```
> - Chiều cao chuẩn 340px được tính toán rất kỹ lưỡng: trên màn hình có chiều rộng 800px, tỷ lệ 800x340 xấp xỉ tỷ lệ màn ảnh rộng 21:9 chuẩn điện ảnh, mang lại cảm giác hùng vĩ cho các bức ảnh phong cảnh Hạ Long, Sơn Đoòng hay Bản Giốc.
> - Thuộc tính `object-fit: cover` đảm bảo rằng dù 3 bức ảnh gốc có độ phân giải và tỷ lệ khung hình khác nhau, chúng vẫn phủ kín khung 340px một cách sắc nét, không bị kéo dãn làm vỡ hình ảnh.
> 
> **2. Tùy biến phụ đề chữ `.carousel-caption` (Dòng 15 đến 26):**
> - Mặc định, Bootstrap đặt chú thích khá sát mép dưới. Chúng em đã tinh chỉnh `bottom: 25px;` để nhấc bổng dòng chữ lên cao hơn thanh chấm Indicators một khoảng an toàn, tránh việc các chấm tròn che mất chữ.
> - Tiêu đề `h5` được định cỡ `font-size: 18px; font-weight: bold; margin-bottom: 4px;` kết hợp bóng đổ chữ mặc định của Bootstrap giúp chữ luôn đọc được rõ ràng dù ảnh nền phía sau là núi đá màu xám hay thác nước màu trắng.
> - Đoạn văn `p` có `opacity: 0.9; font-size: 13px;` tạo sự phân cấp tương phản tinh tế giữa tiêu đề chính và lời chú thích phụ.
> 
> **3. Tùy biến hộp nội dung Tab `.khung-tab-content` (Dòng 27 đến 34):**
> ```css
> .khung-tab-content {
>     border: 1px solid #e5e7eb;
>     border-radius: 8px;
>     padding: 16px 20px;
>     background-color: #ffffff;
>     font-size: 14px;
>     color: #374151;
> }
> ```
> - Chúng em sử dụng mã màu viền xám siêu nhẹ `#e5e7eb` của hệ màu Tailwind/Bootstrap hiện đại, kết hợp nền trắng tinh khôi `#ffffff` và bo góc 8px.
> - Khoảng đệm `padding: 16px 20px;` tạo nên một chiếc thẻ hộp sạch sẽ, giúp thông tin tour nổi bật trên nền xám nhạt `bg-light` của trang web. Màu chữ xám đen `#374151` đem lại độ tương phản dễ chịu cho mắt người đọc.
> 
> **4. Định dạng nút điều hướng `.nav-pills .nav-link` (Dòng 35 đến 40):**
> - Nút tab được bo góc 6px (`border-radius: 6px;`), padding gọn gàng `6px 16px;`.
> - Khi ở trạng thái bình thường: Chữ mang màu xanh `text-primary`.
> - Khi ở trạng thái được chọn (`active`): Bootstrap tự động tô màu nền xanh dương rực rỡ `#0d6efd` và đổi chữ sang màu trắng tinh khôi, tạo sự khẳng định dứt khoát về vị trí tab mà người dùng đang theo dõi."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (15:00 - 18:30)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai28.html`.
- Thực hiện tuần tự: quan sát slide tự trượt, click các nút indicator, click lần lượt 3 tab Giới thiệu, Lịch trình, Chi phí; bật F12 soi DOM và test responsive.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, ngay sau đây em xin tiến hành phần kiểm thử tương tác thực tế toàn diện trên trình duyệt Google Chrome:
> 
> **Thao tác 1: Kiểm nghiệm tính năng Trình chiếu tự động (Auto-slide):**
> - Thầy cô có thể thấy, hiện tại em hoàn toàn không chạm tay vào chuột hay bàn phím.
> - Slide 1 là *Vịnh Hạ Long* đang hiển thị. Sau khoảng 5 giây, bức ảnh tự động trượt sang trái một cách êm dịu, nhường chỗ cho Slide 2 là *Hang Sơn Đoòng*.
> - Tiếp tục chờ một nhịp ngắn, Slide 2 lại trượt tiếp sang Slide 3 là *Thác Bản Giốc*.
> - Và khi hết Slide 3, hệ thống tự động cuộn vòng lặp trở lại Slide 1. Tính năng `data-bs-ride="carousel"` đã hoạt động chính xác tuyệt đối!
> 
> **Thao tác 2: Kiểm nghiệm tương tác chấm điều hướng Indicators:**
> - Bây giờ, em muốn nhảy cóc trực tiếp từ Vịnh Hạ Long sang Thác Bản Giốc mà không cần chờ đợi.
> - Em nhấp chuột vào chấm tròn thứ 3 trên thanh Indicators ở đáy ảnh.
> - *[Thao tác: Click chấm thứ 3]*
> - Ngay lập tức, slide Thác Bản Giốc hiện ra tức thì! Chấm tròn thứ 3 sáng lên màu trắng đục biểu thị trạng thái `active`.
> - Em nhấp lại chấm thứ 2: Chuyển ngay về Hang Sơn Đoòng.
> 
> **Thao tác 3: Kiểm nghiệm bộ chuyển đổi nội dung Nav Pills:**
> - Xuống khu vực bên dưới, hiện tại tab **'Giới thiệu'** đang sáng màu xanh với nội dung tour 3 ngày 2 đêm.
> - Bây giờ, em nhấp chuột sang tab thứ hai: **'Lịch trình'**.
> - *[Thao tác: Click nút Lịch trình]*
> - Thầy cô hãy quan sát: Nút 'Lịch trình' lập tức sáng màu xanh, nút 'Giới thiệu' trở về màu chữ xanh nền trong suốt. Đồng thời khung nội dung bên dưới chuyển mờ dần (Fade transition) cực kỳ mượt mà để hiển thị lịch trình chi tiết: *'Ngày 1: Hà Nội - Hạ Long. Ngày 2: Hạ Long - Cao Bằng. Ngày 3: Thác Bản Giốc - Hà Nội'*.
> - Tiếp tục em click sang tab thứ ba: **'Chi phí'**.
> - *[Thao tác: Click nút Chi phí]*
> - Nội dung giá trọn gói 2.850.000 ₫ hiện ra ngay lập tức. Toàn bộ thao tác chuyển tab diễn ra với độ trễ bằng 0, không hề có hiện tượng tải lại trang hay giật màn hình!
> 
> **Thao tác 4: Bật F12 Developer Tools soi chuyên sâu DOM và hoạt cảnh:**
> - Em nhấn phím `F12` để mở DevTools.
> - **Kiểm tra tab Elements khi Carousel chạy:** Em mở rộng thẻ `<div class="carousel-inner">`. Khi slide đang chuyển động, chúng ta thấy Bootstrap liên tục gỡ bỏ và bổ sung các class như `.carousel-item-next`, `.carousel-item-start`, và cuối cùng là `.active`. Đây là kỹ thuật chuyển động hai pha (Two-phase animation) giúp việc trượt ảnh đạt chuẩn 60 khung hình/giây (60 FPS) vô cùng mượt mà.
> - **Kiểm tra tab Elements khi đổi Tab:** Thẻ `<div class="tab-pane">` được chuyển đổi linh hoạt giữa class `.fade` và `.show.active`.
> - **Kiểm tra Responsive (`Ctrl + Shift + M`):**
>   - Trên Desktop (1200px): Banner và Tabs hiển thị cân đối ở giữa với bề rộng 800px.
>   - Co màn hình về kích thước điện thoại di động iPhone 12 Pro (390px):
>     + Nhờ thuộc tính `w-100` và `object-fit: cover`, bức ảnh banner co dãn vừa vặn theo chiều ngang màn hình điện thoại mà không hề bị tràn hay tạo thanh cuộn ngang.
>     + Cụm 3 nút Nav Pills nhờ có `justify-content-center` và `gap-2` vẫn nằm gọn gàng, chữ không bị gãy dòng, người dùng có thể dùng ngón tay cái chạm bấm vô cùng thoải mái!"

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (18:30 - 20:00)

🎬 **Thao tác:** 
- Tắt F12 DevTools, đưa màn hình về trạng thái trang du lịch đẹp nhất với Slide ảnh đang chạy.
- Hướng ánh mắt về camera/màn hình, nói lời kết trang trọng.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô giáo và các bạn, thông qua việc hoàn thành xuất sắc Bài tập thực hành số 28, bản thân em đã thu hoạch được rất nhiều kiến thức lập trình thực chiến:
> 
> - **Thứ nhất:** Hiểu rõ cấu trúc và cơ chế tự động hóa của linh kiện Carousel trong Bootstrap 5, biết cách kết hợp giữa Indicators và Captions để tạo nên một banner quảng bá chuyên nghiệp.
> - **Thứ hai:** Làm chủ kỹ thuật điều hướng bằng Nav Pills và Tab Content, một kỹ thuật cực kỳ quan trọng giúp tối ưu hóa không gian hiển thị và nâng cao trải nghiệm người dùng trong các dự án web thực tế.
> - **Thứ ba: Những lỗi kinh nghiệm thực tế cần đặc biệt lưu tâm:**
>   - Quên đặt class `active` cho một phần tử `carousel-item` ban đầu. Nếu không có item nào mang class `active`, Carousel sẽ bị ẩn trắng xóa.
>   - Không đặt thuộc tính `object-fit: cover` cho ảnh slide, dẫn đến việc khi người dùng nạp các bức ảnh có kích thước khác nhau thì chiều cao banner sẽ bị giật lên thụt xuống liên tục làm hỏng giao diện.
>   - Đặt nhầm thuộc tính `data-bs-toggle="tab"` thay vì `data-bs-toggle="pill"` khi dùng Nav Pills, hoặc trỏ sai ID giữa `data-bs-target` và `id` của tab pane.
> 
> Bài thuyết minh chi tiết về Bài tập số 28 của em đến đây xin phép được khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo bộ môn đã tận tình hướng dẫn, truyền dạy những kiến thức bổ ích. Cảm ơn các bạn sinh viên đã chú ý theo dõi video.
> 
> Kính chúc thầy cô luôn dồi dào sức khỏe và đạt nhiều thành công trong sự nghiệp giáo dục, chúc các bạn học tập tốt và hoàn thành xuất sắc các bài thực hành! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 28 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
