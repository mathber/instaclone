import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/cadastro/Cadastro.jsx";
import { Login } from "./pages/login/Login";
import { UserPage } from "./pages/userpage/UserPage";
import { Feed } from "./pages/feed/Feed";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/user/:id" element={<UserPage/>}/>
        <Route path="/feed" element={<Feed/>}/>
        
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </Router>

  );

}

export default App;