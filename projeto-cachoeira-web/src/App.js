import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Cachoeira1 from './components/pages/Cachoeira1';
import Cachoeira2 from './components/pages/Cachoeira2';
import Cachoeira3 from './components/pages/Cachoeira3';
import Cachoeira4 from './components/pages/Cachoeira4';

function App() {
  return (
      <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sobre' exact component={Sobre}/>
          <Route path='/cachoeira1' exact component={Cachoeira1}/>
          <Route path='/cachoeira2' exact component={Cachoeira2}/>
          <Route path='/cachoeira3' exact component={Cachoeira3}/>
          <Route path='/cachoeira4' exact component={Cachoeira4}/>
        </Switch>
      </Router>
      </>
  );
}

export default App;
