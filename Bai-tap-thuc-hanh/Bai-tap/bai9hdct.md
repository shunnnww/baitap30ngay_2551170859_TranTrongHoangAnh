# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 9: THIẾT KẾ TRANG HỒ SƠ CÁ NHÂN & LÀM CHỦ BỐ CỤC CSS FLEXBOX

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, Công cụ F12 Developer Tools, Phần mềm quay màn hình OBS Studio.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code, `Windows + Mũi tên phải` cho Chrome). Mở file này trên điện thoại hoặc máy tính bảng để đọc theo, hoặc thu nhỏ ở góc màn hình.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Đọc với giọng đĩnh đạc, tự tin, phát âm chuẩn xác các khái niệm Flexbox: Flex Container, Flex Items, Main Axis, Cross Axis, Flex-direction, Justify-content, Align-items, Flex-wrap.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, VS Code, bật công cụ Flexbox Inspector trong Chrome DevTools.
   - ⏱️ **Thời gian:** Mốc thời gian ước lượng giúp bạn kiểm soát tiến độ nói trong khoảng 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Mốc: 00:00 - 02:30 | Thời lượng: ~2.5 phút)

🎬 **Thao tác:** 
- Bật OBS quay toàn màn hình ở độ phân giải Full HD.
- Mở VS Code hiển thị thư mục với file `bai9.html` và `bai9.css`.
- Bật tab Google Chrome bên cạnh hiển thị chiếc thẻ hồ sơ CV Nguyễn Văn An nổi bật với dải gradient xanh dương và các thẻ kỹ năng dạng chip bo tròn hiện đại.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn cùng toàn thể các bạn sinh viên đang theo dõi video báo cáo thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Trong video ngày hôm nay, em xin phép được trình bày và thuyết minh chuyên sâu về sản phẩm **Bài tập thực hành số 9: Thiết kế trang hồ sơ cá nhân chuyên nghiệp và làm chủ toàn diện hệ thống bố cục CSS Flexible Box (Flexbox)**.
> 
> Thưa thầy cô và các bạn, trong lịch sử phát triển của công nghệ web, việc sắp xếp các phần tử nằm thẳng hàng, chia cột linh hoạt hay căn chỉnh một chiếc hộp vào chính giữa tâm màn hình từng là một trong những thử thách hóc búa nhất đối với các kỹ sư front-end khi phải sử dụng các kỹ thuật chắp vá như bảng `<table>` hay `float`.
> 
> Sự xuất hiện của CSS Flexbox đã tạo nên một cuộc cách mạng thực sự. Flexbox là một mô hình bố cục một chiều (One-dimensional Layout Model) cho phép chúng ta tính toán không gian, căn chỉnh và phân bổ khoảng cách giữa các phần tử con một cách cực kỳ thông minh, bất kể kích thước thực tế của chúng là cố định hay biến đổi linh hoạt.
> 
> Bài tập thực hành số 9 đặt ra bài toán thiết kế một thẻ hồ sơ năng lực cá nhân (Curriculum Vitae / Portfolio Card) hiện đại dành cho sinh viên công nghệ thông tin. Sản phẩm không chỉ đòi hỏi sự tinh tế về mặt thẩm mỹ thị giác mà còn là cơ hội thực chiến để chúng em ứng dụng toàn diện các cơ chế của Flexbox:
> - Căn giữa toàn bộ thẻ bài viết vào chính tâm màn hình theo cả 2 trục dọc và ngang (`min-height: 100vh`).
> - Chia tách bố cục thành 2 cột bất đối xứng: Cột trái phủ dải màu chuyển sắc Gradient sang trọng chứa thông tin cá nhân và liên hệ; Cột phải nền trắng chứa mục tiêu nghề nghiệp, học vấn và các kỹ năng.
> - Xử lý dàn trang danh sách kỹ năng công nghệ bằng kỹ thuật **Flex Wrap** tự động xuống dòng mượt mà khi hết khoảng trống.
> - Tạo hình ảnh đại diện Avatar tròn hoàn hảo và căn giữa nội dung ký tự chỉ bằng CSS thuần túy.
> 
> Kịch bản video ngày hôm nay gồm có 6 phần:
> 1. Lời mở đầu và mục tiêu đề bài.
> 2. Cơ sở lý thuyết toàn diện về CSS Flexbox: Hệ trục tọa độ và các thuộc tính cốt lõi.
> 3. Giải thích chi tiết từng dòng thẻ cấu trúc trong `bai9.html`.
> 4. Phân tích chi tiết từng thuộc tính định dạng trong `bai9.css`.
> 5. Thực hành demo tương tác, mở Flexbox Badge trên F12 DevTools để soi các đường gióng trục.
> 6. Tổng kết bài học kinh nghiệm, các lỗi hay gặp và lời cảm ơn kết thúc.
> 
> Sau đây, em xin kính mời quý thầy cô cùng bước vào nội dung chi tiết!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & NGUYÊN LÝ HOẠT ĐỘNG CỦA FLEXBOX (Mốc: 02:30 - 06:00 | Thời lượng: ~3.5 phút)

