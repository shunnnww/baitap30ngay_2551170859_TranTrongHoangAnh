# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 21: BỐ CỤC TRANG WEB 4 VÙNG CHUẨN (BANNER, SIDEBAR TRÁI, NỘI DUNG GIỮA, CỘT QUẢNG CÁO PHẢI)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở kịch bản này trên máy tính bảng/điện thoại hoặc để góc nhìn thuận mắt để đọc rành mạch.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói tự tin, tròn vành rõ chữ, ngữ điệu truyền cảm, nhấn mạnh các thuật ngữ kỹ thuật Web.
   - 🎬 **Thao tác:** Hành động chuột, trỏ code, phím tắt, tương tác trình duyệt F12 để tạo video sinh động.
   - ⏱️ **Mốc thời gian:** Định hướng kiểm soát tốc độ thuyết trình suốt 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây / Mốc: 00:00 - 02:30)

🎬 **Thao tác:**
- Bật OBS ghi hình toàn màn hình hoặc cửa sổ làm việc kết hợp webcam ở góc phải dưới (nếu có).
- Mở song song VS Code (chứa `bai21.html`, `bai21.css`) và Chrome mở sẵn `bai21.html`.
- Rê chuột lướt nhẹ từ trên xuống dưới toàn bộ giao diện bài 21 trên trình duyệt.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản cùng toàn thể các bạn sinh viên đang theo dõi video báo cáo bài tập thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được trình bày và thuyết minh chi tiết sản phẩm thực hành **Bài tập số 21: Thiết kế bố cục trang web 4 vùng chuẩn mực bằng HTML5 Semantic và CSS Flexbox hiện đại**.
> 
> Thưa thầy cô và các bạn, trong tiến trình phát triển của ngành công nghiệp lập trình Web, bố cục 4 vùng kinh điển gồm: Banner tiêu đề phía trên, Menu điều hướng thanh bên trái, Vùng nội dung trọng tâm ở giữa và Cột thông tin bổ trợ hay quảng cáo bên phải là một trong những mô hình kiến trúc giao diện mẫu mực và phổ biến nhất trên các cổng thông tin điện tử, trang tin tức học đường và các website thương mại điện tử.
> 
> Mục tiêu cốt lõi của Bài tập số 21 này gồm có 4 yêu cầu chính:
> - Thứ nhất: Ứng dụng chuẩn ngữ nghĩa HTML5 với các thẻ ngữ nghĩa cao cấp như `<header>`, `<nav>`, `<main>`, `<aside>` để xây dựng khung xương trang web vững chắc, chuẩn SEO và thân thiện với các thiết bị trợ thính, đọc màn hình.
> - Thứ hai: Khai thác sức mạnh của mô hình dàn trang **CSS Flexbox**, phân chia tỷ lệ không gian hợp lý, giải quyết dứt điểm vấn đề chiều cao bằng nhau (Equal Height Columns) mà các kỹ thuật cũ như `float` hay `inline-block` trước đây rất khó xử lý.
> - Thứ ba: Phối hợp màu sắc nhận diện học thuật với tông đỏ truyền thống `#C62828`, dải chuyển sắc Gradient mượt mà, khung viền tinh tế và các hiệu ứng tương tác chuột Hover sống động.
> - Thứ tư: Tối ưu hóa tính tương thích Responsive trên mọi kích thước màn hình thông qua kỹ thuật **CSS Media Queries**, tự động tái cấu trúc từ bố cục đa cột trên máy tính để bàn sang bố cục một cột thẳng đứng trên các thiết bị di động.
> 
> Cấu trúc bài thuyết minh của em ngày hôm nay sẽ diễn ra tuần tự qua 6 phần:
> 1. Phân tích nền tảng lý thuyết CSS Flexbox và Semantic HTML.
> 2. Mổ xẻ chi tiết từng thẻ và phân vùng trong file cấu trúc `bai21.html`.
> 3. Đi sâu vào giải thuật styling, màu sắc và layout trong `bai21.css`.
> 4. Phân tích giải pháp Responsive thích ứng thiết bị di động qua Media Queries.
> 5. Trực tiếp demo trên trình duyệt, kiểm tra cấu trúc Box Model qua F12 Developer Tools và test case co dãn màn hình.
> 6. Tổng kết kinh nghiệm, các lưu ý thực chiến và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết nền tảng của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & NỀN TẢNG KỸ THUẬT CỐT LÕI (Thời lượng: ~3 phút 30 giây / Mốc: 02:30 - 06:00)

