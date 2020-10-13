import React, { Component } from 'react';
import { getEpisodeDetails } from '../../../services/tvShowsData';

class EpisodeDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episodeDetails: [],
      isLoading: true,
    }
  }

  fetchEpisodeDetails = async (episodeId) => {
    const episodeDetails = await getEpisodeDetails(episodeId);
    this.setState({
      episodeDetails,
      isLoading: false,
    });
    console.log(episodeDetails._embedded.show);
  }

  componentDidMount() {
    const episodeId = this.props.match.params.epId;
    this.fetchEpisodeDetails(episodeId)
  }

  render() {
    const { episodeDetails, isLoading } = this.state;

    let renderEpisode = null;
    if (isLoading) {
      renderEpisode = <p>Loading...</p>
    }

    if (!isLoading && episodeDetails) {
      renderEpisode = (
        <>
          <h2>{episodeDetails._embedded.show.name}</h2>
          <h3>Season {episodeDetails.season}</h3>
          <h5>Episode {episodeDetails.number}</h5>
          <div dangerouslySetInnerHTML={{ __html: episodeDetails.summary }}></div>
        </>
      )
    }

    return (
      <div>
        {renderEpisode}
      </div>
    );
  }
}

export default EpisodeDetails;
