import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Swipe from './components/Slider/Slider';
import Slideshow from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            <Home> </Home>{' '}
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            {' '}
            <Services> </Services>{' '}
          </Route>
          <Route exact path="/contact">
            {' '}
            <Contact> </Contact>{' '}
          </Route>
          <Route exact path="/about">
            {' '}
            <About> </About>{' '}
          </Route>
          <Route>
            <NotFound> </NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
