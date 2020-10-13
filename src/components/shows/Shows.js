import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllShows } from '../../services/tvShowsData';

class Shows extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoading: true,
    }
  }

  fetchShows = () => {
    setTimeout(async () => {
      const data = await getAllShows();
      this.setState({
        data,
        isLoading: false,
      });
    }, 1000
    )
  }

  componentDidMount() {
    this.fetchShows();
  }

  render() {
    const { data, isLoading } = this.state;
    const renderAllShows = data && data.length ? data.map(show => {
      return (
        <div key={show.id}>
          <Link
            to={{
              pathname: `/shows/${show.id}`,
              state: { data: show },
            }}
          >{show.name}</Link>
        </div>

      )
    }) : null

    return (
      <div className="App">
        {isLoading && <div>Loading...</div>}
        {renderAllShows}
      </div>
    );
  }
}

export default Shows;
