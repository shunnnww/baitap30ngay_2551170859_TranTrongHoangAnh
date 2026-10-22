# KỊCH BẢN THUYẾT MINH CHI TIẾT (15 - 20 PHÚT)
# BÀI 16: XÂY DỰNG ỨNG DỤNG DANH SÁCH VIỆC CẦN LÀM (TO-DO LIST) TƯƠNG TÁC JAVASCRIPT

- **Người thực hiện:** Sinh viên **Trần Trọng Hoàng Anh**
- **Học phần:** Phát triển ứng dụng Web cơ bản
- **Thời lượng dự kiến:** 16 – 20 phút
- **Công cụ hỗ trợ:** Visual Studio Code, Trình duyệt Google Chrome / Microsoft Edge, F12 Developer Tools, Phần mềm quay màn hình OBS Studio.
- **Mã nguồn liên quan:** `bai16.html`, `bai16.css`, `bai16.js`.

---

## 📌 HƯỚNG DẪN CÁCH ĐỌC & QUAY OBS DÀNH CHO BẠN:
1. **Thiết lập màn hình ghi hình:** Chia đôi màn hình máy tính bằng phím tắt `Windows + Mũi tên trái` cho VS Code (mở sẵn 3 tệp `bai16.html`, `bai16.css`, `bai16.js`), `Windows + Mũi tên phải` cho trình duyệt Chrome mở `bai16.html`.
2. **Ký hiệu trong kịch bản:**
   - 🗣️ **Lời đọc:** Đoạn văn bản trong dấu ngoặc kép `> "..."` là **lời nói trực tiếp** của bạn. Hãy đọc với ngữ điệu tự tin, rành mạch, nhấn nhá vào các thuật ngữ chuyên ngành.
   - 🎬 **Thao tác:** Hướng dẫn cử chỉ chuột, bôi đen mã nguồn, thao tác gõ phím và tương tác trình duyệt.
   - ⏱️ **Mốc thời gian:** Định mức ước lượng giúp bạn kiểm soát tiến độ nói chuẩn xác từ 15 đến 20 phút.

---

## ⏱️ PHẦN 1: LỜI MỞ ĐẦU & TỔNG QUAN ĐỀ BÀI (Thời lượng: ~2 phút 30 giây | 00:00 - 02:30)

🎬 **Thao tác:** 
- Mở OBS ghi hình toàn màn hình hoặc cửa sổ trình duyệt đang hiển thị ứng dụng Danh sách việc cần làm.
- Rê chuột lướt nhẹ qua giao diện: tiêu đề nền tím, ô nhập liệu có nút Thêm, danh sách các công việc có checkbox tùy biến và nút Xoá màu đỏ pastel, dòng footer hiển thị số việc còn lại.

