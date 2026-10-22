# KỊCH BẢN THUYẾT MINH VIDEO OBS — BÀI 16
**Chủ đề:** Xây dựng ứng dụng Danh sách việc cần làm (To-Do List) tương tác bằng JavaScript  
**Người thực hiện:** Sinh viên Trần Trọng Hoàng Anh  
**Học phần:** Phát triển ứng dụng Web cơ bản  
**Mã nguồn liên quan:** `bai16.html`, `bai16.css`, `bai16.js`

---

## GHI CHÚ CHUẨN BỊ TRƯỚC KHI BẤM QUAY OBS
- **Thiết lập màn hình:** Chia đôi màn hình hoặc mở 2 cửa sổ: một bên là VS Code hiển thị 3 file (`bai16.html`, `bai16.css`, `bai16.js`), một bên là trình duyệt (Chrome/Edge) đã mở sẵn `bai16.html`.
- **Tác phong:** Giọng nói to, rõ ràng, dứt khoát, tự tin; vừa nói vừa di chuột hoặc bôi đen đúng đoạn code đang thuyết minh.

---

## PHẦN 1: LỜI MỞ ĐẦU & GIỚI THIỆU TỔNG QUAN (Khoảng 30 - 45 giây)

*(Bật OBS quay màn hình hiển thị trang web trên trình duyệt hoặc màn hình chào)*

> **[LỜI THOẠI]:**  
> "Em xin kính chào Thầy/Cô cùng toàn thể các bạn!  
> Em tên là **Trần Trọng Hoàng Anh**, sinh viên năm 2 khoa Công nghệ Thông tin, đang theo học học phần *Phát triển ứng dụng Web cơ bản*.  
>  
> Hôm nay, em xin phép được thực hiện video thuyết minh và hướng dẫn chi tiết về **Bài tập số 16: Xây dựng ứng dụng Danh sách việc cần làm (To-Do List)** tương tác trực tiếp bằng JavaScript.  
>  
> Mục tiêu của bài tập này là giúp chúng ta vận dụng nhuần nhuyễn cả 3 công nghệ nền tảng của Web Front-end:  
> 1. Xây dựng cấu trúc thẻ HTML5 rõ ràng, ngữ nghĩa.  
> 2. Thiết kế giao diện hiện đại với CSS3, sử dụng tông màu tím chủ đạo `#6d28d9`, bo góc mềm mại và các đường viền nét chấm tinh tế.  
> 3. Lập trình JavaScript xử lý các thao tác tương tác thời gian thực: thêm công việc mới, đánh dấu hoàn thành, xoá việc và tự động cập nhật bộ đếm số việc chưa xong.  
>  
> Ngay sau đây, em xin phép đi vào phân tích chi tiết mã nguồn của bài tập!"

---

## PHẦN 2: GIẢI THÍCH CẤU TRÚC HTML (`bai16.html`) (Khoảng 1.5 - 2 phút)

*(Chuyển OBS sang cửa sổ VS Code, mở file `bai16.html`)*

