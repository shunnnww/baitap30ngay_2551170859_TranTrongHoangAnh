# Kịch Bản Quay Video Thuyết Minh Bài 8: Trang Tin Tức Nhiều Chuyên Mục

- **Người thực hiện:** Trần Trọng Hoàng Anh  
- **Môn học:** Phát triển ứng dụng Web cơ bản  
- **Mục tiêu:** Thuyết minh cấu trúc HTML ngữ nghĩa và định dạng CSS cho trang tin tức tổng hợp nhiều chuyên mục, ứng dụng liên kết neo nội bộ (Internal Anchor Links), hiệu ứng cuộn mượt (Smooth Scroll) và kỹ thuật dàn trang báo chí với ảnh trôi (Float Image).

---

## Cấu Trúc Thời Lượng Gợi Ý (Tổng thời gian: 3 - 5 phút)
1. **Phần 1: Mở đầu & Giới thiệu đề bài** (~30 - 45 giây)
2. **Phần 2: Phân tích cấu trúc HTML (`bai8.html`)** (~1.5 phút)
3. **Phần 3: Phân tích định dạng CSS (`bai8.css`)** (~1.5 phút)
4. **Phần 4: Thao tác Demo trên trình duyệt** (~45 giây)
5. **Phần 5: Tổng kết & Cảm ơn** (~20 giây)

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BẢN THÂN

**[Hành động OBS]:**  
- Mở màn hình hiển thị VS Code đang mở sẵn file `bai8.html` và `bai8.css`.  
- Giữ phong thái tự tin, lời nói rõ ràng, rành mạch.

**[Lời thoại]:**  
> "Xin kính chào quý thầy cô và các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong video ngày hôm nay, em xin phép được trình bày và hướng dẫn chi tiết cách xây dựng **Bài tập số 8: Thiết kế trang tin tức nhiều chuyên mục với tiêu đề 'Ai? Cái gì? Ở đâu? ...'**.  
> 
> Mục tiêu trọng tâm của bài thực hành này là:  
> 1. Xây dựng cấu trúc trang báo điện tử chuẩn ngữ nghĩa HTML5 với các thẻ `<header>`, `<nav>`, `<main>`, `<section>` và `<article>`.  
> 2. Thiết lập hệ thống liên kết neo nội bộ trong cùng một trang thông qua thuộc tính `href` trỏ đến các `id` mục tiêu, kết hợp tính năng cuộn mượt `scroll-behavior: smooth`.  
> 3. Ứng dụng kỹ thuật `float: right` kinh điển trong dàn trang báo chí giúp chữ tự động bao quanh hình ảnh một cách tự nhiên.  
> 
> Ngay sau đây, em xin mời thầy cô và các bạn cùng đi vào phân tích cấu trúc mã nguồn HTML!"

---

## PHẦN 2: GIẢI THÍCH CHI TIẾT CẤU TRÚC HTML (`bai8.html`)

**[Hành động OBS]:**  
- Chuyển trỏ chuột trong VS Code sang file `bai8.html`.  
- Lướt chuột qua thẻ `<body id="top">`, khối `<nav>` và từng `<section>`.

