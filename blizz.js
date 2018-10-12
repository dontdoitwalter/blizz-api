const baseURL = 'https://us.api.battle.net/'
const key = '&apikey=bxaw4yds8sbrx9ta2qk2fgby28ux7jbh'
const locale = '?locale=en_us'
let act = 'd3/data/act'
let currentAct = 0;
let url;
const searchForm = document.querySelector('form');
const section = document.querySelector('section');
// let prelude = document.getElementById("#prelude")

function preludeBtn(){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
let article = document.createElement('article');
let heading = document.createElement('h2');
let text = document.createElement('p')
heading.innerText =  "Welcome to my API Project!";
text.innerText = "The video to your right is all of the cinematics from Diablo 3 combined into one video. In the header you can click on an Act to see what quests are in that act. Click prelude to return to this prompt. Don't worry, even though you might get a little click happy, the video will continue to play. ENJOY!"
article.appendChild(heading);
section.appendChild(article);
article.appendChild(text);
}

function actOne(){
    currentAct=0;
    actInfo();
}
function actTwo(){
    currentAct = 1;
    actInfo();
}
function actThree(){
    currentAct=2;
    actInfo();
}
function actFour(){
    currentAct=3;
    actInfo();
}
function actFive(){
    currentAct=4;
    actInfo();
}
function actInfo() {
    url = baseURL + act + locale + key;
    fetch(url).then(result => {
        return result.json();
    })
        .then(json => {
            displayResults(json);
        });
}
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let quests = json.acts[currentAct].quests;
    if (quests.length === 0) {
     console.log("no result");
    } else {
        for (let i = 0; i < quests.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('p');
            heading.innerText = quests[i].name;
            article.appendChild(heading);
            section.appendChild(article);
        }
    }
};