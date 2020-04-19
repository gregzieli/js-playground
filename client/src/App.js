import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import './App.css';

class App extends React.Component {
  render(){
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={List} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}

export default App;
