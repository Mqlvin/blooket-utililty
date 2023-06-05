const ICON_CONTAINER = ".styles__blooksHolder___3TZGc-camelCase";
const HIDDEN_CLASS = "styles__noClick___2tMga-camelCase";

const ICON_WRAPPERS = document.querySelector(ICON_CONTAINER).children;

for(let i = 0; i < ICON_WRAPPERS.length; i++) {
    if(!ICON_WRAPPERS[i].classList.contains(HIDDEN_CLASS)) continue;

    let WRAPPER_CHILDREN = ICON_WRAPPERS[i].children;
    if(WRAPPER_CHILDREN.length == 1) continue;
    WRAPPER_CHILDREN[1].remove();

    let MOVE_UP_ELEMENT = WRAPPER_CHILDREN[0].children[0];
    ICON_WRAPPERS[i].appendChild(MOVE_UP_ELEMENT);
}