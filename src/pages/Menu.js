import React, { useState } from "react";
import useFetch from "../components/useFetch";
import '../index.css';
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = () =>{
    const { blogs, loading } = useFetch();
    
    console.log(blogs)
    
    return(
        <div className="menu shadow">
            <h3>Your all blog</h3>
            { loading && <h2>Loading...</h2> }
            <div className="allBlogContainer">
                { blogs && blogs.map((item) =>{
                    return(
                        <div
                        className="eachBlog"
                        key={item.id}>
                            {/* <div className="left">
                                <img src={item.img} className="img"/>
                            </div> */}
                            
                            <div className="right">
                                <h4>{item.title}</h4>
                                <p>written by {item.author}</p>
                                <span>
                                    <BsHeart size={20} className="likeBtn"/>{ item.like}
                                </span>

                                <div className="perSection">
                                    <p>{item.body}</p>
                                </div>
                                <Link to={`/blogs/${item.title}`}>read more...</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Menu;