# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 15: MÁY TÍNH ĐƠN GIẢN (CALCULATOR)
**Người trình bày:** Sinh viên Trần Trọng Hoàng Anh  
**Môn học:** Phát triển ứng dụng Web cơ bản  
**Chủ đề:** Xây dựng ứng dụng máy tính bỏ túi điện tử thông minh với CSS Grid, xử lý chuỗi biểu thức, thuật toán đóng mở ngoặc tự động và tính toán an toàn bằng `eval()` trong khối `try...catch`  

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU
*(Thời lượng dự kiến: ~45 giây)*

*[Hành động: Mở màn hình OBS hiển thị VS Code với các tệp tin `bai15.html`, `bai15.css`, `bai15.js`, phong thái tự tin, giọng nói tràn đầy năng lượng]*

"Xin kính chào quý thầy cô và các bạn!  
Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Hôm nay, em rất hào hứng được trình bày và thuyết minh mã nguồn của **Bài thực hành số 15: Ứng dụng máy tính điện tử bỏ túi (Simple Calculator)**.

Đây là một bài tập tổng hợp đỉnh cao trong học phần, kết hợp hoàn hảo giữa thiết kế giao diện hiện đại và kỹ thuật lập trình JavaScript nâng cao:
1. Thứ nhất: Thiết kế một chiếc máy tính bỏ túi đậm chất công nghệ với phong cách Dark Mode và màn hình LCD xanh huỳnh quang hoài niệm bằng **CSS Grid**.
2. Thứ hai: Xử lý chuỗi biểu thức toán học phức tạp, bao gồm các phép tính cộng, trừ, nhân, chia, tính phần trăm, số thập phân và cơ chế tự động mở/đóng ngoặc thông minh.
3. Thứ ba: Ứng dụng hàm tính toán `eval()` đi kèm cơ chế kiểm soát ngoại lệ bằng khối `try...catch`, xử lý triệt để lỗi chia cho 0 và khử sai số dấu phẩy động trong JavaScript.
4. Thứ tư: Hỗ trợ tương tác kép — người dùng vừa có thể bấm chuột trên màn hình, vừa có thể gõ phím số trực tiếp từ bàn phím máy tính!

Sau đây, em xin phép được đi sâu vào chi tiết cấu trúc của ứng dụng!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai15.html`)
*(Thời lượng dự kiến: ~1 phút 45 giây)*

*[Hành động: Mở file `bai15.html`, rê chuột phân tích từng phân vùng]*

"Đầu tiên, chúng ta cùng xem xét cấu trúc giao diện trong tệp tin `bai15.html`.

- Phần `<head>` được cấu hình đầy đủ bảng mã tiếng Việt UTF-8, thiết lập thẻ `viewport` chuẩn tương thích và liên kết đến stylesheet `bai15.css`.

- Phần `<body>` chứa vỏ thân máy tính là khối `<div class="may-tinh">`. Bên trong được chia làm 3 phân khu chức năng rất chuyên nghiệp:

1. **Nhãn hiệu máy tính (`<div class="nhan-hieu">`):**
   - Đặt dòng chữ thương hiệu *'MÁY TÍNH ĐIỆN TỬ'* in hoa nhỏ nhắn ở góc trên bên trái, mang lại cảm giác chân thực giống như các dòng máy Casio hay Texas Instruments ngoài đời thực.

2. **Màn hình hiển thị LCD hai tầng (`<div class="man-hinh">`):**
   - Tầng 1: `<div id="phep-tinh" class="phep-tinh"></div>` là dòng chữ nhỏ phía trên để hiển thị toàn bộ chuỗi biểu thức người dùng đang bấm (ví dụ `(25 + 75) × 2`).
   - Tầng 2: `<div id="ket-qua" class="ket-qua">0</div>` là dòng số lớn nổi bật phía dưới hiển thị kết quả tính toán cuối cùng, mặc định ban đầu là số `0`.

3. **Bàn phím lưới 4 cột × 5 hàng (`<div class="ban-phim">`):**
   - Khu vực bàn phím gồm 19 nút bấm `<button type="button">`, mỗi nút đều được gắn sự kiện `onclick` để gọi các hàm xử lý tương ứng trong JavaScript:
     - **Hàng 1:** Nút xóa `C` (`xoaTatCa()`), nút ngoặc `( )` (`nhapNgoac()`), nút phần trăm `%` (`nhapKyTu('%')`), và nút chia `÷` (`nhapKyTu('÷')`).
     - **Hàng 2:** Các phím số `7`, `8`, `9` và phép nhân `×` (`nhapKyTu('×')`).
     - **Hàng 3:** Các phím số `4`, `5`, `6` và phép trừ `−` (`nhapKyTu('−')`).
     - **Hàng 4:** Các phím số `1`, `2`, `3` và phép cộng `+` (`nhapKyTu('+')`).
     - **Hàng 5:** Phím số `0` mang thêm class `.nut-khong` (chiếm gấp đôi chiều ngang), dấu chấm thập phân `.`, và nút tính kết quả bằng `=` gọi hàm `tinhKetQua()`.

- Cuối cùng là thẻ `<script src="bai15.js"></script>` để kích hoạt toàn bộ trí thông minh cho chiếc máy tính."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai15.css`)
*(Thời lượng dự kiến: ~2 phút)*

