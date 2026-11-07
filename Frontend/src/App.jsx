import { Routes, Route} from "react-router"

import Home from "./Components/Home.jsx"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"
import Todo from "./Components/Todo.jsx"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register"element={<Register/>}></Route>
      <Route path="/todo"element={<Todo/>}></Route>
     </Routes>
    </>
  )
}

export default App