> **[LỜI THOẠI]:**  
> "Đầu tiên, em xin giới thiệu về file `bai16.html`. Toàn bộ ứng dụng được em bao bọc bên trong một khối thẻ `div` có class là `the-ung-dung` từ dòng 11 đến dòng 47. Cấu trúc này được phân chia thành 4 khu vực chức năng rất rõ ràng:  
>  
> - **Khu vực thứ nhất là phần đầu thẻ `<header class="dau-the">`:**  
>   Ở đây em đặt tiêu đề chính `<h2>` mang tên *'Danh sách việc cần làm'* và một đoạn mô tả ngắn `<p class="mo-ta-phu">`. Khối này sẽ được định kiểu nền tím đậm để tạo điểm nhấn thị giác ngay khi người dùng mở trang.  
>  
> - **Khu vực thứ hai là khung nhập liệu `<div class="khung-nhap-lieu">`:**  
>   Gồm có một ô nhập văn bản `<input type="text" id="o-nhap-viec">` dùng để người dùng gõ nội dung công việc mới, kèm sẵn một giá trị mẫu và placeholder gợi ý; kế bên là nút bấm `<button type="button" id="btn-them" class="btn-them">` với nhãn là *'Thêm'*. Cả hai phần tử này đều được đặt `id` để JavaScript dễ dàng truy xuất.  
>  
> - **Khu vực thứ ba là danh sách công việc `<ul id="danh-sach" class="danh-sach">`:**  
>   Đây là danh sách không thứ tự chứa các thẻ con `<li>` mang class `muc-viec`. Trong mã nguồn mẫu ban đầu, em đã chuẩn bị sẵn 3 công việc mẫu:  
>   + Mục đầu tiên có thêm class `hoan-thanh` để mô phỏng trạng thái việc đã xong.  
>   + Bên trong mỗi thẻ `li`, em chia làm 3 thành phần con: một thẻ `<span class="o-danh-dau">` đóng vai trò như chiếc hộp checkbox tùy biến; một thẻ `<span class="noi-dung-viec">` chứa nội dung công việc; và một thẻ `<button class="btn-xoa">` màu đỏ để người dùng có thể xoá mục đó.  
>  
> - **Khu vực cuối cùng là chân thẻ `<footer class="chan-the">`:**  
>   Em đặt một thẻ `<span id="so-viec-con">` với nội dung khởi tạo là *'Còn 2 việc chưa hoàn thành'*. Phần tử này sẽ được JavaScript tự động tính toán lại mỗi khi danh sách có sự thay đổi.  
>  
> Cuối cùng ở dòng 49, em nhúng file kịch bản `bai16.js` đặt trước thẻ đóng `</body>` để đảm bảo toàn bộ cây DOM đã được tải hoàn tất trước khi script thực thi."

---

## PHẦN 3: GIẢI THÍCH ĐỊNH DẠNG CSS (`bai16.css`) (Khoảng 2 phút)