🗣️ **Lời đọc:**
> "Kính chào quý thầy cô giáo bộ môn và toàn thể các bạn sinh viên đang theo dõi video thuyết minh thực hành hôm nay!
> 
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên lớp *Phát triển ứng dụng Web cơ bản*.
> 
> Hôm nay, em rất vinh dự được đại diện nhóm thực hiện video báo cáo chuyên sâu và hướng dẫn chi tiết về **Bài tập thực hành số 16: Xây dựng ứng dụng Danh sách việc cần làm — To-Do List tương tác hoàn chỉnh bằng JavaScript**.
> 
> Trong thế giới phát triển ứng dụng Web Front-end, To-Do List được xem là bài tập kinh điển, là thước đo tiêu chuẩn vàng (Benchmark) để đánh giá khả năng làm chủ kiến thức nền tảng của một lập trình viên. Dù có giao diện trực quan và thân thiện, một ứng dụng To-Do List đạt chuẩn đòi hỏi sự kết hợp nhuần nhuyễn của cả 3 trụ cột công nghệ Web:
> 
> 1. **Cấu trúc ngữ nghĩa HTML5:** Xây dựng bố cục thẻ card ứng dụng gọn gàng, bao gồm phần đầu tiêu đề (`header`), khu vực nhập liệu (`input`), danh sách không thứ tự (`ul`) chứa các mục việc (`li`), và phần chân trang (`footer`) hiển thị trạng thái tổng kết.
> 2. **Thiết kế thẩm mỹ hiện đại với CSS3:** Áp dụng hệ màu tím Indigo `#6d28d9` sang trọng, bo góc mượt mà `border-radius: 20px`, hiệu ứng đổ bóng mờ ảo `box-shadow`, đường viền nét chấm `dotted` tinh tế ngăn cách các dòng việc, cùng với các ô checkbox tùy biến hoàn toàn bằng CSS mà không dùng input checkbox thô ráp mặc định.
> 3. **Xử lý tương tác thời gian thực với JavaScript:** Lập trình đầy đủ các thao tác CRUD cơ bản: Thêm việc mới (`Create`), Đọc và đếm số lượng việc chưa xong (`Read`), Đánh dấu hoàn thành gạch ngang chữ (`Update`), và Xoá bỏ công việc ra khỏi cây phân cấp DOM (`Delete`). Đặc biệt, bài toán ứng dụng kỹ thuật tối ưu hóa sự kiện **Event Delegation (Ủy quyền sự kiện)** giúp mã nguồn ngắn gọn, hiệu năng vượt trội và không bị rò rỉ bộ nhớ.
> 
> Kịch bản thuyết minh hôm nay của em sẽ được chia làm 6 phân đoạn chính:
> - Phần 1: Lời mở đầu và mục tiêu đề bài.
> - Phần 2: Cơ sở lý thuyết nền tảng (DOM Manipulation & Kỹ thuật Event Delegation).
> - Phần 3: Thuyết minh chi tiết từng khối mã nguồn HTML (`bai16.html`).
> - Phần 4: Thuyết minh chi tiết bảng định dạng kiểu dáng CSS (`bai16.css`).
> - Phần 5: Thuyết minh chuyên sâu các hàm xử lý logic JavaScript (`bai16.js`).
> - Phần 6: Thực hành tương tác demo trực tiếp trên trình duyệt, soi kiểm tra F12 DevTools Box Model, Console và kiểm thử các trường hợp dữ liệu biên.
> - Phần 7: Tổng kết bài học kinh nghiệm và lời cảm ơn.
> 
> Ngay sau đây, em xin phép bắt đầu đi vào phần cơ sở lý thuyết của bài tập!"

---

## ⏱️ PHẦN 2: CƠ SỞ LÝ THUYẾT & KIẾN THỨC CỐT LÕI (Thời lượng: ~3 phút 30 giây | 02:30 - 06:00)

🎬 **Thao tác:** 
- Chuyển cửa sổ sang VS Code, mở sẵn file `bai16.js`.
- Rê chuột vào hàm `danhSach.addEventListener('click', ...)` từ dòng 46 đến dòng 60 để chuẩn bị nhấn mạnh khái niệm Event Delegation.

🗣️ **Lời đọc:**
> "Trước khi đi vào từng dòng mã cụ thể, em xin phép tóm lược 4 khái niệm lý thuyết cốt lõi mà bài thực hành số 16 này vận dụng:
> 
> **Thứ nhất: Mô hình đối tượng tài liệu DOM (Document Object Model) và thao tác Node động.**
> Khi trình duyệt nạp tài liệu HTML, nó phân tích cú pháp và xây dựng nên một cây phân cấp các đối tượng gọi là DOM Tree. Trong JavaScript, chúng ta có thể tương tác với cây này trong thời gian thực thông qua các phương thức:
> - `document.createElement('li')`: Khởi tạo một phần tử DOM mới hoàn toàn trong bộ nhớ RAM mà chưa gắn lên giao diện.
> - `element.appendChild(newNode)`: Chèn phần tử vừa tạo vào vị trí cuối cùng của danh sách con thuộc phần tử cha.
> - `element.remove()`: Loại bỏ vĩnh viễn một Node ra khỏi cây DOM, giải phóng phần tử đó khỏi giao diện người dùng.
> 
> **Thứ hai: Kỹ thuật tối ưu hóa Event Delegation (Ủy quyền sự kiện).**
> Đây là kiến thức quan trọng bậc nhất trong bài tập này. Thông thường, một lập trình viên mới bắt đầu sẽ có thói quen: mỗi khi tạo ra một mục việc mới, họ lại gắn một hàm lắng nghe `addEventListener('click')` vào nút 'Xoá' và một hàm khác vào ô checkbox của mục đó.
> Cách làm này có hai nhược điểm chí mạng:
> - Một là gây lãng phí tài nguyên RAM và suy giảm hiệu năng nghiêm trọng khi danh sách có hàng trăm hoặc hàng ngàn phần tử.
> - Hai là dễ dẫn tới hiện tượng rò rỉ bộ nhớ (Memory Leaks) nếu các phần tử bị xoá đi nhưng bộ lắng nghe sự kiện vẫn còn lơ lửng trong bộ nhớ.
> 
> Thay vào đó, chúng em áp dụng nguyên lý **Event Bubbling (Sự kiện nổi bọt)**: Mọi sự kiện click trên các phần tử con (`button`, `span`) đều sẽ nổi bọt ngược lên thẻ cha `<ul id="danh-sach">`. Chúng ta chỉ cần gắn **duy nhất một hàm lắng nghe sự kiện** tại thẻ `<ul>` cha. Khi có sự kiện xảy ra, thông qua thuộc tính `e.target` và phương thức `e.target.closest('.muc-viec')`, JavaScript sẽ xác định chuẩn xác đối tượng nào vừa được bấm và thực thi hành động tương ứng.
> 
> **Thứ ba: Phương thức classList.toggle() và Quản lý trạng thái giao diện.**
> Thay vì can thiệp trực tiếp vào thuộc tính kiểu nội dòng `element.style`, phương pháp lập trình Front-end chuẩn mực là phân tách rõ ràng giữa trạng thái logic và giao diện hiển thị. Chúng em sử dụng `mucViec.classList.toggle('hoan-thanh')`. Phương thức `toggle()` hoạt động như một chiếc công tắc: nếu class `hoan-thanh` chưa có thì nó sẽ thêm vào, nếu đã có rồi thì nó sẽ gỡ bỏ đi. CSS sẽ đảm nhận toàn bộ việc đổi màu viền, đổ nền tím cho checkbox và gạch ngang dòng chữ.
> 
> **Thứ tư: Lắng nghe sự kiện bàn phím phím Enter (KeyboardEvent).**
> Để nâng cao trải nghiệm người dùng (UX), ngoài việc nhấp chuột vào nút 'Thêm', người dùng có thể gõ nội dung và nhấn phím Enter trên bàn phím. Sự kiện `keydown` kết hợp kiểm tra `e.key === 'Enter'` sẽ lập tức kích hoạt hàm thêm việc một cách tự nhiên và liền mạch."

