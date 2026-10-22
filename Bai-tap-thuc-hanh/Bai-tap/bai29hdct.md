# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 29: BẢNG DỮ LIỆU CHUYÊN NGHIỆP VỚI TABLE STRIPED, HOVER, BADGES TRẠNG THÁI & PHÂN TRANG (BOOTSTRAP 5)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Tệp mã nguồn:** `bai29.html`

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code mở `bai29.html`, `Windows + Mũi tên phải` cho Chrome mở trang bài 29).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói dõng dạc, rành mạch, nhấn mạnh vào các từ khóa kỹ thuật: Table Striped, Table Hover, Table Responsive, Badges, Pagination, Scope col/row, Box Shadow.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, rê chuột qua từng hàng bảng để thấy hiệu ứng hover, click chọn số trang, co dãn màn hình để thấy thanh cuộn ngang responsive.
   - ⏱️ **Thời gian:** Mốc thời gian tương ứng giúp bạn kiểm soát tiến độ nói chuẩn 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 - 02:30)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình. Mở Chrome hiển thị Bảng Danh sách sinh viên Bài 29.
- Rê chuột qua thanh tiêu đề bảng màu tối sang trọng, các hàng dữ liệu sinh viên và thanh phân trang ở cuối trang.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo và toàn thể các bạn sinh viên đang theo dõi video thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em xin phép được trình bày và thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 29: Xây dựng bảng dữ liệu quản lý sinh viên chuyên nghiệp kết hợp hiệu ứng sọc vằn (Table Striped), phản hồi di chuột (Table Hover), nhãn trạng thái (Badges) và thanh điều hướng phân trang (Pagination) chuẩn Responsive bằng Bootstrap 5**.
> 
> Thưa thầy cô và các bạn, trong thế giới của các ứng dụng quản lý doanh nghiệp, hệ thống quản trị đào tạo đại học (LMS), hay các cổng cơ sở dữ liệu lớn, bảng dữ liệu (Data Table) luôn là linh kiện cốt lõi để hiển thị thông tin dạng bảng biểu. Tuy nhiên, nếu một bảng dữ liệu chỉ được dựng bằng các thẻ HTML thô sơ, người dùng sẽ rất nhanh mỏi mắt khi tra cứu hàng chục cột và hàng trăm dòng số liệu, đồng thời bảng sẽ bị tràn mép vỡ nát khi xem trên màn hình điện thoại di động nhỏ hẹp.
> 
> Bài tập số 29 này chính là giải pháp toàn diện để giải quyết trọn vẹn bài toán đó, hướng tới các mục tiêu:
> - **Thứ nhất:** Xây dựng bảng dữ liệu chuẩn ngữ nghĩa HTML5 với các thẻ `<table>`, `<thead>`, `<tbody>`, sử dụng thuộc tính `scope="col"` và `scope="row"` tối ưu cho khả năng tiếp cận và công cụ đọc màn hình.
> - **Thứ hai:** Ứng dụng các lớp tiện ích mạnh mẽ của Bootstrap 5 gồm: `table-striped` tạo các dải màu xen kẽ tăng khả năng dò đọc số liệu, và `table-hover` tạo hiệu ứng đổi màu nền tức thì khi di chuột qua từng hàng dữ liệu.
> - **Thứ ba:** Thiết kế hệ thống nhãn trạng thái (Badges) trực quan sinh động: phân biệt rõ ràng giữa trạng thái 'Đạt' màu xanh lá cây (`#198754`) và 'Thi lại' màu vàng hổ phách cảnh báo (`#ffc107`).
> - **Thứ tư:** Làm chủ kỹ thuật cuộn ngang chống vỡ layout (`table-responsive`), bảo đảm an toàn hiển thị 100% trên mọi kích thước màn hình từ điện thoại thông minh đến máy tính để bàn.
> - **Thứ năm:** Xây dựng thanh điều hướng phân trang linh hoạt (`pagination pagination-sm`) với các trạng thái kích hoạt `active` và vô hiệu hóa `disabled` chuẩn UI/UX.
> 
> Cấu trúc bài thuyết minh của em sẽ gồm có 6 phần:
> 1. Giới thiệu tổng quan & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết chuyên sâu về Table, Responsive Wrapper và Pagination trong Bootstrap 5.
> 3. Đi sâu thuyết minh chi tiết từng dòng mã nguồn HTML trong file `bai29.html`.
> 4. Phân tích bảng định kiểu CSS tùy biến và cách phối hợp các class tiện ích Bootstrap.
> 5. Trình diễn demo thực tế: kiểm tra hover, click phân trang, co dãn responsive và soi F12 Developer Tools.
> 6. Tổng kết bài học kinh nghiệm và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bước vào Phần 2: Cơ sở lý thuyết nền tảng."

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code, cuộn đến khối khai báo thẻ `<table>` và thẻ `<nav>` phân trang.
- Bôi đen class `table-responsive`, `table-striped`, `table-hover` để nhấn mạnh.

