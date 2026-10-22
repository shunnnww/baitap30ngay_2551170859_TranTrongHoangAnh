# Kịch Bản Quay Video Thuyết Minh Bài 9: Trang Hồ Sơ Cá Nhân (CV Profile Card)

- **Người thực hiện:** Trần Trọng Hoàng Anh  
- **Môn học:** Phát triển ứng dụng Web cơ bản  
- **Mục tiêu:** Thuyết minh cấu trúc HTML ngữ nghĩa và định dạng CSS cho thẻ hồ sơ cá nhân hiện đại (Profile Card / Mini CV), ứng dụng Flexbox căn giữa đa chiều, hiệu ứng màu Gradient thời thượng và thiết kế các thẻ kỹ năng dạng Chip bo tròn.

---

## Cấu Trúc Thời Lượng Gợi Ý (Tổng thời gian: 3 - 5 phút)
1. **Phần 1: Mở đầu & Giới thiệu đề bài** (~30 - 45 giây)
2. **Phần 2: Phân tích cấu trúc HTML (`bai9.html`)** (~1.5 phút)
3. **Phần 3: Phân tích định dạng CSS (`bai9.css`)** (~1.5 phút)
4. **Phần 4: Thao tác Demo trên trình duyệt** (~45 giây)
5. **Phần 5: Tổng kết & Cảm ơn** (~20 giây)

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU BẢN THÂN

**[Hành động OBS]:**  
- Mở VS Code đang mở sẵn file `bai9.html` và `bai9.css`.  
- Cười tươi, chào thân thiện, giọng nói hào hứng và tự tin.

**[Lời thoại]:**  
> "Em xin kính chào thầy cô và các bạn đang theo dõi video!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp Phát triển ứng dụng Web cơ bản.  
> 
> Hôm nay, em rất hào hứng được chia sẻ và thuyết minh về **Bài tập số 9: Thiết kế trang thẻ hồ sơ cá nhân — CV Profile Card**.  
> 
> Trong ngành phát triển web hiện đại, một chiếc thẻ hồ sơ cá nhân nhỏ gọn, chuyên nghiệp chính là điểm nhấn ấn tượng nhất để giới thiệu bản thân trước nhà tuyển dụng.  
> Đến với bài tập này, chúng ta sẽ ứng dụng rất nhiều kỹ thuật CSS giao diện thời thượng: từ việc căn giữa thẻ tuyệt đối giữa màn hình bằng **Flexbox**, phối dải màu chuyển sắc **linear-gradient** sang trọng, tạo ảnh đại diện tròn độc đáo bằng CSS thuần, cho đến việc thiết kế các nhãn kỹ năng dạng **Tag Chip** bo tròn mềm mại.  
> 
> Không để mọi người chờ lâu nữa, em xin phép bắt đầu ngay với cấu trúc HTML của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CHI TIẾT CẤU TRÚC HTML (`bai9.html`)

**[Hành động OBS]:**  
- Rê chuột vào từng phân vùng trong file `bai9.html`.

