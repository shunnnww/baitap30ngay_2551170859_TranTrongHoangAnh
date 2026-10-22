# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 21: BỐ CỤC TRANG WEB 4 VÙNG

---

## THÔNG TIN CHUNG
- **Bài tập:** Bài 21 — Bố cục trang 4 vùng chuẩn (Header, Menu trái, Nội dung chính giữa, Cột quảng cáo phải)
- **Người thực hiện:** Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Công cụ quay màn hình:** OBS Studio (Chế độ Display Capture / Window Capture)
- **Thời lượng dự kiến:** 3 — 4 phút
- **Tập tin liên quan:** `bai21.html`, `bai21.css`

---

## HƯỚNG DẪN KỸ THUẬT QUAY BẰNG OBS CHO BẠN HOÀNG ANH
- **Scene chuẩn bị:**
  - *Scene 1:* VS Code mở sẵn hai file `bai21.html` và `bai21.css` (chia đôi màn hình Split Editor để tiện chỉ code).
  - *Scene 2:* Trình duyệt (Chrome/Edge) mở sẵn trang web thông qua Live Server hoặc mở trực tiếp file `bai21.html`.
- **Thao tác trỏ chuột:** Di chuyển chuột dứt khoát vào từng dòng code hoặc thành phần giao diện khi đang đọc câu thoại tương ứng.
- **Tác phong:** Giọng nói to rõ, đĩnh đạc, tự tin, ngắt nghỉ đúng dấu câu.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (ĐỌC TRỰC TIẾP)

```
[HÀNH ĐỘNG OBS: Mở màn hình hiển thị VS Code với file bai21.html]
```

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BÀN THÂN (Khoảng 30 giây)

> "Xin kính chào thầy cô và các bạn đang theo dõi video!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong video ngày hôm nay, em xin phép được trình bày và thuyết minh chi tiết về mã nguồn cũng như sản phẩm hoàn thiện của **Bài tập số 21: Xây dựng bố cục trang web 4 vùng chuẩn**.  
> 
> Mục tiêu của bài tập này là áp dụng linh hoạt ngôn ngữ **HTML5 ngữ nghĩa** và mô hình bố cục hiện đại **CSS Flexbox** để tạo nên một giao diện trang web hoàn chỉnh, cân đối, bao gồm:
> 1. Vùng 1: Banner thương hiệu trên cùng.
> 2. Vùng 2: Cột menu điều hướng dọc bên trái.
> 3. Vùng 3: Khu vực nội dung bài tập ở vị trí trung tâm.
> 4. Vùng 4: Cột hiển thị banner quảng cáo bên phải.  
> 
> Và ngay sau đây, em xin đi sâu vào phần giải thích cấu trúc mã nguồn HTML."

---

```
[HÀNH ĐỘNG OBS: Rê chuột và highlight các vùng thẻ trong file bai21.html]
```

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> "Mời thầy cô và các bạn cùng quan sát file `bai21.html`.  
> 
> Toàn bộ giao diện được em bao bọc bên trong một thẻ `div` mang class là `.trang-chinh`. Thẻ này đóng vai trò như một khung chứa cố định, giúp giới hạn độ rộng trang web tối đa ở mức 960px và căn giữa màn hình.  
> 
> Bên trong `.trang-chinh`, trang được phân tách rõ ràng thành 2 khối lớn:  
> 
> **Thứ nhất là Vùng 1 — Banner trên cùng:**  
> Em sử dụng thẻ ngữ nghĩa `<header class="banner-tren">`. Trong vùng này có thẻ `<img>` hiển thị logo `LogoTT.gif` và một thẻ `<span>` mang class `.chu-banner` chứa dòng chữ thương hiệu *'Hệ thống bài tập Lập trình Web'*.  
> 
> **Thứ hai là Khối thân 3 cột:**  
> Em đặt một thẻ bao bọc là `<div class="than-3-cot">`. Đây chính là Flex container để chia thành 3 cột song song nằm ngang:  
> 
> - **Cột 1 (Vùng 2 — Menu dọc bên trái):**  
>   Em sử dụng thẻ `<nav class="menu-trai">`. Bên trong chứa 4 liên kết `<a>` ứng với các chuyên mục như *Ngôn ngữ HTML*, *Ngôn ngữ JavaScript*, *Các đối tượng trong JavaScript* và *CSS*. Trong đó, mục đầu tiên được gắn thêm class `.active` để đánh dấu trang hiện hành.  
> 
> - **Cột 2 (Vùng 3 — Nội dung chính ở giữa):**  
>   Được xây dựng bằng thẻ `<main class="noi-dung-giua">`.  
>   Bên trong gồm:  
>   + Tiêu đề bài viết `<h3>` màu đỏ nổi bật.  
>   + Tiếp theo là một thẻ `div` mang class `.hop-vang` đóng vai trò thanh menu con, chứa 3 mục nhỏ có dấu chấm bullet: *Đảo chuỗi*, *Phân tích chuỗi*, và *Tìm và thay thế*.  
>   + Dưới cùng là khối `.khung-trang-noi-dung` có viền bo gọn gàng, hiển thị đoạn mô tả yêu cầu đề bài và khối chữ trung tâm giới thiệu *Trung Tâm Tin học – ĐH KHTN*.  
> 
> - **Cột 3 (Vùng 4 — Cột quảng cáo bên phải):**  
>   Em khai báo thẻ `<aside class="cot-quang-cao">`. Vùng này chứa 2 khối liên kết `.item-qc` bọc hai tấm ảnh quảng cáo là `Qcao01.gif` và `Qcao02.gif`."

---

