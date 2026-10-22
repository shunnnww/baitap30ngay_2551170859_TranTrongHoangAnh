# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 3: THIẾT KẾ TRANG BÁO THẺ CARD VỊNH HẠ LONG VỚI LINEAR-GRADIENT, DROP CAP VÀ CẤU TRÚC BỐ CỤC HIỆN ĐẠI (HTML5 & CSS3)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file kịch bản này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với tốc độ vừa phải, tự tin, phát âm chuẩn các thuật ngữ CSS/HTML.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển tab hoặc bật công cụ để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng để bạn kiểm soát tiến độ không bị quá nhanh hay quá chậm.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | Mốc 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình.
- Trên màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai3.html`, `bai3.css` cùng file ảnh `vinh-ha-long.jpg`.
- Bật sẵn tab trình duyệt hiển thị giao diện trang Vịnh Hạ Long dạng thẻ card màu trắng nổi trên nền dải màu biển chuyển sắc xanh.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất hào hứng được tiếp tục gửi tới thầy cô và các bạn video thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 3: Thiết kế trang báo điện tử giới thiệu thắng cảnh 'Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới' với kỹ thuật chuyển sắc Linear-gradient, chữ hoa đầu đoạn Drop Cap và bố cục thẻ Card hiện đại bằng HTML5 và CSS3**.
> 
> Vịnh Hạ Long — với hàng ngàn hòn đảo đá vôi kỳ vĩ soi bóng xuống làn nước xanh ngọc bích — là một trong những niềm tự hào lớn nhất của du lịch Việt Nam. Để truyền tải trọn vẹn vẻ đẹp hùng vĩ nhưng cũng đầy thơ mộng đó lên không gian số, một lập trình viên web không chỉ cần viết đúng mã nguồn mà còn phải biết ứng dụng các kỹ thuật thiết kế đồ họa thị giác tiên tiến:
> 
> - Thứ nhất: Ứng dụng dải màu chuyển sắc `linear-gradient` từ màu xanh trời nhạt xuống xanh biển sâu thẳm, tạo không gian nền đại dương bao la sống động.
> - Thứ hai: Xây dựng bố cục dạng thẻ Card (`.khung-bai-viet`) màu trắng nổi bồng bềnh ở giữa màn hình nhờ thuộc tính đổ bóng khối hộp `box-shadow` và bo góc mềm mại `border-radius`.
> - Thứ ba: Khối trích dẫn mở đầu (Lead paragraph / Teaser) với phong cách băng rôn đảo màu (nền xanh thẫm, chữ trắng in nghiêng), tạo điểm nhấn dẫn dắt người đọc vào bài viết.
> - Thứ tư: Kỹ thuật Typography cổ điển đỉnh cao — **Drop Cap** (chữ hoa đầu đoạn phóng lớn) thông qua phần tử ảo `::first-letter` kết hợp `float: left`, mang lại dáng vẻ chuyên nghiệp tựa như một trang tạp chí lữ hành quốc tế.
> 
> Video của em hôm nay gồm 6 phân đoạn:
> 1. Lời mở đầu & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết cốt lõi về Gradients, Typography chuyên sâu, phần tử ảo `::first-letter` và cấu trúc dữ liệu bảng biểu/khối trong HTML.
> 3. Giải thích chi tiết từng dòng mã nguồn HTML `bai3.html`.
> 4. Giải thích chi tiết bảng định dạng CSS `bai3.css`.
> 5. Thực hành demo trình duyệt, soi F12 Developer Tools (Elements, Box Model, tính toán kích thước Drop Cap, kiểm tra responsive).
> 6. Tổng kết bài học kinh nghiệm, lưu ý quan trọng và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | Mốc 02:30 - 06:00)

🎬 **Thao tác:** 
- Rê chuột vào phần mở đầu file `bai3.html` và `bai3.css` trong VS Code.
- Bôi đen thuộc tính `linear-gradient`, `::first-letter` và `box-shadow`.

🗣️ **Lời đọc:**
> "Trước khi mổ xẻ mã nguồn, em xin tóm lược các kiến thức lý thuyết cốt lõi mà bài thực hành này áp dụng:
> 
> **1. Dải màu chuyển sắc CSS Linear-gradient:**
> Thay vì sử dụng một màu đơn sắc nhàm chán (`background-color`), CSS3 mang đến hàm `linear-gradient()`, cho phép chuyển đổi mượt mà giữa hai hay nhiều màu sắc theo một hướng xác định:
> - Cú pháp: `background: linear-gradient(hướng chuyển, màu_bắt_đầu, màu_kết_thúc);`
> - Trong bài này, chúng em sử dụng `to bottom, #7ec8e3, #0a5c8a`. Điểm bắt đầu phía trên là màu xanh lơ của mây trời Hạ Long, dần dần chuyển tiếp mượt mà xuống phía đáy thành màu xanh lam thẫm của lòng biển sâu. Kỹ thuật này giúp trang web có chiều sâu không gian mà hoàn toàn không cần tải thêm bất kỳ file ảnh nền nặng nề nào.
> 
> **2. Kỹ thuật Drop Cap với phần tử ảo `::first-letter`:**
> Trong nghệ thuật in ấn báo chí truyền thống, Drop Cap là ký tự cái đầu tiên của một chương hoặc một bài báo được phóng to chiếm độ cao của 2 đến 3 dòng chữ bên cạnh.
> - Trong CSS, chúng ta không cần phải can thiệp cắt vụn mã HTML bằng các thẻ `<span>` thủ công, mà sử dụng phần tử ảo (Pseudo-element) `::first-letter`.
> - Trình duyệt sẽ tự động bắt lấy đúng ký tự đầu tiên của đoạn văn. Khi ta kết hợp `font-size: 48px;`, màu sắc nổi bật và thuộc tính `float: left;`, con chữ hoa to lớn này sẽ trôi sang trái và các dòng chữ còn lại của đoạn văn sẽ tự động bao quanh nó một cách hoàn hảo.
> 
> **3. Bố cục thẻ Card và nguyên lý Box Model:**
> Thiết kế dạng Card (thẻ nội dung) là một trong những chuẩn mực giao diện người dùng (UI/UX) phổ biến nhất hiện nay. Một chiếc thẻ đạt chuẩn cần có:
> - Giới hạn chiều rộng tối đa (`max-width`) kết hợp `margin: 0 auto;` để tự động căn giữa.
> - Nền trắng tương phản trên nền tối.
> - Bo góc (`border-radius`) tạo cảm giác mềm mại, thân thiện.
> - Hiệu ứng bóng đổ (`box-shadow`) mô phỏng ánh sáng vật lý ngoài đời thực chiếu vào, tạo độ nổi 3D (Elevation).
> 
> **4. Cấu trúc tổ chức thông tin trên Web:**
> Đối với các bài viết giới thiệu địa danh, việc phối hợp giữa khối tóm tắt mở đầu (`.khoi-mo-dau`), ảnh trôi bên phải (`float: right`) và các đoạn văn bản thân bài tạo nên một dòng chảy thị giác (Visual Hierarchy) từ trên xuống dưới vô cùng tự nhiên và lôi cuốn người đọc."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai3.html`) (Thời lượng: ~4 phút 30 giây | Mốc 06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai3.html`.
- Bôi đen tuần tự các dòng từ dòng 1 đến dòng 30.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi vào mổ xẻ chi tiết 30 dòng mã nguồn HTML trong file `bai3.html`:
> 
> - **Phần khai báo đầu trang `<head>` từ dòng 1 đến dòng 8:**
>   - Dòng 1: `<!DOCTYPE html>` định chuẩn HTML5.
>   - Dòng 2: Khai báo `<html lang="vi">`. Ở đây em thiết lập rõ mã ngôn ngữ `vi` cho tiếng Việt, chuẩn mực cho một trang web giới thiệu danh lam thắng cảnh Việt Nam.
>   - Dòng 4: `<meta charset="UTF-8">` bảo đảm mã hóa ký tự chuẩn xác.
>   - Dòng 5: Thẻ viewport giúp tương thích đa màn hình.
>   - Dòng 6: Thẻ `<title>Bài 3 - Trang giới thiệu Vịnh Hạ Long</title>` hiển thị tiêu đề tab.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai3.css">` liên kết với bảng định dạng kiểu dáng.
> 
> - **Đi sâu vào phần nội dung `<body>` từ dòng 9 đến dòng 29:**
>   - Dòng 11: Toàn bộ bài báo được đóng gói trong thẻ container chính: `<div class="khung-bai-viet">`. Thẻ này sẽ được CSS tạo hình thành một chiếc thẻ card màu trắng trang nhã, nổi bật ở giữa nền biển xanh.
>   
>   - Dòng 12: Thẻ tiêu đề chính cấp 1:
>     `<h1 class="tieu-de">Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới</h1>`.
>     Tiêu đề thể hiện tên kỳ quan danh tiếng, được đặt ở vị trí trang trọng nhất trên đỉnh của tấm thẻ.
> 
>   - Dòng 14 đến dòng 16: **Khối mở đầu dẫn nhập bài viết**:
>     `<div class="khoi-mo-dau">Vịnh Hạ Long thuộc tỉnh Quảng Ninh, nổi tiếng với gần 2.000 hòn đảo đá vôi lớn nhỏ, được UNESCO công nhận là Di sản thiên nhiên thế giới.</div>`.
>     Khối này đóng vai trò như một dòng tóm lược (Sapeau) thường thấy trên các trang báo điện tử lớn như VnExpress hay Tuổi Trẻ, giúp người đọc nắm bắt ngay những số liệu cốt lõi: tỉnh Quảng Ninh, 2.000 hòn đảo, và danh hiệu Di sản thế giới UNESCO.
> 
>   - Dòng 18: Thẻ hình ảnh minh họa cảnh sắc kỳ quan:
>     `<img src="../Kho-anh/Bai03/vinh-ha-long.jpg" alt="Vịnh Hạ Long" class="anh-minh-hoa">`.
>     Đường dẫn ảnh trỏ chuẩn xác vào thư mục kho ảnh `Kho-anh/Bai03/`. Tương tự bài trước, thẻ ảnh được đặt ngay trước các đoạn văn bản để chuẩn bị cho kỹ thuật `float: right`.
> 
>   - Dòng 20 đến dòng 22: **Đoạn văn thân bài thứ nhất**:
>     `<p class="doan-van">Vịnh trải rộng trên vùng biển Đông Bắc, nơi những đảo đá muôn hình dáng nổi trên mặt nước xanh ngọc. Du khách có thể ngủ đêm trên du thuyền, chèo kayak xuyên hang, ngắm bình minh từ đảo Titop hay khám phá hang Sửng Sốt huyền ảo.</p>`.
>     Đoạn văn này sẽ được áp dụng phần tử ảo `::first-letter`, biến chữ 'V' đầu tiên thành một ký tự Drop Cap hoa mỹ phóng lớn.
> 
>   - Dòng 24 đến dòng 26: **Đoạn văn thân bài thứ hai**:
>     `<p class="doan-van">Hải sản Hạ Long phong phú, con người thân thiện, cảnh sắc bốn mùa đều đẹp — đây là điểm đến không thể bỏ lỡ của du khách trong và ngoài nước.</p>`.
>     Đoạn văn này tiếp tục có chữ 'H' đầu tiên được tạo Drop Cap đồng bộ, khép lại bài viết bằng lời mời gọi du lịch ấm áp.
> 
>   - Dòng 27 đóng thẻ `</div>` kết thúc khung bài viết.
> 
> Mã nguồn HTML rất sáng sủa, phân tầng rõ rệt giữa Tiêu đề — Khối dẫn nhập — Hình ảnh — Thân bài văn bản."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai3.css`) (Thời lượng: ~4 phút 30 giây | Mốc 10:30 - 15:00)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai3.css`.
- Rê chuột và bôi đen từng khối: `body`, `.khung-bai-viet`, `.tieu-de`, `.khoi-mo-dau`, `.anh-minh-hoa`, `.doan-van`, và `.doan-van::first-letter`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta cùng phân tích tệp định dạng kiểu dáng `bai3.css` gồm 69 dòng code được chau chuốt kỹ lưỡng:
> 
> **1. Định dạng nền toàn trang `body` (từ dòng 5 đến dòng 12):**
> - `background: linear-gradient(to bottom, #7ec8e3, #0a5c8a);`: Đây là điểm sáng thị giác tuyệt vời. Dải màu chuyển tiếp từ sắc xanh lơ dịu mát `#7ec8e3` ở đỉnh màn hình xuống màu xanh đại dương thẫm `#0a5c8a` ở đáy trang, gợi tả chân thực cảnh sắc biển trời Hạ Long.
> - `font-family: 'Times New Roman', Times, serif;`: Em sử dụng font chữ có chân (Serif) cổ điển, mang lại tính học thuật, sang trọng và trang nhã cho bài viết kỳ quan.
> - `min-height: 100vh;`: Đảm bảo chiều cao tối thiểu của trang luôn phủ kín 100% chiều cao màn hình trình duyệt, không bao giờ bị đứt quãng màu nền.
> - `margin: 0; padding: 40px 15px; box-sizing: border-box;`: Xóa lề mặc định và tạo khoảng đệm trên dưới 40px, giúp khung bài viết nằm cách xa mép trên dưới của màn hình một cách thanh lịch.
> 
> **2. Định dạng khung thẻ Card `.khung-bai-viet` (từ dòng 14 đến dòng 22):**
> - `max-width: 780px; margin: 0 auto;`: Khống chế chiều rộng tối đa 780px và tự động căn giữa tâm màn hình.
> - `background-color: #ffffff;`: Nền trắng tinh khôi, tạo độ tương phản cực kỳ nổi bật trên nền biển xanh.
> - `border-radius: 8px;`: Bo tròn nhẹ 4 góc của thẻ card, mang lại cảm giác hiện đại và thân thiện.
> - `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);`: Đổ bóng mờ 15px với độ đen 15%, tạo cảm giác thẻ card nổi nhẹ lên trên bề mặt nước biển.
> - `overflow: hidden;`: Đóng vai trò như một kỹ thuật Clearfix nội tại, giúp bao trọn bức ảnh đang trôi bên trong mà không làm vỡ khung cha.
> 
> **3. Tiêu đề `.tieu-de` và Khối mở đầu `.khoi-mo-dau` (từ dòng 24 đến dòng 42):**
> - Tiêu đề `.tieu-de`: Dùng mã màu xanh nước biển sâu `#0b3d5c`, font 26px in đậm, căn giữa `text-align: center`.
> - Khối mở đầu `.khoi-mo-dau`: Sử dụng nền màu xanh đậm `#0b3d5c`, chữ trắng, in nghiêng `font-style: italic;`, đệm `padding: 16px 20px;` và bo góc 8px. Khối này tạo ra một sự tương phản màu sắc mạnh mẽ, đóng vai trò như chiếc mỏ neo thị giác thu hút sự tập trung của người đọc ngay sau tiêu đề.
> 
> **4. Kỹ thuật trôi ảnh `.anh-minh-hoa` (từ dòng 44 đến dòng 50):**
> - `float: right; width: 290px;`: Ảnh trôi sang phải với kích thước 290px.
> - `border-radius: 8px;`: Bức ảnh cũng được bo tròn 4 góc 8px, đồng bộ thẩm mỹ với khung bài viết và khối mở đầu.
> - `margin-left: 20px; margin-bottom: 12px;`: Đẩy chữ cách xa ảnh 20px bên trái và 12px bên dưới.
> 
> **5. Đoạn văn `.doan-van` và nghệ thuật Drop Cap `::first-letter` (từ dòng 52 đến dòng 69):**
> - Thẻ `.doan-van` căn đều hai lề `text-align: justify;`, cỡ chữ 16px, khoảng cách dòng `line-height: 1.7` vô cùng thoáng mắt.
> - Khối mã đặc sắc `.doan-van::first-letter`:
>   + `font-size: 48px;`: Phóng to con chữ cái đầu đoạn lên gấp 3 lần bình thường (48px).
>   + `font-weight: bold;`: In đậm nét chữ.
>   + `color: #0b3d5c;`: Tô màu xanh thẫm đồng bộ với tiêu đề chính.
>   + `float: left;`: Kỹ thuật mấu chốt để con chữ hoa to lớn này trôi sang bên trái, cho phép 2 dòng chữ liền kề chảy dọc theo cạnh phải của nó.
>   + `line-height: 1; margin-right: 6px; margin-top: 2px;`: Căn gióng đường đỉnh của chữ cái ngang bằng với đường đỉnh của dòng văn bản đầu tiên."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~4 phút | Mốc 15:00 - 19:00)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị trang `bai3.html`.
- Bấm phím `F12` mở Developer Tools.
- Lần lượt thực hiện các thao tác:
  1. Trình diễn toàn cảnh dải màu nền `linear-gradient` và thẻ bài viết nổi bật.
  2. Bật Elements tab, soi vào phần tử ảo `::first-letter`. Trỏ chuột xem kích thước 48px của chữ cái 'V' và chữ cái 'H'.
  3. Soi khối mở đầu `.khoi-mo-dau`, kiểm tra padding và border-radius.
  4. Bật tab Console để kiểm tra tính toàn vẹn (không có lỗi kết nối ảnh).
  5. Bật Device Toolbar (`Ctrl + Shift + M`), kiểm tra trên màn hình điện thoại Pixel 7 / Galaxy S20 (412px) và máy tính bảng iPad Air (820px).

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn quan sát thực tế kết quả hiển thị trên trình duyệt!
> 
> **1. Cảm quan thẩm mỹ ban đầu:**
> - Toàn bộ giao diện hiện lên vô cùng ấn tượng. Dải màu nền chuyển từ xanh ngọc nhạt xuống xanh thẳm của đại dương tạo cảm giác mát mẻ, phóng khoáng.
> - Chiếc thẻ bài viết màu trắng với bóng đổ `box-shadow` nổi hẳn lên trên mặt biển, tạo chiều sâu 3D chân thực.
> - Tiêu đề 'Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới' trang trọng, theo sau là dải tóm tắt nền xanh chữ trắng in nghiêng rất chuyên nghiệp.
> - Bức ảnh du thuyền giữa các vách đá vôi Vịnh Hạ Long nằm trôi duyên dáng bên góc phải với các góc bo tròn mềm mại.
> - Đặc biệt nhất là hai ký tự Drop Cap: chữ **V** trong từ 'Vịnh' và chữ **H** trong từ 'Hải sản' được phóng to 48px uyển chuyển, làm cho bài viết trông như một chuyên mục đặc sắc trên tạp chí National Geographic!
> 
> **2. Mổ xẻ chi tiết bằng F12 Developer Tools:**
> - *[Thao tác: Bấm F12, chọn tab Elements, mở rộng thẻ `<p class="doan-van">`]*
> - Thầy cô có thể thấy trên tab Elements, trình duyệt hiển thị rõ một phần tử ảo mang tên `::first-letter` gắn ngay đầu thẻ `<p>`.
> - Trong ô Styles bên cạnh, toàn bộ các thuộc tính `font-size: 48px`, `float: left`, `color: #0b3d5c` đều được áp dụng chính xác.
> - Khi em rê chuột vào sơ đồ **Box Model**, ta thấy rõ: Khung bài viết có `padding: 30px` bao quanh, tạo khoảng trống thông thoáng tuyệt đối cho mắt nhìn.
> 
> **3. Kiểm tra Console và tính năng Responsive:**
> - *[Thao tác: Chuyển tab Console]*
> - Console hoàn toàn sạch sẽ, mã trạng thái HTTP 200 trả về chuẩn xác cho file ảnh và stylesheet.
> - *[Thao tác: Nhấn `Ctrl + Shift + M` chuyển sang Device Toolbar]*
> - Khi em thu nhỏ cửa sổ về kích thước màn hình điện thoại (375px đến 414px): Nhờ khai báo `max-width: 780px; width: 100%;` kết hợp `padding: 15px` ở body, thẻ card tự động co dãn mượt mà vừa vặn với chiều ngang màn hình di động mà không hề xảy ra hiện tượng vỡ giao diện hay xuất hiện thanh cuộn ngang."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | Mốc 19:00 - 20:30)