*[Hành động: Chuyển sang tệp `bai15.css`, giải thích phong cách phối màu Dark Theme và CSS Grid]*

"Tiếp theo, chúng ta cùng chiêm ngưỡng nghệ thuật thiết kế giao diện trong `bai15.css`.

1. **Nền toàn cảnh và căn giữa:**
   - Nền `body` mang mã màu siêu tối `#0b0f19` (xanh đen vũ trụ), kết hợp với `display: flex; justify-content: center; align-items: center; min-height: 100vh;` giúp chiếc máy tính luôn được đặt trang trọng ngay chính giữa tâm màn hình.

2. **Thân máy tính (`.may-tinh`):**
   - Vỏ máy tính dùng tông xám đen `#111827`, bo cong các góc 16px bằng `border-radius: 16px`.
   - Đặc biệt, em sử dụng kỹ thuật đổ bóng 2 lớp: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.06);` tạo nên đường viền phản quang mờ cực kỳ sắc sảo và cảm giác khối 3D đầm tay.

3. **Màn hình LCD ma trận (`.man-hinh`):**
   - Lấy cảm hứng từ các thiết bị đo điện tử cổ điển: nền màn hình là màu xanh rêu đậm `#022c22`, còn chữ hiển thị là màu xanh lá huỳnh quang rực sáng `#4ade80`.
   - Hiệu ứng đổ bóng chìm vào bên trong `box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4)` tạo cảm giác mặt kính màn hình nằm lún xuống dưới khung máy tính rất chân thực.
   - Dòng biểu thức `.phep-tinh` có cỡ chữ 16px, còn dòng kết quả `.ket-qua` có cỡ chữ khổng lồ 42px in đậm, tạo sự phân cấp thị giác rõ ràng.

4. **Bố cục bàn phím CSS Grid (`.ban-phim`):**
   - Sử dụng `display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;`.
   - Mỗi nút bấm `.nut` có chiều cao chuẩn mực 60px, bo góc 12px, font-size 22px in đậm.
   - Hiệu ứng tương tác:
     - Khi hover: nút nhấc nhẹ lên 2px với `transform: translateY(-2px)` và sáng bừng lên nhờ `filter: brightness(1.18)`.
     - Khi click chuột (`:active`): nút lún xuống tức thì với `transform: scale(0.96)`, mang lại cảm giác phản hồi xúc giác như đang bấm phím cơ học thật.

5. **Phối màu bàn phím theo phân vùng chức năng:**
   - Các phím số và phím phụ: mang nền xám đen nhã nhặn `#25313f`.
   - Các phím toán tử (`÷`, `×`, `−`, `+`): nổi bật với màu xanh dương Cobalt `#0d6efd`.
   - Phím xóa `C`: khoác sắc đỏ cảnh báo `#dc2626`.
   - Phím tính kết quả `=`: phủ màu xanh lá thắng lợi `#16a34a`.
   - Đặc biệt, phím số `0` có thuộc tính `grid-column: span 2;`, giúp nó trải rộng vừa vặn chiếm trọn vị trí của 2 cột!"

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (`bai15.js`)
*(Thời lượng dự kiến: ~3 phút)*

*[Hành động: Chuyển sang tệp `bai15.js`, trỏ chuột phân tích các biến trạng thái và từng hàm then chốt]*

"Và bây giờ là phần cốt lõi và thú vị nhất — logic xử lý thuật toán trong tệp `bai15.js`.

