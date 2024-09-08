document.addEventListener("DOMContentLoaded", () => {
    const nfood = [{image:"north indian.avif"},{image:"pizzas.avif"},{image:"burgers.avif"},{image:"chinese.avif"},{image:"rolls.avif"},
        {image:"momos.avif"},{image:"dosa.avif"},{image:"noodles.avif"},{image:"ice-cream.avif"},{image:"cakes.avif"},{image:"biryani.avif"},
        {image:"pasta.avif"},{image:"pav bhaji.avif"},{image:"pastry.avif"},{image:"kebabs.avif"},,{image:"south indian.avif"},{image:"paratha.avif"},
        {image:"pure veg.avif"},{image:"SHawarma.avif"},{image:"Rasmalai.avif"}];

    const carousel__itemcontainer = document.querySelector('.foodtypes');


    nfood.forEach(dish => {
        carousel__itemcontainer.innerHTML += `
            <div class="carousel_item">
                <img src="./images/${dish.image}">
            </div>
    `;});})