🗣️ **Lời đọc:**
> "Để hiểu rõ tại sao bảng dữ liệu của chúng ta vừa đẹp mắt vừa hoạt động bền bỉ trên mọi thiết bị, chúng ta cần nắm vững 4 nguyên lý lý thuyết quan trọng sau:
> 
> **1. Nguyên lý thứ nhất: Cấu trúc ngữ nghĩa chuẩn của HTML Table.**
> Trong chuẩn thiết kế web hiện đại, một bảng dữ liệu không được phép viết lộn xộn các thẻ `<tr>` mà bắt buộc phải phân định ranh giới rõ ràng:
> - Phần đầu bảng `<thead>`: Chứa các tiêu đề cột bằng thẻ `<th>`. Việc thêm thuộc tính `scope="col"` giúp trình duyệt và công cụ đọc màn hình nhận biết rằng tiêu đề này kiểm soát toàn bộ dữ liệu của cột tương ứng bên dưới.
> - Phần thân bảng `<tbody>`: Chứa các dòng dữ liệu thực tế bằng thẻ `<tr>`. Tại mỗi ô đầu dòng, chúng ta dùng thẻ `<th scope="row">` để định danh cho số thứ tự của bản ghi đó.
> Cấu trúc này không chỉ giúp mã nguồn trong sáng, dễ bảo trì mà còn hỗ trợ tối đa cho việc lập trình JavaScript trích xuất dữ liệu sau này.
> 
> **2. Nguyên lý thứ hai: Cơ chế Zebra-Striping (`table-striped`) và Hover phản hồi.**
> - Khi mắt người nhìn vào một bảng dài có nhiều cột, hiện tượng 'nhìn nhầm dòng' (Row misreading) rất dễ xảy ra. Bootstrap giải quyết vấn đề này bằng lớp `.table-striped`: bên dưới CSS, Bootstrap sử dụng bộ chọn giả lập `:nth-of-type(odd)` hoặc `:nth-of-type(even)` kết hợp với biến màu CSS `--bs-table-striped-bg: rgba(0, 0, 0, 0.05)`. Cứ một hàng màu trắng sẽ đan xen với một hàng màu xám nhạt tự động mà chúng ta không cần gán class thủ công cho từng hàng.
> - Lớp `.table-hover` áp dụng bộ chọn `:hover` lên từng thẻ `<tr>`: khi con trỏ chuột lướt tới đâu, cả hàng dữ liệu đó sẽ sáng bừng lên một lớp màu nền xám nổi bật. Đây là phản hồi xúc giác thị giác (Visual feedback) cực kỳ quan trọng giúp người dùng không bị lạc mất vị trí dòng đang tra cứu.
> 
> **3. Nguyên lý thứ ba: Kỹ thuật Responsive Container (`table-responsive`).**
> Bảng dữ liệu HTML vốn dĩ có thuộc tính co dãn kém nhất trên trang web vì nó bắt buộc phải hiển thị đủ độ rộng của các từ ngữ bên trong. Khi xem trên màn hình điện thoại chỉ rộng khoảng 375px, nếu không có giải pháp xử lý, cả trang web sẽ bị kéo phình to sang ngang làm vỡ nát toàn bộ layout của website.
> Lớp bọc `.table-responsive` của Bootstrap sử dụng thuộc tính `overflow-x: auto; -webkit-overflow-scrolling: touch;`. Khi màn hình không đủ chỗ chứa bảng, chỉ riêng khối bảng bên trong mới xuất hiện thanh cuộn cảm ứng nằm ngang mượt mà, trong khi toàn bộ khung thẻ Card và thanh phân trang bên ngoài vẫn giữ nguyên vị trí cân đối!
> 
> **4. Nguyên lý thứ tư: Kiến trúc Linh kiện Phân trang (Pagination Architecture).**
> Khi cơ sở dữ liệu có hàng trăm hoặc hàng nghìn sinh viên, chúng ta không thể nạp tất cả lên một trang duy nhất. Linh kiện Pagination gồm thẻ `<nav>` bao bọc danh sách `<ul class="pagination">`:
> - `.page-item.active`: Đánh dấu trang hiện tại mà người dùng đang xem.
> - `.page-item.disabled`: Khóa nút bấm (ví dụ nút lùi trang `«` khi đang ở trang số 1), ngăn chặn việc người dùng click vào các hành động không hợp lệ."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT TỪNG DÒNG HTML (`bai29.html`) (06:00 - 10:30)

