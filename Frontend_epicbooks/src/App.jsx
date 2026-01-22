import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import ModifyUser from "./pages/ModifyUser"
import DetailBook from "./pages/DetailBook"


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login/>}/>
      <Route  path='/homepage' element={<Homepage/>}/>
      <Route  path='/modifyUser' element={<ModifyUser/>}/>
      <Route  path='/loginPage' element={<LoginPage/>}/>
      <Route  path='/books/:id' element={<DetailBook/>}/>
    

      </Routes>
      </BrowserRouter>
  ) 
}

export default App;
