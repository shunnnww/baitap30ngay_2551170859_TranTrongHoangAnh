# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 20: BỘ SƯU TẬP 13 HIỆU ỨNG HÌNH ẢNH VỚI CSS FILTER, TRANSFORM VÀ SVG FILTER

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Học phần:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Mã nguồn liên quan:** `bai20.html`, `bai20.css`, `bai20.js`.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Thiết lập màn hình:** Chia đôi màn hình (`Windows + Mũi tên trái` cho VS Code mở 3 tệp `bai20.html`, `bai20.css`, `bai20.js`; `Windows + Mũi tên phải` cho trình duyệt Chrome hiển thị giao diện Dark Mode Bài 20).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép `> "..."` là **lời nói trực tiếp** của bạn. Hãy nói to, dõng dạc, truyền cảm, hào hứng khi giải thích các hiệu ứng đồ họa bắt mắt.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bôi đen code, nhấp lần lượt qua 13 nút bấm và mở F12 DevTools.
   - ⏱️ **Mốc thời gian:** Định mức ước lượng giúp bạn kiểm soát tiến độ nói chuẩn mực từ 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình hoặc cửa sổ trình duyệt Chrome hiển thị ứng dụng Bài 20 trên nền giao diện tối sang trọng.
- Rê chuột qua khung ảnh: bông hoa hồng trên nền tối xám than, dòng chữ vàng gold uốn lượn *'Special For You'*, và hai hàng nút bấm chứa đầy đủ 13 hiệu ứng đồ họa.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thuyết minh thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em vô cùng hào hứng được thực hiện video báo cáo chi tiết và hướng dẫn kỹ thuật cho **Bài tập thực hành số 20: Xây dựng ứng dụng Bộ sưu tập 13 hiệu ứng xử lý hình ảnh tương tác bằng CSS Filter, CSS Transform và SVG Filter**.
> 
> Trong lịch sử phát triển web thuở sơ khai, nếu muốn thay đổi một bức ảnh từ màu sang đen trắng, làm mờ, đảo màu âm bản hay tạo bóng phát sáng, các lập trình viên bắt buộc phải dùng các phần mềm đồ họa như Adobe Photoshop để cắt ghép và xuất ra hàng chục file ảnh khác nhau. Điều này gây tốn kém dung lượng băng thông và làm chậm tốc độ tải trang nghiêm trọng.
> 
> Với sự ra đời của tiêu chuẩn CSS3 và đồ họa véctơ SVG, trình duyệt web ngày nay đã được tích hợp bộ vi xử lý đồ họa GPU trực tiếp. Chúng ta có thể can thiệp, biến đổi và render từng điểm ảnh (Pixel) của bức ảnh trong thời gian thực chỉ bằng một dòng mã CSS duy nhất!
> 
> Bài thực hành số 20 này là một sân chơi kỹ thuật đồ họa đỉnh cao, tái hiện trọn vẹn 13 hiệu ứng hình ảnh kinh điển:
> - **Nhóm bộ lọc màu sắc:** Grayscale (Trắng đen), Xray (Chụp X-quang), Invert (Âm bản đảo màu), Mask và Alpha (Độ mờ đục và trong suốt).
> - **Nhóm biến đổi không gian 2D Transform:** FlipH (Lật gương theo trục ngang) và FlipV (Lật ngược theo trục dọc).
> - **Nhóm ánh sáng và bóng đổ Drop Shadow:** Glow (Phát sáng vàng rực vầng hào quang), Shadow (Bóng đổ mềm), Bold Shadow (Bóng cứng viền sắc phong cách Pop-art), Drop Shadow (Bóng râm nghiêng có chiều sâu), và Blur (Làm mờ quang học Gaussian).
> - **Hiệu ứng đặc biệt cấp cao Wave:** Nhúng bộ lọc sóng nước SVG Filter với thuật toán tạo nhiễu Fractal Noise và bản đồ dịch chuyển điểm ảnh Displacement Map.
> 
> Đặc biệt, toàn bộ logic chuyển đổi 13 hiệu ứng này được điều khiển bởi một đoạn mã JavaScript cực kỳ tinh gọn chỉ 17 dòng, ứng dụng mô hình hướng dữ liệu Data Attribute chuẩn mực.
> 
> Video hôm nay của em sẽ gồm có 6 phần chính:
> - Phần 1: Lời mở đầu và mục tiêu bài tập.
> - Phần 2: Cơ sở lý thuyết chuyên sâu về CSS Filters, Transform, SVG Filters và Data Attributes.
> - Phần 3: Thuyết minh chi tiết từng dòng mã nguồn HTML (`bai20.html`).
> - Phần 4: Thuyết minh chi tiết bảng định dạng CSS (`bai20.css`) và phân tích toán học 13 hiệu ứng.
> - Phần 5: Thuyết minh logic điều khiển JavaScript (`bai20.js`).
> - Phần 6: Thực hành demo bấm qua toàn bộ 13 nút, soi F12 Elements, Console và kiểm tra hiệu năng GPU.
> - Phần 7: Tổng kết bài học và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | 02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code mở tệp `bai20.css`.
- Bôi đen các dòng khai báo filter từ dòng 96 đến 148, và mở file `bai20.html` chỉ vào thẻ `<svg>` ở dòng 41.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng code cụ thể, em xin tóm lược 4 trụ cột kiến thức lý thuyết cốt lõi của bài học này:
> 
> **Thứ nhất: Cơ chế hoạt động của thuộc tính CSS Filter.**
> - Thuộc tính `filter` cung cấp các hiệu ứng xử lý hình ảnh điểm ảnh trực tiếp trước khi phần tử được hiển thị lên màn hình.
> - Một câu hỏi phỏng vấn kinh điển mà các nhà tuyển dụng Front-end rất hay hỏi: **'Sự khác biệt cốt lõi giữa box-shadow và drop-shadow() trong CSS là gì?'**
>   + `box-shadow`: Luôn luôn tạo bóng đổ hình chữ nhật bao quanh toàn bộ chiếc hộp bao ngoài (Bounding Box) của phần tử. Nếu ta áp dụng `box-shadow` cho một bức ảnh bông hoa có nền trong suốt, bóng đổ sẽ là một khối chữ nhật vuông vức rất xấu xí.
>   + `filter: drop-shadow()`: Đây là hàm lọc thông minh. Trình duyệt sẽ quét qua kênh Alpha (kênh trong suốt) của bức ảnh GIF hoặc PNG. Nó bỏ qua toàn bộ vùng trong suốt và chỉ đổ bóng bám sát uốn lượn theo từng đường viền cánh hoa và cuống lá thực tế! Đây chính là lý do vì sao trong bài này chúng em bắt buộc phải dùng `drop-shadow()`.
> 
> **Thứ hai: Phép biến đổi không gian 2D với CSS Transform.**
> - Để lật hình ảnh, chúng ta không cần dùng bộ lọc mà sử dụng thuộc tính `transform`.
> - `transform: scaleX(-1);`: Thu phóng trục hoành với tỷ lệ âm 1, tương đương với một phép quay đối xứng 180 độ quanh trục tung, tạo hiệu ứng lật gương ngang (Flip Horizontal).
> - `transform: scaleY(-1);`: Thu phóng trục tung với tỷ lệ âm 1, tạo hiệu ứng lật ngược từ trên xuống dưới (Flip Vertical).
> - Phép biến đổi transform được xử lý độc lập trên luồng Compositor của GPU, do đó tốc độ thực thi đạt 60 khung hình/giây cực kỳ mượt mà.
> 
> **Thứ ba: Bộ lọc sóng nước SVG Filter (feTurbulence & feDisplacementMap).**
> - CSS Filter có sẵn các hàm cơ bản như làm mờ hay chỉnh màu, nhưng không có hàm tạo sóng nước uốn éo. Tuy nhiên, CSS cho phép ta nhúng một bộ lọc SVG ngoại vi thông qua cú pháp: `filter: url(#wave);`.
> - Thẻ `<filter id="wave">` bên trong SVG kết hợp hai bộ lọc toán học vi phân:
>   + `<feTurbulence type="fractalNoise" baseFrequency="0.03 0.06">`: Sinh ra một mạng lưới nhiễu ngẫu nhiên dạng sóng fractal theo tần số xác định.
>   + `<feDisplacementMap in="SourceGraphic" in2="noise" scale="8">`: Dùng ma trận nhiễu sóng đó làm bản đồ dịch chuyển tọa độ các điểm ảnh của bông hoa gốc theo biên độ dao động 8px, tạo cảm giác bông hoa đang gợn sóng lăn tăn như nhìn qua mặt nước hồ!
> 
> **Thứ tư: Lập trình giao diện hướng dữ liệu với Data Attribute (data-*).**
> - Thay vì viết 13 hàm JavaScript riêng biệt hoặc dùng câu lệnh `switch...case` cồng kềnh, trên mỗi thẻ button chúng em gán thuộc tính tùy biến `data-filter="ten_hieu_ung"`.
> - JavaScript chỉ cần đọc giá trị này bằng `this.getAttribute('data-filter')` và tự động ghép thành tên class: `'anh-hoa filter-' + kieuFilter`. Mô hình này giúp mở rộng ứng dụng vô cùng dễ dàng: sau này nếu muốn thêm hiệu ứng thứ 14, 15, ta chỉ việc viết thêm CSS và gắn thêm nút trong HTML mà không cần sửa đổi bất kỳ một dòng code JavaScript nào!"

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai20.html`) (Thời lượng: ~3 phút 30 giây | 06:00 - 09:30)

🎬 **Thao tác:** 
- Chuyển sang tab `bai20.html` trên VS Code.
- Bôi đen lần lượt từng khối mã từ dòng 1 đến dòng 51 khi thuyết minh.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô cùng phân tích chi tiết tệp cấu trúc `bai20.html` gồm 51 dòng code chuẩn ngữ nghĩa HTML5:
> 
> - **Phần khai báo tiêu chuẩn (Dòng 1 đến dòng 8):**
>   - Đầy đủ `<!DOCTYPE html>`, `<html lang="vi">`, `<meta charset="UTF-8">`, và `<meta name="viewport">`.
>   - Dòng 6: Thẻ `<title>` ghi rõ: *'Bài 20 - Hiệu ứng ảnh với CSS Filter'*.
>   - Dòng 7: Liên kết bảng định kiểu `bai20.css`.
> 
> - **Khung chính bao bọc `.khung-chinh` (Dòng 11 đến dòng 38):**
>   Toàn bộ giao diện được căn giữa trong thẻ `div.khung-chinh`, chia thành 2 khu vực chức năng chính:
> 
>   1. **Khu vực 1: Hộp trưng bày tranh nghệ thuật `<div class="hop-anh">` (Dòng 13 đến dòng 16):**
>      - Dòng 14: Thẻ ảnh `<img src="hoahong.gif" alt="Hoa hồng" id="anh-hoa" class="anh-hoa filter-gray">`. Bức ảnh mang `id="anh-hoa"` để JavaScript can thiệp đổi class, và ban đầu được gán sẵn class khởi tạo `filter-gray` hiển thị trạng thái đen trắng.
>      - Dòng 15: Thẻ `<div class="chu-special">Special For You</div>` chứa dòng chữ thư pháp tiếng Anh lãng mạn, được định kiểu hiệu ứng chuyển màu kim loại Gradient cực kỳ bắt mắt.
> 
>   2. **Khu vực 2: Thanh điều khiển nút bấm `<div class="cac-hang-nut">` (Dòng 19 đến dòng 37):**
>      - Được bố trí thành 2 hàng nút bấm nằm ngang theo đúng mẫu thiết kế:
>      - **Hàng nút thứ nhất (Dòng 20 đến 29):** Gồm 8 nút bấm:
>        + Nút 1: `Gray` (có sẵn class `active` ban đầu).
>        + Nút 2: `Xray`.
>        + Nút 3: `Invert`.
>        + Nút 4: `FlipH`.
>        + Nút 5: `FlipV`.
>        + Nút 6: `Glow`.
>        + Nút 7: `Shadow`.
>        + Nút 8: `Bold Shadow`.
>      - **Hàng nút thứ hai (Dòng 30 đến 36):** Gồm 5 nút bấm:
>        + Nút 9: `DropShadow`.
>        + Nút 10: `Blur`.
>        + Nút 11: `Wave`.
>        + Nút 12: `Mask`.
>        + Nút 13: `Alpha`.
>      - Tất cả 13 nút bấm đều có chung class `.btn-filter` và mang thuộc tính `data-filter` chứa định danh hiệu ứng tương ứng.
> 
> - **Thẻ nhúng SVG Filter ẩn (Dòng 41 đến dòng 46):**
>   - Thẻ `<svg style="display: none;">` được ẩn khỏi luồng hiển thị giao diện nhưng vẫn tồn tại trên cây DOM để CSS có thể truy vấn ID `#wave`.
>   - Bên trong chứa thẻ `<filter id="wave">` với hai nút lọc con `<feTurbulence>` và `<feDisplacementMap>` chịu trách nhiệm tạo hiệu ứng sóng nước.
> 
> - **Dòng 48:** Nhúng tệp kịch bản `bai20.js` ở cuối trang."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai20.css`) (Thời lượng: ~5 phút | 09:30 - 14:30)

