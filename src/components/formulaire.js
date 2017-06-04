import React from 'react';

class Formulaire extends React.Component {

	state = {
		length: this.props.length
	}

	creatMessage = event => {
		event.preventDefault();
		const message = {
			message : this.message.value,
			pseudo : this.props.pseudo
		};

		this.props.addMessage(message);

		this.messageForm.reset();
		const length = this.props.length;
		this.setState({ length });
	};

	compteur = event => {
		const length = this.props.length - this.message.value.length
		this.setState({length})
	};

	render() {
		return (
			<form className="form" onSubmit={e => this.creatMessage(e)} ref={input => this.messageForm = input}>
				<textarea 
					maxLength={this.props.length} 
					required 
					ref={input => this.message = input}
					onChange={e => this.compteur(e)}
				>
				</textarea>
				<div className="info">{this.state.length}</div>
				<button type='submit'>Envoyer !</button>
			</form>
		)
	}

	static propsTypes = {
		addMessage: React.PropTypes.func.isRequired
	};
}

export default Formulaire;