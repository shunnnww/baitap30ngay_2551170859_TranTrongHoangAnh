# Kịch Bản Quay Video Thuyết Minh Bài 10: Trang Biểu Mẫu Liên Hệ (Contact Form)

- **Người thực hiện:** Trần Trọng Hoàng Anh  
- **Môn học:** Phát triển ứng dụng Web cơ bản  
- **Mục tiêu:** Thuyết minh cấu trúc HTML ngữ nghĩa và định dạng CSS cho biểu mẫu liên hệ trực tuyến (Contact Form), làm chủ các thẻ nhập liệu (`input`, `select`, `textarea`, `button`), kiểm soát liên kết nhãn `<label>`, kỹ thuật kiểm tra hợp lệ dữ liệu HTML5 và hiệu ứng tương tác trạng thái `:focus`, `:hover`.

---

## Cấu Trúc Thời Lượng Gợi Ý (Tổng thời gian: 3 - 5 phút)
1. **Phần 1: Mở đầu & Giới thiệu đề bài** (~30 - 45 giây)
2. **Phần 2: Phân tích cấu trúc HTML (`bai10.html`)** (~1.5 phút)
3. **Phần 3: Phân tích định dạng CSS (`bai10.css`)** (~1.5 phút)
4. **Phần 4: Thao tác Demo trên trình duyệt** (~45 giây)
5. **Phần 5: Tổng kết & Cảm ơn** (~20 giây)

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BẢN THÂN

**[Hành động OBS]:**  
- Mở màn hình hiển thị VS Code đang mở sẵn file `bai10.html` và `bai10.css`.  
- Tác phong đĩnh đạc, nụ cười thân thiện, giọng nói rõ ràng và cuốn hút.

**[Lời thoại]:**  
> "Kính chào thầy cô và các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong video ngày hôm nay, em rất vinh dự được trình bày và thuyết minh chi tiết về **Bài tập số 10: Xây dựng biểu mẫu liên hệ trực tuyến (Contact Form)**.  
> 
> Biểu mẫu là thành phần tương tác quan trọng bậc nhất của mọi website nhằm thu thập thông tin và ý kiến phản hồi từ khách hàng. Thông qua bài tập này, chúng ta sẽ cùng tìm hiểu:  
> - Cách tổ chức cấu trúc Form chuẩn ngữ nghĩa với các loại phần tử nhập liệu đa dạng như: ô văn bản `text`, thư điện tử `email`, số điện thoại `tel`, danh sách lựa chọn thả xuống `select`, khung soạn thảo nhiều dòng `textarea`, hộp chọn điều khoản `checkbox`, và các nút thao tác `submit`, `reset`.  
> - Gắn kết nhãn `<label>` chuẩn khả năng tiếp cận (Accessibility).  
> - Ứng dụng CSS Flexbox để chia ô nhập liệu 2 cột cân đối, cùng các hiệu ứng viền chuyển động trạng thái `:focus` và `:hover` hiện đại.  
> 
> Sau đây, em xin mời thầy cô và các bạn cùng đi vào phân tích mã nguồn HTML!"

---

## PHẦN 2: GIẢI THÍCH CHI TIẾT CẤU TRÚC HTML (`bai10.html`)

**[Hành động OBS]:**  
- Rê chuột vào từng thành phần của file `bai10.html`, chỉ rõ thuộc tính `id`, `name`, `for`, `required`.

