import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true
  };
  getMovies = () => {
    return axios.get('https://yts-proxy.now.sh/list_movies.json');
  };
  componentDidMount() {
    this.getMovies().then(data => {
      const {
        data: {
          data: { movies }
        }
      } = data;
      console.log(movies);
    });
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
