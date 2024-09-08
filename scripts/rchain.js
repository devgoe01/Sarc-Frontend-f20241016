const nrestaurants = [
    {
        name: "Chinese Rok",
        rating: "4.2·30-35 mins",
        price: "ITEMS AT ₹149",
        location: "Rohini",
        cuisines: "Chinese,RAsian, Ti Ntan,MDesserts",
        image: "restaurant1.avif"
    },
    {
        name: "Burger King",
        rating: "4.5 · 20-25 mins",
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "Burgers, American",
        image: "restaurant2.avif"
    },
    {
        name: "Subway",
        rating: '4.3 · 25-30 mins',
        price: "40% OFF UPTO ₹80",
        location: "Rohini M2K",
        cuisines: "Salads, Snacks, Desserts, Beverages",
        image: "restaurant3.avif"
    },
    {
        name: "La Pino'z Pizza",
        rating: '4.3 · 30-35 mins',
        price: "ITEMS AT ₹89",
        location: "New Friends Colony",
        cuisines: "Pizzas,Pastas,Italian,Desserts,...",
        image: "restaurant4.avif"
    },
    {
        name: "Pizza Hut",
        rating: "4.2 · 25-30 mins",
        price: "ITEMS AT ₹189",
        location: "Rohini M2K",
        cuisines: "Pizzas",
        image: "restaurant5.avif"
    },
    {
        name: "KFC",
        rating: '4.2 · 30-35 mins',
        price: "ITEMS AT ₹149",
        location: "Rohini",
        cuisines: "Burgers,Rolls & Wraps,Fast Food",
        image: "restaurant6.avif"
    },
    {
        name: "McDonald's",
        rating: '4.4 · 25-30 mins',
        price: "ITEMS AT ₹149",
        location: "Rohini",
        cuisines: "American",
        image: "restaurant7.avif"
    },
    {
        name: "Burger Singh",
        rating: '4.1 · 15-20 mins',
        price: "ITEMS AT ₹99",
        location: "Rohini",
        cuisines: "American, Fast Foood, Snacks",
        image: "Burger Singh.avif"
    }
];

const restaurantContainer = document.querySelector('.restaurants');


nrestaurants.forEach(restaurant => {
    restaurantContainer.innerHTML += `
        <div class="restaurant">
            <img src="./images/${restaurant.image}">
            <div class="picshadow"></div>
            <div class="price">${restaurant.price}</div>
            <div class="text">
                <p class="subt1">${restaurant.name}</p>
                <img src="./images/star.png"><p class="rating">${restaurant.rating}</p>
                <p class="subt2">${restaurant.cuisines}</p>
                <p class="subt3">${restaurant.location}</p>
            </div>
        </div>
    `;});