import React from 'react';

class Message extends React.Component {

	preRender = (isUser) => {
		if (isUser) {
			return (
				<p className="user-message">
					{this.props.details.message}
				</p>
			)
		}
		else {
			return (
				<p className="not-user-message">
					<b>{this.props.details.pseudo}</b>: 
					{this.props.details.message}
				</p>
			)
		}
	};

	render() {
		return (
			this.preRender(this.props.isUser(this.props.details.pseudo))
		)
	}

	static propsTypes = {
		details: React.PropTypes.object.isRequired
	};
}

export default Message;