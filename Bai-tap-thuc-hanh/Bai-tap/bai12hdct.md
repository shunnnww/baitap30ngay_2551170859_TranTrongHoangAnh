# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 12: ỨNG DỤNG IN LỊCH VÀ XỬ LÝ ĐỐI TƯỢNG DATE TRONG JAVASCRIPT

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với tốc độ vừa phải, rành mạch, nhấn nhá vào các từ khóa kỹ thuật.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, chuyển tab hoặc bật công cụ để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng để bạn kiểm soát tiến độ không bị quá nhanh hay quá chậm.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình.
- Trên màn hình hiển thị Visual Studio Code mở sẵn thư mục chứa `bai12.html`, `bai12.css`, `bai12.js`.
- Bật sẵn tab trình duyệt hiển thị giao diện tờ lịch Bài 12.

🗣️ **Lời đọc:**
> "Kính chào thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em thực hiện video này nhằm thuyết minh và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 12: Ứng dụng in lịch tương tác và xử lý đối tượng thời gian Date trong JavaScript**.
> 
> Trong lập trình web hiện đại, việc tương tác với thời gian thực của người dùng, hiển thị lịch biểu, tính toán ngày trong tuần hay đưa ra các phản hồi cá nhân hóa như lời chào buổi sáng, buổi chiều là những tính năng vô cùng quen thuộc và quan trọng. Bài thực hành số 12 này chính là một bài toán nền tảng giúp sinh viên chúng em làm chủ toàn bộ chuỗi kiến thức đó:
> 
> - Thứ nhất: Xây dựng giao diện mô phỏng một tờ bloc lịch bóc truyền thống của Việt Nam, với bố cục cân đối, màu sắc tương phản rõ nét và tính thẩm mỹ cao.
> - Thứ hai: Khai thác sức mạnh của đối tượng `Date` trong ngôn ngữ JavaScript để tính toán chính xác ngày thứ mấy trong tuần của bất kỳ ngày tháng năm nào do người dùng nhập vào.
> - Thứ ba: Xử lý thời gian thực với phương thức `getHours()` nhằm đưa ra câu chào thông minh theo thời gian thực của hệ thống máy tính.
> - Thứ tư: Kỹ năng tổ chức mã nguồn chuẩn sạch theo mô hình 3 lớp tách biệt: HTML định hình cấu trúc ngữ nghĩa, CSS trang trí thẩm mỹ giao diện, và JavaScript xử lý logic nghiệp vụ và tương tác DOM.
> 
> Lộ trình của video hôm nay sẽ gồm có 5 phần chính:
> 1. Phân tích nền tảng lý thuyết và cơ chế hoạt động.
> 2. Đi sâu giải thích chi tiết từng dòng mã nguồn HTML.
> 3. Đi sâu phân tích bảng định dạng CSS và tư duy phối màu giao diện.
> 4. Mổ xẻ từng hàm, từng thuật toán xử lý trong tệp JavaScript.
> 5. Thực hành demo tương tác trực tiếp trên trình duyệt, soi kiểm tra bằng F12 DevTools và kiểm thử các trường hợp dữ liệu biên.
> 
> Sau đây, em xin phép được bắt đầu đi vào nội dung chi tiết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút)

