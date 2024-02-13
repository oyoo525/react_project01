import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Advertising from '../temp/Advertising.tsx';
import Header from '../temp/header/Header.tsx';
import Home from '../Home.tsx';

function App() {
  return (
   <BrowserRouter>
    <Advertising />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
