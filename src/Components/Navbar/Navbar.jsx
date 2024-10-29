import "./Navbar.css";
import React, { useState } from "react";
import menu_icon from "/assets/menu.png";
import logo from "/assets/logo.png";
import search_icon from "/assets/search.png";
import upload_icon from "/assets/upload.png";
import more_icon from "/assets/more.png";
import notification_icon from "/assets/notification.png";
import profile_icon from "/assets/Samarjit.jpg";
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu_icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
        <img className="samartube_logo" src="/assets/favicon.png" alt="" />
        <h2>SamarTube</h2>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input onChange={handleInputChange} type="text" placeholder="Search" />
          <Link reloadDocument to={'/searchResult/' + searchQuery}><img src={search_icon} alt=""/></Link>
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
