# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 11: THƯ VIỆN ẢNH VIỆT NAM — THẺ NGỮ NGHĨA FIGURE, FIGCAPTION VÀ BỐ CỤC LƯỚI CSS GRID

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (`Windows + Phím mũi tên trái` cho Visual Studio Code; `Windows + Phím mũi tên phải` cho trình duyệt Chrome).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn khi thu âm. Hãy đọc với ngữ điệu tự tin, nhả chữ rõ ràng, truyền cảm, giữ tốc độ nói vừa phải (khoảng 120 – 140 từ/phút) để đạt đúng thời lượng 16 - 20 phút.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển đổi cửa sổ, phóng to code (`Ctrl + +`), soi F12 để video trực quan, chuyên nghiệp.
   - ⏱️ **Thời gian:** Mốc thời gian tích lũy để bạn kiểm soát tiến độ nói trên đồng hồ OBS.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 – 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình 1080p, bật webcam góc dưới nếu có.
- Màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai11.html` và `bai11.css`.
- Tab Chrome bên cạnh hiển thị giao diện Thư viện ảnh 6 danh lam thắng cảnh Việt Nam trên nền Dark Mode sang trọng.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản, cùng toàn thể các bạn sinh viên đang theo dõi video thuyết minh thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được thực hiện video này nhằm báo cáo và thuyết minh chuyên sâu về quá trình xây dựng sản phẩm **Bài thực hành số 11: Thiết kế thư viện ảnh danh lam thắng cảnh Việt Nam ứng dụng thẻ ngữ nghĩa HTML5 và bố cục CSS Grid hiện đại**.
> 
> Trong hành trình phát triển của công nghệ Web, chúng ta đã chứng kiến sự chuyển dịch mạnh mẽ từ những website sử dụng thẻ bảng `<table>` hay kỹ thuật trôi nổi `float` đầy hạn chế sang kỷ nguyên của chuẩn HTML5 ngữ nghĩa và hệ thống bố cục hai chiều CSS Grid. Một trang web chất lượng cao ngày nay không chỉ dừng lại ở giao diện bắt mắt, mà còn phải đáp ứng các tiêu chuẩn khắt khe về cấu trúc mã nguồn:
> 
> - Thứ nhất là tính ngữ nghĩa (Semantic Web): Mã nguồn phải rõ ràng để các công cụ tìm kiếm của Google, Bing có thể lập chỉ mục SEO tối ưu, đồng thời hỗ trợ các trình đọc màn hình (Screen Readers) cho người khiếm thị một cách hoàn hảo.
> - Thứ hai là tính tổ chức mỹ thuật: Xây dựng một thư viện ảnh cân đối với giao diện nền tối thời thượng (Modern Dark UI), làm nổi bật vẻ đẹp rực rỡ của 6 danh lam thắng cảnh tiêu biểu của đất nước: Vịnh Hạ Long, Hang Sơn Đoòng, Thác Bản Giốc, Đỉnh Fansipan, Đồng bằng sông Cửu Long và Động Phong Nha.
> - Thứ ba là kỹ thuật bố cục tiên tiến CSS Grid: Sử dụng hệ tọa độ lưới để dàn trang 3 cột đồng đều tuyệt đối mà không cần tính toán phần trăm margin thủ công.
> - Thứ tư là khả năng tương thích đa thiết bị (Responsive Web Design): Trang web tự động co dãn linh hoạt, chuyển đổi mượt mà từ 3 cột trên máy tính để bàn sang 2 cột trên máy tính bảng, và 1 cột duy nhất trên màn hình điện thoại thông minh.
> 
> Để mang đến một góc nhìn toàn diện và có chiều sâu học thuật, kịch bản thuyết minh hôm nay của em sẽ được triển khai qua 6 phần cụ thể:
> 1. Phân tích nền tảng lý thuyết cốt lõi về thẻ ngữ nghĩa và hệ thống CSS Grid.
> 2. Mổ xẻ chi tiết từng dòng mã trong tệp tin cấu trúc `bai11.html`.
> 3. Phân tích chuyên sâu bảng kiểu dáng `bai11.css`, tư duy phối màu Dark Theme và hiệu ứng chuyển động Micro-interaction.
> 4. Nhận định về vai trò của JavaScript và lý do tối ưu hiệu năng với giải pháp thuần CSS.
> 5. Thực hành demo tương tác trực tiếp trên trình duyệt, soi F12 Elements, phân tích Grid Inspector, Box Model và kiểm thử Responsive.
> 6. Tổng kết bài học kinh nghiệm, các bẫy lỗi thường gặp và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép được bắt đầu đi vào nội dung chi tiết của phần lý thuyết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 – 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Rê chuột trên VS Code, mở nhanh file ghi chú hoặc trỏ chuột vào các khối thẻ `<figure>`, `<figcaption>` trong `bai11.html` và thuộc tính `display: grid` trong `bai11.css`.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng mã cụ thể, em xin phép trình bày 4 trụ cột lý thuyết cốt lõi làm kim chỉ nam cho bài tập này:
> 
> **Trụ cột thứ nhất: Thẻ ngữ nghĩa `<figure>` và `<figcaption>` trong chuẩn HTML5.**
> Trước khi HTML5 ra đời, khi muốn chèn một bức ảnh kèm dòng chú thích bên dưới, các lập trình viên thường dùng một thẻ `<div>` bọc thẻ `<img>` và một thẻ `<p>` hoặc `<span>` chứa chữ. Tuy nhiên, cách làm đó hoàn toàn vô nghĩa về mặt ngữ nghĩa (non-semantic), trình duyệt không thể hiểu được mối quan hệ gắn kết mật thiết giữa bức ảnh và dòng chữ chú thích đó.
> 
> Chuẩn HTML5 đã giải quyết triệt để vấn đề này bằng việc giới thiệu cặp thẻ:
> - Thẻ `<figure>`: Đại diện cho một đơn vị nội dung trực quan độc lập, có thể là hình ảnh, sơ đồ minh họa, biểu đồ hoặc đoạn mã code trích dẫn. Nếu chúng ta di chuyển khối `<figure>` này sang một vị trí khác trong tài liệu hoặc đưa vào phần phụ lục, luồng nội dung chính của trang web vẫn hoàn toàn mạch lạc và không bị mất ý nghĩa.
> - Thẻ `<figcaption>`: Là thẻ con trực tiếp nằm bên trong `<figure>`, có nhiệm vụ cung cấp lời chú thích, tiêu đề giải nghĩa chính thức cho nội dung trực quan đó. Sự kết hợp này giúp các bot tìm kiếm hình ảnh và các thiết bị trợ thính nhận diện chính xác 100% ngữ cảnh của bức ảnh.
> 
> **Trụ cột thứ hai: Tư duy bố cục mạng lưới hai chiều CSS Grid.**
> Nếu như Flexbox là hệ thống bố cục một chiều (One-dimensional) tối ưu cho việc sắp xếp các phần tử theo một hàng ngang hoặc một cột dọc, thì **CSS Grid** lại là hệ thống bố cục hai chiều (Two-dimensional) mạnh mẽ bậc nhất của CSS.
> Grid cho phép chúng ta chia không gian trang web thành các hàng (Rows) và cột (Columns) đồng thời:
> - Khái niệm phân số linh hoạt `fr` (Fractional Unit): Đại diện cho một phần không gian còn trống trong container. Cú pháp `repeat(3, 1fr)` là một phát kiến vĩ đại, nó chia container thành 3 cột có độ rộng bằng nhau tuyệt đối, tự động tính toán lại khi kích thước khung nhìn thay đổi.
> - Thuộc tính khoảng cách `gap`: Trước đây, để tạo khoảng cách giữa các khối, chúng ta phải dùng `margin-right` cho các khối và dùng pseudo-class `:last-child` hoặc `:nth-child(3n)` để trừ lùi margin rất phức tạp. Với CSS Grid, thuộc tính `gap: 18px` giải quyết trọn vẹn khoảng cách giữa các hàng và các cột mà không hề sinh ra bất kỳ khoảng trắng thừa thãi nào ở các cạnh biên.
> 
> **Trụ cột thứ ba: Cơ chế co dãn hình ảnh `object-fit: cover`.**
> Trong các ứng dụng web thực tế, người dùng hoặc quản trị viên có thể tải lên các bức ảnh với tỉ lệ kích thước (Aspect Ratio) rất khác nhau: ảnh vuông, ảnh chữ nhật nằm ngang, ảnh chân dung dọc. Nếu chúng ta chỉ ép buộc ảnh bằng `width: 100%; height: 190px;`, ảnh sẽ lập tức bị méo mó, biến dạng tỉ lệ rất mất thẩm mỹ. Thuộc tính `object-fit: cover` cho phép bức ảnh vừa khít với kích thước khung chứa cố định, giữ nguyên vẹn tỉ lệ nguyên bản và tự động cắt xén (crop) phần dư thừa ở tâm ảnh một cách hoàn hảo.
> 
> **Trụ cột thứ tư: Tư duy thiết kế giao diện Dark Mode (Dark Palette UX).**
> Thay vì sử dụng màu đen thuần `#000000` gây độ tương phản gắt gao làm mỏi mắt người xem, em áp dụng bảng màu Dark Slate chuẩn công nghiệp của Tailwind CSS: màu nền chính `#0f172a` (Slate 900), màu thẻ card `#1e293b` (Slate 800), và màu chữ `#e2e8f0` (Slate 200). Cách phối màu này tạo nên chiều sâu không gian đa tầng, giúp người dùng tập trung thị giác tối đa vào các gam màu rực rỡ của cảnh quan thiên nhiên."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai11.html`) (06:00 – 10:30 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển hẳn con trỏ sang tệp `bai11.html`.
- Phóng to cỡ chữ trong VS Code (`Ctrl + +`), bôi đen từng khối thẻ theo mạch trình bày: phần Head, Header, Main và từng cặp thẻ Figure.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi sâu mổ xẻ chi tiết từng dòng mã cấu trúc trong tệp tin `bai11.html`.
> 
> Toàn bộ tệp tin được xây dựng gói gọn trong 54 dòng mã chuẩn chỉ, sạch sẽ, tuân thủ nghiêm ngặt chuẩn W3C:
> 
> - **Từ dòng 1 đến dòng 8 là phần khai báo tài liệu Tiêu chuẩn (`<head>`):**
>   - Dòng 1: `<!DOCTYPE html>` thông báo cho trình duyệt biết tài liệu này được biên soạn theo chuẩn HTML5 mới nhất, giúp trình duyệt kích hoạt chế độ dựng hình chuẩn (Standard Mode), tránh rơi vào chế độ lỗi thời (Quirks Mode).
>   - Dòng 2: `<html lang="vi">` khai báo ngôn ngữ quốc tế của nội dung trang web là tiếng Việt. Thuộc tính này cực kỳ quan trọng cho các công cụ dịch tự động và trình đọc màn hình phát âm đúng thanh điệu tiếng Việt.
>   - Dòng 4: `<meta charset="UTF-8">` thiết lập bảng mã ký tự Unicode đa ngôn ngữ, bảo đảm mọi ký tự tiếng Việt có dấu như 'Hạ Long', 'Sơn Đoòng', 'Cửu Long' hiển thị sắc nét, không bị lỗi font hay ký tự lạ.
>   - Dòng 5: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Đây là thẻ meta sinh mệnh của thiết kế Web đáp ứng. Nó yêu cầu trình duyệt di động đặt chiều rộng khung nhìn (viewport) bằng đúng chiều rộng vật lý của thiết bị (`width=device-width`) và thiết lập tỉ lệ thu phóng ban đầu là 100% (`initial-scale=1.0`), loại bỏ triệt để hiện tượng trang web bị thu nhỏ xíu như tờ báo in khi xem trên điện thoại.
>   - Dòng 6: `<title>` đặt tiêu đề thẻ trình duyệt: *'Bài 11 - Thư viện ảnh (figure / figcaption)'*.
>   - Dòng 7: `<link rel="stylesheet" href="bai11.css">` liên kết đến tệp định kiểu ngoại tuyến, tuân thủ nguyên lý tách biệt hoàn toàn giữa cấu trúc (Structure) và giao diện (Presentation).
> 
> - **Tiếp tục đi vào phần `<body>` từ dòng 9 đến dòng 52:**
>   - Dòng 11: Toàn bộ bố cục trang được bao bọc trong khối `<div class="khung-thu-vien">`. Khối này đóng vai trò là một container trung tâm, giúp quy định giới hạn độ rộng tối đa và căn giữa trang web trên các màn hình có độ phân giải lớn như Full HD hay 4K.
> 
>   - **Khu vực 1: Khối đầu trang ngữ nghĩa (`<header class="dau-thu-vien">` từ dòng 13 đến 16):**
>     - Em sử dụng thẻ ngữ nghĩa `<header>` thay vì một thẻ `<div>` vô danh để báo hiệu đây là phần mở đầu của trang.
>     - Dòng 14: Thẻ tiêu đề cấp 1 `<h1 class="tieu-de-thu-vien">` chứa dòng chữ: *'Thư viện ảnh Việt Nam'*. Trong một trang web chuẩn SEO, mỗi trang chỉ nên có duy nhất một thẻ `<h1>` đại diện cho chủ đề cốt lõi nhất.
>     - Dòng 15: Đoạn văn `<p class="mo-ta-thu-vien">` đóng vai trò là dòng phụ đề (Subtitle) thuyết minh: *'Bộ sưu tập 6 danh thắng tiêu biểu — minh hoạ thẻ figure / figcaption.'*.
> 
>   - **Khu vực 2: Khu vực nội dung trọng tâm (`<main class="luoi-anh">` từ dòng 19 đến dòng 49):**
>     - Thẻ ngữ nghĩa `<main>` bao bọc toàn bộ nội dung độc nhất và quan trọng nhất của trang.
>     - Bên trong thẻ `<main>` là 6 khối danh lam thắng cảnh được cấu tạo đồng nhất bởi cặp thẻ `<figure>` và `<figcaption>`:
>       - Khối 1 (Dòng 20 - 23): Vịnh Hạ Long — Kỳ quan thiên nhiên thế giới tại Quảng Ninh. Thẻ `<img>` nạp file `1-vinh-ha-long.jpg` kèm thuộc tính `alt="Vịnh Hạ Long"`. Thẻ `<figcaption>` chú thích: *'Hình 1. Vịnh Hạ Long'*. Thuộc tính `alt` (Alternative Text) là bắt buộc trong chuẩn HTML, giúp mô tả bức ảnh nếu mạng bị chập chờn không tải được ảnh, và là mắt thần cho người khiếm thị đọc nội dung.
>       - Khối 2 (Dòng 25 - 28): Hang Sơn Đoòng (`2-son-doong.jpg`) — Hang động tự nhiên lớn nhất hành tinh tại Quảng Bình, chú thích *'Hình 2. Hang Sơn Đoòng'*.
>       - Khối 3 (Dòng 30 - 33): Thác Bản Giốc (`3-thac-ban-gioc.jpg`) — Thác nước tự nhiên hùng vĩ tại Cao Bằng, chú thích *'Hình 3. Thác Bản Giốc'*.
>       - Khối 4 (Dòng 35 - 38): Đỉnh Fansipan (`4-fansipan.jpg`) — Nóc nhà Đông Dương tại Sa Pa, Lào Cai, chú thích *'Hình 4. Fansipan'*.
>       - Khối 5 (Dòng 40 - 43): Đồng bằng sông Cửu Long (`5-mekong.jpg`) — Vùng sông nước miệt vườn trù phú phương Nam, chú thích *'Hình 5. Đồng bằng sông Cửu Long'*.
>       - Khối 6 (Dòng 45 - 48): Động Phong Nha (`6-phong-nha.jpg`) — Di sản thiên nhiên thế giới với hệ thống thạch nhũ tráng lệ, chú thích *'Hình 6. Động Phong Nha'*.
> 
> Nhìn vào cấu trúc này, chúng ta thấy một cây DOM phân cấp vô cùng trong sáng, rành mạch, không hề bị lạm dụng các thẻ `<div>` lồng nhau (Div soup), đáp ứng trọn vẹn tiêu chuẩn vàng của thiết kế web hiện đại."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai11.css`) (10:30 – 14:30 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai11.css`.
- Bôi đen quy tắc Reset `*`, phân tích thuộc tính `box-sizing: border-box`.
- Bôi đen `.luoi-anh`, trỏ chuột vào `display: grid`, `repeat(3, 1fr)`, `gap: 18px`.
- Bôi đen `.the-anh:hover`, giải thích `transform: translateY(-4px)` và hiệu ứng đổ bóng.
- Cuộn xuống 2 truy vấn `@media` ở cuối tệp.

