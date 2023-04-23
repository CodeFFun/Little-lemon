import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
// import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />}/>
        </Routes>
          <Main />
      </Router>
    </div>
  );
}

export default App;
