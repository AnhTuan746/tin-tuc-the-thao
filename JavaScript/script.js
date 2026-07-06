/* ==========================================================================
   1. TÍNH NĂNG TÌM KIẾM TIN TỨC TRÊN SIDEBAR / TRANG CHỦ
   ========================================================================== */
function timKiemTinTuc() {
    var input = document.getElementById("searchKey").value.toLowerCase();
    var newsItems = document.querySelectorAll(".news-item-flex");
    var found = false;

    newsItems.forEach(function(item) {
        // Lấy tiêu đề bài viết bên trong thẻ h3
        var title = item.querySelector("h3").innerText.toLowerCase();
        
        // Nếu tiêu đề chứa từ khóa tìm kiếm
        if (title.includes(input)) {
            item.style.display = "flex"; // Hiển thị bài viết
            found = true;
        } else {
            item.style.display = "none"; // Ẩn bài viết không liên quan
        }
    });

    if(!found && input !== "") {
        alert("Không tìm thấy bài viết nào phù hợp với từ khóa: " + input);
    }
}

/* ==========================================================================
   2. ĐẾM NGƯỢC THỜI GIAN ĐẾN TRẬN ĐẤU TÂM ĐIỂM (COUNTDOWN)
   ========================================================================== */
function chayDemNguoc() {
    var countdownElement = document.getElementById("countdown-timer");
    if (!countdownElement) return; // Nếu trang nào không có khối này thì bỏ qua

    // Thiết lập ngày đếm ngược (Ví dụ: Ngày 15 tháng 7 năm 2026)
    var countDownDate = new Date("July 15, 2026 08:00:00").getTime();

    // Cập nhật thời gian sau mỗi 1 giây
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Tính toán số ngày, giờ, phút, giây
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Hiển thị kết quả vào thẻ HTML
        countdownElement.innerHTML = days + " ngày " + hours + " giờ " 
        + minutes + " phút " + seconds + " giây ";

        // Nếu thời gian đếm ngược kết thúc
        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "TRẬN ĐẤU ĐANG DIỄN RA!";
        }
    }, 1000);
}

/* ==========================================================================
   3. KHỞI CHẠY KHI TRANG WEB TẢI XONG (ONLOAD)
   ========================================================================== */
window.onload = function() {
    chayDemNguoc();
};

/* ==========================================================================
   4. THÔNG BÁO NHANH CHO CÁC ĐƯỜNG LINK CHƯA XÂY DỰNG (DẤU #)
   ========================================================================== */
document.addEventListener("click", function(e) {
    if(e.target && e.target.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Tính năng này hiện đang được cập nhật liên tục từ Ban Biên Tập!");
    }
});