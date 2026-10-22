# Kịch Bản Quay Video Thuyết Minh Bài 6: Bảng Danh Sách Món Ăn Hà Nội

- **Người thực hiện:** Trần Trọng Hoàng Anh  
- **Môn học:** Phát triển ứng dụng Web cơ bản  
- **Mục tiêu:** Thuyết minh chi tiết cấu trúc HTML và định dạng CSS cho giao diện hiển thị bảng danh sách món ngon Hà Nội kết hợp hình ảnh minh họa theo bố cục 2 cột.

---

## Cấu Trúc Thời Lượng Gợi Ý (Tổng thời gian: 3 - 5 phút)
1. **Phần 1: Mở đầu & Giới thiệu đề bài** (~30 - 45 giây)
2. **Phần 2: Phân tích cấu trúc HTML (`bai6.html`)** (~1.5 phút)
3. **Phần 3: Phân tích định dạng CSS (`bai6.css`)** (~1.5 phút)
4. **Phần 4: Thao tác Demo trên trình duyệt** (~45 giây)
5. **Phần 5: Tổng kết & Cảm ơn** (~20 giây)

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BẢN THÂN

**[Hành động OBS]:**  
- Mở màn hình hiển thị VS Code đang mở sẵn file `bai6.html` và `bai6.css`.  
- Bật webcam (hoặc giữ góc quay có hình nếu có), giọng đọc to, rõ ràng, vui tươi và tự tin.

**[Lời thoại]:**  
> "Xin kính chào thầy cô cùng toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong video ngày hôm nay, em xin phép được thuyết minh và hướng dẫn chi tiết cách xây dựng giao diện cho **Bài tập số 6: Thiết kế bảng danh sách món ngon Hà Nội**.  
> 
> Mục tiêu của bài tập này là giúp chúng ta nắm vững kỹ thuật xây dựng bảng biểu với thẻ `<table>`, phân chia bố cục linh hoạt bằng **Flexbox** để đặt hình ảnh minh họa song song với bảng dữ liệu, đồng thời ứng dụng kỹ thuật **Zebra-striping** — tức là tạo màu nền xen kẽ cho các dòng trong bảng nhằm nâng cao trải nghiệm đọc dữ liệu của người dùng.  
> 
> Ngay bây giờ, em xin mời thầy cô và các bạn cùng đi vào phần phân tích cấu trúc mã nguồn HTML của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CHI TIẾT CẤU TRÚC HTML (`bai6.html`)

**[Hành động OBS]:**  
- Chuyển con trỏ chuột và cuộn màn hình đến file `bai6.html`.  
- Dùng chuột quét nhẹ qua các đoạn thẻ HTML tương ứng khi nhắc đến.

