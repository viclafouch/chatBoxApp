import React from 'react';
import Formulaire from './formulaire';
import Message from './message';
import base from '../base';

class App extends React.Component {

	state = {
		messages: {}
	}

	componentWillMount() {
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		})
	}

	addMessage = message => {
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
		this.setState({ messages });
	};

	render() {
		const messages = Object
		.keys(this.state.messages)
		.map(key => <Message key={key} details={this.state.messages[key]}/>)
		return (
			<div className="box">
				<div>
					<div className="messages">
						{messages}
					</div>
					<Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
				</div>
			</div>
		)
	}
}

export default App;