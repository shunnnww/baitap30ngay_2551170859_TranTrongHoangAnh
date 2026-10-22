# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 30: TRANG QUẢN TRỊ ADMIN DASHBOARD: SIDEBAR CỐ ĐỊNH, 4 THẺ THỐNG KÊ & TIẾN ĐỘ THEO CHƯƠNG (BOOTSTRAP 5)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Tệp mã nguồn:** `bai30.html`

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code mở `bai30.html`, `Windows + Mũi tên phải` cho Chrome mở trang Admin Dashboard bài 30).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói với tác phong một kỹ sư phần mềm chuyên nghiệp, tự tin, phát âm chuẩn các thuật ngữ: Admin Dashboard, Sidebar Navigation, Flexbox Layout, Flex-shrink, Progress Bar, List Group Flush, Badges Pill.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, rê chuột qua thanh menu dọc, chỉ vào 4 thẻ số liệu KPI, chỉ vào thanh tiến độ và danh sách chương học, mở F12 kiểm tra bố cục.
   - ⏱️ **Thời gian:** Mốc thời gian tương ứng giúp bạn kiểm soát tiến độ hoàn thành trong khung 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 - 02:30)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình. Mở Chrome hiển thị giao diện Bảng điều khiển CSE.TLU Admin Bài 30.
- Rê chuột từ thanh Sidebar màu đen sang khu vực tiêu đề Topbar, lướt qua 4 thẻ thống kê và khối tiến độ học tập.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video báo cáo thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Trong video này, em xin phép được thuyết minh và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 30: Thiết kế giao diện Trang quản trị Admin Dashboard chuyên nghiệp với cấu trúc Sidebar cố định, thanh tác vụ Topbar, 4 thẻ thống kê chỉ số KPI kèm thanh tiến độ, và danh sách tiến độ học tập theo chương bằng Bootstrap 5**.
> 
> Thưa thầy cô và các bạn, trang quản trị (Admin Dashboard) được ví như 'trung tâm đầu não' của mọi hệ thống ứng dụng web quy mô lớn. Dù là một hệ thống quản lý học tập đại học LMS, một trang quản trị bán hàng thương mại điện tử hay một cổng phân tích dữ liệu doanh nghiệp, Dashboard chính là nơi giúp nhà quản lý nắm bắt toàn bộ bức tranh tổng thể về tình hình hoạt động chỉ trong một cái nhìn lướt mắt.
> 
> Bài tập số 30 là bài tập đỉnh cao tích hợp toàn diện các kỹ năng dàn trang và xây dựng linh kiện của Bootstrap 5, nhằm đạt được các mục tiêu sau:
> - **Thứ nhất:** Xây dựng bố cục 2 vùng độc lập kinh điển (Classic Two-Column Layout) bằng CSS Flexbox hiện đại (`d-flex min-vh-100`): Cột bên trái là thanh điều hướng **Sidebar** màu đen cố định bề rộng (`230px`), và cột bên phải là vùng làm việc chính (**Main Content**) tự động co dãn chiếm trọn không gian còn lại (`flex-grow-1`).
> - **Thứ hai:** Thiết kế thanh tiêu đề tác vụ trên cùng (Topbar Header) với nút 'Xuất báo cáo' và huy hiệu thông báo việc cần làm '3 bài mới'.
> - **Thứ ba:** Triển khai lưới 4 thẻ chỉ số thống kê quan trọng (**KPI Stat Cards**): Tổng số sinh viên, Số bài đã nộp, Số bài chưa nộp và Điểm trung bình, kết hợp các thanh đo tiến độ siêu mảnh (**Micro Progress Bars**) đổi màu theo trạng thái.
> - **Thứ tư:** Xây dựng khối hiển thị tiến độ học tập theo từng chương bằng linh kiện **List Group Flush** kết hợp với các huy hiệu viên thuốc bo tròn (**Pill Badges**) thể hiện tỷ lệ phần trăm hoàn thành.
> 
> Cấu trúc bài thuyết minh của em sẽ đi qua 6 phần:
> 1. Giới thiệu tổng quan & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết kiến trúc Admin Dashboard và các linh kiện Bootstrap 5.
> 3. Thuyết minh chi tiết từng dòng mã nguồn HTML trong file `bai30.html`.
> 4. Phân tích chi tiết bảng định kiểu CSS tùy biến và các class tiện ích Bootstrap.
> 5. Trình diễn demo thực tế trên trình duyệt: trải nghiệm hover menu, soi Box Model và kiểm tra responsive F12.
> 6. Tổng kết bài học kinh nghiệm và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bước vào Phần 2: Cơ sở lý thuyết nền tảng."

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code, cuộn đến thẻ `<aside class="sidebar">` và `<main class="flex-grow-1">`.
- Bôi đen thuộc tính `min-vh-100`, `flex-shrink: 0`, `flex-grow-1` để minh họa.