🗣️ **Lời đọc:**
> "Tiếp tục chương trình, em xin chuyển sang phân tích tệp định kiểu `bai11.css` gồm 94 dòng lệnh — nơi hiện thực hóa toàn bộ vẻ đẹp mỹ thuật, bố cục không gian và các hiệu ứng chuyển động vi mô của thư viện:
> 
> - **Quy tắc CSS Reset toàn cục (Dòng 6 đến dòng 10):**
>   - Chúng em sử dụng bộ chọn dấu sao `*` với 3 thuộc tính nền móng: `box-sizing: border-box; margin: 0; padding: 0;`.
>   - Tại sao `box-sizing: border-box` lại quan trọng đến vậy? Trong mô hình hộp mặc định (`content-box`), nếu một phần tử có bề rộng 300px, khi chúng ta thêm padding 20px và viền 2px, kích thước thực tế sẽ bị phình to lên thành 344px, làm vỡ nát hệ thống lưới. Khi đặt `border-box`, trình duyệt sẽ tự động trừ phần padding và border vào bên trong, bảo đảm kích thước tổng thể luôn cố định chính xác 100%.
>   - Đặt `margin: 0; padding: 0;` giúp triệt tiêu các khoảng lề vô hình mà mỗi trình duyệt tự ý gán cho thẻ `body`, `h1`, `figure`.
> 
> - **Định dạng thẻ `<body>` (Dòng 12 đến dòng 18):**
>   - `background-color: #0f172a;`: Màu nền tối xanh than sâu thẳm.
>   - `color: #e2e8f0;`: Màu chữ trắng xám nhã nhặn, đạt tỉ lệ tương phản màu (Contrast Ratio) trên 12:1, vượt xa tiêu chuẩn WCAG AAA về khả năng tiếp cận thị giác.
>   - `font-family: Arial, sans-serif;`: Họ font chữ không chân hiện đại, sạch sẽ và sắc nét trên mọi màn hình máy tính.
>   - `padding: 40px 20px;`: Tạo khoảng thở thông thoáng cho nội dung so với 4 cạnh viền trình duyệt.
> 
> - **Container trung tâm `.khung-thu-vien` (Dòng 21 đến 24):**
>   - `max-width: 960px;`: Giới hạn độ rộng hoàn hảo cho mắt người quan sát 3 cột ảnh mà không phải đảo mắt quá rộng.
>   - `margin: 0 auto;`: Kỹ thuật kinh điển để tự động tính toán hai khoảng lề trái phải bằng nhau, căn khối thư viện vào chính giữa tâm màn hình.
> 
> - **Khu vực tiêu đề trang `.dau-thu-vien` (Dòng 27 đến 42):**
>   - `text-align: center;`: Căn toàn bộ tiêu đề và phụ đề ra chính giữa.
>   - `.tieu-de-thu-vien`: Font kích thước 28px in đậm mạnh mẽ, khoảng cách dưới 8px.
>   - `.mo-ta-thu-vien`: Chữ màu xám tro dịu nhẹ `#94a3b8`, kích thước 14px, phân tầng thị giác rõ ràng giữa thông tin chính và thông tin phụ.
> 
> - **Trọng tâm bố cục: Lưới ảnh `.luoi-anh` (Dòng 45 đến 49):**
>   - `display: grid;`: Kích hoạt ngữ cảnh định dạng dạng lưới (Grid Formatting Context).
>   - `grid-template-columns: repeat(3, 1fr);`: Đây là dòng lệnh đắt giá nhất của bài tập. Hàm `repeat(3, 1fr)` tương đương với việc viết `1fr 1fr 1fr`, chỉ định rõ ràng lưới sẽ gồm đúng 3 cột bằng nhau tuyệt đối, mỗi cột chiếm 1 phần phân số đồng đều của chiều rộng container.
>   - `gap: 18px;`: Thiết lập khoảng cách đồng đều 18 pixel giữa các cột và giữa các hàng.
> 
> - **Tạo hình thẻ card ảnh `.the-anh` và hiệu ứng Hover (Dòng 52 đến 63):**
>   - Mỗi thẻ `<figure>` được xem như một chiếc thẻ card thông tin: nền màu `#1e293b`, bo tròn 4 góc mềm mại với `border-radius: 8px`.
>   - `overflow: hidden;`: Thuộc tính này là một chốt chặn bắt buộc! Khi ảnh con bên trong phóng to hoặc có các góc vuông nhọn, `overflow: hidden` sẽ cắt ngọt phần ảnh thừa theo đúng đường cong viền bo tròn 8px của thẻ cha.
>   - `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);`: Đổ bóng mờ nhẹ phía dưới, tạo cảm giác card nổi trên mặt nền.
>   - `transition: transform 0.25s ease, box-shadow 0.25s ease;`: Khai báo hiệu ứng chuyển động mượt mà kéo dài 0.25 giây theo hàm gia tốc tự nhiên `ease`.
>   - Khi người dùng rê chuột vào card (`.the-anh:hover`):
>     - `transform: translateY(-4px);`: Nhấc bổng chiếc thẻ card lên 4 pixel theo trục tung thẳng đứng.
>     - `box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);`: Tăng độ sâu và độ đậm của bóng đổ.
>     - Sự kết hợp này tạo ra một hiệu ứng thị giác 3D sống động (Elevation effect), phản hồi xúc giác thị giác tức thì cho người dùng biết thẻ này có thể tương tác.
> 
> - **Tối ưu hình ảnh `.the-anh img` và chú thích `figcaption` (Dòng 66 đến 80):**
>   - `width: 100%; height: 190px;`: Cố định chiều cao đồng nhất cho toàn bộ 6 bức ảnh, bảo đảm không có bức ảnh nào bị lệch hàng hay thụt thò.
>   - `object-fit: cover;`: Thuộc tính ma thuật giúp bức ảnh tự động bao phủ trọn vẹn khung chữ nhật 190px mà giữ nguyên tỉ lệ nguyên bản của cảnh quan, không bao giờ bị méo mó hình dạng.
>   - `display: block;`: Khử bỏ khoảng hở trắng vô hình 3 pixel bên dưới ảnh vốn sinh ra do đặc tính inline mặc định của thẻ `<img>`.
>   - `.the-anh figcaption`: Đệm bên trong `padding: 12px 14px;`, chữ màu xám bạc `#cbd5e1`, font chữ dày vừa `font-weight: 500;`.
> 
> - **Thiết kế thích ứng Responsive đa màn hình (Dòng 83 đến 93):**
>   - Breakpoint thứ nhất `@media (max-width: 768px)`: Khi người dùng xem trên máy tính bảng iPad hoặc xoay ngang điện thoại, không gian không còn đủ cho 3 cột. Lưới sẽ tự động tái cấu trúc thành 2 cột đều nhau với `grid-template-columns: repeat(2, 1fr);`.
>   - Breakpoint thứ hai `@media (max-width: 480px)`: Khi xem trên các dòng smartphone cầm dọc, lưới ảnh chuyển đổi linh hoạt thành 1 cột duy nhất với `grid-template-columns: 1fr;`. Các bức ảnh sẽ trải dài toàn bộ bề ngang màn hình điện thoại, mang lại trải nghiệm cuộn lướt xem ảnh vô cùng tự nhiên và thoải mái."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (14:30 – 18:30 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai11.html`.
- Rê chuột qua từng bức ảnh để người xem thấy rõ hiệu ứng Hover nhấc thẻ card và bóng đổ.
- Bấm phím `F12` mở Chrome DevTools.
- Bật tab **Elements**, bấm huy hiệu **grid** trên thẻ `<main class="luoi-anh">` để hiện đường kẻ lưới màu tím.
- Nhấn tổ hợp phím `Ctrl + Shift + M` để bật **Device Toolbar**, kéo thanh trượt từ Desktop (1200px) xuống Tablet (768px) rồi Phone (375px).