**[Lời thoại]:**  
> "Xin mời thầy cô và các bạn quan sát cấu trúc mã nguồn trong file `bai10.html`.  
> 
> Toàn bộ giao diện form được bao bọc trong thẻ `<div class="the-form">`. Khối này được chia làm hai khu vực rõ rệt:  
> 
> 1. **Phần đầu form** — `<header class="dau-form">`:  
>    Chứa tiêu đề `<h1>` *'Liên hệ với chúng tôi'* và một đoạn mô tả ngắn cam kết phản hồi trong 24 giờ. Phần đầu này có nền màu xanh cổ vịt tạo cảm giác tin cậy và chuyên nghiệp.  
> 
> 2. **Phần thân form** — `<form class="than-form" action="#" method="post">`:  
>    Các trường dữ liệu được bố trí rất mạch lạc qua các hàng:  
> 
>    - **Hàng 1**: Sử dụng container `<div class="hang-hai-cot">` để đặt 2 ô nhập liệu ngắn nằm ngang nhau:  
>      - Cột thứ nhất là ô Họ và tên: có thẻ `<label for="ho-ten">` và `<input type="text" id="ho-ten" name="ho_ten" required>`. Việc dùng thuộc tính `for` khớp với `id` giúp người dùng khi bấm vào nhãn chữ thì con trỏ soạn thảo sẽ tự động kích hoạt vào ô nhập liệu. Thuộc tính `required` bắt buộc người dùng không được bỏ trống.  
>      - Cột thứ hai là ô Email: dùng `<input type="email" id="email" name="email" required>`. Kiểu `email` giúp trình duyệt tự động kiểm tra cú pháp có chứa ký tự `@` và tên miền hợp lệ hay không.  
> 
>    - **Hàng 2**: Cũng là một hàng hai cột `<div class="hang-hai-cot">`:  
>      - Cột thứ nhất là Số điện thoại: dùng `<input type="tel" id="so-dien-thoai" name="so_dien_thoai">` chuyên dụng cho số điện thoại.  
>      - Cột thứ hai là menu lựa chọn chủ đề với thẻ `<select id="chu-de" name="chu_de">`. Bên trong chứa 4 lựa chọn `<option>` gồm: *Hỏi về khoá học* (được đặt `selected` làm mặc định), *Hỏi về học phí*, *Hỏi về lịch thi* và *Khác*.  
> 
>    - **Hàng 3**: Khung nội dung tin nhắn lớn dùng thẻ `<textarea id="noi-dung" name="noi_dung" rows="4">`. Thẻ này cho phép người dùng gõ nhiều dòng văn bản một cách thoải mái.  
> 
>    - **Hàng 4**: Hộp chọn chấp thuận `<div class="nhom-checkbox">`:  
>      Gồm một `<input type="checkbox" id="dong-y" name="dong_y" checked required>` đi kèm nhãn *'Tôi đồng ý nhận email phản hồi.'*. Khi người dùng nhấp vào dòng chữ nhãn, checkbox cũng sẽ được đánh dấu tự động.  
> 
>    - **Hàng 5**: Nhóm nút bấm điều khiển `<div class="nhom-nut-bam">`:  
>      - Nút bấm chính `<button type="submit" class="nut-gui">Gửi liên hệ</button>` để kích hoạt gửi dữ liệu biểu mẫu.  
>      - Nút phụ `<button type="reset" class="nut-nhap-lai">Nhập lại</button>` giúp làm mới toàn bộ giá trị trong form về trạng thái ban đầu mà không cần tải lại trang.  
> 
> Tiếp theo, chúng ta hãy xem file CSS đã thổi hồn cho chiếc form này như thế nào!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai10.css`)

**[Hành động OBS]:**  
- Mở tab `bai10.css`, cuộn xuống từng rule set tương ứng.

**[Lời thoại]:**  
> "Bây giờ, em xin chuyển sang file `bai10.css`:  
> 
> Giống như các bài trước, em sử dụng `box-sizing: border-box;` cho toàn bộ trang web.  
> 
> Thẻ `body` áp dụng kỹ thuật căn giữa màn hình bằng Flexbox:  
> ```css
> display: flex;
> justify-content: center;
> align-items: center;
> min-height: 100vh;
> ```  
> Màu nền xám đá `#f1f5f9` kết hợp font chữ `Arial, sans-serif` đem lại nét thanh lịch, hiện đại.  
> 
> Khung thẻ form `.the-form` có chiều rộng tối đa `max-width: 680px`, bo tròn 4 góc `12px` và đổ bóng mềm mại `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08)`.  
> 
> Phần đầu form `.dau-form` được phủ màu xanh cổ vịt (Teal) đặc trưng `#0f766e`, chữ trắng tinh khiết, đệm `24px 30px` tạo ấn tượng ban đầu rất ấm áp và uy tín.  
> 
> Phần thân form `.than-form` có đệm `30px 30px`.  
> - Với hàng 2 cột `.hang-hai-cot`, em dùng `display: flex; gap: 20px;`. Mỗi ô con nhận `flex: 1` để chia đều không gian 50-50 rất chuẩn xác.  
> - Các nhãn `.nhom-o-nhap label` được chuyển thành khối `display: block`, chữ in đậm màu xanh xám đậm `#334155` và có lề dưới `margin-bottom: 6px`.  
> - Toàn bộ các thẻ `input`, `select` và `textarea` được chuẩn hóa giao diện đồng nhất: chiều rộng trọn vẹn `width: 100%`, đệm êm ái `padding: 10px 12px`, đường viền thanh mảnh `border: 1px solid #cbd5e1`, bo góc 6px và loại bỏ viền outline mặc định.  
> - **Điểm nhấn tương tác người dùng (Micro-interaction)**:  
>   Khi người dùng bấm chuột vào bất kỳ ô nhập liệu nào (`input:focus`, `select:focus`, `textarea:focus`), đường viền sẽ lập tức chuyển sang màu xanh chủ đạo `#0f766e` nhờ hiệu ứng chuyển động mượt mà `transition: border-color 0.2s`. Điều này giúp người dùng luôn nhận biết rõ vị trí đang thao tác.  
> 
> Đối với cụm checkbox `.nhom-checkbox`: Em cho hiển thị `display: flex; justify-content: flex-end; align-items: center; gap: 8px;` để căn gọn gàng về phía mép phải của form theo đúng yêu cầu thiết kế.  
> 
> Cuối cùng là nhóm nút bấm:  
> - Nút *'Gửi liên hệ'* `.nut-gui` là nút hành động chính (Primary Button), mang màu nền xanh Teal `#0f766e`, chữ trắng in đậm, bo góc 6px, khi rê chuột `:hover` sẽ chuyển sang màu xanh sẫm `#0d5f58`.  
> - Nút *'Nhập lại'* `.nut-nhap-lai` là nút phụ (Secondary Button), dùng nền xám sáng nhã nhặn `#e2e8f0`, chữ tối màu `#334155`, khi rê chuột chuyển sang tông xám đậm hơn `#cbd5e1`. Sự phân cấp màu sắc rõ ràng này giúp tránh việc người dùng bấm nhầm nút."