🗣️ **Lời đọc:**
> "Để thiết kế một trang Dashboard đạt chuẩn công nghiệp, chúng ta cần nắm vững 4 nguyên lý kiến trúc giao diện cốt lõi sau đây:
> 
> **1. Nguyên lý thứ nhất: Kiến trúc Bố cục Dashboard bằng Flexbox hai cột.**
> Trước đây, các lập trình viên thường dùng thuộc tính `float` hoặc `position: fixed` để ghim Sidebar. Tuy nhiên, cách làm đó rất dễ gây ra xung đột đè lớp giao diện (Z-index overlap) hoặc làm mất luồng tài liệu tự nhiên.
> Trong bài tập này, chúng em áp dụng giải pháp Flexbox thuần túy của Bootstrap 5:
> - Thẻ bọc ngoài cùng mang class `.d-flex.min-vh-100`: Thiết lập chiều cao tối thiểu luôn chiếm 100% chiều cao màn hình trình duyệt (100 Viewport Height).
> - Sidebar bên trái mang thuộc tính `flex-shrink: 0; width: 230px;`: Thuộc tính `flex-shrink: 0` là một chỉ thị sống còn, nó ra lệnh cho trình duyệt tuyệt đối không được phép co hẹp thanh menu này lại dù nội dung cột bên phải có dài hay rộng đến đâu.
> - Cột nội dung bên phải mang class `.flex-grow-1`: Thuộc tính này cho phép thẻ `<main>` tự động chiếm trọn 100% khoảng trống còn lại của khung nhìn một cách hoàn hảo.
> 
> **2. Nguyên lý thứ hai: Thiết kế Hệ thống Phân cấp Thị giác (Visual Hierarchy) trong Bảng số liệu.**
> Một Dashboard thành công phải giúp người xem đọc dữ liệu trong vòng 3 giây:
> - Nhãn mô tả (`.nhan-tk`): Sử dụng cỡ chữ nhỏ 12px, gam màu xám trung tính `#6b7280` để làm nền.
> - Con số thống kê (`.so-tk`): Sử dụng cỡ chữ cực đại 24px, font đậm, màu đen sẫm `#111827`. Con số này chính là điểm hội tụ thị giác đầu tiên của người dùng.
> - Thanh đo tiến độ (`.progress`): Được thu nhỏ chiều cao xuống chỉ còn 4px (`height: 4px`), đóng vai trò như một đường chỉ màu sắc tinh tế dưới chân con số, mang lại cảm giác thanh thoát, hiện đại.
> 
> **3. Nguyên lý thứ ba: Tâm lý học màu sắc trong Thống kê (Color Psychology).**
> Hệ thống màu sắc được phối hợp chặt chẽ theo quy chuẩn ngữ nghĩa của Bootstrap:
> - Màu xanh dương `bg-primary`: Đại diện cho tổng thể, sự chuyên nghiệp (Tổng sinh viên 128).
> - Màu xanh lá cây `bg-success`: Đại diện cho sự hoàn thành, tích cực (Đã nộp 96 bài - 75%).
> - Màu đỏ `bg-danger`: Cảnh báo nguy cơ, thúc giục hành động (Chưa nộp 32 bài - 25%).
> - Màu vàng hổ phách `bg-warning`: Chỉ số trung bình cần theo dõi sát sao (Điểm TB 7.8).
> 
> **4. Nguyên lý thứ tư: Cấu trúc Danh sách phẳng List Group Flush.**
> Lớp `.list-group-flush` loại bỏ hoàn toàn đường viền bao ngoài và các góc bo tròn của thẻ danh sách, chỉ giữ lại các đường gạch ngang mỏng giữa các mục. Khi đặt bên trong một khung thẻ Card, thiết kế này tạo cảm giác nguyên khối, liền mạch vô cùng đẹp mắt."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT TỪNG DÒNG HTML (`bai30.html`) (06:00 - 10:30)

