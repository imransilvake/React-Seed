// react
import React from 'react';
import ReactDOM from 'react-dom';

// app
import './styles.scss';
import './assets/i18n/i18n';
import App from './app/App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
