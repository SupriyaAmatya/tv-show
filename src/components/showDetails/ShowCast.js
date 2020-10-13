import React, { Component } from 'react';
import { getShowCast } from '../../services/tvShowsData';

class ShowCast extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cast:[],
       isLoading: true,
    }
  }

  fetchCast = async (showId) =>{
    const cast = await getShowCast(showId);
    this.setState({
      cast,
      isLoading: false,
    })
  }

  componentDidMount(){
    this.fetchCast(this.props.showId)
  }
  
  render() {
    const { cast, isLoading } = this.state;
    
    return (
      <div>
        <h2>Show Cast</h2>
        {isLoading && <p>Loading...</p>}
    {cast.map(person => { 
      const character = person.character.name;
      const actor = person.person.name;
      const id = person.character.id;
      return <div key={id} ><strong>{actor}</strong> as <em>{character}</em></div> })}
      </div>
    );
  }
}

export default ShowCast;
