import React, { useState, useEffect } from "react";
import "./BudgetDetails.css";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const BudgetDetails = () => {
  const [budget, setBudget] = useState({});
  let { index } = useParams();

  const navigate = useNavigate();
  
    useEffect(() => {
      axios.get(`${API}/budgets/${index}`)
      .then((res) => {
        setBudget(res.data)
      })
      .catch((error) => {
        // console.log(error)
        navigate(`404`)
      })
    },[index])

    const handleDelete = () => {
      axios.delete(`${API}/budgets/${index}`)
      .then((res) => navigate(`/budgets`))
      .catch(err => console.log(err))
    }
        const handleGoBack = () => {
          navigate(`/budgets`)
        }

    return (
      <article>
        <h3>DATE OF TRASACTION : {budget.date}</h3>
        <h3>TRANSACTION : {budget.item_name}</h3>
        <h3>{budget.amount}</h3>
        <h3>{budget.from}</h3>
        <h3>{budget.category}</h3>
        <br />
        <div>
          <button onClick={handleGoBack}> GO BACK </button>
        </div>
        <div>
          <button onClick={handleDelete}> DELETE </button>
        </div>

        <div>
          <Link to={`/budgets/${index}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          <Link to={`/budgets/new`}>
            <button> CREATE NEW TRANSACTION </button>
          </Link>
        </div>
      </article>
    );
 
}

export default BudgetDetails;