🎬 **Thao tác:** 
- Mở file `bai30.html` trên VS Code.
- Bôi đen tuần tự từ dòng 1 đến dòng 178 theo từng khối chức năng.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng đi vào phân tích chi tiết từng dòng mã nguồn HTML trong file `bai30.html`. Toàn bộ file gồm 178 dòng mã sạch sẽ và chuẩn mực:
> 
> - **Từ dòng 1 đến dòng 67: Phần `<head>` và CSS tùy biến:**
>   - Khai báo chuẩn HTML5, ngôn ngữ tiếng Việt, mã UTF-8 và thẻ viewport.
>   - Dòng 8: Nhúng thư viện Bootstrap 5.3.3 qua CDN.
>   - Từ dòng 9 đến 66: Định nghĩa các lớp CSS cho Sidebar (màu đen `#212529`, hiệu ứng hover mờ), Thẻ thống kê (bóng đổ nhẹ, typography phân cấp), và Khung tiến độ chương.
> 
> - **Dòng 68 đến dòng 70: Mở thẻ `<body>` và Khung Flex bao bọc:**
>   - `<body class="bg-light">`: Nền xám sáng làm nổi bật các khối nội dung màu trắng.
>   - Dòng 70: `<div class="d-flex min-vh-100">`: Khởi tạo hệ thống Flex bao quát toàn trang.
> 
> - **Từ dòng 71 đến dòng 89: Khối 1 - Thanh Điều Hướng Sidebar (`<aside class="sidebar">`):**
>   - Dòng 72: `<aside class="sidebar">`: Sử dụng thẻ ngữ nghĩa `<aside>` đại diện cho thanh điều hướng phụ.
>   - Dòng 73: `<div class="sidebar-brand">CSE.TLU Admin</div>`: Logo thương hiệu khoa Công nghệ thông tin trường Đại học Thủy lợi, chữ trắng in đậm nổi bật trên nền đen.
>   - Dòng 74 đến 88: Danh sách menu dọc `<ul class="nav nav-pills flex-column">`:
>     + Mục 1: `<a href="#" class="nav-link active">Bảng điều khiển</a>`: Mang class `active`, hiển thị nền xanh dương đặc trưng của mục đang được chọn.
>     + Mục 2: `Bài tập`.
>     + Mục 3: `Sinh viên`.
>     + Mục 4: `Điểm số`.
>     + Tất cả đều là thẻ `<a>` với hiệu ứng hover chuyển màu chữ và nền khi rê chuột.
> 
> - **Từ dòng 90 đến dòng 172: Khối 2 - Vùng Nội Dung Chính (`<main class="flex-grow-1 p-4">`):**
>   - Dòng 91: Thẻ ngữ nghĩa `<main>` với class `flex-grow-1` giúp nó chiếm toàn bộ không gian còn lại bên phải, kèm khoảng đệm bên trong 1.5rem (24px) ở cả 4 phía.
>   - **Thanh Tiêu Đề Tác Vụ Topbar (Dòng 93 đến 99):**
>     - `<div class="d-flex justify-content-between align-items-center mb-4">`: Dàn trang hai đầu.
>     - Bên trái: Tiêu đề trang `<h4 class="fw-bold text-dark mb-0">Bảng điều khiển</h4>`.
>     - Bên phải: Cụm hành động nhanh gồm huy hiệu cảnh báo `<span class="badge bg-warning text-dark px-3 py-2 fw-semibold">3 bài mới</span>` và nút lệnh `<button class="btn btn-primary btn-sm px-3">Xuất báo cáo</button>`.
>   - **Lưới 4 Thẻ Thống Kê KPI (Dòng 101 đến 146):**
>     - Được bọc trong một `<div class="row g-3 mb-4">`.
>     - Mỗi thẻ nằm trong một cột `<div class="col-sm-6 col-md-3">`. Điểm ngắt này giúp 4 thẻ chia đều trên 1 hàng ở máy tính (mỗi cột 3/12 phần), hiển thị 2 thẻ mỗi hàng trên máy tính bảng (`col-sm-6`), và xếp dọc 1 thẻ mỗi hàng trên điện thoại di động.
>     - **Thẻ 1 (Sinh viên):** Nhãn *'Sinh viên'*, con số *128*, thanh progress 100% màu xanh `bg-primary`.
>     - **Thẻ 2 (Đã nộp):** Nhãn *'Đã nộp'*, con số *96*, thanh progress 75% màu xanh lá `bg-success`.
>     - **Thẻ 3 (Chưa nộp):** Nhãn *'Chưa nộp'*, con số *32*, thanh progress 25% màu đỏ `bg-danger`.
>     - **Thẻ 4 (Điểm TB):** Nhãn *'Điểm TB'*, con số *7.8*, thanh progress 78% màu vàng hổ phách `bg-warning`.
>   - **Khối Hiển Thị Tiến Độ Theo Chương (Dòng 148 đến 171):**
>     - Bọc trong `<div class="khung-tien-do-chuong">`.
>     - Tiêu đề khung: `<span class="fw-bold small text-dark">Tiến độ theo chương</span>`.
>     - Danh sách `<ul class="list-group list-group-flush">`:
>       + Mục 1: *Chương 1 — HTML5* đi kèm nhãn `<span class="badge bg-success rounded-pill px-2 py-1">100%</span>`.
>       + Mục 2: *Chương 2 — JavaScript* đi kèm nhãn `<span class="badge bg-primary rounded-pill px-2 py-1">82%</span>`.
>       + Mục 3: *Chương 3 — CSS3* đi kèm nhãn `<span class="badge bg-info text-dark rounded-pill px-2 py-1">74%</span>`.
>       + Mục 4: *Chương 4 — Bootstrap 5* đi kèm nhãn `<span class="badge bg-secondary rounded-pill px-2 py-1">45%</span>`.
> 
> - **Dòng 175:** Nhúng `bootstrap.bundle.min.js` khép lại trang web."

