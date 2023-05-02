import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './component/Main'
import Header from "./component/Header"
import Bookings from "./component/Bookings"
import Footer from "./component/Footer"


function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/bookings" element={<Bookings />} />
       </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
