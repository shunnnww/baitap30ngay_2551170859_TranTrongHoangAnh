# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 12: IN LỊCH VÀ XỬ LÝ ĐỐI TƯỢNG DATE
**Người trình bày:** Sinh viên Trần Trọng Hoàng Anh  
**Môn học:** Phát triển ứng dụng Web cơ bản  
**Chủ đề:** Xây dựng ứng dụng in tờ lịch bóc tường, tự động tính thứ trong tuần và hiển thị lời chào theo thời gian thực  

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU
*(Thời lượng dự kiến: ~45 giây)*

*[Hành động: Mở màn hình OBS hiển thị VS Code với các tệp tin `bai12.html`, `bai12.css`, `bai12.js`, giọng đọc hào hứng, tự tin, phát âm truyền cảm]*

"Xin chào thầy cô và các bạn!  
Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.

Trong video hôm nay, em xin giới thiệu và thuyết minh chi tiết về **Bài thực hành số 12: Ứng dụng in lịch tương tác với JavaScript**.

Mục tiêu trọng tâm của bài thực hành này bao gồm:
1. Thứ nhất: Xây dựng giao diện mô phỏng một tờ lịch bóc truyền thống Việt Nam với bố cục cân đối, màu sắc hài hòa kết hợp form nhập liệu trực quan.
2. Thứ hai: Nắm vững và ứng dụng thành thạo đối tượng `Date` trong JavaScript, sử dụng các phương thức cốt lõi như `getDay()` để xác định chính xác thứ trong tuần của bất kỳ ngày nào trong lịch sử hay tương lai.
3. Thứ ba: Xử lý thời gian thực với `getHours()` để đưa ra lời chào hỏi thông minh tương ứng với từng buổi trong ngày: sáng, chiều hay tối.

Sau đây, em xin phép được đi sâu vào từng phần mã nguồn của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai12.html`)
*(Thời lượng dự kiến: ~1 phút 30 giây)*

*[Hành động: Mở tệp `bai12.html`, rê chuột dẫn dắt qua từng thẻ HTML]*

"Trước tiên, chúng ta cùng khảo sát cấu trúc HTML trong tệp `bai12.html`.

- Ở phần `<head>`, tài liệu khai báo đầy đủ thẻ meta UTF-8, viewport chuẩn responsive và liên kết tệp định dạng ngoại tuyến `bai12.css`.

- Sang phần `<body>`, toàn bộ ứng dụng được gói trọn trong thẻ `<div class="khung-chinh">`. Đây là chiếc thẻ card màu trắng nằm nổi bật ở chính giữa màn hình. Bên trong chia làm 3 phân vùng rõ rệt:

1. **Phân vùng 1 — Ô hiển thị tờ lịch (`<div class="o-lich">`):**
   - Mô phỏng cấu trúc của một tờ lịch bloc hàng ngày.
   - Bên trong gồm 4 thẻ `<div>` được gán các `id` rất trực quan:
     - `id="hien-thi-nam"`: hiển thị con số năm.
     - `id="hien-thi-thang"`: hiển thị chuỗi tên tháng.
     - `id="hien-thi-ngay"`: hiển thị số ngày với kích thước lớn nhất.
     - `id="hien-thi-thu"`: hiển thị tên thứ trong tuần (ví dụ: Thứ hai, Chủ nhật...).

2. **Phân vùng 2 — Lời chào theo buổi (`<div id="loi-chao" class="loi-chao">`):**
   - Nằm ngay bên dưới tờ lịch, hiển thị một câu chào thân thiện, mặc định ban đầu là *'Chào buổi sáng!'*. Dòng chữ này sẽ được JavaScript tự động cập nhật linh hoạt.

3. **Phân vùng 3 — Khung nhập liệu (`<div class="khung-nhap-lieu">`):**
   - Thiết kế dạng hàng ngang gồm 3 nhóm nhập liệu `.nhom-nhap` dành cho Ngày, Tháng, Năm.
   - Mỗi nhóm gồm một nhãn `<label>` và một ô `<input type="number">` có kèm theo các thuộc tính giới hạn hợp lệ:
     - Ô ngày có `min="1"` và `max="31"`.
     - Ô tháng có `min="1"` và `max="12"`.
     - Ô năm có `min="1900"` và `max="2100"`.
   - Cuối cùng là nút nhấn `<button type="button" id="btn-in-lich" class="nut-in-lich">` với nội dung *'In<br>lịch'*, cho phép người dùng click để cập nhật lịch.

- Cuối tệp tin HTML là thẻ `<script src="bai12.js"></script>` để nạp toàn bộ logic xử lý của ứng dụng."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai12.css`)
*(Thời lượng dự kiến: ~1 phút 45 giây)*

