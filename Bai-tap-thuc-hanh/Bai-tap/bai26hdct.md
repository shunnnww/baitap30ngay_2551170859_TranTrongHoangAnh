# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 26: XÂY DỰNG FORM ĐĂNG KÝ VỚI BOOTSTRAP 5 (GRID, FORM CONTROLS, SELECT, RADIO, CHECKBOX)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Tệp mã nguồn:** `bai26.html`

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn phím `Windows + Mũi tên trái` cho VS Code mở `bai26.html`, `Windows + Mũi tên phải` cho Chrome mở trang bài 26).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói với giọng tự tin, đĩnh đạc, phát âm rõ ràng các thuật ngữ kỹ thuật.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, bàn phím, phóng to code hoặc chuyển tab để video trực quan.
   - ⏱️ **Thời gian:** Mốc thời gian tương ứng giúp bạn làm chủ nhịp điệu thuyết trình, đạt chuẩn thời lượng 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 - 02:30)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình. Mở song song VS Code và Chrome hiển thị giao diện Form Đăng ký CLB Lập trình Web.
- Con trỏ chuột lướt nhẹ qua tiêu đề form và các trường thông tin.

🗣️ **Lời đọc:**
> "Kính chào thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Trong video này, em xin phép được thuyết minh và báo cáo chi tiết về sản phẩm **Bài tập thực hành số 26: Xây dựng Form đăng ký thành viên Câu lạc bộ Lập trình Web chuẩn Responsive bằng thư viện Bootstrap 5**.
> 
> Thưa thầy cô và các bạn, biểu mẫu trực tuyến (Form) là thành phần tương tác quan trọng bậc nhất trong bất kỳ một hệ thống website nào. Cho dù đó là một mạng xã hội, cổng thông tin trường đại học, hay một sàn thương mại điện tử, thì Form chính là cầu nối trực tiếp để thu thập dữ liệu, tiếp nhận ý kiến đóng góp và xác thực danh tính người dùng.
> 
> Mục tiêu cốt lõi của Bài tập số 26 nhằm giải quyết trọn vẹn các yêu cầu kỹ thuật và trải nghiệm người dùng sau đây:
> - **Thứ nhất:** Ứng dụng hệ thống lưới linh hoạt (Grid System) của Bootstrap 5 để phân chia bố cục form khoa học, tự động co dãn hoàn hảo giữa chế độ hiển thị 2 cột trên màn hình máy tính (Desktop) và 1 cột duy nhất trên màn hình điện thoại di động (Mobile).
> - **Thứ hai:** Làm chủ toàn bộ hệ thống lớp định kiểu Form Controls của Bootstrap 5 bao gồm: các trường nhập liệu văn bản (`form-control`), danh sách lựa chọn thả xuống (`form-select`), các nút chọn một giá trị duy nhất dạng hàng ngang (`form-check form-check-inline`), và hộp kiểm cam kết (`form-check-input`).
> - **Thứ ba:** Ứng dụng nguyên lý thiết kế Card giao diện phẳng hiện đại, kết hợp độ bóng đổ (`shadow-sm`), viền bo mềm mại (`rounded-3`) và phối màu nhận diện thương hiệu với tông màu xanh lá cây đại diện cho thành công (`bg-success`).
> - **Thứ tư:** Thiết lập cơ chế xác thực dữ liệu cơ bản (Form Validation) bằng các thuộc tính chuẩn của HTML5 như `required`, `type="email"`, `type="tel"` nhằm ngăn chặn việc gửi dữ liệu trống hoặc sai định dạng lên máy chủ.
> 
> Lộ trình thuyết minh chi tiết của em hôm nay gồm 6 phần:
> 1. Giới thiệu tổng quan và mục tiêu đề bài.
> 2. Cơ sở lý thuyết nền tảng về Form và Grid System trong Bootstrap 5.
> 3. Đi sâu phân tích chi tiết từng dòng mã nguồn HTML trong file `bai26.html`.
> 4. Mổ xẻ các class Bootstrap 5 và tư duy thiết kế giao diện UI/UX.
> 5. Thực hành demo tương tác trực tiếp trên trình duyệt web, kiểm tra responsive và soi F12 Developer Tools.
> 6. Bài học kinh nghiệm, các lỗi phổ biến cần tránh và lời cảm ơn kết thúc.
> 
> Ngay sau đây, em xin phép bước vào Phần 2: Cơ sở lý thuyết nền tảng."

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển trỏ chuột sang VS Code, cuộn lướt nhẹ các dòng code từ trên xuống dưới.
- Bôi đen thẻ `<link>` chứa CDN Bootstrap 5 để nhấn mạnh.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng mã cụ thể, em xin phép trình bày tóm lược 4 trụ cột lý thuyết cốt lõi được áp dụng trong bài thực hành này:
> 
> **1. Trụ cột thứ nhất: Hệ sinh thái Bootstrap 5 và cơ chế nạp CDN.**
> Bootstrap là framework CSS phổ biến hàng đầu thế giới dành cho thiết kế giao diện web di động ưu tiên (Mobile-first). Ở phiên bản Bootstrap 5, một bước chuyển mình mang tính đột phá là thư viện đã hoàn toàn loại bỏ phụ thuộc vào jQuery, chuyển sang sử dụng JavaScript thuần (Vanilla JS) và CSS custom properties. 
> Việc tích hợp Bootstrap 5 qua mạng phân phối nội dung CDN (Content Delivery Network) của `jsdelivr` đem lại tốc độ nạp trang siêu tốc nhờ cơ chế lưu cache toàn cầu, giúp chúng ta tận dụng hàng trăm lớp tiện ích (utility classes) mà không cần phải viết lại hàng trăm dòng mã CSS thủ công.
> 
> **2. Trụ cột thứ hai: Hệ thống lưới 12 cột (12-Column Grid System) và Flexbox.**
> Bố cục của Bootstrap hoạt động dựa trên bộ ba mắt xích không thể tách rời: `container`, `row` và `col`:
> - `container` thiết lập vùng đệm bao bọc và cố định chiều rộng an toàn theo từng điểm ngắt (breakpoints).
> - `row` hoạt động như một flex container với `display: flex; flex-wrap: wrap;`, chịu trách nhiệm nhóm các cột và quản lý khoảng cách rãnh (gutter).
> - `col-*` chia màn hình thành 12 phần bằng nhau. Khi chúng ta chỉ định `col-md-6`, điều đó có nghĩa là trên các thiết bị có kích thước màn hình từ 768 pixel trở lên (Medium breakpoint), phần tử sẽ chiếm đúng 6 trên 12 cột, tức là 50% độ rộng. Khi kích thước màn hình nhỏ hơn 768 pixel, Bootstrap sẽ tự động đưa phần tử về độ rộng 100% (`col-12`), giúp nội dung không bị chen chúc hay vỡ khung.
> 
> **3. Trụ cột thứ ba: Cơ chế quản lý Form Control và Trải nghiệm nhập liệu (User Experience).**
> Bootstrap 5 chuẩn hóa toàn bộ các thẻ nhập liệu thông qua lớp `.form-control` và `.form-select`. Khi gắn lớp này, trình duyệt sẽ gỡ bỏ hoàn toàn đường viền thô kệch mặc định của hệ điều hành, thay thế bằng:
> - Đường viền xám nhạt tinh tế với bán kính bo tròn mềm mại.
> - Khoảng đệm `padding` rộng rãi, tạo cảm giác thoải mái khi người dùng chạm ngón tay trên màn hình cảm ứng điện thoại.
> - Hiệu ứng phản hồi trạng thái Focus thông minh: khi nhấp chuột vào ô nhập, một vầng sáng nhẹ (focus ring) kèm đổi màu viền sẽ xuất hiện, giúp người dùng định vị chính xác vị trí con trỏ đang nhập liệu.
> 
> **4. Trụ cột thứ tư: Ngữ nghĩa nhãn mác (Accessibility & Semantics).**
> Một form chuyên nghiệp bắt buộc phải đảm bảo khả năng tiếp cận (Accessibility - a11y). Cặp thuộc tính `for` trên thẻ `<label>` và `id` trên thẻ `<input>` phải trùng khớp nhau tuyệt đối. Điều này không chỉ giúp các phần mềm đọc màn hình dành cho người khiếm thị đọc chuẩn xác ngữ cảnh, mà còn cho phép người dùng click chuột trực tiếp vào dòng chữ nhãn thì con trỏ soạn thảo vẫn tự động nhảy vào ô nhập liệu tương ứng."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT TỪNG DÒNG HTML (`bai26.html`) (06:00 - 10:30)