---

## ⏱️ PHẦN 3: THUYẾT MINH CHI TIẾT MÃ NGUỒN HTML (`bai16.html`) (Thời lượng: ~4 phút | 06:00 - 10:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai16.html` trên VS Code.
- Bôi đen lần lượt từng đoạn mã từ dòng 1 đến dòng 52 khi thuyết minh đến đoạn tương ứng.

🗣️ **Lời đọc:**
> "Bây giờ, em xin kính mời thầy cô và các bạn cùng đi vào phân tích chi tiết từng khối mã trong tệp `bai16.html`. Tệp này gồm 52 dòng code chuẩn ngữ nghĩa HTML5:
> 
> - **Từ dòng 1 đến dòng 8 là phần khai báo Head chuẩn:**
>   - Dòng 1: `<!DOCTYPE html>` định nghĩa chuẩn tài liệu HTML5.
>   - Dòng 2: `<html lang="vi">` khai báo ngôn ngữ trang là tiếng Việt, hỗ trợ công cụ dịch thuật và bộ đọc màn hình.
>   - Dòng 4: `<meta charset="UTF-8">` bảo đảm hiển thị tiếng Việt có dấu chuẩn Unicode UTF-8 trên mọi trình duyệt.
>   - Dòng 5: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` đảm bảo tỷ lệ hiển thị chuẩn xác và khả năng co dãn phản hồi (Responsive) trên màn hình thiết bị di động.
>   - Dòng 6: `<title>` đặt tiêu đề thẻ trình duyệt là *'Bài 16 - Danh sách việc cần làm'*.
>   - Dòng 7: Thẻ `<link rel="stylesheet" href="bai16.css">` liên kết tệp định kiểu ngoại vi, giữ cho mã nguồn HTML luôn trong sáng và độc lập.
> 
> - **Tiếp tục từ dòng 9 đến dòng 47 trong thẻ `<body>`:**
>   Toàn bộ ứng dụng được bao bọc trong một khối chứa trung tâm duy nhất là `<div class="the-ung-dung">`. Bên trong khối này được chia thành 4 khu vực chức năng rõ rệt:
> 
>   1. **Khu vực 1: Phần đầu thẻ `<header class="dau-the">` (Dòng 13 đến dòng 16):**
>      - Thẻ `<h2>` mang class `tieu-de-chinh` chứa tên ứng dụng *'Danh sách việc cần làm'*.
>      - Thẻ `<p>` mang class `mo-ta-phu` tóm tắt nhanh tính năng của bài tập: *'Thêm việc mới, đánh dấu hoàn thành hoặc xoá — tất cả bằng JavaScript.'*. Phần đầu này sẽ được phủ màu tím đồng bộ tạo điểm nhấn thị giác mạnh mẽ.
> 
>   2. **Khu vực 2: Khung nhập liệu `<div class="khung-nhap-lieu">` (Dòng 19 đến dòng 22):**
>      - Thẻ `<input type="text" id="o-nhap-viec">` với thuộc tính `placeholder="Nhập việc cần làm..."` và giá trị khởi tạo mẫu là *'Hoàn thành bài tập Lập trình Web'*. Phần tử này có `id="o-nhap-viec"` để script dễ dàng truy xuất giá trị nhập.
>      - Kế tiếp là nút `<button type="button" id="btn-them" class="btn-them">Thêm</button>`. Chú ý thuộc tính `type="button"` được khai báo tường minh nhằm đảm bảo nút không vô tình kích hoạt hành vi gửi form mặc định.
> 
>   3. **Khu vực 3: Danh sách công việc `<ul id="danh-sach" class="danh-sach">` (Dòng 25 đến dòng 41):**
>      - Đây là nơi chứa các mục việc động. Trong mã nguồn khởi tạo ban đầu, em đã xây dựng sẵn 3 thẻ `<li>` mang class `muc-viec` để làm dữ liệu mẫu trực quan:
>        - Thẻ `<li>` thứ nhất có thêm class `hoan-thanh` với nội dung *'Đọc chương HTML5 cơ bản'*.
>        - Thẻ `<li>` thứ hai: *'Làm bài tập CSS Grid'*.
>        - Thẻ `<li>` thứ ba: *'Quay video OBS nộp bài'*.
>      - Cấu trúc con bên trong mỗi thẻ `<li>` được chuẩn hóa thành 3 phần tử thành phần:
>        - `<span class="o-danh-dau"></span>`: Khối vuông đóng vai trò nút checkbox tùy biến.
>        - `<span class="noi-dung-viec">`: Chứa chuỗi ký tự mô tả công việc.
>        - `<button type="button" class="btn-xoa">Xoá</button>`: Nút xoá màu đỏ nhạt nằm ở góc phải mỗi hàng.
> 
>   4. **Khu vực 4: Phần chân thẻ `<footer class="chan-the">` (Dòng 44 đến dòng 46):**
>      - Chứa thẻ `<span id="so-viec-con">Còn 2 việc chưa hoàn thành</span>`. Thẻ này mang `id="so-viec-con"` để JavaScript có thể cập nhật con số thống kê theo thời gian thực mỗi khi danh sách có biến động.
> 
> - **Dòng 49:** Thẻ `<script src="bai16.js"></script>` được đặt ở vị trí cuối cùng ngay trước thẻ đóng `</body>`. Đây là chuẩn thực hành tốt nhất trong kiến trúc Front-end, đảm bảo toàn bộ cây phân cấp DOM của giao diện đã được trình duyệt phân tích và dựng sẵn trước khi mã JavaScript bắt đầu chạy."

---

## ⏱️ PHẦN 4: THUYẾT MINH CHI TIẾT BẢNG ĐỊNH KIỂU CSS (`bai16.css`) (Thời lượng: ~4 phút | 10:00 - 14:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai16.css` trên VS Code.
- Cuộn từ từ qua từng khối định kiểu, bôi đen các đoạn code quan trọng: flexbox căn giữa, mã màu tím `#6d28d9`, hiệu ứng checkbox và đường viền nét chấm `border-bottom: 1.5px dotted #ede9fe`.

