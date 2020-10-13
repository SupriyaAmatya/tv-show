import React, { Component } from 'react';
import { getIndividualShow } from '../../services/tvShowsData';

import Seasons from './seasons/Seasons';
import ShowCast from './ShowCast';

class ShowDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: [],
      showId: this.props.match.params.showId,
      isLoading: true,
    }
  }

  fetchShows = async (showId) => {
    const showInfo = await getIndividualShow(showId);
    this.setState({
      showInfo,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchShows(this.state.showId);
  }

  render() {
    const { showInfo, showId } = this.state;

    return (
      <div>
        {showInfo.name}
        <Seasons showId={showId} />
        <ShowCast showId={showId} />
      </div>
    );
  }
}

export default ShowDetails;

