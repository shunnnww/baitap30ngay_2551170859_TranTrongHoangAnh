# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 2: DÀN TRANG BÀI BÁO DU LỊCH VỚI KỸ THUẬT FLOAT, TEXT-SHADOW & ĐỊNH KIỂU VĂN BẢN (HTML5 & CSS3)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file kịch bản này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với tốc độ vừa phải, dõng dạc, truyền cảm, làm chủ các thuật ngữ kỹ thuật.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển tab hoặc bật công cụ để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng để bạn kiểm soát tiến độ không bị quá nhanh hay quá chậm.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | Mốc 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình.
- Trên màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai2.html`, `bai2.css` cùng file ảnh `greatwall.jpg`.
- Bật sẵn tab trình duyệt hiển thị giao diện trang quảng cáo tour du lịch Trung Hoa nền vàng đồng.

🗣️ **Lời đọc:**
> "Xin kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được tiếp tục đồng hành cùng thầy cô và các bạn trong video thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 2: Thiết kế trang thông tin quảng bá tour du lịch 'Bất đáo Trường Thành phi hảo hán' kết hợp xử lý hình ảnh trôi, bóng đổ văn bản và căn chỉnh bố cục bài báo chuyên nghiệp bằng HTML5 và CSS3**.
> 
> Trong lĩnh vực thiết kế web tin tức, tạp chí và cổng thông tin du lịch, việc trình bày nội dung kết hợp hài hòa giữa chữ viết và hình ảnh minh họa là một kỹ năng vô cùng thiết yếu. Làm thế nào để hình ảnh nằm trôi gọn gàng sang một góc, để dòng văn bản tự động uốn lượn mềm mại ôm lấy bức ảnh mà không làm vỡ bố cục? Làm thế nào để tiêu đề nổi bật với hiệu ứng 3D có chiều sâu, và văn bản được căn gióng thẳng đều tăm tắp hai lề như một trang tạp chí in ấn cao cấp?
> 
> Bài thực hành số 2 này chính là câu trả lời toàn diện cho bài toán đó, với các mục tiêu trọng tâm:
> 
> - Thứ nhất: Ứng dụng kỹ thuật trôi nổi phần tử `float: right` trong CSS để đưa ảnh minh họa sang bên phải và tạo hiệu ứng dòng văn bản bao quanh (Text Wrapping).
> - Thứ hai: Khai thác hiệu ứng đổ bóng văn bản `text-shadow` để tạo chiều sâu thị giác đa chiều cho tiêu đề bài viết.
> - Thứ ba: Ứng dụng mô hình màu `rgba()` để tạo đường viền mờ bán trong suốt (semi-transparent border) cho hình ảnh, tạo nét sang trọng như được lồng trong khung kính.
> - Thứ tư: Căn chỉnh khối văn bản hai lề `text-align: justify`, tối ưu khoảng cách dòng `line-height` và thiết lập màu sắc hoàng gia vàng đồng `#C9A227` mang đậm chất văn hóa lịch sử.
> 
> Lộ trình của video hôm nay gồm có 6 phần:
> 1. Lời mở đầu & giới thiệu tổng quan đề tài.
> 2. Cơ sở lý thuyết chuyên sâu về kỹ thuật Float, mô hình khối và phân cấp nội dung văn bản / danh sách trong HTML.
> 3. Phân tích chi tiết từng dòng mã nguồn trong file `bai2.html`.
> 4. Phân tích cặn kẽ các quy tắc định kiểu trong tệp `bai2.css`.
> 5. Thực hành demo trực tiếp trên trình duyệt, soi F12 Developer Tools (Elements, Box Model, Console, kiểm tra co dãn giao diện).
> 6. Tổng kết bài học kinh nghiệm, các lưu ý về bố cục và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | Mốc 02:30 - 06:00)

