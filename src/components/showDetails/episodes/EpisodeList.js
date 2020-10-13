import React from 'react'
import { Link } from 'react-router-dom';

const EpisodeList = (props) => {
  const { episodes, showId } = props;
  return (
    <div>
      {episodes.map(ep => {
        const epId = ep.id;
        return (
          <div key={epId}>
            <Link to={`/shows/${showId}/episode/${epId}`}>{ep.name}</Link>
            {epId}
          </div>
        )
      })}
    </div>
  )
}

export default EpisodeList
