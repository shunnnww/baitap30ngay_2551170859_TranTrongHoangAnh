# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 6: THIẾT KẾ BẢNG MÓN NGON HÀ NỘI & BỘ CHỌN CSS CƠ BẢN

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file này trên điện thoại hoặc máy tính bảng để đọc theo, hoặc thu nhỏ ở góc màn hình OBS.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Đọc với giọng đĩnh đạc, rành mạch, nhấn nhá vào các thuật ngữ chuyên môn HTML/CSS.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, cuộn trang, chọn dòng code, thao tác F12 DevTools để video trực quan, sinh động.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng giúp bạn kiểm soát tiến độ nói trong khoảng 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Mốc: 00:00 - 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình ở độ phân giải Full HD 1080p.
- Mở Visual Studio Code hiển thị thư mục bài tập với 2 file `bai6.html` và `bai6.css`.
- Bật sẵn một tab Google Chrome bên cạnh hiển thị kết quả bài 6 với gam màu kem ấm áp và bảng món ngon Hà Nội.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn cùng toàn thể các bạn sinh viên đang theo dõi video báo cáo thực hành!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Trong video ngày hôm nay, em xin phép được trình bày và thuyết minh chuyên sâu về sản phẩm **Bài tập thực hành số 6: Thiết kế bảng danh sách món ngon Hà Nội và ứng dụng toàn diện các bộ chọn CSS cơ bản**.
> 
> Thưa thầy cô và các bạn, bảng biểu (HTML Table) là một trong những thành phần kinh điển và quan trọng nhất của lập trình web từ những ngày đầu sơ khai cho đến tận kỷ nguyên HTML5 hiện đại. Dù ngày nay chúng ta có rất nhiều hệ thống layout tiên tiến như Flexbox hay Grid, nhưng khi nói đến việc trình bày dữ liệu dạng ma trận hàng và cột có cấu trúc – như bảng điểm sinh viên, báo cáo tài chính, hay danh mục thực đơn ẩm thực – thì bảng biểu ngữ nghĩa vẫn là sự lựa chọn chuẩn mực số một.
> 
> Tuy nhiên, một bảng HTML thuần túy nếu không có CSS can thiệp sẽ vô cùng đơn điệu, thô cứng và rất khó theo dõi. Mục tiêu trọng tâm của Bài tập số 6 này được đặt ra nhằm giúp chúng em giải quyết trọn vẹn các thách thức kỹ thuật sau:
> 
> - Thứ nhất: Xây dựng cấu trúc bảng chuẩn ngữ nghĩa theo chuẩn W3C với đầy đủ các phân vùng chức năng `<thead>`, `<tbody>`, phân biệt rành mạch giữa ô tiêu đề cột `<th>` và ô dữ liệu `<td>`.
> - Thứ hai: Ứng dụng hệ thống **Bộ chọn CSS (CSS Selectors)** từ mức độ cơ bản như Element Selector, Class Selector, ID Selector đến các bộ chọn nâng cao như Child Selector, Descendant Selector và Pseudo-classes.
> - Thứ ba: Làm chủ kỹ thuật **Zebra-striping** bằng giả lớp cấu trúc `:nth-child(odd)` và `:nth-child(even)` nhằm tạo các dải màu nền xen kẽ, giảm tải áp lực thị giác cho người dùng khi đọc bảng danh sách dài.
> - Thứ tư: Kết hợp linh hoạt mô hình **Flexbox Layout** để đặt khối hình ảnh minh họa ẩm thực song song, cân đối bên cạnh bảng dữ liệu, tạo nên một bố cục tạp chí ẩm thực trang nhã và chuẩn mực.
> 
> Kịch bản video ngày hôm nay của em sẽ được dẫn dắt qua 6 phần cụ thể:
> 1. Tổng quan đề bài và lời mở đầu.
> 2. Cơ sở lý thuyết nền tảng về CSS Selectors, Specificity và Zebra-striping.
> 3. Giải thích chi tiết từng dòng thẻ cấu trúc HTML trong `bai6.html`.
> 4. Phân tích tường tận các thuộc tính định dạng trong `bai6.css`.
> 5. Thực hành demo trực tiếp trên trình duyệt, soi mã nguồn bằng F12 Elements và kiểm tra tính đáp ứng.
> 6. Tổng kết bài học kinh nghiệm, các lỗi sinh viên hay gặp và lời cảm ơn kết thúc.
> 
> Sau đây, em xin kính mời thầy cô và các bạn cùng bước vào nội dung chi tiết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Mốc: 02:30 - 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Chuyển chuột sang VS Code, mở rộng file `bai6.css`.
- Chỉ con trỏ chuột vào các dòng selector `body`, `.khung-bai-viet`, `.bang-mon-an thead th`, `.bang-mon-an tbody tr:nth-child(odd)`.

