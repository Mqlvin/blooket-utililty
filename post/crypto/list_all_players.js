let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner; stateNode.props.liveGameController.getDatabaseVal("c", (players_raw) => { let players = Object.entries(players_raw); for(let i = 0; i < players.length; i++) { let player = players[i]; console.log("Name: " + player[0] + "\n    Coins: " + player[1].cr + "\n    Password: " + player[1].p); } });