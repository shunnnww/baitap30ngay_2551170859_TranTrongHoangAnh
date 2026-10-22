# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 1: GIỚI THIỆU BẢN THÂN & ĐỊNH DẠNG VĂN BẢN TRANG THƠ "BỐN MÙA" (HTML5 & CSS3)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file kịch bản này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với tốc độ vừa phải, rành mạch, nhấn nhá vào các từ khóa kỹ thuật.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển tab hoặc bật công cụ để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng để bạn kiểm soát tiến độ không bị quá nhanh hay quá chậm.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | Mốc 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình.
- Trên màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai1.html`, `bai1.css`.
- Bật sẵn tab trình duyệt hiển thị giao diện bài thơ "Bốn mùa".

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em thực hiện video này nhằm thuyết minh và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 1: Giới thiệu bản thân, định dạng văn bản cơ bản và thiết kế trang thơ 'Bốn mùa' bằng HTML5 và CSS3**.
> 
> Trong hành trình trở thành một lập trình viên Front-end hay một kỹ sư phát triển web, bất kỳ ai trong chúng ta cũng đều phải bắt đầu từ những viên gạch nền móng đầu tiên. Và hai viên gạch nền tảng quan trọng nhất chính là HTML — ngôn ngữ đánh dấu siêu văn bản định hình cấu trúc và nội dung — cùng với CSS — ngôn ngữ định kiểu quy định màu sắc, kích thước và thẩm mỹ giao diện.
> 
> Bài thực hành số 1 này được thiết kế nhằm giúp chúng ta làm chủ toàn diện các kiến thức cốt lõi đó:
> 
> - Thứ nhất: Nắm vững cấu trúc khung sườn chuẩn mực của một tài liệu HTML5 hợp lệ (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, các thẻ meta ký tự và viewport).
> - Thứ hai: Thành thạo hệ thống thẻ định dạng văn bản ngữ nghĩa: các cấp bậc tiêu đề từ `<h1>` đến `<h6>`, thẻ đoạn văn `<p>`, thẻ ngắt dòng `<br>`, thẻ đường kẻ phân cách chuyên đề `<hr>`, cùng các thẻ nhấn mạnh nội tuyến như `<b>`, `<strong>`, `<i>`, `<em>`, `<u>`, `<mark>`.
> - Thứ ba: Khởi tạo bảng định kiểu CSS bên ngoài (External Stylesheet) thông qua thẻ `<link>`, áp dụng tư duy tổ chức mã nguồn phân tách rõ ràng giữa nội dung và giao diện.
> - Thứ tư: Làm chủ các thuộc tính CSS cơ bản định hình một khối hộp (Box Model): chiều rộng `width`, màu viền `border`, màu nền `background-color`, kiểu dáng chữ `font-style`, căn chỉnh văn bản `text-align`, khoảng đệm `padding` và màu sắc văn bản `color`.
> 
> Lộ trình video hôm nay sẽ gồm có 6 phân đoạn chính:
> 1. Lời mở đầu và mục tiêu bài tập.
> 2. Cơ sở lý thuyết chuyên sâu về cấu trúc tài liệu HTML5 và hệ thống thẻ định dạng văn bản.
> 3. Giải thích chi tiết từng dòng mã nguồn trong file `bai1.html`.
> 4. Giải thích chi tiết từng thuộc tính trong bảng định kiểu `bai1.css`.
> 5. Thực hành demo trực tiếp trên trình duyệt, soi kiểm tra F12 DevTools (Elements, Box Model, Console, kiểm tra co dãn giao diện).
> 6. Tổng kết bài học kinh nghiệm, các lỗi phổ biến và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bắt đầu bước vào phần lý thuyết nền tảng của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | Mốc 02:30 - 06:00)

🎬 **Thao tác:** 
- Rê chuột vào phần mở đầu file `bai1.html` trong VS Code.
- Nhấn chọn vào các từ khóa `<!DOCTYPE html>`, `<meta charset="UTF-8">`, các thẻ `<h1>`, `<p>`, `<br>`, `<hr>` để minh họa.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng code thực tế, em xin phép tóm lược các kiến thức lý thuyết nền tảng mà bài tập này áp dụng:
> 
> **1. Cấu trúc chuẩn của một tài liệu HTML5:**
> Mọi trang web đạt chuẩn W3C hiện đại đều bắt đầu bằng dòng khai báo `<!DOCTYPE html>`. Dòng này không phải là một thẻ HTML thông thường, mà là một chỉ thị đặc biệt gửi tới trình duyệt, thông báo rằng tài liệu này tuân theo chuẩn HTML5. Nhờ đó, trình duyệt sẽ dựng trang ở chế độ chuẩn (Standard Mode), tránh rơi vào chế độ lỗi thời (Quirks Mode) vốn gây sai lệch hiển thị.
> - Thẻ `<html lang="en">` hoặc `lang="vi"` quy định ngôn ngữ chính của tài liệu, giúp các trình đọc màn hình hỗ trợ người khiếm thị phát âm chuẩn xác, đồng thời tối ưu hóa SEO cho các công cụ tìm kiếm.
> - Trong phần `<head>`, hai thẻ meta vô cùng quan trọng:
>   + `<meta charset="UTF-8">`: Thiết lập bảng mã Unicode UTF-8. Đây là điều kiện tiên quyết để trang web hiển thị mượt mà tiếng Việt có dấu mà không bao giờ bị lỗi font hay biến thành các ký tự lạ.
>   + `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Khai báo khung nhìn, giúp trang web tự động thích ứng với kích thước màn hình thiết bị di động.
> 
> **2. Hệ thống phân cấp tiêu đề và thẻ văn bản:**
> - HTML cung cấp 6 cấp độ tiêu đề từ `<h1>` đến `<h6>`. Trong đó, `<h1>` là tiêu đề có cấp bậc cao nhất và quan trọng nhất trên trang, thông thường mỗi trang web chuẩn SEO chỉ nên có một thẻ `<h1>` duy nhất. Các cấp từ `<h2>` đến `<h6>` dùng cho các tiêu đề phụ và tiểu mục.
> - Thẻ đoạn văn `<p>` (Paragraph): Dùng để nhóm các câu văn thành một đoạn hoàn chỉnh. Trình duyệt mặc định sẽ tự động thêm một khoảng lề trên và dưới (margin) cho mỗi thẻ `<p>`.
> - Thẻ ngắt dòng `<br>` (Line Break): Là thẻ đơn (Empty Tag / Self-closing), dùng để ngắt xuống dòng bên trong cùng một đoạn văn mà không tạo ra khoảng cách đoạn quá lớn như việc dùng hai thẻ `<p>` riêng biệt. Điều này cực kỳ phù hợp khi trình bày thơ ca hoặc địa chỉ.
> - Thẻ đường kẻ ngang `<hr>` (Horizontal Rule): Được dùng để phân tách ngữ nghĩa giữa các phần, tạo một đường phân cách thị giác trang nhã.
> 
> **3. Các thẻ định dạng nội tuyến và ngữ nghĩa:**
> Ngoài ra trong HTML, chúng ta có các cặp thẻ như `<b>` và `<strong>` để in đậm (trong đó `<strong>` mang ý nghĩa nội dung đặc biệt quan trọng), `<i>` và `<em>` để in nghiêng (với `<em>` nhấn mạnh ngữ điệu), `<u>` để gạch chân, và `<mark>` để tô sáng làm nổi bật từ khóa.
> 
> **4. Nguyên lý gắn kết CSS bên ngoài (External CSS):**
> Việc sử dụng thẻ `<link rel="stylesheet" href="bai1.css">` giúp tách biệt hoàn toàn giữa cấu trúc nội dung và phong cách trình bày. Điều này tuân thủ nguyên lý Separation of Concerns (Phân tách mối quan tâm), giúp mã nguồn sạch sẽ, dễ bảo trì, tái sử dụng được ở nhiều trang khác nhau và tối ưu bộ nhớ đệm cache của trình duyệt."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai1.html`) (Thời lượng: ~4 phút 30 giây | Mốc 06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển hẳn con trỏ sang tab `bai1.html`.
- Bôi đen tuần tự từng khối code từ dòng 1 đến dòng 32, đọc đến đâu rê chuột làm nổi bật đến đó.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi vào mổ xẻ chi tiết 32 dòng code trong tệp tin `bai1.html`:
> 
> - **Từ dòng 1 đến dòng 8 là phần khai báo chuẩn `<head>`:**
>   - Dòng 1: `<!DOCTYPE html>` xác lập tài liệu HTML5.
>   - Dòng 2: `<html lang="en">` mở đầu tài liệu.
>   - Dòng 3 đến dòng 8 là thẻ `<head>`: Chứa `<meta charset="UTF-8">` bảo đảm hiển thị tiếng Việt trọn vẹn, thẻ viewport thích ứng màn hình, thẻ `<title>Bài 1 - Trang thơ "Bốn mùa"</title>` hiển thị trên thanh tiêu đề của tab trình duyệt.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai1.css">` trỏ trực tiếp đến file định kiểu cùng thư mục.
> 
> - **Tiếp theo, bước vào phần thân trang `<body>` từ dòng 9 đến dòng 31:**
>   - Dòng 10: Em khai báo thẻ bao bọc chính `<div class="khung-bai-tho">`. Thẻ `div` này đóng vai trò như một chiếc khung tranh, giúp gom toàn bộ tiêu đề, các khổ thơ và đường phân cách vào một khối hộp độc lập để dễ dàng căn giữa và đóng khung.
>   
>   - Dòng 11: Thẻ tiêu đề cấp 1 `<h1 class="tieu-de"> BỐN MÙA </h1>`. Tiêu đề được viết hoa toàn bộ và gán lớp `tieu-de` để CSS áp dụng màu nền hồng phấn và màu chữ đỏ nổi bật.
> 
>   - Dòng 12 đến dòng 16 là **Khổ thơ thứ nhất**:
>     - Được bọc trong thẻ `<p class="mau-xanh">`.
>     - Câu 1: *'Xuân về hoa nở khắp trời'* kết thúc bằng thẻ `<br>` để ngắt dòng xuống dưới.
>     - Câu 2: *'Hạ sang nắng cháy rạng ngời phố quen'* cũng kết thúc bằng thẻ `<br>`.
>     - Câu 3: *'Thu về lá rụng bên thềm'* khép lại khổ thơ đầu tiên.
>     - Việc dùng thẻ `<br>` ở đây giúp giữ đúng nhịp điệu ngắt câu lục bát của bài thơ mà không bị vỡ đoạn văn.
> 
>   - Dòng 17: Thẻ kẻ ngang `<hr>`. Thẻ này đóng vai trò ngắt chuyển giao giữa khổ thơ mùa xuân - hạ - thu sang khổ thơ mùa đông.
> 
>   - Dòng 18 đến dòng 22 là **Khổ thơ thứ hai**:
>     - Khổ này được gắn lớp `class="mau-do"` nhằm biểu thị sự chuyển biến cảm xúc nồng ấm của mùa đông:
>     - *'Đông sang gió lạnh bên em đợi chờ'* `<br>`
>     - *'Bốn mùa là bốn giấc mơ'* `<br>`
>     - *'Thời gian đi mãi ta chờ đợi ai'*.
> 
>   - Dòng 23: Một thẻ `<hr>` thứ hai tiếp tục tạo đường phân cách đối xứng.
> 
>   - Dòng 24 đến dòng 28 là **Khổ thơ thứ ba — khổ kết bài**:
>     - Khổ này quay trở lại với lớp `class="mau-xanh"`:
>     - *'Một năm rồi lại một năm'* `<br>`
>     - *'Vẫn còn câu hát thì thầm quê hương'* `<br>`
>     - *'Chờ xuân nắng mới soi đường'*.
> 
>   - Dòng 29 đóng thẻ `</div>` của khối `.khung-bai-tho`.
>   - Dòng 30 là thẻ đóng kết cấu và dòng 31 - 32 đóng thẻ `</body>`, `</html>`.
> 
> Nhìn tổng thể, mã nguồn HTML của bài 1 rất gãy gọn, có cấu trúc lồng nhau phân cấp mạch lạc, áp dụng chuẩn mực các thẻ ngữ nghĩa và phân lớp class rõ ràng."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai1.css`) (Thời lượng: ~4 phút 30 giây | Mốc 10:30 - 15:00)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai1.css`.
- Bôi đen lần lượt từng bộ chọn: `.khung-bai-tho`, `.tieu-de`, `.mau-xanh`, `.mau-do`, và `.hr` (hoặc `hr`).

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích chi tiết bảng định dạng kiểu dáng `bai1.css`. Tệp này mang đến diện mạo nghệ thuật, ấm áp và thanh nhã cho trang thơ:
> 
> **1. Định dạng khối bao ngoài `.khung-bai-tho` (từ dòng 1 đến dòng 7):**
> - `width: 450px;`: Giới hạn chiều rộng của toàn bộ khung bài thơ là 450 pixel. Đây là một con số được tính toán kỹ lưỡng, vừa vặn hoàn hảo với độ dài của một câu thơ lục bát tiếng Việt, giúp bài thơ trông cô đọng, không bị bè rộng sang hai bên.
> - `border: 1 solid #9E9E9E;`: Tạo một đường viền đơn có độ dày 1 pixel, mang tông màu xám `#9E9E9E` thanh nhã, giúp định hình ranh giới của bài thơ trên màn hình.
> - `background-color: #FFFDE7;`: Sử dụng mã màu vàng kem nhạt dịu mắt. Gam màu này gợi cảm giác của những trang giấy tập hoài niệm cổ điển, mang tính thẩm mỹ văn học rất cao.
> - `font-style: italic;`: Thiết lập kiểu chữ nghiêng cho toàn bộ nội dung bên trong khung bài thơ. Nét chữ nghiêng tạo nên sự mềm mại, uyển chuyển, rất phù hợp với phong cách thơ ca trữ tình.
> - `text-align: center;`: Căn toàn bộ các dòng chữ thơ và đường kẻ phân cách vào chính giữa tâm của khung, tạo sự cân bằng đối xứng thị giác tuyệt đối.
> 
> **2. Định dạng thanh tiêu đề `.tieu-de` (từ dòng 8 đến dòng 14):**
> - `background-color: #FFD9E6;`: Thiết lập màu nền hồng phấn nhẹ nhàng cho dải tiêu đề, tạo sự tương phản mềm mại với nền vàng kem của bài thơ.
> - `color: #D40000;`: Chữ tiêu đề dùng mã màu đỏ rực rỡ `#D40000`, tạo điểm nhấn thu hút ánh nhìn ngay từ giây đầu tiên.
> - `font-style: normal;`: Đây là một kỹ thuật ghi đè (override) quan trọng trong CSS. Dù khối cha `.khung-bai-tho` đang kế thừa kiểu chữ nghiêng `italic`, nhưng riêng thẻ tiêu đề được trả về `normal` (chữ đứng thẳng). Nhờ vậy, tiêu đề trông vững chãi, trang trọng và tôn nghiêm.
> - `padding-top: 6px; padding-bottom: 6px;`: Tạo khoảng đệm trên và dưới 6 pixel bên trong thanh tiêu đề, giúp chữ không bị chạm sát mép viền, tạo độ thoáng đãng cho phần đầu trang.
> 
> **3. Định dạng màu sắc các khổ thơ `.mau-xanh` và `.mau-do` (từ dòng 15 đến dòng 22):**
> - Lớp `.mau-xanh` thiết lập `color: #0033CC;` — tông màu xanh lam đậm dịu mát dành cho khổ 1 và khổ 3, kết hợp với `line-height: auto;` để các dòng thơ giãn cách tự nhiên.
> - Lớp `.mau-do` thiết lập `color: #D40000;` — tông màu đỏ thắm ấm áp cho khổ thơ mùa đông.
> - Sự chuyển đổi màu sắc xen kẽ giữa Xanh — Đỏ — Xanh tạo nên một nhịp điệu thị giác vô cùng sinh động, tượng trưng cho sự tuần hoàn của bốn mùa trong năm.
> 
> **4. Định dạng đường kẻ ngang `.hr` (từ dòng 23 đến dòng 26):**
> - `width: 55%;`: Thay vì để đường kẻ tràn hết 100% chiều ngang như mặc định, em thu gọn lại còn 55%.
> - `border: 1px solid #0033CC;`: Viền kẻ màu xanh đồng bộ với màu chữ khổ 1 và khổ 3, tạo nên sự gắn kết chặt chẽ trong tổng thể thiết kế."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~4 phút | Mốc 15:00 - 19:00)

