// import './App.css'
import Calculate from '/Users/chaerin/Desktop/move_to_village/src/component/calculate'
import Start from './component/Start.jsx';
import Result from './component/Result.jsx';
import Input from './component/Input.jsx';
import RecomResult from './component/RecomResult.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/calculator" element={<Calculate />} />
        <Route path="/calculator/result" element={<Result />} />
        <Route path="/form" element={<Input />} />
        <Route path="/form/result" element={<RecomResult />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