🎬 **Thao tác:** 
- Nhấp chọn file `bai26.html` trên VS Code.
- Bôi đen tuần tự từng khối code từ dòng 1 đến dòng 99 theo nhịp bài thuyết trình.

🗣️ **Lời đọc:**
> "Ngay bây giờ, em xin phép đi sâu vào phân tích chi tiết từng dòng code trong tệp tin `bai26.html`. Toàn bộ file có tổng cộng 99 dòng code chuẩn cấu trúc HTML5:
> 
> - **Từ dòng 1 đến dòng 9:** Đây là phần mở đầu tài liệu:
>   - Dòng 1: `<!DOCTYPE html>` định nghĩa chuẩn tài liệu HTML5 mới nhất.
>   - Dòng 2: Thẻ `<html lang="vi">` thông báo với trình duyệt ngôn ngữ nội dung là tiếng Việt.
>   - Dòng 4: `<meta charset="UTF-8">` bảo đảm xử lý chính xác toàn bộ bảng mã Unicode tiếng Việt có dấu.
>   - Dòng 5: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` thiết lập tỷ lệ hiển thị chuẩn 1:1, ngăn chặn trình duyệt di động tự động thu nhỏ trang.
>   - Dòng 6: Thẻ `<title>` đặt tên trang là *'Bài 26 - Form đăng ký với Bootstrap'*.
>   - Dòng 8: Nhúng bảng mã kiểu dáng Bootstrap 5.3.3 thông qua thẻ `<link rel="stylesheet">`.
> 
> - **Dòng 10:** Thẻ `<body class="bg-light py-5">`:
>   - Lớp `bg-light` phủ toàn bộ nền trang web một gam màu xám trắng thanh lịch, làm nổi bật khối form màu trắng tinh.
>   - Lớp `py-5` thiết lập khoảng đệm theo phương thẳng đứng (trên và dưới) là 3rem (khoảng 48px), tạo khoảng thở khoáng đạt cho bố cục.
> 
> - **Từ dòng 12 đến dòng 14:** Hệ thống khung bao bọc:
>   - `<div class="container">`: Tạo vùng chứa có độ rộng cố định theo từng breakpoint và căn giữa trang.
>   - `<div class="row justify-content-center">`: Khởi tạo một hàng Flexbox và căn giữa toàn bộ các cột con theo trục ngang.
>   - `<div class="col-md-9 col-lg-7">`: Giới hạn khung form chiếm 7 cột trên màn hình Large máy tính để bàn (khoảng 58% độ rộng), chiếm 9 cột trên màn hình máy tính bảng Medium, và chiếm trọn 100% trên điện thoại.
> 
> - **Từ dòng 16 đến dòng 20: Cấu trúc Thẻ Card và Card Header:**
>   - `<div class="card shadow-sm border-0 rounded-3 overflow-hidden">`: Tạo một chiếc thẻ giao diện phẳng với bóng đổ nhẹ `shadow-sm`, lược bỏ viền thô `border-0`, bo tròn góc `rounded-3` và giấu phần thừa tràn mép bằng `overflow-hidden`.
>   - `<div class="card-header bg-success text-white text-center py-3">`: Tạo thanh tiêu đề màu xanh lá cây thành công `#198754`, chữ trắng, căn giữa nội dung và đệm trên dưới 1rem.
>   - Bên trong chứa thẻ `<h4 class="mb-0 fw-bold">`: Đặt tiêu đề *'Đăng ký tham gia CLB Lập trình Web'*, bỏ margin đáy `mb-0` và in đậm `fw-bold`.
> 
> - **Từ dòng 22 đến dòng 24: Thân Card và Mở thẻ Form:**
>   - `<div class="card-body p-4">`: Không gian chứa nội dung chính với đệm bên trong 1.5rem (24px) ở cả 4 cạnh.
>   - `<form class="row g-3">`: Khai báo form hoạt động như một hệ thống lưới hàng ngang, với khoảng cách rãnh giữa các cột và hàng là `g-3` (1rem hay 16px).
> 
> - **Từ dòng 25 đến dòng 34: Nhóm Họ tên và Mã sinh viên:**
>   - Hai trường này được bọc trong hai khối `<div class="col-md-6">`. Trên màn hình từ máy tính bảng trở lên, hai trường sẽ nằm ngang hàng nhau cân đối, mỗi bên chiếm đúng một nửa (6/12 cột).
>   - Mỗi khối gồm thẻ `<label class="form-label small fw-semibold">` tạo nhãn chữ nhỏ gọn, in đậm rõ ràng, và thẻ `<input class="form-control">` có thuộc tính `required` bắt buộc nhập, kèm theo chuỗi `placeholder` gợi ý định dạng.
> 
> - **Từ dòng 35 đến dòng 44: Nhóm Email và Số điện thoại:**
>   - Tương tự như trên, cũng sử dụng hai cột `col-md-6` song song.
>   - Điểm đặc biệt là sử dụng đúng kiểu dữ liệu HTML5: `type="email"` và `type="tel"`. Khi người dùng mở trang trên điện thoại thông minh, bàn phím số hoặc bàn phím chuyên dụng có phím `@` sẽ tự động bật lên, tối ưu trải nghiệm gõ phím.
> 
> - **Từ dòng 46 đến dòng 61: Nhóm chọn Trình độ bằng Radio Button:**
>   - Chiếm trọn một hàng ngang với `<div class="col-12">`.
>   - Nhãn 'Trình độ' được gắn `d-block mb-2` để chiếm nguyên dòng riêng.
>   - 3 lựa chọn 'Cơ bản', 'Khá', 'Tốt' sử dụng thẻ `<div class="form-check form-check-inline">`. Lớp `form-check-inline` đóng vai trò cực kỳ quan trọng, giúp các nút chọn tròn (Radio) nằm dàn hàng ngang liền kề nhau rất gọn gàng.
>   - Cả 3 nút đều mang chung thuộc tính `name="trinhDo"` để trình duyệt hiểu đây là một nhóm loại trừ lẫn nhau, và nút 'Cơ bản' được gắn sẵn thuộc tính `checked` làm giá trị mặc định.
> 
> - **Từ dòng 63 đến dòng 72: Nhóm Chọn lớp:**
>   - Nằm trong `<div class="col-12">` với nhãn 'Chọn lớp'.
>   - Sử dụng thẻ `<select class="form-select" id="chon-lop">` chứa 4 thẻ `<option>` đại diện cho các lớp: 67CNTT1, 67CNTT2, 67KTPM1, và 67HTTT, trong đó 67CNTT1 được chọn sẵn mặc định.
> 
> - **Từ dòng 74 đến dòng 82: Checkbox cam kết điều khoản:**
>   - Được bao bọc trong `<div class="form-check">`.
>   - Thẻ `<input class="form-check-input" type="checkbox" id="cam-ket" checked required>`: Được gắn sẵn dấu tích `checked` và thuộc tính `required`. Nếu người dùng bỏ tích ô này mà bấm đăng ký, trình duyệt sẽ chặn lại ngay lập tức.
>   - Dòng chữ nhãn: *'Tôi cam kết tự làm bài và quay video OBS'*.
> 
> - **Từ dòng 84 đến dòng 89: Cụm nút bấm điều khiển:**
>   - `<div class="col-12 d-flex justify-content-end gap-2 mt-4">`: Sử dụng Flexbox để đẩy hai nút sang sát mép bên phải, cách nhau một khoảng `gap-2` (0.5rem), và tạo khoảng cách biên trên `mt-4` (1.5rem).
>   - Nút thứ nhất: `<button type="reset" class="btn btn-outline-secondary px-4">Nhập lại</button>`. Nút này có kiểu đường viền xám tinh tế, khi click sẽ đưa toàn bộ form về trạng thái ban đầu.
>   - Nút thứ hai: `<button type="submit" class="btn btn-success px-4 fw-semibold">Đăng ký</button>`. Nút hành động chính màu xanh lá cây đồng bộ với tiêu đề card, chữ in đậm vững chãi, padding ngang `px-4` tạo kích thước nút to bản, dễ bấm.
> 
> - **Dòng 96:** Thẻ `<script src="...bootstrap.bundle.min.js">` nhúng gói thư viện JavaScript của Bootstrap trước khi đóng thẻ body."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT CÁC CLASS BOOTSTRAP & CSS (10:30 - 15:00)

