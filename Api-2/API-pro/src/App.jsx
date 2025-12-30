import { useState } from 'react'
import Addnewdata from './Addnewdata';
import {Routes,Route,Link} from "react-router-dom";
import Displaydata from './Displaydata';
import Editdata from './Editdata';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container text-center ">
      <Link className="btn btn-primary me-4" to="/">Display Data</Link>
      <Link className="btn btn-primary" to="./add">Add Data</Link>
    
    </div>
<br /><br />
    <Routes>
      <Route path='/' element={<Displaydata/>}/>
      <Route path='/add' element={<Addnewdata/>}/>
      <Route path='/edit/:id' element={<Editdata/>}/>
    </Routes>
      {/* <h1>project using API</h1> */}
    </>
  )
}

export default App
