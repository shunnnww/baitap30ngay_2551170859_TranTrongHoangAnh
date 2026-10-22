# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 14: TRANG 6 KỲ QUAN THIÊN NHIÊN VIỆT NAM — KẾT HỢP CSS GRID, FLEXBOX VÀ THUỘC TÍNH ORDER TRONG HTML5

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (`Windows + Phím mũi tên trái` cho VS Code; `Windows + Phím mũi tên phải` cho Chrome).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói với âm lượng vang, truyền cảm, làm chủ nhịp điệu bài giảng, nhấn mạnh các kỹ thuật CSS nâng cao như `order: -1`, `object-fit: cover`, `flex: 1`.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bôi đen code trên VS Code, soi Box Model và Grid Inspector trên DevTools F12.
   - ⏱️ **Thời gian:** Mốc thời gian tích lũy để bạn kiểm soát tiến độ nói trên đồng hồ OBS từ 00:00 đến 19:30.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 – 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình 1080p.
- Màn hình hiển thị Visual Studio Code mở sẵn `bai14.html` và `bai14.css`.
- Tab Chrome bên cạnh hiển thị trang web 6 Kỳ quan thiên nhiên Việt Nam với dải banner xanh lá cây chữ vàng rực rỡ, bên dưới là lưới 6 card địa danh được căn chỉnh tăm tắp.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo cùng toàn thể các bạn sinh viên đang theo dõi video thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được đại diện báo cáo và thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 14: Xây dựng trang giới thiệu 6 kỳ quan thiên nhiên Việt Nam — Sự kết hợp hoàn hảo giữa chuẩn ngữ nghĩa HTML5, hệ thống bố cục CSS Grid và kỹ thuật điều khiển thứ tự hiển thị bằng Flexbox Order**.
> 
> Khi xây dựng một trang tin tức, blog du lịch hay cổng thông tin giới thiệu danh lam thắng cảnh, các kỹ sư cầu nối giao diện (Front-end Developers) thường xuyên phải đối mặt với một bài toán hóc búa:
> - Làm thế nào để cấu trúc mã nguồn HTML đạt chuẩn SEO cao nhất, ưu tiên văn bản nội dung cho máy chủ tìm kiếm và trình đọc màn hình tiếp cận trước?
> - Nhưng đồng thời, về mặt giao diện thị giác trên màn hình người dùng, hình ảnh minh họa bắt buộc phải được đẩy lên trên cùng của chiếc thẻ card để thu hút sự chú ý thị giác đầu tiên?
> - Làm thế nào để kết hợp giữa lưới tổng thể bên ngoài bằng **CSS Grid** và sự linh hoạt bên trong từng thẻ card bằng **Flexbox** mà không sinh ra xung đột bố cục?
> 
> Bài thực hành số 14 này chính là câu trả lời toàn diện cho các thách thức thiết kế đó. Trang web giới thiệu 6 tuyệt tác thiên nhiên của đất nước ta: Vịnh Hạ Long, Hang Sơn Đoòng, Thác Bản Giốc, Đỉnh Fansipan, Đồng bằng sông Cửu Long và Động Phong Nha trong một bố cục card đồng đều, chuẩn mực.
> 
> Lộ trình thuyết minh của em hôm nay gồm có 6 phần chính:
> 1. Phân tích cơ sở lý thuyết về kiến trúc kết hợp Grid - Flexbox và thuộc tính `order`.
> 2. Thuyết minh chi tiết từng dòng thẻ trong tài liệu cấu trúc `bai14.html`.
> 3. Phân tích chuyên sâu tệp định kiểu `bai14.css`, tư duy phối màu sinh thái và thuật toán cân bằng chiều cao card.
> 4. Nhận định về hiệu năng giao diện tĩnh và lý do tối ưu thuần CSS.
> 5. Thực hành demo trực tiếp trên trình duyệt, soi F12 Elements, phân tích Flex Box Model và thử nghiệm co dãn kích thước.
> 6. Tổng kết bài học kinh nghiệm, các lỗi thiết kế hay mắc phải và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép bắt đầu ngay với phần nền tảng lý thuyết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 – 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Rê chuột vào phần thuộc tính `.the-ky-quan` và `.anh-ky-quan` trong file `bai14.css`, bôi đen thuộc tính `order: -1;` để tạo ấn tượng cho người xem.

