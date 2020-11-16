import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
