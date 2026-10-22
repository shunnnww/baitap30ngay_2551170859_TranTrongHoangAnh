# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 22: GIAO DIỆN CHUYỂN ĐỔI CHẾ ĐỘ SÁNG / TỐI (DARK / LIGHT MODE) BẰNG BIẾN CSS & JAVASCRIPT

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Mở VS Code bên trái (`Windows + Mũi tên trái`), mở trình duyệt Chrome hiển thị `bai22.html` bên phải (`Windows + Mũi tên phải`). Mở kịch bản này trên một thiết bị khác hoặc màn hình phụ để đọc liền mạch.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói chậm rãi, nhấn nhá vào các từ khóa công nghệ như CSS Variables, Custom Properties, Event Listener, DOM classList.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột bấm nút gạt, soi mã nguồn, mở DevTools để video mang tính thực chiến cao.
   - ⏱️ **Mốc thời gian:** Định hướng kiểm soát tốc độ thuyết trình suốt 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây / Mốc: 00:00 - 02:30)

🎬 **Thao tác:**
- Bật OBS ghi hình, màn hình hiển thị cả VS Code và tab trình duyệt `bai22.html`.
- Nhấp chuột bật/tắt nút gạt Dark/Light Mode 2 lần để hiển thị hiệu ứng chuyển màu mượt mà ngay phần mở đầu.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản cùng toàn thể các bạn sinh viên đang theo dõi buổi thuyết minh bài tập thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em xin phép được trình bày chi tiết về sản phẩm **Bài tập thực hành số 22: Xây dựng cơ chế chuyển đổi giao diện Sáng / Tối (Dark / Light Mode) bằng Biến CSS (CSS Variables) và JavaScript DOM Manipulation**.
> 
> Thưa thầy cô, trong trải nghiệm người dùng (UX) hiện đại, tính năng Chế độ tối (Dark Mode) đã trở thành một tiêu chuẩn không thể thiếu trên hầu hết các nền tảng công nghệ lớn như Google, Facebook, GitHub, hệ điều hành iOS hay Windows. Tính năng này không chỉ mang lại phong cách thẩm mỹ công nghệ thời thượng, giúp tiết kiệm pin đáng kể cho các dòng màn hình OLED, mà còn giúp bảo vệ thị lực của người dùng khi làm việc vào ban đêm.
> 
> Với Bài tập số 22, chúng em giải quyết bài toán chuyển đổi giao diện toàn diện với 4 mục tiêu kỹ thuật trọng tâm:
> - Thứ nhất: Thiết lập hệ thống biến màu độc lập thông qua **CSS Custom Properties** (hay còn gọi là Biến CSS), định nghĩa bảng màu chuẩn cho chế độ sáng trong pseudo-class `:root` và bộ ghi đè màu tương ứng trong lớp `.toi`.
> - Thứ hai: Thiết kế một công tắc gạt toggle switch tùy biến thuần CSS (Custom Toggle Switch) từ thẻ `<input type="checkbox">`, chuyển động mượt mà với hiệu ứng trượt bóng tròn 3D.
> - Thứ ba: Sử dụng ngôn ngữ **JavaScript** để bắt sự kiện thay đổi trạng thái (`change`) của công tắc, thêm hoặc gỡ bỏ class `.toi` trên phần tử `<body>` của cây phân cấp DOM, đồng thời cập nhật dòng thông báo trạng thái theo thời gian thực.
> - Thứ tư: Tạo hiệu ứng chuyển sắc mềm mại, êm dịu (Smooth Transition) cho mọi phần tử nền, chữ và viền thông qua thuộc tính `transition`, loại bỏ hoàn toàn hiện tượng chớp nháy màu giật cục gây chói mắt.
> 
> Video hôm nay của em sẽ được cấu trúc khoa học qua 6 nội dung:
> 1. Lý thuyết cốt lõi về CSS Custom Properties và kiến trúc phân tách màu.
> 2. Giải mã chi tiết từng thẻ HTML trong `bai22.html`.
> 3. Đi sâu vào hệ thống biến màu, kỹ thuật vẽ công tắc toggle và transition trong `bai22.css`.
> 4. Phân tích thuật toán và cơ chế bắt sự kiện trong `bai22.js`.
> 5. Thực hành demo tương tác trên trình duyệt, soi F12 Console, Elements, kiểm tra trạng thái Checked và Responsive.
> 6. Tổng kết bài học và lời cảm ơn kết thúc.
> 
> Bây giờ, em xin bắt đầu với phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & NỀN TẢNG KỸ THUẬT CỐT LÕI (Thời lượng: ~3 phút 30 giây / Mốc: 02:30 - 06:00)

