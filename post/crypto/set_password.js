let password = "ray meeeeeeeeeeelor";

let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner; stateNode.setState({ password }); stateNode.props.liveGameController.setVal({ path: "c/".concat(stateNode.props.client.name), val: { b: stateNode.props.client.blook, p: password, cr: stateNode.state.crypto } });