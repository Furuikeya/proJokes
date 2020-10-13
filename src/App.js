import React, {Component} from 'react';
import JokeBox from './JokeBox';
import JokeButton from './JokeButton';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: 'Click the button',
      setup: 'to get a joke',
      delivery: 'about programmers',
    }
    this.jokeButtonClick = this.jokeButtonClick.bind(this);
  }

 

  jokeButtonClick() {
    // this.setState.joke='';
    // this.setState.setup='';
    // this.setState.delivery='';
    fetch('https://sv443.net/jokeapi/v2/joke/Programming')
    .then(response => response.json())
    .then(result => {
      if (result.type === 'single') {
        return (
          this.setState({ joke: result.joke }),
          this.setState({ setup: '' }),
          this.setState({ delivery: '' })
          )
      } else {
          return (
            this.setState({ setup: result.setup }),
            this.setState({ delivery: result.delivery }),
            this.setState({ joke: '' })
          )
        } 
    })
  }

  render() {
    const {joke, setup, delivery} = this.state;
    return (
      <div className='tc'>
        <JokeButton 
        jokeClick={this.jokeButtonClick}
        />
        <JokeBox 
        joke={joke} 
        setup={setup} 
        delivery={delivery}
        />
      </div>
    )
  }
}

export default App;
