import React, {Component} from 'react';
import './App.css';
import NavBar from './navbar'
import Main from './main'

class App extends Component {
  render() {
    return (<div className="App">
      <NavBar/>
      <header className="App-header">
        <h1 className="App-title">Adventure Planning Application</h1>
      </header>
      <Main/>
    </div>);
  }
}

export default App;
