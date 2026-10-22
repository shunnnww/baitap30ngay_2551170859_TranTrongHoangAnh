# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 18: TRANG BÀI VIẾT ẨM THỰC — KỸ THUẬT DROP CAP VÀ BỐ CỤC ĐA CỘT CSS COLUMNS

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Học phần:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Mã nguồn liên quan:** `bai18.html`, `bai18.css`.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Thiết lập màn hình:** Mở VS Code bên trái (`bai18.html`, `bai18.css`), mở Chrome bên phải hiển thị trang bài viết Bông điên điển.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép `> "..."` là **lời nói trực tiếp** của bạn. Hãy nói to, truyền cảm, diễn giải chậm rãi và nhấn mạnh vào các từ khóa kỹ thuật CSS.
   - 🎬 **Thao tác:** Hướng dẫn hành động rê chuột, bôi đen mã nguồn, thao tác bật/tắt thuộc tính trong F12 DevTools.
   - ⏱️ **Mốc thời gian:** Định mức ước lượng giúp bạn kiểm soát video chuẩn xác từ 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình trình duyệt hiển thị bài viết Bông điên điển.
- Rê chuột từ trên xuống dưới: Tiêu đề màu cam ấm, chữ cái đầu dòng phóng to nghệ thuật (Drop Cap), hình ảnh hoa điên điển lượn chữ bao quanh bên phải, và khối 'Hương vị miền Nam' viền xanh lá có danh sách chia 2 cột đẹp mắt.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vui mừng được thực hiện video báo cáo chi tiết về **Bài tập thực hành số 18: Thiết kế trang bài viết tạp chí ẩm thực — Ứng dụng kỹ thuật chữ cái rơi Drop Cap và Bố cục đa cột CSS Multi-column Layout**.
> 
> Nếu như trong các bài thực hành trước, chúng ta tập trung nhiều vào logic xử lý sự kiện JavaScript hoặc các biểu mẫu nhập liệu, thì Bài 18 này lại đưa chúng ta đến với đỉnh cao của **Nghệ thuật sắp chữ trong thiết kế Web (Web Typography)** và **Bố cục báo chí xuất bản hiện đại (Editorial Web Design)**.
> 
> Bài viết lấy chủ đề về ẩm thực miền Tây sông nước: *'Bông điên điển — Món ngon mùa nước nổi'*. Mục tiêu trọng tâm của bài tập bao gồm 3 thách thức kỹ thuật CSS3 kinh điển:
> 
> 1. **Kỹ thuật tạo chữ cái thụt dòng nghệ thuật (Drop Cap):** Khai thác phần tử giả `::first-letter` để biến chữ cái đầu tiên của đoạn văn thành một khối ký tự khổng lồ mang phong cách các tạp chí in cao cấp thời xưa, với phông chữ có chân cổ điển, màu cam rực rỡ và căn lề hoàn hảo với các dòng văn bản xung quanh.
> 2. **Kỹ thuật bố cục dòng chảy nội dung bao quanh ảnh (Text Wrapping with Float):** Sử dụng thuộc tính `float: right` để đẩy bức ảnh ẩm thực sang mép phải, cho phép các dòng chữ uốn lượn tự nhiên quanh bức ảnh, đồng thời áp dụng kỹ thuật giải phóng luồng nổi (Clearfix) nhằm bảo toàn tính toàn vẹn của cấu trúc trang.
> 3. **Hệ thống phân chia đa cột hiện đại CSS3 Multi-column:** Biến đổi một danh sách không thứ tự gồm 7 món đặc sản Nam Bộ thành 2 cột văn bản song song tự cân bằng bằng thuộc tính `columns: 2` và `column-gap`, thay vì phải chia đôi thẻ HTML thủ công như cách làm truyền thống.
> 
> Nội dung thuyết minh hôm nay sẽ đi qua 6 phần:
> - Phần 1: Lời mở đầu và mục tiêu bài tập.
> - Phần 2: Cơ sở lý thuyết chuyên sâu về Drop Cap, Float và CSS Columns.
> - Phần 3: Thuyết minh chi tiết từng dòng HTML (`bai18.html`).
> - Phần 4: Thuyết minh chi tiết bảng định dạng CSS (`bai18.css`).
> - Phần 5: Thực hành demo trên trình duyệt, soi F12 DevTools bật/tắt từng thuộc tính để chứng minh cơ chế hoạt động.
> - Phần 6: Bài học kinh nghiệm, lỗi trôi bố cục thường gặp và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | 02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code mở tệp `bai18.css`.
- Bôi đen khối `.doan-dau::first-letter` từ dòng 61 đến dòng 70, và khối `.danh-sach-mon` từ dòng 95 đến dòng 100.