🎬 **Thao tác:** 
- Trên VS Code, bôi đen các nhóm class tiện ích chính: `shadow-sm`, `rounded-3`, `row g-3`, `form-check-inline`, `d-flex justify-content-end`.
- Mở F12 DevTools bên Chrome, inspect vào thẻ form để chỉ ra các thuộc tính CSS được Bootstrap sinh ra tự động.

🗣️ **Lời đọc:**
> "Tiếp tục bài thuyết minh, em xin phân tích chuyên sâu về hệ thống lớp CSS tiện ích (Utility classes) của Bootstrap 5 đã tạo nên sức mạnh và vẻ đẹp hoàn thiện của giao diện này:
> 
> **1. Nhóm Class Kiến trúc Thẻ Card và Bóng đổ:**
> - `card`: Bootstrap thiết lập `display: flex; flex-direction: column; min-width: 0; word-wrap: break-word; background-color: #fff; background-clip: border-box; border: var(--bs-card-border-width) solid var(--bs-card-border-color);`.
> - `shadow-sm`: Thuộc tính này áp dụng `box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;`. Đây là mức đổ bóng tinh tế nhất của chuẩn thiết kế Material/Flat Design, vừa đủ tạo chiều sâu 3D tách biệt form khỏi nền xám `bg-light` mà không gây cảm giác nặng nề.
> - `rounded-3`: Thay vì bo góc 0.25rem như mặc định (`rounded`), `rounded-3` nâng bán kính bo góc lên `var(--bs-border-radius-lg)` tức khoảng 0.5rem đến 1rem (16px), mang lại cảm giác thân thiện, mềm mại theo xu hướng UI hiện đại.
> - `overflow-hidden`: Khi một thẻ cha có bo góc, các thẻ con bên trong như `card-header` nếu có nền màu đậm sẽ bị tràn ra ngoài 4 góc vuông làm mất mép cong. Class `overflow-hidden` đảm bảo góc bo tròn của card-header luôn khớp hoàn mỹ với thẻ cha.
> 
> **2. Nhóm Class Phối màu và Nhận diện Thương hiệu:**
> - `bg-success`: Sử dụng biến màu `--bs-success-rgb: 25, 135, 84`. Màu xanh lá cây `#198754` này gợi cảm xúc an toàn, tin cậy, thúc đẩy hành vi đăng ký tham gia của sinh viên.
> - `text-white text-center py-3`: Thiết lập màu chữ trắng tương phản tối đa với nền xanh, căn chữ ra chính giữa và tạo khoảng đệm trên dưới 1rem để khối tiêu đề bề thế và trang trọng.
> 
> **3. Nhóm Class Quản lý Lưới và Khoảng cách Rãnh (Gutters):**
> - `row g-3`: Tham số `g-3` thiết lập `--bs-gutter-x: 1rem; --bs-gutter-y: 1rem;`. Nhờ đó, dù form có nhiều trường nhập liệu chia thành nhiều hàng và cột khác nhau, khoảng cách giữa các ô luôn đồng nhất chính xác 16 pixel theo cả chiều dọc lẫn chiều ngang mà chúng ta không cần viết thêm bất kỳ dòng mã `margin` hay `padding` tùy biến nào.
> - `col-md-6`: Sử dụng Media Query `@media (min-width: 768px) { .col-md-6 { flex: 0 0 auto; width: 50%; } }`. Đây chính là chìa khóa vàng giúp form tự động biến hóa giữa giao diện Desktop 2 cột và giao diện Mobile 1 cột.
> 
> **4. Nhóm Class Định dạng Form Controls và Form Check:**
> - `form-control`: Thiết lập `display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; border: 1px solid #ced4da; border-radius: 0.375rem; transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;`.
>   Hiệu ứng chuyển đổi mềm mại (`transition`) giúp trải nghiệm gõ phím mượt mà và chuyên nghiệp.
> - `form-check-inline`: Thiết lập `display: inline-flex; align-items: center; margin-right: 1rem;`. Điều này triệt tiêu thuộc tính khối mặc định của thẻ `div`, cho phép ba nút Radio Cơ bản, Khá, Tốt xếp hàng thẳng tắp bên cạnh nhau.
> 
> **5. Nhóm Class Nút bấm (Button Utilities):**
> - `btn btn-outline-secondary px-4`: Biến nút bấm thành dạng viền mảnh trong suốt, chữ xám. Khi người dùng rê chuột (hover), nền nút sẽ chuyển sang màu xám nhạt. Đây là kỹ thuật phân cấp thị giác (Visual Hierarchy), làm nổi bật nút đăng ký bên cạnh.
> - `btn btn-success px-4 fw-semibold`: Nút chính có nền xanh, chữ trắng, in đậm nhẹ, padding ngang mở rộng 1.5rem tạo độ bám tay tuyệt vời khi thao tác."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (15:00 - 18:30)