**[Lời thoại]:**  
> "Đầu tiên, chúng ta cùng nhìn vào file `bai8.html`.  
> 
> Một chi tiết rất thông minh ngay ở đầu trang là thẻ `<body>` được gắn thuộc tính `id="top"`. ID này sẽ đóng vai trò làm điểm neo để người dùng có thể nhảy tức thì về đầu trang sau khi đọc xong nội dung.  
> 
> Toàn bộ giao diện được đặt trong lớp `.khung-trang-tin`.  
> - Phía trên là phần đầu trang `<header class="dau-trang">` chứa tiêu đề bài báo `<h1>` mang tên *'Ai? Cái gì? Ở đâu? ...'*.  
> 
> Bên dưới là phần thân trang `<div class="than-trang">` được chia thành 2 cột rất khoa học:  
> 
> - **Cột bên trái** là thanh điều hướng ngữ nghĩa `<nav class="cot-menu">`:  
>   Bên trong có tiêu đề danh mục `.tieu-de-menu` ghi chữ *'CHUYÊN MỤC'* và danh sách liên kết nội bộ `<ul class="danh-sach-menu">`. Mỗi thẻ `<a>` có thuộc tính `href` trỏ thẳng tới ID tương ứng của từng chuyên mục: `#tinh-yeu`, `#suc-khoe`, `#du-lich`, `#am-thuc` và `#am-nhac`.  
> 
> - **Cột bên phải** là khu vực nội dung chính `<main class="cot-noi-dung">`:  
>   Khu vực này bao gồm các khối `<section class="chuyen-muc">`, mỗi section đều được định danh bằng một `id` duy nhất trùng khớp với đường dẫn neo của menu bên trái:  
>   1. Section `id="tinh-yeu"`: Thanh tiêu đề `<h2>` *'Tình yêu và gia đình'*, bên dưới chứa 2 bài viết độc lập đặt trong thẻ `<article class="bai-viet">`: bài *'Trầu cau'* kèm ảnh `traucau.jpg`, và bài *'Xây dựng hạnh phúc gia đình qua những bữa cơm hàng ngày'* kèm ảnh `comtrua.jpg`. Ở cuối section là nút `<div class="nut-ve-dau-trang"><a href="#top">Về đầu trang</a></div>`.  
>   2. Section `id="suc-khoe"`: Có tiêu đề `<h2>` *'Sức khỏe'*, gồm 2 bài viết: *'10 lời khuyên trong dinh dưỡng'* (ảnh `Suc_khoe_03.jpg`) và *'Làm sao để bỏ thuốc lá?'* (ảnh `nosmoke.jpg`), kèm nút về đầu trang.  
>   3. Section `id="am-thuc"`: Tiêu đề `<h2>` *'Ẩm thực'*, chứa bài viết *'Các món ăn dân dã'* (ảnh `Am_thuc.jpg`) và liên kết về đầu trang.  
>   4. Section `id="am-nhac"`: Tiêu đề `<h2>` *'Âm nhạc'*, giới thiệu 2 bài viết *'Nhạc thiếu nhi'* (ảnh `nhac_thieu_nhi.jpg`) và *'Dân ca'* (ảnh `Nhac_dan_ca.jpg`).  
> 
> Như vậy, cấu trúc HTML vừa chuẩn ngữ nghĩa, vừa tạo tiền đề tuyệt vời để điều hướng trang!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai8.css`)

**[Hành động OBS]:**  
- Mở file `bai8.css` và cuộn chuột theo từng cụm thuộc tính.

**[Lời thoại]:**  
> "Bây giờ, em xin chuyển sang file `bai8.css` để phân tích các quy tắc định kiểu:  
> 
> Trước hết, thẻ `body` được khai báo thuộc tính cực kỳ đắt giá: `scroll-behavior: smooth;`. Thuộc tính này biến các thao tác nhảy liên kết neo từ dạng giật cục thành chuyển động cuộn lướt êm ái, nâng cao đáng kể trải nghiệm đọc tin tức.  
> 
> Khung trang tin `.khung-trang-tin` có chiều rộng tối đa `max-width: 860px`, căn giữa với `margin: 0 auto`, nền trắng sáng, bo góc nhẹ và có bóng đổ `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1)`.  
> 
> Đầu trang `.dau-trang` có tiêu đề chính màu xanh lam đậm `#1668C1` với đường kẻ chân dầy 2px `border-bottom: 2px solid #1668C1`, tạo điểm nhận diện thương hiệu báo chí trang nhã.  
> 
> Phần thân trang `.than-trang` sử dụng `display: flex; gap: 25px;`.  
> - Cột menu bên trái `.cot-menu` có độ rộng cố định `width: 170px`, không bị co lại (`flex-shrink: 0`), kèm theo đường kẻ dọc bên phải `border-right: 1px solid #eeeeee`. Các liên kết trong menu dùng màu xanh `#1668C1`, bỏ gạch chân mặc định và có hiệu ứng `:hover` gạch chân khi rê chuột qua.  
> - Cột nội dung bên phải `.cot-noi-dung` nhận `flex: 1` để chiếm trọn phần diện tích còn lại.  
> 
> Mỗi chuyên mục có thanh tiêu đề `.thanh-chuyen-muc` dạng dải ribbon màu xanh `#1668C1`, chữ trắng, bo góc 4px, tạo cảm giác phân đoạn rất dứt khoát.  
> 
> Đối với từng bài viết `.bai-viet`, em đặt đường kẻ đáy chấm chấm `border-bottom: 1px dotted #e0e0e0` và thuộc tính `overflow: hidden;` để clear float (chống tràn layout).  
> 
> Điểm cốt lõi trong hiển thị bài báo là ảnh `.anh-bai-viet`:  
> Em sử dụng `float: right; width: 110px; margin-left: 15px; border-radius: 4px;`. Nhờ cơ chế `float: right`, hình ảnh sẽ dạt sang phía bên phải, còn phần tiêu đề `<h3>` và đoạn văn mô tả `<p class="mo-ta-bai">` sẽ tự động chảy uốn lượn xung quanh ảnh, tái hiện đúng phong cách dàn trang báo giấy truyền thống.  
> 
> Cuối mỗi chuyên mục, lớp `.nut-ve-dau-trang` được căn lề phải `text-align: right` với chữ in nghiêng nhỏ nhắn, giúp người đọc dễ dàng quay lại đầu trang chỉ với một cú nhấp chuột."