🎬 **Thao tác:**
- Chuyển sang VS Code, cuộn chuột đến đầu file `bai22.css` nơi khai báo `:root` và `body.toi`.
- Bôi đen cụm từ `--nen-trang`, `var(--nen-trang)`.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng mã nguồn, em xin tóm lược 3 nền tảng kỹ thuật cốt lõi giúp tạo nên kiến trúc chuyển giao diện chuyên nghiệp trong bài tập này:
> 
> **Thứ nhất: Biến CSS (CSS Custom Properties) và tính kế thừa (Inheritance).**
> - Trước đây, khi muốn đổi màu một trang web sang Dark Mode, lập trình viên thường phải viết lại toàn bộ mã CSS, nhân đôi số lượng lớp chọn hoặc can thiệp trực tiếp mã màu từ JavaScript, gây ra tình trạng mã nguồn phình to và cực kỳ khó bảo trì.
> - Trong CSS3, chuẩn **Custom Properties** ra đời cho phép ta khai báo biến bắt đầu bằng hai dấu gạch nối `--` (ví dụ `--nen-trang`, `--chu-chinh`).
> - Khối giả lớp `:root` đại diện cho phần tử gốc cao nhất của tài liệu HTML. Các biến khai báo tại `:root` sẽ có phạm vi toàn cục (Global Scope) và mọi thẻ con đều có thể kế thừa và tái sử dụng thông qua hàm `var()`.
> - Khi ta áp dụng class `.toi` lên thẻ `<body>`, CSS cho phép chúng ta **ghi đè giá trị của chính các biến đó** tại phạm vi của `body.toi`. Kỳ diệu ở chỗ: ta không cần sửa lại bất kỳ tên thuộc tính CSS nào ở các thẻ con bên dưới! Trình duyệt sẽ tự động nội suy và thay thế các biến bằng giá trị mới của lớp `.toi`.
> 
> **Thứ hai: Kỹ thuật xây dựng Toggle Switch từ Checkbox thuần CSS.**
> - Mặc định, thẻ `<input type="checkbox">` của trình duyệt có hình dạng ô vuông nhỏ rất thô sơ và không thể tùy biến giao diện tự do.
> - Để tạo ra một nút gạt sang trọng giống như trên điện thoại iPhone:
>   + Ta ẩn hoàn toàn ô checkbox mặc định bằng thuộc tính `opacity: 0; width: 0; height: 0;`.
>   + Bao bọc checkbox bằng một thẻ `<label class="cong-tac-gat">` có thuộc tính `cursor: pointer;` để khi nhấp vào bất kỳ đâu trong nhãn, checkbox vẫn nhận lệnh.
>   + Dùng một thẻ `<span>` mang class `.thanh-gat` làm đường ray trượt hình viên thuốc bo tròn.
>   + Dùng phần tử giả `.thanh-gat:before` để vẽ viên bi tròn màu trắng.
>   + Khi checkbox chuyển sang trạng thái `:checked`, ta tận dụng bộ chọn anh em liền kề `input:checked + .thanh-gat:before` để kích hoạt phép biến đổi hình học `transform: translateX(22px);`, đưa viên bi trượt mượt mà sang phải.
> 
> **Thứ ba: Cơ chế lắng nghe sự kiện trong JavaScript.**
> - Chúng ta gắn sự kiện `change` lên ô checkbox thông qua phương thức chuẩn `addEventListener('change', callback)`.
> - Thuộc tính `this.checked` trả về giá trị kiểu boolean (`true` hoặc `false`).
> - Dựa vào trạng thái này, chúng ta sử dụng `document.body.classList.add('toi')` hoặc `document.body.classList.remove('toi')` để bổ sung hoặc thu hồi lớp CSS, đạt độ trễ gần như bằng 0 mà không làm ảnh hưởng đến hiệu năng dựng hình của trình duyệt."