🗣️ **Lời đọc:**
> "Tiếp theo, em xin phép phân tích tệp định dạng kiểu dáng `bai16.css` gồm 159 dòng mã, mang lại vẻ đẹp hiện đại và chuyên nghiệp cho ứng dụng:
> 
> - **Quy tắc Reset chuẩn toàn cục (Dòng 5 đến dòng 9):**
>   - Bộ chọn dấu hoa thị `*` thiết lập `box-sizing: border-box; margin: 0; padding: 0;`. Thuộc tính này đảm bảo rằng độ rộng và chiều cao quy định của một phần tử sẽ bao hàm luôn cả phần đệm `padding` và độ dày đường viền `border`, giúp việc tính toán kích thước bố cục luôn luôn chuẩn xác tuyệt đối.
> 
> - **Định dạng thẻ `<body>` (Dòng 11 đến dòng 19):**
>   - Màu nền `background-color: #eef2f6;`: Tông màu xám xanh dịu mát, tạo cảm giác thư thái cho mắt người dùng.
>   - Phông chữ hệ thống `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`: Giúp văn bản hiển thị sắc nét, mượt mà trên cả hệ điều hành Windows, macOS và Android.
>   - Bộ bốn thuộc tính Flexbox: `min-height: 100vh; display: flex; justify-content: center; align-items: center;`: Căn toàn bộ thẻ ứng dụng vào chính giữa tâm màn hình máy tính theo cả trục ngang và trục dọc.
> 
> - **Khung thẻ ứng dụng `.the-ung-dung` (Dòng 22 đến dòng 29):**
>   - Chiều rộng `width: 100%; max-width: 600px;` giúp thẻ vừa vặn tuyệt đẹp trên máy tính và tự động co lại trên màn hình điện thoại di động nhỏ hơn.
>   - Nền trắng tinh khiết `#ffffff`, các góc được bo tròn mềm mại với `border-radius: 20px;`.
>   - Đổ bóng nhẹ nhàng bằng `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);` tạo cảm giác khối thẻ nổi bật có chiều sâu 3D trên nền xám xanh.
>   - `overflow: hidden;`: Thuộc tính quan trọng giúp phần nền màu tím của header ở bên trong không bị tràn ra ngoài 4 góc đã bo tròn của thẻ cha.
> 
> - **Phần đầu thẻ `.dau-the` (Dòng 32 đến dòng 48):**
>   - Phủ màu nền tím hoàng gia đặc trưng `background-color: #6d28d9;`, toàn bộ chữ đổi thành màu trắng `#ffffff`.
>   - Tiêu đề chính `.tieu-de-chinh` có kích thước 21px in đậm `font-weight: 700`.
>   - Dòng mô tả phụ `.mo-ta-phu` có kích cỡ 13px và độ trong suốt nhẹ `opacity: 0.9` tạo sự phân cấp thị giác rõ ràng.
> 
> - **Khung nhập liệu `.khung-nhap-lieu` (Dòng 51 đến dòng 86):**
>   - Bố cục dùng Flexbox với `gap: 12px` tạo khoảng cách thoáng đãng giữa ô nhập và nút bấm.
>   - Ô input có thuộc tính `flex: 1` giúp ô tự động chiếm trọn vẹn toàn bộ phần không gian trống còn lại trên hàng ngang. Khi người dùng nhấp chuột vào ô (trạng thái `:focus`), đường viền chuyển sang màu tím `#6d28d9` và `outline: none` để loại bỏ viền đen mặc định của trình duyệt.
>   - Nút bấm `.btn-them`: Nền tím `#6d28d9`, chữ trắng, bo góc 8px. Hiệu ứng `:hover` chuyển sang màu tím đậm hơn `#5b21b6` tạo phản hồi tương tác cực kỳ bắt mắt.
> 
> - **Danh sách mục việc `.danh-sach` và từng mục `.muc-viec` (Dòng 89 đến dòng 152):**
>   - Bỏ dấu đầu dòng danh sách bằng `list-style: none;`.
>   - Mỗi dòng việc `.muc-viec` được dàn hàng ngang bằng Flexbox với `align-items: center;`.
>   - Điểm đặc sắc về thẩm mỹ: Đường viền phân cách bên dưới mỗi mục việc là đường viền nét chấm màu tím nhạt `border-bottom: 1.5px dotted #ede9fe;`.
>   - Ô đánh dấu `.o-danh-dau`: Kích thước vuông vắn 22px x 22px, viền tím nhạt `#a78bfa`, bo tròn góc 6px. Khi mục việc có thêm class `.hoan-thanh`, ô này sẽ được đổi nền tím đặc `#6d28d9` và viền tím đồng màu.
>   - Nội dung việc `.noi-dung-viec`: Khi có class `.hoan-thanh`, dòng chữ sẽ được gạch ngang với `text-decoration: line-through;` và màu chữ làm mờ sang màu xám nhạt `#94a3b8`. Thuộc tính `user-select: none;` giúp người dùng nhấp chuột nhiều lần không bị bôi đen văn bản khó chịu.
>   - Nút xoá `.btn-xoa`: Sử dụng tông màu đỏ pastel trang nhã với nền đỏ nhạt `#fee2e2`, chữ đỏ tươi `#dc2626`, khi rê chuột chuyển sang `#fecaca`.
> 
> - **Phần chân thẻ `.chan-the` (Dòng 154 đến dòng 158):**
>   - Phông chữ 13.5px màu xám đá `#64748b` hiển thị thông tin số việc chưa hoàn thành một cách khiêm tốn nhưng rõ ràng."

