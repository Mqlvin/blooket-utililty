const mainDivName = document.querySelector("body").children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].id;
const stateNodeSelector = "#" + mainDivName + " > div > div";

let addSetNumberInputStyle = "user-select: none;outline:  none;background-color: transparent;border: 1px solid rgba(255, 255, 255, 0.15);color: rgba(255, 255, 255, 0.5);border-radius: 5px;font-family: 'Courier New', monospace;width: 150px;margin-right: 3px;";

let addSetButtonInputStyle = "user-select: none;outline:  none;width: 50px;background-color: transparent;color: rgba(255, 255, 255, 0.5);border: 1px solid rgba(255, 255, 255, 0.15);border-radius: 5px;font-family: 'Courier New', monospace;";

let giveNameInputStyle = "user-select: none;outline:  none;background-color: transparent;border: 1px solid rgba(255, 255, 255, 0.15);color: rgba(255, 255, 255, 0.5);border-radius: 5px;font-family: 'Courier New', monospace;width: 80px;margin-right: 3px;";
let giveNumberInputStyle = "user-select: none;outline:  none;background-color: transparent;border: 1px solid rgba(255, 255, 255, 0.15);color: rgba(255, 255, 255, 0.5);border-radius: 5px;font-family: 'Courier New', monospace;width: 55px;margin-right: 3px;";
let giveButtonInputStyle = "user-select: none;outline:  none;width: 55px;background-color: transparent;color: rgba(255, 255, 255, 0.5);border: 1px solid rgba(255, 255, 255, 0.15);border-radius: 5px;font-family: 'Courier New', monospace;";

let stealNameInputStyle = "user-select: none;outline:  none;background-color: transparent;border: 1px solid rgba(255, 255, 255, 0.15);color: rgba(255, 255, 255, 0.5);border-radius: 5px;font-family: 'Courier New', monospace;width: 80px;margin-right: 3px;";
let stealNumberInputStyle = "user-select: none;outline:  none;background-color: transparent;border: 1px solid rgba(255, 255, 255, 0.15);color: rgba(255, 255, 255, 0.5);border-radius: 5px;font-family: 'Courier New', monospace;width: 55px;margin-right: 3px;";
let stealButtonInputStyle = "user-select: none;outline:  none;width: 55px;background-color: transparent;color: rgba(255, 255, 255, 0.5);border: 1px solid rgba(255, 255, 255, 0.15);border-radius: 5px;font-family: 'Courier New', monospace;";

let stealAllNameInputStyle = "user-select: none;outline:  none;background-color: transparent;border: 1px solid rgba(255, 255, 255, 0.15);color: rgba(255, 255, 255, 0.5);border-radius: 5px;font-family: 'Courier New', monospace;width: 99px;margin-right: 3px;";
let stealAllButtonInputStyle = "user-select: none;outline:  none;width: 100px;background-color: transparent;color: rgba(255, 255, 255, 0.5);border: 1px solid rgba(255, 255, 255, 0.15);border-radius: 5px;font-family: 'Courier New', monospace;";

let stealEveryonesGoldButtonInputStyle = "user-select: none;outline:  none;width: 208px;background-color: transparent;color: rgba(255, 255, 255, 0.5);border: 1px solid rgba(255, 255, 255, 0.15);border-radius: 5px;font-family: 'Courier New', monospace;text-align: center;";

let dividerStyle = "user-select: none;outline:  none;background-color: transparent;color: rgba(255, 255, 255, 0.3);font-family: 'Courier New', monospace;width: 230px;text-align: center;margin: 3px;transform: translateX(-13px);";
let miniDividerStyle = "user-select: none;outline:  none;background-color: transparent;width: 230px;margin: 2px;";


let mainContainerStyle = "display: block;position: fixed;background-color: rgba(0, 0, 0, 0.5);border: 1px solid rgba(255, 255, 255, 0.15);margin: 5px;width: 230px;min-height: 100px;cursor: default;";
let fieldContainerStyle = "position: relative;margin: 10px;padding: 0px;left: 0;top: 0;width: 230px;";

let navbarStyles = "position: relative;margin: 0px;padding: 0px;left: 0;top: 0;width: 230px;height: 20px;background-color: rgba(0, 0, 0, 0.4);border-bottom: 1px solid rgba(255, 255, 255, 0.07);cursor: default;";
let navbarTextStyle = "position: relative;margin: 0px;padding: 0px;left: 0px;top: 0;width: 230px;font-size: 12px;text-align: right;transform: translateY(2px);color: rgba(255, 255, 255, 0.2);text-select: none;transition: 0.25s;";


let shown = true;
let body = document.body;

let appContainer = document.createElement("div");
appContainer.setAttribute("id", "h-cont");

appContainer.style.cssText = mainContainerStyle;
decorateContainer(appContainer);
body.prepend(appContainer);
dragElement(appContainer);
hide();

body.onkeydown = handleKey;

function handleKey(e) {
    if(e.key == "`") {
        if(shown) hide();
        else show();

        e.preventDefault();
    }
}