🎬 **Thao tác:** 
- Mở file `bai29.html` trên VS Code.
- Bôi đen tuần tự từ dòng 1 đến dòng 129 theo tiến độ thuyết minh.

🗣️ **Lời đọc:**
> "Bây giờ, em xin phân tích chi tiết từng khối mã nguồn HTML trong file `bai29.html`. Toàn bộ file có 129 dòng code được sắp xếp khoa học và chuẩn mực:
> 
> - **Từ dòng 1 đến dòng 44: Phần `<head>` và CSS tùy biến:**
>   - Các thẻ khai báo tiêu chuẩn HTML5, ngôn ngữ tiếng Việt, mã hóa UTF-8 và thẻ `viewport` hiển thị.
>   - Dòng 8: Liên kết thư viện Bootstrap 5.3.3 qua CDN.
>   - Từ dòng 9 đến 42: Đoạn CSS tùy biến màu nền tiêu đề bảng màu đen sang trọng `#212529`, căn giữa các cột điểm số và trạng thái, định dạng nhãn màu xanh cho Đạt và màu vàng cho Thi lại.
> 
> - **Dòng 44 đến dòng 48: Mở thẻ `<body>` và Khung Thẻ Card Trung tâm:**
>   - `<body class="bg-light py-5">`: Nền xám sáng, đệm trên dưới 48px.
>   - `<div class="container" style="max-width: 820px;">`: Khung giới hạn chiều rộng 820px, kích thước chuẩn vàng cho một bảng danh sách 6 cột, tự động căn giữa trang web.
>   - Dòng 48: `<div class="card shadow-sm border-0 rounded-3 p-4 bg-white">`: Chiếc thẻ màu trắng tinh khôi, đổ bóng nhẹ `shadow-sm`, không viền `border-0`, bo tròn góc 16px (`rounded-3`) và có padding trong 1.5rem (24px) bao bọc toàn bộ nội dung.
> 
> - **Từ dòng 49 đến dòng 53: Thanh Tiêu Đề Bảng và Huy Hiệu Đếm Tổng Số:**
>   - `<div class="d-flex justify-content-between align-items-center mb-3">`: Ứng dụng Flexbox để dàn hai phần tử sang hai góc đối xứng nhau.
>   - Bên trái: `<h5 class="fw-bold text-dark mb-0">Danh sách sinh viên</h5>`: Tiêu đề chữ đen in đậm, triệt tiêu margin đáy.
>   - Bên phải: `<span class="badge bg-primary px-3 py-2">Tổng: 42</span>`: Huy hiệu màu xanh dương nổi bật, thông báo tổng số lượng sinh viên trong hệ thống là 42.
> 
> - **Từ dòng 55 đến dòng 111: Bảng Dữ Liệu Quản Lý Sinh Viên:**
>   - Khung bao bọc cuộn ngang: `<div class="table-responsive rounded-2 overflow-hidden mb-4">`. Lớp này đảm bảo bảng không bao giờ bị tràn khung hình trên điện thoại, đồng thời bo góc 8px cho cả bảng.
>   - Thẻ bảng chính: `<table class="table table-striped table-hover mb-0">`.
>   - **Phần Đầu Bảng `<thead>` (Dòng 58 đến 67):**
>     - Gồm 6 cột tiêu đề: Cột 1 là dấu `#` (chiều rộng cố định 50px), Cột 2 là 'Mã SV', Cột 3 là 'Họ và tên', Cột 4 là 'Lớp', Cột 5 là 'Điểm' (có class `cot-diem`), Cột 6 là 'Trạng thái' (có class `cot-trang-thai`).
>     - Tất cả đều sử dụng thẻ `<th scope="col">` chuẩn ngữ nghĩa.
>   - **Phần Thân Bảng `<tbody>` (Dòng 68 đến 109):**
>     - Gồm 5 dòng dữ liệu mẫu sinh viên tiêu biểu:
>       + Dòng 1: STT 1, Mã SV *2251060001*, Họ tên *Nguyễn Văn An*, Lớp *67CNTT1*, Điểm *8.5*, Trạng thái: `<span class="badge-dat">Đạt</span>`.
>       + Dòng 2: STT 2, Mã SV *2251060002*, Họ tên *Trần Thị Bình*, Lớp *67CNTT1*, Điểm *7.0*, Trạng thái: `<span class="badge-dat">Đạt</span>`.
>       + Dòng 3: STT 3, Mã SV *2251060003*, Họ tên *Lê Minh Cường*, Lớp *67CNTT2*, Điểm *5.5*, Trạng thái: `<span class="badge-thilai">Thi lại</span>`.
>       + Dòng 4: STT 4, Mã SV *2251060004*, Họ tên *Phạm Thu Dung*, Lớp *67KTPM1*, Điểm *9.0*, Trạng thái: `<span class="badge-dat">Đạt</span>`.
>       + Dòng 5: STT 5, Mã SV *2251060005*, Họ tên *Hoàng Gia Hân*, Lớp *67KTPM1*, Điểm *6.5*, Trạng thái: `<span class="badge-dat">Đạt</span>`.
> 
> - **Từ dòng 113 đến dòng 122: Thanh Điều Hướng Phân Trang (Pagination):**
>   - `<nav aria-label="Phân trang" class="d-flex justify-content-center">`: Căn giữa thanh phân trang ở đáy thẻ card.
>   - `<ul class="pagination pagination-sm mb-0">`: Tạo thanh phân trang cỡ nhỏ gọn gàng `pagination-sm`.
>   - Mục 1: `<li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>`: Nút lùi về trang trước dạng ký tự mũi tên kép `«`, được gắn class `disabled` vì hiện tại đang ở trang đầu tiên.
>   - Mục 2: `<li class="page-item active"><a class="page-link" href="#">1</a></li>`: Trang số 1 đang hoạt động, có màu nền xanh dương.
>   - Mục 3 và 4: Trang số 2 và trang số 3 dạng liên kết thường.
>   - Mục 5: Nút tiến sang trang sau dạng mũi tên kép `»`.
> 
> - **Dòng 126:** Nhúng file script `bootstrap.bundle.min.js` hoàn thiện trang web."