🗣️ **Lời đọc:**
> "Và ngay bây giờ, em xin kính mời quý thầy cô và các bạn cùng chứng kiến kết quả hiển thị thực tế của bài tập trên trình duyệt web Google Chrome:
> 
> **1. Kiểm tra mỹ thuật và tương tác Hover trên giao diện máy tính để bàn (Desktop):**
> - Trước mắt chúng ta là một không gian triển lãm ảnh số tuyệt đẹp. Nền tối xanh than làm tôn lên vẻ xanh ngọc bích của nước biển Vịnh Hạ Long, vẻ kỳ bí của lòng hang Sơn Đoòng, và sắc mây trắng trên đỉnh Fansipan.
> - Bố cục 6 danh lam thắng cảnh được dàn thành 2 hàng, mỗi hàng đúng 3 cột bằng nhau chằn chặn.
> - Bây giờ, em rê chuột vào từng thẻ card ảnh:
>   - *[Thao tác rê chuột vào card Vịnh Hạ Long, Sơn Đoòng, Thác Bản Giốc]*
>   - Thầy cô và các bạn có thể thấy, chiếc thẻ card lập tức nổi nhẹ lên trên 4px một cách vô cùng êm ái, bóng đổ phía dưới lan rộng và đậm dần. Khi em đưa chuột ra ngoài, card nhẹ nhàng hạ cánh về vị trí ban đầu. Hiệu ứng vi chuyển động này không gây giật lag nhờ khả năng tăng tốc phần cứng của thuộc tính `transform`.
> 
> **2. Bật F12 Developer Tools và soi kiểm tra chuyên sâu CSS Grid:**
> - Bây giờ em bấm phím **F12** để mở công cụ dành cho lập trình viên.
> - Chuyển sang tab **Console**: Thầy cô có thể thấy màn hình console hoàn toàn sạch sẽ, không có bất kỳ dòng cảnh báo (Warning) hay thông báo lỗi 404 thiếu tệp tin nào.
> - Chuyển sang tab **Elements**: Em trỏ chuột vào thẻ `<main class="luoi-anh">`.
>   - Trình duyệt Chrome nhận diện ngay đây là một Grid Container và hiển thị một huy hiệu nhỏ có chữ **grid**.
>   - Khi em nhấp chuột vào huy hiệu này, Chrome DevTools sẽ vẽ trực quan toàn bộ hệ thống đường kẻ lưới (Grid lines) và các ô rãnh (Grid tracks) bằng các đường viền nét đứt màu tím dạ quang.
>   - Chúng ta thấy rõ ràng 3 cột bằng nhau tuyệt đối với tỉ lệ `1fr - 1fr - 1fr`, và khoảng đệm `gap: 18px` được thể hiện bằng các dải vân sọc chéo màu xám nhạt, chứng minh trình duyệt đã tính toán bố cục lưới hoàn hảo từng pixel.
> - Nhìn sang tab **Styles** và khung **Box Model**:
>   - Rê chuột vào `.the-anh`: Box model hiển thị đúng kích thước nội dung, phần viền bo góc, không hề có margin thừa thãi.
> 
> **3. Kiểm thử khả năng đáp ứng Responsive trên thiết bị di động:**
> - Em nhấn tổ hợp phím tắt `Ctrl + Shift + M` để kích hoạt thanh công cụ mô phỏng thiết bị di động (**Device Mode**).
> - Đầu tiên, em chọn thiết bị mô phỏng là **iPad Mini** với chiều rộng màn hình là 768px:
>   - Lập tức, truy vấn `@media (max-width: 768px)` được kích hoạt. Lưới 3 cột tự động tái cấu trúc thành **2 cột** lớn, mỗi cột chứa 3 danh lam thắng cảnh rất cân đối và rộng rãi.
> - Tiếp theo, em chuyển sang màn hình điện thoại **iPhone 12 Pro** với bề rộng 390px:
>   - Ngay tức khắc, truy vấn `@media (max-width: 480px)` can thiệp. Toàn bộ lưới co gọn thành **1 cột duy nhất**. Mỗi bức ảnh cùng dòng chú thích trải dài trọn vẹn màn hình điện thoại, cỡ chữ và hình ảnh hiển thị sắc nét, không hề xuất hiện hiện tượng vỡ khung hay thanh cuộn ngang khó chịu.
> - Điều này khẳng định trang web đáp ứng hoàn hảo tiêu chuẩn Mobile-Friendly của Google!"

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, LỖI HAY GẶP & LỜI CẢM ƠN (18:30 – 20:00 | Thời lượng: ~1.5 phút)