🗣️ **Lời đọc:**
> "Trước khi đi vào phân tích mã nguồn chi tiết, em xin phép trình bày 3 nền tảng lý thuyết cốt lõi của bài tập này:
> 
> **Thứ nhất: Phần tử giả ::first-letter và Kỹ thuật tạo chữ cái Drop Cap.**
> - Trong lịch sử ngành in ấn châu Âu từ thời kỳ Phục hưng, các cuốn sách kinh thánh và bản thảo viết tay thường có một chữ cái đầu trang được vẽ rất to, chiếm chiều cao của 2 đến 4 dòng văn bản, gọi là *Lettrine* hay *Drop Cap*.
> - Trong CSS, để làm được điều này mà không cần phải can thiệp chia cắt chuỗi trong HTML bằng các thẻ `<span>` thủ công, W3C đã cung cấp phần tử giả `::first-letter`. Trình duyệt sẽ tự động nhận diện ký tự đầu tiên của khối văn bản và áp dụng các thuộc tính riêng biệt cho nó.
> - Tuy nhiên, để tạo ra một chữ Drop Cap hoàn mỹ không hề đơn giản. Nếu chỉ tăng cỡ chữ `font-size`, chữ cái sẽ đẩy cả dòng đầu tiên lên rất cao làm hỏng khoảng cách dòng. Bí quyết kỹ thuật nằm ở sự phối hợp của 4 thuộc tính:
>   + `font-size: 3.4em`: Phóng to kích thước gấp 3.4 lần cỡ chữ bình thường.
>   + `float: left`: Đẩy chữ cái sang mép trái và cho phép toàn bộ phần văn bản còn lại của đoạn chảy bao quanh nó.
>   + `line-height: 0.8`: Thu nhỏ chiều cao dòng của riêng chữ cái đó để triệt tiêu các khoảng trống vô hình bên trên và bên dưới.
>   + `margin-right: 6px`: Tạo một khoảng đệm nhỏ ngăn không cho các chữ cái kế tiếp dính sát vào chữ cái hoa.
> 
> **Thứ hai: Mô hình dòng chảy nổi Float và Cơ chế giải phóng luồng (Clearfix / Block Formatting Context).**
> - Thuộc tính `float: right` rút phần tử ảnh ra khỏi luồng tài liệu thông thường (Normal Flow) và đẩy nó về sát biên phải của khối chứa cha. Các phần tử văn bản nội dòng (Inline content) xung quanh sẽ tự động lách qua sườn trái của bức ảnh.
> - Nhưng hệ quả của float là phần tử cha có thể bị sụp đổ chiều cao (Zero Height Collapse) nếu nó chỉ chứa các phần tử con bị float. Để khắc phục triệt để, chúng em áp dụng hai giải pháp:
>   + Trên thẻ cha `.phan-noi-dung`: Sử dụng `overflow: hidden;`. Thuộc tính này thiết lập một ngữ cảnh định dạng khối mới (Block Formatting Context - BFC), buộc thẻ cha phải bao trùm toàn bộ các phần tử nổi bên trong nó.
>   + Trên khối kế tiếp `.khoi-huong-vi`: Thiết lập `clear: both;`. Thuộc tính này ra lệnh cho khối hương vị không được phép nằm ngang hàng với bất kỳ phần tử nổi nào ở phía trên, đảm bảo nó luôn bắt đầu ở một hàng mới hoàn toàn sạch sẽ.
> 
> **Thứ ba: Mô hình đa cột CSS Multi-column Layout.**
> - Trước khi có CSS3, muốn tạo 2 cột danh sách, lập trình viên buộc phải tách danh sách thành 2 thẻ `<ul>` riêng biệt rồi dùng `float` hoặc `flexbox`. Nhược điểm là mã nguồn bị xé lẻ và không thể tự động cân đối khi số lượng mục thay đổi.
> - Với thuộc tính `columns: 2` (hoặc `column-count: 2`) kết hợp cùng `column-gap: 30px`, trình duyệt sẽ tự động tính toán tổng số mục trong một thẻ `<ul>` duy nhất và chia đều ra hai bên cột. Người lập trình hoàn toàn không cần can thiệp vào cấu trúc dữ liệu HTML."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai18.html`) (Thời lượng: ~4 phút | 06:00 - 10:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai18.html` trên VS Code.
- Bôi đen lần lượt từng khối mã từ dòng 1 đến dòng 46 khi thuyết minh.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô cùng xem qua tệp mã nguồn cấu trúc `bai18.html` gồm 46 dòng code chuẩn HTML5:
> 
> - **Phần khai báo đầu trang (Dòng 1 đến dòng 8):**
>   - Đầy đủ các thẻ chuẩn mực: `<!DOCTYPE html>`, `<html lang="vi">`, `<meta charset="UTF-8">`, và `<meta name="viewport">`.
>   - Dòng 6: Thẻ `<title>` định danh: *'Bài 18 - Trang bài viết kèm danh sách'*.
>   - Dòng 7: Liên kết bảng định kiểu CSS bên ngoài: `<link rel="stylesheet" href="bai18.css">`.
> 
> - **Khung bài viết chính `.khung-chinh` (Dòng 11 đến dòng 42):**
>   Toàn bộ nội dung bài báo được bao bọc trong một khối thẻ `div` duy nhất mang class `.khung-chinh`. Bên trong được chia làm 3 phân đoạn nội dung rõ rệt:
> 
>   1. **Phân đoạn 1: Cụm tiêu đề bài báo (Dòng 13 đến dòng 14):**
>      - Thẻ `<h1 class="tieu-de-chinh">Bông điên điển</h1>`: Đây là tiêu đề chính cấp 1 của bài viết, mang ý nghĩa định vị chủ đề cho toàn bộ trang.
>      - Thẻ `<div class="tieu-de-phu">Món ngon mùa nước nổi</div>`: Đóng vai trò như một dòng tít phụ (Sub-heading), gợi mở chủ đề ẩm thực độc đáo. Cả hai dòng này sẽ được tô màu cam đất đặc trưng của hoa điên điển.
> 
>   2. **Phân đoạn 2: Khối nội dung văn bản kèm ảnh minh họa (Dòng 17 đến dòng 27):**
>      - Được bao bọc trong thẻ `<div class="phan-noi-dung">`.
>      - Dòng 18: Thẻ hình ảnh `<img src="Diendien.jpg" alt="Bông điên điển" class="anh-phai">`. Bức ảnh được đặt ở đầu khối nội dung trước các đoạn văn bản để khi CSS áp dụng `float: right`, ảnh sẽ trôi sang phải ngay từ dòng đầu tiên.
>      - Dòng 20 đến 22: Đoạn văn thứ nhất mang class đặc biệt `<p class="doan-dau">`. Đoạn này bắt đầu bằng từ *'Mỗi năm'* (trong code được viết là *'ỗi năm'* để khi chữ cái Drop Cap áp dụng, nó sẽ hòa quyện thành chữ mở đầu). Đoạn văn miêu tả khung cảnh cây điên điển trổ hoa vàng rực rỡ vào mùa lũ miền Tây.
>      - Dòng 24 đến 26: Đoạn văn thứ hai miêu tả giá trị ẩm thực của bông điên điển từ món cháo nghèo khó thuở xưa cho đến món dưa chua giòn chấm nước tương ớt nổi tiếng ngày nay.
> 
>   3. **Phân đoạn 3: Khối giới thiệu đặc sản 'Hương vị miền Nam' (Dòng 30 đến dòng 41):**
>      - Được đóng gói trong `<div class="khoi-huong-vi">`.
>      - Dòng 31: Thẻ tiêu đề phụ `<h3>` mang class `tieu-de-huong-vi` với nội dung *'Hương vị miền Nam'*.
>      - Dòng 32 đến 40: Một danh sách không thứ tự `<ul class="danh-sach-mon">` liệt kê 7 món ăn nổi tiếng khắp các tỉnh thành Nam Bộ:
>        + Mục 1: Bánh tráng Mỹ Lồng, bánh phồng Sơn Đốc.
>        + Mục 2: Dòi lươn rim nước cốt dừa.
>        + Mục 3: Bún mắm.
>        + Mục 4: Bún nước lèo Sóc Trăng.
>        + Mục 5: Nem lai Vung.
>        + Mục 6: Cốm dẹp.
>        + Mục 7: Bưởi Tân Triều.
>      - Danh sách này chỉ dùng một thẻ `<ul>` duy nhất nhưng sẽ được CSS biến hóa thành 2 cột song song tuyệt đẹp."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai18.css`) (Thời lượng: ~4 phút 30 giây | 10:00 - 14:30)

