# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 27: TRANG SẢN PHẨM DU LỊCH VỚI CARD, MODAL HỘP THOẠI & ACCORDION FAQ (BOOTSTRAP 5)

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Môn học:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Tệp mã nguồn:** `bai27.html`

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Bố trí màn hình:** Chia đôi màn hình máy tính (nhấn `Windows + Mũi tên trái` cho VS Code mở `bai27.html`, `Windows + Mũi tên phải` cho Chrome mở trang bài 27).
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong ngoặc kép là **lời nói trực tiếp** của bạn. Hãy nói dõng dạc, phát âm chuẩn xác các từ khóa kỹ thuật: Modal, Backdrop, Accordion, Collapse, Data-bs-toggle, Data-bs-target, Dialog Centered.
   - 🎬 **Thao tác:** Hướng dẫn hành động chuột, click mở popup modal, bấm toggle accordion, đổi kích thước cửa sổ.
   - ⏱️ **Thời gian:** Mốc thời gian tương ứng giúp bạn làm chủ nhịp điệu thuyết trình chuẩn 16 - 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS quay toàn màn hình. Cửa sổ Chrome mở sẵn trang Danh lam thắng cảnh Bài 27.
- Rê chuột qua 3 thẻ Card du lịch và khu vực Accordion phía dưới.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo và toàn thể các bạn sinh viên đang theo dõi video thực hành ngày hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được trình bày và thuyết minh chi tiết về sản phẩm **Bài tập thực hành số 27: Xây dựng trang giới thiệu Danh lam thắng cảnh ứng dụng các linh kiện tương tác động chuyên sâu trong Bootstrap 5: Card, Modal Dialog và Accordion**.
> 
> Thưa thầy cô và các bạn, nếu như ở bài tập trước chúng ta đã làm quen với việc thu thập dữ liệu qua Form tĩnh, thì ở bài tập số 27 này, chúng ta bước sang một bước ngoặt lớn về trải nghiệm người dùng hiện đại: đó là xây dựng giao diện tương tác động dựa trên các linh kiện (Component-driven UI).
> 
> Trong thực tế phát triển các website thương mại điện tử hoặc cổng thông tin du lịch, việc nhồi nhét quá nhiều thông tin trên một trang màn hình sẽ khiến người dùng bị ngợp và khó chịu. Do đó, việc ứng dụng các mẫu hình thiết kế (Design patterns) như **Card** để tóm lược thông tin, **Modal popup** để xem chi tiết chuyên sâu mà không cần chuyển trang, và **Accordion** để gom gọn các câu hỏi thường gặp FAQ chính là tiêu chuẩn vàng của ngành công nghiệp web hiện nay.
> 
> Mục tiêu cốt lõi của bài tập số 27 gồm:
> - **Thứ nhất:** Xây dựng lưới danh mục sản phẩm 3 cột linh hoạt với linh kiện **Card**, tối ưu hóa hình ảnh đồng đều bằng thuộc tính `object-fit: cover`.
> - **Thứ hai:** Làm chủ cơ chế kích hoạt hộp thoại tương tác **Modal Popup** căn giữa màn hình (`modal-dialog-centered`) thông qua các thuộc tính dữ liệu HTML5 `data-bs-*` mà không cần phải viết một dòng JavaScript thủ công nào.
> - **Thứ ba:** Xây dựng thành phần sổ dọc **Accordion** thông minh, ứng dụng thuộc tính `data-bs-parent` để đảm bảo tại một thời điểm chỉ có duy nhất một câu hỏi được mở rộng, giúp giao diện luôn ngăn nắp và thanh lịch.
> - **Thứ tư:** Khai thác sức mạnh của gói thư viện JavaScript kết hợp **Bootstrap Bundle** (`bootstrap.bundle.min.js`) chứa sẵn công cụ tính toán vị trí nổi Popper.js.
> 
> Cấu trúc bài thuyết minh của em sẽ lần lượt đi qua 6 phần:
> 1. Giới thiệu tổng quan & Mục tiêu đề bài.
> 2. Cơ sở lý thuyết chuyên sâu về JavaScript Plugins và Data attributes trong Bootstrap 5.
> 3. Thuyết minh chi tiết từng dòng mã nguồn HTML trong file `bai27.html`.
> 4. Phân tích bảng định kiểu CSS và các class tiện ích Bootstrap.
> 5. Trình diễn demo tương tác thực tế: mở đóng Modal, toggle Accordion, và soi F12 Elements.
> 6. Tổng kết bài học kinh nghiệm và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bước vào Phần 2: Cơ sở lý thuyết nền tảng."

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển sang VS Code, cuộn đến dòng nhúng script `bootstrap.bundle.min.js` ở cuối file và các thuộc tính `data-bs-*` để nhấn mạnh.