1. **Quản lý trạng thái với các biến toàn cục:**
   - `let bieuThuc = '';`: lưu trữ chuỗi biểu thức toán học mà người dùng đang xây dựng.
   - `let daTinhXong = false;`: cờ trạng thái đánh dấu xem người dùng vừa bấm dấu bằng tính kết quả hay chưa. Cờ này giúp máy tính phân biệt: nếu sau đó người dùng bấm tiếp toán tử thì sẽ lấy kết quả cũ để tính tiếp; còn nếu bấm số mới thì sẽ tự động xóa sạch màn hình để làm phép tính mới!

2. **Hàm nhập ký tự `nhapKyTu(kyTu)` với cơ chế chống lỗi:**
   - **Chống nhập trùng toán tử:** Nếu người dùng bấm `5 +` rồi lỡ tay bấm nhầm `×`, hệ thống sẽ tự động thay thế dấu `+` bằng dấu `×` (`bieuThuc.slice(0, -1) + kyTu`), không để xảy ra biểu thức sai cú pháp dạng `5+*`.
   - **Hỗ trợ số âm:** Cho phép bấm dấu trừ `−` ngay từ lúc chuỗi rỗng để biểu diễn các số âm như `-15`.
   - **Kiểm soát dấu chấm thập phân `.`: ** Thuật toán sử dụng biểu thức chính quy `bieuThuc.split(/[+\−×÷()]/)` để tách riêng con số hiện tại đang nhập dở. Nếu con số đó đã có dấu chấm rồi thì tuyệt đối không cho chèn thêm, ngăn chặn hoàn toàn lỗi dạng `3.1.4`. Nếu người dùng bấm dấu chấm đầu tiên, máy sẽ tự động chuyển thành `'0.'`.

3. **Thuật toán đóng mở ngoặc thông minh `nhapNgoac()`:**
   - Thay vì bắt người dùng phải có 2 nút ngoặc mở `(` và ngoặc đóng `)` riêng biệt, em tích hợp vào 1 nút duy nhất.
   - Thuật toán tự động đếm số lượng dấu ngoặc mở `(` và ngoặc đóng `)` hiện có trong chuỗi:
     - Nếu số ngoặc mở nhiều hơn số ngoặc đóng và ký tự trước đó là một con số: máy sẽ tự động đóng ngoặc `)`.
     - Ngược lại, máy sẽ mở ngoặc `(`. Đặc biệt, nếu trước đó là một con số, máy sẽ tự động hiểu ngầm phép nhân và chèn thêm `×(`!

4. **Hàm tính toán kết quả `tinhKetQua()` với khối `try...catch` và `eval()`:**
   - **Bước 1 — Chuẩn hóa ký tự hiển thị thành toán tử JavaScript:**
     Chuỗi biểu thức trên màn hình dùng các ký tự toán học đẹp mắt như `×`, `÷`, `−`. Hàm sẽ sử dụng phương thức `replace()` với Regex để quy đổi về các toán tử chuẩn của máy tính:
     - `×` chuyển thành `*`
     - `÷` chuyển thành `/`
     - `−` chuyển thành `-`
     - Ký tự `%` được chuyển thành `/100`
   - **Bước 2 — Tự động đóng ngoặc:** Nếu người dùng quên đóng ngoặc (ví dụ gõ `(10 + 20`), hàm sẽ tự động bổ sung đủ số dấu `)` trước khi tính.
   - **Bước 3 — Tính toán an toàn trong khối `try...catch`:**
     - Gọi `let ketQua = eval(chuoiTinh);`.
     - **Bắt lỗi chia cho 0:** Nếu phép tính chia cho số 0, `eval` sẽ trả về `Infinity` hoặc `-Infinity`. Hàm sẽ kiểm tra và hiển thị ngay thông báo: *'Lỗi phép tính'*.
     - **Khử sai số dấu phẩy động:** Trong JavaScript, phép tính `0.1 + 0.2` thường ra `0.30000000000000004`. Em xử lý triệt để bằng thuật toán làm tròn: `Math.round(ketQua * 100000000) / 100000000`, đảm bảo kết quả luôn gọn gàng và chuẩn xác.
     - Nếu người dùng nhập sai cú pháp, khối `catch (error)` sẽ bắt lấy và hiển thị thông báo *'Lỗi'*, tuyệt đối không làm ứng dụng bị treo hay crash.

