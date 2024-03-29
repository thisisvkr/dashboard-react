import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <SideBar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/product' element={<Dashboard />} />
            <Route path='/customers' element={<Dashboard />} />
            <Route path='/income' element={<Dashboard />} />
            <Route path='/promote' element={<Dashboard />} />
            <Route path='/help' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
