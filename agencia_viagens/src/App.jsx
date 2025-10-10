
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import Muralhas from './componentes/Muralhas'
import Aruba from './componentes/Aruba'
import Grand from './componentes/Grand'


function App() {

  return (
    <>
     <main>
        <Router>
            <Header />
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Escocia' element={<Escocia />} />
                  <Route path='/Grand' element={ <Grand />} />
                  <Route path='/Aruba' element={ <Aruba />} />
                  <Route path='/Muralhas' element={ <Muralhas />} />
              </Routes>          
            <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
