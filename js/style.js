let number = document.querySelectorAll("#product-quantity");
let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let removeButton = document.querySelectorAll(".remove-product");
let products = document.querySelectorAll(".product");
let priceProducts = document.querySelectorAll("strong");
let priceLine = document.querySelectorAll(".product-line-price");

let shipping = document.getElementById("cart-shipping");
let tax = document.getElementById("cart-tax");
let subTotal = document.getElementById("cart-subtotal");
let total = document.getElementById("cart-total");

totalFunc();

for (let i = 0; i < number.length; i++) {
  removeButton[i].addEventListener("click", () => {
    if (confirm("Bạn muốn xóa sản phẩm này?") == true) {
      products[i].remove();
      if (priceLine[i].innerHTML != "") {
        subTotal.lastElementChild.innerHTML = (
          Number(subTotal.lastElementChild.innerHTML) -
          Number(priceLine[i].innerHTML)
        ).toFixed(2);
        if(subTotal.lastElementChild.innerHTML == 0){
          shipping.lastElementChild.innerHTML = "0";
        }
        tax.lastElementChild.innerHTML = (
          (Number(subTotal.lastElementChild.innerHTML) * 18) /
          100
        ).toFixed(2);
        total.lastElementChild.innerHTML = (
          Number(subTotal.lastElementChild.innerHTML) +
          Number(tax.lastElementChild.innerHTML) +
          Number(shipping.lastElementChild.innerHTML)
        ).toFixed(2);
        
      }
    }
  });
}

for (let i = 0; i < number.length; i++) {
  plus[i].addEventListener("click", () => {
    if (+number[i].innerHTML >= 0) {
      number[i].innerHTML = +number[i].innerHTML + 1;

      priceLine[i].innerHTML = +(
        priceProducts[i].innerHTML * number[i].innerHTML
      ).toFixed(2);
    }
    totalFunc();
  });
}

for (let i = 0; i < number.length; i++) {
  minus[i].addEventListener("click", () => {
    if (+number[i].innerHTML >= 1) {
      number[i].innerHTML -= 1;
      priceLine[i].innerHTML = +(
        priceProducts[i].innerHTML * number[i].innerHTML
      ).toFixed(2);
    } else {
      number[i].innerHTML -= 1;
      if (confirm("Are you sure you want to delete this product?") == true) {
        products[i].remove();
        /*  if(priceLine.innerHTML != ""){
          subTotal.lastElementChild.innerHTML -= priceLine.innerHTML;
        } */
      } else {
        number[i].innerHTML = "0";
        number[i].disabled = true;
        priceLine[i].innerHTML = "0";
      }
    }
    totalFunc();
  });
}

function totalFunc() {
  let a = (subTotal.lastElementChild.innerHTML = (
    Number(priceLine[0].innerHTML) +
    Number(priceLine[1].innerHTML) +
    Number(priceLine[2].innerHTML)
  ).toFixed(2));
  let b = (tax.lastElementChild.innerHTML = (
    (subTotal.lastElementChild.innerHTML * 18) /
    100
  ).toFixed(2));
  let c = (shipping.lastElementChild.innerHTML = "15");

  total.lastElementChild.innerHTML = (
    Number(a) +
    Number(b) +
    Number(c)
  ).toFixed(2);

  if (subTotal.lastElementChild.innerHTML == 0) {
    shipping.lastElementChild.innerHTML = "0";
    total.lastElementChild.innerHTML = "0";
  }
}