---

## ⏱️ PHẦN 5: THUYẾT MINH CHUYÊN SÂU JAVASCRIPT (`bai16.js`) (Thời lượng: ~4 phút | 14:00 - 18:00)

🎬 **Thao tác:** 
- Chuyển sang tab `bai16.js`.
- Bôi đen từng hàm: `capNhatDem()`, `themViec()`, và khối `danhSach.addEventListener('click', ...)`.

🗣️ **Lời đọc:**
> "Bây giờ, chúng ta sẽ bước vào trái tim tương tác của ứng dụng: tệp tin kịch bản `bai16.js` gồm 61 dòng code được tổ chức chặt chẽ và mạch lạc:
> 
> - **Khởi tạo và truy xuất các phần tử DOM (Dòng 5 đến dòng 8):**
>   - Chúng em sử dụng `document.getElementById` để lưu trữ sẵn các tham chiếu của 4 phần tử trọng yếu vào các biến hằng số:
>     - `oNhapViec`: Tham chiếu đến ô nhập liệu văn bản.
>     - `btnThem`: Tham chiếu đến nút bấm Thêm.
>     - `danhSach`: Tham chiếu đến thẻ `<ul>` chứa danh sách công việc.
>     - `soViecCon`: Tham chiếu đến thẻ `<span>` hiển thị số việc còn lại dưới chân trang.
>   - Việc lưu trữ biến từ đầu giúp tối ưu hiệu năng truy vấn DOM, tránh việc phải duyệt lại cây DOM nhiều lần.
> 
> - **Hàm thứ nhất: `capNhatDem()` (Dòng 11 đến dòng 16):**
>   - Hàm này chịu trách nhiệm tính toán và đồng bộ lại con số thống kê công việc:
>     - Dòng 12: `const tongSo = danhSach.querySelectorAll('.muc-viec').length;` đếm tổng số mục việc hiện có trong danh sách.
>     - Dòng 13: `const daXong = danhSach.querySelectorAll('.muc-viec.hoan-thanh').length;` sử dụng bộ chọn kép để đếm chính xác những mục việc đã được gắn class `hoan-thanh`.
>     - Dòng 14: `const conLai = tongSo - daXong;` tính toán số việc còn dang dở.
>     - Dòng 15: Cập nhật chuỗi ký tự bằng Template Literals: `soViecCon.textContent = \`Còn \${conLai} việc chưa hoàn thành\`;`.
> 
> - **Hàm thứ hai: `themViec()` (Dòng 19 đến dòng 35):**
>   - Hàm này xử lý luồng tạo công việc mới:
>     - Dòng 20: Lấy giá trị chuỗi và cắt bỏ toàn bộ khoảng trắng thừa ở hai đầu bằng `oNhapViec.value.trim()`.
>     - Dòng 21: Kiểm tra điều kiện bảo vệ (Guard Clause): `if (!noiDung) return;`. Nếu người dùng chỉ gõ phím cách hoặc để trống, hàm lập tức dừng thực thi, ngăn chặn việc tạo ra các mục việc rỗng vô nghĩa.
>     - Dòng 23 - 24: Khởi tạo phần tử `const li = document.createElement('li');` và gán `li.className = 'muc-viec';`.
>     - Dòng 25 - 29: Sử dụng thuộc tính `innerHTML` kết hợp chuỗi tiêu chuẩn để nhúng nhanh 3 phần tử con vào bên trong thẻ `li`: ô đánh dấu, nội dung chuỗi ký tự vừa nhập, và nút Xoá.
>     - Dòng 31: Đưa mục mới vào cây DOM thông qua `danhSach.appendChild(li);`.
>     - Dòng 32 - 34: Xóa sạch nội dung trong ô nhập bằng `oNhapViec.value = '';`, đưa con trỏ chuột quay trở lại ô nhập với `oNhapViec.focus();` để người dùng có thể tiếp tục gõ việc tiếp theo mà không cần phải nhấp chuột lại, và cuối cùng gọi `capNhatDem()` để cập nhật lại số lượng.
> 
> - **Đăng ký sự kiện thêm việc (Dòng 37 đến dòng 43):**
>   - Dòng 37: `btnThem.addEventListener('click', themViec);` bắt sự kiện bấm chuột vào nút Thêm.
>   - Dòng 39 - 43: Bắt sự kiện bàn phím `keydown` trên ô nhập: `if (e.key === 'Enter') { themViec(); }`. Giúp người dùng có thể tiện lợi nhấn Enter ngay sau khi gõ xong.
> 
> - **Khối ủy quyền sự kiện: `danhSach.addEventListener('click', ...)` (Dòng 46 đến dòng 60):**
>   - Đây chính là đỉnh cao của kỹ thuật Event Delegation đã trình bày ở phần lý thuyết:
>     - Dòng 47: `const mucViec = e.target.closest('.muc-viec');` tìm kiếm ngược lên phần tử cha gần nhất mang class `.muc-viec`. Nếu người dùng nhấp ra ngoài các dòng việc, `if (!mucViec) return;` sẽ ngăn chặn mã chạy tiếp.
>     - Dòng 50 - 54: Kiểm tra nếu mục tiêu vừa bấm là nút Xoá bằng `if (e.target.classList.contains('btn-xoa'))`. Khi đó, phương thức `mucViec.remove();` được kích hoạt để xóa ngay dòng đó, sau đó gọi `capNhatDem();` và lập tức `return`.
>     - Dòng 56 - 59: Kiểm tra nếu người dùng nhấp vào ô đánh dấu hoặc nhấp vào chính dòng chữ nội dung việc: `if (e.target.classList.contains('o-danh-dau') || e.target.classList.contains('noi-dung-viec'))`. Khi đó, hàm kích hoạt `mucViec.classList.toggle('hoan-thanh');` để chuyển đổi trạng thái xong/chưa xong, rồi đồng bộ lại con số thống kê bằng `capNhatDem();`."

