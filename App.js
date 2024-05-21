import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