🎬 **Thao tác:** 
- Rê chuột vào phần mở đầu file `bai2.html` và `bai2.css` trong VS Code.
- Làm nổi bật thuộc tính `float: right`, `text-shadow` và cấu trúc thẻ `<img>`.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng mã nguồn cụ thể, em xin phép trình bày tóm lược các nguyên lý lý thuyết cốt lõi mà bài thực hành này vận dụng:
> 
> **1. Kỹ thuật trôi nổi phần tử Float trong CSS:**
> Trong luồng tài liệu thông thường (Normal Flow), các phần tử khối (Block-level elements) như thẻ `<div>`, `<p>`, `<h1>` luôn chiếm trọn vẹn 100% chiều ngang và tự động xuống dòng. Tuy nhiên, khi ta áp dụng thuộc tính `float: right;` hoặc `float: left;`, phần tử đó sẽ được nhấc ra khỏi luồng văn bản bình thường và được đẩy hẳn về sát mép phải hoặc mép trái của phần tử cha.
> - Điều kỳ diệu ở đây là: Các nội dung nội tuyến (Inline content) xung quanh, đặc biệt là các dòng văn bản bên trong các thẻ `<p>`, sẽ tự động nhận biết sự hiện diện của phần tử trôi và nhẹ nhàng chảy vòng ôm quanh cạnh của nó. Đây chính là kỹ thuật kinh điển của ngành in ấn báo chí được đưa vào thế giới web.
> 
> **2. Hiệu ứng đổ bóng văn bản Text-shadow:**
> Cú pháp của `text-shadow` bao gồm 4 giá trị tham số:
> `text-shadow: offset-x | offset-y | blur-radius | color;`
> - `offset-x` quy định độ lệch của bóng theo phương ngang (dương là lệch sang phải, âm là lệch sang trái).
> - `offset-y` quy định độ lệch theo phương dọc (dương là lệch xuống dưới).
> - `blur-radius` là bán kính làm mờ, giá trị càng lớn thì bóng đổ càng nhòe và tự nhiên.
> - `color` là màu sắc của bóng, thường kết hợp với `rgba()` để tạo độ trong suốt nhẹ nhàng.
> Nhờ `text-shadow`, con chữ không còn bị bẹt dính vào nền phẳng mà có cảm giác nổi hẳn lên khỏi bề mặt màn hình.
> 
> **3. Kênh độ trong suốt Alpha trong hệ màu RGBA:**
> CSS hỗ trợ cú pháp `rgba(đỏ, lục, lam, độ mờ)` với kênh Alpha nhận giá trị từ `0.0` (hoàn toàn vô hình) đến `1.0` (đặc hoàn toàn). Khi chúng ta áp dụng viền `border: 4px solid rgba(255, 255, 255, 0.7);`, viền ảnh sẽ mang màu trắng nhưng cho phép 30% màu nền vàng bên dưới xuyên qua, tạo hiệu ứng mờ ảo cao cấp như chất liệu kính mờ (Frosted Glass).
> 
> **4. Phân cấp nội dung văn bản và tổ chức danh sách hành trình:**
> Trong thiết kế trang tin tức và du lịch, nội dung thường được tổ chức dưới hai dạng: văn bản đoạn văn liền mạch (`<p>`) mô tả cảm xúc và danh sách các điểm đến. HTML cung cấp hai loại danh sách chính là danh sách có thứ tự `<ol>` (với các kiểu đánh số `type="1"`, `type="A"`, `type="a"`, `type="I"`, `type="i"`) và danh sách không thứ tự `<ul>` (với các kiểu dấu chấm `disc`, `circle`, `square`). Việc nắm vững cả hai cách tiếp cận giúp chúng ta linh hoạt lựa chọn phương thức trình bày phù hợp nhất cho từng trang web."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai2.html`) (Thời lượng: ~4 phút 30 giây | Mốc 06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai2.html`.
- Bôi đen lần lượt các phân vùng mã nguồn từ dòng 1 đến dòng 27.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi sâu vào phân tích 27 dòng mã nguồn của tệp `bai2.html`:
> 
> - **Phần `<head>` từ dòng 1 đến dòng 8:**
>   - Dòng 1: `<!DOCTYPE html>` định chuẩn tài liệu HTML5.
>   - Dòng 2: `<html lang="en">` mở đầu tài liệu.
>   - Dòng 4: Khai báo bảng mã `<meta charset="UTF-8">`, đảm bảo mọi câu chữ tiếng Việt có dấu, kể cả các danh từ riêng như 'Vạn Lý Trường Thành', 'Thập Tam Lăng', 'Cung Điện Mùa Hè' đều được hiển thị sắc nét, không bị biến dạng ký tự.
>   - Dòng 5: Thẻ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` hỗ trợ hiển thị tỷ lệ chuẩn trên các thiết bị.
>   - Dòng 6: Thẻ `<title>Bài 2 - Trang quảng cáo tour du lịch</title>` hiển thị tiêu đề tab trên thanh trình duyệt.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai2.css">` liên kết trực tiếp với bảng định kiểu ngoài.
> 
> - **Tiếp theo là phần thân trang `<body>` từ dòng 9 đến dòng 26:**
>   - Dòng 10: Toàn bộ nội dung bài viết được bao bọc trong một container chính là `<div class="khung-trang">`. Thẻ này có chức năng khống chế chiều ngang, định vị toàn bộ nội dung bài quảng cáo nằm gọn gàng, tách biệt với các lề màn hình.
> 
>   - Dòng 11 đến dòng 13: Thẻ tiêu đề chính cấp 1:
>     `<h1 class="tieu-de">"Bất đáo Trường Thành phi hảo hán"...</h1>`.
>     Đây là câu ngạn ngữ kinh điển, được đặt trong dấu ngoặc kép và dấu ba chấm lôi cuốn, mang lại ấn tượng văn hóa sâu sắc ngay khi người dùng mở trang.
> 
>   - Dòng 14: Vị trí đặt thẻ hình ảnh minh họa:
>     `<img src="greatwall.jpg" alt="Vạn Lý Trường Thành" class="anh">`.
>     *Điểm đáng chú ý về mặt vị trí trong cây DOM:* Thẻ `<img>` này được đặt **ngay trước** các thẻ đoạn văn `<p>`. Đây là một nguyên tắc bắt buộc khi sử dụng thuộc tính `float: right` trong CSS: phần tử trôi phải nằm phía trước nội dung mà nó muốn trôi cùng, để trình duyệt có thể dựng vị trí trôi của ảnh trước rồi mới cho các dòng chữ tiếp theo chảy vòng quanh cạnh trái của nó.
> 
>   - Dòng 15 đến dòng 23 là 3 đoạn văn bản mô tả hành trình tour du lịch, mỗi đoạn nằm trong một thẻ `<p class="doan-van">`:
>     - **Đoạn 1 (Dòng 15 - 17):** Giới thiệu hành trình khởi đầu do Công ty du lịch Hoàn Mỹ tổ chức: chinh phục Vạn Lý Trường Thành kỳ vĩ, ghé thăm Thập Tam Lăng cổ kính, và khám phá Di Hòa Viên — Cung Điện Mùa Hè của Từ Hy Thái Hậu với tích 'đào hồ, đắp núi, xây chùa'.
>     - **Đoạn 2 (Dòng 18 - 20):** Đưa du khách dạo bước trên quảng trường Thiên An Môn lịch sử, chiêm ngưỡng Tử Cấm Thành Cố Cung nguy nga, thưởng thức đặc sản vịt quay Bắc Kinh trứ danh; sau đó xuôi về Thượng Hải tham quan vườn cổ Dự Viên và bến Thượng Hải bên dòng sông Hoàng Phố.
>     - **Đoạn 3 (Dòng 21 - 23):** Khép lại hành trình tại Hàng Châu thơ mộng với sự tích 'cầu gãy mà không gãy' gắn liền với thiên tình sử Lương Sơn Bá - Chúc Anh Đài và trung tâm ngọc trai quý hiếm.
> 
>   - Dòng 24 đóng thẻ `</div>` của khung trang.
> 
> Cấu trúc HTML của bài tập rất mạch lạc, ngắn gọn, tuân thủ chặt chẽ mối liên hệ giữa vị trí thẻ `<img>` và các đoạn văn bản `<p>` để phục vụ kỹ thuật dàn trang bằng `float`."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai2.css`) (Thời lượng: ~4 phút 30 giây | Mốc 10:30 - 15:00)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai2.css`.
- Bôi đen lần lượt từng bộ chọn: `body`, `.khung-trang`, `.tieu-de`, `.anh`, và `.doan-van`.

