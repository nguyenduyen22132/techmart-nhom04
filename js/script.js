let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Samsung Galaxy S23 FE 5G',
        price: 14890000,
        quantity: 20,
        image: 'images/product/phone/bl-Samsung2.jpg',
        nature: {
            brand: 'Samsung',
            RAM: ['8GB', '16GB'],
            Storage: ['128GB', '256GB', '512GB'],
            Special: '5G',
            Chip: 'SnapDragon'
        }
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23 FE 5G',
        price: 14890000,
        quantity: 20,
        image: 'images/product/phone/bl-Samsung2.jpg',
        nature: {
            brand: 'Samsung',
            RAM: ['8GB', '16GB'],
            Storage: ['128GB', '256GB', '512GB'],
            Special: '5G',
            Chip: 'SnapDragon'
        }
    },
    {
        id: 3,
        name: 'Samsung Galaxy S23 FE 5G',
        price: 14890000,
        quantity: 20,
        image: 'images/product/phone/bl-Samsung2.jpg',
        nature: {
            brand: 'Samsung',
            RAM: ['8GB', '16GB'],
            Storage: ['128GB', '256GB', '512GB'],
            Special: '5G',
            Chip: 'SnapDragon'
        }
    },
    {
        id: 4,
        name: 'Samsung Galaxy S23 FE 5G',
        price: 14890000,
        quantity: 20,
        image: 'images/product/phone/bl-Samsung2.jpg',
        nature: {
            brand: 'Samsung',
            RAM: ['8GB', '16GB'],
            Storage: ['128GB', '256GB', '512GB'],
            Special: '5G',
            Chip: 'SnapDragon'
        }
    },
    {
        id: 5,
        name: 'Samsung Galaxy S23 FE 5G',
        price: 14890000,
        quantity: 20,
        image: 'images/product/phone/bl-Samsung2.jpg',
        nature: {
            brand: 'Samsung',
            RAM: ['8GB', '16GB'],
            Storage: ['128GB', '256GB', '512GB'],
            Special: '5G',
            Chip: 'SnapDragon'
        }
    },
    {
        id: 6,
        name: 'Samsung Galaxy S23 FE 5G',
        price: 14890000,
        quantity: 20,
        image: 'images/product/phone/bl-Samsung2.jpg',
        nature: {
            brand: 'Samsung',
            RAM: ['8GB', '16GB'],
            Storage: ['128GB', '256GB', '512GB'],
            Specia: '5G',
            Chip: 'SnapDragon'
        }
    },

];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' đ';
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check brand
        if(valueFilter.brand.value != ''){
            if(item.nature.type != valueFilter.brand.value){
                return false;
            }
        }
        // check RAM
        if(valueFilter.RAM.value != ''){
            if(!item.nature.RAM.includes(valueFilter.RAM.value)){
                return false;
            }
        }
        // check Storage
        if (valueFilter.storage.value != '') {
            if (!item.nature.storage.includes(valueFilter.storage.value)) {
                return false;
            }
        }
        // check Storage
        if (valueFilter.storage.value != '') {
            if (!item.nature.storage.includes(valueFilter.storage.value)) {
                return false;
            }
        }
        // check Special
        if (valueFilter.special.value != '') {
            if (!item.nature.special.includes(valueFilter.special.value)) {
                return false;
            }
        }
        // check Chip
        if (valueFilter.chip.value != '') {
            if (!item.nature.chip.includes(valueFilter.chip.value)) {
                return false;
            }
        }

        return true;
    })
    showProduct(productFilter);
})