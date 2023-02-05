import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Global/Header';
import Dynamic from './components/Global/Dynamic';
import Footer from './components/Modules/Footer/Footer';
import Modal from './components/Modules/main/modal/Modal';

function App() {

	return (
		<Router>
			<div className="App">
				<Header />
				<Dynamic />
				{/* {modalUp ? <Modal modelClose={resetModel} order={order} inMod={modelOpen} upMod={modelOpenTwo} /> : null} */}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
