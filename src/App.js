import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Apple',
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Yen</p>
          <button>Change name</button>
        </header>
      </div>
    )
  }
}

export default App
