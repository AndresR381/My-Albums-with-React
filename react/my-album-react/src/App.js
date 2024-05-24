import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"

import Home from './components/Home'
import About from './components/About'
import Artists from './components/Artists'
import Bands from './components/Bands'
import Albums from './components/Albums'

const App =()=> {

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/about' element={ <About /> }></Route>
                <Route path='/artists' element={ <Artists /> }></Route>
                <Route path='/bands' element={ <Bands /> }></Route>
                <Route path='/albums' element={ <Albums /> }></Route>
                <Route path='*' element={ <ErrorPage /> }></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App