---

## ⏱️ PHẦN 3: PHÂN TÍCH CHI TIẾT TỪNG DÒNG MÃ NGUỒN HTML (`bai22.html`) (Thời lượng: ~4 phút / Mốc: 06:00 - 10:00)

🎬 **Thao tác:**
- Chuyển sang tệp `bai22.html` trong VS Code.
- Lần lượt bôi đen từ dòng 1 đến dòng 47 theo từng phân đoạn giải thích.

🗣️ **Lời đọc:**
> "Bây giờ, em xin đi sâu vào phân tích cấu trúc của tệp `bai22.html`.
> 
> Tệp tin bao gồm 48 dòng code chuẩn chỉnh, cấu trúc rất mạch lạc:
> 
> - **Dòng 1 đến dòng 9: Phần khai báo tài liệu:**
>   - Dòng 1 và dòng 2: Thẻ `<!DOCTYPE html>` và `<html lang="vi" class="toi">`. Việc đặt sẵn `class="toi"` ngay từ phần tử HTML hoặc thẻ Body giúp đảm bảo khi người dùng tải trang, giao diện mặc định sẽ vào ngay chế độ Dark Mode mà không bị hiện tượng chớp sáng (Flash of unstyled content).
>   - Dòng 4 đến dòng 7: Khai báo bảng mã ký tự `UTF-8`, thẻ điều khiển hiển thị di động `viewport`, tiêu đề bài học và thẻ `<link>` nhúng tệp định kiểu `bai22.css`.
>   - Dòng 9: Thẻ `<body class="toi">` được gán sẵn class tối khởi tạo.
> 
> - **Dòng 11: Khung thẻ chính `<div class="the-chinh">`:**
>   - Toàn bộ nội dung ứng dụng được gói gọn bên trong một thẻ card trung tâm với độ rộng tối đa 660px, đặt giữa màn hình.
> 
> - **Dòng 13 đến dòng 19: Khối đầu thẻ (`<header class="dau-the">`):**
>   - Đây là nơi chứa tiêu đề và bộ điều khiển trung tâm:
>     + Dòng 14: Thẻ tiêu đề `<h2 class="tieu-de-chinh">Chế độ Tối / Sáng</h2>`.
>     + Dòng 15 đến dòng 18: Thẻ `<label class="cong-tac-gat">` bọc ô input `<input type="checkbox" id="nut-gat" checked>`. Thuộc tính `checked` được kích hoạt sẵn để đồng bộ với trạng thái `class="toi"` của thẻ Body lúc khởi tạo. Kế tiếp là thẻ `<span class="thanh-gat"></span>` đóng vai trò hiển thị phần đồ họa của công tắc.
> 
> - **Dòng 22 đến dòng 37: Danh sách các thẻ thông tin (`<div class="danh-sach-the">`):**
>   - Gồm 3 thẻ con đồng dạng có class `.the-muc`:
>     + Thẻ con thứ nhất (Dòng 23 đến 26): Tiêu đề *'Biến CSS (CSS Variables)'*, giải thích rằng toàn bộ màu sắc được quản lý trong `:root` và ghi đè bằng class `.toi`.
>     + Thẻ con thứ hai (Dòng 28 đến 31): Tiêu đề *'Chuyển đổi bằng JavaScript'*, mô tả cách nút gạt thêm/bớt class `.toi` trên body.
>     + Thẻ con thứ ba (Dòng 33 đến 36): Tiêu đề *'Chuyển màu mượt'*, nhấn mạnh vai trò của `transition` giúp trải nghiệm mượt mà, không giật cục.
> 
> - **Dòng 40 đến dòng 42: Khối chân thẻ (`<footer class="chan-the">`):**
>   - Thẻ `<span id="dong-trang-thai">` chứa dòng văn bản thông báo: *'Đây là giao diện ở chế độ TỐI (đang bật).'*. Thẻ này được định danh bằng `id` để mã JavaScript có thể cập nhật nội dung tương ứng mỗi khi người dùng gạt nút.
> 
> - **Dòng 45: Nhúng mã JavaScript `<script src="bai22.js"></script>`:**
>   - Đặt ở cuối trang trước thẻ đóng `</body>`, đảm bảo toàn bộ cây DOM đã hoàn thành quá trình phân tích cú pháp trước khi kịch bản JavaScript được thực thi."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS & JAVASCRIPT (`bai22.css`, `bai22.js`) (Thời lượng: ~5 phút / Mốc: 10:00 - 15:00)