🎬 **Thao tác:** 
- Phóng to cửa sổ trình duyệt Chrome hiển thị `bai26.html`.
- Bắt đầu thực hiện các bài kiểm thử tương tác theo từng bước dưới đây.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, bây giờ em xin chuyển sang phần được mong đợi nhất: **Thực hành trải nghiệm trực tiếp các tính năng tương tác trên trình duyệt Google Chrome và soi kiểm tra chuyên sâu bằng F12 Developer Tools**.
> 
> **Bước 1: Trải nghiệm tương tác nhập liệu thực tế:**
> - Đầu tiên, em nhấp chuột vào ô *Họ và tên*. Thầy cô có thể thấy ngay hiệu ứng viền xanh nhạt bao quanh ô nhập liệu cực kỳ êm ái. Em tiến hành nhập tên: *Trần Trọng Hoàng Anh*.
> - Chuyển sang ô *Mã sinh viên*, em nhập: *2251060000*.
> - Ô *Email*: Em nhập email trường cấp: *hoanganh@tlu.edu.vn*.
> - Ô *Số điện thoại*: Em nhập số liên lạc: *0912345678*.
> - Chuyển xuống phần *Trình độ*: Mặc định đang tích chọn 'Cơ bản'. Em thử click sang nút 'Khá', rồi click sang 'Tốt'. Các nút radio chuyển đổi mượt mà và chỉ cho phép duy nhất một lựa chọn tại một thời điểm.
> - Ô *Chọn lớp*: Em nhấp vào hộp chọn, danh sách 4 lớp xổ xuống mượt mà. Em chuyển thử sang lớp *67CNTT2*.
> - Ô *Cam kết*: Checkbox cam kết đang được tích chọn sẵn.
> 
> **Bước 2: Kiểm tra tính năng Nút 'Nhập lại' (Reset):**
> - Bây giờ, em bấm vào nút 'Nhập lại'.
> - *[Thao tác: Bấm nút Nhập lại]*
> - Ngay lập tức, toàn bộ dữ liệu vừa gõ trong các ô Họ tên, Mã SV, Email, SĐT đều được xóa trắng, ô Trình độ tự động quay về trạng thái 'Cơ bản', và Lớp quay về '67CNTT1'. Tính năng của thẻ `<button type="reset">` hoạt động hoàn hảo 100%!
> 
> **Bước 3: Kiểm thử cơ chế Validation và Bẫy lỗi người dùng (Edge cases):**
> - Bây giờ, khi form đang hoàn toàn trống rỗng, em thử bấm thẳng vào nút 'Đăng ký'.
> - *[Thao tác: Bấm nút Đăng ký]*
> - Thầy cô có thể quan sát thấy: Trình duyệt lập tức chặn lại không cho gửi form, con trỏ tự động nhảy về ô 'Họ và tên' kèm theo một bong bóng thông báo màu đen nổi bật: *'Please fill out this field'* (Vui lòng điền vào trường này).
> - Em thử gõ tên: *Hoàng Anh*, sau đó lại bấm Đăng ký.
> - Lập tức trình duyệt lại phát hiện ô 'Mã sinh viên' bị trống và yêu cầu nhập tiếp.
> - Bây giờ em nhập mã sinh viên, nhưng ở ô Email em cố tình gõ chuỗi sai định dạng: *hoanganh-khong-co-a-cong*, rồi bấm Đăng ký.
> - Ngay tức thì, trình duyệt phát hiện thiếu ký tự `@` và thông báo lỗi định dạng email. Đây chính là sức mạnh tuyệt vời của thuộc tính `type="email"` kết hợp với cơ chế HTML5 validation!
> - Tiếp theo, em bỏ dấu tích ở ô cam kết rồi bấm Đăng ký: Trình duyệt ngay lập tức yêu cầu: *'Please check this box if you want to proceed'*.
> 
> **Bước 4: Bật F12 Developer Tools soi kiểm tra chi tiết:**
> - Bây giờ, em nhấn phím tắt `F12` trên bàn phím để kích hoạt bảng công cụ lập trình viên Chrome DevTools.
> - **Kiểm tra tab Console:** Màn hình Console hoàn toàn sạch sẽ, không có bất kỳ một thông báo lỗi cú pháp (Syntax error) hay lỗi tài nguyên 404 nào.
> - **Kiểm tra tab Elements:** Em dùng công cụ mũi tên Inspect chỉ vào thẻ `<div class="card">`. Tại khung Box Model bên phải, chúng ta thấy rõ ràng các thông số padding 24px, margin tự động căn giữa từ hệ thống flex.
> - **Kiểm tra tính năng Responsive trên đa thiết bị:** Em nhấn tổ hợp phím `Ctrl + Shift + M` để bật thanh công cụ giả lập thiết bị (Device Toolbar).
>   - Ở chế độ màn hình máy tính lớn 1200px: Form hiển thị ở trung tâm, chiếm 7 cột cân đối, các trường Họ tên - Mã SV, Email - SĐT nằm song song hai cột đẹp mắt.
>   - Bây giờ em thu nhỏ dần chiều rộng màn hình xuống dưới 768px (mô phỏng iPad Mini hoặc điện thoại iPhone 14 Pro Max độ rộng 390px): Thầy cô hãy quan sát điểm ngắt `col-md-6` phát huy tác dụng: các ô nhập liệu tự động trượt xuống thành 1 cột duy nhất, nút bấm tự động căn chỉnh hợp lý, không hề xuất hiện hiện tượng vỡ layout hay thanh cuộn ngang gây ức chế cho người dùng!"

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (18:30 - 20:00)