🗣️ **Lời đọc:**
> "Để hiểu thấu đáo cách vận hành của trang web này, chúng ta cần nắm vững 4 khái niệm lý thuyết cốt lõi trong hệ sinh thái Bootstrap 5:
> 
> **1. Khái niệm thứ nhất: Cơ chế Data Attributes (`data-bs-*`) trong Bootstrap 5.**
> Kể từ Bootstrap 5, toàn bộ các thuộc tính kích hoạt bằng dữ liệu đều được đổi tiền tố từ `data-` thành `data-bs-` nhằm tránh xung đột với các thư viện JavaScript khác hoặc thuộc tính tùy biến của lập trình viên.
> Hai thuộc tính dữ liệu mang tính sống còn là:
> - `data-bs-toggle`: Khai báo loại hành vi tương tác mà phần tử này sẽ kích hoạt, ví dụ `data-bs-toggle="modal"` để mở hộp thoại, hoặc `data-bs-toggle="collapse"` để thu gọn/mở rộng khối nội dung.
> - `data-bs-target`: Chỉ định mục tiêu chịu tác động thông qua bộ chọn CSS (thường là một `#id`). Ví dụ: `data-bs-target="#modalSonDoong"` thông báo rằng khi người dùng nhấp vào nút này, đối tượng có id là `modalSonDoong` sẽ được gọi ra.
> Nhờ cơ chế này, chúng ta có thể tạo ra các hiệu ứng tương tác cực kỳ phức tạp theo mô hình khai báo (Declarative approach) mà không cần can thiệp mã lệnh JavaScript DOM thủ công.
> 
> **2. Khái niệm thứ hai: Kiến trúc Hộp thoại Modal (Modal Architecture).**
> Modal là một lớp phủ giao diện nổi lên trên bề mặt trang hiện tại. Cấu trúc chuẩn của một Modal trong Bootstrap 5 bao gồm 4 tầng phân cấp nghiêm ngặt:
> - Lớp ngoài cùng `.modal.fade`: Quản lý hiển thị ẩn/hiện và hiệu ứng mờ dần (Fade animation).
> - Lớp định vị `.modal-dialog`: Xác định kích thước và vị trí của hộp thoại. Khi kết hợp với `.modal-dialog-centered`, hộp thoại sẽ được tự động căn vào chính giữa tâm màn hình theo cả trục ngang và trục dọc.
> - Lớp khung chứa `.modal-content`: Tạo nền trắng, viền bo và đổ bóng sâu để tách biệt hoàn toàn với trang nền.
> - Bộ ba nội dung bên trong: `.modal-header` (chứa tiêu đề và nút đóng chữ X `btn-close`), `.modal-body` (chứa nội dung chi tiết), và `.modal-footer` (chứa các nút hành động như Đóng, Đặt ngay).
> Khi Modal mở lên, Bootstrap tự động thêm một lớp phủ màu đen bán trong suốt gọi là **Backdrop** phía sau và khóa cuộn trên thẻ `<body>` để ngăn chặn việc người dùng cuộn lung tung trang web.
> 
> **3. Khái niệm thứ ba: Cơ chế Accordion và Collapse có ràng buộc cha (`data-bs-parent`).**
> Accordion là một tập hợp các thẻ tiêu đề xếp chồng lên nhau. Khi người dùng nhấp vào một tiêu đề, khối nội dung tương ứng sẽ xổ xuống hoặc cuộn lên nhờ hiệu ứng chuyển đổi chiều cao (Height transition).
> Điều đặc biệt trong đề bài của chúng ta là: **Chỉ được mở duy nhất một mục tại một thời điểm**. Để làm được điều này, tất cả các khối nội dung `.accordion-collapse` bắt buộc phải chứa thuộc tính `data-bs-parent="#accordionDuLich"`. Thuộc tính này báo hiệu cho Bootstrap biết rằng: hễ có một panel nào trong nhóm cha này được mở ra, tất cả các panel còn lại phải tự động co lại đóng lại ngay lập tức.
> 
> **4. Khái niệm thứ tư: Thuộc tính CSS `object-fit: cover` trong hiển thị hình ảnh.**
> Khi làm việc với danh sách sản phẩm hay danh lam thắng cảnh, các hình ảnh tải về từ nhiều nguồn thường có tỷ lệ khung hình (Aspect ratio) và kích thước không đồng đều. Nếu chỉ đặt `height: 180px` thông thường, ảnh sẽ bị méo mó, co rúm hoặc giãn dẹt. Thuộc tính `object-fit: cover` giải quyết triệt để vấn đề này bằng cách lấp đầy toàn bộ khung kích thước được chỉ định mà vẫn bảo toàn tỷ lệ gốc của bức ảnh, phần thừa sẽ tự động được cắt tỉa gọn gàng."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT TỪNG DÒNG HTML (`bai27.html`) (06:00 - 10:30)

