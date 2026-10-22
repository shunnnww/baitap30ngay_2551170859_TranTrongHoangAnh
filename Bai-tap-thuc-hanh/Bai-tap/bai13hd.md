# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 13: ĐỒNG HỒ SỐ (DIGITAL CLOCK BẰNG ẢNH GIF)
**Người trình bày:** Sinh viên Trần Trọng Hoàng Anh  
**Môn học:** Phát triển ứng dụng Web cơ bản  
**Chủ đề:** Xây dựng đồng hồ kỹ thuật số thời gian thực bằng bộ ảnh GIF số và hàm định thời `setInterval` trong JavaScript  

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU
*(Thời lượng dự kiến: ~45 giây)*

*[Hành động: Mở màn hình OBS hiển thị VS Code với các tệp tin `bai13.html`, `bai13.css`, `bai13.js`, phong thái tự tin, giọng nói mạch lạc]*

"Xin chào quý thầy cô và các bạn!  
Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Chào mừng thầy cô và các bạn đến với video thuyết minh **Bài thực hành số 13: Thiết kế đồng hồ số thời gian thực (Digital Clock) bằng hình ảnh GIF**.

Trong bài tập này, chúng ta sẽ cùng giải quyết một bài toán lập trình web kinh điển nhưng rất thú vị:
1. Thứ nhất: Thiết kế một khung đồng hồ số điện tử với nền đen sang trọng bằng HTML và CSS, hiển thị các con số giờ, phút, giây thông qua các tệp ảnh GIF độc lập từ `00.gif` đến `09.gif`.
2. Thứ hai: Sử dụng JavaScript để đọc thời gian thực tế của hệ điều hành thông qua đối tượng `Date`.
3. Thứ ba: Tách các chữ số hàng chục, hàng đơn vị và ánh xạ động tới các file ảnh tương ứng.
4. Thứ tư: Sử dụng hàm định thời chu kỳ `setInterval` để cập nhật đồng hồ mượt mà sau mỗi 1000 mili-giây, đồng thời đưa ra câu chào theo buổi sáng, chiều hay tối.

Không để mọi người chờ lâu, em xin phép bắt đầu phân tích mã nguồn ngay bây giờ!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai13.html`)
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Trỏ chuột vào từng dòng mã trong tệp `bai13.html`]*

"Trước tiên, chúng ta cùng nhìn vào tệp `bai13.html`. Cấu trúc của trang rất tinh gọn và mạch lạc:

- Thẻ `<head>` chứa các khai báo tiêu chuẩn về bảng mã tiếng Việt `UTF-8`, cấu hình `viewport` cho màn hình hiển thị và liên kết đến bảng kiểu dáng `bai13.css`.

- Phần thân trang `<body>` được bao bọc bởi một khối chứa duy nhất là `<div class="khung-dong-ho">`. Bên trong khối này được phân làm 2 vùng hiển thị chính:

1. **Vùng 1 — Hộp đồng hồ số (`<div class="hop-dong-ho">`):**
   - Vùng này mô phỏng bảng màn hình LED điện tử nền đen.
   - Bên trong gồm tổng cộng 8 thẻ ảnh `<img>`:
     - 2 ảnh đầu tiên đại diện cho **Giờ**: mang `id="gio-chuc"` (chữ số hàng chục) và `id="gio-don-vi"` (chữ số hàng đơn vị).
     - 1 ảnh dấu hai chấm ngăn cách mang class `.dau-hai-cham` nạp tệp `haicham.gif`.
     - 2 ảnh tiếp theo đại diện cho **Phút**: mang `id="phut-chuc"` và `id="phut-don-vi"`.
     - 1 ảnh dấu hai chấm thứ hai ngăn cách giữa phút và giây.
     - 2 ảnh cuối cùng đại diện cho **Giây**: mang `id="giay-chuc"` và `id="giay-don-vi"`.
   - Tất cả các thẻ ảnh chữ số ban đầu đều được gán giá trị mặc định là `src="00.gif"`. Khi trang chạy, JavaScript sẽ ngay lập tức thay thế giá trị `src` này thành hình ảnh đúng với thời gian thực.

2. **Vùng 2 — Hộp lời chào (`<div class="hop-loi-chao">`):**
   - Nằm ngay bên dưới hộp đồng hồ, chứa một thẻ `<span id="loi-chao" class="loi-chao">Chào buổi sáng</span>`. Thẻ này có nhiệm vụ hiển thị câu chào đón người dùng phù hợp với thời điểm hiện tại.

- Cuối cùng là thẻ `<script src="bai13.js"></script>` để nạp kịch bản thực thi JavaScript."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai13.css`)
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Chuyển sang tệp `bai13.css`, cuộn và phân tích từng quy tắc CSS]*

