# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 19
**Chủ đề:** Thiết kế trang giới thiệu địa danh du lịch bằng CSS Flexbox (Mũi Né — Huyền bí và quyến rũ)  
**Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh  
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Mã nguồn liên quan:** `bai19.html`, `bai19.css`

---

## GHI CHÚ CHUẨN BỊ TRƯỚC KHI BẤM QUAY OBS
- **Thiết lập màn hình:** Mở sẵn VS Code hiển thị 2 file (`bai19.html`, `bai19.css`) và trình duyệt hiển thị trang web `bai19.html`.
- **Tác phong:** Giọng nói tự tin, hứng khởi, mang phong thái quảng bá du lịch kết hợp phân tích chuyên môn kỹ thuật Front-end.

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU TỔNG QUAN (Khoảng 30 - 45 giây)

*(Bật OBS quay giao diện trang giới thiệu Mũi Né trên trình duyệt)*

> **[LỜI THOẠI]:**  
> "Em xin kính chào Thầy/Cô cùng toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên năm 2 khoa Công nghệ Thông tin, đang tham gia học phần *Phát triển ứng dụng Web cơ bản*.  
>  
> Hôm nay, em xin trân trọng giới thiệu đến Thầy/Cô và các bạn video thuyết minh cho **Bài tập số 19: Thiết kế trang giới thiệu địa danh du lịch**. Điểm đến được em lựa chọn xây dựng là vùng đất đầy nắng gió và thơ mộng: *'Mũi Né — Huyền bí và quyến rũ'*.  
>  
> Mục tiêu trọng tâm của bài tập này là áp dụng linh hoạt mô hình dàn trang **CSS Flexbox** để xây dựng bố cục 2 cột bất đối xứng cân đối, kết hợp các kỹ thuật xử lý hình ảnh và chữ viết tinh tế như:  
> 1. Đổ bóng hình ảnh bằng `box-shadow` tạo chiều sâu không gian.  
> 2. Đổ bóng chữ nghệ thuật bằng `text-shadow` trên phông chữ cổ điển có chân.  
> 3. Thiết kế khung viền nét đứt cá tính với `border: dashed`.  
> 4. Xử lý thiết kế đáp ứng **Responsive Web Design** mượt mà trên mọi kích thước màn hình.  
>  
> Bây giờ, em xin phép mời Thầy/Cô và các bạn cùng đi vào chi tiết cấu trúc mã nguồn!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai19.html`) (Khoảng 1.5 phút)

*(Chuyển sang cửa sổ VS Code, mở file `bai19.html`)*

> **[LỜI THOẠI]:**  
> "Đầu tiên, chúng ta cùng xem xét file `bai19.html`. Em đã tổ chức cây cấu trúc HTML5 rất tinh gọn và rõ ràng:  
>  
> - **Khung bao tổng thể `<div class="khung-chinh">` (dòng 11 - 30):**  
>   Đóng vai trò là Flex Container chính, trực tiếp phân tách giao diện thành 2 cột:  
>  
> - **Cột bên trái `<div class="cot-trai">` (dòng 13 - 15):**  
>   Chứa một bức ảnh duy nhất `<img src="muine.jpg" alt="Đồi cát Mũi Né" class="anh-doi-cat">`. Đây là hình ảnh đồi cát vàng đặc trưng của vùng biển Bình Thuận, được đặt riêng một cột để làm điểm nhấn thị giác lớn nhất ở phía bên trái.  
>  
> - **Cột bên phải `<div class="cot-phai">` (dòng 18 - 29):**  
>   Bao gồm 2 thành phần chính:  
>   + Tiêu đề cấp 2 `<h2 class="tieu-de-mui-ne">`: Mang dòng chữ *'Mũi Né – Huyền bí và quyến rũ'*.  
>   + Khối nội dung bao bọc `<div class="khoi-noi-dung">`: Chứa 2 đoạn văn miêu tả về thiên nhiên Phan Thiết, khí hậu nhiệt đới nhiều nắng ít mưa, đồi cát bay trập trùng và bờ biển Hòn Rơm nước trong xanh biếc.  
>   + Trong các đoạn văn, em đã khéo léo bọc các địa danh quan trọng như *'Phan Thiết'* và *'Hòn Rơm'* vào thẻ `<span class="to-do">` để tiến hành làm nổi bật màu sắc bằng CSS.  
>  
> Cấu trúc HTML thuần túy rất gọn nhẹ, không hề dư thừa thẻ lồng nhau, tạo nền tảng vững chắc để định kiểu bằng CSS."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai19.css`) (Khoảng 2 - 2.5 phút)

