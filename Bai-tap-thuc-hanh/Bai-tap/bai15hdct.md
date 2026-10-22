# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 15: ỨNG DỤNG MÁY TÍNH BỎ TÚI ĐIỆN TỬ (CALCULATOR) — XỬ LÝ BIỂU THỨC CHUỖI, EVAL() AN TOÀN VÀ BÀN PHÍM CSS GRID

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Bàn phím máy tính, Phần mềm quay OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (`Windows + Phím mũi tên trái` cho VS Code; `Windows + Phím mũi tên phải` cho Chrome).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói với phong thái tự tin, nhả chữ rõ ràng, hào hứng khi giải thích các thuật toán xử lý biểu thức chuỗi và hàm `eval()`.
   - 🎬 **Thao tác:** Hướng dẫn hành động bấm các phím máy tính trên màn hình web, gõ phím vật lý từ bàn phím, soi F12 Console và Elements.
   - ⏱️ **Thời gian:** Mốc thời gian tích lũy để bạn kiểm soát tiến độ nói trên đồng hồ OBS từ 00:00 đến 19:30.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 – 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình 1080p.
- Màn hình VS Code mở sẵn 3 tệp tin: `bai15.html`, `bai15.css`, `bai15.js`.
- Tab Chrome hiển thị chiếc máy tính bỏ túi Dark Mode với màn hình LCD xanh huỳnh quang hoài niệm, bàn phím số 4x5 được phân màu các nhóm phím chức năng rất đẹp mắt.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản, cùng toàn thể các bạn sinh viên đang theo dõi video thuyết minh hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em vô cùng phấn khởi được trình bày và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 15: Xây dựng ứng dụng máy tính bỏ túi điện tử thông minh (Smart Calculator) với CSS Grid, thuật toán xử lý chuỗi biểu thức toán học và cơ chế tính toán an toàn trong JavaScript**.
> 
> Trong chương trình đào tạo lập trình web, bài toán xây dựng chiếc máy tính bỏ túi (Calculator) luôn được xem là một bài tập tổng hợp kinh điển nhưng có độ phức tạp rất cao. Một ứng dụng máy tính thực thụ không đơn thuần chỉ là cộng hai con số rồi in ra màn hình, mà đòi hỏi người lập trình phải giải quyết một chuỗi các thách thức kỹ thuật hóc búa:
> 
> - Thứ nhất về mặt giao diện: Thiết kế một khung thân máy tính bỏ túi chuẩn công thái học, với màn hình LCD 2 tầng hiển thị đồng thời cả biểu thức lẫn kết quả, và hệ thống bàn phím lưới 4 cột × 5 hàng bằng **CSS Grid**, phân chia màu sắc khoa học giữa phím số, toán tử, phím xóa và phím bằng.
> - Thứ hai về xử lý logic chuỗi (String Parsing): Xử lý trơn tru các thao tác gõ liên tiếp của người dùng, ngăn chặn việc bấm hai toán tử liền nhau, kiểm soát dấu chấm thập phân tránh nhập lặp, và đặc biệt là thuật toán tự động đóng/mở ngoặc đơn `( )` cùng cơ chế tự chèn phép nhân ẩn vô cùng thông minh.
> - Thứ ba về tính toán và an toàn dữ liệu: Sử dụng hàm `eval()` kết hợp với biểu thức chính quy (Regex) để tiền xử lý chuẩn hóa ký hiệu toán học (`×` thành `*`, `÷` thành `/`), tự bù các dấu ngoặc còn thiếu, bọc trong khối `try...catch` để bắt lỗi cú pháp, bắt lỗi chia cho số 0, và khử sai số dấu phẩy động chuẩn IEEE 754.
> - Thứ tư về trải nghiệm người dùng kép (Dual Input UX): Hỗ trợ đồng thời cả tương tác click chuột trên giao diện và thao tác gõ phím vật lý từ bàn phím máy tính với các phím Enter, Backspace, Escape.
> 
> Lộ trình thuyết minh của em hôm nay gồm có 6 phần chính:
> 1. Phân tích nền tảng lý thuyết về máy trạng thái chuỗi, hàm `eval()` và sai số số thực.
> 2. Đi sâu giải thích chi tiết cấu trúc HTML trong `bai15.html`.
> 3. Phân tích tư duy thiết kế giao diện Cyberpunk Dark Mode trong `bai15.css`.
> 4. Mổ xẻ từng hàm, từng thuật toán thông minh trong tệp tin `bai15.js`.
> 5. Thực hành demo tương tác thực tế, kiểm thử hàng loạt ca kiểm thử biên (Edge Cases), soi F12 Console và Box Model.
> 6. Tổng kết bài học kinh nghiệm, các lưu ý bảo mật và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép bắt đầu ngay với phần cơ sở lý thuyết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 – 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Rê chuột vào phần hàm `tinhKetQua()` và khối `keydown` trong `bai15.js`, bôi đen dòng lệnh `eval()` và phép chia `/ 100000000`.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng code cụ thể, em xin phép tóm lược 4 trụ cột lý thuyết quan trọng làm xương sống cho chiếc máy tính điện tử này:
> 
> **Trụ cột thứ nhất: Cơ chế phân tích cú pháp chuỗi và hàm `eval()`.**
> Trong JavaScript, `eval()` là một hàm toàn cục có khả năng nhận vào một chuỗi ký tự và thông dịch, thực thi chuỗi đó như một đoạn mã lệnh JavaScript thực thụ. Ví dụ, `eval("2 + 3 * 4")` sẽ tự động tuân thủ thứ tự ưu tiên toán học nhân chia trước, cộng trừ sau để trả về kết quả là `14`.
> - Tuy nhiên, các ký hiệu toán học hiển thị trực quan cho người dùng Việt Nam và quốc tế là dấu nhân `×` (Unicode `\u00D7`) và dấu chia `÷` (Unicode `\u00F7`), trong khi JavaScript chỉ hiểu toán tử `*` và `/`.
> - Do đó, trước khi đưa vào `eval()`, chúng ta bắt buộc phải chạy qua một bước tiền xử lý (Preprocessing / Sanitization) bằng biểu thức chính quy (Regex) để ánh xạ các ký tự toán học sang toán tử chuẩn của ngôn ngữ.
> 
> **Trụ cột thứ hai: Vấn đề sai số dấu phẩy động (Floating Point Arithmetic Quirks).**
> Trong mọi ngôn ngữ lập trình tuân theo tiêu chuẩn IEEE 754 như JavaScript hay Python, các số thập phân được biểu diễn dưới dạng nhị phân trong bộ nhớ máy tính. Do một số phân số thập phân không thể biểu diễn hữu hạn dưới dạng nhị phân, dẫn đến hiện tượng sai số kỳ lạ.
> - Điển hình là phép tính kinh điển: `0.1 + 0.2` trong JavaScript không bằng `0.3`, mà lại bằng `0.30000000000000004`!
> - Nếu một chiếc máy tính bỏ túi mà in ra con số dài dòng như vậy thì trải nghiệm người dùng sẽ vô cùng tệ. Vì vậy, chúng ta áp dụng công thức làm tròn khử sai số: `Math.round(ketQua * 100000000) / 100000000`, giúp giữ lại tối đa 8 chữ số thập phân có nghĩa và loại bỏ hoàn toàn các số đuôi rác.
> 
> **Trụ cột thứ ba: Cơ chế kiểm soát ngoại lệ với khối `try...catch`.**
> Khi người dùng nhập một biểu thức sai ngữ pháp (ví dụ nhập `(5 + 2 *` rồi bấm bằng), nếu chạy `eval()` trực tiếp, chương trình sẽ ném ra ngoại lệ `SyntaxError` và làm sập toàn bộ luồng JavaScript.
> Việc bọc khối tính toán trong cấu trúc `try...catch` bảo đảm rằng bất kỳ lỗi cú pháp nào cũng sẽ được bắt lại êm ái, chuyển sang hiển thị chữ `'Lỗi'` trên màn hình mà không làm gián đoạn hoạt động của ứng dụng.
> 
> **Trụ cột thứ tư: Xử lý sự kiện bàn phím toàn cục (Global Keyboard Event Handling).**
> Bằng việc đăng ký lắng nghe sự kiện `keydown` trên đối tượng `document`, trang web có thể chặn và bắt các phím bấm vật lý của người dùng. Chúng ta cần chú ý gọi `event.preventDefault()` khi bắt phím Enter hoặc phím `/` để ngăn trình duyệt tự động kích hoạt tính năng tìm kiếm nhanh hoặc gửi form mặc định."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai15.html`) (06:00 – 09:30 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai15.html` trên VS Code.
- Bôi đen khối `.nhan-hieu`, `.man-hinh`, và lướt qua từng hàng nút trong `.ban-phim`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích chi tiết tệp mã nguồn cấu trúc `bai15.html`.
> 
> Tài liệu được tổ chức rất chặt chẽ với 61 dòng code chuẩn HTML5:
> 
> - **Phần `<head>` từ dòng 1 đến dòng 8:** Thiết lập đầy đủ bảng mã tiếng Việt UTF-8, cấu hình `viewport` co dãn đa thiết bị, tiêu đề trang *'Bài 15 - Máy tính đơn giản (Calculator)'*, và kết nối đến tệp kiểu dáng `bai15.css`.
> 
> - **Phần thân máy tính trong thẻ `<body>` từ dòng 10 đến dòng 59:**
>   - Dòng 12: Khối bao bọc trung tâm `<div class="may-tinh">`. Đây chính là bộ vỏ của chiếc máy tính cầm tay, mang tông màu than chì đậm chất công nghệ.
> 
>   - **Phân khu 1: Nhãn hiệu sản phẩm (Dòng 14):**
>     - Thẻ `<div class="nhan-hieu">MÁY TÍNH ĐIỆN TỬ</div>` đặt ở góc trên, mô phỏng dòng thương hiệu in chìm trên các dòng máy tính kỹ thuật thực tế.
> 
>   - **Phân khu 2: Màn hình LCD hai tầng chuyên nghiệp (Dòng 17 đến 22):**
>     - Khối `<div class="man-hinh">` gồm có 2 tầng hiển thị phân biệt:
>       - Tầng trên (Dòng 19): `<div id="phep-tinh" class="phep-tinh"></div>` — Dòng chữ cỡ nhỏ hiển thị chuỗi biểu thức dài mà người dùng đang nhập dở (ví dụ: `150 × (2 + 3)`).
>       - Tầng dưới (Dòng 21): `<div id="ket-qua" class="ket-qua">0</div>` — Dòng số lớn rực rỡ hiển thị kết quả tính toán cuối cùng, mặc định ban đầu là số `0`.
> 
>   - **Phân khu 3: Bàn phím lưới 4 cột × 5 hàng (`<div class="ban-phim">` từ dòng 25 đến 54):**
>     - Khu vực này chứa 19 nút bấm `<button type="button">`, mỗi nút đều được chỉ định thuộc tính sự kiện `onclick` gọi trực tiếp vào các hàm JavaScript tương ứng:
>       - **Hàng 1 (Dòng 27 - 30):** Phím xóa toàn bộ `C` mang class `.nut-xoa` gọi `xoaTatCa()`; phím ngoặc thông minh `( )` mang class `.nut-phu` gọi `nhapNgoac()`; phím phần trăm `%` gọi `nhapKyTu('%')`; và phím phép chia `÷` mang class `.nut-toan-tu` gọi `nhapKyTu('÷')`.
>       - **Hàng 2 (Dòng 33 - 36):** Các phím số `7`, `8`, `9` mang class `.nut-so` và phím nhân `×` mang class `.nut-toan-tu`.
>       - **Hàng 3 (Dòng 39 - 42):** Các phím số `4`, `5`, `6` và phím trừ `−`.
>       - **Hàng 4 (Dòng 45 - 48):** Các phím số `1`, `2`, `3` và phím cộng `+`.
>       - **Hàng 5 (Dòng 51 - 53):** Phím số `0` được bổ sung thêm class `.nut-khong` (lát nữa qua CSS chúng ta sẽ thấy nó chiếm 2 ô cột); phím dấu chấm thập phân `.`; và nút tính bằng `=` mang class nổi bật `.nut-bang` kích hoạt hàm `tinhKetQua()`.
> 
> - **Dòng 58:** Thẻ `<script src="bai15.js"></script>` được đặt ở cuối cùng để kích hoạt toàn bộ bộ não xử lý cho máy tính."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai15.css`) (09:30 – 12:30 | Thời lượng: ~3 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai15.css`.
- Trỏ chuột vào các khối `.may-tinh`, `.man-hinh`, `.ban-phim`, `.nut:hover`, `.nut:active`, và `.nut-khong`.