🎬 **Thao tác:** 
- Chuyển sang file `bai27.html` trên VS Code.
- Bôi đen tuần tự từ dòng 1 đến dòng 154 theo các phân đoạn nội dung.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng đi vào phân tích chi tiết từng dòng mã nguồn HTML của tệp `bai27.html`. Toàn bộ file có 154 dòng code được chia tách thành 4 phân vùng chức năng rất rõ ràng:
> 
> - **Từ dòng 1 đến dòng 15: Phần `<head>` và CSS cục bộ:**
>   - Dòng 1 đến 8: Khai báo chuẩn HTML5, ngôn ngữ tiếng Việt, mã hóa UTF-8, cấu hình Viewport di động và liên kết thư viện Bootstrap 5.3.3 qua CDN.
>   - Từ dòng 9 đến 14: Thẻ `<style>` cục bộ định nghĩa lớp `.anh-card` với chiều cao cố định `height: 180px;` và thuộc tính `object-fit: cover;`. Đây là điểm mấu chốt giúp cả 3 bức ảnh của 3 thắng cảnh luôn phẳng tắp, thẳng hàng nhau trên lưới.
> 
> - **Dòng 16 đến dòng 20: Mở thẻ `<body>` và Tiêu đề trang:**
>   - `<body class="bg-light py-5">`: Tạo phông nền sáng trang nhã và đệm trên dưới 48px.
>   - `<div class="container">`: Khối chứa trung tâm gom gọn nội dung trong giới hạn chiều rộng an toàn.
>   - Dòng 20: Thẻ `<h2 class="text-center text-danger fw-bold mb-4">Danh lam thắng cảnh</h2>`: Đặt tiêu đề chữ to màu đỏ đặc trưng `#dc3545`, in đậm `fw-bold`, căn giữa và tạo khoảng cách biên dưới 1.5rem.
> 
> - **Từ dòng 22 đến dòng 65: Hệ thống Lưới Thẻ Danh lam thắng cảnh (`row g-3 mb-4`):**
>   - Toàn bộ 3 thắng cảnh được bố trí trong một `<div class="row g-3 mb-4">` với khoảng rãnh 16px giữa các cột.
>   - Mỗi thẻ thắng cảnh được bao bọc trong một cột `<div class="col-sm-6 col-lg-4">`. Điểm ngắt này mang tính toán rất thông minh: trên màn hình máy tính lớn (Large) nó chiếm 4 cột (tức chia làm 3 cột bằng nhau); trên màn hình máy tính bảng (Small/Medium) nó chuyển thành `col-sm-6` (chia thành 2 cột mỗi hàng); còn trên điện thoại di động nhỏ thì nó chiếm trọn 12 cột (1 cột mỗi hàng).
>   - **Thẻ 1 (Hang Sơn Đoòng - Dòng 25 đến 36):**
>     - Thẻ `<div class="card h-100 shadow-sm border-0">`: Class `h-100` bắt buộc thẻ card luôn cao 100% bằng với chiều cao của cột cha, giúp 3 thẻ luôn có chiều cao đáy bằng nhau tăm tắp dù độ dài đoạn văn bản có lệch nhau.
>     - Ảnh đầu thẻ: `<img src="2-son-doong.jpg" class="card-img-top anh-card" alt="Hang Sơn Đoòng">`.
>     - Thân thẻ: `<div class="card-body d-flex flex-column p-3">`: Sử dụng Flexbox hướng cột. Đoạn văn `<p class="card-text text-muted small flex-grow-1">` được gắn thuộc tính `flex-grow-1`, nó sẽ tự động dãn nở chiếm toàn bộ không gian trống còn lại để đẩy nút bấm 'Chi tiết' luôn nằm sát mép đáy của thẻ.
>     - Nút mở Modal: `<button type="button" class="btn btn-danger w-100 btn-sm" data-bs-toggle="modal" data-bs-target="#modalSonDoong">Chi tiết</button>`. Nút màu đỏ nổi bật, rộng 100% thân card, gắn sẵn hai chìa khóa kích hoạt modal tương ứng.
>   - **Thẻ 2 (ĐBSCL - Dòng 38 đến 50) và Thẻ 3 (Động Phong Nha - Dòng 52 đến 64):**
>     - Cấu trúc hoàn toàn tương tự, chỉ thay đổi đường dẫn ảnh (`5-mekong.jpg`, `6-phong-nha.jpg`), tiêu đề, đoạn mô tả và thuộc tính `data-bs-target` lần lượt trỏ tới `#modalMekong` và `#modalPhongNha`.
> 
> - **Từ dòng 67 đến dòng 94: Linh kiện Accordion Câu hỏi thường gặp:**
>   - Khối bao ngoài: `<div class="accordion shadow-sm" id="accordionDuLich">`.
>   - **Mục thứ nhất: Kinh nghiệm du lịch (Dòng 69 đến 80):**
>     - Phần tiêu đề `<h2 class="accordion-header" id="headingKinhNghiem">`: Chứa thẻ `<button class="accordion-button fw-semibold py-2">` có `data-bs-toggle="collapse"` và `data-bs-target="#collapseKinhNghiem"`.
>     - Khối nội dung xổ xuống: `<div id="collapseKinhNghiem" class="accordion-collapse collapse show" data-bs-parent="#accordionDuLich">`. Lưu ý sự xuất hiện của từ khóa `show`: nó thông báo cho trình duyệt biết mục 'Kinh nghiệm du lịch' này sẽ được mở sẵn ngay khi người dùng vừa tải trang.
>     - Nội dung bên trong: Dặn dò chuẩn bị giấy tờ, đặt tour sớm và mang thuốc chống côn trùng.
>   - **Mục thứ hai: Chi phí dự kiến (Dòng 81 đến 92):**
>     - Thẻ button có class `collapsed` và `aria-expanded="false"`, biểu thị trạng thái đang đóng.
>     - Khối nội dung `#collapseChiPhi` không có từ khóa `show`, và cũng chứa `data-bs-parent="#accordionDuLich"`. Khi click mở mục này, Bootstrap sẽ tự động đóng mục Kinh nghiệm du lịch lại.
> 
> - **Từ dòng 96 đến dòng 149: Cấu trúc 3 Hộp thoại Modal chi tiết:**
>   - Cả 3 Modal đều có cấu trúc chuẩn mực: `<div class="modal fade" id="..." tabindex="-1">`. Thuộc tính `tabindex="-1"` giúp loại bỏ modal khỏi dòng điều hướng phím Tab khi nó đang ở trạng thái ẩn, đồng thời cho phép modal nhận sự kiện phím `Escape` để đóng lại.
>   - Thẻ `<div class="modal-dialog modal-dialog-centered">`: Căn giữa khung hình.
>   - Thẻ `<div class="modal-content">`: Chứa header có nút đóng `<button type="button" class="btn-close" data-bs-dismiss="modal"></button>`. Thuộc tính `data-bs-dismiss="modal"` là lệnh tích hợp sẵn của Bootstrap để đóng hộp thoại khi click.
>   - Phần thân `.modal-body`: Trình bày đoạn văn bản giới thiệu chi tiết về địa danh.
>   - Phần chân `.modal-footer`: Gồm nút 'Đóng' màu xám (`data-bs-dismiss="modal"`) và nút 'Đặt ngay' màu đỏ có gắn sự kiện JavaScript nội dòng `onclick="alert('Đã ghi nhận yêu cầu đặt tour!')"`, tạo phản hồi tức thì cho người dùng.
> 
> - **Dòng 151:** Nạp file script `bootstrap.bundle.min.js` để toàn bộ hiệu ứng Modal và Accordion hoạt động trơn tru."

