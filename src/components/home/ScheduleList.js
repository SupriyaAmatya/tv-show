import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillCameraVideoFill } from 'react-icons/bs';

const ScheduleList = (props) => {
  const { data } = props;
  const showId = data.show.id;
  const epId = data.id;
  return (
    <div className='schedule d-flex justify-between'>
      <Link to={`/shows/${showId}`} >
        <div className="schedule__image">
          <img src={data.show.image && data.show.image.medium} alt={data.show.name} />
        </div>
      </Link>
      <div className='schedule__info'>
        <div className='schedule__name'>
          <Link to={`/shows/${showId}`}>{data.show.name}</Link>
        </div>
        <div className='schedule__ep-name'>
          <Link to={`/shows/${showId}/episode/${epId}`}>
            {data.name} <BsFillCameraVideoFill />
          </Link>
        </div>
        <div className="schedule__extra-info">
          <strong>Season</strong>: {data.season},
          <strong className="ml-1x"> Episode</strong>: {data.number},
          <strong className="ml-1x"> Airtime</strong>: {data.airtime},
          <strong className="ml-1x"> Runtime</strong>: {data.runtime} min
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
