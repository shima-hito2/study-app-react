import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Operate from './Operate';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Operate />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
