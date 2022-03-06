import React from "react";
import { Link } from "react-router-dom";
import { FcHome, FcAddImage } from "react-icons/fc";
import { HiOutlineShieldExclamation } from "react-icons/hi";

const Nav = () =>{
    return(
        <div className="nav shadow pc">
            <div className="eachNav shadow">
                <Link to="/">
                    <FcHome size={40}/>
                    <span className="linkText">Menu</span>
                    </Link>
            </div>
            <div className="eachNav shadow">
                <Link to="/new">
                    <FcAddImage size={40}/>
                    
                    <span className="linkText">New Blog</span>
                </Link>
            </div>

            <div className="eachNav shadow">
                <Link to="/about">
                    <HiOutlineShieldExclamation size={40}/>
                    
                    <span className="linkText">About this</span>
                </Link>
            </div>
        </div>
    );
}
export default Nav;