function decorateContainer(div) {
    div.append(generateNavBar());
    div.append(generateFields());
}



function generateNavBar() {
    let navbarElement = document.createElement("div");
    navbarElement.setAttribute("id", "h-contheader");
    navbarElement.style.cssText = navbarStyles;



    let navbarText = document.createElement("p");
    navbarText.style.cssText = navbarTextStyle;
    navbarText.innerHTML = "blooket utility&nbsp;&nbsp;";
    navbarElement.append(navbarText);

    return navbarElement;
}

function generateFields() {
    let fieldContainer = document.createElement("div");
    fieldContainer.style.cssText = fieldContainerStyle;

    fieldContainer.append(generateSetGoldField());
    fieldContainer.append(generateDividerSpaceField());
    fieldContainer.append(generateAddGoldField());
    fieldContainer.append(generateDividerField());
    fieldContainer.append(generateGiveGoldField());
    fieldContainer.append(generateDividerField());
    fieldContainer.append(generateStealAllGoldField());
    fieldContainer.append(generateDividerSpaceField());
    fieldContainer.append(generateStealGoldField());
    fieldContainer.append(generateDividerSpaceField());
    fieldContainer.append(generateStealEveryonesGold());

    return fieldContainer;
}

function generateSetGoldField() {
    let container = document.createElement("div");
    container.style.display = "flex";

    let numberField = document.createElement("input");
    numberField.style.cssText = addSetNumberInputStyle;
    numberField.setAttribute("id", "field-set-number");
    numberField.setAttribute("placeholder", "Amount");
    numberField.setAttribute("type", "number");

    let buttonField = document.createElement("button");
    buttonField.style.cssText = addSetButtonInputStyle;
    buttonField.innerText = "Set";

    buttonField.onmousedown = setMoney;

    container.append(numberField);
    container.append(buttonField);

    return container;
}

function generateAddGoldField() {
    let container = document.createElement("div");
    container.style.display = "flex";

    let numberField = document.createElement("input");
    numberField.style.cssText = addSetNumberInputStyle;
    numberField.setAttribute("id", "field-add-number");
    numberField.setAttribute("placeholder", "Amount");
    numberField.setAttribute("type", "number");

    let buttonField = document.createElement("button");
    buttonField.style.cssText = addSetButtonInputStyle;
    buttonField.innerText = "Add";

    buttonField.onmousedown = addMoney;

    container.append(numberField);
    container.append(buttonField);

    return container;
}

function generateStealAllGoldField() {
    let container = document.createElement("div");
    container.style.display = "flex";

    let nameField = document.createElement("input");
    nameField.style.cssText = stealAllNameInputStyle;
    nameField.setAttribute("id", "field-stealall-name");
    nameField.setAttribute("placeholder", "Name");
    nameField.setAttribute("type", "text");

    let buttonField = document.createElement("button");
    buttonField.style.cssText = stealAllButtonInputStyle;
    buttonField.innerText = "Steal All";

    buttonField.onmousedown = stealAllGold;

    container.append(nameField);
    container.append(buttonField);

    return container;
}

function generateStealGoldField() {
    let container = document.createElement("div");
    container.style.display = "flex";

    let nameField = document.createElement("input");
    nameField.style.cssText = stealNameInputStyle;
    nameField.setAttribute("id", "field-steal-name");
    nameField.setAttribute("placeholder", "Name");
    nameField.setAttribute("type", "text");

    let numberField = document.createElement("input");
    numberField.style.cssText = stealNumberInputStyle;
    numberField.setAttribute("id", "field-steal-number");
    numberField.setAttribute("placeholder", "Amount");
    numberField.setAttribute("type", "text");

    let buttonField = document.createElement("button");
    buttonField.style.cssText = stealButtonInputStyle;
    buttonField.innerText = "Steal";

    buttonField.onmousedown = stealGold;

    container.append(nameField);
    container.append(numberField);
    container.append(buttonField);

    return container;
}

function generateStealEveryonesGold() {
    let container = document.createElement("div");
    container.style.display = "flex";

    let buttonField = document.createElement("button");
    buttonField.style.cssText = stealEveryonesGoldButtonInputStyle;
    buttonField.innerText = "Steal everyone's gold";

    buttonField.onmousedown = stealEveryonesGold;

    container.append(buttonField);

    return container;
}

function generateGiveGoldField() {
    let container = document.createElement("div");
    container.style.display = "flex";

    let nameField = document.createElement("input");
    nameField.style.cssText = giveNameInputStyle;
    nameField.setAttribute("id", "field-give-name");
    nameField.setAttribute("placeholder", "Name");
    nameField.setAttribute("type", "text");

    let numberField = document.createElement("input");
    numberField.style.cssText = giveNumberInputStyle;
    numberField.setAttribute("id", "field-give-number");
    numberField.setAttribute("placeholder", "Amount");
    numberField.setAttribute("type", "text");

    let buttonField = document.createElement("button");
    buttonField.style.cssText = giveButtonInputStyle;
    buttonField.innerText = "Give";

    buttonField.onmousedown = giveGold;

    container.append(nameField);
    container.append(numberField);
    container.append(buttonField);

    return container;
}