---

## PHẦN 4: THAO TÁC DEMO TRÊN TRÌNH DUYỆT

**[Hành động OBS]:**  
- Chuyển sang trình duyệt hiển thị trang `bai10.html`.  
- Nhấp chuột vào các ô nhập liệu để thấy viền xanh teal kích hoạt.  
- Thử thay đổi lựa chọn trong thẻ select.  
- Xóa nội dung trong ô *Họ và tên* rồi nhấn *'Gửi liên hệ'* để xem cảnh báo validation của trình duyệt.  
- Bấm vào nút *'Nhập lại'* để thấy các ô được phục hồi giá trị ban đầu.

**[Lời thoại]:**  
> "Bây giờ, em xin mời thầy cô và các bạn cùng quan sát thao tác demo trực tiếp trên trình duyệt.  
> 
> Giao diện form hiển thị rất cân đối ở chính giữa màn hình với màu sắc hài hòa và bắt mắt.  
> 
> Hãy cùng kiểm tra các trải nghiệm tương tác:  
> 1. Khi em nhấp chuột vào ô Họ tên, Email hay Nội dung, viền của ô lập tức bừng sáng sắc xanh Teal rất tinh tế!  
> 2. Khi em nhấp chuột trực tiếp vào dòng chữ nhãn *'Tôi đồng ý nhận email phản hồi'*, ô checkbox lập tức được bật/tắt đánh dấu nhờ liên kết chuẩn giữa thẻ `<label>` và `id`.  
> 3. Bây giờ, em thử xóa trắng ô Họ tên và nhấn nút *'Gửi liên hệ'*. Ngay lập tức, trình duyệt kích hoạt tính năng kiểm tra tự động và hiện thông báo: *'Please fill out this field'* — tức yêu cầu bắt buộc phải điền dữ liệu trước khi gửi!  
> 4. Tiếp theo, sau khi thay đổi một số thông tin, em nhấn thử nút *'Nhập lại'*. Tất cả các trường dữ liệu lập tức được khôi phục về trạng thái mẫu ban đầu một cách nhanh chóng và chính xác!"

---

## PHẦN 5: LỜI CẢM ƠN & KẾT THÚC

**[Hành động OBS]:**  
- Quay lại webcam hoặc màn hình chính.

**[Lời thoại]:**  
> "Như vậy, em đã hoàn thành toàn bộ phần thuyết minh và demo thực hành cho Bài tập số 10 — Xây dựng trang biểu mẫu liên hệ trực tuyến bằng HTML và CSS.  
> 
> Qua bài học này, em đã nắm vững cách xây dựng form biểu mẫu an toàn, chuẩn ngữ nghĩa, tích hợp kiểm tra dữ liệu phía máy khách (HTML5 Form Validation) và trau chuốt giao diện người dùng chuyên nghiệp.  
> 
> Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi video. Kính chúc thầy cô luôn nhiều niềm vui và sức khỏe. Em xin chào tạm biệt!"