🎬 **Thao tác:** 
- Mở file `bai9.css`, rê chuột qua các khối có `display: flex`: từ thẻ `body`, `.the-ho-so`, `.anh-dai-dien`, `.thong-tin-lien-he li` đến `.danh-sach-ky-nang`.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô, trước hết em xin làm sáng tỏ các nguyên lý toán học và cơ chế vận hành của **CSS Flexbox**:
> 
> Khi một phần tử được khai báo `display: flex;`, nó lập tức trở thành một **Flex Container (Khung chứa Flex)**, và tất cả các phần tử con trực tiếp bên trong nó sẽ tự động biến thành các **Flex Items (Phần tử con Flex)**.
> 
> Hệ thống Flexbox hoạt động dựa trên hai trục tọa độ vuông góc:
> 1. **Main Axis (Trục chính):** Là trục điều hướng chính mà các phần tử con sẽ dàn trải theo. Mặc định, Main Axis chạy theo chiều ngang từ trái sang phải. Hướng của trục này được quyết định bởi thuộc tính `flex-direction`:
>    - `row` (mặc định): Nằm ngang từ trái sang phải.
>    - `column`: Nằm dọc từ trên xuống dưới.
>    - `row-reverse` và `column-reverse`: Đảo ngược chiều trục.
> 2. **Cross Axis (Trục vuông góc):** Luôn vuông góc 90 độ với Main Axis.
> 
> **Bộ 4 thuộc tính quyền năng nhất của Flexbox:**
> - **`justify-content`:** Kiểm soát cách phân bổ khoảng cách giữa các Flex Items dọc theo **Main Axis (Trục chính)**. Các giá trị thông dụng bao gồm: `flex-start` (dồn về đầu trục), `flex-end` (dồn về cuối trục), `center` (căn giữa tâm trục), `space-between` (dãn cách đều nhau, ép sát hai đầu biên), và `space-around`.
> - **`align-items`:** Kiểm soát cách căn chỉnh các Flex Items dọc theo **Cross Axis (Trục vuông góc)**. Các giá trị quan trọng: `stretch` (kéo dãn phủ kín chiều cao cha - mặc định), `center` (căn giữa tâm trục vuông góc), `flex-start`, `flex-end`.
> - **`flex-wrap`:** Mặc định các Flex Items sẽ luôn cố gắng co ép trên một dòng đơn (`nowrap`). Khi ta khai báo `flex-wrap: wrap;`, nếu tổng độ rộng của các phần tử con vượt quá chiều rộng của khung chứa cha, các phần tử thừa sẽ tự động ngắt xuống dòng tiếp theo một cách vô cùng trật tự.
> - **Bộ ba co dãn trên Flex Items (`flex-grow`, `flex-shrink`, `flex-basis`):** Viết tắt là `flex: 1;` cho phép phần tử tự do mở rộng để lấp đầy khoảng không gian trống, trong khi `flex-shrink: 0;` ngăn chặn phần tử bị co rúm lại khi khung cha bị thu hẹp.
> 
> Trong Bài tập 9, chúng em đã phối hợp nhịp nhàng các thuộc tính này ở nhiều tầng lồng nhau để tạo nên một giao diện thẻ CV hoàn mỹ."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai9.html`) (Mốc: 06:00 - 10:30 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai9.html`.
- Bôi đen tuần tự từng khối code từ dòng 1 đến dòng 61.