🎬 **Thao tác:**
- Chuyển sang tệp `bai22.css`, rê chuột qua hai khối màu `:root` và `body.toi`.
- Tiếp tục chỉ vào phần tử `.cong-tac-gat`, `.thanh-gat`, `.thanh-gat:before` và `input:checked + .thanh-gat:before`.
- Chuyển tiếp sang tệp `bai22.js` để giải thích 17 dòng JavaScript.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta sẽ đi sâu vào hai tệp mã nguồn xử lý linh hồn của bài toán: tệp kiểu dáng `bai22.css` và tệp logic `bai22.js`:
> 
> **A. Phân tích tệp `bai22.css`:**
> 
> 1. **Hệ thống biến màu trong `:root` và `body.toi` (Dòng 5 đến dòng 27):**
>    - Ở chế độ Sáng (`:root`):
>      + `--nen-trang`: Màu xám sáng `#f1f5f9`.
>      + `--nen-the-chinh`: Màu trắng tinh `#ffffff`.
>      + `--nen-the-muc`: Nền thẻ phụ `#f8fafc`.
>      + `--vien`: Đường viền nhạt `#e2e8f0`.
>      + `--chu-chinh`: Đen than `#1e293b`.
>      + `--chu-the`: Xanh lam đậm `#2563eb`.
>    - Khi thẻ Body được kích hoạt class `.toi` (`body.toi`):
>      + `--nen-trang`: Chuyển sang màu đen vũ trụ `#0b0f19`.
>      + `--nen-the-chinh`: Màu xanh đen sẫm `#0f172a`.
>      + `--nen-the-muc`: Xanh đá phiến `#1e293b`.
>      + `--vien`: Viền tối `#334155`.
>      + `--chu-chinh`: Chữ trắng nổi bật `#ffffff`.
>      + `--chu-the`: Xanh da trời sáng `#60a5fa`.
> 
> 2. **Hiệu ứng chuyển màu mượt toàn cục (Dòng 29 đến dòng 34):**
>    - Thuộc tính cực kỳ đắt giá tại bộ chọn `*`:
>      `transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;`.
>    - Thời gian `0.3s` cùng gia tốc `ease` giúp toàn bộ màu nền, màu chữ và đường viền biến đổi nhịp nhàng, êm ái như một thước phim điện ảnh trong 300 mili-giây.
> 
> 3. **Bố cục khung thẻ và công tắc gạt Toggle Switch (Dòng 36 đến dòng 115):**
>    - `body` sử dụng Flexbox căn giữa tâm màn hình: `min-height: 100vh; display: flex; justify-content: center; align-items: center;`.
>    - Thẻ `.cong-tac-gat` rộng `48px`, cao `26px`.
>    - Nút trượt `.thanh-gat:before` là hình tròn `20px` màu trắng tinh, có đổ bóng nhẹ `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);`.
>    - Khi `input:checked`:
>      + Nền công tắc đổi thành màu xanh công nghệ `#2563eb`.
>      + Viên bi trắng dịch chuyển một quãng đường chính xác bằng câu lệnh `transform: translateX(22px);`.
> 
> **B. Phân tích tệp kịch bản `bai22.js`:**
> 
> - Toàn bộ tệp JS gói gọn trong 17 dòng vô cùng trong sáng và súc tích:
>   - Dòng 5 và dòng 6: Dùng `document.getElementById` để truy xuất 2 phần tử quan trọng:
>     + `const nutGat = document.getElementById('nut-gat');`
>     + `const dongTrangThai = document.getElementById('dong-trang-thai');`
>   - Dòng 8 đến dòng 16: Đăng ký hàm lắng nghe sự kiện `nutGat.addEventListener('change', function() { ... })`:
>     + Khi sự kiện xảy ra, từ khóa `this` đại diện cho chính ô checkbox `#nut-gat`.
>     + Biểu thức rẽ nhánh `if (this.checked)`: Nếu công tắc đang ở vị trí Bật (Checked = true):
>       - Gọi lệnh `document.body.classList.add('toi');` để thêm class tối.
>       - Dùng thuộc tính `.textContent` gán dòng trạng thái: *'Đây là giao diện ở chế độ TỐI (đang bật).'*.
>     + Ngược lại trong khối `else` (Checked = false):
>       - Gọi lệnh `document.body.classList.remove('toi');` để gỡ bỏ class tối, đưa trang web về giao diện sáng ban đầu.
>       - Cập nhật dòng trạng thái: *'Đây là giao diện ở chế độ SÁNG.'*.
>   - Đoạn mã sử dụng hoàn toàn chuẩn DOM thuần (Vanilla JavaScript), không phụ thuộc vào bất kỳ thư viện bên ngoài nào, mang lại tốc độ phản hồi tức thì và hiệu năng tối đa."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI KIỂM TRA BẰNG F12 DEVTOOLS (Thời lượng: ~3 phút 30 giây / Mốc: 15:00 - 18:30)

