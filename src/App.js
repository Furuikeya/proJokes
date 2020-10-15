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
    fetch('https://sv443.net/jokeapi/v2/joke/Programming')
    .then(response => response.json())
    .then(result => {
      if (result.type === 'single' && result.id !== '28') {
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
      <div className='app'>
        <div>
          <JokeButton 
            jokeClick={this.jokeButtonClick}
          />  
        </div>
        
        <div className='joke'>
          <JokeBox 
            joke={joke} 
            setup={setup} 
            delivery={delivery}
          />  
        </div>
        
        <div className='githubDiv'>
          <a href='https://github.com/Furuikeya/projokes'> GitHub </a>
        </div>
      </div>
    )
  }
}

export default App;
