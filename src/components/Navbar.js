import React from 'react';

//simple blue navbar that says "Reviews", clicking on "Reviews"
//brings the user back to the homescreen
const NavBar = (props) => {
  return (
    <nav className="navbar">
        <div style={{cursor: "pointer"}} onClick={props.exitDisplay}>Reviews</div>
    </nav>
  )
}

export default NavBar;