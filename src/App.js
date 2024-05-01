import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={App}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
