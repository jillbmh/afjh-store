import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// Page Components
import Home from './components/Home'
import CategoriesList from './components/CategoriesList'
import CategorySingle from './components/CategorySingle'
import Item from './components/Item'
import NotFound from './components/NotFound'

// Global Components
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {

  const [ items, setItems ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/products') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<CategoriesList />} />
          <Route path='/categories/:category' element={<CategorySingle />} />
          <Route path='/categories/:item' element={<Item />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
