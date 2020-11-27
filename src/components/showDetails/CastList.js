import React from 'react'

const CastList = (props) => {
  const { actor, character } = props;
  return (
    <li className="cast__item">
      <div className="cast__image">
        <img src={actor.image && actor.image.medium} alt={actor.name} />
      </div>
      <div className="cast__info">
        <strong>{actor.name}</strong>
        <div className="label">as <em>{character.name}</em></div>
      </div>
    </li>
  )
}

export default CastList
