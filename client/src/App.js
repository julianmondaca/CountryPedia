import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/index';
import Home from './components/Home/index';
import Form from './components/Form/index';
import CountryDetail from './components/CountryDetail/index';

function App() {
	return (
		<Router>
			<Route exact path='/' component={LandingPage} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/form' component={Form} />
			<Route exact path='/countryDetail/:id' component={CountryDetail} />
		</Router>
	);
}

export default App;