🗣️ **Lời đọc:**
> "Trước khi đi sâu vào chi tiết mã nguồn, em xin phép làm rõ 4 nguyên lý lý thuyết cốt lõi mà bài tập số 14 áp dụng:
> 
> **Nguyên lý thứ nhất: Cấu trúc HTML5 chuẩn Semantic và thứ tự tiếp cận (Accessibility & Source Order).**
> Trong thiết kế web chuẩn quốc tế (W3C Web Standards), thứ tự xuất hiện của các phần tử trong tệp HTML được gọi là **Source Order**. Các công cụ tìm kiếm của Google và các thiết bị trợ thính đọc màn hình (Screen Readers) luôn quét tài liệu tuần tự từ trên xuống dưới.
> - Nếu chúng ta đặt tiêu đề `<h2>` và đoạn mô tả `<p>` lên trước thẻ ảnh `<img>`, công cụ tìm kiếm sẽ ngay lập tức nắm bắt được tiêu đề và tóm tắt địa danh trước khi tải dữ liệu nhị phân của hình ảnh.
> - Đây là một chuẩn thực hành SEO đỉnh cao (SEO Best Practice), giúp gia tăng điểm số xếp hạng website trên bảng kết quả tìm kiếm.
> 
> **Nguyên lý thứ hai: Kỹ thuật hoán đổi vị trí hiển thị bằng thuộc tính `order` trong Flexbox.**
> Mặc dù trong file HTML khối chữ được viết trước và thẻ ảnh được viết sau, nhưng về mặt thiết kế thị giác (Visual Order), chúng ta lại muốn bức ảnh nằm ở trên đỉnh của chiếc thẻ card.
> Làm thế nào để giải quyết mâu thuẫn này mà không cần đảo lại code HTML?
> Câu trả lời nằm ở thuộc tính `order` của Flexbox:
> - Theo đặc tả CSS Flexbox, mọi phần tử con bên trong một Flex Container mặc định đều có giá trị `order: 0`.
> - Giá trị của thuộc tính `order` quy định thứ tự vẽ phần tử lên màn hình: phần tử nào có giá trị `order` nhỏ hơn sẽ được vẽ trước.
> - Bằng cách gán cho thẻ ảnh `.anh-ky-quan` thuộc tính `order: -1;`, chúng ta đã hạ chỉ số thứ tự của ảnh xuống nhỏ hơn giá trị 0 mặc định của khối văn bản. Kết quả là trình duyệt tự động nhấc bức ảnh lên vẽ ở vị trí đầu tiên của thẻ card một cách hoàn toàn tự nhiên mà cây phân cấp DOM của HTML vẫn giữ nguyên vẹn trật tự ngữ nghĩa chuẩn mực!
> 
> **Nguyên lý thứ ba: Mô hình phối hợp 'Grid bên ngoài, Flexbox bên trong' (Macro Grid & Micro Flexbox).**
> Đây là mô hình kiến trúc giao diện chuẩn mực trong các hệ thống Design System lớn:
> - Ở tầm vĩ mô (Macro Layout): Chúng ta sử dụng **CSS Grid** (`display: grid; grid-template-columns: repeat(3, 1fr);`) để kiểm soát không gian 2 chiều của toàn trang, chia đều 6 kỳ quan thành 3 cột cân xứng tuyệt đối.
> - Ở tầm vi mô (Micro Layout): Bên trong từng thẻ card đơn lẻ, chúng ta sử dụng **Flexbox** (`display: flex; flex-direction: column;`) để quản lý các thành phần con theo trục dọc, tận dụng thuộc tính `flex: 1` để tự động kéo dãn phần nền chữ, giúp tất cả các card luôn có chiều cao bằng nhau chằn chặn dù nội dung mô tả có độ dài ngắn khác nhau.
> 
> **Nguyên lý thứ tư: Tư duy phối màu sinh thái thiên nhiên (Eco & Nature Color Palette).**
> Để phản ánh đúng tinh thần tôn vinh kỳ quan thiên nhiên, trang web áp dụng bảng màu xanh lá cây đặc trưng:
> - Màu xanh lục bảo `#2E7D32` (Material Green 800) làm dải banner tiêu đề, gợi liên tưởng đến rừng nguyên sinh và núi non xanh tươi.
> - Màu vàng tươi `#FFEB3B` làm màu chữ tiêu đề, tạo độ tương phản mạnh mẽ, ấm áp như ánh nắng ban mai.
> - Màu xanh rêu đậm `#1b5e20` cho các đề mục, kết hợp đường viền phân cách `border-bottom: 3px solid #2E7D32` tạo điểm nhấn ranh giới sắc sảo giữa bức ảnh và phần nội dung."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai14.html`) (06:00 – 10:30 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai14.html`.
- Bôi đen lần lượt: thẻ `<header class="dai-tieu-de">`, `<p class="doan-dan-nhap">`, rồi cuộn vào `<main class="luoi-ky-quan">` chỉ ra cấu trúc lặp lại của 6 thẻ `<article class="the-ky-quan">`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng đi sâu phân tích từng dòng mã trong tệp tin cấu trúc `bai14.html`.
> 
> Toàn bộ tệp tin được xây dựng chỉn chu với 88 dòng code chuẩn chỉ:
> 
> - **Phần khai báo tiêu chuẩn từ dòng 1 đến dòng 9:**
>   - Dòng 1: `<!DOCTYPE html>` định nghĩa tài liệu chuẩn HTML5.
>   - Dòng 2: `<html lang="vi">` thiết lập ngôn ngữ tiếng Việt.
>   - Dòng 4: Khai báo bảng mã ký tự `<meta charset="UTF-8">` để đảm bảo các tên địa danh tiếng Việt có dấu như 'Bản Giốc', 'Sơn Đoòng', 'Cửu Long' không bao giờ bị vỡ font.
>   - Dòng 5: Thẻ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` bảo đảm trang web thích ứng hoàn hảo trên mọi thiết bị.
>   - Dòng 6: `<title>` đặt tên trang là *'Bài 14 - Trang 6 kỳ quan thiên nhiên Việt Nam'*.
>   - Dòng 8: `<link rel="stylesheet" href="bai14.css">` liên kết đến bảng kiểu dáng CSS ngoại tuyến.
> 
> - **Phần thân trang `<body>` từ dòng 10 đến dòng 86:**
>   - Dòng 13: Thẻ container bao bọc toàn bộ nội dung `<div class="khung-chinh">`. Khối này có nhiệm vụ tạo nên một chiếc thẻ bài lớn màu trắng nổi bật trên nền xám, giới hạn chiều rộng 860px để mắt người đọc thoải mái nhất.
> 
>   - **Khu vực 1: Dải banner tiêu đề chính (`<header class="dai-tieu-de">` từ dòng 16 đến 18):**
>     - Em sử dụng thẻ ngữ nghĩa `<header>` đại diện cho phần đầu trang.
>     - Bên trong là thẻ tiêu đề cấp cao nhất `<h1>` với nội dung trang trọng: *'6 kỳ quan thiên nhiên Việt Nam'*.
> 
>   - **Khu vực 2: Đoạn văn dẫn nhập truyền cảm hứng (Dòng 21 đến 23):**
>     - Thẻ `<p class="doan-dan-nhap">` chứa lời tựa: *'Việt Nam sở hữu nhiều kỳ quan thiên nhiên được thế giới công nhận — từ vịnh biển, hang động đến núi cao và miền sông nước.'*
>     - Dòng chữ này đóng vai trò dẫn dắt cảm xúc người đọc trước khi họ chiêm ngưỡng các kỳ quan bên dưới.
> 
>   - **Khu vực 3: Lưới trưng bày 6 kỳ quan (`<main class="luoi-ky-quan">` từ dòng 26 đến dòng 82):**
>     - Em sử dụng thẻ ngữ nghĩa `<main>` để chỉ định đây là nội dung cốt lõi của tài liệu.
>     - Bên trong thẻ `<main>` là 6 thẻ ngữ nghĩa `<article class="the-ky-quan">`. Theo định nghĩa của W3C, thẻ `<article>` được dùng để bọc một cụm nội dung độc lập, tự mang đầy đủ ý nghĩa và có thể tái sử dụng hoặc trích xuất riêng biệt:
>       - **Kỳ quan 1 (Dòng 29 - 35): Vịnh Hạ Long**
>         - Khối chữ `<div class="noi-dung-ky-quan">` chứa thẻ tiêu đề cấp 2 `<h2 class="tieu-de-ky-quan">1. Vịnh Hạ Long</h2>` và đoạn mô tả vị trí: *'Gần 2.000 đảo đá vôi, Di sản thiên nhiên thế giới, thuộc Quảng Ninh.'*
>         - Tiếp theo là thẻ ảnh `<img src="1-vinh-ha-long.jpg" alt="Vịnh Hạ Long" class="anh-ky-quan">`.
>       - **Kỳ quan 2 (Dòng 38 - 44): Hang Sơn Đoòng**
>         - Tiêu đề: *'2. Hang Sơn Đoòng'*, mô tả: *'Hang động tự nhiên lớn nhất thế giới, thuộc Quảng Bình.'*, nạp file `2-son-doong.jpg`.
>       - **Kỳ quan 3 (Dòng 47 - 53): Thác Bản Giốc**
>         - Tiêu đề: *'3. Thác Bản Giốc'*, mô tả: *'Thác nước đẹp nhất Việt Nam, nằm ở Cao Bằng.'*, nạp file `3-thac-ban-gioc.jpg`.
>       - **Kỳ quan 4 (Dòng 56 - 62): Đỉnh Fansipan**
>         - Tiêu đề: *'4. Fansipan'*, mô tả: *''Mái nhà Đông Dương', cao 3.147 m, thuộc Lào Cai.'*, nạp file `4-fansipan.jpg`.
>       - **Kỳ quan 5 (Dòng 65 - 71): Đồng bằng sông Cửu Long**
>         - Tiêu đề: *'5. Đồng bằng sông Cửu Long'*, mô tả: *'Vựa lúa, miệt vườn sông nước trù phú miền Nam.'*, nạp file `5-mekong.jpg`.
>       - **Kỳ quan 6 (Dòng 74 - 80): Động Phong Nha**
>         - Tiêu đề: *'6. Động Phong Nha'*, mô tả: *'Hệ thống hang động kỳ vĩ, Di sản thiên nhiên thế giới.'*, nạp file `6-phong-nha.jpg`.
> 
> - Như thầy cô và các bạn thấy, cấu trúc trong cả 6 thẻ `<article>` hoàn toàn đồng nhất: **Khối nội dung văn bản `<div>` được viết trước, và thẻ ảnh `<img>` được viết sau**. Đây là cấu trúc hoàn hảo cho cỗ máy tìm kiếm và khả năng tiếp cận người khuyết tật!"

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai14.css`) (10:30 – 14:30 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai14.css`.
- Bôi đen lần lượt: quy tắc `.khung-chinh`, dải banner `.dai-tieu-de`, hệ thống lưới `.luoi-ky-quan`, và đặc biệt là khối `.the-ky-quan`, `.anh-ky-quan` với dòng lệnh then chốt `order: -1;`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta cùng bước sang tệp tin định dạng `bai14.css` gồm 95 dòng lệnh. Đây là nơi toàn bộ phép màu biến đổi giao diện được thực thi:
> 
> - **Khởi tạo và định dạng phông nền (Dòng 5 đến dòng 14):**
>   - Reset toàn cục `box-sizing: border-box;` để kiểm soát chuẩn xác mô hình hộp.
>   - Thẻ `body`: Sử dụng màu nền xám tro hiện đại `#f5f7fa`, font chữ không chân quen thuộc `Arial, sans-serif`, padding viền `30px 15px` bảo đảm nội dung không bao giờ dính sát mép trình duyệt.
> 
> - **Chiếc khung chính `.khung-chinh` (Dòng 16 đến 24):**
>   - `max-width: 860px; margin: 0 auto;`: Khóa chiều rộng tối đa ở mức 860px và tự động căn đều ra giữa trang.
>   - `background-color: #ffffff; border-radius: 8px;`: Nền trắng tinh khiết, bo tròn 8px tạo dáng vẻ hiện đại như một tấm áp phích triển lãm.
>   - `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);`: Đổ bóng mờ nhẹ êm ái, tạo chiều sâu tách biệt hoàn toàn chiếc khung trắng khỏi mặt nền xám.
>   - `overflow: hidden;`: Giữ cho dải banner xanh lá ở trên cùng không bị lòi góc vuông nhọn ra khỏi đường viền bo tròn của khung cha.
>   - `padding-bottom: 30px;`: Tạo khoảng đệm thông thoáng ở đáy trang.
> 
> - **Dải tiêu đề sắc màu thiên nhiên `.dai-tieu-de` (Dòng 27 đến 38):**
>   - `background-color: #2E7D32;`: Sắc xanh lá cây đậm tươi sáng.
>   - `padding: 14px 20px; text-align: center;`: Căn chữ vào giữa dải màu xanh.
>   - Thẻ `h1`: Đặt màu vàng hoàng yến `#FFEB3B`, cỡ chữ `22px` in đậm, triệt tiêu margin thừa bằng `margin: 0;`. Màu vàng nổi bật trên nền xanh lá cây mang lại cảm giác phấn chấn, tự hào về thiên nhiên non sông gấm vóc.
> 
> - **Đoạn dẫn nhập `.doan-dan-nhap` (Dòng 41 đến 47):**
>   - Chữ màu xanh rêu `#1b5e20`, kiểu chữ nghiêng `font-style: italic;`, cỡ chữ `13.5px`, căn giữa `text-align: center;`, khoảng cách lề `18px 25px 25px 25px` tạo nhịp điệu chuyển tiếp êm ả từ banner vào lưới ảnh.
> 
> - **Bố cục lưới vĩ mô `.luoi-ky-quan` (Dòng 50 đến 55):**
>   - `display: grid;`: Bật chế độ CSS Grid hai chiều.
>   - `grid-template-columns: repeat(3, 1fr);`: Chia đều không gian thành đúng 3 cột bằng nhau, mỗi cột chiếm 1 phân số `1fr`.
>   - `gap: 20px;`: Thiết lập khoảng cách đồng nhất 20px giữa các hàng và các cột.
>   - `padding: 0 25px;`: Căn lề trái phải 25px để lưới không chạm sát mép khung chính.
> 
> - **Trọng tâm kỹ thuật: Định hình thẻ card `.the-ky-quan` (Dòng 58 đến 66):**
>   - Nền trắng `#ffffff`, viền xám nhạt `border: 1px solid #e0e0e0;`, bo góc nhẹ 6px, đổ bóng viền `box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);`.
>   - `overflow: hidden;`: Cắt gọn các góc ảnh theo bo viền 6px.
>   - **Hai dòng lệnh cốt tử:** `display: flex; flex-direction: column;`.
>     - Biến mỗi chiếc thẻ card thành một Flex Container xếp theo trục dọc từ trên xuống dưới.
> 
> - **Phép màu hoán đổi vị trí: `.anh-ky-quan` (Dòng 68 đến 75):**
>   - `order: -1;`: **Đây chính là dòng lệnh thông minh nhất trong toàn bộ bài tập!**
>     - Như em đã giải thích ở phần lý thuyết, giá trị mặc định của khối văn bản là `order: 0`. Khi ta gán `order: -1` cho ảnh, bức ảnh ngay lập tức được trình duyệt vẽ lên trên đỉnh đầu của chiếc thẻ card, nằm phía trên toàn bộ tiêu đề và chữ mô tả, hoàn thành trọn vẹn yêu cầu mỹ thuật mà không hề phá vỡ cấu trúc SEO của tệp HTML!
>   - `width: 100%; height: 140px; object-fit: cover;`: Khóa cứng chiều cao 140px và giữ nguyên tỉ lệ nguyên bản của ảnh phong cảnh.
>   - `border-bottom: 3px solid #2E7D32;`: Dải viền xanh lá cây 3px ở chân ảnh, tạo đường gân phân tách sang trọng giữa bức tranh thiên nhiên và phần chữ thuyết minh bên dưới.
> 
> - **Cân bằng chiều cao: `.noi-dung-ky-quan` (Dòng 77 đến 94):**
>   - `padding: 12px 14px;`: Khoảng đệm bên trong cho chữ.
>   - `flex: 1;`: Thuộc tính này ra lệnh cho khối nội dung tự động phình to để lấp đầy toàn bộ khoảng trống còn lại của thẻ card. Nhờ đó, cả 3 chiếc thẻ card trên cùng một hàng luôn có chiều cao đáy bằng nhau tuyệt đối, không bao giờ bị tình trạng thẻ dài thẻ ngắn cọc cạch.
>   - `.tieu-de-ky-quan`: Màu xanh rêu `#1b5e20`, font 15px in đậm, khoảng cách dưới 6px.
>   - `.mo-ta-ky-quan`: Màu xám đậm `#555555`, font 12.5px, độ giãn dòng `line-height: 1.5;` giúp chữ thoáng đãng, dễ đọc."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (14:30 – 18:30 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai14.html`.
- Rê chuột chỉ vào các dải tiêu đề, các bức ảnh và đường viền xanh `border-bottom: 3px solid #2E7D32`.
- Bấm `F12` mở Chrome DevTools.
- Chọn tab **Elements**, bấm mở một thẻ `<article class="the-ky-quan">`:
  - Chỉ cho người xem thấy trong DOM thẻ `<div class="noi-dung-ky-quan">` nằm TRÊN, thẻ `<img class="anh-ky-quan">` nằm DƯỚI.
  - Sau đó nhìn sang khung **Styles**, chỉ vào thuộc tính `order: -1;` trên `.anh-ky-quan`.
  - Tích bỏ dấu chọn checkbox của `order: -1` để người xem thấy ngay bức ảnh lập tức tụt xuống đáy card! Rồi tích chọn lại để ảnh bay lên đỉnh card.
- Bật **Device Toolbar** (`Ctrl + Shift + M`) để kiểm tra tính linh hoạt của khung giao diện.

🗣️ **Lời đọc:**
> "Và bây giờ, em xin kính mời quý thầy cô và các bạn cùng quan sát giao diện thực tế của Bài 14 chạy trên trình duyệt Google Chrome:
> 
> **1. Trải nghiệm thị giác tổng thể:**
> - Trước mắt chúng ta là một trang giới thiệu danh thắng mang phong cách thiết kế phẳng (Flat Design) rất tươi mát và trang nhã.
> - Dải banner màu xanh lá cây với dòng chữ vàng *'6 kỳ quan thiên nhiên Việt Nam'* tạo điểm nhấn thị giác đầu tiên đầy tự hào.
> - Bên dưới, 6 chiếc thẻ card được dàn thành 2 hàng, mỗi hàng đúng 3 cột. Hình ảnh của 6 địa danh hiện lên sắc nét, đều đặn với chiều cao 140px, có đường viền chỉ xanh lá cây mảnh dẻ ở chân ảnh tạo nên một nét nhận diện thương hiệu xuyên suốt.
> 
> **2. Mở F12 DevTools thực hiện thí nghiệm trực quan với thuộc tính `order`:**
> - Em bấm phím **F12** để mở công cụ Developer Tools.
> - Trong tab **Elements**, em mở cây DOM của thẻ `<article class="the-ky-quan">` đầu tiên (Vịnh Hạ Long):
>   - Thầy cô và các bạn hãy quan sát kỹ: Trong cấu trúc mã nguồn HTML, khối thẻ `<div class="noi-dung-ky-quan">` chứa chữ '1. Vịnh Hạ Long' đang nằm ở vị trí số 1, phía trên; còn thẻ `<img class="anh-ky-quan">` nằm ở vị trí số 2, phía dưới.
>   - Thế nhưng, trên màn hình vẽ thực tế, bức ảnh lại hiển thị ở trên đỉnh đầu!
>   - *[Thao tác: Nhấp chuột vào thẻ img, trỏ chuột sang tab Styles tìm dòng `order: -1`]*
>   - Đây chính là bằng chứng thuyết phục: Thuộc tính `order: -1` đang can thiệp trực tiếp vào tiến trình render của trình duyệt.
>   - Bây giờ, em sẽ làm một thí nghiệm nhỏ: **Em bỏ tích checkbox của thuộc tính `order: -1` trong tab Styles**...
>   - *[Thao tác bỏ dấu tích]*
>   - Thầy cô thấy không ạ? Ngay khi em tắt `order: -1`, bức ảnh Vịnh Hạ Long lập tức rơi xuống nằm dưới dòng chữ mô tả, trở về đúng vị trí mặc định trong luồng HTML!
>   - Và khi em **tích bật lại `order: -1`**...
>   - *[Thao tác tích lại]*
>   - Bức ảnh ngay lập tức bay ngược trở lại lên đỉnh của chiếc thẻ card!
>   - Thí nghiệm trực tiếp này đã minh chứng hùng hồn cho sức mạnh điều khiển thứ tự hiển thị của Flexbox mà không cần phải can thiệp hay sửa đổi một ký tự nào trong tệp tin HTML gốc!
> 
> **3. Kiểm tra tính co dãn và mô hình hộp:**
> - Nhìn vào tab **Console**: Hoàn toàn sạch bóng, 0 lỗi, 0 cảnh báo.
> - Bấm `Ctrl + Shift + M` để co dãn chiều rộng: Khung thẻ `.khung-chinh` tự động co dãn mềm mại nhờ `max-width: 860px` kết hợp với lề `margin: 0 auto`, bảo đảm bố cục luôn cân đối và không bị tràn lề."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM & LỜI CẢM ƠN (18:30 – 19:45 | Thời lượng: ~1.25 phút)

🎬 **Thao tác:** 
- Đóng DevTools, chuyển về màn hình hiển thị toàn vẹn trang web.
- Nói lời tổng kết với thái độ trang trọng, biết ơn.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và các bạn, thông qua việc thực hiện Bài tập thực hành số 14, em đã đúc kết được những bài học chuyên môn vô cùng sâu sắc:
> - Nắm vững tư duy phân tách rành mạch giữa **Cấu trúc ngữ nghĩa (Semantic Source Order)** và **Thứ tự hiển thị thị giác (Visual Order)** trong phát triển giao diện hiện đại.
> - Làm chủ kỹ thuật điều phối bố cục đa tầng: Dùng **CSS Grid** cho kiến trúc vĩ mô toàn trang và dùng **Flexbox** cho vi kiến trúc bên trong từng thành phần card.
> - Hiểu rõ cơ chế hoạt động của thuộc tính `order: -1` và thuộc tính `flex: 1` để giải quyết triệt để bài toán đồng bộ chiều cao và hoán đổi vị trí phần tử.
> 
> Video thuyết minh báo cáo Bài thực hành số 14 của em đến đây xin phép được kết thúc.
> 
> Em xin gửi lời cảm ơn chân thành và sâu sắc nhất tới quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản đã tận tâm truyền thụ những kiến thức quý báu, giúp chúng em xây dựng tư duy lập trình giao diện chuẩn mực. Cảm ơn các bạn sinh viên đã đồng hành và theo dõi video này.
> 
> Kính chúc thầy cô thật nhiều sức khỏe, luôn tràn đầy nhiệt huyết trong sự nghiệp giáo dục! Chúc các bạn sinh viên luôn học tập tốt và gặt hái nhiều thành công!
> 
> Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 14 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
