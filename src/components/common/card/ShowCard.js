import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import noimage from '../../../assets/images/no-img.png';

const ShowCard = (props) => {
  const { show } = props;

  return (
    <div className="col col-6 col-3-md col-2-xl">
      <div className="card">
        <div className="card__image">
          <img src={show.image ? show.image.medium : noimage} alt={show.name} />
          <div className="card__overlay">
            <div className="card__overlay-content">
              <BsStarFill />
              {show.rating && show.rating.average ? <div className="rating">{show.rating.average} / 10</div> : null}
              <div className="genres my-4x">
                {show.genres && show.genres.length ?
                  show.genres.map((genre, i) => {
                    return (
                      <div className="genres__item mb-1x" key={i}>
                        {genre}
                      </div>
                    );
                  }) : null
                }
              </div>
              <Link to={`/shows/${show.id}`}>
                <button className="btn btn--outlined-primary">View Details</button>
              </Link>
            </div>
          </div>

        </div>
        <div className="card__info">
          <div className="card__title">
            <Link to={`/shows/${show.id}`}> {show.name}</Link>
          </div>
          <div className="card__sub-title small">
            {show.language}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
