fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json()) //parse response as json
  .then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
