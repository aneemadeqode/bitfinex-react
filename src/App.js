import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Orders from "./Views/Orders";
import Graph from "./Views/Graph";
import Header from "./Views/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Graph />}></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
