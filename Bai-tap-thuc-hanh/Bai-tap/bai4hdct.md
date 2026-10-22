# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 4: THIẾT KẾ TRANG GIỚI THIỆU THÀNH PHỐ ĐÀ NẴNG VỚI HERO IMAGE, THANH TIÊU ĐỀ PHỤ VÀ NGHỆ THUẬT TYPOGRAPHY (HTML5 & CSS3)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file kịch bản này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với tốc độ vừa phải, tự tin, rành mạch và truyền cảm.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển tab hoặc bật công cụ để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng để bạn kiểm soát tiến độ không bị quá nhanh hay quá chậm.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | Mốc 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình.
- Trên màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai4.html`, `bai4.css` cùng file ảnh `da-nang.jpg`.
- Bật sẵn tab trình duyệt hiển thị giao diện trang giới thiệu Đà Nẵng với ảnh banner toàn cảnh Cầu Rồng và thẻ card màu trắng hiện đại.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vui mừng được tiếp tục đồng hành cùng thầy cô và các bạn trong video thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 4: Thiết kế trang thông tin quảng bá 'Đà Nẵng – Thành phố đáng sống' với kỹ thuật hình ảnh biểu ngữ Hero Image, thanh ruy-băng tiêu đề phụ và nghệ thuật tương phản màu sắc Drop Cap bằng HTML5 và CSS3**.
> 
> Đà Nẵng từ lâu đã được mệnh danh là thành phố đáng sống nhất Việt Nam, nơi giao thoa tuyệt vời giữa núi non hùng vĩ, biển cả bao la, những cây cầu kiến trúc độc nhất vô nhị cùng nền ẩm thực miền Trung đậm đà khó quên. Để thể hiện được nhịp sống năng động, trẻ trung và hiện đại của đô thị này, thiết kế giao diện web cần phải áp dụng các chuẩn mực thị giác mới mẻ:
> 
> - Thứ nhất: Cấu trúc tiêu đề chính hai tầng (`ĐÀ NẴNG` ngắt dòng xuống `THÀNH PHỐ ĐÁNG SỐNG`) với thuộc tính chuyển đổi chữ hoa tự động `text-transform: uppercase` và tông màu xanh dương đậm `#1565C0` — sắc màu tượng trưng cho biển trời Đà Nẵng.
> - Thứ hai: Khai thác bức ảnh toàn cảnh Hero Image tràn rộng `width: 100%`, kết hợp `display: block` và `border-radius: 8px` để làm tâm điểm thị giác cho toàn trang.
> - Thứ ba: Xây dựng thanh tiêu đề phụ ruy-băng `.thanh-tieu-de-phu` với nền xanh chữ trắng, căn lề phải độc đáo (`text-align: right`), tạo nên điểm ngắt phân đoạn cá tính giữa hai khối nội dung.
> - Thứ tư: Kỹ thuật Typography nhấn mạnh nội dung bằng thẻ `<strong>` dành cho các địa danh tiêu biểu (Cầu Rồng, Cầu Sông Hàn, Bà Nà Hills, Bán đảo Sơn Trà, mì Quảng...), kết hợp với ký tự Drop Cap đầu đoạn mang sắc đỏ rực rỡ `#C62828`, tạo nên sự đối kháng màu sắc nghệ thuật Xanh lam — Đỏ vô cùng ấn tượng.
> 
> Lộ trình video hôm nay gồm có 6 phần:
> 1. Lời mở đầu & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết cốt lõi về bố cục Banner Hero Image, Typography tương phản và nguyên lý cấu trúc form tương tác trong web.
> 3. Thuyết minh chi tiết từng dòng mã nguồn HTML `bai4.html`.
> 4. Thuyết minh chi tiết bảng định dạng kiểu dáng CSS `bai4.css`.
> 5. Thực hành demo trực tiếp trên trình duyệt, soi F12 Developer Tools (Elements, Box Model, tính co dãn của Hero Banner).
> 6. Tổng kết bài học kinh nghiệm, lưu ý kỹ thuật và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bắt đầu bước vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | Mốc 02:30 - 06:00)

