// JS by Dan Høegh
// UCN MMD 2019

const tearElement = (elm, index) => {
    let elmText = elm.textContent;
    elm.textContent = '';
    for (let j = 0; j < 3; j++) {
        let newElm = document.createElement("span");
        newElm.textContent = elmText;
        if (j > 0){
            newElm.classList.add('torn-elm');
            newElm.classList.add('torn-' + j);
        } else {
            newElm.classList.add('torn-base');
        }
        elm.appendChild(newElm);
    }
}

const selectorTarget = '.torn';
const elms = document.querySelectorAll(selectorTarget);

elms.forEach(tearElement);