🎬 **Thao tác:** 
- Tắt F12 DevTools, đưa màn hình trình duyệt về giao diện đẹp mắt nhất của bài 26.
- Nói với giọng điệu truyền cảm, chân thành và trang trọng.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, qua quá trình trực tiếp xây dựng và hoàn thiện Bài tập thực hành số 26, bản thân em đã đúc kết được nhiều bài học kinh nghiệm quý giá:
> 
> - **Thứ nhất:** Hiểu sâu sắc triết lý thiết kế hướng tiện ích (Utility-First) và cách tư duy bố cục theo hệ thống lưới Grid System 12 cột của Bootstrap 5, giúp tiết kiệm tới 70% thời gian viết CSS tùy biến.
> - **Thứ hai:** Làm chủ cách phối hợp giữa các thuộc tính ngữ nghĩa của HTML5 như `required`, `placeholder`, `for/id` với các class định kiểu của Bootstrap để tạo ra một biểu mẫu vừa thân thiện, vừa chuẩn bảo mật và khả năng tiếp cận cao.
> - **Thứ ba: Một số lỗi kinh nghiệm thực tế cần tránh:**
>   - Quên đặt thuộc tính `name` giống nhau cho nhóm Radio button, dẫn đến việc người dùng có thể tích chọn đồng thời nhiều lựa chọn mâu thuẫn.
>   - Đặt nhầm class `form-control` cho thẻ `<select>` thay vì class chuẩn là `form-select`, khiến mũi tên xổ xuống bị mất hoặc méo mó.
>   - Quên thuộc tính `overflow-hidden` trên thẻ cha có bo góc, khiến phần header vuông góc chém mất góc bo tròn của thẻ card.
> 
> Bài thuyết minh chi tiết về Bài tập số 26 của em đến đây xin phép được khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo đã tận tâm hướng dẫn, giảng dạy và truyền lửa đam mê cho chúng em trong suốt học phần. Cảm ơn các bạn sinh viên đã dành thời gian theo dõi video.
> 
> Kính chúc thầy cô dồi dào sức khỏe và công tác tốt, chúc các bạn học tập xuất sắc! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 26 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