🗣️ **Lời đọc:**
> "Tiếp theo, em xin kính mời quý thầy cô cùng các bạn khám phá bảng định kiểu `bai2.css`. Đây chính là phần kiến tạo nên phong cách cổ điển, hoàng gia cho toàn bộ trang web:
> 
> **1. Bộ chọn toàn trang `body` (từ dòng 1 đến dòng 5):**
> - `background-color: #C9A227;`: Em lựa chọn mã màu vàng đồng óng ả `#C9A227`. Gam màu này mang đậm dấu ấn cung đình phương Đông, gợi liên tưởng đến sắc vàng vương giả của Tử Cấm Thành và các triều đại lịch sử Trung Hoa cổ đại.
> - `color: white;`: Toàn bộ chữ trên trang được gán màu trắng tinh khôi. Sự kết hợp giữa chữ trắng trên nền vàng đồng tạo nên độ tương phản màu sắc cực kỳ cao, vừa sang trọng vừa giúp mắt người đọc dễ dàng tiếp nhận thông tin.
> - `margin: 0;`: Xóa bỏ khoảng lề mặc định 8px của trình duyệt, giúp dải màu nền vàng phủ kín toàn bộ khung nhìn viewport mà không để lại các viền trắng khó chịu.
> 
> **2. Bộ chọn khung bao `.khung-trang` (từ dòng 6 đến dòng 9):**
> - `width: 750px;`: Cố định độ rộng khung là 750 pixel. Đây là kích thước tiêu chuẩn vàng dành cho các bài báo chuyên đề, giúp chiều dài của mỗi dòng văn bản nằm trong khoảng từ 65 đến 80 ký tự — khoảng cách lý tưởng nhất để mắt người đọc quét dòng mà không bị mỏi hay lạc dòng.
> - `margin: 20px;`: Tạo khoảng cách cách đều 20 pixel với các mép xung quanh, giúp bài viết có khoảng thở thông thoáng.
> 
> **3. Bộ chọn tiêu đề ấn tượng `.tieu-de` (từ dòng 10 đến dòng 14):**
> - `text-align: center;`: Căn toàn bộ dòng chữ tiêu đề vào chính giữa tâm của khung trang.
> - `font-size: 26px;`: Kích thước chữ 26 pixel, to bản, uy nghi và đĩnh đạc.
> - `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);`: Đây là điểm nhấn thị giác quan trọng nhất của tiêu đề!
>   + Bóng lệch sang phải 2px (`offset-x = 2px`).
>   + Bóng lệch xuống dưới 2px (`offset-y = 2px`).
>   + Bán kính làm mờ 4px (`blur-radius = 4px`).
>   + Màu bóng dùng đen mờ 40% (`rgba(0,0,0,0.4)`).
>   Hiệu ứng này tạo ra một vầng bóng nhẹ nhàng phía sau các ký tự màu trắng, làm cho câu nói 'Bất đáo Trường Thành phi hảo hán' nổi khối 3D rõ nét trên nền vàng óng.
> 
> **4. Kỹ thuật trôi ảnh và khung viền thủy tinh `.anh` (từ dòng 15 đến dòng 21):**
> - `float: right;`: Đưa bức ảnh trôi hẳn về phía bên phải khung trang.
> - `width: 280px;`: Chiều rộng ảnh được khống chế ở mức 280px, chiếm khoảng hơn một phần ba tổng chiều rộng khung trang, nhường phần lớn diện tích còn lại cho khối chữ.
> - `margin-left: 12px; margin-bottom: 12px;`: Tạo khoảng đệm cách xa ảnh 12px về phía bên trái và phía dưới. Nhờ hai thuộc tính này, các dòng văn bản khi chảy bao quanh ảnh sẽ không bao giờ bị dính sát vào mép ảnh, giữ cho bố cục luôn tinh tế và chuyên nghiệp.
> - `border: 4px solid rgba(255, 255, 255, 0.7);`: Khung viền dày 4 pixel mang sắc trắng mờ với độ trong suốt 70%. Bức ảnh trông như được lồng vào một chiếc khung tranh bằng kính thủy tinh sang trọng.
> 
> **5. Định dạng văn bản báo chí `.doan-van` (từ dòng 22 đến dòng 27):**
> - `text-align: justify;`: Căn đều hai bên lề trái và lề phải của các đoạn văn bản. Điều này tạo nên những khối văn bản vuông vức, thẳng tắp, chuẩn phong cách của các tạp chí in ấn cao cấp.
> - `line-height: 1.5;`: Giãn cách giữa các dòng bằng 1.5 lần kích thước chữ, tạo sự thông thoáng tối ưu cho mắt đọc.
> - `font-size: 17;` (tương đương 17px): Cỡ chữ rõ ràng, dễ đọc.
> - `margin-bottom: 16px;`: Khoảng cách đáy 16 pixel giúp phân cách nhịp nhàng giữa 3 chặng hành trình trong bài viết."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~4 phút | Mốc 15:00 - 19:00)