🎬 **Thao tác:** 
- Chuyển sang tab `bai18.css`.
- Bôi đen từng phần: Typography của body, Khung chính, Drop cap `::first-letter`, và Phân cột `columns: 2`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô cùng phân tích bảng định dạng kiểu dáng `bai18.css` gồm 107 dòng mã tinh tế:
> 
> - **Định dạng cơ sở toàn trang (Dòng 5 đến dòng 17):**
>   - Reset toàn cục `*` với `box-sizing: border-box; margin: 0; padding: 0;`.
>   - `body`: Màu nền xám ngà rất nhẹ `background-color: #fbfbfa;`, màu chữ xám đen trầm `#262626`, phông chữ `Arial, "Helvetica Neue", sans-serif` đem lại cảm giác đọc văn bản vô cùng êm dịu, không gây mỏi mắt.
>   - `line-height: 1.6;`: Chiều cao dòng bằng 160% cỡ chữ, tạo khoảng cách dòng thoáng đãng đúng chuẩn thiết kế đồ họa chữ sách báo.
> 
> - **Khung bài viết chính `.khung-chinh` (Dòng 19 đến dòng 26):**
>   - Độ rộng cực đại `max-width: 760px; margin: 0 auto;`: Căn toàn bộ bài viết vào chính giữa màn hình máy tính với độ rộng lý tưởng cho mắt người đọc quét văn bản từ trái sang phải.
>   - Nền trắng tinh khiết `#ffffff`, phần đệm `padding: 30px 35px;`, bo góc 8px và đổ bóng siêu nhẹ `box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);` tạo cảm giác bài báo nằm trang nhã trên mặt bàn.
> 
> - **Cụm tiêu đề màu cam ấm (Dòng 29 đến dòng 41):**
>   - Tiêu đề chính `.tieu-de-chinh`: Sử dụng tông màu cam đất đậm đà `#E65100`, kích thước lớn `26px`, in đậm `font-weight: bold;`.
>   - Tiêu đề phụ `.tieu-de-phu`: Cùng tông màu cam `#E65100`, kích cỡ `15px`, in đậm vừa phải `font-weight: 600;`, khoảng cách dưới 18px.
> 
> - **Bố cục nội dung và Xử lý ảnh nổi Float (Dòng 44 đến dòng 58):**
>   - Khối chứa `.phan-noi-dung`: Thiết lập `overflow: hidden;` để kích hoạt Ngữ cảnh định dạng khối (BFC), ôm trọn bức ảnh bên trong mà không làm sụp đổ chiều cao khối.
>   - Bức ảnh `.anh-phai`:
>     + `float: right;`: Đẩy ảnh trôi sang góc phải.
>     + `margin-left: 20px; margin-bottom: 15px;`: Tạo khoảng đệm an toàn bên trái và bên dưới, giúp các dòng chữ không bao giờ dính sát vào mép ảnh.
>     + `max-width: 250px; height: auto; border-radius: 6px;`: Giới hạn kích thước ảnh vừa vặn và bo góc nhẹ nhàng.
>   - Thẻ `<p>` trong đoạn nội dung: Áp dụng `text-align: justify;` căn đều hai mép văn bản thẳng tắp như trên trang báo giấy thật.
> 
> - **Tuyệt kỹ Drop Cap: `.doan-dau::first-letter` (Dòng 61 đến dòng 70):**
>   - Đây là điểm nhấn nghệ thuật ấn tượng nhất của bài viết:
>     + `font-family: "Times New Roman", Times, serif;`: Chuyển riêng chữ cái đầu sang phông chữ có chân cổ điển, tạo sự tương phản trang trọng với phông Arial không chân của toàn bài.
>     + `font-size: 3.4em;`: Phóng to kích thước chữ cái lên gấp 3.4 lần, tương đương chiều cao của khoảng 3 dòng văn bản.
>     + `float: left;`: Đẩy chữ cái sang mép trái, tạo điều kiện cho các dòng văn bản lượn quanh chân nó.
>     + `line-height: 0.8;`: Khắc phục khoảng hở đầu dòng, kéo đỉnh chữ cái ngang bằng với đỉnh của dòng chữ đầu tiên.
>     + `margin-right: 6px; margin-top: 4px;`: Khoảng cách đệm tinh chỉnh đến từng pixel.
>     + `color: #E65100; font-weight: bold;`: Tô màu cam đất rực rỡ đồng điệu với tiêu đề bài viết.
> 
> - **Khối Hương vị miền Nam và Bố cục đa cột (Dòng 78 đến dòng 106):**
>   - Khối bao bọc `.khoi-huong-vi`:
>     + `clear: both;`: Giải phóng hoàn toàn luồng nổi của ảnh phía trên, đảm bảo khối luôn nằm tách bạch bên dưới phần văn bản.
>     + Đường viền xanh lục đậm `border: 1.5px solid #2E7D32;`, màu nền xanh lá mạ rất nhạt `#f4fbf4`, bo góc 8px. Màu xanh lục này tạo nên sự tương phản hài hòa hoàn hảo (Cam của hoa và Xanh của lá).
>     + Tiêu đề `.tieu-de-huong-vi`: Chữ màu xanh lục `#2E7D32`, in nghiêng `font-style: italic;`, in đậm.
>   - Danh sách món ăn `.danh-sach-mon`:
>     + `columns: 2;`: Ra lệnh cho trình duyệt tự động chia các thẻ `li` thành 2 cột bằng nhau.
>     + `column-gap: 30px;`: Khoảng cách rãnh giữa 2 cột là 30px, giúp người đọc dễ phân biệt hai luồng nội dung.
>     + `padding-left: 20px;`: Dành không gian cho các dấu chấm đầu dòng tròn trịa của danh sách."