function generateDividerField() {
    let divider = document.createElement("p");

    divider.style.cssText = dividerStyle;
    divider.innerHTML = "•";

    return divider;
}

function generateDividerSpaceField() {
    let divider = document.createElement("p");
    
    divider.style.cssText = miniDividerStyle;
    divider.innerHTML = "";

    return divider;
}






function hide() {
    shown = false;
    appContainer.style.zIndex = "-1";
}

function show() {
    shown = true;
    appContainer.style.zIndex = "1";
}






function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var offsetTop = 0, offsetLeft = 0;
  document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;

    offsetTop = pos4 - elmnt.style.top.replace(/[^0-9\.]+/g,'')|0;
    offsetLeft = pos3 - elmnt.style.left.replace(/[^0-9\.]+/g,'')|0;

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    elmnt.style.top = (pos4 - pos2 - offsetTop) + "px";
    elmnt.style.left = (pos3 - pos1 - offsetLeft) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}










function setMoney() {
    let amountWanted = parseInt(document.getElementById("field-set-number").value);
    if(isNaN(amountWanted)) return;

    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner;

    stateNode.setState({
        crypto: amountWanted,
        crypto2: amountWanted
    });
}

function addMoney() {
    let amountWanted = parseInt(document.getElementById("field-add-number").value);
    if(isNaN(amountWanted)) return;

    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner;

    stateNode.setState({
        crypto: stateNode.state.crypto + amountWanted,
        crypto2: stateNode.state.crypto + amountWanted
    });
}

function giveGold() {
    let playerToGiveTo = document.getElementById("field-give-name").value;
    let amountGive = parseInt(document.getElementById("field-give-number").value);
    if(isNaN(amountGive)) return;

    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner; stateNode.props.liveGameController.setVal({ path: "c/".concat(stateNode.props.client.name), val: { b: stateNode.props.client.blook, p: stateNode.state.password, cr: stateNode.state.crypto, tat: `${playerToGiveTo}:-${amountGive}` } });
}

function stealGold() {
    let playerToSteal = document.getElementById("field-steal-name").value;
    let amountSteal = parseInt(document.getElementById("field-steal-number").value);
    if(isNaN(amountSteal)) return;

    
    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner; stateNode.props.liveGameController.setVal({ path: "c/".concat(stateNode.props.client.name), val: { b: stateNode.props.client.blook, p: stateNode.state.password, cr: stateNode.state.crypto, tat: `${playerToSteal}:${amountSteal}` } });
    stateNode.setState({
        crypto: stateNode.state.crypto + amountSteal,
        crypto2: stateNode.state.crypto + amountSteal
    });
}

function stealAllGold() {
    let target = document.getElementById("field-stealall-name").value;

    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner;
    let player = undefined;
    let cr = undefined;

    stateNode.props.liveGameController.getDatabaseVal("c", (players_raw) => {
        let players = Object.entries(players_raw);
        for(let i = 0; i < players.length; i++) {
            let pl = players[i];

            if(pl[0].toLowerCase() == target.toLowerCase()) {
                player = pl[0];
                cr = pl[1].cr;
            }
        }

        if(player == undefined || cr == undefined) {
            console.log("<!> Error - Player not found. <!>");
        } else {
            stateNode.setState({
                crypto: stateNode.state.crypto + cr,
                crypto2: stateNode.state.crypto + cr
            });
            stateNode.props.liveGameController.setVal({
                path: "c/".concat(stateNode.props.client.name),
                val: {
                    b: stateNode.props.client.blook,
                    p: stateNode.state.password,
                    cr: stateNode.state.crypto + cr,
                    tat: `${player}:${cr}`
                }
            });
        }
    });
}

function stealEveryonesGold() {
    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner;

    stateNode.props.liveGameController.getDatabaseVal("c", (players_raw) => {
        let players = Object.entries(players_raw);
        let playersCrypto = {};

        for(let i = 0; i < players.length; i++) {
            let pl = players[i];

            player = pl[0];
            cr = pl[1].cr;

            playersCrypto[player] = cr;

            if(stateNode.props.client.name == player) continue;
            setTimeout(stealAllDelayed.bind(null, cr, player), i * 3000);
        }
    });
}

function stealAllDelayed(cr, player) {
    let { stateNode } = Object.values(document.querySelector(stateNodeSelector))[1].children[0]._owner;

    stateNode.setState({
        crypto: stateNode.state.crypto + cr,
        crypto2: stateNode.state.crypto + cr
    });
    stateNode.props.liveGameController.setVal({
        path: "c/".concat(stateNode.props.client.name),
        val: {
            b: stateNode.props.client.blook,
            p: stateNode.state.password,
            cr: stateNode.state.crypto + cr,
            tat: `${player}:${cr}`
        }
    });
}
