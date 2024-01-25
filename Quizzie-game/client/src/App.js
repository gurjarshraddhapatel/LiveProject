import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Home/Dashboard/Dashboard";
import MalePage from './components/Home/Dashboard/MalePage'; // Adjust the path as needed
import FemalePage from './components/Home/Dashboard/FemalePage'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/male" exact component={MalePage} />
          <Route path="/female" exact component={FemalePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
