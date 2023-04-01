import React from 'react'
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Sidebar = () => {
    let user=JSON.parse(localStorage.getItem('user_info'))
    console.log(user);
    const navigate=useNavigate();

    const logOut=()=>{
        localStorage.clear();
        navigate("/login");
       }
    if (!user){
        <p>loading information ...</p>
       }
  return (
    <div>
    <div className="wrapper">
   
        <div className="sidebar">
         <div className='profile'>
         <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
                <h3>{user.name}</h3>
         </div>
         <ul>
         <li>
                    <a href="/categories">
                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span>

                        <span class="item">Categories</span>
                        </a>
                </li>
                <li>
                    <a href="/products">
                        <span class="icon"><i class="fas fa-database"></i></span>
                        <span class="item">Products</span>
                    </a>
                </li>
                <li>
                    <a href="/users">
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">Users</span>
                    </a>
                </li>
               
              
              
               
            </ul>
        
            <button class="btn" id="signIn" onClick={logOut}>Log Out</button>

        </div>
        </div>

    </div>
  )
}

export default Sidebar
