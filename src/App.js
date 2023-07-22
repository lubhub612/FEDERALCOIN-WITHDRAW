import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigate to="/withdraw" replace={true} />} />
          <Route exact path='/withdraw' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