**[Lời thoại]:**  
> "Đầu tiên, chúng ta cùng quan sát file `bai6.html`.  
> 
> Ở phần đầu trang, tài liệu được khai báo chuẩn HTML5 với `<!DOCTYPE html>`, ngôn ngữ hiển thị tiếng Việt `lang="vi"`. Thẻ `<head>` thiết lập bảng mã `UTF-8` giúp hiển thị tiếng Việt có dấu chuẩn xác, thẻ `<meta name="viewport">` giúp giao diện tương thích tốt trên nhiều kích thước màn hình, và thẻ `<link>` liên kết trực tiếp tới file định dạng `bai6.css`.
> 
> Đi vào phần nội dung `<body>`, toàn bộ trang được bao bọc bên trong một thẻ `<div class="khung-bai-viet">`. Đây là chiếc khung chính giữ vai trò căn giữa màn hình và giới hạn độ rộng cho khối bài viết.  
> 
> Ngay bên trên là thẻ tiêu đề chính `<h1>` với class `tieu-de`, mang nội dung: *'Các món ngon Hà Nội'*.  
> 
> Điểm mấu chốt về mặt cấu trúc nằm ở thẻ `<div class="khung-hai-cot">`. Thẻ này đóng vai trò là một Flex Container để chia không gian thành 2 phần cân đối:  
> - Cột bên trái là `<div class="cot-anh">`, chứa thẻ hình ảnh `<img src="../Kho-anh/Bai06/Bat.gif">` với thuộc tính `alt="Bát thức ăn"` và class `anh-minh-hoa`. Bức ảnh này giúp trực quan hóa chủ đề ẩm thực của bài.  
> - Cột bên phải là `<div class="cot-bang">`, chứa bảng dữ liệu chính với thẻ `<table class="bang-mon-an">`.  
> 
> Bên trong bảng, em tuân thủ nghiêm ngặt chuẩn ngữ nghĩa bảng dữ liệu HTML:  
> - Phần đầu bảng là thẻ `<thead>` chứa một hàng `<tr>` tiêu đề gồm 2 cột: `<th class="cot-stt">STT</th>` để đánh số thứ tự và `<th class="cot-ten">Tên món ăn</th>` để hiển thị tên món. Việc dùng thẻ `<th>` thay vì `<td>` giúp chữ tự động in đậm và có ý nghĩa ngữ nghĩa dành cho trình đọc màn hình.  
> - Phần thân bảng là thẻ `<tbody>`, chứa 8 hàng `<tr>` tương ứng với 8 món ăn truyền thống nổi tiếng như: Bánh cuốn Thanh Trì, Xôi Hà Nội, Chả cá Lã Vọng, Cháo Cóc, Bánh Gai Ninh Giang, Bún Thang Hà Nội, Canh Lằng và Vịt quay Lạng Sơn. Mỗi hàng gồm một ô `<td class="o-stt">` chứa số thứ tự và một ô `<td>` chứa tên món ăn.  
> 
> Tiếp theo, chúng ta sẽ xem cách CSS làm cho bố cục và bảng này trở nên trực quan, đẹp mắt như thế nào!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai6.css`)

**[Hành động OBS]:**  
- Chuyển tab sang file `bai6.css`.  
- Cuộn từ trên xuống dưới theo từng selector được đề cập.

**[Lời thoại]:**  
> "Bây giờ, em xin chuyển sang file `bai6.css`.  
> 
> Trước hết, thẻ `body` được thiết lập font chữ mặc định sạch sẽ `font-family: Arial, sans-serif`, màu nền xám nhạt `#f5f5f5` và khoảng đệm `padding: 40px 15px` để toàn bộ trang web không bị dính sát vào mép viền trình duyệt.  
> 
> Khối bao ngoài `.khung-bai-viet` được giới hạn chiều rộng tối đa `max-width: 780px`, căn giữa tự động bằng `margin: 0 auto`. Em sử dụng màu nền kem ấm áp `#FDF8EF` rất phù hợp với phong cách ẩm thực truyền thống, bo nhẹ các góc `border-radius: 4px` và thêm bóng mờ dịu nhẹ `box-shadow: 0 2px 8px rgba(0,0,0,0.06)` tạo cảm giác như một trang thực đơn sang trọng.  
> 
> Tiêu đề `.tieu-de` được tạo điểm nhấn bằng màu cam đất `#E65100`, cỡ chữ lớn `26px`, in đậm và căn giữa trang.  
> 
> Về phần bố cục 2 cột, lớp `.khung-hai-cot` được thiết lập `display: flex; gap: 30px; align-items: center;`. Nhờ vậy, cột ảnh và cột bảng sẽ tự động nằm ngang cạnh nhau, có khoảng cách đều đặn 30 pixel và được căn giữa theo trục dọc.  
> 
> Ở cột ảnh `.cot-anh`, em cố định chiều rộng `width: 200px` và đặt `flex-shrink: 0` để ảnh không bị co nhỏ lại khi không gian hẹp. Ảnh `.anh-minh-hoa` có `max-width: 100%` và `height: auto` giúp giữ đúng tỉ lệ gốc. Cột bảng `.cot-bang` có `flex: 1` để tự động dãn rộng và chiếm trọn không gian còn lại.  
> 
> Tiếp theo là phần quan trọng nhất — định dạng bảng `.bang-mon-an`:  
> - Thuộc tính `border-collapse: collapse;` giúp triệt tiêu khoảng cách đôi giữa các đường viền ô, tạo nên các đường kẻ đơn liền mạch.  
> - Hàng tiêu đề `thead th` được tô nền màu cam nổi bật `#E65100`, chữ trắng tinh `#FFFFFF`, cỡ chữ 15px và khoảng đệm `padding: 10px 12px`.  
> - Em phân chia tỉ lệ cột rất hợp lý: `.cot-stt` chiếm 20% và căn giữa, còn `.cot-ten` chiếm 80% căn lề trái.  
> - Các ô dữ liệu `tbody td` có đường viền đáy màu be nhạt `border-bottom: 1px solid #E0D6C2`.  
> - Đặc biệt, em áp dụng pseudo-class `:nth-child` để tạo sọc xen kẽ: các dòng lẻ `tr:nth-child(odd)` có nền trắng `#FFFFFF`, còn các dòng chẵn `tr:nth-child(even)` có nền kem `#FDF8EF`. Kỹ thuật này giúp mắt người xem dễ dàng phân biệt từng dòng, không bị nhìn nhầm hay mỏi mắt khi đọc danh sách dài.  
> - Cuối cùng, lớp `.o-stt` được in đậm và căn giữa để số thứ tự luôn nổi bật."