---

## ⏱️ PHẦN 4: PHÂN TÍCH BẢNG ĐỊNH KIỂU CSS VÀ CÁC CLASS BOOTSTRAP (10:30 - 15:00)

🎬 **Thao tác:** 
- Bôi đen phần `<style>` từ dòng 9 đến 66 trên VS Code.
- Mở F12 DevTools bên Chrome, inspect vào Sidebar và Thẻ thống kê để chỉ ra các thông số padding, margin và box-shadow.

🗣️ **Lời đọc:**
> "Tiếp tục bài thuyết minh, em xin phân tích chuyên sâu về tệp định dạng kiểu dáng CSS tùy biến và cách nó nâng tầm giao diện Bootstrap 5:
> 
> **1. Định dạng Sidebar Menu chuyên nghiệp (Dòng 10 đến 37):**
> ```css
> .sidebar {
>     width: 230px;
>     background-color: #212529;
>     min-height: 100vh;
>     flex-shrink: 0;
> }
> ```
> - Chiều rộng cố định 230px là tiêu chuẩn thiết kế vàng (Golden standard) cho thanh điều hướng desktop, đủ chứa trọn vẹn các nhãn chữ tiếng Việt mà không chiếm quá nhiều diện tích của vùng nội dung chính.
> - Màu nền xám đen `#212529` kết hợp màu chữ xám nhạt `#9ca3af` tạo nên phong thái lịch lãm, hiện đại (Dark sidebar theme).
> - Trạng thái `:hover`: Khi rê chuột qua các mục menu chưa chọn, chữ tự động chuyển sang màu trắng tinh khôi và nền sáng nhẹ với lớp phủ `rgba(255, 255, 255, 0.08)`.
> - Trạng thái `.active`: Mục 'Bảng điều khiển' được phủ màu xanh dương `#0d6efd` rực rỡ, bo tròn 6px, tạo điểm nhấn định vị không gian tức thì cho quản trị viên.
> 
> **2. Tùy biến Thẻ Thống Kê `.the-thong-ke` (Dòng 38 đến 54):**
> ```css
> .the-thong-ke {
>     background-color: #ffffff;
>     border-radius: 8px;
>     padding: 16px;
>     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
> }
> ```
> - Chúng em sử dụng hiệu ứng đổ bóng siêu mềm `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);`. Độ trong suốt chỉ 4% mang lại cảm giác chiếc thẻ nổi bồng bềnh rất khẽ khàng trên nền xám `bg-light`, loại bỏ hoàn toàn sự thô cứng của các đường viền border truyền thống.
> - Khoảng đệm `padding: 16px;` kết hợp bo góc 8px tạo nên một chiếc thẻ vuông vắn, thanh lịch.
> - Nhãn thống kê `.nhan-tk` dùng màu xám trung tính `#6b7280` cỡ 12px, con số thống kê `.so-tk` dùng cỡ 24px in đậm với màu đen tuyền `#111827`, hoàn thiện quy tắc tương phản phân cấp thông tin.
> 
> **3. Tùy biến Khung Tiến Độ Theo Chương (Dòng 55 đến 65):**
> - Lớp `.khung-tien-do-chuong` có nền trắng, bo góc 8px, đổ bóng nhẹ và giấu góc nhọn bằng `overflow: hidden;`.
> - Các mục danh sách `.list-group-item`:
>   ```css
>   .list-group-item {
>       font-size: 13px;
>       padding: 12px 18px;
>       border-color: #f3f4f6;
>   }
>   ```
>   Đường gạch phân cách giữa các chương được tinh chỉnh sang màu xám siêu nhạt `#f3f4f6`, giúp danh sách có sự phân chia hàng lối ngăn nắp mà không bị cảm giác đứt gãy, rối mắt."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (15:00 - 18:30)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai30.html`.
- Thao tác di chuột qua menu Sidebar từ Bảng điều khiển xuống Bài tập, Sinh viên, Điểm số.
- Rê chuột vào nút Xuất báo cáo.
- Mở F12 DevTools và thử co dãn màn hình để kiểm tra tính linh hoạt của Flexbox.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, ngay bây giờ em xin tiến hành phần kiểm nghiệm thực tế giao diện Admin Dashboard trực tiếp trên trình duyệt Google Chrome:
> 
> **Thao tác 1: Trải nghiệm tương tác Sidebar Menu:**
> - Hiện tại, mục *'Bảng điều khiển'* đang được kích hoạt với nền màu xanh dương.
> - Em rê con trỏ chuột từ từ qua mục *'Bài tập'*: Thầy cô có thể thấy nền menu lập tức sáng lên một vệt trắng mờ nhẹ `rgba(255, 255, 255, 0.08)` và chữ chuyển từ màu xám sang màu trắng tinh.
> - Em rê tiếp xuống mục *'Sinh viên'* và *'Điểm số'*: Phản hồi chuột diễn ra tức thì, êm ái, mang lại cảm giác tương tác rất mượt mà.
> 
> **Thao tác 2: Trải nghiệm khu vực Topbar và 4 Thẻ KPI:**
> - Nhìn sang góc trên bên phải thanh tiêu đề: Huy hiệu cảnh báo màu vàng *'3 bài mới'* thu hút ngay sự chú ý của người quản trị.
> - Em rê chuột vào nút màu xanh *'Xuất báo cáo'*: Nút đổi sang màu xanh đậm hơn báo hiệu trạng thái sẵn sàng click.
> - Xuống 4 thẻ KPI:
>   + Thẻ 1 *Sinh viên* hiển thị con số 128 với thanh progress xanh dương phủ kín 100%.
>   + Thẻ 2 *Đã nộp* hiển thị 96 bài, thanh màu xanh lá cây dài 75%.
>   + Thẻ 3 *Chưa nộp* hiển thị 32 bài, thanh màu đỏ chiếm 25%.
>   + Thẻ 4 *Điểm TB* hiển thị 7.8, thanh màu vàng chiếm 78%.
> - Cả 4 thẻ đều có chiều cao bằng nhau tuyệt đối, bóng đổ đồng đều, thông tin trực quan, dễ hiểu.
> 
> **Thao tác 3: Trải nghiệm khối Danh sách Tiến độ theo chương:**
> - Nhìn xuống danh sách các chương học:
>   + Chương 1 HTML5 đã hoàn thành xong 100%, được đánh dấu bằng viên thuốc màu xanh lá cây `bg-success`.
>   + Chương 2 JavaScript đạt 82% với viên thuốc màu xanh dương `bg-primary`.
>   + Chương 3 CSS3 đạt 74% với viên thuốc màu xanh lơ `bg-info`.
>   + Chương 4 Bootstrap 5 đạt 45% với viên thuốc màu xám `bg-secondary`.
> - Việc sử dụng các huy hiệu bo tròn hình viên thuốc (`rounded-pill`) giúp giao diện trông mềm mại và hiện đại hơn rất nhiều so với các nhãn vuông truyền thống.
> 
> **Thao tác 4: Bật F12 Developer Tools soi cấu trúc DOM và Responsive:**
> - Em nhấn phím `F12` để mở DevTools.
> - **Kiểm tra tab Console:** Màn hình console sạch bóng, không có bất kỳ một lỗi script hay tài nguyên nào.
> - **Kiểm tra tab Elements:** Em inspect vào thẻ `<div class="d-flex min-vh-100">`. Tại đây chúng ta thấy rõ cấu trúc Flex container với hai thẻ con trực tiếp là `<aside class="sidebar">` và `<main class="flex-grow-1">`. Thuộc tính `min-height: 100vh` đảm bảo dù nội dung của main có ngắn thì dải màu đen của sidebar vẫn luôn kéo dài chạm tận đáy màn hình máy tính mà không bao giờ bị cụt lửng!
> - **Kiểm tra Responsive (`Ctrl + Shift + M`):**
>   - Trên Desktop (1200px): Sidebar 230px bên trái, 4 thẻ thống kê chia đều 4 cột hoàn hảo bên phải.
>   - Co màn hình về kích thước máy tính bảng iPad Mini (768px): Điểm ngắt `col-sm-6` kích hoạt, 4 thẻ thống kê tự động chuyển thành lưới 2x2 (2 thẻ hàng trên, 2 thẻ hàng dưới) vô cùng gọn gàng và cân đối, không hề xảy ra tình trạng chữ bị tràn hay số bị co rúm!"

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (18:30 - 20:00)

