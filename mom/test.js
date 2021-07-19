const URL = '../mom/recipesArraySorted.txt';
fetch(URL)
.then(res => res.text())
.then(text => {
    console.log(text);
})
.catch(err => console.log(err));
