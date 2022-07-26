import React from 'react';
import { Link } from "react-router-dom";
import "./Budget.css";

const Budget = ({ budget, index }) => {
  return (
    
      <tr>
        <td>
          {budget.date} 
        </td>
        <td>
          <a href=''>{budget.item_name}</a>
        </td>
        <td>
          <a href=''>{budget.amount}</a>
        </td>
        <td>
          <a href=''>{budget.from}</a>
        </td>
        <td>
          <Link to={`/budget/${index}`}></Link>
        </td>
      </tr>
  
  )
}

export default Budget;