*[Hành động: Chuyển sang tệp `bai12.css`, giải thích các đặc tính phối màu và bố cục]*

"Tiếp theo, chúng ta cùng xem xét phần trang trí giao diện trong `bai12.css`.

1. **Thiết lập nền trang và căn giữa tuyệt đối:**
   - Thẻ `body` sử dụng ảnh nền lặp: `background-image: url('../Kho-anh/Bai12/Nen.gif'); background-repeat: repeat;`.
   - Để tờ lịch luôn nằm chính giữa màn hình dù xem trên bất kỳ thiết bị nào, em áp dụng công nghệ **Flexbox** cho `body` với `min-height: 100vh; display: flex; justify-content: center; align-items: center;`.

2. **Tạo khối khung chính (`.khung-chinh`):**
   - Khung có chiều rộng tối đa 500px, nền trắng thuần khiết `#ffffff`, bo tròn các góc 16px bằng `border-radius: 16px` và đổ bóng êm ái `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12)`, tạo cảm giác như một bảng điều khiển ứng dụng chuyên nghiệp.

3. **Định dạng tờ lịch (`.o-lich`):**
   - Tờ lịch được bao bọc bởi đường viền xám mảnh `border: 1px solid #cccccc; border-radius: 12px; padding: 20px; text-align: center;`.
   - Về mặt phối màu, em kết hợp hai gam màu truyền thống của lịch Tết:
     - Số năm (`.nam-lich`): font chữ cổ điển Times New Roman, màu đỏ đậm `#C62828`.
     - Dòng tháng (`.thang-lich`): chữ đậm màu xanh dương đậm `#1565C0`.
     - Con số ngày (`.ngay-lich`): kích cỡ ngoại cỡ `font-size: 64px`, in đậm với sắc đỏ rực rỡ `#C62828`, tạo điểm nhấn thu hút ánh nhìn ngay lập tức.
     - Dòng thứ (`.thu-lich`): màu xanh dương `#1565C0`, font-size 18px.

4. **Định dạng lời chào và form nhập liệu:**
   - Dòng `.loi-chao`: màu đỏ `#C62828`, in nghiêng `font-style: italic`, dùng font có chân Times New Roman cỡ 24px mang lại cảm giác trang trọng, ấm cúng.
   - Khung nhập liệu `.khung-nhap-lieu`: viền nổi bật màu xanh `#1565C0` dày 2px. Sử dụng `display: flex; align-items: center; justify-content: space-between; gap: 12px;` giúp các ô nhập và nút bấm tự động căn hàng đều tăm tắp.
   - Nút `.nut-in-lich`: mang tông màu xám xanh Slate `#486581`, chữ trắng, bo góc 6px, có hiệu ứng đổi màu sậm hơn `#334e68` khi hover chuột."

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (`bai12.js`)
*(Thời lượng dự kiến: ~2 phút 15 giây)*

*[Hành động: Chuyển sang tệp `bai12.js`, chỉ chuột phân tích từng khối logic trong hàm `capNhatLich`]*

"Trọng tâm kỹ thuật quan trọng nhất của bài 12 nằm ở tệp `bai12.js`. Ở đây chúng ta xử lý tính toán ngày tháng bằng JavaScript thuần.

1. **Hàm xử lý trung tâm `capNhatLich()`:**
   - Đầu tiên, hàm đọc giá trị từ 3 ô input trên form bằng `document.getElementById('nhap-ngay').value` tương tự với tháng và năm, sau đó chuyển đổi sang số nguyên cơ số 10 bằng hàm `parseInt(..., 10)`.
   - Hàm kiểm tra tính hợp lệ bằng điều kiện:  
     `if (isNaN(ngay) || isNaN(thang) || isNaN(nam))`  
     Nếu người dùng để trống hoặc nhập sai, hệ thống sẽ bật cảnh báo `alert` nhắc nhở và dừng thực thi.

2. **Khởi tạo đối tượng `Date` và lưu ý sống còn về chỉ số tháng:**
   - Dòng code số 16:  
     `const ngayDuocChon = new Date(nam, thang - 1, ngay);`
   - *Lưu ý quan trọng:* Trong ngôn ngữ JavaScript, chỉ số tháng được tính bắt đầu từ `0` đến `11` (tháng 1 là 0, tháng 12 là 11). Do vậy, khi người dùng nhập tháng 12, ta bắt buộc phải truyền vào hàm khởi tạo là `thang - 1` để Date object hiểu đúng là tháng 12.