**[Lời thoại]:**  
> "Xin mời thầy cô và các bạn quan sát file `bai9.html`.  
> 
> Cấu trúc tài liệu tuân theo tiêu chuẩn HTML5. Toàn bộ nội dung CV được chứa trọn vẹn trong một thẻ `<div class="the-ho-so">`. Đây là chiếc card chứa 2 cột chính tương phản nhau:  
> 
> - **Cột bên trái** là thẻ ngữ nghĩa `<aside class="cot-trai">`:  
>   Khối này đóng vai trò như một thanh thông tin định danh cá nhân:  
>   - Đầu tiên là thẻ `<div class="anh-dai-dien">NA</div>`. Thay vì dùng ảnh bitmap bên ngoài, em dùng thẻ div chứa 2 ký tự viết tắt 'NA' (Nguyễn Văn An) để tạo avatar chữ tối giản theo phong cách UI/UX hiện đại.  
>   - Tiếp theo là tên chủ nhân thẻ `<h1 class="ho-ten">Nguyễn Văn An</h1>`.  
>   - Dưới tên là chức danh `<p class="chuc-danh">Sinh viên CNTT · K67</p>`.  
>   - Cuối cột trái là danh sách liên hệ `<ul class="thong-tin-lien-he">`. Mỗi mục `<li>` kết hợp một ký tự biểu tượng Unicode đặc sắc: biểu tượng phong thư `✉` cho email, ống nghe điện thoại `☎` cho số điện thoại, ngôi nhà `⌂` cho quê quán Hà Nội, và lá cờ `⚑` cho tài khoản GitHub.  
> 
> - **Cột bên phải** là thẻ ngữ nghĩa `<main class="cot-phai">`:  
>   Đây là không gian dành cho nội dung chi tiết, được phân tách rành mạch thành 4 phân đoạn `<section class="muc-ho-so">`:  
>   1. **Mục Giới thiệu**: Đoạn tóm tắt định hướng nghề nghiệp, bày tỏ nguyện vọng tìm kiếm cơ hội thực tập vị trí Front-end Developer.  
>   2. **Mục Kỹ năng**: Chứa thẻ `<div class="danh-sach-ky-nang">` gồm các thẻ `<span class="chip-ky-nang">` liệt kê các công nghệ nòng cốt: HTML5, CSS3, JavaScript, Bootstrap và Git.  
>   3. **Mục Học vấn**: Thể hiện quá trình học tập tại Trường Đại học Thủy lợi (TLU), chuyên ngành Công nghệ thông tin từ năm 2023 đến nay.  
>   4. **Mục Liên kết**: Chứa các siêu liên kết tới Portfolio, Facebook và LinkedIn.  
> 
> Cấu trúc HTML vừa cô đọng, vừa rành mạch và có tính ngữ nghĩa rất cao!"

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai9.css`)

**[Hành động OBS]:**  
- Mở file `bai9.css`, cuộn chuột và giải thích các thuộc tính CSS trọng tâm.

**[Lời thoại]:**  
> "Bây giờ, chúng ta cùng khám phá cách CSS tạo nên linh hồn cho giao diện trong file `bai9.css`:  
> 
> Điểm ấn tượng đầu tiên nằm ở thẻ `body`:  
> Em thiết lập:  
> ```css
> display: flex;
> justify-content: center;
> align-items: center;
> min-height: 100vh;
> ```  
> Kỹ thuật Flexbox này giúp cho chiếc thẻ hồ sơ luôn luôn được căn ngay chính giữa màn hình theo cả chiều dọc lẫn chiều ngang, bất kể người dùng mở trên màn hình máy tính có độ phân giải lớn hay nhỏ. Nền body là màu xám xanh dịu mát `#f0f2f5`.  
> 
> Thẻ hồ sơ `.the-ho-so` có chiều rộng tối đa `max-width: 820px`, bề mặt trắng tinh, các góc được bo tròn mềm mại `border-radius: 16px`, kèm hiệu ứng đổ bóng đa tầng `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1)`. Thuộc tính `overflow: hidden;` giúp giữ cho các thành phần con không bị lẹm ra ngoài viền bo. Bố cục 2 cột cũng được kích hoạt bằng `display: flex;`.  
> 
> Tiếp theo, hãy nhìn vào **Cột bên trái** `.cot-trai`:  
> - Em sử dụng dải màu gradient chuyển sắc góc chéo: `background: linear-gradient(135deg, #1565C0, #0d3f7a);`. Sắc xanh dương đậm này tạo cảm giác tin cậy, tri thức và rất công nghệ.  
> - Avatar `.anh-dai-dien` được tạo hình tròn tuyệt đối nhờ kích thước vuông `100px x 100px` và `border-radius: 50%`. Nền trắng nổi bật, chữ xanh `font-size: 32px` in đậm, căn giữa bằng flexbox và có thêm lớp bóng mờ `box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2)` tạo cảm giác nổi khối 3D.  
> - Danh sách liên hệ `.thong-tin-lien-he` được xếp thẳng hàng với `display: flex; align-items: center; gap: 8px;`, biểu tượng và chữ hiển thị rất ngay ngắn.  
> 
> Sang đến **Cột bên phải** `.cot-phai`:  
> - Chiếm trọn không gian còn lại nhờ `flex: 1`, đệm êm ái `padding: 35px`.  
> - Các tiêu đề mục `.tieu-de-muc` mang sắc xanh thương hiệu `#1565C0`, có đường kẻ ngang mỏng nhẹ `border-bottom: 1px solid #e0e0e0` làm ranh giới phân định rất tinh tế.  
> - Điểm đặc sắc nhất ở cột phải là các thẻ kỹ năng `.chip-ky-nang`:  
>   Khung chứa `.danh-sach-ky-nang` sử dụng `display: flex; flex-wrap: wrap; gap: 8px;`. Mỗi chip được tô màu nền xanh pastel nhẹ nhàng `#e3f0ff`, chữ màu xanh đậm `#0d3f7a`, bo cong hình viên thuốc `border-radius: 20px; padding: 5px 14px; font-weight: bold;`. Kiểu thiết kế chip này trông cực kỳ hiện đại, bắt mắt giống như giao diện của các nền tảng tuyển dụng hàng đầu hiện nay."

---

## PHẦN 4: THAO TÁC DEMO TRÊN TRÌNH DUYỆT

**[Hành động OBS]:**  
- Mở trình duyệt hiển thị trang `bai9.html`.  
- Di chuột chỉ vào Avatar tròn, dải màu gradient, các dòng liên hệ, các thẻ chip kỹ năng và các đường link.

**[Lời thoại]:**  
> "Bây giờ, em xin mời thầy cô và các bạn cùng chiêm ngưỡng giao diện hoàn thiện trên trình duyệt!  
> 
> Như mọi người thấy, chiếc thẻ hồ sơ cá nhân xuất hiện nổi bật ngay chính giữa màn hình với độ tương phản màu sắc cực kỳ cuốn hút:  
> - Phía bên trái là khối màu xanh Gradient bí ẩn và sang trọng, nổi bật lên là chiếc avatar tròn trắng với hai chữ cái 'NA' bóng bẩy, bên dưới là đầy đủ thông tin liên hệ rõ ràng.  
> - Phía bên phải là nền trắng thanh lịch, các mục thông tin được sắp xếp lớp lang, có đường kẻ chân tinh giản.  
> - Đặc biệt, hàng tag kỹ năng HTML5, CSS3, JavaScript... dạng viên thuốc bo tròn tạo cho chiếc CV một phong cách trẻ trung, đậm chất lập trình viên web hiện đại."

---

## PHẦN 5: LỜI CẢM ƠN & KẾT THÚC

**[Hành động OBS]:**  
- Chuyển về màn hình tổng kết hoặc webcam toàn cảnh.

**[Lời thoại]:**  
> "Đó là toàn bộ nội dung thuyết minh về mã nguồn và cách dàn trang cho Bài tập số 9 — Thiết kế thẻ hồ sơ cá nhân hiện đại bằng HTML5 và CSS3.  
> 
> Qua bài thực hành này, em đã nắm vững cách căn giữa tuyệt đối đối tượng với Flexbox, cách dùng gradient tạo chiều sâu và cách tạo các thành phần giao diện tinh xảo như avatar tròn và tag chip.  
> 
> Em xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe và đồng hành cùng em trong video này. Em xin chào và hẹn gặp lại mọi người trong video bài tiếp theo!"