🎬 **Thao tác:**
- Chuyển sang VS Code, cuộn đến phần CSS dàn trang `.than-3-cot` và `.menu-trai`.
- Chỉ con trỏ chuột vào các thuộc tính `display: flex`, `flex: 1`, `flex-shrink: 0`.

🗣️ **Lời đọc:**
> "Trước khi mổ xẻ từng dòng code cụ thể, em xin phép dành ra hơn 3 phút để làm rõ 3 nền tảng lý thuyết sống còn mà bài tập này đã ứng dụng:
> 
> **Thứ nhất: Thẻ HTML5 ngữ nghĩa (Semantic HTML Elements).**
> Trước kỷ nguyên HTML5, các lập trình viên thường dùng thẻ `<div>` vô tội vạ cho mọi vùng trên trang web, dẫn đến hiện tượng 'Div Soup' cực kỳ khó bảo trì và cản trở bot tìm kiếm. Trong bài 21 này, chúng em tuân thủ nghiêm ngặt chuẩn ngữ nghĩa W3C:
> - Sử dụng thẻ `<header>` để định nghĩa phần mở đầu, chứa logo nhận diện và tiêu đề hệ thống.
> - Sử dụng thẻ `<nav>` bao bọc hệ thống liên kết menu điều hướng chính của trang web.
> - Sử dụng thẻ `<main>` để chỉ định duy nhất khối nội dung cốt lõi và quan trọng nhất của tài liệu.
> - Sử dụng thẻ `<aside>` để định nghĩa cột thông tin bên lề, chứa các banner liên kết và quảng cáo.
> Cách phân tách này không chỉ giúp mã nguồn trong sáng mà còn giúp các trình duyệt tối ưu hóa trải nghiệm đọc cho người khiếm thị một cách chuẩn xác.
> 
> **Thứ hai: Mô hình dàn trang Flexbox một chiều (Flexible Box Model).**
> Để chia thân trang web thành 3 cột nằm ngang trên cùng một hàng, kỹ thuật hiện đại và tối ưu nhất chính là Flexbox:
> - Khi ta áp dụng thuộc tính `display: flex` lên phần tử cha `.than-3-cot`, phần tử này lập tức trở thành một **Flex Container**, và toàn bộ các thẻ con trực tiếp bên trong biến thành các **Flex Items**.
> - Mặc định, trục chính (Main Axis) của Flexbox sẽ nằm ngang theo chiều từ trái sang phải (`flex-direction: row`).
> - Để kiểm soát độ co dãn của 3 cột:
>   + Cột menu trái được cố định chiều rộng là `200px` và thiết lập `flex-shrink: 0`. Thuộc tính này cực kỳ quan trọng, nó ra lệnh cho trình duyệt không bao giờ được phép ép nhỏ hoặc làm méo mó cột menu khi màn hình bị thu hẹp.
>   + Tương tự, cột quảng cáo bên phải được định kích thước cố định là `160px` cùng `flex-shrink: 0`.
>   + Còn cột nội dung trung tâm ở giữa mang thuộc tính `flex: 1`. Đây là cú pháp viết tắt của `flex-grow: 1`, mang ý nghĩa là cột giữa sẽ tự động chiếm lĩnh và co dãn toàn bộ phần không gian trống còn lại giữa hai cột bên. Nhờ vậy, trang web luôn đạt trạng thái cân đối hoàn hảo trên mọi độ phân giải màn hình máy tính.
> 
> **Thứ ba: Cơ chế co dãn Responsive với Media Queries.**
> Màn hình di động thông minh có chiều ngang rất hẹp, chỉ từ 320px đến 480px. Nếu ta ép cả 3 cột hiển thị cùng lúc trên một hàng, nội dung sẽ bị bẹp dúm, chữ nhảy dòng lộn xộn và hình ảnh bị tràn ra ngoài.
> Do đó, chúng em thiết lập điểm ngắt kích thước màn hình `max-width: 768px`. Khi chiều rộng cửa sổ nhỏ hơn hoặc bằng 768px, trục chính của Flexbox sẽ đảo chiều từ hàng ngang sang trục đứng bằng câu lệnh `flex-direction: column`. Khi đó, Menu sẽ nằm trên, Nội dung ở giữa và Cột quảng cáo xếp xuống dưới cùng, mang lại trải nghiệm đọc nội dung vô cùng tiện lợi cho người dùng điện thoại."

---

