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
        var container = document.querySelector(".container");
        for (var i = 0; i < 3; i++) {
            var img = document.createElement('img')
            img.id = "img" + i;
            img.setAttribute("class", "item animated headShake")
            container.appendChild(img);
        }
    }
    console.log(filenames)
    for (var i = 0; i < 3; i++) {
        var img = document.querySelector("#img" + i);
        img.src = "img/" + filenames[i] + ".png";
    }
}

function nextRound() {
    if (round < 17) {
        changeImageSources();
        console.log('round', round)
        round = round + 1;
    } else {
        resetGame();
    }
}

function resetGame() {
    createRandomOrderForImages()
    for (var i = 0; i < 3; i++) {
        var img = document.getElementById('img' + i)
        img.parentNode.removeChild(img);
    }
    round = 1;
}