🗣️ **Lời đọc:**
> "Tiếp tục chương trình, em xin phân tích tệp kiểu dáng `bai15.css` gồm 154 dòng lệnh — nơi kiến tạo nên một giao diện máy tính bỏ túi Dark Mode phong cách viễn tưởng hiện đại:
> 
> - **Thiết lập nền và căn giữa tuyệt đối (Dòng 7 đến 21):**
>   - Reset toàn cục `* { box-sizing: border-box; margin: 0; padding: 0; }`.
>   - Thẻ `body`: Nền đen sâu thẳm `#0b0f19`, họ font hiện đại `'Segoe UI'`, kết hợp bộ 3 Flexbox căn giữa tâm màn hình với `min-height: 100vh; display: flex; justify-content: center; align-items: center;`.
> 
> - **Khung thân vỏ máy tính `.may-tinh` (Dòng 24 đến 31):**
>   - Màu nền than chì đậm `#111827`, bo viền 16px mềm mại, độ rộng tối đa `max-width: 360px` chuẩn tỷ lệ cầm tay.
>   - Đổ bóng 2 lớp tinh xảo: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.06);`. Lớp viền sáng 1px mảnh như sợi tơ bao quanh viền vỏ máy tạo cảm giác viền kim loại cao cấp.
> 
> - **Màn hình LCD phát quang hoài niệm `.man-hinh` (Dòng 45 đến 58):**
>   - Nền xanh lục sẫm `#022c22`, chữ màu xanh huỳnh quang rực sáng `#4ade80`.
>   - Đổ bóng hắt vào trong `box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);` tạo cảm giác bề mặt kính màn hình chìm sâu vào thân máy.
>   - `display: flex; flex-direction: column; justify-content: space-between; text-align: right;`: Đẩy biểu thức lên trên đỉnh và kết quả xuống đáy, căn thẳng lề phải.
>   - `.phep-tinh`: Font 16px mờ nhẹ `opacity: 0.85`, ẩn thanh cuộn khi biểu thức quá dài bằng `scrollbar-width: none;`.
>   - `.ket-qua`: Font số khổng lồ `42px` in đậm uy lực `font-weight: 700;`.
> 
> - **Hệ thống bàn phím lưới CSS Grid `.ban-phim` (Dòng 93 đến 97):**
>   - `display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;`: Chia đều không gian thành 4 cột bằng nhau, khoảng cách giữa các phím là 12px.
> 
> - **Tạo hình nút bấm và phản hồi xúc giác (Dòng 100 đến 123):**
>   - Chiều cao mỗi nút là 60px, bo góc 12px, font chữ to rõ 22px.
>   - Hiệu ứng Hover mượt mà: `.nut:hover { filter: brightness(1.18); transform: translateY(-2px); }` — làm sáng bừng nút bấm và nhấc nhẹ lên 2px.
>   - Hiệu ứng Active khi bấm: `.nut:active { transform: scale(0.96) translateY(0); filter: brightness(0.9); }` — co nhỏ lại 4% mô phỏng độ nảy chân thực của phím bấm cơ học.
> 
> - **Hệ thống phân màu chức năng thông minh (Dòng 126 đến 153):**
>   - Nút số và nút ngoặc (`.nut-so`, `.nut-phu`): Nền xám than `#25313f`, chữ trắng bạc `#e5e7eb`.
>   - Nút toán tử (`.nut-toan-tu`): Nền xanh dương điện tử `#0d6efd` rực rỡ, chữ trắng.
>   - Nút xóa (`.nut-xoa`): Nền đỏ cảnh báo `#dc2626`.
>   - Nút bằng (`.nut-bang`): Nền xanh lá cây hoàn thành `#16a34a`.
>   - Đặc biệt, nút số 0 mang class `.nut-khong` chứa dòng lệnh: `grid-column: span 2;`. Thuộc tính này ra lệnh cho phím 0 trải rộng chiếm trọn vẹn 2 ô cột, tạo nét đặc trưng kinh điển của bàn phím máy tính kế toán!"

