import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: '',
      characters: [],
    }
  }

  _loadData = async () => {
    const data = await fetch('https://swapi.dev/api/people/').then(response => response.json());
    return data;
  }

  async componentDidMount() {
    const apiData = await this._loadData();

    this.setState({
      characters: apiData.results,
    });
  }
  
  render() {
    const { characters, index } = this.state;
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path='/'>
            <CharacterList characters={characters} key={index}/>
          </Route>
          <Route path='/character/:index'>
              <CharacterProfile characters={characters} key={index} />
          </Route>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