🎬 **Thao tác:** 
- Rê chuột vào phần mở đầu file `bai12.js`, cuộn nhẹ nhàng để tạo điểm nhấn.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng code, em xin phép tóm lược nhanh các khái niệm lý thuyết cốt lõi mà bài tập này áp dụng:
> 
> Khái niệm đầu tiên là **Đối tượng Date trong JavaScript**.
> JavaScript cung cấp sẵn đối tượng dựng sẵn `Date` để làm việc với thời gian. Khi chúng ta khởi tạo `new Date()`, nó sẽ lấy mốc thời gian hiện tại của hệ điều hành. Nhưng khi chúng ta truyền vào các tham số theo cú pháp `new Date(nam, thang, ngay)`, JavaScript sẽ tạo ra một mốc thời gian cụ thể trong quá khứ hoặc tương lai.
> 
> Một lưu ý cực kỳ quan trọng và là cái bẫy mà sinh viên lập trình rất hay mắc phải: Trong JavaScript, **chỉ số tháng được đếm bắt đầu từ số 0 đến số 11**, thay vì từ 1 đến 12 như quy ước thông thường. Cụ thể, tháng 1 tương ứng với số 0, tháng 12 tương ứng với số 11. Do đó, khi người dùng nhập vào tháng 12 từ bàn phím, trong mã nguồn chúng ta bắt buộc phải lấy giá trị đó trừ đi 1 trước khi truyền vào đối tượng `Date`.
> 
> Khái niệm thứ hai là **Phương thức getDay()**.
> Phương thức `getDay()` không trả về ngày trong tháng mà trả về **thứ trong tuần** dưới dạng một số nguyên từ 0 đến 6:
> - Số 0 đại diện cho Chủ nhật.
> - Số 1 đại diện cho Thứ hai.
> - Số 2 đại diện cho Thứ ba.
> - Cho tới số 6 đại diện cho Thứ bảy.
> Nhờ tính chất này, chúng ta có thể sử dụng một mảng tiếng Việt gồm 7 phần tử để ánh xạ trực tiếp từ con số sang tên thứ tương ứng một cách vô cùng ngắn gọn và thanh lịch.
> 
> Khái niệm thứ ba là **DOM Manipulation và Event Handling**.
> Ứng dụng hoạt động theo cơ chế hướng sự kiện (Event-driven architecture). Khi người dùng nhấn vào nút bấm 'In lịch', sự kiện `click` sẽ kích hoạt hàm xử lý. Hàm này sẽ đọc dữ liệu từ các ô `input`, tính toán, và dùng thuộc tính `textContent` để cập nhật lại các thẻ HTML trên màn hình ngay lập tức mà không cần phải tải lại trang."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai12.html`) (Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển hẳn sang tab `bai12.html` trên VS Code.
- Bôi đen từng khối mã từ dòng 1 đến dòng 46 khi đọc đến khối đó.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích chi tiết tệp mã nguồn cấu trúc `bai12.html`.
> 
> Nhìn tổng thể, tài liệu được tổ chức rất gọn gàng với 46 dòng code chuẩn HTML5:
> 
> - **Dòng 1 đến dòng 8:** Đây là phần khai báo tiêu chuẩn:
>   - Thẻ `<!DOCTYPE html>` định nghĩa tài liệu tuân theo tiêu chuẩn HTML5 hiện đại nhất.
>   - Thẻ `<html lang="vi">` thiết lập ngôn ngữ hiển thị chính của trang là tiếng Việt, giúp các trình đọc màn hình và công cụ tìm kiếm nhận diện chính xác.
>   - Trong thẻ `<head>`, thẻ `<meta charset="UTF-8">` bảo đảm hiển thị chuẩn xác toàn bộ tiếng Việt có dấu mà không bao giờ bị lỗi font.
>   - Thẻ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` đảm bảo trang co dãn tương thích trên mọi loại thiết bị từ điện thoại đến máy tính để bàn.
>   - Thẻ `<link rel="stylesheet" href="bai12.css">` liên kết đến bảng định kiểu CSS bên ngoài nhằm đảm bảo tính phân tách mã nguồn rõ ràng.
> 
> - **Tiếp tục cuộn xuống phần `<body>`:**
>   Toàn bộ nội dung giao diện được bao bọc trong một khối chứa chính là thẻ `<div class="khung-chinh">`. Thiết kế này đóng vai trò như một chiếc thẻ card màu trắng nổi bật trên nền giấy hoa văn.
>   
>   Bên trong thẻ này được phân chia thành 3 khu vực chức năng rõ ràng:
> 
>   1. **Khu vực thứ nhất là Ô hiển thị tờ lịch** từ dòng 13 đến dòng 18:
>      - Được định danh bởi class `o-lich`.
>      - Bên trong gồm 4 thẻ `<div>` mang các `id` riêng biệt để JavaScript dễ dàng truy xuất:
>        - `id="hien-thi-nam"` mang class `nam-lich`: Ban đầu hiển thị năm mẫu 2026.
>        - `id="hien-thi-thang"` mang class `thang-lich`: Ban đầu hiển thị chuỗi 'Tháng 12'.
>        - `id="hien-thi-ngay"` mang class `ngay-lich`: Hiển thị con số ngày cực lớn ở vị trí trung tâm, mặc định là ngày 24.
>        - `id="hien-thi-thu"` mang class `thu-lich`: Nằm ở đáy tờ lịch, hiển thị tên thứ trong tuần, ví dụ 'Thứ hai'.
> 
>   2. **Khu vực thứ hai là Dòng chữ Lời chào theo buổi** ở dòng 21:
>      - Thẻ `<div id="loi-chao" class="loi-chao">` với nội dung khởi tạo là *'Chào buổi sáng!'*.
>      - Thẻ này được gán `id="loi-chao"` để JavaScript có thể can thiệp và sửa đổi nội dung dựa trên thời gian thực tế mà người dùng đang mở trang.
> 
>   3. **Khu vực thứ ba là Khung nhập liệu Form điều khiển** từ dòng 24 đến dòng 41:
>      - Được bọc trong `<div class="khung-nhap-lieu">`.
>      - Bên trong chia làm 3 nhóm con có class `.nhom-nhap` dành cho Ngày, Tháng, Năm.
>      - Mỗi nhóm kết hợp hoàn hảo giữa cặp thẻ `<label>` và `<input type="number">`:
>        - Ô Ngày có `id="nhap-ngay"`, giới hạn `min="1"`, `max="31"`, giá trị khởi tạo là 24.
>        - Ô Tháng có `id="nhap-thang"`, giới hạn `min="1"`, `max="12"`, giá trị khởi tạo là 12.
>        - Ô Năm có `id="nhap-nam"`, giới hạn từ năm 1900 đến năm 2100, giá trị khởi tạo là 2026.
>        - Việc đặt kiểu `type="number"` cùng các thuộc tính `min`, `max` giúp ngăn chặn ngay từ đầu các giá trị vô lý do người dùng gõ nhầm.
>      - Cuối cùng là nút lệnh `<button type="button" id="btn-in-lich" class="nut-in-lich">In<br>lịch</button>`. Chữ 'In lịch' được ngắt dòng bằng thẻ `<br>` để tạo dáng vẻ vuông vắn, cứng cáp đúng theo mẫu đề bài yêu cầu.
> 
> - **Dòng 44:** Thẻ `<script src="bai12.js"></script>` được đặt ở sát thẻ đóng `</body>`. Đây là một chuẩn thực hành tốt (Best practice) trong thiết kế web, giúp trình duyệt phân tích và vẽ toàn bộ giao diện HTML lên màn hình trước, sau đó mới nạp và thực thi mã JavaScript, tránh hiện tượng trang bị trắng hay đứng hình khi tải."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai12.css`) (Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển sang tab `bai12.css`.
- Rê chuột qua các khối CSS từ trên xuống dưới, bôi đen các thuộc tính quan trọng: `background-repeat`, `box-shadow`, `display: flex`.

🗣️ **Lời đọc:**
> "Tiếp theo, em xin phân tích tệp định dạng kiểu dáng `bai12.css`. Đây là phần mang lại linh hồn thẩm mỹ cho giao diện:
> 
> - **Quy tắc Reset từ dòng 5 đến dòng 7:**
>   - Đoạn mã sử dụng bộ chọn toàn cục `*` với thuộc tính `box-sizing: border-box`.
>   - Thuộc tính này cực kỳ cốt lõi trong CSS: nó quy định rằng độ rộng và chiều cao của mọi phần tử sẽ bao gồm cả phần đệm `padding` và viền `border`. Nhờ đó, các khối hộp không bao giờ bị phình to bất thường làm vỡ bố cục khi chúng ta thêm padding hay viền.
> 
> - **Định dạng thẻ `<body>` từ dòng 9 đến dòng 19:**
>   - `background-image: url('../Kho-anh/Bai12/Nen.gif');`: Sử dụng hình ảnh nền caro truyền thống, kết hợp với `background-repeat: repeat;` để hình ảnh lặp đều vô tận trên khắp bề mặt màn hình.
>   - Chúng em sử dụng Flexbox hiện đại với `display: flex; justify-content: center; align-items: center; min-height: 100vh;`. Bộ bốn thuộc tính này giúp căn chiếc thẻ lịch vào chính giữa tâm màn hình một cách hoàn hảo theo cả trục ngang lẫn trục dọc, bất kể màn hình lớn hay nhỏ.
> 
> - **Khung chính `.khung-chinh` từ dòng 21 đến dòng 28:**
>   - Đặt `max-width: 500px; width: 100%;` giúp khung co dãn linh hoạt trên màn hình điện thoại mà không vượt quá độ rộng chuẩn trên màn hình máy tính.
>   - Nền trắng tinh khiết `#ffffff`, bo tròn 4 góc với `border-radius: 16px;`.
>   - Đổ bóng nhẹ nhàng bằng `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);`, tạo cảm giác thẻ lịch nổi bồng bềnh lên trên nền giấy caro, tăng chiều sâu 3D cho giao diện.
> 
> - **Ô hiển thị tờ lịch `.o-lich` từ dòng 31 đến dòng 68:**
>   - Được bao quanh bởi viền xám trang nhã `border: 1px solid #cccccc;` và bo góc mềm mại 12px.
>   - Phần năm `.nam-lich`: Dùng font serif cổ điển `'Times New Roman'`, màu đỏ thẫm `#C62828`, kích thước 18px in đậm, tạo nét trang trọng như bìa bloc lịch thật.
>   - Phần tháng `.thang-lich`: Màu xanh lam đậm `#1565C0`, font 20px in đậm.
>   - Phần ngày `.ngay-lich`: Đây là điểm nhấn thị giác mạnh mẽ nhất trên toàn bộ trang web. Số ngày được phóng to lên kích thước `64px`, in đậm với tông màu đỏ rực rỡ `#C62828`, sử dụng `line-height: 1;` để con số không tạo ra khoảng trống thừa thãi bên trên và bên dưới.
>   - Phần thứ `.thu-lich`: Đặt màu xanh lam `#1565C0` kích thước 18px in đậm, cân xứng hài hòa với dòng chữ tháng ở phía trên.
> 
> - **Dòng chữ lời chào `.loi-chao` từ dòng 70 đến dòng 77:**
>   - Font chữ nghiêng `font-style: italic;`, font serif `'Times New Roman'`, kích thước 24px, màu đỏ `#C62828`, đặt ở chính giữa tạo cảm giác ấm cúng, thân thiện.
> 
> - **Khung nhập liệu `.khung-nhap-lieu` từ dòng 80 đến cuối file:**
>   - Sử dụng viền xanh dương đậm nổi bật `border: 2px solid #1565C0;`, bo tròn 10px.
>   - Bố cục bên trong sử dụng `display: flex; align-items: center; gap: 12px; justify-content: space-between;` để sắp xếp 3 ô nhập và nút bấm thẳng hàng ngang đều đặn.
>   - Mỗi `.nhom-nhap` lại dùng `display: flex; flex-direction: column; align-items: center;` để nhãn Label nằm ngay ngắn phía trên ô Input.
>   - Nút bấm `.nut-in-lich`: Nền xám đậm `#424242`, chữ trắng, bo góc, hiệu ứng `:hover` chuyển sang xám sẫm `#212121` và `:active` co nhẹ tạo phản hồi xúc giác bấm nút rất chân thực."

---

## ⏱️ PHẦN 5: PHÂN TÍCH CHUYÊN SÂU JAVASCRIPT (`bai12.js`) (Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển sang tab `bai12.js`.
- Bôi đen hàm `capNhatLich()`, chỉ chuột vào dòng `new Date(nam, thang - 1, ngay)` và mảng `cacThu`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta sẽ bước vào phần quan trọng nhất tạo nên sự sống động của ứng dụng: tệp tin kịch bản `bai12.js`.
> 
> Toàn bộ logic ứng dụng được đóng gói trong một hàm độc lập có tên là `capNhatLich()`:
> 
> - **Bước 1: Thu thập và chuẩn hóa dữ liệu đầu vào (Dòng 6 đến dòng 13):**
>   - Chúng em sử dụng `document.getElementById('nhap-ngay').value` để lấy chuỗi ký tự mà người dùng nhập.
>   - Ngay lập tức, hàm `parseInt(..., 10)` được gọi để chuyển đổi chuỗi thành số nguyên hệ cơ số 10.
>   - Dòng 10 kiểm tra tính hợp lệ bằng biểu thức logic: `if (isNaN(ngay) || isNaN(thang) || isNaN(nam))`. Nếu người dùng xóa trắng ô nhập liệu hoặc gõ chữ linh tinh, hàm `alert()` sẽ bật lên thông báo nhắc nhở và lập tức `return` dừng thực thi, ngăn ngừa lỗi chương trình xảy ra.
> 
> - **Bước 2: Khởi tạo đối tượng Date và tính thứ trong tuần (Dòng 16 đến dòng 29):**
>   - Cú pháp then chốt: `const ngayDuocChon = new Date(nam, thang - 1, ngay);`.
>   - Như em đã trình bày ở phần lý thuyết, tham số tháng bắt buộc phải là `thang - 1`. Ví dụ người dùng chọn tháng 12 thì giá trị truyền vào phải là 11.
>   - Tiếp theo, chúng em khai báo một mảng hằng số `cacThu` gồm 7 phần tử chuỗi:
>     - Vị trí index 0: 'Chủ nhật'
>     - Vị trí index 1: 'Thứ hai'
>     - Vị trí index 2: 'Thứ ba'
>     - Vị trí index 3: 'Thứ tư'
>     - Vị trí index 4: 'Thứ năm'
>     - Vị trí index 5: 'Thứ sáu'
>     - Vị trí index 6: 'Thứ bảy'
>   - Khi gọi `ngayDuocChon.getDay()`, nó sẽ trả về số nguyên từ 0 đến 6. Ta dùng trực tiếp giá trị này làm chỉ số index truy cập vào mảng: `const thuTrongTuan = cacThu[ngayDuocChon.getDay()];`. Đây là một giải pháp thuật toán đạt độ phức tạp $O(1)$ cực kỳ tối ưu, không cần dùng chuỗi câu lệnh `switch...case` dài dòng.
> 
> - **Bước 3: Cập nhật dữ liệu lên giao diện HTML (Dòng 32 đến dòng 35):**
>   - Thuộc tính `.textContent` được dùng để gán lại nội dung hiển thị cho các phần tử:
>     - `hien-thi-nam` nhận giá trị `nam`.
>     - `hien-thi-thang` nhận chuỗi ghép `'Tháng ' + thang`.
>     - `hien-thi-ngay` nhận giá trị `ngay`.
>     - `hien-thi-thu` nhận giá trị `thuTrongTuan`.
>   - Việc dùng `textContent` thay vì `innerHTML` là một nguyên tắc bảo mật cơ bản, giúp chống lại nguy cơ tấn công tiêm mã độc XSS.
> 
> - **Bước 4: Xử lý lời chào thông minh theo thời gian thực (Dòng 38 đến dòng 47):**
>   - Sử dụng `new Date().getHours()` để trích xuất số giờ hiện tại của đồng hồ máy tính (từ 0 đến 23).
>   - Thuật toán phân nhánh câu chào:
>     - Mặc định: 'Chào buổi sáng!' (dành cho khung giờ từ 5h đến trước 12h trưa).
>     - Nếu `gioHienTai >= 12 && gioHienTai < 18`: Đổi thành 'Chào buổi chiều!'.
>     - Nếu `gioHienTai >= 18 || gioHienTai < 5`: Đổi thành 'Chào buổi tối!'.
>   - Sau đó gán vào phần tử `loi-chao`.
> 
> - **Bước 5: Lắng nghe sự kiện (Dòng 51 và 54):**
>   - `document.getElementById('btn-in-lich').addEventListener('click', capNhatLich);`: Đăng ký lắng nghe sự kiện click chuột vào nút bấm.
>   - `window.addEventListener('DOMContentLoaded', capNhatLich);`: Đăng ký lắng nghe sự kiện khi toàn bộ cây phân cấp DOM của trang web đã được tải xong. Nhờ dòng code này, ngay khi vừa mở trang lên, hàm `capNhatLich()` đã được kích hoạt chạy ngay một lần để tính toán và hiển thị thứ chính xác cho ngày mặc định mà không cần người dùng phải bấm nút."

---

## ⏱️ PHẦN 6: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to cửa sổ trình duyệt Chrome hiển thị trang `bai12.html`.
- Làm tuần tự các bước dưới đây, vừa thao tác vừa nói.

🗣️ **Lời đọc:**
> "Và bây giờ, em xin kính mời thầy cô và các bạn cùng quan sát phần thực nghiệm chạy thử ứng dụng trực tiếp trên trình duyệt web.
> 
> 1. **Kiểm tra trạng thái tải ban đầu:**
>    - Khi trang vừa tải xong, giao diện hiển thị ngay tờ lịch ngày 24, Tháng 12, Năm 2026.
>    - Thứ được tự động tính và hiển thị chuẩn xác là: **Thứ năm** (hoặc Thứ hai tùy theo dữ liệu mẫu).
>    - Nhìn xuống dòng lời chào, thời điểm em đang quay video này là buổi tối (hoặc buổi sáng), hệ thống đã lấy đúng giờ từ Windows và hiển thị dòng chữ: *'Chào buổi tối!'*.
> 
> 2. **Kiểm tra tương tác in lịch với các mốc thời gian đặc biệt:**
>    - Bây giờ, em sẽ nhập thử một ngày lịch sử trọng đại của dân tộc: **Ngày 2, Tháng 9, Năm 1945** (Ngày Bác Hồ đọc Tuyên ngôn Độc lập).
>    - *[Thao tác: Gõ ô ngày: 2, ô tháng: 9, ô năm: 1945, sau đó nhấn nút 'In lịch']*
>    - Ngay khi em bấm nút 'In lịch', giao diện lập tức cập nhật: Số ngày 2 to màu đỏ, Tháng 9 màu xanh lam, Năm 1945, và thứ trong tuần được tính ra chính xác 100% là: **Chủ nhật**!
>    - Thử tiếp một mốc ngày lễ tương lai: **Ngày 1, Tháng 1, Năm 2030**.
>    - *[Thao tác: Nhập ngày 1, tháng 1, năm 2030, bấm In lịch]*
>    - Kết quả hiển thị tức thì: **Thứ ba**!
> 
> 3. **Kiểm tra xử lý ngoại lệ và dữ liệu biên (Edge cases):**
>    - Bây giờ em xóa trống ô ngày và bấm 'In lịch'.
>    - *[Thao tác: Xóa ô ngày, bấm In lịch]*
>    - Một hộp thoại cảnh báo hiện lên thông báo: *'Vui lòng nhập đầy đủ ngày, tháng, năm hợp lệ!'*. Điều này chứng minh khối mã kiểm tra `isNaN` của chúng em đã hoạt động hoàn hảo.
> 
> 4. **Bật F12 Developer Tools soi kiểm tra chuyên sâu:**
>    - *[Thao tác: Bấm phím F12 trên bàn phím để mở Developer Tools]*
>    - Đầu tiên, em chuyển sang tab **Console**: Thầy cô có thể thấy màn hình console hoàn toàn sạch sẽ, màu xanh, không có bất kỳ một dòng thông báo lỗi hay cảnh báo nào.
>    - Chuyển sang tab **Elements**: Em rê chuột vào thẻ `.khung-chinh`. Khung Box Model phía dưới hiển thị rõ ràng: vùng Content, Padding 35px 30px màu xanh lá, không có viền thừa.
>    - Nhấp chọn biểu tượng **Toggle device toolbar** (phím tắt `Ctrl + Shift + M`): Em thử co dãn màn hình về kích thước điện thoại iPhone 12 Pro (390px) và iPad Mini (768px). Toàn bộ khung lịch và form nhập liệu co giãn vô cùng mượt mà, không bị tràn màn hình hay xuất hiện thanh cuộn ngang khó chịu."

---

## ⏱️ PHẦN 7: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây)

🎬 **Thao tác:** 
- Chuyển lại màn hình VS Code hoặc giao diện đẹp nhất của bài tập.
- Nói với giọng điệu trang trọng, cảm xúc và chân thành.

🗣️ **Lời đọc:**
> "Qua quá trình nghiên cứu và hoàn thành Bài thực hành số 12, bản thân em đã rút ra được rất nhiều bài học quý báu:
> - Nắm vững cơ chế làm việc của đối tượng `Date` trong JavaScript, đặc biệt là quy tắc offset tháng từ 0 đến 11 và cách khai thác phương thức `getDay()`.
> - Rèn luyện kỹ năng phân tích và chia tách bài toán thành các hàm xử lý dữ liệu độc lập, dễ bảo trì và mở rộng.
> - Củng cố kỹ năng thiết kế giao diện bằng Flexbox và tư duy trải nghiệm người dùng (UX) thông qua việc phản hồi các trạng thái lỗi dữ liệu.
> 
> Bài thuyết minh về Bài thực hành số 12 của em đến đây xin phép được khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo đã luôn tận tình hướng dẫn, truyền thụ kiến thức cho chúng em trong suốt học phần. Cảm ơn các bạn đã chú ý lắng nghe và theo dõi video.
> 
> Kính chúc thầy cô thật nhiều sức khỏe, chúc các bạn học tập tốt và gặt hái nhiều điểm cao trong các đợt đánh giá thực hành! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 12 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
