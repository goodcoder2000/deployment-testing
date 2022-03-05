import React from "react";
import { Link } from "react-router-dom";
import { FcHome, FcAddImage } from "react-icons/fc";

const UpperNav = () =>{
    return(
        <div className="uppernav shadow">
            <Link to='/' className="upperIcon">
                <FcHome size={40}/> 
                <span className="ph">Menu</span>
            </Link>

            <Link to='/new' className="upperIcon">
                <FcAddImage size={40}/>
                <span className="ph">New Blog</span>
            </Link>
        </div>
    );
}
export default UpperNav;