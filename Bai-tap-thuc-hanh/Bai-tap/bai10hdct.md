# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 10: THIẾT KẾ BIỂU MẪU LIÊN HỆ HIỆN ĐẠI & LÀM CHỦ BỐ CỤC LƯỚI ĐA CỘT FORM CONTROLS

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Đọc với giọng đĩnh đạc, rành mạch, làm nổi bật các thuật ngữ kỹ thuật: Form Controls, Semantic Form, Grid/Flex 2-column layout, Pseudo-class `:focus`, `:hover`, `transition`, Validation Attributes.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, click vào các ô nhập liệu để kích hoạt viền focus xanh Teal, nhấn thử nút Gửi để kiểm tra validation.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng giúp bạn kiểm soát tiến độ nói trong khoảng 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Mốc: 00:00 - 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình ở độ phân giải Full HD.
- Mở VS Code hiển thị sẵn thư mục chứa `bai10.html` và `bai10.css`.
- Bật tab Google Chrome bên cạnh hiển thị chiếc thẻ Form liên hệ màu xanh mòng két (Deep Teal `#0f766e`) nổi bật trên nền xám bạc.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn cùng toàn thể các bạn sinh viên đang theo dõi video báo cáo thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Trong video ngày hôm nay, em xin phép được trình bày và thuyết minh chuyên sâu về sản phẩm **Bài tập thực hành số 10: Thiết kế biểu mẫu liên hệ người dùng hiện đại và làm chủ kỹ thuật bố cục đa cột cùng các hiệu ứng phản hồi Form Controls trong CSS**.
> 
> Thưa thầy cô và các bạn, biểu mẫu trực tuyến (HTML Form) là cầu nối tương tác quan trọng bậc nhất giữa người dùng và hệ thống quản trị của bất kỳ trang web nào. Dù là một trang mạng xã hội, một sàn thương mại điện tử, hay một cổng thông tin học trực tuyến, toàn bộ dữ liệu người dùng – từ thông tin đăng ký tài khoản, gửi đơn đặt hàng, đến những lá thư liên hệ phản hồi – đều bắt buộc phải đi qua chiếc cổng kiểm soát mang tên Form.
> 
> Một biểu mẫu thô sơ, các ô nhập lệch hàng méo mó, màu sắc nhợt nhạt và không có phản hồi thị giác sẽ khiến người dùng cảm thấy nghi ngại về tính bảo mật và dễ dàng rời bỏ trang. Chính vì vậy, Bài tập số 10 được thiết kế nhằm trang bị cho sinh viên chúng em những kỹ năng chuẩn mực và chuyên nghiệp nhất trong việc thiết kế Form:
> - Thứ nhất: Xây dựng cấu trúc biểu mẫu ngữ nghĩa chuẩn HTML5 với đầy đủ các phân vùng: thẻ `<header>` tiêu đề, thẻ `<form>` chứa các nhóm điều khiển `<label>`, `<input>`, `<select>`, `<textarea>`, `<button>`.
> - Thứ hai: Khai thác các thuộc tính kiểm thử dữ liệu tích hợp sẵn của HTML5 như `type="email"`, `type="tel"`, `required`, `checked`.
> - Thứ ba: Ứng dụng kỹ thuật bố cục đa cột đối xứng (Two-column layout): ghép cặp Họ tên - Email, Số điện thoại - Chủ đề trên cùng một hàng bằng mô hình Flexbox/Grid hiện đại, đồng thời để các trường Nội dung dài span toàn bộ độ rộng 100%.
> - Thứ tư: Làm chủ trạng thái tương tác bàn phím và chuột với Pseudo-classes `:focus`, `:hover` kết hợp hiệu ứng biến đổi mượt mà `transition: border-color 0.2s` và xóa bỏ đường viền xanh mặc định khó chịu bằng `outline: none`.
> 
> Lộ trình thuyết minh ngày hôm nay của em sẽ gồm 6 phần:
> 1. Lời mở đầu và mục tiêu đề bài.
> 2. Cơ sở lý thuyết về kiến trúc HTML Form, cơ chế phân cột và pseudo-classes trong CSS.
> 3. Giải thích chi tiết từng dòng thẻ cấu trúc trong `bai10.html`.
> 4. Phân tích chi tiết từng thuộc tính định dạng trong `bai10.css`.
> 5. Thực hành demo tương tác, kiểm tra phản hồi `:focus`, thử nghiệm validation và soi F12.
> 6. Tổng kết bài học kinh nghiệm, các lỗi hay gặp và lời cảm ơn kết thúc.
> 
> Sau đây, em xin kính mời quý thầy cô cùng bước vào nội dung chi tiết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & NGUYÊN LÝ THIẾT KẾ FORM CHUẨN (Mốc: 02:30 - 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Mở file `bai10.css`, chỉ chuột vào đoạn `:focus`, `:hover`, `hang-hai-cot`, giải thích các cơ chế tương tác người dùng.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô, trước hết em xin làm rõ các trụ cột lý thuyết cốt lõi trong thiết kế biểu mẫu tương tác:
> 
> **1. Khái niệm thứ nhất: Mối quan hệ giữa `<label>` và các Form Controls.**
> Trong kiến trúc web chuẩn tiếp cận (Web Accessibility - A11y), mọi ô nhập liệu đều phải được liên kết chặt chẽ với một nhãn mô tả thông qua thuộc tính `for` trên thẻ `<label>` tương ứng với thuộc tính `id` trên ô `<input>`:
> `<label for="ho-ten">Họ và tên</label>` đi cùng `<input id="ho-ten">`.
> Mối liên kết này mang lại hai lợi ích vô giá:
> - Trình đọc màn hình cho người khiếm thị sẽ đọc to nhãn mô tả khi người dùng chuyển trỏ chuột vào ô nhập.
> - Người dùng có thể nhấp chuột trực tiếp vào dòng chữ nhãn thì con trỏ soạn thảo vẫn tự động nhảy vào ô nhập liệu tương ứng.
> 
> **2. Khái niệm thứ hai: Kỹ thuật phân chia cột trong Form (Grid vs Flexbox).**
> Khi thiết kế biểu mẫu, việc xếp chồng tất cả các ô nhập liệu theo một cột dọc duy nhất sẽ khiến form trở nên dài lê thê gây mệt mỏi cho người dùng. Bằng việc phân chia các ô nhập liệu ngắn (như Họ tên - Email, Số điện thoại - Chủ đề) thành 2 cột ngang nhau, form sẽ trở nên gọn gàng và cân xứng hơn rất nhiều.
> Kỹ thuật này được giải quyết bằng lớp `.hang-hai-cot`:
> - Với Flexbox: Dùng `display: flex; gap: 20px;` và cho mỗi ô con nhận `flex: 1;`.
> - Với CSS Grid: Dùng `display: grid; grid-template-columns: 1fr 1fr; gap: 20px;`, và những ô dài như textarea chỉ cần khai báo `grid-column: span 2;`. Cả hai mô hình đều đem lại sự chuẩn xác tuyệt đối từng pixel.
> 
> **3. Khái niệm thứ ba: Trạng thái Pseudo-class `:focus` và trải nghiệm Micro-interaction.**
> Khi người dùng nhấp chuột hoặc dùng phím `Tab` di chuyển vào một ô nhập liệu, phần tử đó sẽ rơi vào trạng thái `:focus`. Mặc định, các trình duyệt sẽ vẽ một đường viền xanh hoặc đen đậm khá thô kệch.
> Chúng em triệt tiêu đường viền mặc định bằng `outline: none;` và chủ động thiết kế lại trạng thái focus: đổi màu viền sang tông màu chủ đạo xanh Teal `#0f766e`. Đồng thời, kết hợp với thuộc tính `transition: border-color 0.2s ease`, sự biến đổi màu sắc diễn ra mượt mà trong 0.2 giây, tạo cảm giác phản hồi vô cùng cao cấp và tinh tế."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai10.html`) (Mốc: 06:00 - 10:30 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai10.html`.
- Bôi đen tuần tự từng cụm từ dòng 1 đến dòng 71.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng phân tích chi tiết tệp cấu trúc `bai10.html` gồm 72 dòng code chuẩn Semantic HTML5:
> 
> - **Từ dòng 1 đến dòng 8: Khai báo tài liệu tiêu chuẩn:**
>   - Sau các thẻ meta quen thuộc UTF-8 và viewport, thẻ tiêu đề trang: `<title>Bài 10 - Trang liên hệ (biểu mẫu HTML)</title>`.
>   - Thẻ `<link rel="stylesheet" href="bai10.css">` liên kết bảng định kiểu bên ngoài.
> 
> - **Tiếp tục đi vào phần `<body>`:**
>   - **Dòng 11:** Khối bọc chính `<div class="the-form">`. Đây là chiếc thẻ card màu trắng trung tâm chứa trọn vẹn toàn bộ giao diện biểu mẫu.
>   
>   - **Dòng 13 đến dòng 16: Đầu form `<header class="dau-form">`:**
>     - Được bao trong thẻ ngữ nghĩa `<header>`.
>     - `<h1 class="tieu-de-form">Liên hệ với chúng tôi</h1>`: Tiêu đề chính to rõ, trang trọng.
>     - `<p class="mo-ta-form">Vui lòng điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24 giờ.</p>`: Dòng ghi chú thân thiện tạo sự tin cậy và cam kết dịch vụ với khách hàng.
>   
>   - **Dòng 19 đến dòng 67: Thân form tương tác `<form class="than-form">`:**
>     - Thẻ `<form action="#" method="post">`: Khai báo phương thức `POST` – phương thức truyền dữ liệu biểu mẫu an toàn trong lập trình web, giúp đóng gói thông tin vào phần thân của HTTP Request.
>     - Toàn bộ thân form được chia thành 5 hàng chức năng:
>     
>     *Hàng 1 (Dòng 21 - 30) — Hai cột: Họ tên & Email:*
>     - Bao trong `<div class="hang-hai-cot">`.
>     - Cột 1: `<label for="ho-ten">Họ và tên</label>` đi cùng `<input type="text" id="ho-ten" name="ho_ten" value="Nguyễn Văn An" required>`. Thuộc tính `required` bắt buộc người dùng không được để trống.
>     - Cột 2: `<label for="email">Email</label>` đi cùng `<input type="email" id="email" name="email" value="an.nv@tlu.edu.vn" required>`. Kiểu `type="email"` kích hoạt bộ kiểm tra định dạng email tự động của trình duyệt (phải có dấu `@` và tên miền hợp lệ).
>     
>     *Hàng 2 (Dòng 33 - 47) — Hai cột: Số điện thoại & Chủ đề:*
>     - Tiếp tục bao trong `<div class="hang-hai-cot">`.
>     - Cột 1: `<input type="tel" id="so-dien-thoai" name="so_dien_thoai" value="0987 654 321">` dành riêng cho việc nhập số điện thoại.
>     - Cột 2: Hộp chọn thả xuống `<select id="chu-de" name="chu_de">` chứa 4 lựa chọn: *Hỏi về khoá học*, *Hỏi về học phí*, *Hỏi về lịch thi*, và *Khác*. Mục khóa học được thiết lập `selected` mặc định.
>     
>     *Hàng 3 (Dòng 50 - 53) — Khối nội dung văn bản dài:*
>     - Bao trong `<div class="nhom-o-nhap">`.
>     - Thẻ `<textarea id="noi-dung" name="noi_dung" rows="4">`: Cho phép người dùng nhập văn bản nhiều dòng với chiều cao 4 dòng tiêu chuẩn, chứa nội dung mẫu câu hỏi liên quan đến lịch nộp bài tập môn Lập trình Web.
>     
>     *Hàng 4 (Dòng 56 - 59) — Hộp kiểm Checkbox xác nhận:*
>     - `<div class="nhom-checkbox">`:
>     - Chứa một ô `<input type="checkbox" id="dong-y" name="dong_y" checked required>` và nhãn `<label for="dong-y">Tôi đồng ý nhận email phản hồi.</label>`. Việc đặt `checked` và `required` đảm bảo người dùng phải đồng ý với điều khoản nhận thư phản hồi trước khi gửi.
>     
>     *Hàng 5 (Dòng 62 - 65) — Cặp nút bấm hành động:*
>     - `<button type="submit" class="nut-gui">Gửi liên hệ</button>`: Kích hoạt sự kiện submit gửi toàn bộ dữ liệu đi.
>     - `<button type="reset" class="nut-nhap-lai">Nhập lại</button>`: Cho phép người dùng xóa trắng dữ liệu để làm lại từ đầu.
> 
> Cấu trúc HTML của bài 10 cực kỳ chặt chẽ, đầy đủ các loại thẻ form controls thông dụng nhất trong thực tế phát triển web."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai10.css`) (Mốc: 10:30 - 15:00 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai10.css`.
- Lần lượt bôi đen từ dòng 5 đến dòng 150, phân tích sâu các thuộc tính thẩm mỹ UI hiện đại.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích tệp định kiểu `bai10.css` gồm 151 dòng code:
> 
> - **Dòng 5 đến dòng 18: Reset Box Model và căn giữa Form:**
>   - `* { box-sizing: border-box; }`: Kiểm soát kích thước hộp trên toàn trang.
>   - `body`: `background-color: #f1f5f9; font-family: Arial, sans-serif; margin: 0; padding: 40px 15px;`. Sử dụng màu xám phấn sáng nhạt.
>   - `display: flex; justify-content: center; align-items: center; min-height: 100vh;`: Căn toàn bộ chiếc thẻ Form vào chính giữa tâm màn hình, bảo đảm sự cân bằng thị giác hoàn hảo.
> 
> - **Dòng 21 đến dòng 28: Thẻ Form `.the-form`:**
>   - `max-width: 680px; width: 100%;`: Giới hạn chiều rộng tối đa 680px, chuẩn mực cho một form liên hệ không quá bè và không quá hẹp.
>   - `background-color: #ffffff; border-radius: 12px;`: Khung nền trắng tinh tế, bo tròn 12px.
>   - `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);`: Đổ bóng mờ nhẹ 25px tạo chiều sâu.
>   - `overflow: hidden;`: Khóa các góc nhọn của phần header bên trong.
> 
> - **Dòng 31 đến dòng 47: Đầu Form màu xanh mòng két (Teal):**
>   - `.dau-form`: `background-color: #0f766e; color: #ffffff; padding: 24px 30px;`. Màu Teal đậm `#0f766e` là một gam màu cực kỳ thịnh hành trong thiết kế phẳng hiện đại, mang lại cảm giác chuyên nghiệp, đáng tin cậy và dịu mắt.
>   - `.tieu-de-form`: Cỡ chữ 22px in đậm, tạo ấn tượng rõ ràng.
>   - `.mo-ta-form`: Cỡ 13.5px, màu trắng mờ `rgba(255, 255, 255, 0.9)` rất trang nhã.
> 
> - **Dòng 50 đến dòng 64: Bố cục 2 cột cho các ô nhập liệu ngắn:**
>   - `.than-form`: Đệm rộng rãi `padding: 30px 30px;`.
>   - `.hang-hai-cot`: `display: flex; gap: 20px; margin-bottom: 16px;`. Flexbox tự động chia đôi hàng thành 2 cột với khoảng cách 20px.
>   - `.hang-hai-cot .nhom-o-nhap`: Nhận `flex: 1; margin-bottom: 0;` để hai ô nhập luôn có độ rộng bằng nhau 50% một cách tuyệt đối.
> 
> - **Dòng 66 đến dòng 96: Định dạng các Form Controls và hiệu ứng `:focus`:**
>   - `.nhom-o-nhap label`: `display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 6px;`. Nhãn được đặt trên một dòng riêng biệt phía trên ô nhập, in đậm màu xám than sang trọng.
>   - Ô nhập `.nhom-o-nhap input, select, textarea`:
>     - `width: 100%; padding: 10px 12px;`: Chiếm trọn độ rộng cột và đệm 10px trên dưới tạo cảm giác gõ phím rất vừa vặn, êm ái.
>     - `border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; color: #1e293b;`: Viền xám sáng mỏng 1px và bo góc 6px.
>     - **Bộ đôi then chốt:** `outline: none;` và `transition: border-color 0.2s;`.
>   - **Trạng thái `:focus` (Dòng 92 - 96):**
>     - Khi người dùng nhấp chuột hoặc focus vào ô: `border-color: #0f766e;`. Viền ô chuyển ngay sang màu xanh mòng két đồng bộ với màu của tiêu đề form trong vòng 0.2 giây, mang lại phản hồi xúc giác thị giác vô cùng hiện đại.
> 
> - **Dòng 99 đến dòng 113: Hộp kiểm Checkbox:**
>   - `.nhom-checkbox`: `display: flex; align-items: center; justify-content: flex-end; gap: 8px;`. Căn toàn bộ hộp kiểm sang lề phải, tạo sự kết nối tự nhiên với nút Gửi ở bên dưới.
>   - Con trỏ chuột chuyển thành hình bàn tay `cursor: pointer;` khi rê vào nhãn.
> 
> - **Dòng 115 đến dòng 150: Thiết kế nút hành động kép:**
>   - `.nhom-nut-bam`: `display: flex; gap: 12px;` đặt 2 nút bấm nằm ngang cạnh nhau.
>   - Nút gửi `.nut-gui`: Nền xanh Teal `#0f766e`, chữ trắng in đậm, bo góc 6px. Khi rê chuột `.nut-gui:hover`, màu nền tự động chuyển sang xanh sẫm `#0d5f58` với `transition: background-color 0.2s`.
>   - Nút nhập lại `.nut-nhap-lai`: Nền xám nhạt `#e2e8f0`, chữ màu than `#334155`, hover chuyển sang `#cbd5e1`. Sự phân cấp màu sắc rõ rệt giữa nút chính (Primary Button) và nút phụ (Secondary Button) là chuẩn mực vàng trong UI/UX Design!"

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (Mốc: 15:00 - 19:00 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to Chrome hiển thị `bai10.html`.
- Thao tác nhấp chuột vào lần lượt ô Họ tên, Email, Số điện thoại, Chủ đề, Nội dung để chứng minh viền xanh `:focus`.
- Xóa chữ trong ô Họ tên rồi bấm 'Gửi liên hệ' để lộ thông báo validation của trình duyệt.
- Bấm 'Nhập lại' để xem chức năng reset dữ liệu.
- Mở F12 DevTools soi Elements và Computed.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng các bạn quan sát màn hình demo tương tác thực tế trên trình duyệt Chrome:
> 
> **1. Trải nghiệm thị giác tổng quan và Micro-interaction:**
> - Chiếc Form liên hệ hiện diện thanh thoát ở chính giữa màn hình với dải banner xanh mòng két sang trọng.
> - *[Thao tác: Nhấp chuột vào ô 'Họ và tên']*
> - Thầy cô có thể thấy đường viền màu xanh mòng két lập tức sáng bừng lên một cách êm ái nhờ hiệu ứng `transition: border-color 0.2s`. Đường viền màu xanh dương mặc định thô kệch của trình duyệt hoàn toàn biến mất nhờ câu lệnh `outline: none;`.
> - *[Thao tác: Nhấn phím Tab để nhảy sang ô 'Email', 'Số điện thoại', 'Chủ đề', 'Nội dung']*
> - Mỗi lần nhấn Tab, điểm focus di chuyển nhịp nhàng, giúp người dùng hoàn toàn có thể điền toàn bộ biểu mẫu chỉ bằng bàn phím mà không cần chạm chuột.
> 
> **2. Kiểm thử tính năng kiểm tra dữ liệu tự động (HTML5 Form Validation):**
> - *[Thao tác: Bôi đen và xóa sạch nội dung ô 'Họ và tên', sau đó nhấn nút 'Gửi liên hệ']*
> - Ngay lập tức, trình duyệt chặn lại không cho gửi dữ liệu và hiển thị bong bóng thông báo tiếng Việt: *'Vui lòng điền vào trường này'* (Please fill in this field). Điều này chứng minh thuộc tính `required` của HTML5 đã hoàn thành xuất sắc nhiệm vụ bảo vệ dữ liệu đầu vào.
> - *[Thao tác: Nhập lại tên, nhưng sang ô Email gõ chuỗi sai định dạng: 'hoanganh_tlu' rồi bấm Gửi]*
> - Trình duyệt tiếp tục bắt lỗi: *'Vui lòng nhập một địa chỉ email'*. Kiểu `type="email"` đã kiểm soát chặt chẽ tính hợp lệ của định dạng email.
> 
> **3. Kiểm thử nút 'Nhập lại' (Reset Button):**
> - *[Thao tác: Thay đổi các dữ liệu khác, sau đó bấm nút 'Nhập lại']*
> - Toàn bộ dữ liệu trong form lập tức quay trở về các giá trị khởi tạo ban đầu một cách nhanh chóng.
> 
> **4. Soi cấu trúc bằng F12 Developer Tools:**
> - *[Thao tác: Nhấn F12, chọn thanh tra phần tử thẻ `<div class="hang-hai-cot">`]*
> - Bảng hiển thị rõ ràng cơ chế Flexbox 2 cột với khoảng cách `gap: 20px`.
> - Tab Console sạch bóng, không có bất kỳ xung đột nào.
> - Bật Device Toolbar (`Ctrl + Shift + M`), kiểm tra trên màn hình điện thoại 375px: Form co dãn rất mềm mại và vừa vặn."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, LỖI HAY GẶP & LỜI CẢM ƠN (Mốc: 19:00 - 20:30 | Thời lượng: ~1.5 phút)

🎬 **Thao tác:** 
- Đóng DevTools, chuyển lại màn hình VS Code hoặc giao diện Form đẹp nhất.
- Nói với giọng điệu đĩnh đạc, ấm áp và truyền cảm.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô giáo và các bạn sinh viên, qua quá trình hoàn thành Bài thực hành số 10, bản thân em đã rút ra được những bài học kinh nghiệm thiết thực trong thiết kế Form:
> 
> - **Thứ nhất:** Luôn gắn kết cặp thẻ `<label for="id">` và `<input id="...">`. Đây là tiêu chuẩn bắt buộc của thiết kế web trợ năng quốc tế.
> - **Thứ hai:** Làm chủ trạng thái `:focus` và luôn kết hợp `outline: none;` với việc chủ động thiết lập lại màu sắc `border-color` và `transition`. Không bao giờ bỏ `outline` mà không có viền thay thế vì điều đó sẽ làm người dùng dùng bàn phím bị lạc hướng.
> - **Thứ ba:** Ứng dụng phân cấp thị giác rõ ràng cho các nút bấm: nút hành động chính (Submit) cần mang màu sắc chủ đạo nổi bật, trong khi nút phụ (Reset) nên dùng tông màu trung tính để tránh người dùng bấm nhầm xóa mất dữ liệu.
> 
> Video thuyết minh Bài tập thực hành số 10 của em đến đây xin được phép khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo bộ môn *Phát triển ứng dụng Web cơ bản* đã tận tình hướng dẫn, truyền dạy những kiến thức vô cùng bổ ích cho chúng em trong suốt học kỳ. Cảm ơn các bạn đã theo dõi video.
> 
> Kính chúc quý thầy cô dồi dào sức khỏe, thành công trong sự nghiệp trồng người! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 10 — Sẵn sàng cho sinh viên Trần Trọng Hoàng Anh quay hình OBS Studio.*
