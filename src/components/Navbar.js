import React from 'react';


const NavBar = (props) => {
  return (
    <nav className="navbar">
        <div style={{cursor: "pointer"}} onClick={props.exitDisplay}>Reviews</div>
    </nav>
  )
}

export default NavBar;