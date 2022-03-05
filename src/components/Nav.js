import React from "react";
import { Link } from "react-router-dom";
import { FcHome, FcAddImage } from "react-icons/fc";

const Nav = () =>{
    return(
        <div className="nav shadow pc">
            <div className="eachNav shadow">
                <Link to="/">
                    <FcHome size={40}/>
                    <span>Menu</span>
                    </Link>
            </div>
            <div className="eachNav shadow">
                <Link to="/new">
                    <FcAddImage size={40}/>
                    
                    <span>New Blog</span>
                </Link>
            </div>
        </div>
    );
}
export default Nav;