🎬 **Thao tác:** 
- Phóng to cửa sổ trình duyệt Chrome hiển thị trang `bai1.html`.
- Nhấp chuột phải chọn **Inspect** hoặc bấm phím `F12`.
- Lần lượt thực hiện các thao tác:
  1. Kiểm tra hiển thị tổng thể giao diện.
  2. Bật tab Elements, soi vào `.khung-bai-tho`, trỏ chuột vào sơ đồ Box Model.
  3. Bật tab Console để chứng minh không có lỗi.
  4. Bật chế độ Responsive (phím tắt `Ctrl + Shift + M`), kiểm tra trên kích thước mobile 375px và 450px.
  5. Thử chỉnh sửa trực tiếp màu sắc hoặc font-style trên Elements tab để người xem thấy sự thay đổi tức thì.

🗣️ **Lời đọc:**
> "Và ngay bây giờ, em xin kính mời quý thầy cô cùng các bạn quan sát phần thực nghiệm chạy thử trang web trực tiếp trên trình duyệt Google Chrome!
> 
> **1. Quan sát giao diện thực tế ban đầu:**
> - Như mọi người có thể thấy trên màn hình, trang web hiển thị rất chuẩn mực và trang nhã.
> - Khung bài thơ rộng 450px nổi bật với nền vàng kem nhạt `#FFFDE7`.
> - Thanh tiêu đề 'BỐN MÙA' có nền hồng phấn `#FFD9E6`, chữ đỏ đứng thẳng rõ nét.
> - Ba khổ thơ được căn giữa ngay ngắn. Khổ 1 màu xanh lam dịu mát, khổ 2 chuyển sang màu đỏ nồng ấm, và khổ 3 trở lại sắc xanh thanh bình.
> - Các đường kẻ ngang thu gọn 55% nằm cân đối giữa các khổ thơ, tạo điểm ngắt nhịp nhẹ nhàng.
> 
> **2. Mở công cụ F12 Developer Tools soi cấu trúc Box Model:**
> - *[Thao tác: Bấm F12, chọn tab Elements, click chọn thẻ `<div class="khung-bai-tho">`]*
> - Thầy cô có thể thấy trên tab Elements, cấu trúc DOM hiển thị đúng chuẩn phân cấp như mã nguồn chúng em đã viết.
> - Nhìn xuống phần sơ đồ **Box Model** ở góc dưới:
>   + Vùng Content hiển thị chính xác kích thước 450px chiều rộng.
>   + Lớp viền Border 1px màu xám `#9E9E9E` bao quanh bốn phía.
> - Tiếp theo, em rê chuột vào thẻ `<h1 class="tieu-de">`: Ta thấy rõ lớp Padding trên dưới 6px được tô màu xanh lá mạ trong sơ đồ Box Model, hoàn toàn khớp với thuộc tính `padding-top` và `padding-bottom` đã khai báo trong CSS.
> 
> **3. Kiểm tra tab Console:**
> - *[Thao tác: Chuyển sang tab Console]*
> - Màn hình Console hoàn toàn sạch sẽ, không có bất kỳ thông báo lỗi đỏ (Error) hay cảnh báo vàng (Warning) nào, chứng tỏ tất cả các tài nguyên và liên kết file đều được nạp chuẩn xác 100%.
> 
> **4. Kiểm tra Responsive trên Device Toolbar:**
> - *[Thao tác: Nhấn tổ hợp phím `Ctrl + Shift + M` để bật Device Toolbar]*
> - Em chọn giả lập thiết bị iPhone SE (chiều rộng 375px) và iPhone 12 Pro (390px). Vì khung được đặt chiều rộng cố định 450px, trên màn hình nhỏ ta có thể cuộn ngang nhẹ. Khi chuyển sang màn hình iPad hoặc máy tính bảng (768px trở lên), khung bài thơ nằm gọn gàng, trang nhã ở góc nhìn."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | Mốc 19:00 - 20:30)

