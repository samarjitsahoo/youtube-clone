import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import SearchResult from './Pages/SearchResult/searchResult'

const App = () => {
  const [sidebar, setSidebar] = React.useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
       <Route path='/' element={<Home sidebar={sidebar}/>} />
       <Route path='/video/:categoryId/:videoId' element={<Video/>} />
       <Route path='/searchResult/:query' element={<SearchResult sidebar={sidebar}/>} />
      </Routes>
    </div>
  )
}

export default App
