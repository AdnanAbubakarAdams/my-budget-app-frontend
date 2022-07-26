import React from 'react';
import { Link } from "react-router-dom"
import "./Budget.css";

const Budget = ({ budget, index }) => {
  return (
    <div>
      <tr>
        <td>
          {budget.date} 
        </td>
        <td>
          <Link>{budget.item_name}</Link>
        </td>
        <td>
          <Link to={`/budget/${index}`}></Link>
        </td>
      </tr>
    </div>
  )
}

export default Budget;