---

## ⏱️ PHẦN 4: PHÂN TÍCH BẢNG ĐỊNH KIỂU CSS VÀ CLASS BOOTSTRAP (10:30 - 15:00)

🎬 **Thao tác:** 
- Mở VS Code soi vào đoạn `<style>` ở đầu file và các class trong body.
- Mở F12 DevTools bên Chrome, inspect phần tử Accordion để thấy cách Bootstrap biến đổi class `.collapsed` và góc xoay của mũi tên SVG.

🗣️ **Lời đọc:**
> "Tiếp tục bài thuyết minh, em xin phân tích sâu sắc các giải pháp CSS và các lớp tiện ích Bootstrap 5 đã được ứng dụng để tạo nên độ hoàn thiện cao cho sản phẩm:
> 
> **1. Kỹ thuật xử lý ảnh với CSS thuần `.anh-card`:**
> - Trong đoạn mã CSS từ dòng 9 đến 14:
>   ```css
>   .anh-card {
>       height: 180px;
>       object-fit: cover;
>   }
>   ```
> - Chiều cao cố định 180px tạo nên tỷ lệ vàng cho các thẻ Card trên desktop và tablet. Thuộc tính `object-fit: cover` hoạt động tương đương với thuộc tính `background-size: cover` trong CSS Background: nó tính toán tâm của bức ảnh và phóng to/thu nhỏ đều theo hai chiều để lấp đầy diện tích 180px mà không hề làm biến dạng vật thể trong ảnh.
> 
> **2. Kỹ thuật cân bằng chiều cao Card với Flexbox (`h-100` và `flex-grow-1`):**
> - Một trong những nỗi sợ lớn nhất của lập trình viên giao diện là khi các thẻ trong cùng một hàng có lượng chữ không đều nhau, thẻ thì dài, thẻ thì ngắn, khiến các nút bấm bị thụt thò nham nhở.
> - Trong bài tập này, chúng em đã áp dụng giải pháp kép vô cùng thông minh:
>   1. Gán `h-100` cho thẻ `.card`: ép card luôn kéo dài chạm đáy cột lưới.
>   2. Gán `d-flex flex-column` cho `.card-body` và gắn `flex-grow-1` cho đoạn văn `<p class="card-text">`. Đoạn văn bản sẽ tự động chiếm toàn bộ khoảng trống chênh lệch còn lại, ép nút 'Chi tiết' luôn luôn nằm vững chắc ở đáy card, tạo nên một đường thẳng tắp theo phương ngang giữa cả 3 thẻ sản phẩm!
> 
> **3. Cơ chế hoạt cảnh mũi tên Accordion (Accordion Arrow Icon Animation):**
> - Khi inspect vào thẻ `.accordion-button`, chúng ta sẽ thấy Bootstrap 5 sử dụng một mã giả phần tử `::after` chứa một biểu tượng vector SVG mũi tên nhọn.
> - Khi thẻ đang ở trạng thái mở, mũi tên chỉ xuống dưới và nền button đổi sang màu xanh lam nhạt `bg-primary-subtle` hoặc trắng.
> - Khi thẻ bị đóng, Bootstrap sẽ tự động thêm class `.collapsed`. Trong CSS của Bootstrap, khi có class `.collapsed`, thuộc tính `transform: rotate(-180deg)` sẽ bị hủy bỏ, mũi tên tự động xoay ngược lên trên một cách cực kỳ mượt mà nhờ hiệu ứng `transition: transform .2s ease-in-out;`.
> 
> **4. Hiệu ứng Backdrop và Modal Centered:**
> - Khi class `.modal-dialog-centered` được sử dụng, Bootstrap thiết lập `display: flex; align-items: center; min-height: calc(100% - 3.5rem);`. Nó tính toán toàn bộ chiều cao của khung nhìn trình duyệt (Viewport Height) và đưa chiếc hộp thoại vào vị trí trọng tâm thị giác của người dùng.
> - Class `.fade` điều khiển thuộc tính `opacity` và `transform: translate(0, -50px)` khi đóng, và chuyển thành `transform: none; opacity: 1;` khi mở, tạo cảm giác hộp thoại từ trên cao nhẹ nhàng bay xuống giữa màn hình."