🎬 **Thao tác:** 
- Tắt F12 DevTools, đưa giao diện về chế độ toàn màn hình Desktop đẹp nhất.
- Giữ phong thái tự tin, mắt nhìn thẳng vào webcam, giọng đọc truyền cảm, ấm áp.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, qua quá trình nghiên cứu, xây dựng và hoàn thiện Bài thực hành số 11, em đã đúc kết được những bài học kinh nghiệm chuyên môn vô cùng quý báu:
> 
> - **Thứ nhất:** Hiểu sâu sắc giá trị của việc viết mã HTML chuẩn ngữ nghĩa với cặp thẻ `<figure>` và `<figcaption>`. Việc từ bỏ thói quen lạm dụng thẻ `<div>` vô tội vạ không chỉ nâng tầm tính chuyên nghiệp của mã nguồn mà còn mang lại lợi ích to lớn cho SEO và khả năng tiếp cận người dùng khuyết tật.
> - **Thứ hai:** Làm chủ tư duy bố cục lưới CSS Grid. Nắm vững cách kết hợp giữa đơn vị phân số linh hoạt `fr`, hàm lặp `repeat()` và thuộc tính `gap` để xây dựng những hệ thống lưới giao diện hiện đại, sạch sẽ và tối ưu hiệu năng.
> - **Thứ ba:** Tránh được các bẫy lỗi kinh điển trong lập trình web như: quên thuộc tính `object-fit: cover` khiến ảnh bị méo mó biến dạng; quên thuộc tính `box-sizing: border-box` làm vỡ layout; hoặc không thiết lập `overflow: hidden` khiến ảnh chồm ra ngoài đường viền bo tròn của thẻ cha.
> 
> Video thuyết minh báo cáo Bài thực hành số 11 của em đến đây xin phép được khép lại.
> 
> Em xin bày tỏ lòng biết ơn chân thành và sâu sắc nhất tới quý thầy cô giáo bộ môn đã luôn tận tụy truyền đạt những kiến thức nền tảng và phương pháp tư duy lập trình web hiện đại cho chúng em. Em cũng xin cảm ơn các bạn sinh viên đã dành thời gian theo dõi video này.
> 
> Kính chúc quý thầy cô luôn dồi dào sức khỏe, tràn đầy niềm vui và hạnh phúc trong sự nghiệp trồng người cao quý! Chúc các bạn sinh viên luôn giữ vững ngọn lửa đam mê công nghệ và hoàn thành xuất sắc mọi bài thực hành!
> 
> Em xin chân thành cảm ơn!"

---
*Hết kịch bản Bài 11 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
