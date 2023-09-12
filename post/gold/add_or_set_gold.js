//EDITME - Set to `true` if you would like to add, otherwise `false` to set.
let addIfTrueOrElseSet = true;
//EDITME - The amount desired.
let amountWanted = 0;

let { stateNode } = Object.values(document.querySelector('#aeffdabedffdb > div > div'))[1].children[0]._owner;

stateNode.setState({
    gold: (addIfTrueOrElseSet ? stateNode.state.gold : 0) + amountWanted,
    gold2: (addIfTrueOrElseSet ? stateNode.state.gold : 0) + amountWanted
});