🎬 **Thao tác:**
- Phóng to cửa sổ Chrome hiển thị `bai22.html`.
- Nhấn chuột vào công tắc gạt nhiều lần để chuyển đổi qua lại giữa Dark Mode và Light Mode.
- Nhấn phím `F12` mở Chrome DevTools.
- Mở tab **Console** để chứng minh không có lỗi.
- Mở tab **Elements**, chọn thẻ `<body>` và quan sát thuộc tính `class="toi"` tự động xuất hiện rồi biến mất khi gạt nút.
- Bật **Device Toolbar** (`Ctrl + Shift + M`) để kiểm tra hiển thị trên điện thoại di động.

🗣️ **Lời đọc:**
> "Sau đây, em xin trân trọng kính mời thầy cô và các bạn cùng quan sát phần kiểm thử tương tác thực tế của ứng dụng trên trình duyệt web:
> 
> 1. **Kiểm tra tương tác chuyển đổi chế độ giao diện:**
>    - Khi vừa mở trang, giao diện hiển thị ở Chế độ Tối sang trọng với nền vũ trụ sẫm màu `#0b0f19`, khung chính nổi bật với màu `#0f172a`, các đường viền sắc sảo và nút gạt đang ở vị trí bật bên phải với màu xanh dương. Dòng trạng thái ở đáy thẻ ghi rõ: *'Đây là giao diện ở chế độ TỐI (đang bật).'*.
>    - Bây giờ, em nhấp chuột vào công tắc gạt:
>      + *[Thao tác: Nhấp chuột vào nút gạt]*
>      + Viên bi tròn trượt mượt mà sang bên trái.
>      + Toàn bộ trang web trong tích tắc 0.3 giây chuyển đổi đồng loạt sang Chế độ Sáng vô cùng dịu mắt: Nền trang chuyển sang xám trắng `#f1f5f9`, thẻ chính chuyển sang trắng tinh khiết, các tiêu đề thẻ mang sắc xanh đậm `#2563eb` và dòng trạng thái lập tức cập nhật thành: *'Đây là giao diện ở chế độ SÁNG.'*.
>    - Em bấm gạt thêm một lần nữa:
>      + *[Thao tác: Nhấp chuột gạt trở lại]*
>      + Hệ thống chuyển đổi tức thì về Chế độ Tối mà không hề có độ trễ hay bất kỳ hiện tượng nhấp nháy màn hình nào.
> 
> 2. **Kiểm tra Tab Console trong F12 Developer Tools:**
>    - *[Thao tác: Bấm F12, mở tab Console]*
>    - Bảng Console hoàn toàn sạch bóng, không có cảnh báo hay ngoại lệ lỗi cú pháp nào.
> 
> 3. **Soi động cây DOM trong Tab Elements:**
>    - *[Thao tác: Mở tab Elements, nhấp chuột chọn thẻ `<body>`]*
>    - Thầy cô có thể quan sát trực tiếp trên màn hình DevTools:
>      + Khi em gạt công tắc sang Tắt, từ khóa `class="toi"` trên thẻ `<body>` ngay lập tức bị gỡ bỏ.
>      + Khi em gạt công tắc sang Bật, chuỗi `class="toi"` lập tức được tiêm trở lại vào thẻ `<body>`.
>    - Ở cột Styles bên phải, chúng ta thấy rõ ràng các biến CSS trong khối `body.toi` đã ghi đè hoàn toàn các giá trị trong `:root`.
> 
> 4. **Kiểm tra độ co dãn Responsive:**
>    - *[Thao tác: Bấm `Ctrl + Shift + M`]*
>    - Co dãn màn hình về kích thước điện thoại 375px. Khung thẻ chính với thiết lập `max-width: 660px; width: 100%;` co lại vừa vặn tuyệt đối, mép đệm hai bên giữ khoảng cách an toàn 15px, không hề bị tràn mép hay vỡ chữ."

