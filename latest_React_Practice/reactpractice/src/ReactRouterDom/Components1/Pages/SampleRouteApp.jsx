import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./ReactRouterDom/Components1/Pages/Home";
import Profile from "./ReactRouterDom/Components1/Pages/Profile";
import Discuss from "./ReactRouterDom/Components1/Pages/Discuss";
import ContestLayout from "./ReactRouterDom/Components1/Pages/ContestLayout";
const App = () => {
  return (
    //  <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path='/about' element={<About/>}></Route>
    //     <Route path='/contact' element={<Contect/>}></Route>
    //   </Routes>
    //  </Router>
    <Router>
      <Routes>
        {/* Default Routes */}
        <Route index Component={Home} />

        {/* Normal Route */}
        <Route path="/profile" Component={Profile} />
        <Route path="/user" element={<h2>Name: Vasu</h2>} />

        {/* Neasted Routes */}
        <Route path="/discuss" Component={Discuss}>
          <Route
            path="interview-experience"
            element={<p>Interview experience</p>}
          />
          <Route
            path="interview-question"
            element={<p>Interview question</p>}
          />
          <Route
            path="interview-mindset"
            element={<p>Interview mindset</p>}
          />
          <Route path="*" element={<div>Discuss Page was not found..!</div>}/>
        </Route>

        {/* Dynamic Routes */}
        <Route path="/contest/:contestId/:userId" Component={ContestLayout}/>

        {/* Wildcard Routes */}
        <Route path="*" element={<h2>Page not Found..!</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
