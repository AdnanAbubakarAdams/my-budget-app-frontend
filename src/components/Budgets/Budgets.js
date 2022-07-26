import React, { useState, useEffect } from "react";
import Budget from "../Budget/Budget";
import "./Budgets.css";
import axios from "axios";

const API = process.env.REACT_APP_URL;

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/budgets`)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Budgets">
      <h2> Bank Account Total: </h2>
      <section>
        <table>
          <thead>
            <tr>
              <th> Date </th>
              <th> Transactions </th>
              <th> Amount </th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default Budgets;
