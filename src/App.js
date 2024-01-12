import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// import Operate from './Operate';
import Admin from './components/Admin'
import SubjectMaster from './components/master/SubjectMaster'
import RegistTask from './components/master/RegistTask'

const Top = () => {
	return (
		<>
			<Link to='/admin'>管理画面へ</Link>
		</>
	)
}

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
				<Route path='/' element={<Top />} />
				<Route path='/admin' element={<Admin />}>
					{/* elementを追加 */}
					<Route path='/admin/subject' element={<SubjectMaster />} />
					<Route path='/admin/regist' element={<RegistTask />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
