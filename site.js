const data= [
    {
        id : 0,
        img : './images/redmiK20-removebg-preview.png',
        name : 'Redmi K20',
        price : 190,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : './images/samGalaxynote20-removebg-preview.png',
        name : 'Samsung Galaxy Note 20',
        price : 300,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : './images/oppofindX2-removebg-preview.png',
        name : 'OPPO Find X2',
        price : 240,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : './images/realmeX20pro-removebg-preview.png',
        name : 'Realme X50 Pro',
        price : 285,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : './images/redminote8-removebg-preview.png',
        name : 'Redmi Note 8',
        price : 200,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : './images/redminote9-removebg-preview.png',
        name : 'Redmi Note 9',
        price : 220,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : './images/redmi8-removebg-preview.png',
        name : 'Redmi 8A Dual',
        price : 160,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : './images/redmi9-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : './images/realme_C11-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : './images/realmeNarzo-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 10,
        img : './images/realme7i-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : './images/realmeC15-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 12,
        img : './images/oppoA31-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 13,
        img : './images/oppoA31-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 14,
        img : './images/oppoF17-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 15,
        img : './images/oppoA15-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 16,
        img : './images/samgalaxyM01-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 17,
        img : './images/samGalaxyM21-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 18,
        img : './images/samsGalaxyNote20-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },

    {
        id : 19,
        img : './images/samGalaxys20+-removebg-preview.png',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
];

let cartList=[]; // aravachalar ro'yxatini saqlash uchun qator

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// arava sahifasini ko'rsatish uchun hodisani bosing
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

// tafsilotlar sahifasidan narsalarni savatga qo'shish uchun voqealarni bosing
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

// arava sahifasini yashirish va bosh sahifaga qaytish uchun hodisani bosing
home.addEventListener('click',hideCart);

// ro'yxatdagi elementlarni olib tashlash uchun dinamik ravishda yaratilgan elementdagi hodisalar
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})



// tafsilotlar sahifasini ko'rsatish uchun hodisani bosing
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

// bosh sahifa aravachasi belgisidan narsalarni savatga qo'shish uchun hodisalarni bosing
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));


// tafsilotlar funktsiyasi
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : $ ' +data[getId].price;
    youSave.innerHTML= 'You save : ($ ' + data[getId].save + ')';
}


// savatni mahsulotga qo'shish
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('Mahsulot savatga qo`shildi')

    }
    else{
        alert('Sizning mahsulotingiz allaqachon mavjud')
    }
    data[id].itemInCart= true
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}


// savat sahifasini ko'rsatish
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

// savatni mahsulotga qo'shish
function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
        document.getElementById('total').style.display= "block";
}

// savatni elementdan olib tashlash
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}

