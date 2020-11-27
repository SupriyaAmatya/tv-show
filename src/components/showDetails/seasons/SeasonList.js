import React from 'react'
import EpisodeList from '../episodes/EpisodeList';

const SeasonList = (props) => {
  const { number, episodes, showId } = props;

  return (
    <div className="season">
      <p><strong>Season {number}</strong></p>
      <EpisodeList episodes={episodes} showId={showId} />
    </div>
  );
};

export default SeasonList;