## ⏱️ PHẦN 3: PHÂN TÍCH CHI TIẾT TỪNG DÒNG MÃ NGUỒN HTML (`bai21.html`) (Thời lượng: ~4 phút 30 giây / Mốc: 06:00 - 10:30)

🎬 **Thao tác:**
- Chuyển hẳn tab sang `bai21.html` trong VS Code.
- Bôi đen hoặc dùng chuột trỏ từng phân đoạn code tương ứng với lời đọc: Khối Head, Vùng Banner, Khung Thân 3 Cột, Menu trái, Khung Nội dung giữa và Cột quảng cáo.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng đi vào mổ xẻ chi tiết từng dòng code trong tệp `bai21.html`.
> 
> Toàn bộ tệp HTML có độ dài 63 dòng code được tổ chức ngăn nắp và khoa học:
> 
> - **Dòng 1 đến dòng 8: Khai báo phần đầu trang (`<head>`):**
>   - Dòng 1: Khai báo `<!DOCTYPE html>` định nghĩa tài liệu tuân theo tiêu chuẩn HTML5.
>   - Dòng 2: Thuộc tính `lang="vi"` giúp các trợ lý ảo, công cụ dịch thuật và trình đọc nhận dạng đây là văn bản tiếng Việt.
>   - Dòng 4: `<meta charset="UTF-8">` bảo đảm hiển thị đầy đủ bảng mã tiếng Việt Unicode, tránh mọi nguy cơ vỡ font chữ.
>   - Dòng 5: Thẻ Viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0">` là điều kiện bắt buộc để trang web có thể co dãn thích ứng trên điện thoại thông minh.
>   - Dòng 6: Tiêu đề trang `<title>`: *'Bài 21 - Bố cục trang 4 vùng'*.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai21.css">` liên kết trực tiếp với tệp phong cách CSS tách rời, đảm bảo nguyên tắc phân tách độc lập giữa cấu trúc và giao diện.
> 
> - **Dòng 11: Khung chứa bao bọc toàn trang `<div class="trang-chinh">`:**
>   - Khối bao này giúp gom toàn bộ bố cục vào một khung trang có giới hạn độ rộng nhất định, căn giữa màn hình và tạo bóng đổ thanh lịch.
> 
> - **Dòng 13 đến dòng 16: VÙNG 1 — Khối Banner trên cùng (`<header class="banner-tren">`):**
>   - Chúng em sử dụng thẻ `<header>` chuẩn HTML5.
>   - Bên trong gồm thẻ `<img>` với thuộc tính `src="LogoTT.gif"`, `alt="Logo"` và class `.logo`. Thuộc tính `alt` mô tả văn bản thay thế nếu hình ảnh gặp sự cố kết nối, đây là chuẩn Accessibility rất quan trọng.
>   - Kế bên là thẻ `<span class="chu-banner">` chứa tiêu đề nổi bật: *'Hệ thống bài tập Lập trình Web'*.
> 
> - **Dòng 19: Khung thân chứa 3 cột (`<div class="than-3-cot">`):**
>   - Đây chính là Flex Container trung tâm của toàn bộ trang web, bao bọc 3 khối con kế tiếp:
> 
>   1. **VÙNG 2 — Menu thanh bên trái (`<nav class="menu-trai">` từ dòng 21 đến dòng 26):**
>      - Sử dụng thẻ ngữ nghĩa `<nav>`.
>      - Bên trong chứa 4 liên kết điều hướng `<a>` có class `.muc-menu`:
>        - Mục 1: *Ngôn ngữ HTML* (được gắn thêm class `.active` để làm sáng rõ trạng thái người dùng đang truy cập chuyên mục này).
>        - Mục 2: *Ngôn ngữ JavaScript*.
>        - Mục 3: *Các đối tượng trong JavaScript*.
>        - Mục 4: *CSS và bố cục hiện đại*.
> 
>   2. **VÙNG 3 — Vùng nội dung chính ở giữa (`<main class="noi-dung-giua">` từ dòng 29 đến dòng 47):**
>      - Dòng 30: Tiêu đề chuyên mục bài học `<h3 class="tieu-de-noi-dung">Bài tập HTML cơ bản</h3>`.
>      - Dòng 33 đến dòng 37: Khối menu con màu vàng `<div class="hop-vang">`. Bên trong chứa 3 mục con được nối bằng ký tự thực thể HTML `&bull;` (bullet tròn đen): *'Đảo chuỗi'*, *'Phân tích chuỗi'* và *'Tìm và thay thế'*.
>      - Dòng 40 đến dòng 46: Khung nội dung trắng viền xám `<div class="khung-trang-noi-dung">`.
>        - Dòng 41: Dòng hướng dẫn dẫn nhập `<p class="dong-mo-dau">Thiết kế trang web có nội dung như sau:</p>`.
>        - Dòng 42 đến dòng 45: Khối trung tâm `<div class="noi-dung-trung-tam">` hiển thị thông điệp bài học với dòng tên đơn vị *'Trung Tâm Tin học – ĐH KHTN'* và thông điệp *'Chào mừng các bạn đến với ngôn ngữ HTML'*.
> 
>   3. **VÙNG 4 — Cột quảng cáo bên phải (`<aside class="cot-quang-cao">` từ dòng 50 đến dòng 57):**
>      - Sử dụng thẻ ngữ nghĩa `<aside>`.
>      - Chứa 2 mục quảng cáo dạng thẻ liên kết `<a href="#" class="item-qc">` bọc các hình ảnh `Qcao01.gif` và `Qcao02.gif`, sẵn sàng liên kết đến các khóa học hoặc đối tác liên quan."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS & KỸ THUẬT DÀN TRANG (`bai21.css`) (Thời lượng: ~4 phút 30 giây / Mốc: 10:30 - 15:00)

