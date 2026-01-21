import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<LoginPage/>}/>
      <Route index path='/homepage' element={<Homepage/>}/>
    

      </Routes>
      </BrowserRouter>
  ) 
}

export default App;