🎬 **Thao tác:** 
- Chuyển màn hình về lại Visual Studio Code hoặc giữ khung hình giao diện đẹp mắt trên trình duyệt.
- Giọng nói trang trọng, tự tin và chân thành.

🗣️ **Lời đọc:**
> "Qua quá trình thực hiện Bài tập thực hành số 1, bản thân em đã tích lũy và đúc kết được nhiều bài học kinh nghiệm quý báu:
> 
> - **Thứ nhất:** Hiểu sâu sắc sự khác biệt giữa thẻ đoạn văn `<p>` và thẻ ngắt dòng `<br>`. Thẻ `<p>` mang ý nghĩa phân đoạn logic với khoảng cách lề mặc định, trong khi thẻ `<br>` chỉ đơn thuần ngắt dòng hiển thị nội dung bên trong cùng một khối.
> - **Thứ hai:** Nắm vững cơ chế kế thừa thuộc tính (CSS Inheritance). Khi ta áp dụng `font-style: italic` cho khối cha `.khung-bai-tho`, tất cả các phần tử con bên trong đều được thừa hưởng kiểu chữ nghiêng; và ta hoàn toàn có thể dùng `font-style: normal` ở phần tử con để ghi đè lại một cách có chủ đích.
> - **Thứ ba:** Nắm rõ các lỗi phổ biến mà người mới học web hay gặp: như quên khai báo `UTF-8` dẫn đến lỗi font tiếng Việt, quên đóng thẻ `<p>` hay gõ sai đường dẫn file trong thẻ `<link>`.
> 
> Phần thuyết minh chi tiết cho Bài tập số 1 của em đến đây xin phép được khép lại.
> 
> Em xin chân thành cảm ơn quý thầy cô giáo đã luôn tận tình hướng dẫn, truyền thụ kiến thức cho chúng em. Cảm ơn các bạn sinh viên đã chú ý theo dõi video thực hành này.
> 
> Kính chúc thầy cô dồi dào sức khỏe và công tác tốt! Chúc các bạn luôn giữ trọn niềm đam mê với lập trình web. Hẹn gặp lại thầy cô và các bạn trong video thuyết minh Bài tập số 2 tiếp theo! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 1 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
