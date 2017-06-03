import React from 'react';
import Formulaire from './formulaire';
import Message from './message';

class App extends React.Component {
	render() {
		return (
			<div className="box">
				<div>
					<div className="messages">
						<Message pseudo={this.props.params.pseudo} />
					</div>
					<Formulaire />
				</div>
			</div>
		)
	}
}

export default App;