🎬 **Thao tác:** 
- Phóng to cửa sổ trình duyệt Chrome hiển thị trang `bai2.html`.
- Nhấp phím `F12` mở cửa sổ Developer Tools.
- Vừa thao tác vừa thuyết minh các bước:
  1. Kiểm tra tổng quan màu sắc và độ bao quanh của văn bản quanh bức ảnh.
  2. Dùng công cụ chọn phần tử (Inspect Element) trỏ vào bức ảnh `greatwall.jpg`.
  3. Quan sát Box Model của ảnh: width 280px, margin-left 12px, border 4px.
  4. Trỏ vào tiêu đề `<h1>` để xem thuộc tính `text-shadow`. Thử tắt/bật checkbox `text-shadow` trong tab Styles để người xem thấy sự khác biệt rõ rệt khi có và không có bóng đổ.
  5. Bật tab Console kiểm tra không có lỗi tải ảnh (ảnh 200 OK).
  6. Bật Device Toolbar (`Ctrl + Shift + M`) co dãn kiểm tra phản ứng của `float`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn theo dõi phần thực nghiệm demo chạy trực tiếp trang web trên trình duyệt!
> 
> **1. Quan sát giao diện thực tế:**
> - Như mọi người có thể quan sát: Nền vàng đồng `#C9A227` bao phủ toàn bộ màn hình, mang lại một không gian rất hoàng gia và cổ kính.
> - Tiêu đề lớn 'Bất đáo Trường Thành phi hảo hán'... nằm cân đối chính giữa với vầng bóng đổ 3D mềm mại phía sau.
> - Bức ảnh kỳ quan Vạn Lý Trường Thành nằm ngay ngắn ở phía bên phải, với khung viền trắng mờ tinh xảo.
> - Xin quý vị hãy chú ý vào cách mà văn bản tương tác với bức ảnh: Đoạn văn số 1 và đoạn văn số 2 tự động uốn lượn men theo cạnh trái của bức ảnh. Khi hết chiều cao của ảnh, đoạn văn thứ 3 nhẹ nhàng trải dài tràn ra toàn bộ chiều rộng 750px phía dưới. Toàn bộ các dòng chữ đều được căn đều hai mép trái phải thẳng tắp nhờ `text-align: justify`.
> 
> **2. Soi kiểm tra F12 Developer Tools:**
> - *[Thao tác: Bấm F12, nhấp chọn công cụ trỏ chuột vào bức ảnh `.anh`]*
> - Trong tab **Elements** và cửa sổ **Styles**: Ta thấy rõ thuộc tính `float: right` đang kích hoạt.
> - Nhìn vào sơ đồ **Box Model**:
>   + Khối nội dung ảnh rộng 280px.
>   + Lớp viền Border 4px màu `rgba(255, 255, 255, 0.7)`.
>   + Lớp Margin-left 12px và Margin-bottom 12px được tô màu cam rõ ràng, ngăn không cho phần chữ lấn vào ảnh.
> 
> **3. Thử nghiệm trực quan thuộc tính `text-shadow`:**
> - *[Thao tác: Trỏ chuột vào thẻ `h1.tieu-de`, trong ô Styles, bỏ dấu tích xanh ở dòng `text-shadow`]*
> - Khi em tạm thời tắt `text-shadow`, dòng chữ lập tức trở nên phẳng và hơi chìm vào nền vàng.
> - *[Thao tác: Tích chọn lại `text-shadow`]*
> - Ngay khi bật lại, con chữ lập tức như được nhấc bổng lên khỏi bề mặt màn hình, tạo chiều sâu thị giác cực kỳ sống động!
> 
> **4. Kiểm tra tab Console và kiểm tra co dãn:**
> - *[Thao tác: Chuyển tab Console]*
> - Tab Console hoàn toàn trong sạch, không có lỗi 404 thất lạc file ảnh `greatwall.jpg`.
> - *[Thao tác: Bật Device Toolbar `Ctrl + Shift + M`]*
> - Khi co dãn kích thước khung nhìn, cấu trúc `float` và văn bản vẫn ôm lấy nhau rất chặt chẽ, chứng minh tính ổn định tuyệt vời của mã nguồn."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | Mốc 19:00 - 20:30)