"Bây giờ, chúng ta cùng xem xét các thuộc tính định dạng trong `bai13.css`:

1. **Căn giữa toàn màn hình với Flexbox:**
   - Sau khi reset khoảng cách mặc định với `* { margin: 0; padding: 0; box-sizing: border-box; }`, em định dạng cho thẻ `body`:
     - Sử dụng `min-height: 100vh; display: flex; justify-content: center; align-items: center;`.
     - Cách này đảm bảo khối đồng hồ luôn luôn được định vị ngay chính tâm màn hình trên mọi độ phân giải máy tính hay laptop.
     - Màu nền toàn trang là màu xám dịu mắt `#f0f2f5`.

2. **Khung chứa đồng hồ (`.khung-dong-ho`):**
   - Nền trắng tinh khôi `#ffffff`, khoảng đệm trong rộng rãi `padding: 40px 50px`, bo tròn 4 góc 12px và đổ bóng nhẹ `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)`, tạo cảm giác như một mặt đồng hồ để bàn cao cấp.

3. **Hộp đèn LED đồng hồ số (`.hop-dong-ho`):**
   - Điểm nhấn thiết kế là màu nền đen tuyền `#000000`, tạo độ tương phản tối đa với các con số phát sáng bên trong.
   - Em sử dụng `display: inline-flex; align-items: center; justify-content: center;` kết hợp với `gap: 3px;` để các con số và dấu hai chấm nằm thẳng một hàng ngang và có khe hở đều đặn 3px giữa các ký tự.

4. **Kích thước đồng bộ cho ảnh GIF:**
   - Cả hai lớp `.chu-so` và `.dau-hai-cham` đều được thiết lập cố định `height: 52px; width: auto; display: block;`. Việc cố định chiều cao 52px và để chiều rộng tự động giúp các con số giữ nguyên tỉ lệ nguyên bản, không bị méo lệch hay giật khung hình khi số thay đổi.

5. **Định dạng lời chào (`.loi-chao`):**
   - Chữ có kích thước lớn `font-size: 38px`, màu đỏ sẫm `#c62828`, in nghiêng `font-style: italic`, dùng font chữ 'Times New Roman' mang lại phong cách cổ điển, trang nhã."

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (`bai13.js`)
*(Thời lượng dự kiến: ~2 phút 30 giây)*

*[Hành động: Chuyển sang tệp `bai13.js`, trỏ chuột vào từng hàm bổ trợ và hàm `capNhatDongHo`]*

"Và bây giờ là linh hồn của bài tập — tệp tin xử lý logic `bai13.js`.

Toàn bộ thuật toán được tổ chức thành các hàm chuyên biệt, rất trong sáng và dễ bảo trì:

1. **Hàm bổ trợ 1 — `dinhDangHaiChuSo(so)`:**
   - Khi chúng ta lấy giờ, phút, giây từ đối tượng Date, nếu giá trị nhỏ hơn 10 (ví dụ giây thứ 5), nó chỉ trả về con số đơn `5`.
   - Để đồng hồ hiển thị chuẩn hai chữ số '05', hàm này sử dụng toán tử 3 ngôi:  
     `return so < 10 ? '0' + so : String(so);`  
     Điều này đảm bảo kết quả trả về luôn là một chuỗi có độ dài đúng 2 ký tự.

2. **Hàm bổ trợ 2 — `layDuongDanAnh(chuSo)`:**
   - Nhận vào một ký tự số từ '0' đến '9' và ghép thành tên file ảnh tương ứng:  
     `return '0' + chuSo + '.gif';`  
     Ví dụ: ký tự '7' sẽ chuyển thành chuỗi `"07.gif"`, ký tự '0' chuyển thành `"00.gif"`.