🎬 **Thao tác:** 
- Rê chuột vào phần mở đầu file `bai4.html` và `bai4.css` trong VS Code.
- Bôi đen thuộc tính `width: 100%`, `text-transform: uppercase`, và thẻ `<strong>`.

🗣️ **Lời đọc:**
> "Trước khi đi vào phân tích từng dòng code, em xin phép tóm lược các kiến thức lý thuyết nền tảng mà bài thực hành này áp dụng:
> 
> **1. Kỹ thuật Hero Image trong thiết kế Web hiện đại:**
> 'Hero Image' là thuật ngữ chỉ một bức ảnh lớn, chất lượng cao, được đặt ở vị trí trung tâm nổi bật nhất phía trên cùng của một trang web nhằm thu hút ánh nhìn đầu tiên của người dùng.
> - Trong CSS, để bức ảnh tự động co dãn linh hoạt vừa khít với chiều ngang của thẻ cha mà không bao giờ bị méo tỷ lệ hay tràn viền, chúng ta áp dụng cặp thuộc tính: `width: 100%;` kết hợp `display: block;`.
> - Thuộc tính `display: block` còn giúp loại bỏ khoảng hở thừa vài pixel ở đáy bức ảnh do trình duyệt mặc định coi thẻ `<img>` là phần tử nội tuyến (inline element).
> 
> **2. Thuộc tính biến đổi văn bản Text-transform:**
> Thay vì người lập trình phải gõ thủ công toàn bộ chữ in hoa trong mã HTML, CSS cung cấp thuộc tính `text-transform: uppercase`. Thuộc tính này tự động chuyển đổi toàn bộ ký tự thành chữ hoa khi hiển thị trên màn hình. Điều này giúp mã HTML giữ nguyên tính tự nhiên của văn bản, trong khi phần trình diễn giao diện hoàn toàn do CSS kiểm soát.
> 
> **3. Ngữ nghĩa của thẻ nhấn mạnh `<strong>` và nghệ thuật tương phản màu sắc:**
> - Trong HTML5, thẻ `<strong>` được chuẩn hóa mang ý nghĩa ngữ nghĩa (Semantic HTML): nội dung bên trong có tầm quan trọng cao, được các công cụ tìm kiếm đánh giá trọng số từ khóa cao hơn và các trình đọc màn hình sẽ nhấn mạnh âm lượng khi phát âm.
> - Về mặt thị giác, việc kết hợp giữa màu chủ đạo xanh lam `#1565C0` (tông lạnh, thanh bình) với các ký tự Drop Cap màu đỏ rực `#C62828` (tông nóng, nhiệt huyết) dựa trên lý thuyết bánh xe màu sắc (Color Wheel), tạo ra hiệu ứng thị giác tương phản bổ sung (Complementary Contrast) cực kỳ hút mắt.
> 
> **4. Cấu trúc trang giới thiệu gắn liền với khả năng mở rộng biểu mẫu (Form Integration):**
> Trong các ứng dụng web du lịch thực tế, bên dưới các bài viết giới thiệu địa danh thường sẽ tích hợp một biểu mẫu liên hệ hoặc đặt tour (Booking Form). Một biểu mẫu chuẩn trong HTML được bao bọc trong thẻ `<form>`, sử dụng thẻ `<label>` gắn với các ô nhập liệu bằng thuộc tính `for` và `id`, hỗ trợ nhiều kiểu nhập liệu như `type="text"` cho họ tên, `type="email"` cho thư điện tử, `type="tel"` cho số điện thoại, `<select>` cho lựa chọn điểm đến và `<textarea>` cho lời nhắn của du khách. Việc nắm vững cấu trúc bài viết hôm nay là tiền đề vững chắc để chúng ta ghép nối các thành phần biểu mẫu tương tác vào trang web."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai4.html`) (Thời lượng: ~4 phút 30 giây | Mốc 06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai4.html`.
- Bôi đen tuần tự các dòng từ dòng 1 đến dòng 32.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi vào mổ xẻ chi tiết 32 dòng mã nguồn HTML trong file `bai4.html`:
> 
> - **Phần khai báo tiêu chuẩn `<head>` từ dòng 1 đến dòng 8:**
>   - Dòng 1: Khai báo `<!DOCTYPE html>`.
>   - Dòng 2: `<html lang="vi">` quy định trang viết bằng tiếng Việt.
>   - Dòng 4: `<meta charset="UTF-8">` bảo đảm hiển thị các ký tự tiếng Việt có dấu hoàn hảo như 'Đà Nẵng', 'Sơn Trà', 'Cầu Sông Hàn'.
>   - Dòng 5: Thẻ viewport thích ứng co dãn trên điện thoại di động.
>   - Dòng 6: Thẻ `<title>Bài 4 - Trang giới thiệu thành phố Đà Nẵng</title>` hiển thị tiêu đề trên thanh tab trình duyệt.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai4.css">` liên kết đến bảng định kiểu ngoài.
> 
> - **Tiếp theo là phần thân trang `<body>` từ dòng 9 đến dòng 31:**
>   - Dòng 11: Khối bao bọc chính `<div class="khung-bai-viet">` đóng vai trò là một tấm thẻ card trung tâm sang trọng.
>   
>   - Dòng 12 đến dòng 15: Thẻ tiêu đề chính cấp 1:
>     ```html
>     <h1 class="tieu-de">
>         ĐÀ NẴNG<br>
>         THÀNH PHỐ ĐÁNG SỐNG
>     </h1>
>     ```
>     Tiêu đề được chia làm hai dòng nhờ thẻ ngắt dòng `<br>`, tạo nên cấu trúc phân cấp thị giác nhịp nhàng: tên thành phố 'ĐÀ NẴNG' ở dòng trên và danh hiệu 'THÀNH PHỐ ĐÁNG SỐNG' ở dòng dưới.
> 
>   - Dòng 17: Thẻ hình ảnh Hero Banner đại diện:
>     `<img src="../Kho-anh/Bai04/da-nang.jpg" alt="Thành phố Đà Nẵng" class="anh-thanh-pho">`.
>     Bức ảnh toàn cảnh Đà Nẵng với Cầu Rồng bắc qua sông Hàn được đặt ngay dưới tiêu đề, trải rộng toàn bộ bề ngang của bài viết.
> 
>   - Dòng 19 đến dòng 21: **Đoạn văn giới thiệu địa lý và thắng cảnh**:
>     `<p class="doan-van">Đà Nẵng nằm bên bờ sông Hàn, nổi bật với những cây cầu độc đáo như <strong>Cầu Rồng</strong> phun lửa và nước, <strong>Cầu Sông Hàn</strong> quay giữa đêm. Thành phố còn có <strong>Bà Nà Hills</strong> trên núi cao và <strong>bán đảo Sơn Trà</strong> xanh mát.</p>`.
>     Trong đoạn văn này, các địa danh du lịch nổi tiếng đều được trân trọng đặt trong thẻ `<strong>` để tạo điểm nhấn in đậm nổi bật khi đọc lướt.
> 
>   - Dòng 23: **Thanh tiêu đề phụ phân đoạn**:
>     `<div class="thanh-tieu-de-phu">Cầu Rồng — biểu tượng sông Hàn</div>`.
>     Thẻ `div` này được đặt độc lập, hoạt động như một dải ruy-băng phân cách dẫn dắt người đọc bước sang tiểu mục tiếp theo.
> 
>   - Dòng 25 đến dòng 27: **Đoạn văn về đời sống văn hóa và ẩm thực**:
>     `<p class="doan-van">Mỗi tối cuối tuần, người dân và du khách lại tụ tập hai bên bờ sông để xem <strong>Cầu Rồng</strong> phun lửa. Ẩm thực miền Trung với <strong>mì Quảng</strong>, <strong>bánh xèo</strong>, <strong>hải sản tươi ngon</strong> càng làm nên sức hút của thành phố đáng sống nhất Việt Nam.</p>`.
>     Đoạn văn khép lại bằng việc liệt kê các món ngon đặc sản trong thẻ `<strong>`, tạo cảm giác thân thiện, hiếu khách.
> 
>   - Dòng 28 đóng thẻ `</div>` kết thúc khung bài viết.
> 
> Cấu trúc HTML được sắp xếp lớp lang, có nhịp điệu từ Tiêu đề lớn -> Ảnh biểu ngữ -> Thân bài 1 -> Băng rôn tiêu đề phụ -> Thân bài 2."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai4.css`) (Thời lượng: ~4 phút 30 giây | Mốc 10:30 - 15:00)

