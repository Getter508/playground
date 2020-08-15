import React, { Component } from 'react';

class Joke extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      joke: null
    };
  }

  componentDidMount(){
    fetch('https://icanhazdadjoke.com', { headers: {'Accept': 'application/json'} })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong...');
      }
    }).then(
      (data) => {
        this.setState({
          isLoaded: true,
          joke: data.joke
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { error, isLoaded, joke } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="joke">{joke}</div>;
    }
  }
}

export default Joke
