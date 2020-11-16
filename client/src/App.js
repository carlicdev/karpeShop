import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
