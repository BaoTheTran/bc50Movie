
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import renderRoutes from './routes';
import {Suspense} from "react";



function App() {
  return (
    <Suspense>
      <BrowserRouter fallback={<div>Loading...</div>}> 
          <Routes>
            {renderRoutes()}
          </Routes>
      </BrowserRouter>
    </Suspense>
    
  );
}

export default App;