---

## ⏱️ PHẦN 6: DEMO TRỰC TIẾP TRÊN TRÌNH DUYỆT & SOI F12 DEVTOOLS (Thời lượng: ~3 phút 30 giây | 18:00 - 21:30)

🎬 **Thao tác:** 
- Phóng to cửa sổ Chrome hiển thị `bai16.html`.
- Vừa nói vừa thao tác thực nghiệm các trường hợp kiểm thử.

🗣️ **Lời đọc:**
> "Và ngay sau đây, em xin kính mời thầy cô cùng các bạn theo dõi phần thực nghiệm chạy thử ứng dụng trực tiếp trên trình duyệt web Google Chrome.
> 
> 1. **Kiểm tra trạng thái hiển thị ban đầu:**
>    - Khi vừa tải trang, chúng ta có 3 mục việc mẫu: mục 1 đã hoàn thành (ô vuông màu tím, chữ gạch ngang mờ đi), 2 mục dưới chưa hoàn thành.
>    - Nhìn xuống chân trang: Dòng thông báo hiển thị chính xác: *'Còn 2 việc chưa hoàn thành'*.
> 
> 2. **Kiểm tra tương tác đánh dấu hoàn thành (Toggle Task):**
>    - Bây giờ em sẽ nhấp chuột vào ô đánh dấu của mục số 2: *'Làm bài tập CSS Grid'*.
>    - *[Thao tác: Nhấp chuột vào ô vuông của mục 2]*
>    - Ngay lập tức, ô vuông chuyển sang màu tím đặc, dòng chữ bị gạch ngang, và chân trang nhảy số tức thì: *'Còn 1 việc chưa hoàn thành'*.
>    - Em nhấp chuột vào mục số 1 để huỷ đánh dấu hoàn thành.
>    - *[Thao tác: Nhấp vào dòng chữ của mục 1]*
>    - Ô vuông tím biến mất, dòng chữ trở lại bình thường, và bộ đếm lập tức tăng lên: *'Còn 2 việc chưa hoàn thành'*.
> 
> 3. **Kiểm tra chức năng thêm việc mới (Bằng nút bấm và bằng phím Enter):**
>    - Trong ô nhập đang có sẵn dòng chữ mẫu: *'Hoàn thành bài tập Lập trình Web'*. Em nhấp chuột vào nút **'Thêm'**.
>    - *[Thao tác: Bấm nút 'Thêm']*
>    - Một mục việc mới lập tức xuất hiện ở cuối danh sách, ô nhập được xóa sạch và con trỏ chuột tự động nhấp nháy sẵn trong ô. Bộ đếm cập nhật lên: *'Còn 3 việc chưa hoàn thành'*.
>    - Bây giờ em gõ một nội dung mới: *'Ôn tập kiểm tra giữa kỳ'*, sau đó em không bấm nút mà nhấn trực tiếp phím **Enter** trên bàn phím.
>    - *[Thao tác: Gõ chữ và bấm phím Enter]*
>    - Mục việc xuất hiện trơn tru, bộ đếm tăng lên 4 việc chưa hoàn thành!
> 
> 4. **Kiểm tra xử lý trường hợp ngoại lệ (Edge Cases):**
>    - Bây giờ em để trống ô nhập hoặc gõ toàn dấu cách trắng rồi bấm nút 'Thêm' hoặc Enter.
>    - *[Thao tác: Gõ phím cách rồi nhấn Enter liên tục]*
>    - Thầy cô có thể thấy danh sách hoàn toàn không bị thêm bất kỳ một dòng trống nào. Điều này chứng minh khối mã kiểm tra `.trim()` và `if (!noiDung) return;` hoạt động chuẩn xác 100%.
> 
> 5. **Kiểm tra chức năng xoá công việc:**
>    - Em bấm nút **'Xoá'** màu đỏ ở mục việc thứ 3.
>    - *[Thao tác: Bấm nút Xoá]*
>    - Dòng việc biến mất hoàn toàn khỏi màn hình và bộ đếm giảm đi 1 đơn vị ngay lập tức.
> 
> 6. **Bật F12 Developer Tools soi chuyên sâu kỹ thuật:**
>    - *[Thao tác: Nhấn F12 mở Developer Tools]*
>    - Chuyển sang tab **Console**: Bảng console hoàn toàn sạch sẽ, không có bất kỳ một lỗi cú pháp hay cảnh báo nào.
>    - Chuyển sang tab **Elements**: Em bấm vào một thẻ `<li>` bất kỳ, sau đó nhấp chuột vào checkbox trên giao diện. Thầy cô có thể quan sát thấy trong cây DOM của tab Elements, thuộc tính `class="muc-viec hoan-thanh"` được thêm vào và gỡ bỏ một cách linh hoạt theo thời gian thực.
>    - Kích hoạt biểu tượng **Toggle device toolbar** (`Ctrl + Shift + M`): Em kéo thử độ rộng màn hình về 375px (iPhone SE) và 414px. Thẻ ứng dụng tự động co dãn hoàn hảo, các nút bấm và ô nhập liệu vẫn thẳng hàng ngay ngắn, không hề xuất hiện hiện tượng vỡ layout hay thanh cuộn ngang."