🎬 **Thao tác:** 
- Chuyển tab sang file `bai4.css`.
- Rê chuột qua 69 dòng CSS, làm nổi bật từng khối quy tắc: `body`, `.khung-bai-viet`, `.tieu-de`, `.anh-thanh-pho`, `.doan-van`, `.doan-van::first-letter`, và `.thanh-tieu-de-phu`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích chi tiết bảng định dạng kiểu dáng `bai4.css`. Tệp CSS này mang đến diện mạo tươi sáng, thanh lịch và chuẩn phong cách cổng thông tin du lịch:
> 
> **1. Định dạng thẻ toàn trang `body` (từ dòng 5 đến dòng 10):**
> - `background-color: #f4f8fb;`: Một sắc xanh lam khói cực kỳ nhạt, tạo cảm giác thanh mát như bầu không khí trong lành của thành phố biển.
> - `font-family: Arial, sans-serif;`: Sử dụng font chữ không chân (Sans-serif) hiện đại, nét chữ tròn trịa, rõ ràng, mang lại hơi thở trẻ trung, năng động cho trang web.
> - `margin: 0; padding: 30px 15px;`: Xóa lề mặc định và tạo khoảng đệm trên dưới 30px, hai bên 15px để khung bài viết không dính sát viền màn hình khi hiển thị trên điện thoại.
> 
> **2. Khung thẻ Card `.khung-bai-viet` (từ dòng 12 đến dòng 20):**
> - `max-width: 800px; margin: 0 auto;`: Giới hạn chiều rộng tối đa 800px và tự động căn giữa.
> - `background: #ffffff;`: Nền trắng tinh khiết giúp các đoạn chữ và hình ảnh nổi bật rõ nét.
> - `border-radius: 8px;`: Bo tròn nhẹ 4 góc tạo vẻ ngoài hiện đại.
> - `padding: 30px;`: Khoảng đệm bên trong rộng rãi 30 pixel, tạo khoảng cách cách biệt giữa mép thẻ và nội dung bên trong.
> - `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);`: Đổ bóng nhẹ nhàng 12px với độ đen 8%, tạo hiệu ứng nổi nhẹ trên nền xanh khói.
> - `overflow: hidden;`: Kiểm soát và bao bọc toàn bộ nội dung bên trong.
> 
> **3. Tiêu đề chính `.tieu-de` (từ dòng 22 đến dòng 31):**
> - `color: #1565C0;`: Màu xanh dương đậm rực rỡ, biểu trưng cho màu xanh của biển Mỹ Khê và sông Hàn.
> - `text-align: center;`: Căn chữ vào chính giữa.
> - `text-transform: uppercase;`: Tự động in hoa toàn bộ các ký tự.
> - `font-size: 26px; font-weight: bold; line-height: 1.4;`: Cỡ chữ 26px in đậm với khoảng cách dòng 1.4, giúp hai câu tiêu đề không bị dính sát vào nhau.
> 
> **4. Bức ảnh Hero Banner `.anh-thanh-pho` (từ dòng 33 đến dòng 38):**
> - `width: 100%;`: Bức ảnh tự động kéo giãn phủ kín 100% chiều rộng của khung thẻ bài viết.
> - `border-radius: 8px;`: Bo góc 8 pixel đồng bộ với khung thẻ bài viết.
> - `display: block;`: Chuyển thẻ ảnh sang dạng khối hộp, triệt tiêu hoàn toàn khoảng hở đáy mặc định.
> - `margin-bottom: 20px;`: Tạo khoảng cách 20px với đoạn văn phía dưới.
> 
> **5. Đoạn văn `.doan-van` và Drop Cap đỏ nổi bật `.doan-van::first-letter` (từ dòng 40 đến dòng 57):**
> - Thẻ `.doan-van` căn đều hai bên `text-align: justify;`, cỡ chữ 16px, `line-height: 1.7`, màu chữ xám đậm `#333333` dịu mắt hơn màu đen nguyên thủy `#000000`.
> - Khối Drop Cap `.doan-van::first-letter`:
>   + `font-size: 48px; font-weight: bold; float: left; line-height: 1; margin-right: 6px; margin-top: 2px;`.
>   + Điểm đặc sắc nhất: `color: #C62828;` — chữ Drop Cap được tô màu đỏ tươi. Sắc đỏ này tạo nên sự đối lập mạnh mẽ với màu xanh lam `#1565C0` của tiêu đề, làm bừng sáng toàn bộ đoạn văn.
> 
> **6. Thanh tiêu đề phụ ruy-băng `.thanh-tieu-de-phu` (từ dòng 59 đến dòng 68):**
> - `background-color: #1565C0; color: #FFFFFF;`: Nền xanh dương chữ trắng.
> - `text-align: right;`: Đây là một phong cách dàn trang rất độc đáo — căn toàn bộ dòng chữ về phía lề phải, tạo sự phá cách so với cách căn lề trái truyền thống.
> - `font-weight: bold; font-size: 15px; padding: 10px 16px; border-radius: 4px;`: Tạo hình một dải ruy-băng sắc sảo, gọn gàng."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~4 phút | Mốc 15:00 - 19:00)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị trang `bai4.html`.
- Bấm phím `F12` mở Developer Tools.
- Lần lượt thực hiện các thao tác:
  1. Trình diễn toàn bộ giao diện trang web trên trình duyệt.
  2. Bật tab Elements, trỏ chuột vào bức ảnh `.anh-thanh-pho`, kiểm tra thuộc tính `width: 100%` và `display: block`.
  3. Soi vào thanh `.thanh-tieu-de-phu`, kiểm tra thuộc tính `text-align: right` và màu nền.
  4. Trỏ vào các từ khóa trong thẻ `<strong>` và chữ Drop Cap màu đỏ 'Đ' và 'M'.
  5. Bật tab Console kiểm tra độ trong sạch.
  6. Bật Device Toolbar (`Ctrl + Shift + M`), kiểm tra độ co dãn tự nhiên của Hero Banner từ màn hình Desktop (1200px) xuống Tablet (768px) và Smartphone (375px).

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn quan sát thực tế kết quả hiển thị trên trình duyệt Google Chrome!
> 
> **1. Quan sát giao diện thực tế:**
> - Toàn bộ trang web toát lên vẻ đẹp hiện đại, tươi sáng của thành phố biển.
> - Khung bài viết màu trắng nổi bật trên nền xanh lam khói nhẹ `#f4f8fb`.
> - Tiêu đề lớn 'ĐÀ NẴNG / THÀNH PHỐ ĐÁNG SỐNG' màu xanh biển in hoa toàn bộ rất đĩnh đạc và uy nghi.
> - Ngay dưới tiêu đề là bức ảnh biểu ngữ Cầu Rồng trải rộng trọn vẹn 100% chiều ngang thẻ card với 4 góc bo tròn vô cùng mềm mại.
> - Trong hai đoạn văn bản, hai con chữ Drop Cap — chữ **Đ** trong từ 'Đà Nẵng' và chữ **M** trong từ 'Mỗi tối' — được phóng lớn 48px với màu đỏ rực rỡ, đối lập hoàn hảo với màu xanh của tiêu đề.
> - Các cụm từ địa danh như **Cầu Rồng**, **Cầu Sông Hàn**, **Bà Nà Hills**, **mì Quảng** in đậm rõ ràng, giúp người đọc nắm bắt thông tin chỉ trong vòng 3 giây quét mắt.
> - Thanh ruy-băng 'Cầu Rồng — biểu tượng sông Hàn' căn lề phải tạo điểm nhấn ngắt quãng thị giác vô cùng duyên dáng.
> 
> **2. Soi kiểm tra F12 Developer Tools:**
> - *[Thao tác: Bấm F12, chọn tab Elements, click chọn bức ảnh `.anh-thanh-pho`]*
> - Thầy cô có thể thấy trên tab Elements, bức ảnh nhận trọn vẹn `width: 100%`. Khi em di chuyển thanh chia cửa sổ, ảnh tự động co dãn theo đúng tỷ lệ khung hình mà không bao giờ bị méo mó.
> - Rê chuột vào sơ đồ **Box Model**:
>   + Khung bài viết có `padding: 30px` ở cả 4 phía.
>   + Lớp đổ bóng `box-shadow: 0 4px 12px rgba(0,0,0,0.08)` hiển thị đầy đủ trong bảng Computed.
> 
> **3. Kiểm tra Console và Responsive:**
> - *[Thao tác: Chuyển tab Console]*
> - Console hoàn toàn không có bất kỳ dòng cảnh báo hay lỗi đỏ nào.
> - *[Thao tác: Bật Device Toolbar `Ctrl + Shift + M`]*
> - Em thử chuyển đổi giữa iPhone 14 Pro Max (430px) và iPad Mini (768px): Toàn bộ bức ảnh banner, dải ruy-băng và các đoạn chữ đều tự động co dãn nhịp nhàng, chứng minh tính linh hoạt và tính sẵn sàng responsive tuyệt vời của mã nguồn."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | Mốc 19:00 - 20:30)

