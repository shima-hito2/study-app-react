import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// import Operate from './Operate';
import Admin from './components/Admin';
import SubjectMaster from './components/master/SubjectMaster';
import RegistTask from './components/master/RegistTask';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={<Operate />} />
    //     <Route exact path='/admin' element={<Admin />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Admin />}>{/* elementを追加 */}
        <Route path="/admin/subject" element={<SubjectMaster />} />
        <Route path="/admin/regist" element={<RegistTask />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
