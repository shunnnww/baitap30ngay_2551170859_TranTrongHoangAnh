# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 13: ĐỒNG HỒ SỐ THỜI GIAN THỰC — BỘ ẢNH GIF VÀ HÀM ĐỊNH THỜI SETINTERVAL TRONG JAVASCRIPT

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (`Windows + Phím mũi tên trái` cho VS Code; `Windows + Phím mũi tên phải` cho Chrome).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy đọc với ngữ điệu tự nhiên, dõng dạc, phát âm chuẩn các thuật ngữ chuyên ngành (DOM, Date, setInterval, charAt, src...).
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, gõ phím, soi F12 Elements xem các thẻ ảnh nhấp nháy cập nhật theo từng giây.
   - ⏱️ **Thời gian:** Mốc thời gian tích lũy để bạn kiểm soát tiến độ nói trên đồng hồ OBS từ 00:00 đến 19:30.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 – 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình 1080p.
- Mở VS Code chứa 3 tệp tin: `bai13.html`, `bai13.css`, `bai13.js`.
- Bật sẵn tab Chrome hiển thị chiếc đồng hồ số nền đen với các con số điện tử màu đỏ/vàng đang nhảy từng giây đều đặn, phía dưới là dòng chữ *'Chào buổi tối'* (hoặc sáng/chiều).

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo cùng toàn thể các bạn sinh viên đang theo dõi video thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em xin phép được thuyết minh và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 13: Xây dựng ứng dụng đồng hồ số điện tử thời gian thực (Digital Clock) bằng hình ảnh GIF và cơ chế định thời setInterval trong JavaScript**.
> 
> Trong thế giới ứng dụng web, việc nắm bắt và hiển thị thời gian thực là một nhu cầu cực kỳ phổ biến — từ những chiếc đồng hồ đếm ngược phiên đấu giá, hệ thống điểm danh tự động, cho đến các bảng điều khiển tài chính (Financial Dashboards). Ở Bài tập số 13, chúng ta giải quyết một bài toán kinh điển mang tính trực quan rất cao:
> 
> - Thay vì chỉ in ra các con số thời gian dưới dạng văn bản thông thường, chúng ta tái hiện lại màn hình hiển thị LED 7 đoạn cổ điển bằng việc sử dụng một bộ sưu tập hình ảnh GIF động từ `00.gif` đến `09.gif` và hình ảnh dấu hai chấm `haicham.gif`.
> - Ứng dụng đọc dữ liệu thời gian thực tế của hệ điều hành máy tính thông qua đối tượng `Date`.
> - Thực hiện thuật toán chuẩn hóa, bóc tách các chữ số hàng chục và hàng đơn vị của giờ, phút, giây, sau đó ánh xạ động vào thuộc tính `src` của 6 thẻ ảnh độc lập.
> - Sử dụng hàm định thời bất đồng bộ `setInterval` để cỗ máy thời gian hoạt động bền bỉ, cập nhật liên tục với chu kỳ 1000 mili-giây mà không làm đơ cứng giao diện người dùng.
> - Tự động phân tích khung giờ để gửi lời chào thân thiện theo 3 buổi: sáng, chiều và tối.
> 
> Cấu trúc buổi thuyết minh của em sẽ gồm 6 phần nối tiếp nhau:
> 1. Phân tích cơ sở lý thuyết về Timer, Asynchronous JavaScript và đối tượng Date.
> 2. Thuyết minh chi tiết từng dòng thẻ trong `bai13.html`.
> 3. Phân tích phong cách bố cục và tư duy thẩm mỹ trong `bai13.css`.
> 4. Đi sâu giải phẫu thuật toán xử lý dữ liệu và thao tác DOM trong `bai13.js`.
> 5. Thực hành demo trực tiếp, soi F12 Elements xem cơ chế DOM Re-rendering và kiểm tra bộ nhớ Network Cache.
> 6. Tổng kết các bài học kinh nghiệm, các bẫy lỗi lập trình và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép được bắt đầu ngay với phần nền tảng lý thuyết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 – 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Rê chuột vào phần đầu file `bai13.js`, bôi đen hàm `setInterval` và đối tượng `new Date()`.

