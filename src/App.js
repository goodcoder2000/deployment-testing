import React from "react";
import { BrowserRouter as 
        Router, 
        Routes,
        Route
} from "react-router-dom";
import Nav from "./components/Nav";
import UpperNav from "./components/UpperNav";
import './index.css';
import About from "./pages/About";
import Details from "./pages/Details";
import Menu from "./pages/Menu";
import NewBlog from "./pages/NewBlog";
import Nopage from "./pages/Nopage";

const App = () =>{
    return(
        <Router>
            <div className="app">
                <h1>Awesome Share</h1>
                <UpperNav/>
                <div className="content">
                    <Nav/>        

                    <Routes>
                                <Route path="/" element={<Menu/>}/>
                                <Route exact path="/new" element={<NewBlog/>}/>
                                <Route path="/blogs/:title" element={<Details/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="*" element={<Nopage/>}/>
                    </Routes>                        
                </div>
            </div>
        </Router>
    );
}
export default App;