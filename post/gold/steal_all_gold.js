//EDITME - Player name
let target = ""


let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
let player = undefined;
let cr = undefined;

stateNode.props.liveGameController.getDatabaseVal("c", (players_raw) => {
    let players = Object.entries(players_raw);
    for(let i = 0; i < players.length; i++) {
        let pl = players[i];

        if(pl[0].toLowerCase() == target.toLowerCase()) {
            player = pl[0];
            cr = pl[1].g;
        }
    }

    if(player == undefined || cr == undefined) {
        console.log("<!> Error - Player not found. <!>")
    } else {
        stateNode.setState({
            gold: stateNode.state.gold + cr,
            gold2: stateNode.state.gold + cr
        });
        stateNode.props.liveGameController.setVal({
            path: "c/".concat(stateNode.props.client.name),
            val: {
                b: stateNode.props.client.blook,
                cr: stateNode.state.gold + cr,
                tat: `${player}:${cr}`
            }
        });
    }
});