*(Chuyển sang file `bai19.css` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Tiếp theo là phần định dạng giao diện trong file `bai19.css`:  
>  
> - **Bố cục 2 cột với Flexbox (dòng 19 - 25):**  
>   Tại khối `.khung-chinh`, em đặt `max-width: 860px`, căn giữa màn hình với `margin: 0 auto`.  
>   Em kích hoạt mô hình Flexbox bằng lệnh:  
>   `display: flex; gap: 25px; align-items: flex-start;`  
>   Thuộc tính `gap: 25px` tạo khoảng trống thoáng đãng 25px giữa hai cột, và `align-items: flex-start` giúp hai cột canh đều đỉnh trên cùng mà không bị kéo giãn chiều cao theo nhau.  
>  
> - **Cột trái và hiệu ứng ảnh đổ bóng (dòng 28 - 38):**  
>   + Em cố định chiều rộng cột trái bằng thuộc tính: `flex: 0 0 280px;`. Nghĩa là cột này không co, không dãn và luôn giữ chuẩn độ rộng 280px trên màn hình lớn.  
>   + Bức ảnh `.anh-doi-cat` có `width: 100%`, bo góc nhẹ 4px và được áp dụng hiệu ứng đổ bóng:  
>     `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);`  
>     Lớp bóng này giúp bức ảnh đồi cát như nổi hẳn lên trên mặt nền trắng, tạo cảm giác không gian ba chiều rất sống động.  
>  
> - **Cột phải và tiêu đề nghệ thuật (dòng 41 - 53):**  
>   + Cột phải `.cot-phai` nhận `flex: 1`, tự động chiếm toàn bộ khoảng diện tích còn lại của khung chứa.  
>   + Tiêu đề `.tieu-de-mui-ne` được tô màu vàng đất sa mạc `#C9A227`, sử dụng phông chữ Georgia có chân sang trọng, cỡ chữ 24px in đậm.  
>   + Đặc biệt, em sử dụng hiệu ứng đổ bóng chữ:  
>     `text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);`  
>     Bóng mờ xám nhẹ dịch chuyển 1px sang phải và 1px xuống dưới giúp dòng chữ vàng nổi bần bật trên nền trắng tinh khôi.  
>  
> - **Khối nội dung viền nét đứt `.khoi-noi-dung` (dòng 56 - 72):**  
>   + Để tái hiện phong cách tấm thiệp lưu niệm du lịch, em đóng khung nội dung bằng đường viền nét đứt:  
>     `border: 2px dashed #E07B00;`  
>     Màu cam đất đậm `#E07B00` kết hợp đường nét đứt tạo điểm nhấn rất cá tính.  
>   + Em bo tròn các góc khung viền `border-radius: 8px;`, tạo khoảng đệm bên trong `padding: 18px 20px`, và căn đều chữ hai bên với `text-align: justify`.  
>  
> - **Điểm nhấn từ khóa `.to-do` (dòng 75 - 78):**  
>   Hai địa danh 'Phan Thiết' và 'Hòn Rơm' được tô màu đỏ đậm mã màu `#C62828` và in đậm `font-weight: bold`, thu hút ánh nhìn của người đọc ngay từ cái nhìn đầu tiên.  
>  
> - **Kỹ thuật thiết kế thích ứng Responsive (dòng 80 - 88):**  
>   Để trang web hiển thị tối ưu trên thiết bị di động, em sử dụng Media Query `@media (max-width: 700px)`:  
>   Khi bề rộng màn hình nhỏ hơn hoặc bằng 700px, em đổi hướng Flexbox sang dạng cột dọc:  
>   `flex-direction: column;`  
>   Đồng thời cột trái `.cot-trai` chuyển sang `flex: auto; width: 100%;`. Bức ảnh sẽ nằm ở trên cùng với kích thước đầy chiều rộng, và nội dung sẽ trượt xuống ngay bên dưới một cách tự nhiên nhất!"

---

## PHẦN 4: TỔNG KẾT KỸ THUẬT NỔI BẬT (Khoảng 1 phút)

> **[LỜI THOẠI]:**  
> "Qua Bài 19, em đã đúc kết được những kinh nghiệm thiết kế giao diện giá trị:  
> 1. Phối hợp hài hòa giữa màu vàng cát `#C9A227`, cam viền `#E07B00` và đỏ nhấn `#C62828`, tạo nên một gam màu nhiệt đới đúng chất biển nắng Mũi Né.  
> 2. Khai thác hiệu quả hai thuộc tính bóng đổ là `box-shadow` cho hình khối và `text-shadow` cho kiểu chữ.  
> 3. Tận dụng sức mạnh của CSS Flexbox kết hợp Media Query để bài toán Responsive trở nên dễ dàng và chuẩn mực."

---

## PHẦN 5: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT (Khoảng 1.5 phút)

*(Chuyển toàn màn hình OBS sang trình duyệt hiển thị `bai19.html`)*

> **[LỜI THOẠI & HÀNH ĐỘNG]:**  
> "Sau đây, em xin phép trình chiếu kết quả thực tế trên trình duyệt:  
>  
> **1. Trải nghiệm giao diện trên màn hình Desktop lớn:**  
> - Toàn bộ trang web hiển thị dạng 2 cột song song vô cùng thanh thoát và hài hòa.  
> - Cột trái hiển thị bức ảnh đồi cát uốn lượn sắc sảo, lớp bóng đổ mềm bao quanh bức ảnh tạo cảm giác bức ảnh như đang lơ lửng trên mặt trang.  
>  
> **2. Quan sát chi tiết tiêu đề và nội dung cột phải:**  
> *(Di chuột tới tiêu đề và khối văn bản)*  
> - Dòng tiêu đề *'Mũi Né – Huyền bí và quyến rũ'* hiện lên với màu vàng cát óng ánh, bóng đổ chữ giúp các ký tự nổi khối sắc sảo.  
> - Khung viền nét đứt màu cam bao bọc 2 đoạn văn bản rất ngay ngắn, đường nét đứt đều đặn và bo cong mềm mại ở 4 góc.  
> - Hai cụm từ *'Phan Thiết'* và *'Hòn Rơm'* nổi bật rõ nét với màu đỏ tươi, tạo điểm dừng mắt trực quan khi đọc.  
>  
> **3. Kiểm thử tính năng Responsive trên màn hình nhỏ:**  
> *(Nhấn F12 mở công cụ Developer Tools, chuyển sang chế độ Responsive và co dần độ rộng màn hình)*  
> - Khi độ rộng cửa sổ thu nhỏ vượt qua ngưỡng 700px:  
> - Các bạn có thể thấy, bố cục lập tức chuyển đổi cực kỳ mượt mà từ dạng 2 cột ngang sang dạng 1 cột dọc!  
> - Bức ảnh đồi cát nằm phía trên mở rộng toàn màn hình, tiêu đề và khối viền nét đứt nằm ngay phía dưới, hoàn toàn không bị tràn lề ngang hay xuất hiện thanh cuộn bất tiện. Giao diện thân thiện tuyệt đối với các thiết bị di động!"

---

## PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 - 30 giây)

> **[LỜI THOẠI]:**  
> "Như vậy, em đã hoàn thành phần thuyết minh và kiểm thử trực tiếp cho Bài tập số 19 — Trang giới thiệu địa danh Mũi Né bằng Flexbox và CSS3.  
>  
> Em xin chân thành cảm ơn Thầy/Cô cùng các bạn đã chú ý lắng nghe! Hẹn gặp lại mọi người ở bài tập tiếp theo — Bài 20 với các hiệu ứng hình ảnh kỳ thú!"
