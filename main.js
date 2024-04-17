const burger = document.getElementById('burger')
const btn = document.querySelector('.button')
const price = document.getElementById('price')

btn.addEventListener('click', () => {
 const getBurger = async () => {
    const response = await fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/5')
    const data = await response.json();
    burger.innerHTML = data.name
    price.innerHTML = data.price
    console.log(data.name, data.price)
 }
 getBurger()
})

