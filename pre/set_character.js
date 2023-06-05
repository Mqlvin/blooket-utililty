//EDITME - Image name
let character = "Walrus";

let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;

stateNode.props.liveGameController.setVal({
    path: "c/".concat(stateNode.props.client.name) + "/b",
    val: character
});