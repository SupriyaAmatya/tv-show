import React, { Component } from 'react';
import { getIndividualShow } from '../../services/tvShowsData';

import Seasons from './seasons/Seasons';
import ShowCast from './ShowCast';
import ShowInfo from './ShowInfo';

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
    console.log(showInfo);
    return (
      <div className="show-details my-8x">
        <div className="container">
          <div className="row">
            <div className="col col-9-lg">
              <ShowInfo data={showInfo} />
              <Seasons showId={showId} />
            </div>
            <div className="col col-3-lg">
              <ShowCast showId={showId} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ShowDetails;
