// file script.js 

const radios = document.querySelectorAll('input[name="color"]');

const img = document.getElementById("productImg");

radios.forEach(radio => {
  radio.addEventListener('click', function() {
    const color = this.nextElementSibling.style.backgroundColor;
    
    img.style.borderColor = color; 
  });
});