🎬 **Thao tác:**
- Chuyển sang tệp `bai21.css`.
- Lần lượt bôi đen và phân tích: Khối Reset `*`, `body`, `.trang-chinh`, `.banner-tren`, `.than-3-cot`, `.menu-trai`, `.noi-dung-giua`, `.hop-vang`, `.cot-quang-cao` và khối Media Query `@media (max-width: 768px)`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta sẽ chuyển sang tệp định kiểu dáng giao diện `bai21.css`. Tệp này chịu trách nhiệm biến các thẻ HTML thô thành một bố cục trang web tuyệt đẹp và chuẩn xác từng pixel:
> 
> - **Khối CSS Reset cơ bản từ dòng 5 đến dòng 9:**
>   - Bộ chọn toàn cục `*` áp dụng `box-sizing: border-box; margin: 0; padding: 0;`.
>   - Kỹ thuật này xóa bỏ các khoảng cách mặc định của trình duyệt và khóa cơ chế tính toán hộp Box Model sao cho độ rộng phần tử đã bao gồm cả `padding` và `border`. Điều này ngăn chặn triệt để tình trạng vỡ hàng ngang khi phân chia tỷ lệ cột.
> 
> - **Định dạng thẻ `<body>` và Khung `.trang-chinh` từ dòng 11 đến dòng 22:**
>   - Nền trang web dùng màu xám nhạt dịu mắt `background-color: #f0f2f5;` cùng font chữ không chân hiện đại `font-family: Arial, sans-serif;`.
>   - `.trang-chinh`: Đặt độ rộng tối đa `max-width: 960px;`, căn giữa trang bằng `margin: 0 auto;`. Nền khối dùng màu trắng tinh khiết `#ffffff`, kết hợp cùng hiệu ứng đổ bóng nhẹ `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);` giúp toàn bộ trang web nổi bật như một mặt báo điện tử cao cấp.
> 
> - **VÙNG 1 — Banner trên cùng (`.banner-tren`) từ dòng 25 đến dòng 43:**
>   - Sử dụng gam màu đỏ chủ đạo mạnh mẽ `background-color: #C62828;` và chữ màu trắng tinh `#ffffff`.
>   - Dàn hàng bằng `display: flex; align-items: center; gap: 15px;` giúp logo và dòng chữ tiêu đề tự động căn thẳng hàng chính giữa theo trục dọc với khoảng cách 15px thoáng đãng.
>   - Dòng chữ `.chu-banner` có kích thước 18px in đậm, giãn chữ nhẹ `letter-spacing: 0.5px;` tạo vẻ sang trọng.
> 
> - **Khung thân và VÙNG 2 — Menu trái (`.than-3-cot`, `.menu-trai`) từ dòng 46 đến dòng 72:**
>   - `.than-3-cot`: Kích hoạt `display: flex;` và đặt chiều cao tối thiểu `min-height: 460px;`. Nhờ cơ chế tự kéo dãn mặc định `align-items: stretch` của Flexbox, cả 3 cột bên trong sẽ tự động cao bằng nhau dù nội dung cột dài hay ngắn!
>   - `.menu-trai`: Cột rộng `width: 200px; flex-shrink: 0;`. Điểm nhấn thẩm mỹ tại đây là dải chuyển màu mượt `background: linear-gradient(180deg, #C62828 0%, #8E0000 100%);` từ đỏ tươi sang đỏ bordeaux sẫm.
>   - Các mục `.muc-menu` được đổi sang `display: block;` với đường kẻ phân cách mờ `border-bottom: 1px solid rgba(255, 255, 255, 0.15);`.
>   - Khi người dùng rê chuột (`:hover`) hoặc mục đang chọn (`.active`), nền sẽ chuyển sang màu tối mờ `rgba(0, 0, 0, 0.2)` và chữ in đậm, tạo cảm giác phản hồi thao tác rất nhạy bén.
> 
> - **VÙNG 3 — Nội dung chính giữa (`.noi-dung-giua`) từ dòng 75 đến dòng 130:**
>   - Mang thuộc tính `flex: 1; padding: 20px 25px;` giúp vùng nội dung co giãn linh hoạt và có không gian đọc rộng rãi.
>   - Khối `.hop-vang`: Dùng nền màu vàng tươi sáng `#FFE082`, bo góc tròn 6px, hiển thị hàng ngang với `display: flex; gap: 15px;`. Đây là chi tiết mô phỏng chính xác mẫu đề bài gốc.
>   - Khung `.khung-trang-noi-dung`: Viền xám mỏng `#e0e0e0`, bo góc 6px, phần chữ trung tâm được căn giữa `text-align: center; line-height: 1.8;` với dòng tên trung tâm in đậm `#1f2937`.
> 
> - **VÙNG 4 — Cột quảng cáo (`.cot-quang-cao`) từ dòng 133 đến dòng 154:**
>   - Rộng cố định `width: 160px; flex-shrink: 0;`.
>   - Bố trí theo chiều dọc với `display: flex; flex-direction: column; gap: 12px;`.
>   - Mỗi ô quảng cáo `.item-qc` có viền bo tròn và ảnh quảng cáo co dãn 100% chiều rộng để vừa khít hoàn hảo.
> 
> - **Xử lý Responsive thích ứng thông minh từ dòng 157 đến dòng 168:**
>   - Cú pháp `@media (max-width: 768px)` bắt mốc màn hình máy tính bảng và điện thoại:
>     + Đổi `.than-3-cot` sang `flex-direction: column;`.
>     + Đặt lại độ rộng `.menu-trai, .cot-quang-cao` thành `100%;`.
>     + Cột quảng cáo đổi sang `flex-direction: row; justify-content: center;` để 2 ảnh quảng cáo nằm ngang cạnh nhau gọn gàng bên dưới nội dung chính, tránh chiếm chiều dài cuộn trang của người dùng."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI KIỂM TRA BẰNG F12 DEVTOOLS (Thời lượng: ~3 phút 30 giây / Mốc: 15:00 - 18:30)