🎬 **Thao tác:** 
- Tắt F12 DevTools, đưa màn hình về trạng thái Dashboard đẹp mắt nhất.
- Hướng ánh mắt về camera/màn hình, nói lời kết trang trọng, chân thành.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và các bạn, việc hoàn thành xuất sắc Bài tập thực hành số 30 đã đánh dấu một bước tiến lớn trong kỹ năng lập trình giao diện của em:
> 
> - **Thứ nhất:** Làm chủ phương pháp xây dựng bố cục trang quản trị Admin Dashboard kinh điển bằng Flexbox hiện đại, hiểu rõ cách phối hợp giữa thuộc tính `flex-shrink: 0` của thanh điều hướng và `flex-grow-1` của không gian làm việc chính.
> - **Thứ hai:** Nắm vững nghệ thuật phân cấp thị giác trong thiết kế bảng số liệu phân tích, biết cách kết hợp typography, đổ bóng mềm và thanh đo tiến độ micro progress bars để truyền tải dữ liệu một cách sinh động nhất.
> - **Thứ ba: Những sai lầm thực tế cần hết sức lưu ý:**
>   - Quên thuộc tính `flex-shrink: 0` trên Sidebar. Khi nội dung bên cột chính dài ra, trình duyệt sẽ tự động ép thanh Sidebar co nhỏ lại làm vỡ nát logo và chữ trong menu.
>   - Quên thuộc tính `min-vh-100` trên thẻ cha, dẫn đến việc khi trang web có ít dữ liệu thì Sidebar bị ngắn cụt ở lưng chừng màn hình, để lộ khoảng trắng phía dưới rất mất thẩm mỹ.
>   - Sử dụng màu sắc tiến độ tùy tiện không theo quy chuẩn ngữ nghĩa, gây hiểu lầm cho người quản trị về mức độ hoàn thành công việc.
> 
> Bài thuyết minh chi tiết về Bài tập số 30 của em đến đây xin phép được khép lại.
> Em xin bày tỏ lòng biết ơn chân thành nhất đến quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản đã đồng hành, chỉ dạy tận tình cho chúng em trong suốt các tuần học thực hành vừa qua. Cảm ơn tất cả các bạn đã luôn theo dõi và ủng hộ.
> 
> Kính chúc thầy cô luôn dồi dào sức khỏe, hạnh phúc và thành công trên con đường trồng người, chúc các bạn sinh viên luôn giữ vững niềm đam mê và gặt hái nhiều kết quả xuất sắc! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 30 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