---

## ⏱️ PHẦN 5: PHÂN TÍCH CHUYÊN SÂU JAVASCRIPT (`bai15.js`) (12:30 – 16:30 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai15.js`.
- Bôi đen lần lượt: biến trạng thái `bieuThuc`, `daTinhXong`, hàm `nhapKyTu()`, hàm `nhapNgoac()`, hàm `tinhKetQua()`, và khối bắt sự kiện `keydown`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta cùng mổ xẻ phần hấp dẫn nhất — tệp tin kịch bản `bai15.js` với 225 dòng code chứa đựng hàng loạt thuật toán xử lý dữ liệu thông minh:
> 
> - **Khởi tạo trạng thái và bộ nhớ (Dòng 7 đến dòng 15):**
>   - `let bieuThuc = '';`: Chuỗi lưu trữ toàn bộ các ký tự người dùng bấm.
>   - `let daTinhXong = false;`: Biến cờ (Flag) đánh dấu xem phép tính trước đó đã vừa bấm dấu bằng xong hay chưa.
>   - Hai biến hằng `manHinhPhepTinh` và `manHinhKetQua` lưu tham chiếu DOM đến 2 vùng hiển thị.
> 
> - **Thuật toán nhập ký tự thông minh `nhapKyTu(kyTu)` (Dòng 28 đến 88):**
>   - **Trường hợp 1: Nối tiếp phép tính (Dòng 32 - 44):** Nếu `daTinhXong === true`, khi người dùng bấm tiếp toán tử (ví dụ bấm `+`), máy tính sẽ tự động lấy kết quả vừa tính làm toán hạng đầu tiên (`bieuThuc = manHinhKetQua.textContent + kyTu`). Nhưng nếu người dùng bấm một con số mới, nó sẽ tự động xóa sạch màn hình để bắt đầu một phép tính độc lập mới.
>   - **Trường hợp 2: Chống trùng lặp toán tử (Dòng 47 - 64):** Nếu người dùng vừa gõ dấu `+` mà lại đổi ý gõ dấu `×`, dòng 60 `bieuThuc = bieuThuc.slice(0, -1) + kyTu;` sẽ cắt bỏ dấu cũ và thay thế bằng dấu mới, không bao giờ để xảy ra lỗi cú pháp hai toán tử đứng kề nhau. Ngoài ra, code cho phép dấu trừ `−` đứng ở vị trí đầu tiên để biểu diễn số âm.
>   - **Trường hợp 3: Kiểm soát dấu chấm thập phân (Dòng 67 - 83):** Sử dụng regex `bieuThuc.split(/[+\−×÷()]/)` để tách riêng toán hạng đang nhập dở. Nếu toán hạng đó đã có dấu chấm rồi, lệnh `return` sẽ chặn ngay không cho nhập thêm dấu chấm thứ hai. Nếu bấm dấu chấm khi chưa có số, máy tự bù thành `'0.'`.
> 
> - **Thuật toán đóng/mở ngoặc tự động `nhapNgoac()` (Dòng 93 đến 122):**
>   - Thay vì bắt người dùng phải bấm 2 nút mở ngoặc và đóng ngoặc riêng biệt, bài tập thiết kế 1 nút gộp `( )` duy nhất.
>   - Thuật toán đếm số ngoặc mở `soMo` và số ngoặc đóng `soDong`:
>     - Nếu còn ngoặc mở chưa đóng (`soMo > soDong`) và ký tự liền trước là một con số, nó sẽ tự chèn dấu đóng ngoặc `)`.
>     - Ngược lại, nếu ký tự trước là số mà người dùng bấm ngoặc, máy tính thông minh sẽ tự động chèn dấu nhân ẩn: `bieuThuc += '×(';` (ví dụ `5(` sẽ biến thành `5×(`), mang lại trải nghiệm như máy tính Casio đời mới!
> 
> - **Thuật toán tính toán và an toàn dữ liệu `tinhKetQua()` (Dòng 149 đến 191):**
>   - **Bước 1 — Chuẩn hóa chuỗi:** Dùng `.replace(/×/g, '*')`, `.replace(/÷/g, '/')`, `.replace(/[−-]/g, '-')`.
>   - **Bước 2 — Xử lý phần trăm:** `.replace(/%([^\d]|$)/g, '/100$1')` chuyển đổi tức thì `50%` thành `50/100`.
>   - **Bước 3 — Tự động đóng ngoặc thiếu:** Nếu người dùng gõ `(2 + 3` rồi bấm bằng luôn mà quên đóng ngoặc, vòng lặp `chuoiTinh += ')'.repeat(soMo - soDong)` sẽ tự động thêm đủ số ngoặc đóng còn thiếu!
>   - **Bước 4 — Thực thi an toàn với `eval()` trong `try...catch`:**
>     - Gọi `let ketQua = eval(chuoiTinh);`.
>     - Kiểm tra ngoại lệ: Nếu `ketQua === Infinity` (khi chia cho 0) hoặc `isNaN(ketQua)`, in thông báo `'Lỗi phép tính'`.
>     - Khử sai số dấu phẩy động: `ketQua = Math.round(ketQua * 100000000) / 100000000;`.
>     - Nếu xảy ra lỗi cú pháp, khối `catch (error)` sẽ nhẹ nhàng hiển thị chữ `'Lỗi'`.
> 
> - **Lắng nghe sự kiện bàn phím máy tính `keydown` (Dòng 196 đến 224):**
>   - Ánh xạ hoàn hảo từ phím cứng sang hàm logic: phím số 0-9, phím `+`, `-`, `*`, `/`, dấu mở đóng ngoặc, phím Enter hoặc `=` để tính kết quả, phím Backspace để xóa từng ký tự, và phím Escape hoặc phím `C` để xóa toàn bộ!"

