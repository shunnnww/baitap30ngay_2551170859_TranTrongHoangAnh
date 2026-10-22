# Kịch Bản Quay Video Thuyết Minh Bài 7: Trang Khuyến Mãi Sản Phẩm Double Rich

- **Người thực hiện:** Trần Trọng Hoàng Anh  
- **Môn học:** Phát triển ứng dụng Web cơ bản  
- **Mục tiêu:** Thuyết minh cấu trúc HTML và định dạng CSS cho trang thông tin khuyến mãi nhãn hàng Double Rich với bố cục dạng tờ rơi so le độc đáo, kết hợp banner thương hiệu đa tầng và vạch đứng phân cách tinh tế.

---

## Cấu Trúc Thời Lượng Gợi Ý (Tổng thời gian: 3 - 5 phút)
1. **Phần 1: Mở đầu & Giới thiệu đề bài** (~30 - 45 giây)
2. **Phần 2: Phân tích cấu trúc HTML (`bai7.html`)** (~1.5 phút)
3. **Phần 3: Phân tích định dạng CSS (`bai7.css`)** (~1.5 phút)
4. **Phần 4: Thao tác Demo trên trình duyệt** (~45 giây)
5. **Phần 5: Tổng kết & Cảm ơn** (~20 giây)

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BẢN THÂN

**[Hành động OBS]:**  
- Mở màn hình hiển thị VS Code đang mở sẵn hai file `bai7.html` và `bai7.css`.  
- Tác phong tự tin, nét mặt tươi tắn, giọng nói truyền cảm, chuẩn mực học đường.

**[Lời thoại]:**  
> "Xin kính chào thầy cô cùng tất cả các bạn đang theo dõi video!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Trong buổi chia sẻ hôm nay, em rất vui được thuyết minh và phân tích chi tiết cách lập trình cho **Bài tập số 7: Xây dựng trang thông tin chương trình khuyến mãi sản phẩm Double Rich**.  
> 
> Yêu cầu trọng tâm của bài tập này là tái hiện chính xác 100% mẫu thiết kế tờ rơi quảng cáo thương mại theo maquette in ấn. Đây là một bài thực hành rất thú vị vì nó đòi hỏi kỹ năng làm chủ bố cục **Flexbox** bất đối xứng: thiết kế banner thương hiệu hai tầng màu sắc, sắp xếp các khối thông tin dạng so le trên - dưới, tạo vạch ngăn đứng và nhúng hình ảnh sản phẩm hòa quyện cùng các danh sách điều khoản khuyến mãi.  
> 
> Sau đây, em xin phép bắt đầu với phần giải thích cấu trúc mã nguồn HTML của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CHI TIẾT CẤU TRÚC HTML (`bai7.html`)

**[Hành động OBS]:**  
- Rê chuột vào từng phân đoạn trong file `bai7.html`, cuộn từ trên xuống dưới.