3. **Hàm xử lý chính — `capNhatDongHo()`:**
   - **Bước 1 — Lấy thời gian:** Khởi tạo đối tượng `const bayGio = new Date();` và lấy các thông số bằng 3 phương thức:
     - `bayGio.getHours()` để lấy giờ (từ 0 đến 23).
     - `bayGio.getMinutes()` để lấy phút (từ 0 đến 59).
     - `bayGio.getSeconds()` để lấy giây (từ 0 đến 59).
   - **Bước 2 — Định dạng 2 chữ số:** Chuyển đổi thành chuỗi 2 ký tự thông qua hàm bổ trợ vừa viết: `chuoiGio`, `chuoiPhut`, `chuoiGiay`.
   - **Bước 3 — Tách số và cập nhật ảnh GIF vào DOM:**
     - Để lấy chữ số hàng chục, em dùng phương thức `chuoiGio.charAt(0)`.
     - Để lấy chữ số hàng đơn vị, em dùng `chuoiGio.charAt(1)`.
     - Sau đó gọi `layDuongDanAnh()` và gán trực tiếp vào thuộc tính `.src` của các thẻ ảnh:
       `document.getElementById('gio-chuc').src = layDuongDanAnh(chuoiGio.charAt(0));`  
       Tương tự cho các thẻ `gio-don-vi`, `phut-chuc`, `phut-don-vi`, `giay-chuc` và `giay-don-vi`.
   - **Bước 4 — Xác định câu chào theo buổi:**
     - Sử dụng cấu trúc điều kiện `if-else`:
       - Nếu giờ từ 5 đến 11: `'Chào buổi sáng'`
       - Nếu giờ từ 12 đến 17: `'Chào buổi chiều'`
       - Các trường hợp còn lại (từ 18 đến 4 giờ sáng): `'Chào buổi tối'`
     - Gán giá trị vào `document.getElementById('loi-chao').textContent`.

4. **Kỹ thuật chạy thời gian thực với `setInterval`:**
   - Ở dòng code 68, em chủ động gọi hàm `capNhatDongHo()` ngay lập tức một lần đầu tiên khi tệp vừa tải. Kỹ thuật này giúp đồng hồ hiển thị giờ chính xác ngay tức khắc, người dùng không phải chịu cảnh màn hình bị trắng số hay chờ 1 giây đầu tiên.
   - Ở dòng 71, em gọi:  
     `setInterval(capNhatDongHo, 1000);`  
     Hàm `setInterval` sẽ kích hoạt hàm `capNhatDongHo` lặp đi lặp lại sau mỗi chu kỳ 1000 mili-giây (tức đúng 1 giây), tạo nên hiệu ứng thời gian chạy liên tục và chính xác tuyệt đối theo đồng hồ máy tính."

---

## PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Chuyển sang trình duyệt đang mở file `bai13.html`]*

"Bây giờ, em xin mời thầy cô và các bạn cùng quan sát kết quả chạy trực tiếp trên trình duyệt!

1. **Hiển thị trực quan ban đầu:**
   - Như mọi người thấy, mặt đồng hồ hiện ra rất sắc nét và nổi bật.
   - Nền đen tuyền bao bọc các con số phát sáng màu xanh đặc trưng của ảnh GIF số điện tử.

2. **Kiểm tra tính chính xác và chuyển động thời gian thực:**
   *[Hành động: Chỉ chuột vào cụm giây và đối chiếu với đồng hồ góc dưới thanh Taskbar của Windows]*
   - Hãy quan sát hai chữ số ở phần giây bên phải: cứ đúng mỗi giây, con số hàng đơn vị lại đổi ảnh một lần: 0, 1, 2, 3... Cứ thế khi hết 59 giây thì con số hàng chục của phút sẽ tự động nhảy lên một đơn vị.
   - Giờ, phút hiển thị khớp 100% với giờ thực tế trên góc phải màn hình máy tính của em.

3. **Kiểm tra lời chào:**
   - Bên dưới đồng hồ, dòng chữ *'Chào buổi...' mang sắc đỏ nổi bật, hiển thị chính xác theo buổi thực tế trong ngày khi em đang thực hiện quay video này.
   - Mọi chức năng vận hành vô cùng êm mượt, không có bất kỳ hiện tượng giật lag hay lệch nhịp nào!"

---

## PHẦN 6: LỜI CẢM ƠN KẾT THÚC
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Quay lại khung hình webcam, phong thái tươi vui, lễ phép]*

"Dạ, đó là toàn bộ quá trình xây dựng và giải thích mã nguồn của **Bài thực hành số 13: Đồng hồ số bằng ảnh GIF**.

Qua bài tập này, em đã nắm vững cách bóc tách chuỗi, thao tác với thuộc tính `src` của thẻ `img` trong DOM và vận dụng thành thạo phương thức định thời `setInterval` trong JavaScript.

Em xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe và đồng hành cùng em trong video này! Kính chúc thầy cô luôn nhiều sức khỏe và niềm vui! Xin chào và hẹn gặp lại!"