🗣️ **Lời đọc:**
> "Trước khi đi vào mổ xẻ mã nguồn, em xin dành ít phút để làm rõ 4 nền tảng lý thuyết cốt lõi chi phối toàn bộ cấu trúc và cách hiển thị của bài tập này:
> 
> **1. Khái niệm thứ nhất: Hệ thống Bộ chọn CSS (CSS Selectors) và Độ đặc hiệu (Specificity).**
> Bộ chọn CSS chính là công cụ giúp trình duyệt định vị chính xác phần tử HTML nào trên cây DOM sẽ được áp dụng các quy tắc thẩm mỹ.
> - **Element Selector (Bộ chọn phần tử):** Ví dụ như `body`, `table`, `th`, `td`. Bộ chọn này có độ ưu tiên thấp nhất, thang điểm Specificity là $(0, 0, 1)$, thường được dùng để thiết lập giá trị mặc định cho toàn bộ trang.
> - **Class Selector (Bộ chọn lớp):** Bắt đầu bằng dấu chấm, ví dụ `.khung-bai-viet`, `.bang-mon-an`. Đây là cách làm việc khuyến nghị trong kiến trúc CSS hiện đại vì tính tái sử dụng cao và độ ưu tiên vừa phải $(0, 1, 0)$.
> - **Combinator Selectors (Bộ chọn kết hợp):** Trong bài tập này, chúng em sử dụng *Descendant Selector* (Bộ chọn con cháu thông qua khoảng trắng), cụ thể là `.bang-mon-an thead th` và `.bang-mon-an tbody td`. Cú pháp này nói với trình duyệt rằng: chỉ áp dụng định dạng này cho thẻ `<th>` nằm bên trong `<thead>` của một bảng có class `.bang-mon-an`. Điều này giúp cô lập phạm vi định dạng, không làm ảnh hưởng đến các bảng khác nếu có trên cùng website.
> 
> **2. Khái niệm thứ hai: Kỹ thuật Zebra-striping với Pseudo-class `:nth-child`.**
> Khi hiển thị một danh sách gồm nhiều hàng dữ liệu, mắt người rất dễ bị hiện tượng 'nhảy dòng' – tức là đọc nhầm nội dung từ hàng trên xuống hàng dưới. Để giải quyết triệt để vấn đề này trong trải nghiệm người dùng (UX), kỹ thuật Zebra-striping ra đời.
> CSS cung cấp cho chúng ta bộ chọn giả lớp cấu trúc `:nth-child(an + b)`. Trong đó:
> - `:nth-child(odd)` đại diện cho các hàng lẻ ($1, 3, 5, 7, \dots$).
> - `:nth-child(even)` đại diện cho các hàng chẵn ($2, 4, 6, 8, \dots$).
> Nhờ đó, thay vì phải gán class thủ công cho từng thẻ `<tr>` trong HTML, chúng ta để cho trình duyệt tự động tính toán vị trí chỉ mục và tô màu xen kẽ cực kỳ sạch sẽ và thông minh.
> 
> **3. Khái niệm thứ ba: Cơ chế `border-collapse` trong HTML Table.**
> Theo mặc định của chuẩn hiển thị bảng, mỗi ô `<th>` và `<td>` đều sở hữu một đường viền độc lập, dẫn đến việc giữa các ô luôn có một khe hở nhỏ (gọi là border-spacing), làm cho bảng trông giống như bị viền đôi rất vụng về. Bằng việc áp dụng thuộc tính `border-collapse: collapse;` lên thẻ `<table>`, các đường viền cạnh nhau sẽ tự động gộp lại thành một đường kẻ đơn tinh tế, sắc nét.
> 
> **4. Khái niệm thứ tư: Kết hợp Flexbox để chia cột đối xứng.**
> Thay vì sử dụng kỹ thuật trôi nổi `float` kiểu cũ dễ gây vỡ dòng và phải clear float phức tạp, bài toán chia 2 cột (một cột chứa ảnh chiếc bát thức ăn và một cột chứa bảng) được xử lý hoàn hảo bằng `display: flex; gap: 30px; align-items: center;`. Nhờ vậy, hình ảnh và bảng tự động căn giữa theo trục dọc, tạo nên sự cân đối thị giác hoàn hảo."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai6.html`) (Mốc: 06:00 - 10:30 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai6.html`.
- Bôi đen nhẹ từng cụm mã nguồn từ dòng 1 đến dòng 67 theo nhịp đọc.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng đi vào mổ xẻ từng dòng code trong file cấu trúc `bai6.html`. Toàn bộ file gồm có 67 dòng code được xây dựng hoàn toàn chuẩn xác theo tiêu chuẩn HTML5:
> 
> - **Từ dòng 1 đến dòng 8:** Đây là phần mở đầu tài liệu (HTML Header metadata):
>   - Dòng 1: `<!DOCTYPE html>` định nghĩa tài liệu là HTML5 tiêu chuẩn, kích hoạt chế độ dựng hình chuẩn mực (Standards Mode) của trình duyệt.
>   - Dòng 2: `<html lang="vi">` chỉ định ngôn ngữ nội dung là tiếng Việt. Điều này rất có ý nghĩa với công cụ tìm kiếm SEO và các phần mềm đọc màn hình dành cho người khiếm thị.
>   - Dòng 4: `<meta charset="UTF-8">` sử dụng bảng mã ký tự Unicode 8-bit, đảm bảo hiển thị hoàn hảo các ký tự tiếng Việt có dấu như 'Bánh cuốn Thanh Trì', 'Chả cá Lã Vọng' mà không bao giờ bị lỗi font hay biến thành các ký tự vô nghĩa.
>   - Dòng 5: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` thiết lập tỷ lệ co dãn 1:1, giúp giao diện tự động thích ứng với chiều rộng màn hình thiết bị di động.
>   - Dòng 6: Thẻ `<title>` đặt tên tiêu đề tab trình duyệt: *'Bài 6 - Bảng danh sách món ăn'*.
>   - Dòng 7: `<link rel="stylesheet" href="bai6.css">` liên kết tệp định kiểu bên ngoài, giữ vững nguyên lý phân tách lớp giao diện và cấu trúc.
> 
> - **Tiếp tục đi vào phần `<body>`:**
>   - **Dòng 11:** Khối bọc ngoài cùng `<div class="khung-bai-viet">`. Đây là chiếc khung thẻ chính, giới hạn độ rộng trang và mang màu nền be ấm cúng làm nền tảng cho toàn bộ nội dung bên trong.
>   - **Dòng 12:** Thẻ tiêu đề cấp 1 `<h1 class="tieu-de">Các món ngon Hà Nội</h1>`. Em lựa chọn thẻ `<h1>` vì đây là đề mục cao nhất, thể hiện chủ đề duy nhất của toàn bộ trang báo.
> 
> - **Từ dòng 14 đến dòng 63: Cấu trúc khối 2 cột `.khung-hai-cot`:**
>   - Đây là trái tim của layout bài tập. Thẻ `<div>` này chứa 2 nhánh con trực tiếp:
>   
>   *Cột thứ nhất — Cột hình ảnh (Dòng 15 - 17):*
>   - `<div class="cot-anh">`: Được dành riêng để bố trí hình ảnh đại diện ẩm thực.
>   - Bên trong chứa thẻ `<img src="../Kho-anh/Bai06/Bat.gif" alt="Bát thức ăn" class="anh-minh-hoa">`. Đường dẫn tương đối trỏ tới thư mục `Kho-anh` dùng ảnh `Bat.gif`. Thuộc tính `alt="Bát thức ăn"` là bắt buộc theo tiêu chuẩn trợ năng W3C, phòng trường hợp mạng chậm không tải được ảnh thì người xem vẫn hiểu ảnh nói về cái gì.
>   
>   *Cột thứ hai — Cột bảng biểu (Dòng 19 - 62):*
>   - Được bao bọc trong `<div class="cot-bang">`, chứa bảng dữ liệu chính `<table class="bang-mon-an">`.
>   - **Dòng 21 đến dòng 26:** Khối `<thead>` định nghĩa phần đầu bảng. Bên trong có một hàng `<tr>` duy nhất chứa 2 cột tiêu đề:
>     - `<th class="cot-stt">STT</th>`: Cột số thứ tự, được gán class riêng để căn lề giữa và thu hẹp tỷ lệ độ rộng.
>     - `<th class="cot-ten">Tên món ăn</th>`: Cột tên món, được gán class để mở rộng độ rộng và căn lề trái tự nhiên.
>   - **Dòng 27 đến dòng 60:** Khối `<tbody>` định nghĩa phần thân bảng. Khu vực này gồm chính xác 8 thẻ `<tr>` chứa dữ liệu của 8 món ăn truyền thống đất Tràng An:
>     - Hàng 1: STT `1` - Bánh cuốn Thanh Trì.
>     - Hàng 2: STT `2` - Xôi Hà Nội.
>     - Hàng 3: STT `3` - Chả cá Lã Vọng.
>     - Hàng 4: STT `4` - Cháo Cóc.
>     - Hàng 5: STT `5` - Bánh Gai Ninh Giang.
>     - Hàng 6: STT `6` - Bún Thang Hà Nội.
>     - Hàng 7: STT `7` - Canh Lằng.
>     - Hàng 8: STT `8` - Vịt quay Lạng Sơn.
>     - Ở mỗi hàng, thẻ `<td class="o-stt">` chứa số thứ tự được gắn class riêng biệt để in đậm và căn giữa, còn tên món ăn nằm trong thẻ `<td>` thông thường.
> 
> Cấu trúc HTML của bài 6 được em thiết kế cực kỳ tinh gọn, hoàn toàn không có thẻ thừa, tuân thủ chặt chẽ tính ngữ nghĩa và sẵn sàng để CSS can thiệp định kiểu."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai6.css`) (Mốc: 10:30 - 15:00 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai6.css`.
- Lần lượt bôi đen từ dòng 5 đến dòng 96, vừa rê chuột vừa giải thích thông số màu mã HEX và thuộc tính flexbox, table.

🗣️ **Lời đọc:**
> "Bây giờ, em xin chuyển sang phân tích chi tiết bảng định dạng kiểu dáng `bai6.css` với 96 dòng code. Đây chính là lớp áo nghệ thuật mang lại vẻ đẹp thanh lịch, đậm chất ẩm thực Hà Thành cho trang web:
> 
> - **Đoạn mã số 1: Định dạng nền và phông chữ toàn trang (Dòng 5 đến dòng 10):**
>   - Bộ chọn `body`:
>     - `background-color: #f5f5f5;`: Màu xám khói trung tính, giúp làm dịu mắt người xem và tạo độ tương phản nhẹ với khung bài viết màu kem sáng ở bên trong.
>     - `font-family: Arial, sans-serif;`: Bộ phông chữ sans-serif không chân hiện đại, nét chữ sắc cạnh, dễ đọc trên mọi màn hình máy tính.
>     - `margin: 0; padding: 40px 15px;`: Xóa bỏ lề mặc định của trình duyệt và tạo khoảng đệm thông thoáng ở trên dưới 40px, hai bên 15px.
> 
> - **Đoạn mã số 2: Khung bài viết chính `.khung-bai-viet` (Dòng 12 đến dòng 19):**
>   - `max-width: 780px; margin: 0 auto;`: Giới hạn chiều rộng tối đa là 780 pixel và tự động căn giữa trục ngang màn hình thông qua kỹ thuật kinh điển `margin: 0 auto`.
>   - `background-color: #FDF8EF;`: Đây là mã màu kem vani rất đặc trưng của giấy kraft hay thực đơn nhà hàng truyền thống.
>   - `padding: 30px; border-radius: 4px;`: Khoảng đệm bên trong 30px giúp nội dung không dính vào viền, bo góc 4px tạo sự mềm mại.
>   - `box-shadow: 0 2px 8px rgba(0,0,0,0.06);`: Đổ bóng mờ cực nhẹ, tạo chiều sâu 3D tinh tế như một tấm thiệp nổi nhẹ lên mặt bàn.
> 
> - **Đoạn mã số 3: Tiêu đề chính `.tieu-de` (Dòng 21 đến dòng 28):**
>   - `color: #E65100;`: Sử dụng gam màu cam đất ấm áp, kích thích vị giác và thị giác.
>   - `text-align: center; font-size: 26px; font-weight: bold;`: Căn chữ vào chính giữa, cỡ chữ lớn 26px và in đậm để làm tiêu điểm chú ý.
>   - `margin-top: 0; margin-bottom: 25px;`: Triệt tiêu khoảng hở phía trên và tạo khoảng cách 25px ngăn cách với khối nội dung bên dưới.
> 
> - **Đoạn mã số 4: Bố cục Flexbox hai cột `.khung-hai-cot` (Dòng 30 đến dòng 50):**
>   - `.khung-hai-cot` được đặt `display: flex; gap: 30px; align-items: center;`:
>     - Thuộc tính `gap: 30px` thiết lập khoảng cách rành mạch giữa cột ảnh và cột bảng mà không cần phải dùng margin thủ công.
>     - `align-items: center;` giúp căn chỉnh chiếc bát hình ảnh nằm chính xác ở tâm giữa chiều cao của bảng món ăn, tạo sự cân bằng trọng lực tuyệt vời.
>   - `.cot-anh`: Đặt `width: 200px; flex-shrink: 0; text-align: center;`. Điểm then chốt ở đây là `flex-shrink: 0`, nó đảm bảo khi kích thước cửa sổ bị thu hẹp lại thì cột ảnh vẫn giữ nguyên độ rộng 200px, không bao giờ bị bóp méo hình dạng.
>   - `.anh-minh-hoa`: Sử dụng `max-width: 100%; height: auto; display: block;` – đây là công thức chuẩn mực cho Responsive Image trong thiết kế web hiện đại.
>   - `.cot-bang`: Được gán `flex: 1;`. Trong Flexbox, giá trị này cho phép cột bảng linh hoạt dãn rộng và chiếm trọn 100% không gian còn lại của khung chứa.
> 
> - **Đoạn mã số 5: Định kiểu bảng món ăn `.bang-mon-an` (Dòng 52 đến dòng 87):**
>   - `width: 100%; border-collapse: collapse; background-color: #ffffff;`: Bảng phủ đầy chiều rộng cột chứa, các đường viền gộp thành một đường duy nhất và nền trắng tinh khôi.
>   - Phần đầu bảng `.bang-mon-an thead th`:
>     - `background-color: #E65100; color: #FFFFFF; font-weight: bold; font-size: 15px; padding: 10px 12px;`: Hàng tiêu đề mang nền cam rực rỡ đồng bộ với tiêu đề chính, chữ trắng tương phản mạnh mẽ, đệm 10px trên dưới giúp hàng tiêu đề cao ráo, bề thế.
>   - Chia tỉ lệ 2 cột bằng class riêng:
>     - `.cot-stt { width: 20%; text-align: center; }`: Cột số thứ tự chỉ chiếm 20% và căn giữa.
>     - `.cot-ten { width: 80%; text-align: left; }`: Cột tên món chiếm trọn 80% còn lại và căn lề trái giúp mắt người đọc thuận tiện theo chiều từ trái qua phải.
>   - Phần ô dữ liệu `.bang-mon-an tbody td`:
>     - `padding: 9px 12px; font-size: 14px; color: #222222; border-bottom: 1px solid #E0D6C2;`: Đường viền đáy màu be nhạt tạo sự ngăn cách nhẹ nhàng giữa các món ăn mà không gây rối mắt.
>   - `.o-stt`: `text-align: center; font-weight: bold;` giúp con số thứ tự nổi bật rõ nét.
> 
> - **Đoạn mã số 6: Kỹ thuật đỉnh cao Zebra-striping (Dòng 89 đến dòng 95):**
>   - `.bang-mon-an tbody tr:nth-child(odd) { background-color: #FFFFFF; }`: Tô màu trắng tinh khiết cho các hàng lẻ 1, 3, 5, 7.
>   - `.bang-mon-an tbody tr:nth-child(even) { background-color: #FDF8EF; }`: Tô màu kem nhạt cho các hàng chẵn 2, 4, 6, 8.
>   - Sự xen kẽ nhịp nhàng giữa trắng và kem tạo nên hiệu ứng thị giác cực kỳ dễ chịu, vừa vặn hòa quyện vào màu nền của toàn bộ chiếc khung thẻ!"

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (Mốc: 15:00 - 19:00 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to trình duyệt Chrome hiển thị `bai6.html`.
- Nhấn phím `F12` mở cửa sổ DevTools.
- Kéo bảng Elements sang bên phải, chọn tab **Elements** và tab **Computed/Box Model**.
- Bật công cụ Toggle Device Toolbar (`Ctrl + Shift + M`).

🗣️ **Lời đọc:**
> "Sau khi đã mổ xẻ cặn kẽ mã nguồn, em xin kính mời thầy cô và các bạn cùng quan sát màn hình kiểm thử thực tế trên trình duyệt Google Chrome:
> 
> **1. Quan sát giao diện thị giác tổng quan:**
> - Như thầy cô có thể thấy, toàn bộ trang web hiển thị rất thanh thoát và chuẩn mực.
> - Tiêu đề *'Các món ngon Hà Nội'* với màu cam đất nổi bật đặt ngay ngắn ở chính giữa.
> - Bên cánh trái là hình ảnh chiếc bát thức ăn cổ truyền, sắc nét, không bị nhòe hay vỡ hình.
> - Bên cánh phải là bảng thực đơn 8 món ăn. Màu nền hàng tiêu đề cam ăn khớp 100% với tiêu đề chính. Các dòng trắng và kem xen kẽ nhau nhịp nhàng, đường viền phân cách mỏng nhẹ, tinh tế.
> 
> **2. Soi sâu vào cây phân cấp DOM bằng F12 Elements:**
> - *[Thao tác: Dùng công cụ chọn phần tử Inspect Element chỉ vào thẻ `<table class="bang-mon-an">`]*
> - Trên cửa sổ DevTools, thầy cô có thể thấy bảng `<table>` được trình duyệt nhận diện chính xác với kích thước đầy đủ `520px` chiều rộng.
> - *[Thao tác: Mở rộng nhánh `<tbody>`, rê chuột qua thẻ `tr:nth-child(1)` và `tr:nth-child(2)`]*
> - Khi em rê vào dòng số 1 (Bánh cuốn Thanh Trì), tab Styles bên phải hiển thị rõ ràng thuộc tính `tr:nth-child(odd)` kích hoạt màu nền `#FFFFFF`.
> - Chuyển chuột xuống dòng số 2 (Xôi Hà Nội), quy tắc `tr:nth-child(even)` lập tức được áp dụng màu nền `#FDF8EF`. Điều này chứng minh thuật toán pseudo-class hoạt động hoàn toàn tự động và chính xác 100% theo đúng tính toán logic của chúng em.
> 
> **3. Kiểm tra mô hình hộp Box Model của ô dữ liệu:**
> - *[Thao tác: Nhấp chọn một ô `<td>` và chuyển sang tab Computed]*
> - Sơ đồ Box Model hiển thị rất chi tiết:
>   - Vùng Content chứa chuỗi văn bản tên món.
>   - Vùng Padding trên dưới 9px, hai bên 12px được tô màu xanh lá cây đại diện.
>   - Viền đáy `border-bottom: 1px` màu be nhạt `#E0D6C2`.
>   - Margin bằng 0, không có khoảng cách thừa nào gây xô lệch bảng.
> 
> **4. Kiểm tra cửa sổ Console và tính tương thích màn hình:**
> - *[Thao tác: Bấm vào tab Console]*
> - Cửa sổ Console hoàn toàn sạch bóng, không có bất kỳ thông báo lỗi cú pháp, cảnh báo 404 hình ảnh hay tài nguyên nào bị thiếu.
> - *[Thao tác: Bấm phím tắt `Ctrl + Shift + M` để bật Device Toolbar]*
> - Em thử co dãn chiều rộng màn hình từ chế độ Desktop (1024px) về Tablet iPad Mini (768px) và màn hình điện thoại di động (400px).
> - Nhờ khai báo `max-width: 780px` và `width: 100%` kết hợp với `max-width: 100%` của ảnh, bố cục co dãn mượt mà, không hề xuất hiện hiện tượng vỡ khung hay thanh cuộn ngang khó chịu."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, LỖI HAY GẶP & LỜI CẢM ƠN (Mốc: 19:00 - 20:30 | Thời lượng: ~1.5 phút)

🎬 **Thao tác:** 
- Tắt F12 DevTools, chuyển lại màn hình VS Code hoặc giữ khung giao diện đẹp nhất.
- Giọng đọc chậm rãi, truyền cảm, tự tin và trang trọng.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, qua quá trình trực tiếp nghiên cứu, lập trình và kiểm thử Bài tập thực hành số 6, bản thân em đã đúc kết được những bài học kinh nghiệm kỹ thuật vô cùng quý giá:
> 
> - **Thứ nhất là bài học về ngữ nghĩa bảng:** Tuyệt đối không bao giờ dùng các thẻ `<div>` bừa bãi để giả lập bảng dữ liệu khi cần hiển thị thông tin dạng bảng, mà hãy sử dụng đúng bộ thẻ ngữ nghĩa `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`. Điều này vừa giúp mã nguồn trong sáng, vừa tối ưu hóa khả năng truy cập trợ năng cho người khuyết tật.
> - **Thứ hai là kinh nghiệm sử dụng `border-collapse: collapse;`:** Rất nhiều bạn sinh viên mới học thường thắc mắc tại sao bảng của mình luôn bị viền kép xấu xí, đó chính là do quên mất thuộc tính này.
> - **Thứ ba là sức mạnh của Pseudo-class `:nth-child`:** Giúp chúng ta viết mã CSS theo tư duy động, tách biệt hoàn toàn việc định kiểu ra khỏi dữ liệu thô HTML.
> 
> Video thuyết minh Bài tập thực hành số 6 của em đến đây xin được phép khép lại. 
> Em xin gửi lời cảm ơn chân thành nhất tới quý thầy cô giáo bộ môn *Phát triển ứng dụng Web cơ bản* đã luôn theo sát, chỉ bảo và truyền đạt cho chúng em những kiến thức nền tảng vững chắc. Cảm ơn các bạn sinh viên đã dành thời gian theo dõi video báo cáo này.
> 
> Kính chúc thầy cô luôn dồi dào sức khỏe và công tác tốt. Chúc các bạn sinh viên học tập thật tốt và làm chủ các kỹ năng lập trình web! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 6 — Sẵn sàng cho sinh viên Trần Trọng Hoàng Anh quay hình OBS Studio.*
