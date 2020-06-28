// react
import React from 'react';

// app
import { useTranslation } from 'react-i18next';

const Todo = () => {
	// hook: translation
	const { t } = useTranslation();

	return (
		<section className="sc-app">
			<h2>React</h2>
			<p>{t('WELCOME')}</p>
		</section>
	);
};
export default Todo;
