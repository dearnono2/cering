
import { Route } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';



//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';
import Vid from './components/main/Vid';
import News from './components/main/News';


//sub
import About from './components/sub/About';
import Services from './components/sub/Services';
import Project from './components/sub/Project';
import Contact from './components/sub/Contact';

import './scss/style.scss';
function App() {
	return (
		<>
			<Header />
			<Route exact path='/'>
				<Visual />
				<Content />
				<Vid />
				<News />
			</Route>

			<Route path='/about' component={About} />
			<Route path='/services' component={Services} />
			<Route path='/project' component={Project} />
			<Route path='/contact' component={Contact} />


			<Footer />
		</>

	);
}

export default App;