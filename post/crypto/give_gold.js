//EDITME - Player name
let playerToGiveTo = "";
//EDITME - Amount to give to the player
let amountGive = 1000;

let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner; stateNode.props.liveGameController.setVal({ path: "c/".concat(stateNode.props.client.name), val: { b: stateNode.props.client.blook, p: stateNode.state.password, cr: stateNode.state.crypto, tat: `${playerToGiveTo}:${amountGive}` } });