**[Lời thoại]:**  
> "Trước hết, xin mời thầy cô và các bạn quan sát file `bai7.html`.  
> 
> Phần đầu tài liệu được thiết lập theo chuẩn HTML5 quen thuộc với thẻ `<meta charset="UTF-8">`, `<meta name="viewport">` và thẻ `<link>` kết nối trực tiếp đến bảng kiểu `bai7.css`.  
> 
> Trong phần thân `<body>`, toàn bộ nội dung quảng cáo được gói gọn trong thẻ `<div class="khung-bai-viet">`. Đây là tấm thiệp trung tâm màu trắng với bóng đổ mềm mại.  
> 
> Tiếp theo là hệ thống tiêu đề hai tầng đặc trưng của nhãn hàng:  
> - Tầng thứ nhất là thẻ `<div class="dai-tieu-de-chinh">` mang dòng chữ: *'Công nghệ dầu gội dưỡng tóc mới'*. Dải này đóng vai trò là banner chính trên cùng.  
> - Ngay liền kề bên dưới là tầng thứ hai `<div class="dai-tieu-de-phu">` với khẩu hiệu viết hoa: *'TỎA SÁNG CÙNG DOUBLE RICH'*.  
> 
> Sau hai dải banner là phần nội dung chính được bọc trong `<div class="than-bai">`. Ở đây, em đã khéo léo tổ chức thành hai hàng riêng biệt để tái tạo chính xác bố cục so le của đề bài:  
> 
> 1. **Hàng trên** — `<div class="hang-tren">`:  
>    - Phía bên trái là `<div class="cot-trai-trong">` — đây là một cột trống có chủ đích nhằm tạo ra khoảng hở thị giác tương tự như trên tờ rơi gốc.  
>    - Phía bên phải là `<div class="cot-phai-co-vach">`. Khối này kết hợp 2 thành phần:  
>      - Cụm văn bản `<div class="cum-van-ban">` gồm 2 mục lớn có ký hiệu ô vuông đặc trưng: *'□ Sản phẩm khuyến mãi'* và *'□ Đối tượng tham gia'*. Nội dung chi tiết của từng mục được đặt trong danh sách gạch đầu dòng `<ul class="danh-sach">` với các thẻ con `<li>`.  
>      - Đi kèm ngay bên cạnh cụm văn bản là bức ảnh sản phẩm `<img class="anh-san-pham">` trỏ tới đường dẫn `../Kho-anh/Bai07/DoubleRich.jpg`.  
> 
> 2. **Hàng dưới** — `<div class="hang-duoi">`:  
>    - Chứa khối `<div class="cot-trai-duoi">` nằm gọn gàng bên góc trái, ngay dưới khoảng không gian trống phía trên. Khối này trình bày mục *'□ Cách thức nhận giải'* với các chi tiết về *Giải khuyến khích* và *Giải đặc biệt, nhất, nhì*, sử dụng thẻ `<strong>` để làm nổi bật tên từng hạng giải thưởng.  
> 
> Tiếp theo đây, em xin mời thầy cô và các bạn cùng khám phá cách CSS điều khiển vị trí, màu sắc và đường kẻ phân cách cho bố cục tinh tế này!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai7.css`)

**[Hành động OBS]:**  
- Mở file `bai7.css`, highlight từng rule set khi giải thích.

**[Lời thoại]:**  
> "Chuyển sang file `bai7.css`, chúng ta sẽ phân tích từng kỹ thuật định dạng:  
> 
> Ngay đầu file, em sử dụng bộ chọn toàn cục `*` với thuộc tính `box-sizing: border-box;`. Điều này đảm bảo rằng mọi kích thước `width`, `padding` và `border` được tính toán chuẩn xác, không làm vỡ bố cục khi thêm đệm viền.  
> 
> Thẻ `body` có màu nền xám sáng thanh lịch `#e6e8eb`, dùng font `Arial, sans-serif` và có lề `padding: 40px 15px`.  
> 
> Khung bài viết `.khung-bai-viet` có chiều rộng tối đa `max-width: 860px`, căn giữa tự động `margin: 0 auto`, nền trắng tinh khiết `#ffffff`, bo nhẹ 4 góc và có bóng đổ sâu `box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12)`. Thuộc tính `overflow: hidden;` giúp hai dải banner ở đầu bo khớp hoàn hảo theo góc cong của khung.  
> 
> Hãy chú ý đến cách phối màu thương hiệu:  
> - Dải tiêu đề chính `.dai-tieu-de-chinh` được phủ màu đỏ đậm quý phái `#C8102E`, chữ trắng `#FFFFFF`, cỡ chữ lớn 22px in đậm, căn giữa với khoảng đệm `14px 20px`.  
> - Dải tiêu đề phụ `.dai-tieu-de-phu` có màu nền hồng phấn dịu nhẹ `#FBE3E8`, chữ màu đỏ `#C8102E`, cỡ chữ 14px in đậm, kèm khoảng cách ký tự `letter-spacing: 0.5px` tạo phong cách hiện đại, thanh thoát.  
> 
> Phần thân bài `.than-bai` có khoảng đệm bao quanh `padding: 30px`.  
> - Đối với hàng trên `.hang-tren`: Sử dụng `display: flex; gap: 20px;`. Cột trống bên trái `.cot-trai-trong` nhận `flex: 1`, trong khi khối bên phải `.cot-phai-co-vach` nhận `flex: 1.15`.  
> - Điểm nhấn kỹ thuật ấn tượng ở đây là vạch đứng màu xám nhạt `border-left: 1px solid #dcdcdc;` kết hợp `padding-left: 20px;`. Khối bên phải này bản thân nó cũng là một flexbox con với `display: flex; align-items: flex-start; gap: 15px;` để đặt cụm văn bản nằm song song với ảnh sản phẩm `.anh-san-pham` có chiều rộng cố định 170px.  
> - Đối với hàng dưới `.hang-duoi`: Khối `.cot-trai-duoi` được giới hạn `width: 48%`. Độ rộng này tương ứng với tỉ lệ của cột trống phía trên, giúp nội dung cách thức nhận giải nằm khớp một cách hoàn hảo ở góc dưới bên trái mà không bị tràn sang phía đối diện.  
> - Cuối cùng, các tiêu đề mục `.tieu-de-muc` đều dùng sắc đỏ `#C8102E` in đậm, và các danh sách `.danh-sach li` có chiều cao dòng `line-height: 1.6`, cỡ chữ 13.5px tạo cảm giác đọc rất thoáng và dễ chịu."