🎬 **Thao tác:** 
- Chuyển màn hình về lại Visual Studio Code hoặc giữ khung hình toàn cảnh trang web.
- Giọng đọc chậm rãi, trang trọng và truyền cảm.

🗣️ **Lời đọc:**
> "Qua việc nghiên cứu và hoàn thành Bài tập thực hành số 2, bản thân em đã rút ra được những bài học kỹ thuật quan trọng:
> 
> - **Thứ nhất:** Nắm vững cơ chế trôi nổi của `float`. Hiểu rõ vị trí đặt thẻ ảnh trong cây DOM phải nằm trước các thẻ văn bản để văn bản có thể ôm quanh ảnh chính xác.
> - **Thứ hai:** Làm chủ cách phối hợp màu sắc tương phản cao giữa chữ trắng và nền vàng đồng, kết hợp nghệ thuật bóng đổ `text-shadow` và viền bán trong suốt `rgba` để nâng tầm mỹ thuật của trang web.
> - **Thứ ba:** Hiểu rõ hiện tượng sụp đổ chiều cao của phần tử cha (Float Collapse) trong trường hợp tất cả các phần tử con đều dùng float, và cách khắc phục bằng kỹ thuật `overflow: hidden` hoặc Clearfix khi cần thiết.
> 
> Video thuyết minh Bài tập số 2 của em đến đây là hoàn thành.
> Em xin chân thành cảm ơn quý thầy cô giáo cùng toàn thể các bạn sinh viên đã dành thời gian theo dõi. Kính mong nhận được những nhận xét, góp ý từ thầy cô để các bài tập tiếp theo của em đạt chất lượng cao hơn nữa.
> 
> Kính chúc thầy cô và các bạn thật nhiều sức khỏe và niềm vui! Xin hẹn gặp lại ở video thuyết minh Bài tập số 3! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 2 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
