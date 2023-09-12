//EDITME - Player name
let target = ""


let { stateNode } = Object.values(document.querySelector('#aeffdabedffdb > div > div'))[1].children[0]._owner;
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
        console.log("<!> Error - Player not found. <!>")
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