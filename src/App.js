import Navbar from './components/NavBar/Navbar';
import Budgets from './components/Budgets/Budgets';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/budgets" element={<Budgets/>}/>

          </Routes>
        </main>
      </Router>
     
    </div>
  );
}

export default App;
