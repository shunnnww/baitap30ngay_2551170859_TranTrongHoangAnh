# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 24: BẢNG GIÁ 3 GÓI DỊCH VỤ (PRICING TABLE)

---

## THÔNG TIN CHUNG
- **Bài tập:** Bài 24 — Bảng giá 3 gói khoá học với hiệu ứng thị giác làm nổi bật gói Hot (CSS Grid & Hover Card Animation)
- **Người thực hiện:** Trần Trọng Hoàng Anh
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Công cụ quay màn hình:** OBS Studio
- **Thời lượng dự kiến:** 3.5 — 4.5 phút
- **Tập tin liên quan:** `bai24.html`, `bai24.css`

---

## HƯỚNG DẪN KỸ THUẬT QUAY BẰNG OBS CHO BẠN HOÀNG ANH
- **Scene chuẩn bị:**
  - *Scene 1:* VS Code hiển thị song song hai file `bai24.html` và `bai24.css`.
  - *Scene 2:* Trình duyệt Chrome hiển thị trang web Bài 24.
- **Thao tác chuột khi demo:** Rê chuột lần lượt qua 3 gói dịch vụ để làm nổi bật sự khác biệt về kích thước, màu viền và hiệu ứng đổ bóng giữa gói thông thường và gói Pro được đánh dấu Hot. Bấm F12 co hẹp màn hình để xem responsive 1 cột.
- **Tác phong:** Giọng đọc tự tin, chuyên nghiệp, rõ ràng, giàu tính thuyết phục như đang pitching một sản phẩm dịch vụ thực tế.

---

## NỘI DUNG KỊCH BẢN CHI TIẾT (ĐỌC TRỰC TIẾP)

```
[HÀNH ĐỘNG OBS: Mở VS Code với file bai24.html]
```

### PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BÀN THÂN (Khoảng 30 giây)

> "Kính chào thầy cô và các bạn đang theo dõi video!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên môn Phát triển ứng dụng Web cơ bản.  
> 
> Trong video ngày hôm nay, em xin phép được giới thiệu và thuyết minh chi tiết về mã nguồn cùng giao diện hoàn thiện của **Bài tập số 24: Thiết kế Bảng giá dịch vụ 3 gói (Pricing Table) chuẩn UI/UX hiện đại**.  
> 
> Bảng giá là một thành phần sống còn trong các trang web thương mại điện tử và trang giới thiệu dịch vụ (Landing Page). Mục tiêu của bài tập này là sử dụng **CSS Grid** và các kỹ thuật **phân cấp thị giác (Visual Hierarchy)** tinh tế để điều hướng sự chú ý của khách hàng vào gói dịch vụ mục tiêu mang lại doanh thu cao nhất — ở đây chính là gói Pro.  
> 
> Sau đây, em xin đi sâu vào phần cấu trúc HTML của bài tập."

---

```
[HÀNH ĐỘNG OBS: Cuộn chuột và chỉ vào cấu trúc 3 gói trong bai24.html]
```

### PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (Khoảng 1 phút 15 giây)

