import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Home/Dashboard/Dashboard";
// import QuizCompletion from './components/QizCompletion/QuizCompletion';
import QuizCompletion from './components/Home/QuizCompletion/QuizCompletion';
import Question from './components/Home/questions/Questions';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/quiz" exact component={QuizCompletion} />
          <Route path="/question" exact component={Question} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
