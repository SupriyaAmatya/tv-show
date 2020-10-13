import React, { Component } from 'react';
import { getAllEpisodes } from '../../../services/tvShowsData';
import SeasonList from './SeasonList';

class Seasons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episodes: [],
      isLoading: true,
    }
  }

  fetchEpisodes = async (id) => {
    const episodes = await getAllEpisodes(id);
    this.setState({
      episodes,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchEpisodes(this.props.showId);
  }

  render() {
    const { episodes, isLoading } = this.state;

    const episodesBySeason = episodes.reduce((acc, episode) => {
      if (!acc[episode.season]) acc[episode.season] = [];
      acc[episode.season].push(episode);
      return acc;
    }, {});

    return (
      <div>
        <h3> Episode Lists: </h3>
        {isLoading && <p>Loading...</p>}
        {Object.keys(episodesBySeason)
          .map(seasonNumber => {
            return <SeasonList
              key={`season-${seasonNumber}`}
              number={seasonNumber}
              episodes={episodesBySeason[seasonNumber]}
              showId={this.props.showId}
            />
          })
        }
      </div>
    )
  }
}

export default Seasons;
