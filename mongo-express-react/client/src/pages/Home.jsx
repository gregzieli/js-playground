import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
      <Link to={'./list'}>
        <button variant="raised">
          List
        </button>
      </Link>
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>
    )
  }
}

export default Home;
