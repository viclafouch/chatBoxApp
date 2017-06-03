import React from 'react';

class Formulaire extends React.Component {
	render() {
		return (
			<form className="form">
				<textarea maxLength="140" required ></textarea>
				<div className="info">140</div>
				<button type='submit'>Envoyer !</button>
			</form>
		)
	}
}

export default Formulaire;