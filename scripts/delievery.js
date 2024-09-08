const nrestaurants1 = [
    {
        name: "Chinese Rok",
        rating: "4.2·30-35 mins",
        price: "50% OFF",
        location: "Rohini",
        cuisines: "Chinese,RAsian, Ti Ntan,MDesserts",
        image: "restaurant1.avif"
    },
    {
        name: "Burger King",
        rating: "4.5 · 20-25 mins",
        price: "25% OFF",
        location: "Rohini",
        cuisines: "Burgers, American",
        image: "restaurant2.avif"
    },
    {
        name: "Subway",
        rating: '4.3 · 25-30 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini M2K",
        cuisines: "Salads, Snacks, Desserts, Beverages",
        image: "restaurant3.avif"
    },
    {
        name: "La Pino'z Pizza",
        rating: '4.3 · 30-35 mins',
        price: "ITEMS AT ₹99",
        location: "New Friends Colony",
        cuisines: "Pizzas,Pastas,Italian,Desserts,...",
        image: "restaurant4.avif"
    },
    {
        name: "Pizza Hut",
        rating: "4.2 · 25-30 mins",
        price: "50% OFF",
        location: "Rohini M2K",
        cuisines: "Pizzas",
        image: "restaurant5.avif"
    },
    {
        name: "KFC",
        rating: '4.2 · 30-35 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "Burgers,Rolls & Wraps,Fast Food",
        image: "restaurant6.avif"
    },
    {
        name: "McDonald's",
        rating: '4.4 · 25-30 mins',
        price: "18% OFF",
        location: "Rohini",
        cuisines: "American",
        image: "restaurant7.avif"
    },
    {
        name: "Bansiwala Sweets",
        rating: '4.3 · 20-25 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "Sweets, Desserts",
        image: "restaurant6.avif"
    },
    {
        name: "Subway",
        rating: '4.3 · 25-30 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini M2K",
        cuisines: "Salads, Snacks, Desserts, Beverages",
        image: "restaurant3.avif"
    },
    {
        name: "Chinese Rok",
        rating: "4.2·30-35 mins",
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "Chinese,RAsian, Ti Ntan,MDesserts",
        image: "restaurant1.avif"
    },
    {
        name: "Burger Singh",
        rating: '4.1 · 15-20 mins',
        price: "20% OFF",
        location: "Rohini",
        cuisines: "American, Fast Foood, Snacks",
        image: "Burger Singh.avif"
    },
    {
        name: "Subway",
        rating: '4.3 · 25-30 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini M2K",
        cuisines: "Salads, Snacks, Desserts, Beverages",
        image: "restaurant3.avif"
    },
    {
        name: "Pizza Hut",
        rating: "4.2 · 25-30 mins",
        price: "50% OFF",
        location: "Rohini M2K",
        cuisines: "Pizzas",
        image: "restaurant5.avif"
    },
    {
        name: "KFC",
        rating: '4.2 · 30-35 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "Burgers,Rolls & Wraps,Fast Food",
        image: "restaurant6.avif"
    },
    {
        name: "McDonald's",
        rating: '4.4 · 25-30 mins',
        price: "30% OFF",
        location: "Rohini",
        cuisines: "American",
        image: "restaurant7.avif"
    },
    {
        name: "Bansiwala Sweets",
        rating: '4.3 · 20-25 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "Sweets, Desserts",
        image: "restaurant6.avif"
    },
];

const restaurantsContainer = document.querySelector('.restaurants1');


nrestaurants1.forEach(restaurant1 => {
    restaurantsContainer.innerHTML += `
        <div class="restaurant1">
            <img src="./images/${restaurant1.image}">
            <div class="picshadow"></div>
            <div class="price">${restaurant1.price}</div>
            <div class="text">
                <p class="subt1">${restaurant1.name}</p>
                <img src="./images/star.png"><p class="rating">${restaurant1.rating}</p>
                <p class="subt2">${restaurant1.cuisines}</p>
                <p class="subt3">${restaurant1.location}</p>
            </div>
        </div>
    `;});