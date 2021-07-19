fetch("recipesArraySorted.txt")
  .then(res => res.text()) //parse response as text
  .then(text => {
    console.log(text)
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