🗣️ **Lời đọc:**
> "Để làm chủ bài toán đồng hồ số, chúng ta cần nắm vững 4 khái niệm lý thuyết nền tảng trong JavaScript:
> 
> **Thứ nhất: Cơ chế định thời chu kỳ `setInterval()`.**
> JavaScript là một ngôn ngữ đơn luồng (Single-threaded), nghĩa là tại một thời điểm CPU chỉ thực thi một dòng lệnh duy nhất trên Call Stack. Để thực hiện các công việc lặp đi lặp lại theo thời gian mà không làm 'đóng băng' trình duyệt, JavaScript cung cấp cơ chế Web APIs với hàm `setInterval(callback, delay)`.
> - Tham số thứ nhất `callback` là hàm sẽ được gọi thực thi.
> - Tham số thứ hai `delay` là khoảng thời gian chờ tính bằng mili-giây. Ở đây chúng ta truyền vào `1000`, tương đương với đúng 1 giây.
> Mỗi khi hết 1000ms, bộ định thời của trình duyệt sẽ đẩy hàm xử lý vào hàng đợi công việc (Callback Queue) để Event Loop đưa lên Call Stack thực thi. Nhờ đó, đồng hồ luôn nhảy nhịp nhàng mà người dùng vẫn có thể cuộn trang hay bấm chuột bình thường.
> 
> **Thứ hai: Trích xuất thời gian với đối tượng `Date`.**
> Khi ta khởi tạo `const bayGio = new Date();`, JavaScript sẽ đóng gói toàn bộ thông tin ngày, giờ, phút, giây hiện tại của hệ điều hành vào đối tượng này. Chúng ta sử dụng 3 phương thức quan trọng:
> - `bayGio.getHours()`: Trả về số nguyên từ 0 đến 23 đại diện cho giờ.
> - `bayGio.getMinutes()`: Trả về số nguyên từ 0 đến 59 đại diện cho phút.
> - `bayGio.getSeconds()`: Trả về số nguyên từ 0 đến 59 đại diện cho giây.
> 
> **Thứ ba: Thuật toán tách chữ số hàng chục và hàng đơn vị.**
> Giả sử thời gian hiện tại là 9 giờ 5 phút 7 giây. Các phương thức của `Date` sẽ trả về các số đơn lẻ: `9`, `5`, `7`.
> Nhưng trên mặt đồng hồ điện tử, chúng ta luôn cần định dạng đủ 2 chữ số: `09 : 05 : 07`.
> Do đó, chúng ta cần một thuật toán chuẩn hóa: Nếu số nhỏ hơn 10, ta nối thêm ký tự chuỗi `'0'` vào phía trước. Sau khi đã có một chuỗi gồm đúng 2 ký tự (ví dụ chuỗi `"09"`):
> - Ký tự tại vị trí chỉ số 0 (`charAt(0)`) chính là chữ số hàng chục (số `0`).
> - Ký tự tại vị trí chỉ số 1 (`charAt(1)`) chính là chữ số hàng đơn vị (số `9`).
> 
> **Thứ tư: Kỹ thuật thay đổi thuộc tính `src` của thẻ ảnh trong DOM.**
> Mỗi thẻ `<img>` trong cây DOM là một đối tượng `HTMLImageElement`. Thuộc tính `.src` của đối tượng này phản ánh trực tiếp đường dẫn nguồn ảnh hiển thị. Khi ta gán `imgElement.src = '04.gif'`, trình duyệt sẽ lập tức cập nhật lại vùng đồ họa của thẻ đó sang bức ảnh số 4. Đây là kỹ thuật thao tác DOM trực tiếp (Direct DOM Mutation) mang lại hiệu năng cực kỳ cao và độ trễ gần như bằng không."