---

## PHẦN 4: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT

**[Hành động OBS]:**  
- Mở trình duyệt Chrome/Edge hiển thị trang `bai6.html`.  
- Rê chuột qua bảng, chỉ vào ảnh minh họa, tiêu đề và các hàng xen kẽ.

**[Lời thoại]:**  
> "Bây giờ, em xin phép chuyển sang trình duyệt để demo kết quả thực tế hiển thị trên màn hình.  
> 
> Như thầy cô và các bạn có thể thấy, toàn bộ khối nội dung xuất hiện ngay ngắn ở chính giữa trang với tông màu kem ấm áp rất hài hòa.  
> 
> Phía trên là dòng chữ lớn *'Các món ngon Hà Nội'* với sắc cam đất nổi bật.  
> 
> Bố cục 2 cột thể hiện rất rõ ràng:  
> - Bên tay trái là hình ảnh chiếc bát ẩm thực truyền thống, cân đối và sắc nét.  
> - Bên tay phải là bảng danh sách món ăn gồm 8 món. Hàng tiêu đề có nền cam tương đồng với màu của tiêu đề chính, tạo nên một sự đồng bộ thị giác chuyên nghiệp.  
> - Các dòng dữ liệu trắng và kem xen kẽ nhau rõ rệt, khoảng cách giữa các chữ và lề rất thoáng đãng, dễ theo dõi. Khi phóng to hay thu nhỏ kích thước cửa sổ, bố cục vẫn giữ vững được tính thẩm mỹ."

---

## PHẦN 5: LỜI CẢM ƠN & KẾT THÚC

**[Hành động OBS]:**  
- Quay lại màn hình VS Code hoặc chuyển về góc webcam toàn cảnh.

**[Lời thoại]:**  
> "Như vậy là em đã hoàn thành phần thuyết minh và demo cho Bài tập số 6 — Thiết kế bảng danh sách món ngon Hà Nội bằng HTML và CSS.  
> 
> Qua bài tập này, chúng ta đã củng cố được cách xây dựng bảng chuẩn cấu trúc ngữ nghĩa, kỹ thuật phân chia cột bằng Flexbox và cách làm đẹp bảng bằng CSS Zebra-striping.  
> 
> Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian theo dõi video. Rất mong nhận được những lời góp ý quý báu của thầy cô để các bài tập tiếp theo của em được hoàn thiện tốt hơn nữa. Em xin chào và hẹn gặp lại trong các video bài tập tiếp theo!"