---

## ⏱️ PHẦN 7: BÀI HỌC KINH NGHIỆM, TỔNG KẾT & LỜI CẢM ƠN (Thời lượng: ~1 phút 30 giây | 21:30 - 23:00)

🎬 **Thao tác:** 
- Chuyển màn hình quay lại cửa sổ VS Code hoặc giao diện hoàn chỉnh của bài tập.
- Giọng đọc chậm rãi, trang trọng và truyền cảm.

🗣️ **Lời đọc:**
> "Kính thưa thầy cô và các bạn, thông qua việc tự tay thiết kế và lập trình hoàn thiện Bài thực hành số 16 này, bản thân em đã tích lũy thêm được rất nhiều kinh nghiệm thực chiến quý giá:
> - Thứ nhất: Hiểu rõ sức mạnh của kỹ thuật **Event Delegation** và cơ chế **Event Bubbling**. Việc chỉ gán một trình lắng nghe duy nhất trên thẻ cha giúp mã nguồn tối giản, tránh rò rỉ bộ nhớ và tự động áp dụng được cho mọi phần tử con được sinh ra động trong tương lai.
> - Thứ hai: Thành thạo thao tác DOM hiện đại với `createElement`, `appendChild`, `remove` và `classList.toggle`, thay vì lạm dụng các đoạn mã can thiệp thô bạo vào thuộc tính style nội dòng.
> - Thứ ba: Nâng cao tư duy thiết kế trải nghiệm người dùng (UX) thông qua việc tự động xóa trắng ô nhập, tái kích hoạt `focus()`, hỗ trợ phím tắt Enter và ngăn chặn dữ liệu rỗng bằng hàm `trim()`.
> 
> Video thuyết minh Bài tập số 16 của em đến đây xin phép được khép lại.
> Em xin chân thành cảm ơn quý thầy cô giáo đã tận tình giảng dạy và tạo điều kiện cho chúng em được thực hành những bài tập vô cùng thực tế và bổ ích. Cảm ơn các bạn sinh viên đã dành thời gian theo dõi video.
> 
> Kính chúc thầy cô thật nhiều sức khỏe, niềm vui và thành công trong sự nghiệp trồng người. Chúc các bạn luôn giữ vững niềm đam mê với lập trình web. Em xin trân trọng cảm ơn!"

---
*Hết kịch bản Bài 16 — Sẵn sàng thu âm và ghi hình OBS Studio.*