🎬 **Thao tác:**
- Phóng to cửa sổ Chrome hiển thị `bai21.html`.
- Rê chuột kiểm tra các hiệu ứng Hover trên menu trái và các banner quảng cáo.
- Nhấn phím `F12` mở Chrome DevTools.
- Chọn tab **Console**, sau đó chọn tab **Elements**, bấm phím tắt `Ctrl + Shift + M` để bật **Device Toolbar** và kéo thanh trượt từ Desktop (1200px) xuống Tablet (768px) rồi Mobile (375px).

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn bước vào phần kiểm chứng kết quả chạy thực tế của trang web trên trình duyệt Google Chrome:
> 
> 1. **Kiểm tra trạng thái hiển thị chuẩn trên màn hình máy tính (Desktop):**
>    - Nhìn tổng thể, trang web được căn giữa màn hình với bóng đổ trang nhã, phân chia rõ rệt 4 vùng chức năng:
>      + Phía trên là Banner đỏ rực rỡ với logo và tên hệ thống.
>      + Bên trái là menu điều hướng đỏ gradient sắc nét, khi em rê chuột qua từng mục, hiệu ứng nền đổi màu tối mờ và chữ in đậm phản hồi tức thì.
>      + Ở giữa là nội dung bài tập với tiêu đề đỏ, thanh menu con màu vàng nổi bật và khung nội dung viền xám thẳng hàng tăm tắp.
>      + Bên phải là hai poster quảng cáo hiển thị ngay ngắn, vừa vặn trong cột 160px.
>    - Đặc biệt, cả 3 cột bên dưới banner đều có chiều cao bằng nhau tuyệt đối, không có tình trạng cột thò ra cột thụt vào.
> 
> 2. **Kiểm tra Tab Console trong F12 Developer Tools:**
>    - *[Thao tác: Bấm F12, mở tab Console]*
>    - Màn hình Console hoàn toàn sạch sẽ, không hề có bất kỳ lỗi JavaScript, không có cảnh báo tài nguyên 404 hay cảnh báo kiểu dáng nào. Điều này chứng minh các file hình ảnh và tệp stylesheet đã được liên kết chính xác tuyệt đối.
> 
> 3. **Soi cấu trúc Box Model trong Tab Elements:**
>    - *[Thao tác: Trỏ chuột vào thẻ `<div class="than-3-cot">` và `<main class="noi-dung-giua">`]*
>    - Khi nhìn vào sơ đồ Box Model bên dưới: Vùng Content hiển thị rõ kích thước tính toán, lớp Padding được phân bổ đồng đều màu xanh lá, không phát sinh bất kỳ margin thừa ngoài ý muốn nào.
> 
> 4. **Kiểm tra tính năng Responsive thích ứng thiết bị di động:**
>    - *[Thao tác: Bấm tổ hợp phím `Ctrl + Shift + M` để kích hoạt Toggle Device Toolbar]*
>    - Em đang để ở độ phân giải máy tính 1024px. Bây giờ em từ từ kéo thanh trượt thu nhỏ chiều ngang cửa sổ lại.
>    - Ngay khi màn hình chạm mốc `768px`, phép màu của Media Query lập tức kích hoạt:
>      + Toàn bộ bố cục 3 cột lập tức gập lại mượt mà thành một cột thẳng đứng duy nhất.
>      + Menu thanh bên dàn đều 100% chiều rộng ở phía trên, các nút bấm to bản giúp người dùng dễ dàng chạm ngón tay vào.
>      + Vùng nội dung nằm ở giữa đọc rất thoải mái, không cần phóng to thu nhỏ.
>      + Cột quảng cáo di chuyển xuống đáy và tự động xếp thành hàng ngang 2 ảnh song song cân đối.
>    - Khi em chọn thử kích thước **iPhone 12/14 Pro** (chiều rộng 390px) hay **Samsung Galaxy S20 Ultra**, không hề xuất hiện thanh cuộn ngang gây lỗi giao diện. Đây là một kết quả kiểm thử hoàn hảo!"