---

## ⏱️ PHẦN 5: THỰC HÀNH DEMO TRÌNH DUYỆT & SOI F12 DEVTOOLS (15:00 - 18:30)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai27.html`.
- Thực hiện tuần tự các thao tác: bấm mở 3 modal, bấm đặt tour, bấm đóng modal, click đóng mở accordion, bật F12 responsive.

🗣️ **Lời đọc:**
> "Và bây giờ, em xin kính mời quý thầy cô và các bạn cùng chứng kiến phần chạy thử nghiệm thực tế các tương tác trên trình duyệt!
> 
> **Thao tác 1: Kiểm tra tương tác linh kiện Modal:**
> - Đầu tiên, tại thẻ số 1 - Hang Sơn Đoòng, em nhấp chuột vào nút màu đỏ **'Chi tiết'**.
> - *[Thao tác: Click nút Chi tiết thẻ 1]*
> - Ngay lập tức, một hộp thoại Modal hiện ra ngay chính giữa tâm màn hình với hiệu ứng trượt mờ vô cùng sang trọng! Lớp nền phía sau được phủ một màn đen trong suốt (`modal-backdrop`).
> - Tiêu đề hiển thị rõ ràng: *'Hang Sơn Đoòng'*, nội dung giới thiệu chi tiết về Vườn quốc gia Phong Nha - Kẻ Bàng.
> - Bây giờ em thử nhấp vào nút **'Đặt ngay'**.
> - *[Thao tác: Click nút Đặt ngay]*
> - Một thông báo trình duyệt bật lên: *'Đã ghi nhận yêu cầu đặt tour!'*. Em bấm OK.
> - Bây giờ để đóng modal, chúng ta có tới 3 cách:
>   1. Cách 1: Bấm vào nút 'Đóng' ở góc dưới chân modal.
>   2. Cách 2: Bấm vào dấu chữ X (`btn-close`) ở góc trên bên phải.
>   3. Cách 3: Nhấp chuột ra ngoài vùng màu đen của backdrop, hoặc nhấn phím `Escape` trên bàn phím.
> - Em thử bấm nút chữ X: Modal lập tức biến mất mượt mà.
> - Thử tiếp với thẻ thứ 2 - **ĐBSCL**: Click 'Chi tiết' -> Modal ĐBSCL mở ra chuẩn xác. Đóng lại.
> - Thử tiếp với thẻ thứ 3 - **Động Phong Nha**: Click 'Chi tiết' -> Modal Phong Nha hiển thị chuẩn xác.
> 
> **Thao tác 2: Kiểm tra tương tác độc quyền của Accordion:**
> - Nhìn xuống cụm câu hỏi FAQ phía dưới: Mục *'Kinh nghiệm du lịch'* hiện đang mở sẵn nhờ class `show`, mũi tên đang chúc xuống dưới.
> - Bây giờ, em nhấp chuột vào mục thứ hai: *'Chi phí dự kiến'*.
> - *[Thao tác: Click vào thanh Chi phí dự kiến]*
> - Thầy cô hãy quan sát chuyển động: Mục 'Chi phí dự kiến' từ từ mở rộng ra hiển thị con số từ 1.500.000 ₫ đến 5.000.000 ₫, đồng thời mục 'Kinh nghiệm du lịch' tự động co lại và đóng kín! Mũi tên của mục 1 xoay về vị trí đóng, mũi tên mục 2 xoay xuống.
> - Thuộc tính `data-bs-parent="#accordionDuLich"` đã hoạt động chính xác 100%, bảo đảm không bao giờ có 2 mục cùng mở tràn lan trên màn hình!
> 
> **Thao tác 3: Bật F12 Developer Tools soi cấu trúc DOM và Responsive:**
> - Em nhấn phím `F12` trên bàn phím.
> - **Tab Console:** Hoàn toàn trong sạch, không có lỗi script hay xung đột thư viện.
> - **Tab Elements:** Em mở lại Modal Sơn Đoòng. Thầy cô có thể thấy ngay trong cây DOM, thẻ `<div class="modal-backdrop fade show">` được Bootstrap tự động sinh ra và chèn vào sát đáy thẻ `<body>`. Đồng thời thẻ `<body>` được gắn thêm class `modal-open` và thuộc tính `overflow: hidden` để khóa cứng thanh cuộn trang. Khi em đóng modal, thẻ backdrop này lập tức được Bootstrap dọn dẹp biến mất khỏi DOM. Đây là cơ chế quản lý vòng đời (Lifecycle) cực kỳ tối ưu của Bootstrap JS.
> - **Kiểm tra Responsive bằng Device Toolbar (`Ctrl + Shift + M`):**
>   - Trên Desktop (1200px): 3 thẻ card nằm dàn hàng ngang 3 cột hoàn hảo.
>   - Co màn hình về kích thước iPad Mini (768px): Điểm ngắt `col-sm-6` kích hoạt, 2 thẻ card đầu nằm ở hàng trên, thẻ thứ 3 tự động chuyển xuống hàng dưới chiếm nửa màn hình.
>   - Co tiếp về màn hình điện thoại di động iPhone (390px): Cả 3 thẻ tự động xếp chồng thành 1 cột dọc thẳng tắp, ảnh không hề bị vỡ, nút bấm trải rộng 100% cực kỳ dễ chạm bằng ngón tay cái!"

