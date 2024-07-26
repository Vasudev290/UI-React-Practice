import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar'
import Login from './Login/login'
//import Registration from './Login/Registration1handler'
import Registration from './Login/Registration_fun'
let App = ()=>{
    return <div>
       <Navbar />
       < Registration/>
    </div>
}
export default App