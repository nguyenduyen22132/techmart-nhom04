// Lấy element form và button search
const form = document.querySelector('.main-form');
const searchBtn = document.querySelector('.main-search-button');

// Xử lý sự kiện submit form 
form.addEventListener('submit', (e) => {

  // Ngăn chặn submit mặc định
  e.preventDefault();

  // Lấy giá trị input search 
  const searchInput = document.querySelector('#main-search').value;

  // Kiểm tra giá trị search
  if(!searchInput) {
    alert('Vui lòng nhập từ khóa tìm kiếm');
    return;
  }

  // Thực hiện tìm kiếm
  search(searchInput);

});

// Hàm tìm kiếm
function search(keyword) {
  // Gọi API tìm kiếm với từ khóa
  fetch(`https://api.example.com/search?q=${keyword}`)
    .then(res => res.json())
    .then(data => {
      // Xử lý kết quả trả về 
      // Hiển thị ra giao diện
    })
}