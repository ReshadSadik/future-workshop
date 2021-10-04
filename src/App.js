import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            <Home> </Home>{' '}
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            {' '}
            <Services> </Services>{' '}
          </Route>
          <Route path="/contact">
            {' '}
            <Contact> </Contact>{' '}
          </Route>
          <Route path="/about">
            {' '}
            <About> </About>{' '}
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
