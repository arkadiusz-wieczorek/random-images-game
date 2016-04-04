/*
Arkadiusz Wieczorek
www: http://arkadiusz-wieczorek.pl
e-mail: kontakt@arkadiusz-wieczorek.pl
*/

var filenames = [];
var posititon = 0;
var round = 1;
createRandomOrderForImages();

function createRandomOrderForImages() {
    for (var i = 0; i < 48; i++) {
        filenames.push(i)
    }
    filenames.sort(function() {
        return .5 - Math.random();
    });
    console.log(filenames)
}

function getThreeElements() {
    var randomNumbers = [];
    for (var i = posititon; i < posititon + 3; i++) {
        randomNumbers.push(filenames[i])
    }
    posititon = posititon + 3;
    return randomNumbers;
}

function changeImageSources() {
    var filenames = getThreeElements();
    if (round === 1) {
        var header = document.querySelector('header');
        var h2 = document.createElement('h2');
        h2.textContent = "Round " + round;
        header.appendChild(h2)
        var container = document.querySelector(".container");
        for (var i = 0; i < 3; i++) {
            var img = document.createElement('img')
            img.id = "img" + i;
            img.setAttribute("class", "item animated headShake")
            container.appendChild(img);
        }
    }
    console.log('images', filenames.toString())
    for (var i = 0; i < 3; i++) {
        var img = document.querySelector("#img" + i);
        img.src = "img/" + filenames[i] + ".jpg";
        var h2 = document.querySelector('h2');
        h2.textContent = "Round " + round;
    }
}

function nextRound() {
    if (round < 17) {
        changeImageSources();
        console.log('round', round);
        round = round + 1;
    } else {
        resetGame();
    }
}

function resetGame() {
    var h2 = document.querySelector('h2');
    if (h2 !== null) h2.parentNode.removeChild(h2);
    for (var i = 0; i < 3; i++) {
        var img = document.getElementById('img' + i);
        if(img !== null) img.parentNode.removeChild(img);
    }
    round = 1;
    posititon = 0;
    filenames = [];
    createRandomOrderForImages()
}