---

## ⏱️ PHẦN 6: TỔNG KẾT BÀI HỌC KINH NGHIỆM & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây / Mốc: 18:30 - 20:00)

🎬 **Thao tác:**
- Tắt DevTools, chuyển lại giao diện thẻ chuyển màu của Bài 22, bật chế độ Dark Mode ấn tượng nhất.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và các bạn, qua quá trình nghiên cứu và thực hiện Bài tập số 22, em đã đúc rút được những kinh nghiệm lập trình giao diện hết sức quan trọng:
> - Thứ nhất: Nắm vững và làm chủ phương pháp tư duy kiến trúc giao diện hiện đại bằng **CSS Custom Properties**, hiểu rõ cơ chế kế thừa và ghi đè biến màu theo phạm vi chọn lọc.
> - Thứ hai: Thành thạo kỹ thuật xây dựng các thành phần điều khiển tùy biến (Custom UI Controls) từ các thẻ Form HTML kết hợp với Pseudo-elements và CSS Transitions.
> - Thứ ba: Nắm chắc cách thức điều khiển và đồng bộ hóa trạng thái giao diện giữa HTML, CSS và JavaScript theo mô hình hướng sự kiện (Event-driven).
> 
> Bài thuyết minh báo cáo Bài thực hành số 22 của em đến đây xin phép được khép lại.
> 
> Em xin chân thành cảm ơn thầy cô giáo bộ môn đã tận tình chỉ dạy và định hướng chuyên môn cho chúng em. Cảm ơn các bạn đã lắng nghe và đồng hành trong suốt video hôm nay.
> 
> Kính chúc thầy cô dồi dào sức khỏe và luôn tràn đầy nhiệt huyết giảng dạy! Chúc các bạn học tập thật tốt và làm chủ được các kỹ thuật lập trình web hiện đại!
> Em xin chân thành cảm ơn!"

---
*Hết kịch bản chi tiết Bài 22 — Mã nguồn và cấu trúc chuẩn mực cho việc quay video OBS Studio.*