---

## ⏱️ PHẦN 3: GIẢI THÍCH CHI TIẾT MÃ NGUỒN HTML (`bai13.html`) (06:00 – 10:00 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai13.html` trên VS Code.
- Bôi đen khối `<div class="khung-dong-ho">`, rồi đi sâu vào `<div class="hop-dong-ho">` và `<div class="hop-loi-chao">`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta cùng phân tích chi tiết tệp tin cấu trúc `bai13.html`.
> 
> Nhìn tổng thể, tài liệu gồm 44 dòng mã được tổ chức với tính ngữ nghĩa và sự mạch lạc cao độ:
> 
> - **Phần khai báo tiêu chuẩn từ dòng 1 đến dòng 8:**
>   - Dòng 1 đến dòng 5: Định nghĩa tài liệu HTML5, ngôn ngữ tiếng Việt `lang="vi"`, bảng mã UTF-8 chống lỗi font, và cấu hình `viewport` thích ứng kích thước màn hình.
>   - Dòng 6: Thẻ `<title>` đặt tên trang là *'Bài 13 - Đồng hồ số'*.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai13.css">` liên kết đến bảng định kiểu bên ngoài.
> 
> - **Phần thân trang `<body>` từ dòng 9 đến dòng 42:**
>   - Dòng 12: Thẻ bao bọc ngoài cùng `<div class="khung-dong-ho">`. Đây là chiếc khung thẻ màu trắng trung tâm chứa toàn bộ đồng hồ và lời chào.
> 
>   - **Phân khu chức năng 1: Hộp đồng hồ số LED (`<div class="hop-dong-ho">` từ dòng 14 đến 32):**
>     - Hộp này mô phỏng bảng mạch hiển thị kỹ thuật số nền đen.
>     - Bên trong bao gồm đúng 8 phần tử ảnh `<img>` xếp thành hàng ngang:
>       - Dòng 16: `<img id="gio-chuc" src="00.gif" alt="0" class="chu-so">` — Chữ số hàng chục của giờ.
>       - Dòng 17: `<img id="gio-don-vi" src="00.gif" alt="0" class="chu-so">` — Chữ số hàng đơn vị của giờ.
>       - Dòng 20: `<img src="haicham.gif" alt=":" class="dau-hai-cham">` — Dấu hai chấm tĩnh ngăn cách giữa Giờ và Phút.
>       - Dòng 23: `<img id="phut-chuc" src="00.gif" alt="0" class="chu-so">` — Chữ số hàng chục của phút.
>       - Dòng 24: `<img id="phut-don-vi" src="00.gif" alt="0" class="chu-so">` — Chữ số hàng đơn vị của phút.
>       - Dòng 27: `<img src="haicham.gif" alt=":" class="dau-hai-cham">` — Dấu hai chấm thứ hai ngăn cách giữa Phút và Giây.
>       - Dòng 30: `<img id="giay-chuc" src="00.gif" alt="0" class="chu-so">` — Chữ số hàng chục của giây.
>       - Dòng 31: `<img id="giay-don-vi" src="00.gif" alt="0" class="chu-so">` — Chữ số hàng đơn vị của giây.
>     - Thầy cô và các bạn lưu ý: 6 thẻ ảnh chữ số đều được đặt các định danh `id` mang tính gợi nhớ rất cao (`gio-chuc`, `gio-don-vi`, `phut-chuc`, `phut-don-vi`, `giay-chuc`, `giay-don-vi`). Giá trị `src` khởi tạo mặc định đều là `00.gif`. Các dấu hai chấm không cần gán `id` vì chúng là ảnh tĩnh, không bao giờ thay đổi đường dẫn.
> 
>   - **Phân khu chức năng 2: Vùng hiển thị lời chào (`<div class="hop-loi-chao">` từ dòng 35 đến 37):**
>     - Nằm ngay dưới hộp đồng hồ, chứa thẻ `<span id="loi-chao" class="loi-chao">Chào buổi sáng</span>`.
>     - Chúng em gán `id="loi-chao"` để JavaScript có thể dễ dàng định vị và thay đổi nội dung văn bản này dựa trên giờ thực tế.
> 
> - **Dòng 41:** Thẻ `<script src="bai13.js"></script>` được đặt ở cuối cùng của thẻ `<body>`. Vị trí này bảo đảm toàn bộ 8 thẻ ảnh và thẻ span đã được phân tích cú pháp và dựng sẵn trong cây DOM trước khi mã JavaScript bắt đầu chạy, giúp lệnh `getElementById` luôn tìm thấy phần tử mà không bao giờ bị lỗi `null`."