🗣️ **Lời đọc:**
> "Bây giờ, em xin phân tích chi tiết tệp cấu trúc `bai9.html` gồm 62 dòng code chuẩn Semantic HTML5:
> 
> - **Từ dòng 1 đến dòng 8: Khai báo tài liệu tiêu chuẩn:**
>   - Sau các khai báo `lang="vi"`, bảng mã ký tự `UTF-8` và viewport thiết bị di động, thẻ `<title>` định danh: *'Bài 9 - Trang hồ sơ cá nhân (CV)'*.
>   - Thẻ `<link rel="stylesheet" href="bai9.css">` liên kết bảng định kiểu.
> 
> - **Tiếp tục đi vào phần `<body>`:**
>   - **Dòng 11:** Khối bọc trung tâm `<div class="the-ho-so">`. Đây là chiếc thẻ card lớn chứa toàn bộ nội dung hồ sơ cá nhân.
>   - Bên trong thẻ này được phân chia thành 2 nhánh ngữ nghĩa độc lập:
>   
>   *Cột bên trái — `<aside class="cot-trai">` (Dòng 13 đến dòng 26):*
>   - Thẻ `<aside>` thể hiện thông tin phụ trợ mang tính định danh và liên hệ cá nhân:
>     - **Dòng 15:** `<div class="anh-dai-dien">NA</div>`: Đây là khối avatar đại diện độc đáo. Thay vì dùng ảnh raster JPG nặng nề, chúng em dùng hai ký tự viết tắt 'NA' (Nguyễn An) và sẽ dùng CSS để biến khối này thành hình tròn sang trọng.
>     - **Dòng 17:** `<h1 class="ho-ten">Nguyễn Văn An</h1>`: Tiêu đề `<h1>` khẳng định chủ nhân của bản hồ sơ.
>     - **Dòng 18:** `<p class="chuc-danh">Sinh viên CNTT · K67</p>`: Dòng chức danh nghề nghiệp.
>     - **Dòng 20 đến dòng 25:** Danh sách liên hệ `<ul class="thong-tin-lien-he">` gồm 4 mục có kèm biểu tượng Unicode tinh tế:
>       - Email: `<span class="bieu-tuong">✉</span> an.nv@tlu.edu.vn`
>       - Điện thoại: `<span class="bieu-tuong">☎</span> 0987 654 321`
>       - Nơi ở: `<span class="bieu-tuong">⌂</span> Hà Nội`
>       - GitHub: `<span class="bieu-tuong">⚑</span> github.com/annv`
>   
>   *Cột bên phải — `<main class="cot-phai">` (Dòng 29 đến dòng 57):*
>   - Thẻ `<main>` đại diện cho phần nội dung chuyên môn cốt lõi của bản CV, bao gồm 4 khối `<section class="muc-ho-so">`:
>     1. **Mục Giới thiệu (Dòng 30 - 33):** Tiêu đề `<h2>` *'Giới thiệu'* và đoạn văn `<p class="noi-dung">` mô tả niềm đam mê lập trình web và định hướng thực tập Front-end Developer.
>     2. **Mục Kỹ năng (Dòng 35 - 44):** Tiêu đề *'Kỹ năng'* đi kèm một container `<div class="danh-sach-ky-nang">` chứa 5 thẻ `<span class="chip-ky-nang">` biểu diễn các công nghệ: HTML5, CSS3, JavaScript, Bootstrap, và Git. Việc sử dụng thẻ `<span>` dạng chip giúp các kỹ năng hiển thị như những chiếc tem nhãn hiện đại.
>     3. **Mục Học vấn (Dòng 46 - 49):** Ghi rõ quá trình đào tạo tại Trường Đại học Thủy lợi (TLU) chuyên ngành Công nghệ thông tin từ năm 2023 đến nay.
>     4. **Mục Liên kết (Dòng 51 - 56):** Chứa các đường dẫn hữu ích như Portfolio cá nhân, Facebook, LinkedIn.
> 
> Cấu trúc HTML của bài 9 được tổ chức cực kỳ rành mạch, không có mã thừa, tạo nền tảng vững chắc để CSS Flexbox phát huy tối đa sức mạnh bố cục!"

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai9.css`) (Mốc: 10:30 - 15:00 | Thời lượng: ~4.5 phút)

🎬 **Thao tác:** 
- Chuyển tab sang `bai9.css`.
- Lần lượt bôi đen từ dòng 5 đến dòng 143, nhấn mạnh vào các thuộc tính Flexbox đa tầng.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng phân tích sâu tệp định kiểu `bai9.css` gồm 144 dòng code:
> 
> - **Dòng 5 đến dòng 18: Công thức kinh điển căn giữa màn hình bằng Flexbox:**
>   - `* { box-sizing: border-box; }`: Kiểm soát kích thước hộp.
>   - Bộ chọn `body`:
>     - `background-color: #f0f2f5; font-family: Arial, sans-serif; margin: 0; padding: 40px 15px;`.
>     - **Bộ bốn thuộc tính Flexbox quyền lực:**
>       `display: flex; justify-content: center; align-items: center; min-height: 100vh;`.
>       Đây chính là giải pháp tối thượng trong thiết kế web hiện đại: `min-height: 100vh` mở rộng chiều cao màn hình bằng 100% chiều cao khung nhìn trình duyệt. `justify-content: center` căn giữa theo trục ngang, và `align-items: center` căn giữa theo trục dọc. Chiếc thẻ hồ sơ luôn luôn nằm ngay chính tâm màn hình một cách kỳ diệu trên mọi kích thước màn hình máy tính!
> 
> - **Dòng 21 đến dòng 29: Thẻ hồ sơ hai cột `.the-ho-so`:**
>   - `max-width: 820px; width: 100%;`: Thẻ co dãn linh hoạt tối đa 820px.
>   - `background-color: #ffffff; border-radius: 16px;`: Nền trắng với góc bo cong mềm mại 16px.
>   - `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);`: Đổ bóng 3D dày dặn 25px tạo cảm giác chiếc thẻ nổi bồng bềnh lên trên nền xám.
>   - `overflow: hidden;`: Khóa tràn góc bo.
>   - **Khai báo then chốt:** `display: flex;`. Biến thẻ hồ sơ thành Flex Container cấp 2 để tự động dàn 2 khối `.cot-trai` và `.cot-phai` nằm song song nhau theo hàng ngang.
> 
> - **Dòng 32 đến dòng 89: Cột trái và các kỹ thuật căn chỉnh Flexbox con:**
>   - `.cot-trai`:
>     - `width: 280px; flex-shrink: 0;`: Cố định độ rộng 280px, không cho phép bị co nhỏ khi màn hình thu hẹp.
>     - `background: linear-gradient(135deg, #1565C0, #0d3f7a);`: Dải màu chuyển tiếp Gradient góc 135 độ từ xanh coban sang xanh thẫm, tạo cảm giác chuyên nghiệp, đáng tin cậy.
>     - `color: #ffffff; padding: 40px 25px; text-align: center;`.
>   - **Tạo Avatar tròn bằng Flexbox (Dòng 42 - 55):**
>     - `.anh-dai-dien`: `width: 100px; height: 100px; border-radius: 50%;`. Việc gán `border-radius: 50%` cho một khối hình vuông lập tức biến nó thành hình tròn hoàn hảo!
>     - `background-color: #ffffff; color: #1565C0; font-size: 32px; font-weight: bold;`.
>     - `display: flex; align-items: center; justify-content: center;`: Căn hai chữ cái 'NA' vào chính giữa tâm vòng tròn theo cả hai chiều!
>     - `margin: 0 auto 20px auto; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);`.
>   - **Danh sách liên hệ (Dòng 70 - 89):**
>     - `.thong-tin-lien-he li`: `display: flex; align-items: center; gap: 8px; margin-bottom: 12px;`.
>     - Mỗi dòng liên hệ là một hàng Flexbox nhỏ, giúp biểu tượng Unicode và chuỗi văn bản luôn thẳng hàng ngang và căn chuẩn trục dọc với nhau.
> 
> - **Dòng 92 đến dòng 143: Cột phải và kỹ thuật Flex Wrap cho Chip kỹ năng:**
>   - `.cot-phai`: Được gán `flex: 1; padding: 35px 35px;`. Chiếm toàn bộ không gian còn lại và đệm 35px thông thoáng.
>   - `.tieu-de-muc`: Màu xanh `#1565C0`, cỡ 16px in đậm, có đường kẻ đáy `border-bottom: 1px solid #e0e0e0;` tạo sự phân đoạn rõ ràng.
>   - **Kỹ thuật Flex Wrap cho Chip kỹ năng (Dòng 118 - 133):**
>     - `.danh-sach-ky-nang`: `display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;`.
>     - Thuộc tính `flex-wrap: wrap` ở đây chính là ngôi sao sáng: các thẻ kỹ năng sẽ nằm thẳng hàng ngang, nhưng khi độ dài của các nhãn vượt quá chiều rộng của cột, trình duyệt sẽ tự động ngắt xuống dòng tiếp theo mà không bị tràn viền hay mất chữ.
>     - `.chip-ky-nang`: `background-color: #e3f0ff; color: #0d3f7a; font-size: 12.5px; font-weight: bold; padding: 5px 14px; border-radius: 20px;`. Định dạng hình viên thuốc con nhộng (Pill badge) cực kỳ thời thượng.
>   - `.lien-ket a`: Màu xanh `#1565C0`, có gạch chân trang nhã."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (Mốc: 15:00 - 19:00 | Thời lượng: ~4 phút)