---

## ⏱️ PHẦN 4: PHÂN TÍCH BẢNG ĐỊNH KIỂU CSS VÀ CÁC CLASS BOOTSTRAP (10:30 - 15:00)

🎬 **Thao tác:** 
- Rê chuột vào khối CSS trong thẻ `<style>` từ dòng 9 đến dòng 42 trên VS Code.
- Mở F12 DevTools bên Chrome, inspect vào một hàng `<tr>` trong `<tbody>` và một nhãn badge để chỉ ra cách thuộc tính CSS hoạt động.

🗣️ **Lời đọc:**
> "Bây giờ, em xin đi sâu phân tích tệp định dạng kiểu dáng CSS và các class Bootstrap 5 đã làm nên vẻ ngoài chuyên nghiệp, hiện đại của bảng dữ liệu này:
> 
> **1. Tùy biến thanh Tiêu đề Bảng `.table thead th` (Dòng 10 đến 15):**
> ```css
> .table thead th {
>     background-color: #212529 !important;
>     color: #ffffff !important;
>     font-size: 13.5px;
>     font-weight: 600;
> }
> ```
> - Chúng em sử dụng mã màu xám đen đậm `#212529` kết hợp màu chữ trắng tinh khôi `#ffffff`. Từ khóa `!important` được dùng để ghi đè dứt khoát lên màu nền xám mặc định của Bootstrap 5.
> - Kích thước font chữ 13.5px in đậm vừa phải (`font-weight: 600`), tạo cảm giác vững chãi, uy tín như giao diện của các cổng thông tin ngân hàng hay quản trị hệ thống cao cấp.
> 
> **2. Tùy biến các Ô dữ liệu Thân Bảng `.table tbody td` (Dòng 16 đến 19):**
> - Kích thước chữ 13.5px vừa vặn, kết hợp thuộc tính `vertical-align: middle;`. Thuộc tính này cực kỳ quan trọng: nó căn thẳng hàng toàn bộ văn bản và các nhãn Badge vào chính giữa chiều cao của dòng, giúp các ô dữ liệu không bị lệch lên trên hay thụt xuống dưới.
> - Hai lớp căn lề `.cot-diem` và `.cot-trang-thai` đều dùng `text-align: center;` để đưa con số điểm và chiếc huy hiệu vào chính giữa cột, tạo sự đối xứng thị giác hoàn hảo.
> 
> **3. Thiết kế Nhãn Trạng thái Badges Tùy Biến (Dòng 26 đến 41):**
> - Nhãn **'Đạt'** (`.badge-dat`):
>   ```css
>   .badge-dat {
>       background-color: #198754;
>       color: #ffffff;
>       border-radius: 4px;
>       padding: 4px 10px;
>       font-size: 12px;
>       font-weight: 600;
>   }
>   ```
>   Sử dụng mã màu xanh lá cây thành công `#198754`, bo góc 4px gọn gàng, padding đệm 4px 10px tạo hình khối chữ nhật nhỏ nhắn, nổi bật rõ ràng kết quả học tập tốt của sinh viên.
> - Nhãn **'Thi lại'** (`.badge-thilai`):
>   ```css
>   .badge-thilai {
>       background-color: #ffc107;
>       color: #212529;
>       border-radius: 4px;
>       padding: 4px 10px;
>       font-size: 12px;
>       font-weight: 600;
>   }
>   ```
>   Sử dụng màu vàng hổ phách cảnh báo `#ffc107` kết hợp chữ màu đen sẫm `#212529`. Độ tương phản màu sắc đạt chuẩn giúp giảng viên và sinh viên nhận diện ngay lập tức những trường hợp cần thi lại mà không thể bị nhầm lẫn.
> 
> **4. Cơ chế hoạt động của `table-striped` và `table-hover`:**
> - Nhờ có `table-striped`, hàng số 1, 3, 5 có màu nền trắng `#ffffff`, trong khi hàng số 2 và 4 có màu xám mờ nhẹ `rgba(0, 0, 0, 0.05)`.
> - Khi di chuột vào bất kỳ hàng nào, class `table-hover` lập tức phủ một lớp màu xám đậm hơn lên toàn bộ hàng đó, giúp việc tra cứu điểm số của từng sinh viên cực kỳ chính xác."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (15:00 - 18:30)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị trang `bai29.html`.
- Thao tác di chuột từ từ qua từng hàng của bảng từ dòng 1 đến dòng 5.
- Thao tác click vào các nút phân trang.
- Mở F12 DevTools và co dãn chiều rộng màn hình để kiểm tra responsive.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, ngay bây giờ em xin tiến hành phần thực nghiệm trực tiếp trên trình duyệt web:
> 
> **Thao tác 1: Trải nghiệm hiệu ứng Di chuột Table Hover:**
> - Em rê con trỏ chuột vào dòng số 1 của bạn *Nguyễn Văn An*. Thầy cô có thể thấy toàn bộ nền của dòng 1 đổi màu xám mờ ngay lập tức.
> - Em rê tiếp xuống dòng số 2 của bạn *Trần Thị Bình*: Dòng 2 sáng lên, dòng 1 trở về bình thường.
> - Em rê xuống dòng số 3 của bạn *Lê Minh Cường*: Toàn bộ hàng nổi bật, điểm số 5.5 và nhãn màu vàng 'Thi lại' đập ngay vào mắt người dùng.
> - Hiệu ứng hover diễn ra với độ mượt tuyệt đối, không có bất kỳ hiện tượng giật lag nào.
> 
> **Thao tác 2: Trải nghiệm thanh Phân trang Pagination:**
> - Nhìn xuống thanh phân trang ở đáy thẻ card:
> - Nút lùi trang `«` đang ở trạng thái `disabled`, biểu tượng con trỏ chuột chuyển thành hình vòng tròn gạch chéo không cho bấm, báo hiệu ta đang ở trang đầu tiên.
> - Trang số 1 đang có nền xanh dương rực rỡ (`active`).
> - Em thử rê chuột vào số 2 và số 3: Nút đổi màu xanh nhạt chào đón tương tác.
> - Em nhấp vào trang số 2, rồi nhấp vào nút tiến trang `»`: Phản hồi giao diện diễn ra vô cùng tự nhiên.
> 
> **Thao tác 3: Bật F12 Developer Tools soi cấu trúc DOM và Responsive:**
> - Em nhấn phím `F12` trên bàn phím.
> - **Tab Console:** Sạch sẽ 100%, không phát sinh cảnh báo hay lỗi.
> - **Tab Elements:** Em inspect vào một thẻ `<tr>`. Tại tab Styles, chúng ta thấy rõ quy tắc CSS `:nth-of-type(odd)` của Bootstrap và quy tắc `vertical-align: middle` tùy biến hoạt động chính xác.
> - **Kiểm tra tính năng Cuộn ngang Responsive (`Ctrl + Shift + M`):**
>   - Trên Desktop (1200px): Bảng dữ liệu 6 cột hiển thị ngay ngắn, thoáng đãng ở giữa màn hình 820px.
>   - Bây giờ, em co màn hình lại xuống kích thước điện thoại di động cực nhỏ: **360px** (mô phỏng Samsung Galaxy S20).
>   - Thầy cô hãy quan sát điều kỳ diệu: Thẻ Card trắng và tiêu đề 'Danh sách sinh viên' vẫn giữ nguyên vị trí, không hề bị vỡ mép.
>   - Trong khi đó, phần bảng dữ liệu bên trong xuất hiện một thanh cuộn ngang cực kỳ mượt mà. Em dùng ngón tay (hoặc chuột) vuốt nhẹ sang phải: toàn bộ cột Điểm và Trạng thái hiện ra trọn vẹn, không hề có chữ nào bị ép xuống dòng hay mất nét.
>   - Đây chính là minh chứng sống động cho sức mạnh cứu cánh của lớp `.table-responsive` trong thiết kế web thực tế!"

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (18:30 - 20:00)