---

## ⏱️ PHẦN 4: GIẢI THÍCH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai13.css`) (10:00 – 13:00 | Thời lượng: ~3 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai13.css`.
- Trỏ chuột vào các khối `.khung-dong-ho`, `.hop-dong-ho`, `.chu-so`, và `.loi-chao`.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích tệp kiểu dáng `bai13.css`. Với 77 dòng định dạng tinh tế, file CSS này đã biến những bức ảnh rời rạc thành một sản phẩm điện tử nguyên khối sang trọng:
> 
> - **Khởi tạo và căn giữa tuyệt đối cho `<body>` (Dòng 5 đến 19):**
>   - Reset toàn cục `margin: 0; padding: 0; box-sizing: border-box;`.
>   - `min-height: 100vh;`: Thiết lập chiều cao tối thiểu bằng đúng 100% chiều cao màn hình trình duyệt.
>   - Bộ ba Flexbox kinh điển: `display: flex; justify-content: center; align-items: center;`. Bộ ba này đưa toàn bộ khung đồng hồ vào chính giữa tâm màn hình theo cả chiều dọc lẫn chiều ngang.
>   - `background-color: #f0f2f5;`: Màu xám sáng thanh lịch phong cách giao diện người dùng hiện đại, giúp làm nổi bật chiếc thẻ card màu trắng ở trung tâm.
> 
> - **Khung chứa chính `.khung-dong-ho` (Dòng 22 đến 32):**
>   - Sử dụng `display: flex; flex-direction: column; align-items: center; justify-content: center;`. Thiết lập hướng trục dọc `column` giúp hộp đồng hồ số và hộp lời chào tự động xếp thẳng hàng từ trên xuống dưới.
>   - `background-color: #ffffff; padding: 40px 50px; border-radius: 12px;`: Tạo dáng vẻ như một chiếc hộp đồng hồ để bàn cao cấp với 4 góc bo tròn 12px.
>   - `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);`: Đổ bóng mờ dịu mắt, tạo chiều sâu nổi khối.
> 
> - **Mặt kính đồng hồ số `.hop-dong-ho` (Dòng 35 đến 43):**
>   - `background-color: #000000;`: Màu đen tuyền tuyệt đối mô phỏng khoang kính hiển thị đèn LED điện tử.
>   - `display: inline-flex; align-items: center; justify-content: center;`: Biến hộp này thành một inline flexbox, ôm khít lấy các con số và căn các con số nằm thẳng tắp theo trục ngang.
>   - `padding: 20px 25px; border-radius: 8px;`: Khoảng đệm bao quanh bảo đảm các số không bị chạm sát viền kính.
>   - `gap: 3px;`: Khoảng cách mảnh 3px giữa các con số, tạo cảm giác mạch lạc, rõ ràng.
> 
> - **Định dạng kích thước hình ảnh `.chu-so` và `.dau-hai-cham` (Dòng 46 đến 58):**
>   - Cả hai class đều được cố định `height: 52px; width: auto; display: block;`. Việc khóa cứng chiều cao 52px và để chiều rộng tự động giúp các bức ảnh luôn giữ chuẩn tỉ lệ gốc, không bị biến dạng, và bảo đảm các con số cùng dấu hai chấm luôn có cùng chiều cao đồng nhất.
>   - Dấu hai chấm `.dau-hai-cham` được bổ sung `margin: 0 2px;` để tạo khoảng giãn cách trực quan nhẹ nhàng giữa cụm Giờ, cụm Phút và cụm Giây.
> 
> - **Định dạng thông điệp lời chào `.loi-chao` (Dòng 68 đến 76):**
>   - Màu chữ đỏ thẫm ấn tượng `#c62828`.
>   - Kích thước chữ lớn `font-size: 38px;`.
>   - Kiểu chữ nghiêng mềm mại `font-style: italic;`, font serif hoài cổ `'Times New Roman'`.
>   - Dòng chữ đỏ nghiêng nổi bật dưới nền đen của mặt đồng hồ tạo nên một sự tương phản màu sắc cổ điển nhưng vô cùng cuốn hút."

