let ProfileImage = document.getElementById('ProfileImage');
console.log(ProfileImage);

let storeData = JSON.parse(localStorage.getItem('UserDetails'))
console.log(storeData);

let image = storeData.imageurl;
console.log(image);
ProfileImage.src=`${image}`

function displayWishlist(){
    let productContainer=document.getElementById('productList')
    console.log(productContainer)

    let wishlist = JSON.parse(localStorage.getItem('wishlist'))
    console.log(wishlist)

    productContainer.innerHTML=wishlist.map((item, index ) =>  {
        return `
       <div class="Product-card">
       <img src="${item.ProductImage}" alt="">
        <h2>${item.Productname}</h2>
        <p>${item.ProductPrice}</p>
         <button onclick="removeItem(${index})">Remove❤️</button>
    </div>
    `
    }).join('')
}
displayWishlist();

function removeItem(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(id,1);
    localStorage.setItem('wishlist',JSON.stringify(wishlist));
    displayWishlist();
}

function clearwishlist(){
   let res = confirm("Are you sure you want to clear the Wish List??" ) 
   if(res){
    localStorage.setItem('wishlist',JSON.stringify([]))
    displayWishlist()

    window.location.href="../Homepage.html"
   }
}