🎬 **Thao tác:** 
- Phóng to trình duyệt Chrome hiển thị `bai9.html`.
- Nhấn phím `F12` mở Developer Tools.
- Nhấp vào biểu tượng huy hiệu chữ `flex` màu tím cạnh thẻ `body`, thẻ `.the-ho-so`, và thẻ `.danh-sach-ky-nang`.
- Kéo thử Device Toolbar để chứng kiến tính co dãn linh hoạt của Flex Items.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời quý thầy cô cùng quan sát thực tế cách trình duyệt xử lý hệ thống Flexbox đa tầng này:
> 
> **1. Quan sát thị giác trực quan:**
> - Chiếc thẻ CV hiện lên nổi bật ngay chính tâm màn hình, cân đối từ trên xuống dưới, từ trái qua phải.
> - Cột màu xanh gradient bên trái với Avatar chữ trắng nổi bật, tạo phong thái công nghệ chững chạc.
> - Cột bên phải với nền trắng tinh khôi, các mục hồ sơ được phân tầng mạch lạc.
> - Các nhãn kỹ năng màu xanh dương nhạt hình viên thuốc xếp cạnh nhau đều tăm tắp với khoảng cách 8px đồng đều.
> 
> **2. Mở tính năng Flexbox Tooling trên F12 Elements:**
> - *[Thao tác: Bấm F12, trong tab Elements, nhấp chuột vào chữ 'flex' nhỏ màu tím cạnh thẻ `<body>`]*
> - Ngay lập tức, Chrome vẽ lên màn hình các đường lưới nét đứt màu tím hiển thị khung chứa Flex Container. Các trục căn giữa `justify-content: center` và `align-items: center` được mô phỏng trực quan.
> - *[Thao tác: Nhấp tiếp vào chữ 'flex' cạnh thẻ `<div class="danh-sach-ky-nang">`]*
> - Thầy cô có thể thấy rõ ràng: mỗi chip kỹ năng là một Flex Item độc lập. Khoảng cách giữa các chip được tô viền sọc biểu thị cho thuộc tính `gap: 8px`.
> 
> **3. Thử nghiệm co dãn màn hình và kiểm tra `flex-wrap`:**
> - *[Thao tác: Bật Device Toolbar (`Ctrl + Shift + M`), thu hẹp cửa sổ trình duyệt từ 1200px xuống 700px]*
> - Quan sát khu vực kỹ năng: Khi không gian cột phải hẹp lại, các chip kỹ năng 'Bootstrap' và 'Git' lập tức tự động rớt xuống dòng thứ hai một cách vô cùng uyển chuyển! Không hề có hiện tượng chữ bị cắt cụt hay thanh cuộn ngang xuất hiện. Đây chính là minh chứng sống động nhất cho sức mạnh tự thích ứng của `flex-wrap: wrap`!
> 
> **4. Kiểm tra Console:**
> - Chuyển sang tab Console: Không có bất kỳ cảnh báo lỗi hay xung đột mã nguồn nào."

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, LỖI HAY GẶP & LỜI CẢM ƠN (Mốc: 19:00 - 20:30 | Thời lượng: ~1.5 phút)