🎬 **Thao tác:** 
- Chuyển sang tab `bai20.css`.
- Bôi đen từng phần: Dark Theme body, Hộp ảnh, Hiệu ứng Gradient Text, Hai hàng nút bấm, và mổ xẻ chi tiết từng class từ dòng 96 đến dòng 148.

🗣️ **Lời đọc:**
> "Bây giờ, em xin phép phân tích chi tiết bảng định dạng kiểu dáng `bai20.css` gồm 149 dòng mã, nơi chứa đựng toàn bộ các công thức toán học và đồ họa của 13 hiệu ứng:
> 
> - **Chủ đề Dark Mode và Căn giữa toàn trang (Dòng 5 đến dòng 25):**
>   - Reset toàn cục `*` với `box-sizing: border-box; margin: 0; padding: 0;`.
>   - Màu nền `background-color: #111827;`: Tông màu xanh đen vũ trụ sâu thẳm, giúp tôn vinh các hiệu ứng phát sáng và màu sắc của bức ảnh một cách tối đa.
>   - Bố cục Flexbox toàn màn hình `min-height: 100vh; display: flex; justify-content: center; align-items: center;` căn toàn bộ ứng dụng vào chính giữa tâm mắt người nhìn.
> 
> - **Hộp chứa ảnh `.hop-anh` và Chuyển động mượt mà (Dòng 28 đến dòng 44):**
>   - Nền xám than đậm `#1c2226`, bo tròn 4 góc 12px, độ rộng tối đa 460px.
>   - Thẻ ảnh `.anh-hoa`:
>     + Thiết lập thuộc tính chuyển cảnh then chốt: `transition: filter 0.25s, transform 0.25s, opacity 0.25s;`. Nhờ dòng lệnh này, mỗi khi người dùng bấm chuyển đổi giữa các hiệu ứng, bức ảnh không bị giật đổi màu đột ngột mà sẽ biến chuyển mềm mại mượt mà trong thời gian một phần tư giây!
> 
> - **Dòng chữ Gradient kim loại vàng Gold `.chu-special` (Dòng 47 đến dòng 57):**
>   - Phông chữ có chân nghệ thuật `font-family: Georgia, serif; font-style: italic; font-size: 26px; font-weight: bold;`.
>   - Tuyệt chiêu CSS Gradient chữ:
>     + `background: linear-gradient(180deg, #fde047 0%, #eab308 100%);`: Tạo dải màu chuyển tiếp từ vàng sáng xuống vàng óng ánh.
>     + `-webkit-background-clip: text;`: Cắt phần nền dải màu ép chặt vừa khít vào các nét chữ.
>     + `-webkit-text-fill-color: transparent;`: Làm màu chữ gốc trở nên trong suốt để dải màu nền phía sau lộ ra rực rỡ.
>     + `text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);`: Đổ bóng nhẹ phía sau tạo chiều sâu 3D lộng lẫy.
> 
> - **Định dạng thanh nút bấm (Dòng 60 đến dòng 94):**
>   - `.cac-hang-nut`: Flexbox xếp dọc với khoảng cách `gap: 12px;`.
>   - `.hang-nut`: Flexbox xếp ngang với `flex-wrap: wrap; justify-content: center; gap: 8px;` giúp các nút tự động xuống hàng mềm mại nếu màn hình bị hẹp.
>   - Nút bấm `.btn-filter`: Nền xám đậm `#232b30`, viền mảnh `#374151`, chữ trắng xám `#f3f4f6`, bo góc 6px, hiệu ứng hover chuyển sang `#2d3748`.
>   - **Trạng thái nút đang chọn `.btn-filter.active`:** Phủ nền xanh dương nổi bật `background-color: #0d6efd; border-color: #0d6efd; color: #ffffff;` giúp người dùng biết ngay mình đang xem hiệu ứng nào.
> 
> - **Phân tích chi tiết từng công thức của 13 hiệu ứng (Dòng 96 đến dòng 148):**
>   1. `.filter-gray`: `filter: grayscale(1);` — Khử sạch 100% độ bão hòa màu, đưa ảnh về thang độ xám đơn sắc.
>   2. `.filter-xray`: `filter: grayscale(1) invert(1);` — Kết hợp kép: vừa chuyển thang xám vừa đảo ngược độ sáng tối, tạo hiệu ứng phim chụp X-quang y tế.
>   3. `.filter-invert`: `filter: invert(1);` — Đảo ngược 100% giá trị các kênh màu RGB, biến đỏ thành xanh lơ Cyan, tạo hiệu ứng âm bản bí ẩn.
>   4. `.filter-fliph`: `transform: scaleX(-1);` — Lật gương bông hoa từ trái qua phải theo trục hoành.
>   5. `.filter-flipv`: `transform: scaleY(-1);` — Lật ngược bông hoa từ trên cắm xuống dưới theo trục tung.
>   6. `.filter-glow`: `filter: drop-shadow(0 0 10px #fbbf24);` — Đổ bóng vàng kim rực rỡ với độ dời X=0, Y=0 và độ tỏa 10px bám theo từng cánh hoa, tạo vầng hào quang lấp lánh trong đêm tối.
>   7. `.filter-shadow`: `filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.6));` — Đổ bóng chếch 5px sang phải, 5px xuống dưới với độ mờ 6px, tạo cảm giác có nguồn sáng chiếu nghiêng tự nhiên.
>   8. `.filter-boldshadow`: `filter: drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.9));` — Điểm đặc biệt: Độ mờ Blur bằng `0px`. Nó tạo ra một bóng đen đậm sắc cạnh như tranh cắt dán Pop-art thời thượng.
>   9. `.filter-dropshadow`: `filter: drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.7));` — Bóng râm đậm sâu hơn, tạo độ nổi khối mạnh.
>   10. `.filter-blur`: `filter: blur(3px);` — Làm mờ quang học Gaussian với bán kính 3 pixel, như nhìn qua một lớp kính mờ sương.
>   11. `.filter-wave`: `filter: url(#wave);` — Kích hoạt bộ lọc sóng nước SVG filter đã nhúng ở file HTML.
>   12. `.filter-mask`: `opacity: 0.4; filter: contrast(1.8);` — Vừa giảm độ mờ đục vừa tăng vọt độ tương phản lên 180%, tạo vẻ huyền ảo như nhìn qua mặt nạ lọc phim.
>   13. `.filter-alpha`: `opacity: 0.4;` — Giảm độ mờ đục của toàn bộ ảnh xuống còn 40%."

