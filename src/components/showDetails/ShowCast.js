import React, { Component } from 'react';
import { getShowCast } from '../../services/tvShowsData';
import CastList from './CastList';

class ShowCast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cast: [],
      isLoading: true,
    }
  }

  fetchCast = async (showId) => {
    const cast = await getShowCast(showId);
    this.setState({
      cast,
      isLoading: false,
    })
  }

  componentDidMount() {
    this.fetchCast(this.props.showId)
  }

  render() {
    const { cast, isLoading } = this.state;
    console.log(cast);
    return (
      <div className="cast">
        <div className="sub-title">Cast</div>
        {isLoading && <p>Loading...</p>}
        <ul className="cast__list">
          {cast.map(person => {
            const character = person.character;
            const actor = person.person;
            const id = person.character.id;
            return <CastList key={id} character={character} actor={actor} />
          })}
        </ul>
      </div>
    );
  }
}

export default ShowCast;
