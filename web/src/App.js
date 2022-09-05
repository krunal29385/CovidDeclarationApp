import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserDeclaration from "./components/AddUserDeclaration";
import "./App.css";

function App() {
  return (
    <Router>
        <div className="container mt-3">
          <Routes>
            <Route exact path={["/", "/AddUserDeclaration"]} component={AddUserDeclaration} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
