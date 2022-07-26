import React,{ useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./EditBudget.css";

const API = process.env.REACT_APP_API_URL;

const EditBudget = () => {
  let { index } = useParams();

  const navigate = useNavigate();

  const [budget, setBudget] = useState({
    date: "",
    item_name: "",
    amount: "", 
    from: "",
    category: ""
  });

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.id] : e.target.value })
  };

  useEffect(() => {
    axios.get(`${API}/budget/${index}`)
    .then((res) => {
      setBudget(res.data)
    })
    .catch((err) => console.log(err))
  },[])

  const updateBudget = () => {
    axios.put(`${API}/budgets/${index}`, budget)
    .then((res) => {
      setBudget(res.data);
      navigate(`/budgets/${index}`)
    })
    .catch((err) => console.log(err))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBudget();
  };


  return (
    <div className='Edit-Budget'>
      <form onSubmit={handleSubmit}>
        <label >
          Date 
          <input 
          id='date' 
          type="text" 
          placeholder="Date" 
          value={budget.date}
          onChange={handleChange}
          />
        </label>
        <label >
          Name
          <input 
          id='name' 
          type="text" 
          placeholder="Name" 
          value={budget.item_name}
          onChange={handleChange}
          />
        </label>
        <label >
          Amount
          <input 
          id='amount' 
          type="number" 
          placeholder="Enter Amount" 
          value={budget.amount}
          onChange={handleChange}
          />
        </label>
        <label >
          From 
          <input 
          id='from' 
          type="text" 
          placeholder="Sender's Name" 
          value={budget.from}
          onChange={handleChange}
          />
        </label>
        <br />
        
        <input type="submit" value=" CREATE NEW ITEM " />

      </form>
      <Link to={`budgets/${index}`}></Link>

    </div>
  )
}

export default EditBudget;