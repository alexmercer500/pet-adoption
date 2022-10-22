import './App.css';
import Header from './components/Global/Header';
import Dynamic from './components/Global/Dynamic';
import Footer from './components/Modules/Footer/Footer';
import Modal from './components/Modules/main/modal/Modal';
import { useState, useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';

function App() {

  const [modalUp, setModalUp] = useState(false);
  const [order, setOrder] = useState(0)
  const modelOpen = () => {
    setModalUp(true)
    setOrder(1)
  }
  const modelOpenTwo = () =>{
    setModalUp(true )
    setOrder(2)
  }
  const resetModel = () => {setModalUp(false)}
  return (
    <div className="App">
      <Header modelToggle={modelOpen} modelToggleTwo = {modelOpenTwo}/>
      <Dynamic />
      {modalUp && <Modal modelClose={resetModel} order={order} inMod={modelOpen} upMod={modelOpenTwo}/>}
      <Footer />
    </div>
  );
}

export default App;
