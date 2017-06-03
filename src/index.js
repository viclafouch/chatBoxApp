// Code React.js
import React from 'react';
import { render } from 'react-dom';
import Connexion from './components/connexion';
import App from './components/app';
import NotFound from './components/notfound';
import './index.css';
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion}/>
				<Match exactly pattern="/pseudo/:pseudo" component={App}/>
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
	<Root />,
	document.getElementById('root')
);