---

## ⏱️ PHẦN 5: THUYẾT MINH LOGIC ĐIỀU KHIỂN JAVASCRIPT (`bai20.js`) (Thời lượng: ~2 phút 30 giây | 14:30 - 17:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai20.js`.
- Bôi đen toàn bộ 17 dòng code và chỉ chuột vào vòng lặp `cacNut.forEach`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta cùng xem xét tệp kịch bản `bai20.js`. Đây là một ví dụ mẫu mực về tư duy lập trình tối giản, thanh lịch và hiệu quả:
> 
> - **Khởi tạo tham chiếu DOM (Dòng 5 và 6):**
>   - `const anhHoa = document.getElementById('anh-hoa');`: Lấy đối tượng ảnh bông hoa.
>   - `const cacNut = document.querySelectorAll('.btn-filter');`: Thu thập toàn bộ 13 nút bấm vào một NodeList.
> 
> - **Vòng lặp đăng ký sự kiện hướng dữ liệu (Dòng 8 đến dòng 16):**
>   - Chúng em dùng phương thức `cacNut.forEach(function(nut) { ... })` để duyệt qua từng nút bấm và gán sự kiện `click`:
>     - **Dòng 10:** Khi một nút được bấm, bước đầu tiên là gỡ bỏ class `active` ra khỏi tất cả các nút khác bằng `cacNut.forEach(n => n.classList.remove('active'));`.
>     - **Dòng 11:** Thêm ngay class `active` vào chính nút vừa được bấm bằng `this.classList.add('active');`. Nhờ đó màu nền xanh dương lập tức sáng lên ở nút đó.
>     - **Dòng 13:** Trích xuất giá trị hiệu ứng bằng `const kieuFilter = this.getAttribute('data-filter');`.
>     - **Dòng 14:** Gán lại toàn bộ tên class cho bức ảnh: `anhHoa.className = 'anh-hoa filter-' + kieuFilter;`.
>   - Chỉ bằng đúng 2 dòng lệnh ở dòng 13 và 14, toàn bộ cơ chế đổi hiệu ứng được hoàn tất trong chớp mắt mà không cần một dòng lệnh `if...else` hay `switch...case` nào!"

