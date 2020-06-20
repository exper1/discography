import React, { Component } from 'react';
import logo from './cassete-newyears-party-vinyl-icon-8f87ecf5701eb51512bfa31d16d6ab72.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: ''};
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
              .then(res => res.text())
              .then(res => this.setState({ apiResponse: res }))
              .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
              <div className='App'>
                  <header className='App-header'>
                      <h1 className='App-title'>Discography</h1>
                      <img src={logo} className='App-logo' alt='logo' />
                  </header>
                  <p className='App-intro'>{this.state.apiResponse}</p>
              </div>
        )
    }
}

export default App;
