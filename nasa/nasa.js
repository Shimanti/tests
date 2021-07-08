document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const x = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key='

    fetch(url)
    .then(res => res.json())
    // parse response as json
    .then(data => {
        console.log(data)        // show data in console
        // special treatment for video vs image
        if(data.media_type === "image"){
            document.querySelector('img').src = data.hdurl
        }else if(data.media_type === "video"){
            document.querySelector('iframe').src = data.url
        }else{
          alert("Media not supported")
        }
        document.querySelector('h3').innertext = data.explanation

      })
      .catch(err => {
        console.log(`error ${err}`)
      })
}
