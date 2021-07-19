//DOESN'T WORK YET
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  let drink = document.querySelector('input').value
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  fetch(URL + drink)
    .then(res => res.json()) //parse response as json
    .then(data => {
      console.log(data.drinks)
      for (let i = 0; i<data.drinks.length; i++) {
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('h1').innerText = data.drinks[i].strDrink
        document.querySelector('p').innerText = data.drinks[i].strInstructions
      }
    })
        .catch(err => {
        console.log(`error ${err}`)
    })
}
