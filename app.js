let btnTranslate = document.querySelector("#btn-translate")

btnTranslate.addEventListener("click", translateTextToBanana)

const serverAPI = "https://api.funtranslations.com/translate/minion.json"

function translateTextToBanana() {
    let text = document.querySelector("#user-input");

    let URL = serverAPI +"?text=" + text.value;

    fetch(encodeURI(URL))
    .then(res => res.json())
    .then(json => {
        console.log(json)
        updateTranslation(json.contents.translated)
    })
    .catch(err => {
        console.log(err)
        updateTranslation("Some error occured")
    })

}

function updateTranslation(value) {
    let translatedTextElem = document.querySelector("#translated-text");
    translatedTextElem.innerText = value;
}