---

## ⏱️ PHẦN 6: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (16:30 – 18:30 | Thời lượng: ~2 phút)

🎬 **Thao tác:** 
- Phóng to tab Chrome hiển thị chiếc máy tính.
- Làm tuần tự các phép tính mẫu dưới đây bằng chuột và bàn phím.
- Bật `F12` kiểm tra tab **Console** và **Elements**.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng quan sát chiếc máy tính hoạt động trực tiếp trên trình duyệt:
> 
> **1. Kiểm thử các phép tính cơ bản bằng chuột:**
> - Đầu tiên, em tính một biểu thức có thứ tự ưu tiên: `2 + 3 × 4`.
>   - *[Thao tác click chuột: bấm 2, bấm +, bấm 3, bấm ×, bấm 4]*
>   - Trên tầng biểu thức hiện rõ `2+3×4`. Em bấm nút `=`... Kết quả nhảy ra chính xác là **14** (nhân trước cộng sau)!
> - Thử tiếp cơ chế nối tiếp kết quả: Từ kết quả 14, em bấm tiếp nút `÷`, rồi bấm `2`, bấm `=`. Kết quả lập tức ra **7**!
> 
> **2. Kiểm thử tính năng ngoặc thông minh và khử sai số thập phân:**
> - Em bấm nút `C` để xóa trắng.
> - Em tính biểu thức kinh điển: `0.1 + 0.2`.
>   - *[Thao tác bấm 0 . 1 + 0 . 2 =]*
>   - Kết quả hiển thị tròn trĩnh là **0.3**, hoàn toàn không bị lỗi số lẻ `0.30000000000000004`!
> - Thử tính năng tự chèn phép nhân và tự đóng ngoặc: Em bấm `5`, bấm nút `( )`, bấm `2 + 3`, rồi bấm thẳng dấu `=`.
>   - Biểu thức tự hiểu là `5×(2+3)` và tự động đóng ngoặc để trả về kết quả chuẩn xác là **25**!
> 
> **3. Kiểm thử các trường hợp dữ liệu biên (Edge cases):**
> - Thử phép chia cho số 0: Em bấm `9 ÷ 0 =`. Màn hình hiển thị ngay dòng chữ: `'Lỗi phép tính'`.
> - Thử nhập số âm: Em bấm dấu `−`, bấm `5`, bấm `×`, bấm `4 =`. Kết quả ra **-20** hoàn hảo!
> 
> **4. Kiểm thử nhập liệu bằng bàn phím vật lý:**
> - Bây giờ, em không dùng chuột nữa mà gõ trực tiếp từ bàn phím máy tính:
>   - *[Thao tác gõ phím bàn phím: gõ 1 0 0 - 2 5 rồi gõ phím Enter]*
>   - Kết quả lập tức ra **75**! Em bấm phím **Backspace** để xóa bớt số, và bấm phím **Escape** để xóa toàn bộ về số 0.
> 
> **5. Mở F12 DevTools soi kiểm tra:**
> - Em nhấn **F12**: Tab **Console** hoàn toàn sạch bóng, không hề phát sinh lỗi uncaught nào.
> - Tab **Elements**: Bàn phím lưới CSS Grid hiển thị các track cột đều đặn và phím 0 trải dài đúng 2 cột nhờ `grid-column: span 2`."