---

## ⏱️ PHẦN 5: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~3 phút 30 giây | 14:30 - 18:00)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai18.html`.
- Bật F12 DevTools và làm các thao tác kiểm thử trực quan.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn quan sát trực tiếp trang bài viết trên trình duyệt Chrome và cùng em thực hiện một số thử nghiệm thú vị với công cụ F12 Developer Tools:
> 
> 1. **Quan sát tổng thể thị giác giao diện:**
>    - Toàn bộ bài viết hiển thị sắc nét, trang nhã.
>    - Chữ cái thụt dòng Drop Cap màu cam toát lên vẻ cổ kính, sang trọng.
>    - Bức ảnh bông điên điển vàng rực nằm gọn gàng bên phải, các dòng văn bản tự động lách sang trái rất mượt mà.
>    - Khối 'Hương vị miền Nam' phía dưới với viền xanh lục nổi bật, 7 món ăn được chia làm 2 cột: Cột bên trái gồm 4 món đầu và cột bên phải gồm 3 món sau một cách cực kỳ tự nhiên.
> 
> 2. **Bật F12 kiểm tra phần tử giả Drop Cap:**
>    - *[Thao tác: Nhấn F12, bấm chuột vào công cụ Inspector (Ctrl + Shift + C) và nhấp vào đoạn văn đầu tiên]*
>    - Thầy cô có thể thấy trong tab **Elements**, khi mở rộng thẻ `<p class="doan-dau">`, trình duyệt hiển thị một nhánh ảo mang tên `::first-letter`.
>    - Bây giờ, em thử tích bỏ thuộc tính `float: left;` trong tab Styles:
>      + *[Thao tác: Bỏ chọn float: left của ::first-letter]*
>      + Thầy cô hãy nhìn trên màn hình: Ngay khi mất `float: left`, chữ cái to khổng lồ lập tức đẩy toàn bộ dòng thứ nhất bay lên trời, tạo ra một khoảng trống vô cùng xấu xí bên dưới!
>      + Khi em tích chọn lại `float: left`: Chữ cái lập tức rơi gọn gàng về bên trái và văn bản lại ôm sát chân chữ. Đây chính là minh chứng thực tế rõ ràng nhất cho vai trò sống còn của `float: left` trong kỹ thuật Drop Cap!
> 
> 3. **Kiểm tra cơ chế phân cột CSS Columns:**
>    - Em bấm chọn vào thẻ `<ul class="danh-sach-mon">`.
>    - Trong tab Styles, em thử tắt thuộc tính `columns: 2;`.
>    - *[Thao tác: Bỏ chọn columns: 2]*
>    - Thầy cô thấy ngay: Danh sách lập tức dồn lại thành 1 cột dọc dài lê thê gồm 7 dòng, để lại một khoảng trống hoang vu ở bên phải khối xanh.
>    - Khi em bật lại `columns: 2`: Phép màu CSS3 lập tức tái phân bổ các dòng thành 2 cột cân đối, thanh lịch. Em thử tăng `columns: 3`: Ngay lập tức danh sách chia thành 3 cột nhỏ! Khả năng co dãn của CSS Multi-column thực sự vô cùng linh hoạt.
> 
> 4. **Kiểm tra Responsive trên thiết bị di động:**
>    - *[Thao tác: Nhấn Ctrl + Shift + M bật Device Toolbar]*
>    - Em co màn hình về chiều rộng điện thoại di động (khoảng 375px - 414px).
>    - Nhờ thuộc tính `max-width: 760px; width: auto;`, khối giấy trắng tự động co gọn lại vừa khít màn hình điện thoại, chữ văn bản căn đều hai bên vẫn hiển thị đẹp mắt, không hề xuất hiện lỗi tràn viền hay mất chữ."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | 18:00 - 19:30)

