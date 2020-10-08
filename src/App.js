import React, {Component} from 'react';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: '',
      setup: '',
      delivery: '',
    }
  }

  componentDidMount() {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming')
    .then(response => response.json())
    .then(result => {
      if (result.type === 'single') {
        return this.setState({ joke: result.joke })
      } else {
        return (
          this.setState({ setup: result.setup }),
          this.setState({ delivery: result.delivery })
        )
      }
      
    });
  };

  render() {
    const {joke, setup, delivery} = this.state;
    return (
      <div className='tc'>
        <button className='joke-button bg-gold bw3 br1 b--dark-red grow grow:hover '>joke</button>
        <div className='joke f3 bg-gold'>
          <div>{joke}</div>
          <div>{setup}</div>
          <div>{delivery}</div>  
        </div>
        
      </div>
      )
  }
}

export default App;
