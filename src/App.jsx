import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Header from './Componenets/Header'
import VideoDetail from './Componenets/VideoDetail'
import Feed from './Componenets/Feed'
import SearchResult from './Componenets/SearchResult'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <div className='flex flex-col h-full'>
      <Header/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
      </Routes>

    </div>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