---

## PHẦN 4: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT

**[Hành động OBS]:**  
- Chuyển sang trình duyệt hiển thị file `bai7.html`.  
- Chỉ con trỏ chuột vào dải banner đỏ, dải hồng, vạch đứng ngăn cách, ảnh chai dầu gội và phần cách thức nhận giải.

**[Lời thoại]:**  
> "Bây giờ, em xin mời thầy cô và các bạn cùng quan sát kết quả trang web khi hiển thị trực tiếp trên trình duyệt.  
> 
> Ấn tượng đầu tiên là phong cách thiết kế rất chuẩn mực và bắt mắt:  
> - Hai dải banner đỏ và hồng phía trên tạo cảm giác nhận diện thương hiệu Double Rich vô cùng mạnh mẽ và đồng điệu.  
> - Nhìn vào phần thân bên dưới, bố cục so le hiển thị cực kỳ chuẩn xác: Góc trên bên phải là thông tin sản phẩm và đối tượng tham gia, bên cạnh là chai dầu gội Double Rich sắc nét.  
> - Đặc biệt, vạch đứng màu xám mảnh dẻ ở giữa tạo ra ranh giới ngăn cách rất chuyên nghiệp.  
> - Góc dưới bên trái là phần hướng dẫn nhận giải thưởng, tạo nên thế cân bằng bất đối xứng hoàn hảo cho trang quảng cáo theo đúng tinh thần mẫu đề bài."

---

## PHẦN 5: LỜI CẢM ƠN & KẾT THÚC

**[Hành động OBS]:**  
- Chuyển lại màn hình chính hoặc camera toàn cảnh.

**[Lời thoại]:**  
> "Như vậy, em đã thuyết minh xong toàn bộ cấu trúc mã nguồn HTML và kỹ thuật định dạng CSS của Bài tập số 7.  
> 
> Qua bài tập này, chúng ta đã học được cách làm chủ Flexbox để tạo nên những bố cục sáng tạo, phi đối xứng nhưng vẫn giữ được sự chỉn chu và tính thẩm mỹ cao trong thiết kế giao diện web.  
> 
> Em xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe và theo dõi. Kính chúc thầy cô luôn dồi dào sức khỏe và chúc các bạn học tập thật tốt. Hẹn gặp lại mọi người trong các video tiếp theo!"
