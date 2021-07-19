// get links needed from my Mom's cookbook online
// https://indian-cook.netlify.app

const page = document.querySelector('#page-container')
const recipe1 = page.querySelector('#pf2')
const title1 = recipe1.querySelector('.ls7').innerText

const recipeLinks = page.querySelectorAll('.h2')
const recipes = Array.from(recipeLinks).map(link=>link.textContent)

const titleLinks = page.querySelectorAll('.h3')
const titles = Array.from(titleLinks).map(link=>link.textContent)