3. **Thuật toán tra cứu thứ trong tuần với phương thức `getDay()`:**
   - Phương thức `ngayDuocChon.getDay()` của đối tượng Date sẽ trả về một số nguyên từ 0 đến 6:
     - 0 tương ứng với Chủ nhật,
     - 1 là Thứ hai, 2 là Thứ ba, ..., và 6 là Thứ bảy.
   - Nhờ đó, em khai báo một mảng tên các thứ:  
     `const cacThu = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];`  
     Sau đó lấy giá trị cực kỳ đơn giản bằng:  
     `const thuTrongTuan = cacThu[ngayDuocChon.getDay()];`

4. **Cập nhật giao diện DOM:**
   - Em gán các giá trị vừa tính toán vào thuộc tính `.textContent` của các phần tử tương ứng: `#hien-thi-nam`, `#hien-thi-thang`, `#hien-thi-ngay` và `#hien-thi-thu`.

5. **Xử lý lời chào tự động theo thời gian hệ thống (`getHours()`):**
   - Em tạo một đối tượng thời gian hiện tại và lấy giờ bằng `const gioHienTai = new Date().getHours();`.
   - Phân nhánh điều kiện:
     - Nếu từ 12h đến dưới 18h: gán `cauChao = 'Chào buổi chiều!';`
     - Nếu từ 18h trở đi hoặc trước 5h sáng: gán `cauChao = 'Chào buổi tối!';`
     - Các khung giờ còn lại (từ 5h đến 11h trưa): giữ nguyên `'Chào buổi sáng!'`.
   - Sau đó gán vào `#loi-chao`.

6. **Bắt sự kiện (Event Listener):**
   - Em lắng nghe sự kiện `click` trên nút 'In lịch' để gọi hàm `capNhatLich`.
   - Đồng thời, em đăng ký sự kiện `window.addEventListener('DOMContentLoaded', capNhatLich)` để ngay khi trang web vừa tải xong thì tờ lịch và lời chào đã được tự động hiển thị ngay mà không cần người dùng phải bấm nút."

---

## PHẦN 5: THAO TÁC DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT
*(Thời lượng dự kiến: ~1 phút 45 giây)*

*[Hành động: Mở trình duyệt Chrome hiển thị file `bai12.html`]*

"Bây giờ, em xin mời thầy cô và các bạn cùng theo dõi phần chạy thử nghiệm trực tiếp trên trình duyệt web!

1. **Kiểm tra trạng thái khởi động ban đầu:**
   - Khi trang web vừa nạp xong:
     - Tờ lịch hiển thị mặc định: Năm 2026, Tháng 12, Ngày 24.
     - JavaScript đã tự động tính ra ngày 24/12/2026 chính xác là **Thứ năm**!
     - Bên dưới, dòng lời chào hiện lên chính xác theo buổi hiện tại trên đồng hồ máy tính của em.

2. **Thử nghiệm thay đổi các ngày thực tế khác nhau:**
   *[Hành động: Nhập các con số mới vào 3 ô input và nhấn nút 'In lịch']*
   - **Test case 1: Ngày Quốc khánh Việt Nam 02/09/2026:**
     - Em nhập: Ngày `2`, Tháng `9`, Năm `2026`.
     - Nhấn nút **In lịch**!
     - Mọi người cùng quan sát: Số 2 màu đỏ to đượm hiện lên, Tháng 9, Năm 2026, và thứ được tính chính xác là **Thứ tư**!
   - **Test case 2: Ngày Tết Dương lịch 01/01/2027:**
     - Em nhập: Ngày `1`, Tháng `1`, Năm `2027`.
     - Bấm nút **In lịch**!
     - Kết quả hiển thị: Ngày 1, Tháng 1, Năm 2027, Thứ sáu. Hoàn toàn chính xác với lịch vạn niên!
   - **Test case 3: Kiểm tra xử lý ngoại lệ (Validation):**
     *[Hành động: Xóa trắng ô ngày và bấm 'In lịch']*
     - Khi để trống một ô, một hộp thoại cảnh báo `alert` bật lên ngay: *'Vui lòng nhập đầy đủ ngày, tháng, năm hợp lệ!'*, bảo vệ ứng dụng không bị phát sinh lỗi hiển thị `NaN`."

---

## PHẦN 6: LỜI CẢM ƠN KẾT THÚC
*(Thời lượng dự kiến: ~30 giây)*

*[Hành động: Hướng mắt về webcam, phong thái lịch sự, tươi cười]*

"Dạ, phần trình bày về **Bài thực hành số 12: In lịch với JavaScript** của em đến đây là hoàn tất.

Thông qua bài tập này, em đã làm chủ được cách thức làm việc với đối tượng `Date`, hiểu sâu về các phương thức trích xuất thời gian như `getDay()` và `getHours()`, cũng như kỹ thuật cập nhật DOM động theo tương tác người dùng.

Em xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe! Hẹn gặp lại thầy cô và các bạn trong video bài tập tiếp theo ạ!"
