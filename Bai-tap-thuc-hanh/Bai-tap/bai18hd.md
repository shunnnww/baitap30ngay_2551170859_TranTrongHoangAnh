# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 18
**Chủ đề:** Thiết kế trang bài viết tạp chí kèm danh sách 2 cột bằng CSS (Drop Cap, Float Image & Multi-column Layout)  
**Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh  
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Mã nguồn liên quan:** `bai18.html`, `bai18.css`

---

## GHI CHÚ CHUẨN BỊ TRƯỚC KHI BẤM QUAY OBS
- **Thiết lập màn hình:** Mở sẵn VS Code hiển thị 2 file (`bai18.html`, `bai18.css`) và trình duyệt hiển thị bài viết `bai18.html`.
- **Tác phong:** Giọng đọc truyền cảm, ấm áp, đậm chất văn hóa ẩm thực miền Nam khi đọc trích đoạn nội dung; tự tin và rành mạch khi phân tích kỹ thuật CSS.

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU TỔNG QUAN (Khoảng 30 - 45 giây)

*(Bật OBS quay giao diện bài viết trên trình duyệt)*

> **[LỜI THOẠI]:**  
> "Em xin kính chào Thầy/Cô cùng toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên năm 2 khoa Công nghệ Thông tin, đang theo học học phần *Phát triển ứng dụng Web cơ bản*.  
>  
> Hôm nay, em rất vui được gửi đến Thầy/Cô và các bạn video thuyết minh cho **Bài tập số 18: Thiết kế trang bài viết giới thiệu món ăn đặc sản kèm danh sách 2 cột**. Chủ đề bài viết của chúng ta hôm nay là về một loài hoa mang đậm hồn quê sông nước miền Tây: *'Bông điên điển — Món ngon mùa nước nổi'*.  
>  
> Trong bài tập này, chúng ta sẽ ứng dụng những kỹ thuật tạo hình văn bản và dàn trang báo chí chuyên nghiệp trong CSS, bao gồm:  
> 1. Kỹ thuật tạo chữ cái hoa thụt lớn đầu dòng — **Drop Cap** bằng bộ chọn giả `::first-letter`.  
> 2. Kỹ thuật chèn ảnh trôi dạt sang phải (**Float Right**) để dòng chữ bao bọc tự nhiên quanh hình ảnh.  
> 3. Kỹ thuật phân chia danh sách thành 2 cột cân đối (**CSS3 Multi-column Layout**) với thuộc tính `columns: 2`.  
>  
> Ngay sau đây, em xin phép mở mã nguồn để cùng phân tích chi tiết!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai18.html`) (Khoảng 1.5 phút)

*(Chuyển sang cửa sổ VS Code, mở file `bai18.html`)*

> **[LỜI THOẠI]:**  
> "Xin mời Thầy/Cô và các bạn cùng quan sát file `bai18.html`. Cấu trúc bài viết được em thiết kế rất mạch lạc, chuẩn ngữ nghĩa báo chí:  
>  
> - **Khung chứa chính `<div class="khung-chinh">` (dòng 11 - 42):**  
>   Bao bọc toàn bộ nội dung của trang viết nhằm quản lý độ rộng và căn giữa trang.  
>  
> - **Khu vực tiêu đề bài viết (dòng 13 - 14):**  
>   + Tiêu đề cấp 1 `<h1 class="tieu-de-chinh">`: Nội dung *'Bông điên điển'*.  
>   + Tiêu đề phụ `<div class="tieu-de-phu">`: Nội dung *'Món ngon mùa nước nổi'*. Cả hai đều được thiết kế mang tông màu cam ấm áp.  
>  
> - **Khu vực nội dung văn bản kèm ảnh `<div class="phan-noi-dung">` (dòng 17 - 27):**  
>   + Thẻ ảnh `<img src="Diendien.jpg" alt="Bông điên điển" class="anh-phai">`: Điểm đáng chú ý là em đặt thẻ ảnh này ngay ở đầu khối nội dung trước các đoạn văn bản. Điều này là bắt buộc trong chuẩn HTML/CSS khi sử dụng kỹ thuật float, giúp trình duyệt có thể cho khối chữ phía sau chảy vòng quanh thân ảnh một cách chính xác.  
>   + Đoạn văn bản thứ nhất `<p class="doan-dau">`: Các bạn có thể thấy em viết chữ bắt đầu là *'ỗi năm, vào đầu mùa nước nổi...'* thay vì viết đầy đủ chữ 'Mỗi năm'. Lý do là vì chữ cái 'M' đầu câu sẽ được em định dạng đặc biệt bằng CSS Drop Cap lớn, biến nó thành điểm nhấn nghệ thuật đầu tiên của bài báo.  
>   + Đoạn văn bản thứ hai `<p>`: Mô tả chi tiết về cách chế biến món dưa bông điên điển chấm nước tương ớt.  
>  
> - **Khối đặc sản `<div class="khoi-huong-vi">` (dòng 30 - 41):**  
>   + Tiêu đề khối `<h3>`: Mang tên *'Hương vị miền Nam'*.  
>   + Thẻ danh sách không thứ tự `<ul class="danh-sach-mon">`: Liệt kê 7 món ăn nổi tiếng như Bánh tráng Mỹ Lồng, Dòi lươn rim nước cốt dừa, Bún mắm, Bún nước lèo Sóc Trăng, Nem Lai Vung, Cốm dẹp và Bưởi Tân Triều. Thay vì phải chia thủ công thành 2 thẻ `ul` hay 2 cột `div`, ở đây em chỉ cần dùng đúng một thẻ `ul` duy nhất!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai18.css`) (Khoảng 2 - 2.5 phút)

