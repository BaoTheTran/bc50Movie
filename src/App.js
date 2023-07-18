
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminTemplate from './page/AdminTemplate';
import DashBoard from './page/AdminTemplate/DashBoard';
import AddUser from './page/AdminTemplate/AddUser';
import HomeTemplate from './page/HomeTemplate';
import HomePage from './page/HomeTemplate/Homepage';
import AboutPage from './page/HomeTemplate/AboutPage';
import ListMoviePage from './page/HomeTemplate/ListMoviePage';
import renderRoutes from './routes';



function App() {
  return (
    <BrowserRouter> 
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