---

## ⏱️ PHẦN 5: PHÂN TÍCH CHUYÊN SÂU JAVASCRIPT (`bai13.js`) (13:00 – 16:30 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Chuyển sang tệp `bai13.js`.
- Bôi đen lần lượt: hàm `dinhDangHaiChuSo`, hàm `layDuongDanAnh`, khối trích xuất Date, khối gán DOM `.src`, cấu trúc `if...else` lời chào, và 2 dòng lệnh kích hoạt cuối cùng.

🗣️ **Lời đọc:**
> "Và bây giờ, chúng ta sẽ bước vào trái tim công nghệ của ứng dụng — tệp tin kịch bản `bai13.js` gồm 72 dòng lệnh được lập trình mạch lạc, module hóa chặt chẽ theo từng hàm:
> 
> - **Hàm phụ trợ 1: Chuẩn hóa 2 chữ số `dinhDangHaiChuSo(so)` (Dòng 10 đến 12):**
>   ```javascript
>   function dinhDangHaiChuSo(so) {
>       return so < 10 ? '0' + so : String(so);
>   }
>   ```
>   - Hàm này nhận vào một số nguyên. Sử dụng toán tử ba ngôi (Ternary Operator) rất thanh lịch: Nếu `so < 10` (ví dụ số 7), nó sẽ ép kiểu và trả về chuỗi `'07'`. Ngược lại, nếu số từ 10 trở lên, nó gọi `String(so)` để chuyển đổi thành chuỗi 2 ký tự tương ứng.
> 
> - **Hàm phụ trợ 2: Sinh tên tệp ảnh GIF `layDuongDanAnh(chuSo)` (Dòng 20 đến 22):**
>   ```javascript
>   function layDuongDanAnh(chuSo) {
>       return '0' + chuSo + '.gif';
>   }
>   ```
>   - Trong thư mục bài tập của chúng ta, các tệp ảnh số được đặt tên có tiền tố số 0 phía trước: `00.gif`, `01.gif`, `02.gif`, cho đến `09.gif`.
>   - Do đó, khi ta truyền vào ký tự `'5'`, hàm sẽ ghép chuỗi `'0' + '5' + '.gif'` để trả về chính xác tên tệp là `'05.gif'`.
> 
> - **Hàm nghiệp vụ trung tâm: `capNhatDongHo()` (Dòng 27 đến 65):**
>   - **Bước 1: Lấy mốc thời gian hệ thống (Dòng 29 - 32):**
>     - `const bayGio = new Date();`
>     - Gọi `bayGio.getHours()`, `bayGio.getMinutes()`, `bayGio.getSeconds()` để lấy chính xác giờ, phút, giây hiện thời của máy tính.
>   - **Bước 2: Định dạng sang chuỗi (Dòng 35 - 37):**
>     - Gọi hàm `dinhDangHaiChuSo()` cho cả 3 biến để thu được 3 chuỗi ký tự: `chuoiGio`, `chuoiPhut`, `chuoiGiay`. Mỗi chuỗi chắc chắn luôn có độ dài đúng bằng 2 ký tự.
>   - **Bước 3: Tách chữ số và cập nhật DOM Image (Dòng 41 - 50):**
>     - Chúng em sử dụng phương thức `charAt(0)` để lấy ký tự đầu tiên (chữ số hàng chục) và `charAt(1)` để lấy ký tự thứ hai (chữ số hàng đơn vị).
>     - Sau đó truyền vào `layDuongDanAnh()` và gán thẳng vào thuộc tính `.src` của các phần tử DOM:
>       - `document.getElementById('gio-chuc').src = layDuongDanAnh(chuoiGio.charAt(0));`
>       - `document.getElementById('gio-don-vi').src = layDuongDanAnh(chuoiGio.charAt(1));`
>       - Tương tự như vậy cho `phut-chuc`, `phut-don-vi`, `giay-chuc` và `giay-don-vi`.
>   - **Bước 4: Phân nhánh xác định lời chào theo buổi (Dòng 54 - 64):**
>     - Cấu trúc rẽ nhánh `if...else if...else`:
>       - Nếu `gio >= 5 && gio <= 11`: Gán chuỗi `'Chào buổi sáng'` (từ 5 giờ sáng đến 11 giờ 59 trưa).
>       - Nếu `gio >= 12 && gio <= 17`: Gán chuỗi `'Chào buổi chiều'` (từ 12 giờ trưa đến 17 giờ 59 chiều).
>       - Ngược lại (`gio >= 18 || gio <= 4`): Gán chuỗi `'Chào buổi tối'` (từ 18 giờ tối đến 4 giờ 59 rạng sáng hôm sau).
>     - Dòng 64: Dùng thuộc tính an toàn `.textContent` để hiển thị lời chào vào thẻ `id="loi-chao"`.
> 
> - **Khởi động và duy trì nhịp đập đồng hồ (Dòng 68 và 71):**
>   - Dòng 68: `capNhatDongHo();` — **Đây là một kỹ thuật phòng vệ cực kỳ quan trọng!**
>     - Nếu chúng ta chỉ viết `setInterval(capNhatDongHo, 1000)`, trình duyệt sẽ phải đợi đủ 1000ms đầu tiên mới chạy hàm lần đầu. Hậu quả là người dùng sẽ nhìn thấy đồng hồ bị đứng hình ở trạng thái mặc định `00:00:00` trong suốt 1 giây đầu tiên sau khi tải trang.
>     - Việc gọi trực tiếp `capNhatDongHo()` ngay lập tức ở dòng 68 giúp đồng hồ hiển thị đúng ngay giờ hiện tại trong chớp mắt mà không có bất kỳ độ trễ nào.
>   - Dòng 71: `setInterval(capNhatDongHo, 1000);` đăng ký với trình duyệt định kỳ cứ sau mỗi 1 giây lại tự động gọi hàm `capNhatDongHo()` một lần để kim giây tiếp tục bước đi."

