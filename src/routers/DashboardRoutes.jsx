import Navbar from "../components/ui/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from "../components/hero/HeroScreen"


const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path='/' element={<MarvelScreen/>}/>
              <Route path='/marvel' element={<MarvelScreen/>}/>
              <Route path='/dc' element={<DcScreen/>}/>
              <Route path='/hero/:heroeId' element={<HeroScreen/>}/>
              <Route path='/search' element={<SearchScreen/>}/>
          </Routes>
        </div>
    </>
  )
}

export default DashboardRoutes