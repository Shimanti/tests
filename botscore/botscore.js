if(!localstorage.getItem('botscore')){
    localstorage.setItem('botscore', 0)
}

document.querySelector('button').addEventListener('click', anothaOne)

function anothaOne() {
    let botScore=Number(localstorage.getItem('botScore')) + 1
    localstorage.setItem('botScore', botScore)
}