🎬 **Thao tác:** 
- Chuyển màn hình về lại Visual Studio Code hoặc giữ góc nhìn đẹp nhất trên trình duyệt.
- Giọng nói trang trọng, tự tin và truyền cảm hứng.

🗣️ **Lời đọc:**
> "Qua việc hoàn thành Bài tập thực hành số 3, em đã lĩnh hội được rất nhiều bài học thiết kế và lập trình quý giá:
> 
> - **Thứ nhất:** Làm chủ sức mạnh của CSS `linear-gradient` để tạo ra những không gian nền sống động, hiện đại mà tiết kiệm tối đa dung lượng tải trang so với việc dùng hình ảnh bitmap truyền thống.
> - **Thứ hai:** Thành thạo kỹ thuật Typography nâng cao với phần tử ảo `::first-letter`, hiểu rõ cách phối hợp giữa `font-size`, `float: left` và `line-height` để con chữ Drop Cap ăn khớp hoàn hảo với các dòng văn bản xung quanh.
> - **Thứ ba:** Nắm vững tư duy thiết kế Card UI — một xu hướng thiết kế giao diện thịnh hành, giúp phân tách các khối thông tin độc lập, mạch lạc và tối ưu trên mọi kích thước màn hình.
> 
> Video thuyết minh Bài tập số 3 của em xin được tạm dừng tại đây.
> Em xin chân thành cảm ơn quý thầy cô giáo cùng các bạn đã quan tâm theo dõi. Kính chúc thầy cô luôn dồi dào sức khỏe và niềm vui trong sự nghiệp giảng dạy! Xin hẹn gặp lại quý thầy cô và các bạn ở video Bài tập số 4 tiếp theo! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 3 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