---

## ⏱️ PHẦN 6: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~3 phút 30 giây | 17:00 - 20:30)

🎬 **Thao tác:** 
- Mở rộng cửa sổ Chrome hiển thị `bai20.html`.
- Nhấp chuột lần lượt qua từng nút trong số 13 nút bấm, vừa bấm vừa quan sát sự biến chuyển của bông hoa.
- Bật F12 DevTools soi Elements và Console.

🗣️ **Lời đọc:**
> "Và bây giờ, em xin kính mời quý thầy cô cùng các bạn đến với phần trình diễn thực nghiệm chạy thử 13 hiệu ứng trực tiếp trên trình duyệt Chrome:
> 
> 1. **Kiểm tra trạng thái ban đầu:**
>    - Nút **Gray** đang sáng màu xanh active. Bông hoa hồng hiển thị với tông màu đen trắng trang nhã.
>    - Dòng chữ *'Special For You'* phía dưới ánh lên màu vàng kim loại sang trọng.
> 
> 2. **Trình diễn tuần tự qua từng nút bấm:**
>    - *[Thao tác: Bấm nút Xray]*: Bông hoa lập tức chuyển sang chế độ âm bản X-quang, các gân lá và cánh hoa phát sáng sắc trắng trên nền đen kỳ bí.
>    - *[Thao tác: Bấm nút Invert]*: Toàn bộ màu sắc bị đảo ngược, bông hoa đỏ biến thành bông hoa màu xanh lơ Cyan độc đáo!
>    - *[Thao tác: Bấm nút FlipH]*: Bông hoa lật gương sang phải một cách uyển chuyển nhờ `transform: scaleX(-1)`.
>    - *[Thao tác: Bấm nút FlipV]*: Bông hoa lật cắm đầu xuống dưới nhờ `transform: scaleY(-1)`.
>    - *[Thao tác: Bấm nút Glow]*: Thầy cô hãy nhìn vào màn hình: Quanh từng cánh hoa hồng đỏ thắm bỗng tỏa ra một vầng hào quang màu vàng kim rực rỡ `drop-shadow(0 0 10px #fbbf24)` cực kỳ huyền ảo!
>    - *[Thao tác: Bấm nút Shadow]*: Một bóng đen mềm mại xuất hiện chếch sang góc dưới bên phải.
>    - *[Thao tác: Bấm nút Bold Shadow]*: Bóng đổ chuyển sang sắc cạnh, đen tuyền, đậm chất nghệ thuật tranh cổ động Pop-art.
>    - *[Thao tác: Bấm nút DropShadow]*: Bóng râm nghiêng có độ sâu trường ảnh rất thật.
>    - *[Thao tác: Bấm nút Blur]*: Bông hoa lập tức mờ sương mộng mị.
>    - *[Thao tác: Bấm nút Wave]*: Đây là hiệu ứng ấn tượng nhất! Thầy cô có thể thấy toàn bộ cánh hoa bị uốn lượn biến dạng theo hình vân sóng nước lăn tăn nhờ bộ lọc SVG Filter `#wave`!
>    - *[Thao tác: Bấm nút Mask]*: Tăng tương phản mạnh mẽ kết hợp độ mờ đục 40%.
>    - *[Thao tác: Bấm nút Alpha]*: Bông hoa trở nên mờ ảo trong suốt.
> 
> 3. **Mở F12 Developer Tools soi chuyên sâu kỹ thuật:**
>    - *[Thao tác: Bấm phím F12, chọn tab Elements]*
>    - Em bấm chọn vào thẻ `<img id="anh-hoa">`.
>    - Bây giờ em nhấp chuột liên tục qua các nút trên giao diện. Thầy cô có thể quan sát thấy trong tab Elements: Thuộc tính `class` của thẻ `img` nhảy nhót cực kỳ nhịp nhàng: từ `filter-glow`, sang `filter-wave`, sang `filter-xray`.
>    - Chuyển sang tab **Console**: Hoàn toàn sạch bóng lỗi cú pháp hay cảnh báo hiệu năng.
>    - Kích hoạt **Device Toolbar** (`Ctrl + Shift + M`): Co giãn màn hình về các kích thước máy tính bảng và điện thoại di động: Các hàng nút bấm tự động co giãn và xuống dòng đều đặn, không một nút nào bị tràn ra khỏi màn hình."

