let ProfileImage = document.getElementById('ProfileImage');
console.log(ProfileImage);

let storeData = JSON.parse(localStorage.getItem('UserDetails'))
console.log(storeData);

let image=storeData.imageurl;
console.log(image);
ProfileImage.src=`${image}`

function displayCartItems(){
    let productContainer = document.getElementById('productList')
    console.log(productContainer)

    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)

    let total = 0;

    productContainer.innerHTML = cart.map((item, index)=>{
        total += item.ProductPrice
        return `
        <div class="Product-card">
        <img src="${item.ProductImage}" alt="">
        <h2>${item.Productname}</h2>
        <p>${item.ProductPrice}</p>
        <button onclick="removeItem(${index})">Remove Item</button>
        </div>
        `
    }).join('')

    document.getElementById('total').innerText= `Total = ₹ ${total}/-`
}
displayCartItems()

function removeItem(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(id,1);
    localStorage.setItem('cart',JSON.stringify(cart));
    displayCartItems(); 
}

function clearCart(){
    let res=confirm("Are you sure you want to remove all items form the cart??")
    if(res){
        localStorage.setItem('cart',JSON.stringify([]))
        displayCartItems()

        window.location.href='../Homepage.html'
    }
}


function checkout(){
    alert("Thank you for shopping with us❤️")
    localStorage.setItem('cart',JSON.stringify([]))
        displayCartItems()

        window.location.href='../Homepage.html'

}