---

## ⏱️ PHẦN 6: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (16:30 – 18:30 | Thời lượng: ~2 phút)

🎬 **Thao tác:** 
- Phóng to tab Chrome hiển thị `bai13.html`.
- Chỉ con trỏ chuột vào 2 con số giây đang nhảy nhịp nhàng từ giây hiện tại qua giây tiếp theo.
- Bấm `F12`, mở tab **Elements**.
- Phóng to cây DOM của `<div class="hop-dong-ho">`: Cho người xem thấy thuộc tính `src` của thẻ `<img id="giay-don-vi">` và `<img id="giay-chuc">` nhấp nháy sáng màu tím mỗi giây một lần.
- Mở tab **Network**, lọc theo `Img`, chỉ ra rằng trình duyệt nạp ảnh từ `(memory cache)` hoặc `304 Not Modified`, không tốn băng thông tải lại.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô và các bạn cùng quan sát chiếc đồng hồ số vận hành trực tiếp trên trình duyệt Google Chrome:
> 
> **1. Quan sát hoạt động trực quan:**
> - Trên màn hình, chiếc đồng hồ số nền đen đang chạy vô cùng chính xác và sống động.
> - Hai chữ số giây ở góc phải đang nhảy liên tục: từ giây 15, qua 16, 17, 18... nhịp nhàng ăn khớp từng giây với đồng hồ hệ thống trên thanh Taskbar Windows của máy tính em.
> - Phía dưới là dòng chữ `'Chào buổi tối'` (hoặc Chào buổi chiều/sáng tùy theo thời điểm thực tế) in nghiêng màu đỏ sang trọng.
> 
> **2. Mở F12 Developer Tools soi cơ chế cập nhật DOM:**
> - Em bấm phím **F12** và chọn tab **Elements**:
>   - Em mở rộng thẻ `<div class="hop-dong-ho">`.
>   - *[Thao tác chỉ chuột vào dòng `<img id="giay-don-vi"...>`]*
>   - Thầy cô và các bạn hãy chú ý: Cứ sau đúng 1000ms, thuộc tính `src` của thẻ `giay-don-vi` lại lóe sáng màu tím! Điều đó chứng minh JavaScript đang chủ động ghi đè giá trị `src` mới (từ `06.gif` sang `07.gif`) trực tiếp vào DOM Node theo thời gian thực.
> - Chuyển sang tab **Network** và bấm lọc tab **Img**:
>   - Thầy cô có thể thấy một điều rất thú vị: Mặc dù hàm `capNhatDongHo()` liên tục thay đổi ảnh mỗi giây, nhưng trình duyệt không hề phải gửi yêu cầu HTTP mới lên ổ đĩa hay máy chủ. Trình duyệt đã lưu sẵn 10 tệp ảnh số vào bộ nhớ đệm RAM (`memory cache`). Nhờ vậy, ứng dụng chạy cực kỳ mượt mà, tiêu tốn 0% CPU và không gây hao tốn tài nguyên máy tính.
> - Chuyển sang tab **Console**: Hoàn toàn sạch bóng, không có bất kỳ dòng thông báo lỗi nào xuất hiện!"

