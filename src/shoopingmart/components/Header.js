import React from 'react';

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">
        <div className="title">
          <h1>Shopping Mall</h1>
        </div>
      </div>
      <div className="center">
        <ul>
          <li><a href="#">Women</a></li>
          <li><a href="#">men</a></li>
          <li><a href="#">Children</a></li>
          <li><a href="#">Beauty</a></li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="search here...."/>
      </div>
      <div className="right">
        <div className="signup">
          signup/signin
        </div>
        <div className="cart">
          cart
        </div>
      </div>
      
    </div>
  );
}

export default Header;
