import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: { fname: 'Apple', lname: 'Banana' },
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name.fname} {this.state.name.lname}
          </p>
          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name: { fname: 'Avocado', lname: 'Coconut' },
                }
              })
            }}
          >
            Change name
          </button>
        </header>
      </div>
    )
  }
}

export default App
