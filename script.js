const products = [
  { id: 1, name: "Voice Bot", price: "$19.99", rating: 4.5, imageUrl: "https://voicebot.ai/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg" },
  { id: 2, name: "EarBuds", price: "$29.99", rating: 4.0, imageUrl: "https://marketplace.canva.com/EAFy-Kja1dg/1/0/1600w/canva-white-and-black-simple-modern-earbuds-amazon-product-image-kBO8rvpqdlw.jpg" },
  { id: 3, name: "AirPods", price: "$39.99", rating: 5.0, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/stores-image-uploads-na-prod/1/AmazonStores/ATVPDKIKX0DER/8393aacecd9ce9f7f697a3dfb281eb21.w3556.h3600._CR132%2C154%2C3293%2C3293_.jpg" },
  { id: 4, name: "Galaxy", price: "$19.99", rating: 4.5, imageUrl: "https://f.hubspotusercontent10.net/hubfs/9094310/Imported_Blog_Media/devices.jpg" },
  { id: 5, name: "Goggles", price: "$29.99", rating: 4.0, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/stores-image-uploads-na-prod/b/AmazonStores/ATVPDKIKX0DER/e95b70412f89135c832d47b6c589c866.w3000.h1500._CR0%2C0%2C3000%2C1500_.jpg" },
  { id: 6, name: "Pining", price: "$39.99", rating: 5.0, imageUrl: "https://i.pinimg.com/736x/75/d9/c6/75d9c6ed7781dec8624417c77b497b1f.jpg" },
  { id: 1, name: "Laptop", price: "$19.99", rating: 4.5, imageUrl: "https://www.hindustantimes.com/ht-img/img/2023/10/23/1600x900/amazon_basic_products_1698057274690_1698057298415.jpg" },
  { id: 2, name: "Media", price: "$29.99", rating: 4.0, imageUrl: "https://m.media-amazon.com/images/I/51ILEFzFdAL.jpg" },
  { id: 3, name: "Media", price: "$39.99", rating: 5.0, imageUrl: "https://m.media-amazon.com/images/I/51t2BOYaxnL.jpg" },
  { id: 4, name: "Media", price: "$19.99", rating: 4.5, imageUrl: "https://m.media-amazon.com/images/I/61ULWoJPNHL.jpg" },
  { id: 5, name: "Media", price: "$29.99", rating: 4.0, imageUrl: "https://m.media-amazon.com/images/I/81YmoG8VXbL.jpg" },
  { id: 6, name: "GstatiC", price: "$39.99", rating: 5.0, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSjF5C9Wjdy3DNPuuF7BWuNZgHT4pZFARhA&s" },
];

const cart = JSON.parse(localStorage.getItem('cart')) || [];
const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function updateCounts() {
  document.getElementById('cart-count').innerText = cart.length;
  document.getElementById('wishlist-count').innerText = wishlist.length;
}

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCounts();
}

function addToWishlist(product) {
  wishlist.push(product);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateCounts();
}

function renderProducts() {
  const productGrid = document.getElementById('product-grid');
  
  products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <p class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</p>
          <button class="button" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
          <button class="button" onclick='addToWishlist(${JSON.stringify(product)})'>Add to Wishlist</button>
      `;
      productGrid.appendChild(card);
  });
}

renderProducts();
updateCounts();