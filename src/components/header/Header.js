import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navStyle ={
    display: 'flex',
    marginBottom:'30px',
    marginLeft: 'auto',
    justifyContent: 'space-around',
  }
  return (
    <div className="header" style={{ display: 'flex', background:'pink', borderBottom: '1px solid gray', position:'fixed', top:'0', left:'0', width:'100%'}}>
      <h1>TV Show</h1>
      <nav style={navStyle}>
        <div>
          <NavLink exact to="/"> Home </NavLink>
        </div>
        <div>
          <NavLink exact to="/shows"> TV Shows </NavLink></div>
        <div>
          <NavLink exact to="/schedule"> Schedule </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
