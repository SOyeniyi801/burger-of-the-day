const burger = document.getElementById("burger");
const btn = document.querySelector(".button");
const price = document.getElementById("price");

btn.addEventListener("click", () => {
  const getBurger = async () => {
    try {
      const response = await fetch(
        "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/"
      );
      const data = await response.json();
      const randomBurger = Math.floor(Math.random() * data.length);
      console.log(data[randomBurger]);

      burger.innerHTML = data[randomBurger].name;
      price.innerHTML = data[randomBurger].price;
    } catch {
      burger.innerHTML = "There was an error";
    }
  };
  getBurger();
});
