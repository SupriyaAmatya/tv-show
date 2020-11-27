import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBox = (props) => {
  const { onChange, name, placeholder, onSubmit } = props;

  return (
    <div className="search-section">
      <div className="overlay" />
      <div className="container">
        <form onSubmit={onSubmit} className="search-box">
          <BsSearch className="search-box__icon"/>
          <input className="search-box__input" type="search" placeholder={placeholder} name={name} onChange={onChange} />
          <button className="btn btn--primary search-box__btn">Get Show</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
