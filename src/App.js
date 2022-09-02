import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import FullDisclosure from './views/FullDisclosure';
import BidsAndAwards from './views/BidsAndAwards';
import AboutTheTown from './views/AboutTheTown';
import Offices from './views/Offices';
import Officials from './views/Officials';
import { useState } from 'react';
function App() {
	const [pageNavigator, setPageNavigator] = useState(1);
	return (
		<div className="App">
			<Navbar setView={setPageNavigator} />
			{pageNavigator === 1 && <HomePage />}
			{pageNavigator === 2 && <FullDisclosure />}
			{pageNavigator === 3 && <BidsAndAwards />}
			{pageNavigator === 4 && <AboutTheTown />}
			{pageNavigator === 5 && <Offices />}
			{pageNavigator === 6 && <Officials />}
		</div>
	);
}

export default App;
