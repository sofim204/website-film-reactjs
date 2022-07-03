import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

import "./css/style.css"

function App() {
	return (
		<div>
			<div className='main-background'>
				<NavigationBar />
				<Intro />
			</div>
			<div className='trending-section'>
				<Trending />
			</div>
			<div className='superhero-section'>
				<Superhero />
			</div>
		</div>
	);
}

export default App;