🎬 **Thao tác:** 
- Đóng DevTools, chuyển lại màn hình VS Code.
- Nói với giọng điệu đĩnh đạc, ấm áp và chân thành.

🗣️ **Lời đọc:**
> "Kính thưa quý thầy cô và các bạn, qua quá trình thiết kế và thực thi Bài thực hành số 9, bản thân em đã rút ra được những bài học kinh nghiệm sâu sắc về Flexbox:
> 
> - **Thứ nhất:** Để căn giữa hoàn hảo một khối phần tử trên toàn màn hình, công thức vàng luôn là gán cho thẻ cha `display: flex; justify-content: center; align-items: center; min-height: 100vh;`.
> - **Thứ hai:** Luôn kiểm soát `flex-shrink: 0;` cho các cột cố định như thanh Sidebar hay Avatar để tránh trường hợp phần tử con bị trình duyệt tự ý bóp méo khi màn hình thu nhỏ.
> - **Thứ ba:** Sử dụng thuộc tính `gap` thay vì margin trên các Flex Items. `gap` giúp khoảng cách giữa các phần tử luôn đều đặn mà không cần phải viết CSS phức tạp để xóa margin ở phần tử đầu và phần tử cuối.
> - **Thứ tư:** Kết hợp `flex-wrap: wrap` cho các danh sách tem nhãn động để giao diện luôn đạt độ tương thích thiết bị (Responsive) cao nhất.
> 
> Video thuyết minh Bài tập thực hành số 9 của em xin được tạm dừng tại đây.
> Em xin bày tỏ lòng biết ơn sâu sắc đến quý thầy cô giáo bộ môn *Phát triển ứng dụng Web cơ bản* đã truyền cảm hứng và trang bị cho chúng em những kỹ năng lập trình web hiện đại. Cảm ơn các bạn đã chú ý lắng nghe.
> 
> Kính chúc thầy cô thật nhiều sức khỏe và niềm vui trong cuộc sống! Em xin chân thành cảm ơn!"

---
*Hết kịch bản Bài 9 — Sẵn sàng cho sinh viên Trần Trọng Hoàng Anh quay hình OBS Studio.*