---

## ⏱️ PHẦN 7: BÀI HỌC KINH NGHIỆM & LỜI CẢM ƠN (18:30 – 19:45 | Thời lượng: ~1.25 phút)

🎬 **Thao tác:** 
- Chuyển màn hình về lại VS Code hoặc để nguyên giao diện đồng hồ đang chạy.
- Giọng đọc chân thành, cảm xúc, kết thúc video chuyên nghiệp.

🗣️ **Lời đọc:**
> "Qua quá trình hoàn thành Bài thực hành số 13, bản thân em đã tích lũy được nhiều kinh nghiệm lập trình quý báu:
> - Nắm vững cơ chế xử lý bất đồng bộ theo chu kỳ của hàm `setInterval` và cách phối hợp nhịp nhàng với đối tượng thời gian `Date`.
> - Rèn luyện tư duy chuẩn hóa dữ liệu chuỗi (String Padding) và kỹ năng bóc tách ký tự bằng phương thức `charAt()`.
> - Hiểu sâu sắc kỹ thuật gọi hàm khởi tạo ban đầu trước khi kích hoạt bộ đếm thời gian để triệt tiêu hiện tượng nhấp nháy giao diện (UI Flashing).
> 
> Video thuyết minh Bài tập thực hành số 13 của em đến đây xin được phép hoàn thành.
> Em xin chân thành cảm ơn quý thầy cô giáo đã luôn tận tâm chỉ dẫn và đồng hành cùng chúng em trong suốt học phần. Cảm ơn các bạn đã chú ý lắng nghe và theo dõi.
> 
> Kính chúc quý thầy cô luôn mạnh khỏe, công tác tốt! Chúc các bạn học tập thật tốt và đạt kết quả cao nhất! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 13 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
