import React from 'react'

const Genre = (props) => {
  const { genres } = props;
  console.log(genres);
  const renderList = (
    <ul className="pills">
      {genres && genres.length && genres.length > 0 ?
        genres.map((genre, i) => {
          return <li className="pills__item" key={i}>{genre}</li>
        }) : null
      }
    </ul>
  );

  return renderList;
};

export default Genre;