---

## ⏱️ PHẦN 6: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (18:30 - 20:00)

🎬 **Thao tác:** 
- Tắt F12 DevTools, đưa màn hình về trạng thái trang du lịch đẹp nhất.
- Hướng ánh mắt về camera/màn hình, nói lời kết trang trọng.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô giáo và các bạn, việc hoàn thành trọn vẹn Bài tập thực hành số 27 đã mang lại cho em những kiến thức thực tế vô cùng giá trị:
> 
> - **Thứ nhất:** Nắm vững phương pháp thiết kế linh kiện hướng đối tượng của Bootstrap 5, hiểu rõ cách các thuộc tính dữ liệu `data-bs-toggle` và `data-bs-target` liên kết chặt chẽ với các ID phần tử để tạo ra tương tác không cần viết code JS dài dòng.
> - **Thứ hai:** Làm chủ cách khắc phục các vấn đề hiển thị hình ảnh bằng `object-fit: cover` và cân bằng chiều cao thẻ card bằng Flexbox `flex-grow-1`.
> - **Thứ ba: Những lỗi kinh nghiệm thực tế sinh viên rất hay mắc phải:**
>   - Quên nhúng tệp `bootstrap.bundle.min.js` ở cuối trang. Nếu chỉ có file CSS mà thiếu bundle JS, khi click vào nút Chi tiết hay click vào Accordion thì trang web sẽ trơ ra hoàn toàn không có phản hồi gì.
>   - Gõ sai ID trong `data-bs-target` (ví dụ thiếu dấu thăng `#` ở đầu), dẫn đến việc Bootstrap không tìm thấy phần tử modal để kích hoạt.
>   - Quên thuộc tính `data-bs-parent` trong Accordion, khiến các panel khi mở ra sẽ không tự động đóng panel cũ, làm vỡ bố cục trang.
> 
> Bài thuyết minh về Bài tập số 27 của em đến đây xin được phép kết thúc.
> Em xin bày tỏ lòng biết ơn sâu sắc đến thầy cô bộ môn Phát triển ứng dụng Web cơ bản đã luôn theo sát, chỉ bảo tận tình để chúng em hoàn thiện kỹ năng lập trình mỗi ngày. Cảm ơn các bạn đã lắng nghe.
> 
> Kính chúc thầy cô dồi dào sức khỏe và hạnh phúc, chúc các bạn luôn giữ vững ngọn lửa đam mê với nghề lập trình web! Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 27 — Sẵn sàng để đọc thu âm và ghi hình OBS Studio.*