```
[HÀNH ĐỘNG OBS: Chuyển tab sang file bai21.css, cuộn chuột theo từng đoạn mã CSS]
```

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (Khoảng 1 phút 30 giây)

> "Tiếp theo, em xin giải thích cách định kiểu thẩm mỹ và kỹ thuật bố cục trong file `bai21.css`.  
> 
> 1. **Đầu tiên là phần Reset CSS toàn cục:**  
>    Em áp dụng `* { box-sizing: border-box; margin: 0; padding: 0; }`. Điều này đảm bảo kích thước chiều rộng và chiều cao luôn bao gồm cả viền và padding, giúp việc tính toán kích thước các cột tuyệt đối chính xác. Nền trang `body` dùng màu xám dịu mắt `#f0f2f5`.  
> 
> 2. **Định dạng Vùng 1 — Banner:**  
>    Class `.banner-tren` được phủ màu nền đỏ đậm `#C62828` với chữ trắng tương phản cao. Em dùng `display: flex; align-items: center; gap: 15px;` để logo và dòng chữ tiêu đề tự động căn thẳng hàng chính giữa theo trục dọc.  
> 
> 3. **Bố cục Flexbox 3 cột chính:**  
>    Khối `.than-3-cot` được thiết lập `display: flex; min-height: 460px;`.  
>    - Cột trái `.menu-trai`: Có chiều rộng cố định `width: 200px` và em thiết lập `flex-shrink: 0` để cột này không bao giờ bị co lại khi màn hình thay đổi. Đặc biệt, em sử dụng dải màu gradient dọc `linear-gradient(180deg, #C62828 0%, #8E0000 100%)` tạo chiều sâu thị giác sang trọng. Các mục menu khi rê chuột hover hoặc có class `.active` sẽ có nền mờ bán trong suốt `rgba(0, 0, 0, 0.2)` và in đậm.  
>    - Cột giữa `.noi-dung-giua`: Em gán thuộc tính `flex: 1`. Nhờ vậy, cột giữa sẽ tự động tính toán để chiếm trọn toàn bộ khoảng không gian còn lại giữa cột menu và cột quảng cáo. Khối `.hop-vang` được tô màu vàng pastel `#FFE082`, bo góc 6px và dùng flexbox để dàn đều các bullet point.  
>    - Cột phải `.cot-quang-cao`: Có chiều rộng cố định `160px`, `flex-shrink: 0`, sử dụng `flex-direction: column` với `gap: 12px` để xếp các ảnh quảng cáo ngay ngắn theo chiều dọc.  
> 
> 4. **Xử lý Responsive cho thiết bị di động:**  
>    Trong đoạn `@media (max-width: 768px)`, em chuyển `.than-3-cot` sang `flex-direction: column`. Menu trái và cột quảng cáo được mở rộng `width: 100%`, đồng thời cột quảng cáo chuyển sang `flex-direction: row` để các banner dàn đều hàng ngang, giúp giao diện thân thiện hoàn toàn trên smartphone và tablet."

---

### PHẦN 4: VỀ XỬ LÝ JAVASCRIPT (Khoảng 15 giây)

> "Đối với Bài tập 21, yêu cầu trọng tâm là xây dựng bố cục tĩnh chuẩn mực nên toàn bộ giao diện và tương tác hover được giải quyết hoàn toàn bằng CSS thuần mà không cần sử dụng JavaScript. Điều này giúp trang web tải cực nhanh, nhẹ nhàng và tối ưu hiệu suất render của trình duyệt."

---

```
[HÀNH ĐỘNG OBS: Chuyển màn hình sang Trình duyệt web Chrome đang chạy trang Bài 21]
```

### PHẦN 5: THAO TÁC DEMO TRỰC QUAN TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> "Bây giờ, em xin mời thầy cô và các bạn cùng quan sát kết quả hiển thị thực tế trên trình duyệt web.  
> 
> *(Hoàng Anh chỉ chuột vào từng vùng trên màn hình)*:  
> - Phía trên cùng là thanh banner màu đỏ nổi bật với logo và tiêu đề sắc nét.  
> - Bên trái là menu dọc màu đỏ đô chuyển màu gradient. Khi em rê chuột vào từng mục menu, nền đen mờ xuất hiện mượt mà cùng hiệu ứng in đậm, giúp người dùng nhận biết rõ ràng mục đang tương tác.  
> - Ở giữa là nội dung chính với tiêu đề đỏ, thanh menu con nền vàng ấm áp và khung trắng hiển thị lời chào trân trọng.  
> - Bên phải là 2 poster quảng cáo được căn chỉnh thẳng tắp với bo góc mềm mại.  
> 
> *(Hoàng Anh nhấn F12, bật chế độ giả lập thiết bị Device Toolbar và kéo thanh trượt kích thước màn hình)*:  
> - Khi em thu hẹp chiều rộng cửa sổ về dưới 768px, thầy cô có thể thấy bố cục 3 cột lập tức gập xuống thành 1 cột duy nhất: Menu nằm phía trên, nội dung ở giữa và quảng cáo xếp ngang ngay ngắn phía dưới. Không hề xảy ra hiện tượng vỡ layout hay xuất hiện thanh cuộn ngang khó chịu."

---

### PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 giây)

> "Như vậy, em đã hoàn thành phần thuyết minh và demo cho Bài tập 21 — Bố cục trang 4 vùng.  
> Em xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe và theo dõi video của em!  
> Rất mong nhận được những góp ý quý báu từ thầy cô để các bài tập tiếp theo của em được hoàn thiện hơn nữa.  
> Em xin kính chào và hẹn gặp lại trong video Bài 22!"
