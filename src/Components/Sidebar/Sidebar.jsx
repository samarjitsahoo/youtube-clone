import React from 'react'
import './Sidebar.css'
import home from '/assets/home.png'
import game_icon from '/assets/game_icon.png'
import automobiles from '/assets/automobiles.png'
import sports from '/assets/sports.png'
import entertainment from '/assets/entertainment.png'
import tech from '/assets/tech.png'
import music from '/assets/music.png'
import blogs from '/assets/blogs.png'
import news from '/assets/news.png'
import jack from '/assets/jack.png'
import simon from '/assets/simon.png'
import tom from '/assets/tom.png'
import megan from '/assets/megan.png'
import cameron from '/assets/cameron.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="" /><p>Home</p>
        </div>
        <div className={`side-links ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className={`side-links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className={`side-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className={`side-links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className={`side-links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className={`side-links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className={`side-links ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`side-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="" /><p>Mr. Beast</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="" /><p>Justin Bieber</p>
        </div>
        <div className="side-links">
          <img src={megan} alt="" /><p>5 Mins craft</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
