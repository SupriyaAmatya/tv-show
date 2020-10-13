import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Shows from './components/shows/Shows';
import ShowDetails from './components/showDetails/ShowDetails';
import EpisodeDetails from './components/showDetails/episodes/EpisodeDetails';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: '120px' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/shows/:showId" component={ShowDetails} />
          <Route exact path="/shows/:showId/episode/:epId" component={EpisodeDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
