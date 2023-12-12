import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from './layout/Mainlayout';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainlayout/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