---

## ⏱️ PHẦN 6: TỔNG KẾT BÀI HỌC KINH NGHIỆM & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây / Mốc: 18:30 - 20:00)

🎬 **Thao tác:**
- Tắt DevTools, chuyển camera hoặc cửa sổ về giao diện trang web toàn màn hình để kết thúc video một cách chuyên nghiệp.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, qua quá trình nghiên cứu, triển khai và hoàn thiện Bài tập số 21, bản thân em đã gặt hái được những bài học kinh nghiệm thực tiễn rất giá trị:
> - Thứ nhất: Hiểu sâu sắc triết lý của HTML5 Semantic và biết cách áp dụng đúng ngữ cảnh các thẻ `<header>`, `<nav>`, `<main>`, `<aside>` để tạo nên một bộ khung tài liệu chuẩn mực.
> - Thứ hai: Làm chủ hoàn toàn mô hình dàn trang CSS Flexbox, nắm vững các thuộc tính cốt lõi như `flex: 1`, `flex-shrink: 0`, `align-items: stretch` để xử lý bài toán đa cột một cách tinh gọn mà không bao giờ cần dùng đến các thủ thuật float phức tạp.
> - Thứ ba: Nâng cao năng lực tư duy giao diện thích ứng (Responsive Design) với Media Queries, bảo đảm sản phẩm luôn hiển thị tối ưu từ màn hình máy tính lớn đến màn hình điện thoại cầm tay.
> 
> Video thuyết minh báo cáo Bài thực hành số 21 của em đến đây xin phép được kết thúc.
> 
> Em xin gửi lời cảm ơn chân thành và sâu sắc nhất đến quý thầy cô bộ môn Phát triển ứng dụng Web cơ bản đã luôn nhiệt tình truyền dạy kiến thức và định hướng cho chúng em. Cảm ơn các bạn sinh viên đã dành thời gian theo dõi trọn vẹn video này.
> 
> Kính chúc thầy cô dồi dào sức khỏe và công tác tốt! Chúc các bạn học tập hiệu quả và luôn giữ vững niềm đam mê với lập trình web!
> Em xin trân trọng cảm ơn!"

---
*Hết kịch bản chi tiết Bài 21 — Mã nguồn và cấu trúc chuẩn mực cho việc quay video OBS Studio.*