🎬 **Thao tác:** 
- Chuyển màn hình về lại Visual Studio Code hoặc giữ khung hình toàn cảnh trang web.
- Giọng đọc trang trọng, truyền cảm và tự tin.

🗣️ **Lời đọc:**
> "Qua quá trình hoàn thiện Bài tập thực hành số 4, em đã đúc kết được nhiều bài học quý báu về tư duy thiết kế web:
> 
> - **Thứ nhất:** Nắm vững kỹ thuật xử lý hình ảnh biểu ngữ tràn rộng (Hero Banner) với `width: 100%` và `display: block` để tối ưu bố cục và triệt tiêu khoảng hở đáy của thẻ ảnh.
> - **Thứ hai:** Hiểu rõ nghệ thuật phối màu tương phản giữa hai gam màu đối kháng: màu xanh đại dương `#1565C0` cho các phần tử dẫn hướng và màu đỏ rực `#C62828` cho các ký tự Drop Cap điểm nhấn.
> - **Thứ ba:** Ứng dụng các thẻ ngữ nghĩa `<strong>` để vừa tăng cường tính tiếp cận (Accessibility), vừa tối ưu hóa chỉ mục tìm kiếm (SEO) cho các từ khóa quan trọng của bài viết.
> 
> Phần thuyết minh chi tiết cho Bài tập số 4 của em đến đây xin được phép khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo cùng toàn thể các bạn đã chú ý lắng nghe và theo dõi video. Kính chúc quý thầy cô luôn dồi dào sức khỏe và gặt hái nhiều thành công trong sự nghiệp trồng người! Hẹn gặp lại mọi người trong video thuyết minh Bài tập số 5 tiếp theo! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 4 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
