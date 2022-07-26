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
    return (
    <div>

    </div>
  )
 
}

export default BudgetDetails;