---

## ⏱️ PHẦN 7: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | 20:30 - 22:00)

🎬 **Thao tác:** 
- Chuyển màn hình về lại giao diện đẹp mắt nhất (ví dụ hiệu ứng Glow hoặc Invert).
- Đọc lời kết trang trọng, tràn đầy cảm hứng.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và toàn thể các bạn sinh viên, Bài tập thực hành số 20 là một chặng dừng chân tuyệt vời, khép lại chuỗi bài tập thực hành đồ họa web với vô vàn kiến thức bổ ích:
> - Nắm vững cơ chế xử lý đồ họa GPU của trình duyệt thông qua thuộc tính **CSS Filter**, hiểu rõ bản chất ưu việt của hàm `drop-shadow()` so với `box-shadow` truyền thống.
> - Làm chủ các phép biến đổi không gian 2D với **CSS Transform** (`scaleX`, `scaleY`) và thuộc tính chuyển cảnh mượt mà `transition`.
> - Khám phá sức mạnh không giới hạn của việc kết hợp CSS với bộ lọc véctơ **SVG Filter** thông qua `<feTurbulence>` và `<feDisplacementMap>` để tạo nên các hiệu ứng sóng nước phức tạp.
> - Rèn luyện tư duy lập trình JavaScript hướng dữ liệu với thuộc tính tùy biến `data-filter`, giúp mã nguồn ngắn gọn, thanh lịch và dễ dàng mở rộng.
> 
> Video thuyết minh Bài tập số 20 của em đến đây xin phép được khép lại.
> Em xin bày tỏ lòng biết ơn sâu sắc đến quý thầy cô giáo bộ môn đã tận tâm hướng dẫn, giảng dạy và truyền lửa đam mê cho chúng em trong suốt học phần Phát triển ứng dụng Web cơ bản. Cảm ơn các bạn đã chú ý lắng nghe và đồng hành cùng em trong suốt video.
> 
> Kính chúc quý thầy cô luôn dồi dào sức khỏe, hạnh phúc và gặt hái thêm nhiều thành tựu trong sự nghiệp giáo dục! Chúc các bạn sinh viên học tập thật tốt và luôn tự tin sáng tạo! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 20 — Sẵn sàng thu âm và ghi hình OBS Studio.*
