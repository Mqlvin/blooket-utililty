//EDITME - Set to `true` if you would like to add, otherwise `false` to set.
let addIfTrueOrElseSet = true;
//EDITME - The amount desired.
let amountWanted = 0;

let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;

stateNode.setState({
    crypto: (addIfTrueOrElseSet ? stateNode.state.crypto : 0) + amountWanted,
    crypto2: (addIfTrueOrElseSet ? stateNode.state.crypto : 0) + amountWanted
});