import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Service from './Component/Service'
import Login from './Component/Login'
import User from './Component/User'
let App = ()=>{
    return <div>
        <Router>
              <Navbar />
           <Routes>
            <Route path='/index' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user' element={<User />} />
            <Route path='/login' element={<Login />} />
           </Routes>
       </Router>
    </div>
}
export default App