import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Global/Header';
import Dynamic from './components/Global/Dynamic';
import Footer from './components/Modules/Footer/Footer';
import Modal from './components/Modules/main/modal/Modal';
import { useState } from 'react';

function App() {

  const [modalUp, setModalUp] = useState(false);
  const [order, setOrder] = useState(0)
  const modelOpen = () => {
    setModalUp(true)
    setOrder(1)
  }
  const modelOpenTwo = () => {
    setModalUp(true)
    setOrder(2)
  }
  const resetModel = () => { setModalUp(false) }
  return (
    <Router>
      <div className="App">
        <Header modelToggle={modelOpen} modelToggleTwo={modelOpenTwo} />
        <Dynamic />
        {modalUp ? <Modal modelClose={resetModel} order={order} inMod={modelOpen} upMod={modelOpenTwo} />: null}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
