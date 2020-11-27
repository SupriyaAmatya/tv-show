import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Shows from './components/shows/Shows';
import Header from './components/common/layouts';
import ShowDetails from './components/showDetails/ShowDetails';
import EpisodeDetails from './components/showDetails/episodes/EpisodeDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/shows/:showId" component={ShowDetails} />
          <Route exact path="/shows/:showId/episode/:epId" component={EpisodeDetails} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