---

## ⏱️ PHẦN 7: BÀI HỌC KINH NGHIỆM & LỜI CẢM ƠN (18:30 – 19:45 | Thời lượng: ~1.25 phút)

🎬 **Thao tác:** 
- Chuyển màn hình về lại giao diện máy tính đẹp nhất.
- Giọng đọc chân thành, tổng kết bài thuyết minh ấn tượng.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và các bạn, qua quá trình nghiên cứu và xây dựng Bài thực hành số 15, em đã thu hoạch được những bài học kỹ thuật vô cùng đắt giá:
> - Nắm vững phương pháp thiết kế giao diện dạng bảng điều khiển công nghệ bằng hệ thống bố cục **CSS Grid** kết hợp các hiệu ứng vi chuyển động của nút bấm.
> - Làm chủ kỹ thuật xử lý chuỗi biểu thức phức tạp, cơ chế tiền xử lý chuỗi bằng Regular Expressions trước khi thực thi tính toán.
> - Hiểu sâu sắc cách dùng hàm `eval()` một cách an toàn và có kiểm soát trong khối `try...catch`, đồng thời khắc phục triệt để sai số số thực trong máy tính.
> - Nâng cao kỹ năng lập trình hướng sự kiện đa kênh (Multi-input Event Handling) kết hợp chuột và bàn phím.
> 
> Video thuyết minh báo cáo Bài thực hành số 15 của em đến đây xin phép được kết thúc trọn vẹn.
> Em xin chân thành cảm ơn quý thầy cô giáo bộ môn Phát triển ứng dụng Web cơ bản đã luôn nhiệt tình chỉ bảo, truyền cảm hứng lập trình cho chúng em. Cảm ơn tất cả các bạn đã chú ý lắng nghe và theo dõi.
> 
> Kính chúc quý thầy cô luôn mạnh khỏe, hạnh phúc và thành công trong sự nghiệp giáo dục! Chúc các bạn sinh viên luôn học tập xuất sắc!
> 
> Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 15 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
