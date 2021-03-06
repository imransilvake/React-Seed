// react
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// app
import AppRouter from './AppRouter';

const App = () => {
	return (
		<Suspense fallback={<div>...Loading</div>}>
			<BrowserRouter>
				{/* Header */}

				<AppRouter />

				{/* Footer */}
			</BrowserRouter>
		</Suspense>
	);
};
export default App;