*(Chuyển sang file `bai16.css` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Tiếp theo, chúng ta cùng xem xét file `bai16.css`. Ở đây, em đã trau chuốt giao diện theo phong cách UI/UX hiện đại, sạch sẽ và thân thiện với người dùng:  
>  
> - **Đầu tiên là phần Reset và Body (dòng 5 - 19):**  
>   Em áp dụng `box-sizing: border-box` trên toàn bộ phần tử `*` để việc tính toán kích thước padding và border luôn chính xác. Thẻ `body` được đặt màu nền xám xanh nhạt `#eef2f6`, chiều cao tối thiểu `min-height: 100vh`, và sử dụng **Flexbox** với `justify-content: center` cùng `align-items: center` để căn giữa khối ứng dụng chính xác vào tâm màn hình thiết bị.  
>  
> - **Thẻ ứng dụng `.the-ung-dung` (dòng 22 - 29):**  
>   Em giới hạn chiều rộng tối đa `max-width: 600px`, nền trắng tinh khiết, bo tròn góc với `border-radius: 20px`, kết hợp hiệu ứng bóng đổ mềm mại `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08)` và `overflow: hidden` để phần đầu tím không bị tràn ra ngoài góc bo.  
>  
> - **Đầu thẻ `.dau-the` (dòng 32 - 48):**  
>   Em phủ màu nền tím hoàng gia mã màu `#6d28d9`, chữ trắng tương phản mạnh mẽ, tiêu đề in đậm 21px và mô tả phụ hơi trong suốt với `opacity: 0.9`.  
>  
> - **Khung nhập liệu `.khung-nhap-lieu` (dòng 51 - 86):**  
>   Em dùng `display: flex` kết hợp thuộc tính `gap: 12px`. Ô input được gán `flex: 1` để tự động dãn nở chiếm toàn bộ không gian còn lại. Khi người dùng bấm vào ô nhập, hiệu ứng `:focus` sẽ đổi viền sang màu tím `#6d28d9`. Nút *'Thêm'* mang màu nền tím đồng bộ, có bo góc và hiệu ứng chuyển màu `:hover` đậm hơn sang `#5b21b6`.  
>  
> - **Định dạng danh sách việc `.danh-sach` và `.muc-viec` (dòng 89 - 152):**  
>   + Các mục việc được xếp theo hàng ngang bằng Flexbox căn giữa thẳng hàng theo chiều dọc `align-items: center`.  
>   + Điểm đặc sắc ở đây là đường kẻ phân cách giữa các mục việc: em dùng đường viền nét chấm màu tím phấn siêu nhẹ: `border-bottom: 1.5px dotted #ede9fe`.  
>   + Ô đánh dấu `.o-danh-dau`: là một khối vuông `22px x 22px`, bo góc nhẹ 6px với viền màu tím nhạt `#a78bfa`. Khi công việc được gắn class `.hoan-thanh`, ô vuông này lập tức đổi nền và viền sang màu tím đậm `#6d28d9`.  
>   + Nội dung công việc `.noi-dung-viec`: khi hoàn thành sẽ tự động có hiệu ứng gạch ngang chữ `text-decoration: line-through` và màu chữ nhạt dần sang xám `#94a3b8`.  
>   + Nút xoá `.btn-xoa`: mang màu nền hồng nhạt `#fee2e2` và chữ đỏ đô `#dc2626`, khi hover sẽ sáng hơn `#fecaca`, giúp người dùng nhận diện ngay đây là hành động nguy hiểm/xoá dữ liệu."

---

## PHẦN 4: GIẢI THÍCH XỬ LÝ JAVASCRIPT (`bai16.js`) (Khoảng 2 - 2.5 phút)

*(Chuyển sang file `bai16.js` trong VS Code)*

> **[LỜI THOẠI]:**  
> "Bây giờ, chúng ta sẽ đi sâu vào 'trái tim' xử lý tương tác của bài tập — file `bai16.js`:  
>  
> - **Bước 1 — Truy vấn DOM (dòng 5 - 8):**  
>   Em dùng `document.getElementById` để lấy ra 4 phần tử chính: ô nhập việc `oNhapViec`, nút thêm `btnThem`, danh sách `danhSach` và thẻ hiển thị số việc còn lại `soViecCon`.  
>  
> - **Bước 2 — Hàm cập nhật bộ đếm `capNhatDem()` (dòng 11 - 16):**  
>   + Em truy vấn tổng số thẻ có class `.muc-viec` trong danh sách.  
>   + Sau đó đếm số mục đã xong thông qua class `.muc-viec.hoan-thanh`.  
>   + Lấy tổng số trừ đi số việc đã xong, ta thu được biến `conLai`.  
>   + Cuối cùng, gán lại chuỗi hiển thị: *`Còn ${conLai} việc chưa hoàn thành`* vào thuộc tính `textContent` của `soViecCon`.  
>  
> - **Bước 3 — Hàm thêm việc mới `themViec()` (dòng 19 - 35):**  
>   + Đầu tiên, lấy giá trị người dùng vừa gõ và dùng hàm `.trim()` để cắt bỏ các khoảng trắng vô nghĩa ở hai đầu. Nếu ô nhập rỗng, hàm sẽ dừng ngay bằng lệnh `return`.  
>   + Nếu có nội dung hợp lệ, em dùng `document.createElement('li')` để tạo mới một thẻ `li`, gán `className = 'muc-viec'`.  
>   + Em sử dụng **Template Literal** (`backtick`) để chèn cấu trúc HTML con bên trong gồm: ô đánh dấu, thẻ span chứa chuỗi `${noiDung}`, và nút xoá.  
>   + Dùng `danhSach.appendChild(li)` để đưa mục việc mới vào danh sách.  
>   + Xoá trắng ô nhập, đưa con trỏ chuột quay trở lại ô bằng `oNhapViec.focus()`, và gọi ngay `capNhatDem()` để số lượng được cập nhật tức thì.  
>  
> - **Bước 4 — Bắt sự kiện thêm việc (dòng 37 - 43):**  
>   Em bắt sự kiện `click` trên nút 'Thêm', đồng thời bắt thêm sự kiện phím gõ `keydown` trên ô nhập để nếu người dùng nhấn phím `Enter` (`e.key === 'Enter'`) thì hàm `themViec()` cũng tự động kích hoạt, tạo trải nghiệm gõ phím rất nhanh và tiện lợi.  
>  
> - **Bước 5 — Kỹ thuật Ủy nhiệm sự kiện (Event Delegation) (dòng 46 - 60):**  
>   Thay vì phải gắn từng bộ lắng nghe sự kiện trên từng nút xoá hay từng ô đánh dấu — điều này sẽ gây rò rỉ bộ nhớ và không áp dụng được cho các phần tử thêm mới về sau — em đã áp dụng kỹ thuật cực kỳ tối ưu là **Event Delegation** bằng cách lắng nghe duy nhất một sự kiện `click` trên phần tử cha `#danh-sach`:  
>   + Dùng `e.target.closest('.muc-viec')` để xác định chính xác mục công việc đang tương tác.  
>   + Nếu người dùng bấm trúng nút có class `.btn-xoa`: em gọi lệnh `mucViec.remove()` để gỡ bỏ phần tử khỏi DOM, sau đó gọi `capNhatDem()`.  
>   + Nếu bấm vào `.o-danh-dau` hoặc tên việc `.noi-dung-viec`: em dùng phương thức `mucViec.classList.toggle('hoan-thanh')` để lật trạng thái hoàn thành và cập nhật lại bộ đếm ngay lập tức!"

---

## PHẦN 5: THAO TÁC DEMO KẾT QUẢ TRÊN TRÌNH DUYỆT (Khoảng 1.5 phút)

*(Chuyển OBS toàn màn hình sang trình duyệt mở trang `bai16.html`)*

> **[LỜI THOẠI & HÀNH ĐỘNG]:**  
> "Sau đây, em xin phép thao tác demo trực tiếp sản phẩm trên trình duyệt Google Chrome:  
>  
> **1. Quan sát trạng thái ban đầu:**  
> - Các bạn có thể thấy giao diện xuất hiện rất cân đối, thẻ card màu trắng bo tròn nằm giữa màn hình trên nền xám xanh, tiêu đề màu tím nổi bật.  
> - Danh sách đang có 3 mục việc ban đầu, trong đó mục đầu tiên đã hoàn thành với dấu gạch ngang chữ và ô đánh dấu tím đậm. Dòng thông báo dưới chân thẻ ghi chính xác: *'Còn 2 việc chưa hoàn thành'*.  
>  
> **2. Thao tác thêm việc mới:**  
> *(Bấm vào ô input đang có chữ sẵn, bấm nút 'Thêm')*  
> - Nhấp nút 'Thêm' -> Công việc *'Hoàn thành bài tập Lập trình Web'* lập tức xuất hiện ở vị trí thứ 4. Bộ đếm cập nhật lên: *'Còn 3 việc chưa hoàn thành'*.  
> *(Gõ vào ô nhập: 'Quay xong video bài 16' rồi nhấn phím Enter trên bàn phím)*  
> - Em gõ nội dung mới và bấm Enter -> Thao tác thêm việc diễn ra trơn tru mà không cần dùng chuột, số việc chưa xong tăng lên thành 4 việc.  
>  
> **3. Thao tác đánh dấu hoàn thành (Toggle Status):**  
> *(Click vào dòng 'Làm bài tập CSS Grid')*  
> - Khi em click vào chữ hoặc ô vuông của việc thứ hai -> Ngay lập tức ô chuyển sang tím đậm, chữ bị gạch ngang mờ đi, và bộ đếm giảm xuống còn 3 việc.  
> *(Click lại lần nữa vào việc đó)*  
> - Click lại một lần nữa -> Công việc trở lại trạng thái chưa hoàn thành, bộ đếm tăng lại lên 4. Tính năng toggle hoạt động hoàn hảo!  
>  
> **4. Thao tác xoá công việc:**  
> *(Bấm nút 'Xoá' màu đỏ bên cạnh mục 'Đọc chương HTML5 cơ bản')*  
> - Em click nút 'Xoá' -> Mục này biến mất ngay lập tức khỏi giao diện.  
> *(Bấm tiếp nút xoá của một mục chưa hoàn thành)*  
> - Xoá tiếp một mục chưa xong -> Bộ đếm tự động giảm xuống chỉ còn 2 việc. Mọi thao tác tính toán đều diễn ra theo thời gian thực rất mượt mà!"

---

## PHẦN 6: LỜI CẢM ƠN & KẾT THÚC (Khoảng 20 - 30 giây)

> **[LỜI THOẠI]:**  
> "Như vậy, em đã trình bày và kiểm thử thành công toàn bộ các tính năng của Bài 16 — Danh sách việc cần làm To-Do List. Ứng dụng đáp ứng trọn vẹn cả về mặt thẩm mỹ giao diện lẫn logic xử lý DOM thời gian thực trong JavaScript.  
>  
> Em xin chân thành cảm ơn Thầy/Cô và các bạn đã dành thời gian theo dõi video thuyết minh của em! Xin kính chào và hẹn gặp lại ở bài tập tiếp theo!"
