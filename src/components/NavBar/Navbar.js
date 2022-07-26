import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <h1>
        <Link to="/budgets">AddyBank</Link>
      </h1>
      <h1>
        <Link to="/budgets">Transactions</Link>
      </h1>
      <h1>
        <Link to="/budgets/new">New Transaction</Link>
      </h1>
    </nav>
  )
}

export default Navbar;