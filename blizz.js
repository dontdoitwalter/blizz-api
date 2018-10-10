const baseURL = 'https://us.api.battle.net/'
const key = '&apikey=bxaw4yds8sbrx9ta2qk2fgby28ux7jbh'
const locale = '?locale=en_us'
let act = 'd3/data/act'
let currentAct = 0;
let url;
const searchForm = document.querySelector('form');
const section = document.querySelector('section');
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
        console.log("No Results")
    } else {
        for (let i = 0; i < quests.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            heading.innerText = quests[i].name;
            article.appendChild(heading);
            section.appendChild(article);
        }
    }
};
  