> "Mời thầy cô và các bạn cùng quan sát file `bai24.html`.  
> 
> Cấu trúc tài liệu được em chia làm 2 phần chính:  
> 
> 1. **Phần tiêu đề đầu trang (`<header class="phan-tieu-de">`):**  
>    Gồm thẻ `<h2>` chứa dòng tiêu đề *'Bảng giá khoá học'* và một câu slogan mô tả ngắn gọn giúp định hướng người dùng.  
> 
> 2. **Khung chứa 3 gói bảng giá (`<main class="luoi-goi">`):**  
>    Được cấu thành từ 3 khối thẻ mang class chung là `.the-goi`. Mỗi khối đại diện cho một phân khúc khách hàng rõ ràng:  
> 
>    - **Gói 1 — Gói Starter (Cơ bản):** Dành cho người mới bắt đầu làm quen với lập trình web. Gồm nhãn `.nhan-goi` là *CƠ BẢN*, tên gói *Starter*, mức giá *0đ*, danh sách tính năng gồm 12 bài HTML/CSS và nút bấm xám *'Bắt đầu'*.  
>    - **Gói 2 — Gói Pro (Phổ biến nhất):** Đây là gói tâm điểm của trang web. Khối này được bổ sung thêm class `.hot` thành `<div class="the-goi hot">`. Thẻ có nhãn nổi bật *PHỔ BIẾN NHẤT*, mức giá *499 k/tháng*, danh sách 4 quyền lợi nâng cao (có hỗ trợ 1-1 và chấm bài) cùng nút kêu gọi hành động (Call To Action) đặc biệt mang class `.btn-hot` với dòng chữ *'Đăng ký ngay'*.  
>    - **Gói 3 — Gói Team (Nâng cao):** Dành cho các nhóm làm việc với nhãn *NÂNG CAO*, mức giá *1.2 tr/tháng*, quyền lợi có thêm dự án nhóm và Mentor riêng, đi kèm nút *'Liên hệ'*.  
> 
> Bên trong mỗi gói, em sử dụng thẻ `<div class="hop-gia">` để tách riêng con số giá lớn và đơn vị tiền tệ nhỏ phía sau, cùng danh sách thẻ `<ul>` với các mục `<li>` liệt kê tính năng một cách khoa học."

---

```
[HÀNH ĐỘNG OBS: Chuyển sang file bai24.css, tập trung vào class .luoi-goi và .the-goi.hot]
```

### PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (Khoảng 1 phút 40 giây)

> "Tiếp theo, em xin giải thích cách phối màu và nghệ thuật tạo điểm nhấn thị giác trong file `bai24.css`.  
> 
> 1. **Căn giữa toàn màn hình và bố cục Grid:**  
>    - Thẻ `body` được thiết lập `min-height: 100vh; display: flex; justify-content: center; align-items: center;` với màu nền xám sáng nhẹ `#f8fafc`. Điều này giúp toàn bộ bảng giá luôn được neo cân đối ở trung tâm màn hình của người dùng.  
>    - Khối `.luoi-goi` sử dụng CSS Grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: center;`. Điểm đáng lưu ý ở đây là thuộc tính `align-items: center`. Thuộc tính này giúp 3 gói căn đều tâm theo trục dọc, tạo tiền đề để gói ở giữa khi phóng to lên sẽ nhô cao đều cả về phía trên lẫn phía dưới so với hai gói bên cạnh.  
> 
> 2. **Định dạng thẻ gói tiêu chuẩn (.the-goi):**  
>    - Mỗi thẻ gói có nền trắng `#ffffff`, bo tròn mềm mại `border-radius: 14px`, viền xám mảnh 1.5px `#e2e8f0` và đổ bóng nhẹ `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04)`.  
>    - Em sử dụng `display: flex; flex-direction: column; align-items: center;` để mọi phần tử từ nhãn, tên, giá cho đến nút bấm đều được gióng thẳng hàng trục tâm.  
>    - Khi hover vào gói thông thường: `transform: translateY(-4px)` kèm đổ bóng đậm hơn, mang lại cảm giác nổi khối tương tác vật lý chân thực.  
> 
> 3. **Bí quyết làm nổi bật gói Pro (.the-goi.hot):**  
>    - Để gói Pro trở thành tâm điểm thị giác tuyệt đối, em đã áp dụng 4 kỹ thuật CSS cùng lúc:  
>      + Thứ nhất: Đổi màu viền sang tông tím chàm cao cấp với độ dày 2px `border-color: #4f46e5; border-width: 2px;`.  
>      + Thứ hai: Tạo hiệu ứng đổ bóng phát sáng màu tím dịu mắt `box-shadow: 0 12px 28px rgba(79, 70, 229, 0.15);`.  
>      + Thứ ba: Phóng lớn thẻ lên 4% so với hai thẻ lân cận bằng thuộc tính `transform: scale(1.04);`.  
>      + Thứ tư: Khi hover vào gói hot, thẻ tiếp tục bay bổng thêm 4px với `transform: scale(1.04) translateY(-4px);` và bóng đổ sâu hơn `box-shadow: 0 16px 32px rgba(79, 70, 229, 0.22);`.  
> 
> 4. **Nút kêu gọi hành động (Call-To-Action):**  
>    - Các gói thông thường dùng nút xám nhạt `.btn-goi` để giữ thế trung lập.  
>    - Riêng gói Hot sử dụng nút `.btn-hot` phủ màu tím chàm `#4f46e5`, chữ trắng nổi bật, tạo sự thôi thúc mạnh mẽ khiến người dùng muốn nhấp chuột đăng ký ngay lập tức.  
> 
> 5. **Responsive di động mượt mà:**  
>    - Trong `@media (max-width: 768px)`, em đưa `.luoi-goi` về `grid-template-columns: 1fr;` với `max-width: 360px;`. Đồng thời, em hủy bỏ thuộc tính `transform: none` trên gói hot để tránh tình trạng tràn lề ngang trên các màn hình điện thoại nhỏ."