🎬 **Thao tác:** 
- Chuyển màn hình về lại giao diện hoàn chỉnh của bài tập.
- Nói với giọng kết luận trang trọng, ấm áp.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, bài thực hành số 18 đã mang lại cho em những hiểu biết sâu sắc và bài học quý báu về nghệ thuật thiết kế giao diện web:
> - Hiểu và làm chủ kỹ thuật **Drop Cap** thông qua phần tử giả `::first-letter`, biết cách kết hợp tinh tế giữa `float: left`, `line-height` và `margin` để tạo điểm nhấn typography đậm chất văn hóa.
> - Nắm vững cơ chế hoạt động của luồng trôi nổi `float`, hiểu rõ nguyên nhân sụp đổ chiều cao phần tử cha và cách khắc phục triệt để bằng `overflow: hidden` (kích hoạt BFC) cũng như thuộc tính giải phóng luồng `clear: both`.
> - Ứng dụng thành công thuộc tính đa cột hiện đại `columns` của CSS3 để tối ưu hóa không gian hiển thị danh sách, giúp giao diện gọn gàng và nâng cao trải nghiệm đọc của người dùng.
> 
> Video thuyết minh Bài tập thực hành số 18 của em đến đây là kết thúc.
> Em xin chân thành cảm ơn thầy cô giáo đã luôn theo sát, chỉ dẫn và truyền cảm hứng thẩm mỹ cho chúng em trong từng bài học. Cảm ơn các bạn đã chú ý lắng nghe và theo dõi.
> 
> Kính chúc thầy cô thật nhiều sức khỏe và niềm vui trong công tác! Chúc các bạn luôn sáng tạo và tạo ra nhiều sản phẩm web đẹp mắt! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 18 — Sẵn sàng thu âm và ghi hình OBS Studio.*