*(Chuyển sang file `bai18.css` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Bây giờ, chúng ta sẽ khám phá file `bai18.css` — nơi hiện thực hóa toàn bộ vẻ đẹp trực quan của trang viết:  
>  
> - **Thiết lập cơ sở (dòng 5 - 26):**  
>   Em đặt màu nền trang web là màu trắng ngà nhẹ `#fbfbfa`, sử dụng phông chữ Arial sạch sẽ với khoảng cách dòng `line-height: 1.6` giúp người đọc không bị mỏi mắt. Khối `.khung-chinh` được đặt giới hạn `max-width: 760px`, căn giữa bằng `margin: 0 auto`, đổ bóng rất nhẹ `rgba(0, 0, 0, 0.05)` tạo cảm giác như một trang sách đặt trên bàn làm việc.  
>  
> - **Màu sắc tiêu đề (dòng 29 - 41):**  
>   Tiêu đề chính mang màu cam rực rỡ mã màu `#E65100`, cỡ chữ lớn 26px in đậm; tiêu đề phụ cũng mang màu `#E65100` đồng bộ cỡ 15px. Sắc cam này tượng trưng cho màu vàng cam ấm nồng của bông điên điển mùa lũ.  
>  
> - **Kỹ thuật trôi ảnh `.anh-phai` (dòng 44 - 58):**  
>   Em áp dụng thuộc tính `float: right;` để đẩy bức ảnh ép sát vào lề phải của khối nội dung.  
>   + Để ảnh không dính chặt vào chữ, em tạo khoảng đệm lề trái `margin-left: 20px` và lề dưới `margin-bottom: 15px`.  
>   + Ảnh được bo góc nhẹ 6px và giới hạn chiều rộng `max-width: 250px`.  
>   + Đồng thời, ở khối cha `.phan-noi-dung`, em thêm thuộc tính `overflow: hidden` để dọn dẹp dòng chảy nổi (Clearfix), ngăn chặn hiện tượng vỡ layout khối cha.  
>  
> - **Kỹ thuật chữ cái đầu dòng Drop Cap (dòng 61 - 70):**  
>   Đây là điểm nhấn kỹ thuật quan trọng nhất của bài:  
>   Em sử dụng bộ chọn giả phần tử `.doan-dau::first-letter` với các thuộc tính:  
>   + `font-family: "Times New Roman", Times, serif;`: Chuyển chữ cái đầu tiên sang phông chữ có chân cổ điển, đậm chất tạp chí văn học.  
>   + `font-size: 3.4em;`: Phóng to kích thước chữ cái lên gấp 3.4 lần bình thường.  
>   + `float: left;`: Cho chữ cái trôi nổi sang góc trái của đoạn văn.  
>   + `line-height: 0.8; margin-right: 6px; margin-top: 4px;`: Tinh chỉnh khoảng cách dòng và lề để chữ cái thụt vừa khít trong khoảng 3 dòng đầu của văn bản.  
>   + `color: #E65100; font-weight: bold;`: Tô sắc cam đồng bộ với tiêu đề chính!  
>  
> - **Khối Hương vị miền Nam và kỹ thuật CSS Columns (dòng 78 - 106):**  
>   + Khối `.khoi-huong-vi` được đặt `clear: both` để tách rời hoàn toàn khỏi ảnh float phía trên, không bị ảnh hưởng luồng hiển thị.  
>   + Viền màu xanh lá đậm `1.5px solid #2E7D32`, nền màu xanh lá non cực nhạt `#f4fbf4`, mang lại cảm giác thanh mát đối lập hài hoà với sắc cam ở phần trên.  
>   + Tiêu đề `.tieu-de-huong-vi` chữ nghiêng màu xanh lá đậm.  
>   + Và đặc biệt, tại danh sách `.danh-sach-mon`, em sử dụng thuộc tính hiện đại của CSS3 là:  
>     `columns: 2;` kết hợp `column-gap: 30px;`.  
>     Chỉ với hai dòng lệnh này, trình duyệt sẽ tự động phân bổ 7 mục thức ăn chia đều thành 2 cột song song mà ta không cần phải can thiệp bất kỳ dòng code JavaScript hay cấu trúc HTML phức tạp nào!"

---

## PHẦN 4: TỔNG KẾT CÁC ĐIỂM SÁNG KỸ THUẬT BÀI TẬP (Khoảng 1 phút)

> **[LỜI THOẠI]:**  
> "Như vậy, qua việc phân tích mã nguồn của Bài 18, em xin tổng kết 3 bài học kỹ thuật cốt lõi mà em đã tích lũy được:  
> 1. **Thứ nhất:** Hiểu rõ bản chất cơ chế hoạt động của `float` và cách dùng `overflow: hidden` kết hợp `clear: both` để kiểm soát dòng chảy của trang web mà không gây lỗi tràn phần tử.  
> 2. **Thứ hai:** Làm chủ bộ chọn giả `::first-letter` để tạo hiệu ứng typographic Drop Cap chuẩn mực trong dàn trang văn bản báo chí.  
> 3. **Thứ ba:** Ứng dụng xuất sắc tính năng CSS Multi-column (`columns: 2`) giúp giải quyết bài toán chia cột danh sách một cách thanh lịch, ngắn gọn và đạt hiệu năng hiển thị cao nhất."

---

## PHẦN 5: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT (Khoảng 1.5 phút)

*(Chuyển OBS toàn màn hình sang trình duyệt mở trang `bai18.html`)*

> **[LỜI THOẠI & HÀNH ĐỘNG]:**  
> "Bây giờ, em xin mời Thầy/Cô và các bạn cùng chiêm ngưỡng kết quả thực tế trên trình duyệt:  
>  
> **1. Quan sát bố cục trang bài viết:**  
> - Trang web hiển thị với phong thái cực kỳ trang nhã: khối thẻ màu trắng nằm ngay ngắn giữa màn hình trên phông nền ngà.  
> - Tiêu đề *'Bông điên điển'* và *'Món ngon mùa nước nổi'* mang tông màu cam rực rỡ, sắc nét.  
>  
> **2. Kiểm tra hiệu ứng Drop Cap:**  
> *(Di chuột chỉ vào chữ cái đầu tiên của đoạn văn)*  
> - Các bạn có thể thấy chữ cái đầu dòng được phóng lớn nổi bật với màu cam, phông chữ Times New Roman có chân đậm đà phong cách ấn phẩm văn học, ôm khít gọn gàng bên cạnh 3 dòng văn bản đầu tiên.  
>  
> **3. Kiểm tra hiệu ứng Float ảnh:**  
> *(Di chuột quanh bức ảnh và phần chữ)*  
> - Bức ảnh hoa điên điển trôi về sát lề phải, góc ảnh bo tròn êm dịu. Toàn bộ các dòng chữ của hai đoạn văn tự động uốn lượn ôm quanh cạnh trái và phần đáy của ảnh một cách tự nhiên, chữ căn đều hai bên (Justify) rất ngay ngắn.  
>  
> **4. Kiểm tra khối danh sách 2 cột:**  
> *(Cuộn chuột xuống khối màu xanh lá)*  
> - Khung viền xanh lá cây tươi mát bao bọc khối *'Hương vị miền Nam'*.  
> - Danh sách 7 món ăn được tự động chia thành 2 cột hoàn hảo: cột bên trái gồm 4 món và cột bên phải gồm 3 món, khoảng cách giữa 2 cột rộng rãi 30px nhờ `column-gap`.  
>  
> **5. Thử co giãn màn hình:**  
> *(Thu nhỏ hoặc phóng to cửa sổ trình duyệt)*  
> - Khi em thay đổi độ rộng cửa sổ trình duyệt, khối bài viết co giãn linh hoạt và văn bản tự động căn chỉnh trôi quanh bức ảnh mà không hề xảy ra hiện tượng méo hay tràn vỡ layout!"

---

## PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 - 30 giây)

> **[LỜI THOẠI]:**  
> "Đó là toàn bộ nội dung thuyết minh và demo thực tế cho Bài tập số 18 — Trang bài viết báo chí với Drop Cap và danh sách 2 cột. Bài tập đã giúp em hiểu sâu sắc hơn về nghệ thuật thiết kế giao diện giàu cảm xúc bằng CSS thuần.  
>  
> Em xin chân thành cảm ơn Thầy/Cô và các bạn đã theo dõi video! Hẹn gặp lại mọi người trong Bài tập số 19 tiếp theo!"