---

## PHẦN 4: THAO TÁC DEMO TRÊN TRÌNH DUYỆT

**[Hành động OBS]:**  
- Chuyển sang trình duyệt hiển thị trang `bai8.html`.  
- Thao tác nhấp chuột vào lần lượt các mục menu bên trái: *'Tình yêu và gia đình'*, *'Sức khỏe'*, *'Ẩm thực'*, *'Âm nhạc'*.  
- Quan sát hiệu ứng cuộn êm (smooth scroll).  
- Bấm vào nút *'Về đầu trang'*.

**[Lời thoại]:**  
> "Bây giờ, em xin mời thầy cô và các bạn cùng quan sát giao diện thực tế khi chạy trên trình duyệt web.  
> 
> Giao diện hiển thị rất tinh tươm và thanh lịch. Bên trái là cột danh mục chuyên mục, bên phải là dòng tin tức cuộn dài.  
> 
> Hãy chú ý vào tương tác liên kết neo:  
> - Khi em nhấp chuột vào liên kết *'Sức khỏe'*, trang web tự động cuộn xuống rất êm ái và định vị ngay tại thanh tiêu đề Sức khỏe!  
> - Thử tiếp tục bấm vào *'Âm nhạc'*, trang lại mượt mà trượt xuống chuyên mục Âm nhạc ở phía dưới cùng!  
> - Và khi đọc xong, em chỉ cần bấm vào chữ *'Về đầu trang'*, màn hình lại nhẹ nhàng lướt lên trên cùng của trang web mà không hề bị giật màn hình.  
> 
> Đồng thời, nhìn vào từng mẩu tin, hình ảnh minh họa nằm gọn gàng bên phải, các dòng chữ tự động bao quanh sát cạnh ảnh trông rất chuyên nghiệp và thuận mắt."

---

## PHẦN 5: LỜI CẢM ƠN & KẾT THÚC

**[Hành động OBS]:**  
- Chuyển về màn hình tổng kết hoặc webcam.

**[Lời thoại]:**  
> "Như vậy, em đã hoàn thành phần thuyết minh và demo cho Bài tập số 8.  
> 
> Thông qua bài thực hành này, em đã thành thạo kỹ thuật thiết lập liên kết neo Bookmark nội bộ, cấu hình thuộc tính cuộn mượt bằng CSS và ứng dụng float linh hoạt cho bố cục báo điện tử.  
> 
> Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi video thuyết minh này. Hẹn gặp lại mọi người trong các video tiếp theo!"
