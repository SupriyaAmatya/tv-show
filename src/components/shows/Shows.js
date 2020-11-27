import React, { Component } from 'react';

import ShowCard from '../common/card';
import SearchBox from './SearchBox';
import { getAllShows, getSearchResults } from '../../services/tvShowsData';

class Shows extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoading: true,
      search: '',
    }
  }

  fetchShows = () => {
    setTimeout(async () => {
      const data = await getAllShows();
      this.setState({
        data,
        isLoading: false,
      });
    }, 500
    )
  }

  handleSearchInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getSearchResults = async (e) => {
    e.preventDefault();
    let newData = [];
    const searchResult = await getSearchResults(this.state.search);

    searchResult.map(result => newData.push(result.show));
    this.setState({
      ...this.state,
      data: newData,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchShows();
  }

  render() {
    const { data, isLoading } = this.state;

    const renderShows = data && data.length ? data.map(show => {
      return (
        <ShowCard key={show.id} show={show} />
      );
    }) : <p>No shows available</p>

    return (
      <div className="main-wrapper">
        <SearchBox name='search' placeholder="Search TV Show" onChange={this.handleSearchInput} onSubmit={this.getSearchResults}/>
        <div className="container">
          <div className="title">Shows</div>

          {isLoading && <div>Loading...</div>}

          <div className="row">
            {renderShows}
          </div>
        </div>
      </div>
    );
  }
}

export default Shows;
