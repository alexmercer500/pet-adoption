import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Global/Header';
import Footer from './components/Modules/Footer/Footer';
import Main from './components/Modules/main/Main';
import Dogs from './components/Modules/Pet/Dogs/Dogs';
import Cats from './components/Modules/Pet/Cats/Cats';
import Birds from './components/Modules/Pet/Birds/Birds';
import Exotic from './components/Modules/Pet/Exotic/Exotic';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/Dogs' element={<Dogs />} />
        <Route exact path='/Cats' element={<Cats />} />
        <Route exact path='/Birds' element={<Birds />} />
        <Route exact path='/Exotic' element={<Exotic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