🎬 **Thao tác:** 
- Tắt F12 DevTools, đưa màn hình về trạng thái bảng sinh viên đẹp nhất.
- Nhìn vào màn hình, nói lời kết trang trọng, cảm xúc.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, qua quá trình nghiên cứu và thực hiện trọn vẹn Bài tập thực hành số 29, bản thân em đã tích lũy được nhiều bài học quý báu:
> 
> - **Thứ nhất:** Hiểu sâu sắc cách tổ chức một bảng dữ liệu chuẩn ngữ nghĩa trong HTML5 và phương pháp phối hợp các lớp tiện ích `table-striped`, `table-hover` của Bootstrap 5 để nâng cao trải nghiệm đọc hiểu số liệu của người dùng.
> - **Thứ hai:** Làm chủ kỹ thuật bọc bảng bằng `.table-responsive` để bảo vệ layout trang web không bao giờ bị vỡ trên các thiết bị di động có bề ngang hẹp.
> - **Thứ ba: Những sai lầm phổ biến cần tránh khi làm việc với bảng:**
>   - Quên bọc thẻ `<table>` trong khối `.table-responsive`, dẫn đến việc trang web bị lỗi cuộn ngang toàn trang (Horizontal page overflow) trên điện thoại, làm hỏng toàn bộ giao diện website.
>   - Quên thuộc tính `vertical-align: middle`, khiến các dòng chữ và nhãn Badge bị lệch lên sát mép trên của ô dữ liệu, gây mất cân đối thị giác.
>   - Lạm dụng quá nhiều màu sắc sặc sỡ trong bảng, làm phân tán sự chú ý của người xem thay vì tập trung vào các trạng thái dữ liệu trọng tâm.
> 
> Bài thuyết minh về Bài tập số 29 của em đến đây xin phép được khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản đã truyền đạt cho chúng em những bài học thực tiễn vô cùng giá trị. Cảm ơn các bạn sinh viên đã lắng nghe và đồng hành.
> 
> Kính chúc thầy cô luôn tràn đầy niềm vui và sức khỏe, chúc các bạn sinh viên đạt kết quả cao trong học tập! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 29 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
