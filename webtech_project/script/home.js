let ProfileImage = document.getElementById('ProfileImage')
console.log(ProfileImage)

let storedData = JSON.parse(localStorage.getItem('UserDetails'))
console.log(storedData)

let image = storedData.imageurl
console.log(image)

ProfileImage.src=`${image}`


let AllProduct = [
    {
        id:1,
        Productname:"I Phone 17",
        ProductPrice : 690000, 
        ProductImage : "https://tse4.mm.bing.net/th/id/OIP.3DRmx3CIqvwW48gaCKW0mgHaKX?pid=Api&P=0&h=180",
        category: "mobile"
    },
     {
        id:2,
        Productname:"G Shock",
        ProductPrice : 160000, 
        ProductImage : "https://tse4.mm.bing.net/th/id/OIP.xwufvNnXKZfr0NkEI_r2CwHaHa?pid=Api&P=0&h=180",
        category: "watch"
    },
     {
        id:3,
        Productname:"ASUS",
        ProductPrice : 690000, 
        ProductImage : "https://tse4.mm.bing.net/th/id/OIP.CHF-Xz7_ATsZD7lfk3RuTgHaE0?pid=Api&P=0&h=180",
        category: "Laptop"
    },
     {
        id:4,
        Productname:"vivo",
        ProductPrice : 500000, 
        ProductImage : "https://tse4.mm.bing.net/th/id/OIP.qXuFsnf9B2jMI0o7x66NNgHaHa?pid=Api&P=0&h=180",
        category: "mobile"
    },
        {
        id:5, 
        Productname:"samsung s23 ultra",
        ProductPrice : 690000, 
        ProductImage : "https://tse2.mm.bing.net/th/id/OIP.K6YZQE5WDgh208_2CX9sfgHaEo?pid=Api&P=0&h=180",
        category: "mobile"
       }, 
    
       {
           id:6,
          Productname:"MacBook Air M3",
          ProductPrice: 115000,
          ProductImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
         category: "laptop"
     },
        {
        id: 7,
         Productname: "Dell XPS 13",
    ProductPrice: 98000,
    ProductImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    category: "laptop"
  },
  {
    id: 8,
    Productname: "HP Pavilion 15",
    ProductPrice: 65000,
    ProductImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    category: "laptop"
  },
  {
    id: 9,
    Productname: "Lenovo Legion 5",
    ProductPrice: 90000,
    ProductImage: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    category: "laptop"
  },
  {
    id: 10,
    Productname: "Asus ROG Strix",
    ProductPrice: 120000,
    ProductImage: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    category: "laptop"
  },

  {
    id: 11,
    Productname: "Apple Watch Series 9",
    ProductPrice: 42000,
    ProductImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvM_-No3a_ApZPkha28whpnDt3APaMgnBE0n11fdRJDPvYtSpUu332&usqp=CAE&s",
    category: "watch"
  },
  {
    id: 12,
    Productname: "Samsung Galaxy Watch 6",
    ProductPrice: 30000,
    ProductImage: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
    category: "watch"
  },
  {
    id: 13,
    Productname: "Noise Smartwatch",
    ProductPrice: 5000,
    ProductImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "watch"
  },
  {
    id: 14,
    Productname: "Fossil Gen 6",
    ProductPrice: 25000,
    ProductImage: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    category: "watch"
  },
  {
    id: 15,
    Productname: "Boat Xtend Watch",
    ProductPrice: 4000,
    ProductImage: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    category: "watch"
  },

  {
    id: 16,
    Productname: "Vivo X100",
    ProductPrice: 55000,
    ProductImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    category: "mobile"
  },
  {
    id: 17,
    Productname: "Oppo Reno 11",
    ProductPrice: 42000,
    ProductImage: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    category: "mobile"
  },
  {
    id: 18,
    Productname: "Acer Aspire 7",
    ProductPrice: 60000,
    ProductImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWpP3OUP5NS93BFhWShnxZXEakEp1EhOk3SC1ZkKToQyABYwfCo54sEW4NCqgIudFhyOm8VrB37nSEyKBVhODESMuZuY1Lc5r03vv-cm2gPb39qsGx4xFpinl9a7QRhN_vHw&usqp=CAc",
    category: "laptop"
  },
  {
    id: 19,
    Productname: "MSI GF63",
    ProductPrice: 70000,
    ProductImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    category: "laptop"
  },
  {
    id: 20,
    Productname: "Titan Analog Watch",
    ProductPrice: 3500,
    ProductImage: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    category: "watch"
  }
];

console.log(AllProduct)


function displayProducts(ListOfProduct){
  let ProductContainer = document.getElementById('productList')
  console.log(ProductContainer)

  if(ListOfProduct.length === 0){
    ProductContainer.innerHTML = `<h2>Product are not Found</h2>`
  }

  ProductContainer.innerHTML = ListOfProduct.map((product)=>`

          <div class="Product-card">
            <img src="${product.ProductImage}" alt="">
            <h2>${product.Productname}</h2>
            <p>₹ ${product.ProductPrice}</p>
            <button onclick="addToCart(${product.id})">Add to Cart🛒</button>
            <button onclick="addtoWishlist(${product.id})">Add to Wishlist❤️</button>
        </div>
  
  `).join('')

 
}
displayProducts(AllProduct)


function searchFilter(){
  let text = document.getElementById('search').value.toLowerCase()
  console.log(text )

  let filterData = AllProduct.filter((p)=>p.Productname.toLowerCase().includes(text))
  displayProducts(filterData)

}

function searchCategory(cat){
  if(cat==="All"){
    displayProducts(AllProduct)
  }else{
    let filterData = AllProduct.filter((p)=>p.category===cat)
    displayProducts(filterData)
  }
}

function addToCart(id){
  let cart=JSON.parse(localStorage.getItem('cart')) || [];

  let product=AllProduct.find((p)=>p.id==id)
  cart.push(product)

  localStorage.setItem('cart',JSON.stringify(cart))

  alert(`${product.Productname} added to cart`)
}

function addtoWishlist(id){
  let wishlist=JSON.parse(localStorage.getItem('wishlist')) || [];

  let product=AllProduct.find((p)=>p.id==id)
  wishlist.push(product)

  localStorage.setItem('wishlist',JSON.stringify(wishlist))

  alert(`${product.Productname} added to Wishlist❤️`)
}