---

### PHẦN 4: VỀ XỬ LÝ JAVASCRIPT (Khoảng 15 giây)

> "Bảng giá bài 24 được em xây dựng hoàn toàn bằng mã HTML5 ngữ nghĩa và CSS3 thuần túy. Trang web đạt tốc độ phản hồi tức thì mà không cần phụ thuộc vào bất kỳ thư viện hay tập lệnh JavaScript nào, đảm bảo tối đa tính tương thích trình duyệt và tỷ lệ chuyển đổi khách hàng."

---

```
[HÀNH ĐỘNG OBS: Chuyển sang trình duyệt web, rê chuột vào các gói và nút bấm]
```

### PHẦN 5: THAO TÁC DEMO TRỰC QUAN TRÊN TRÌNH DUYỆT (Khoảng 1 phút)

> "Sau đây, em xin kính mời thầy cô và các bạn theo dõi phần demo thực tế trên trình duyệt web.  
> 
> *(Hoàng Anh chỉ chuột vào tổng thể 3 gói)*:  
> - Ngay từ cái nhìn đầu tiên, mắt người xem lập tức bị cuốn hút vào gói Pro ở vị trí trung tâm nhờ đường viền tím sắc sảo, kích thước nhỉnh hơn và hiệu ứng đổ bóng tím vô cùng sang trọng.  
> - Các thông số giá '0đ', '499 k/tháng', '1.2 tr/tháng' hiển thị to rõ ràng, danh sách tính năng được phân dòng rành mạch.  
> 
> *(Hoàng Anh rê chuột lần lượt qua gói Starter, gói Pro và gói Team)*:  
> - Khi em rê chuột vào từng gói, thẻ đó nhẹ nhàng bay lên với hiệu ứng `translateY(-4px)` cực kỳ mượt mà. Nút bấm đổi màu phản hồi ngay tức thì khi con trỏ chuột chạm vào.  
> 
> *(Hoàng Anh nhấn F12, co hẹp màn hình về giao diện điện thoại di động)*:  
> - Khi kích thước màn hình thu nhỏ lại, bảng giá tự động chuyển đổi từ 3 cột nằm ngang sang 1 cột duy nhất xếp dọc thẳng thớm. Các nút bấm và phông chữ tự động căn vừa vặn trong khung hình 360px, đảm bảo khách hàng lướt web trên điện thoại ngón tay bấm nút cực kỳ dễ dàng."

---

### PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 giây)

> "Đó là toàn bộ phần thuyết minh và minh họa trực quan cho Bài tập số 24 — Bảng giá 3 gói dịch vụ.  
> Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian quý báu để theo dõi video của em!  
> Rất mong nhận được những góp ý từ quý thầy cô.  
> Xin kính chào và hẹn gặp lại trong video Bài tập số 25!"
