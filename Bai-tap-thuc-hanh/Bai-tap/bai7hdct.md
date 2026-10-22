# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 7: TRANG KHUYẾN MÃI DOUBLE RICH & MÔ HÌNH HỘP CSS BOX MODEL

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file này trên điện thoại hoặc máy tính bảng để nhìn đọc, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Đọc với giọng đĩnh đạc, rành mạch, nhấn nhá vào các từ khóa kỹ thuật: Box Model, Content, Padding, Border, Margin, Box-sizing.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, VS Code, soi Box Model trên tab Computed của F12 DevTools.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng giúp bạn kiểm soát tiến độ nói trong khoảng 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Mốc: 00:00 - 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình ở độ phân giải Full HD.
- Mở VS Code chứa file `bai7.html` và `bai7.css`.
- Bật sẵn tab Chrome hiển thị trang quảng cáo khuyến mãi Double Rich với dải tiêu đề đỏ tươi và bố cục vách ngăn chuyên nghiệp.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn cùng toàn thể các bạn sinh viên đang theo dõi video báo cáo thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được đại diện trình bày và thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 7: Thiết kế trang thông tin khuyến mãi sản phẩm dầu gội Double Rich và làm chủ toàn diện Mô hình hộp CSS Box Model**.
> 
> Thưa thầy cô, trong thế giới thiết kế và phát triển giao diện web, nếu như HTML được coi là khung xương định hình nên các phần tử văn bản, hình ảnh, thì CSS Box Model chính là định luật vạn vật hấp dẫn của không gian web. Mọi phần tử trên một trang web – từ một đoạn văn nhỏ bé, một nút bấm, cho đến một chiếc thẻ bài viết khổng lồ – dưới con mắt của trình duyệt, đều được biểu diễn như một chiếc hộp hình chữ nhật nhiều lớp.
> 
> Nếu một lập trình viên không thấu hiểu sâu sắc cách thức hoạt động của Mô hình hộp, họ sẽ liên tục gặp phải các hiện tượng ức chế như: vỡ layout, các phần tử bị đẩy tràn ra ngoài màn hình khi thêm viền hoặc đệm, hay các khoảng cách margin kỳ lạ không thể kiểm soát.
> 
> Bài tập số 7 với đề bài tái hiện tờ rơi khuyến mãi chương trình *'Tỏa sáng cùng Double Rich'* đặt ra cho chúng em những mục tiêu thực hành hết sức thiết thực:
> - Thứ nhất: Nắm vững và vận dụng chuẩn xác 4 tầng cấu trúc của CSS Box Model: **Content (Nội dung)**, **Padding (Khoảng đệm nội bộ)**, **Border (Đường viền)**, và **Margin (Khoảng cách ngoại biên)**.
> - Thứ hai: Hiểu sâu sắc sự khác biệt sống còn giữa hai mô hình định cỡ hộp: `box-sizing: content-box` cổ điển và `box-sizing: border-box` hiện đại.
> - Thứ ba: Xây dựng bố cục trang phức tạp theo hình chữ Z bất đối xứng: Hàng trên có khoảng trống bên trái và khối nội dung kèm vách đứng ở bên phải; Hàng dưới lại bố trí khối cách thức nhận giải nằm lệch về bên trái.
> - Thứ tư: Kỹ năng phối hợp các thuộc tính viền phân cách `border-left`, thụt lề danh sách `padding-left`, đổ bóng thẻ card `box-shadow` và bo góc mềm mại `border-radius`.
> 
> Lộ trình thuyết minh của em hôm nay gồm có 6 phần:
> 1. Lời mở đầu và định hướng mục tiêu đề bài.
> 2. Đi sâu phân tích cơ sở lý thuyết chuyên sâu về CSS Box Model.
> 3. Thuyết minh chi tiết từng dòng mã nguồn cấu trúc `bai7.html`.
> 4. Thuyết minh chi tiết từng dòng mã nguồn định dạng `bai7.css`.
> 5. Thực hành demo tương tác, mở F12 DevTools soi sơ đồ Box Model trực quan.
> 6. Tổng kết bài học kinh nghiệm, các bẫy thường gặp và lời cảm ơn kết thúc.
> 
> Sau đây, em xin phép được bắt đầu đi vào phần cơ sở lý thuyết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & MÔ HÌNH HỘP BOX MODEL (Mốc: 02:30 - 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Mở file `bai7.css`, chỉ chuột vào dòng 6 đến 8: `* { box-sizing: border-box; }`.
- Vẽ chuột mô phỏng 4 lớp của chiếc hộp từ trong ra ngoài.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô, trước hết em xin làm rõ bản chất kỹ thuật của **CSS Box Model (Mô hình hộp)** – kiến thức nền tảng mang tính sống còn trong CSS:
> 
> Mỗi một phần tử HTML khi được render trên màn hình sẽ gồm 4 lớp xếp chồng từ trong ra ngoài:
> 1. **Content (Vùng nội dung):** Là trung tâm của chiếc hộp, nơi hiển thị văn bản, hình ảnh, video hoặc các phần tử con. Kích thước của vùng này được kiểm soát bởi thuộc tính `width` và `height`.
> 2. **Padding (Vùng đệm):** Là khoảng không gian trong suốt bao bọc xung quanh vùng Content. Padding giúp cho chữ hoặc hình ảnh không bị dính sát vào đường viền của hộp, tạo độ thoáng đãng cần thiết. Màu nền của phần tử sẽ tràn ra và hiển thị trên cả vùng padding này.
> 3. **Border (Vùng đường viền):** Là đường bao quanh lớp padding và content. Đường viền có thể có độ dày (`border-width`), kiểu dáng như nét liền, nét đứt (`border-style`), và màu sắc (`border-color`). Trong bài tập 7, chúng em ứng dụng đường viền đơn phương `border-left: 1px solid #dcdcdc;` để tạo nên một vạch ngăn cách màu xám nhạt tinh tế.
> 4. **Margin (Vùng lề ngoài):** Là khoảng không gian trống rỗng bao quanh bên ngoài đường viền, giữ nhiệm vụ đẩy lùi các phần tử lân cận để tránh va chạm và tạo khoảng cách giữa các khối hộp độc lập.
> 
> **Vấn đề sống còn: Thuộc tính `box-sizing`.**
> Trong mô hình mặc định của CSS thời kỳ đầu (`box-sizing: content-box`), khi chúng ta đặt độ rộng một chiếc hộp là $400\text{px}$, nếu ta thêm `padding: 20px` mỗi bên và `border: 2px` mỗi bên, thì độ rộng thực tế trên màn hình sẽ bị phình to ra thành:
> $$400 + (20 \times 2) + (2 \times 2) = 444\text{px}$$
> Điều này khiến cho việc tính toán bố cục chia cột trở thành một cơn ác mộng vì tổng độ rộng các cột rất dễ vượt quá 100%, gây vỡ dòng ngay lập tức.
> 
> Để khắc phục triệt để vấn đề này, các lập trình viên hiện đại luôn áp dụng quy tắc toàn cục ở dòng 6 của `bai7.css`:
> `* { box-sizing: border-box; }`.
> Khi chuyển sang `border-box`, giá trị `width` và `height` mà chúng ta khai báo sẽ bao gồm trọn gói cả Content, Padding và Border. Trình duyệt sẽ tự động co nhỏ vùng Content lại để tổng độ rộng luôn cố định chính xác bằng con số ta chỉ định. Nhờ đó, việc chia tỷ lệ phần trăm các cột trở nên cực kỳ chuẩn xác và dễ quản lý.
> 
> Ngoài ra, trong bài tập này chúng em còn áp dụng hiện tượng **Margin Collapsing (Gộp lề dọc)** giữa các đoạn văn và danh sách để triệt tiêu các khoảng hở bị nhân đôi không mong muốn."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai7.html`) (Mốc: 06:00 - 10:30 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai7.html`.
- Bôi đen lần lượt từng khối thẻ từ dòng 1 đến dòng 60.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích chi tiết tệp mã nguồn cấu trúc `bai7.html` với 60 dòng code chuẩn ngữ nghĩa:
> 
> - **Phần khai báo tiêu chuẩn từ dòng 1 đến dòng 8:**
>   - `<!DOCTYPE html>` và `<html lang="vi">` mở đầu trang.
>   - Khối `<head>` chứa thẻ mã hóa `<meta charset="UTF-8">`, viewport tương thích di động, và thẻ `<title>Bài 7 - Trang khuyến mãi sản phẩm</title>`.
>   - Thẻ `<link rel="stylesheet" href="bai7.css">` liên kết tệp CSS bên ngoài.
> 
> - **Tiếp tục đi vào phần `<body>` từ dòng 11 đến dòng 58:**
>   - **Dòng 11:** Toàn bộ nội dung khuyến mãi được gói trọn vẹn trong chiếc thẻ bọc ngoài cùng `<div class="khung-bai-viet">`. Đây là chiếc thẻ card màu trắng trung tâm nổi bật trên nền xám nhạt của trang.
>   
>   - **Dòng 13 đến dòng 15: Dải banner chính:**
>     - `<div class="dai-tieu-de-chinh"> Công nghệ dầu gội dưỡng tóc mới </div>`: Đây là dải banner tiêu đề màu đỏ đậm rực rỡ, sử dụng chữ in hoa/thường cân đối nhằm thu hút sự chú ý đầu tiên của người tiêu dùng.
>   
>   - **Dòng 18 đến dòng 20: Dải banner phụ:**
>     - `<div class="dai-tieu-de-phu"> TỎA SÁNG CÙNG DOUBLE RICH </div>`: Dải tiêu đề phụ màu hồng phấn nhạt, chữ in hoa toàn bộ, mang khẩu hiệu thương hiệu nổi tiếng của sản phẩm.
>   
>   - **Dòng 23 đến dòng 56: Khu vực thân bài chính `<div class="than-bai">`:**
>     - Khu vực này được chia theo trục dọc thành 2 hàng rất độc đáo nhằm tái hiện bố cục không đối xứng của tờ rơi:
>     
>     *Hàng trên (Dòng 25 đến dòng 44):*
>     - Được bao trong `<div class="hang-tren">`.
>     - Bên trái là một thẻ rỗng `<div class="cot-trai-trong"></div>`. Khối này đóng vai trò chiếm giữ một nửa không gian bên trái, tạo khoảng thở thị giác theo đúng thiết kế đồ họa nguyên mẫu.
>     - Bên phải là `<div class="cot-phai-co-vach">`. Khối này chính là nơi bố trí vạch đứng phân cách mỏng bên lề trái. Bên trong nó lại gồm 2 phần tử con nằm ngang nhau:
>       1. Cụm văn bản `<div class="cum-van-ban">`:
>          - Mục 1: `<div class="tieu-de-muc">□ Sản phẩm khuyến mãi</div>` đi kèm danh sách `<ul class="danh-sach">` mô tả chai dầu gội dung tích 200ml, 400ml có tem khuyến mãi.
>          - Mục 2: `<div class="tieu-de-muc">□ Đối tượng tham gia</div>` đi kèm danh sách bullet chi tiết người tiêu dùng cuối cùng và các điều khoản loại trừ đối với nhân viên, đại lý.
>       2. Hình ảnh sản phẩm: Thẻ `<img src="../Kho-anh/Bai07/DoubleRich.jpg" alt="Dầu gội Double Rich" class="anh-san-pham">` đặt ở góc phải ngoài cùng, tạo điểm nhấn sản phẩm trực quan.
>     
>     *Hàng dưới (Dòng 47 đến dòng 55):*
>     - Được bao trong `<div class="hang-duoi">`.
>     - Chứa `<div class="cot-trai-duoi">` chiếm độ rộng dưới 50% ở góc trái dưới cùng:
>       - Gồm mục `<div class="tieu-de-muc">□ Cách thức nhận giải</div>`.
>       - Bên dưới là danh sách `<ul class="danh-sach">` với 2 mục thông tin quan trọng được in đậm bằng thẻ `<strong>`: *Giải khuyến khích* (đổi quà tại cửa hàng bán lẻ) và *Giải đặc biệt, nhất, nhì* (cắt mã vạch gửi kèm phiếu trúng thưởng về văn phòng công ty).
> 
> Nhờ cách phân chia khối HTML có tính toán chặt chẽ này, chúng ta dễ dàng áp dụng CSS Box Model để điều chỉnh từng khoảng cách viền, đệm một cách hoàn hảo mà không hề bị rối ren."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai7.css`) (Mốc: 10:30 - 15:00 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai7.css`.
- Bôi đen khối code `* { box-sizing: border-box; }`, khối `.khung-bai-viet`, `.dai-tieu-de-chinh`, `.cot-phai-co-vach`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta sẽ đi sâu vào tệp định kiểu `bai7.css` gồm 118 dòng code. Đây chính là minh chứng sống động nhất cho nghệ thuật làm chủ Mô hình hộp CSS Box Model:
> 
> - **Dòng 6 đến dòng 8: Thiết lập chuẩn mực Box Model:**
>   - `* { box-sizing: border-box; }`: Như em đã giải thích ở phần lý thuyết, bộ chọn sao đại diện cho tất cả các phần tử trên trang. Việc thiết lập `border-box` đảm bảo rằng mọi kích thước `width`, `padding`, `border` trong bài sẽ luôn được giữ nguyên vẹn, không bao giờ bị nở to làm xô lệch bố cục.
> 
> - **Dòng 10 đến dòng 15: Thiết lập thẻ `body`:**
>   - `background-color: #e6e8eb;`: Màu nền xám xanh trung tính, tạo độ sâu và làm nổi bật chiếc hộp bài viết trắng tinh ở giữa.
>   - `font-family: Arial, sans-serif; margin: 0; padding: 40px 15px;`: Căn lề ngoài bằng 0 và tạo đệm 40px trên dưới để khung bài viết không dính vào đỉnh trình duyệt.
> 
> - **Dòng 18 đến dòng 25: Khung bài viết `.khung-bai-viet`:**
>   - `max-width: 860px; margin: 0 auto;`: Khống chế chiều ngang tối đa 860px và căn giữa tự động.
>   - `background-color: #ffffff;`: Màu nền trắng sáng, sạch sẽ.
>   - `box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);`: Đổ bóng 4 lớp mềm mại với bán kính lan tỏa 18px, tạo hiệu ứng nổi bề mặt cao cấp.
>   - `border-radius: 4px; overflow: hidden;`: Bo nhẹ 4 góc và dùng `overflow: hidden` để các dải banner đỏ phía trong tự động bo theo viền ngoài mà không bị lem góc nhọn ra ngoài.
> 
> - **Dòng 28 đến dòng 46: Hai dải banner tiêu đề:**
>   - Banner chính `.dai-tieu-de-chinh`:
>     - `background-color: #C8102E; color: #FFFFFF;`: Sắc đỏ tươi rực rỡ đặc trưng của thương hiệu Double Rich, chữ trắng tinh.
>     - `font-size: 22px; font-weight: bold; text-align: center;`: Chữ in đậm to bản, căn giữa.
>     - `padding: 14px 20px;`: Khoảng đệm trên dưới 14px tạo độ dày dặn, bề thế cho thanh tiêu đề.
>   - Banner phụ `.dai-tieu-de-phu`:
>     - `background-color: #FBE3E8; color: #C8102E;`: Sắc hồng phấn dịu dàng, chữ màu đỏ thương hiệu.
>     - `font-size: 14px; font-weight: bold; padding: 8px 20px; letter-spacing: 0.5px;`: Thuộc tính `letter-spacing: 0.5px` giúp các chữ cái in hoa dãn nhẹ, tăng độ thoáng và tính trang trọng cho khẩu hiệu.
> 
> - **Dòng 49 đến dòng 84: Thân bài và cơ chế phân chia Box Model ở hàng trên:**
>   - `.than-bai`: Được bao bọc bởi `padding: 30px;`. Cả 4 cạnh của vùng thân bài đều cách mép viền ngoài 30px, bảo vệ nội dung không bị chen chúc.
>   - `.hang-tren`: Thiết lập `display: flex; gap: 20px;`. Flexbox giúp chia đôi không gian thành 2 cột:
>     - `.cot-trai-trong`: Nhận `flex: 1;` làm khoảng trống thẩm mỹ.
>     - `.cot-phai-co-vach`: Nhận `flex: 1.15;` để có độ rộng nhỉnh hơn một chút.
>     - **Điểm sáng tạo của Box Model ở đây là:** Thuộc tính `border-left: 1px solid #dcdcdc;` kết hợp với `padding-left: 20px;`. Đường viền bên trái tạo ra một vạch kẻ đứng thanh mảnh màu xám nhạt, và đệm trái 20px giúp cụm văn bản bên trong không bị dính vào vạch kẻ đó!
>     - Bên trong khối này lại dùng `display: flex; align-items: flex-start; gap: 15px;` để đặt cụm chữ bên trái (`flex: 1`) và ảnh sản phẩm bên phải.
>   - `.anh-san-pham`: `width: 170px; height: auto; flex-shrink: 0;` cố định chiều rộng chai dầu gội là 170px và không bị co ép lại khi màn hình nhỏ.
> 
> - **Dòng 86 đến dòng 93: Hàng dưới `.hang-duoi`:**
>   - `margin-top: 10px;`: Đẩy lùi khoảng cách với hàng trên theo mô hình lề ngoài Margin.
>   - `.cot-trai-duoi`: Được ấn định độ rộng `width: 48%;`. Nhờ con số 48% này, khối *'Cách thức nhận giải'* nằm gọn gàng ở nửa bên trái, hoàn toàn không bị tràn sang nửa bên phải của hàng trên, tạo nên một bố cục zíc-zắc so le vô cùng ăn ý!
> 
> - **Dòng 96 đến cuối file: Tiêu đề mục và danh sách gạch đầu dòng:**
>   - `.tieu-de-muc`: Màu chữ đỏ `#C8102E`, in đậm, `margin-top: 12px; margin-bottom: 8px;` tạo nhịp điệu ngắt đoạn chuẩn xác.
>   - `.danh-sach`: `list-style-type: disc; padding-left: 18px;` thụt lề 18px cho các chấm tròn bullet.
>   - `.danh-sach li`: `line-height: 1.6; font-size: 13.5px; margin-bottom: 6px;` tạo độ giãn dòng thoáng đãng, giúp người đọc dễ dàng theo dõi các mốc thời gian và địa điểm nhận giải."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (Mốc: 15:00 - 19:00 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai7.html`.
- Nhấn phím `F12` bật Developer Tools.
- Chọn tab **Elements**, chọn tab con **Computed** để lộ sơ đồ màu sắc Box Model.
- Nhấp công cụ Inspect (mũi tên) vào lần lượt: Khung chính, Cột có vạch đứng, và Chai dầu gội.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng quan sát giao diện thực tế và kiểm chứng các lớp của Box Model trực tiếp trên trình duyệt:
> 
> **1. Quan sát trực quan tổng thể:**
> - Giao diện nổi bật với hai dải màu đỏ và hồng phấn ở đầu trang, các góc thẻ được bo tròn nhẹ nhàng.
> - Bố cục thân bài so le rất rõ rệt: Góc trên bên trái để thoáng; Góc trên bên phải có vạch xám đứng kẻ dọc ngăn cách, hiển thị rõ ràng thông tin sản phẩm cùng hình ảnh chai dầu gội Double Rich; Góc dưới bên trái là các điều khoản nhận giải thưởng.
> 
> **2. Kiểm tra trực quan sơ đồ Box Model bằng F12 Computed:**
> - *[Thao tác: Nhấp chọn khối `.khung-bai-viet`]*
> - Nhìn vào sơ đồ hình chữ nhật nhiều màu sắc trong tab Computed:
>   - Lớp trong cùng màu xanh lam là Content với kích thước `860px` chiều rộng.
>   - Lớp thứ hai là Padding màu xanh lá cây bằng 0.
>   - Lớp thứ ba là Border màu vàng bằng 0.
>   - Lớp ngoài cùng màu cam là Margin với giá trị `margin-left` và `margin-right` bằng nhau, chứng minh cơ chế `margin: 0 auto` căn giữa hoàn hảo.
> 
> - *[Thao tác: Nhấp chọn khối `.than-bai`]*
> - Thầy cô có thể thấy ngay vùng Padding màu xanh lá cây hiện rõ viền đệm dày đúng `30px` ở cả 4 cạnh: trên, dưới, trái, phải. Chính lớp đệm này giữ cho toàn bộ nội dung văn bản bên trong luôn nằm lọt lòng trang nhã trong chiếc thẻ card trắng.
> 
> - *[Thao tác: Nhấp chọn khối `.cot-phai-co-vach`]*
> - Đây là minh chứng tuyệt vời nhất cho việc kiểm soát Box Model:
>   - Cạnh bên trái hiển thị rõ ràng: `border-left-width: 1px` màu xám.
>   - Ngay sát cạnh đó là `padding-left: 20px` màu xanh lá cây.
>   - Nhờ có 20px padding này, chữ *'Sản phẩm khuyến mãi'* cách vạch đứng một khoảng cách rất thông thoáng, không hề bị dính chặt hay đè lên đường kẻ.
> 
> **3. Kiểm tra tính toàn vẹn của `box-sizing: border-box`:**
> - *[Thao tác: Nhấp chọn ô input hoặc khối `.cot-trai-duoi`]*
> - Trong bảng Styles, khi em tích/bỏ tích thuộc tính `box-sizing: border-box`, kích thước tổng thể không hề bị xô lệch, chứng minh mô hình định cỡ hộp đã hoạt động ổn định và chính xác trên mọi phần tử.
> 
> **4. Kiểm tra Console và tính co dãn:**
> - Chuyển sang tab Console: Không có bất kỳ cảnh báo hay lỗi tải ảnh nào.
> - Bật Device Toolbar (`Ctrl + Shift + M`), thử kéo dãn màn hình: Nhờ `max-width: 860px`, giao diện co dãn rất mềm mại trên các độ phân giải khác nhau."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, LỖI HAY GẶP & LỜI CẢM ƠN (Mốc: 19:00 - 20:30 | Thời lượng: ~1.5 phút)

🎬 **Thao tác:** 
- Đóng F12, chuyển lại màn hình VS Code hoặc giao diện trang web toàn cảnh.
- Kết thúc với giọng đọc chân thành, cảm xúc và đĩnh đạc.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, qua quá trình hoàn thành Bài thực hành số 7, bản thân em đã đúc rút được những bài học cốt lõi sau:
> 
> - **Thứ nhất:** Luôn luôn khai báo `* { box-sizing: border-box; }` ở ngay đầu mọi dự án CSS. Đây là chiếc chìa khóa vàng giúp chúng ta làm chủ hoàn toàn kích thước của mọi phần tử mà không sợ bị phình to do padding hay border.
> - **Thứ hai:** Hiểu rõ khi nào dùng Padding và khi nào dùng Margin: Dùng Padding khi muốn tạo khoảng cách bên trong chiếc hộp (giữ màu nền), và dùng Margin khi muốn đẩy khoảng cách giữa các chiếc hộp khác nhau ra xa nhau.
> - **Thứ ba:** Tận dụng sáng tạo các thuộc tính viền đơn phương như `border-left`, `border-bottom` kết hợp với padding tương ứng để tạo ra các đường phân cách giao diện tinh tế thay vì phải dùng các thẻ `<hr>` thô kệch.
> 
> Bài thuyết minh Bài tập số 7 của em đến đây xin phép được khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo bộ môn *Phát triển ứng dụng Web cơ bản* đã dành thời gian theo dõi và đánh giá bài làm của em. Cảm ơn các bạn đã lắng nghe.
> 
> Kính chúc thầy cô luôn mạnh khỏe và hạnh phúc! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 7 — Sẵn sàng cho sinh viên Trần Trọng Hoàng Anh quay hình OBS Studio.*