5. **Hỗ trợ gõ phím trực tiếp từ bàn phím máy tính:**
   - Cuối file, em đăng ký sự kiện `document.addEventListener('keydown', ...)`. Nhờ đó, người dùng có thể dùng cả bàn phím số bên phải để gõ phím số, bấm Enter để xem kết quả, bấm Backspace để xóa từng số lùi lại, hoặc bấm phím C / Escape để xóa sạch!"

---

## PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT
*(Thời lượng dự kiến: ~2 phút)*

*[Hành động: Chuyển màn hình sang trình duyệt đang mở file `bai15.html`]*

"Và ngay bây giờ, em xin kính mời thầy cô và các bạn cùng trải nghiệm các bài test thực tế trên ứng dụng máy tính!

1. **Test case 1: Các phép tính số học cơ bản:**
   *[Hành động: Dùng chuột bấm lần lượt]*
   - Phép cộng: Em bấm `2` `5` `+` `7` `5` `=`.
     - Dòng phép tính hiện `25+75`.
     - Dòng kết quả hiện ngay con số to màu xanh rực sáng: **100**!
   - Nối tiếp kết quả cũ: Em bấm tiếp `×` `2` `=`.
     - Kết quả nhảy ngay thành **200**!
   - Bấm nút đỏ `C` để xóa toàn bộ về số `0`.

2. **Test case 2: Biểu thức có dấu ngoặc và thứ tự ưu tiên:**
   *[Hành động: Thao tác bấm nút]*
   - Em thử tính: `(15 + 5) × 3`.
   - Bấm nút `( )`, bấm `15 + 5`, bấm tiếp nút `( )` (nó tự đóng ngoặc), bấm `× 3` `=`.
   - Kết quả trả về chính xác tuyệt đối là **60**!

3. **Test case 3: Phép tính phần trăm (%) và số thập phân:**
   *[Hành động: Bấm chuột]*
   - Em tính 15% của 200: bấm `200` `×` `15` `%` `=`.
   - Kết quả ra ngay con số **30**!
   - Phép tính số thập phân: `3.5` `+` `4.2` `=`. Kết quả ra đúng **7.7** mà không hề bị sai số lẻ.

4. **Test case 4: Bắt lỗi chia cho số 0:**
   *[Hành động: Bấm `10 ÷ 0 =`]*
   - Em bấm `10 ÷ 0 =`. Màn hình lập tức báo dòng chữ cảnh báo: **Lỗi phép tính**! Ứng dụng xử lý ngoại lệ rất an toàn và chuyên nghiệp.

5. **Test case 5: Thao tác trực tiếp bằng bàn phím vật lý:**
   *[Hành động: Nhấc hai tay lên bàn phím máy tính và gõ trực tiếp không cần chuột]*
   - Giờ em sẽ không dùng chuột nữa, em gõ trực tiếp trên bàn phím laptop: gõ số `9` `8` `7` `-` `1` `2` `3`, gõ phím **Enter** trên bàn phím.
   - Kết quả ra ngay **864**! Em gõ phím **Backspace** để xóa, hoặc gõ phím **C** trên bàn phím để xóa sạch. Mọi phím tắt đều hoạt động vô cùng nhạy bén và chuẩn xác!"

---

## PHẦN 6: LỜI CẢM ƠN KẾT THÚC
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Quay lại khung hình webcam, nở nụ cười tự tin, nói lời cảm ơn]*

"Kính thưa thầy cô và các bạn,  
Phần thuyết minh và chạy thử nghiệm **Bài thực hành số 15: Ứng dụng máy tính điện tử** của em đến đây là kết thúc tốt đẹp.

Thông qua bài tập này, em đã làm chủ hoàn toàn kỹ thuật dàn trang CSS Grid hiện đại, thành thạo việc xử lý chuỗi và biểu thức chính quy Regex, hiểu sâu cách vận hành của hàm `eval()` và tầm quan trọng của việc kiểm soát ngoại lệ với `try...catch` trong các ứng dụng thực tế.

Em xin gửi lời cảm ơn chân thành nhất đến quý thầy cô đã tận tình giảng dạy và các bạn đã dành thời gian theo dõi video thuyết minh này. Kính chúc thầy cô luôn dồi dào sức khỏe và công tác tốt! Em xin trân trọng cảm ơn và kính chào ạ!"
