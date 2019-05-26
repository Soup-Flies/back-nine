import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


import './App.css';
import Verify from "./modules/verify/containers/Verify";
import MainRoutes from "./modules/router";

class App extends React.Component {
  state = { verified: false }

  userVerified = () => this.setState({
    verified: true
  })

  render() {
    return (
      <div className="App">
        <Router>
          { 
            this.state.verified ?
              <MainRoutes /> :
              <Verify verifyUser={this.userVerified} />
          }
        </Router>
      </div>
    );
  }
}

export default App;
