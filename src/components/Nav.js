import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../images/logo.png'

import Dropdown from 'react-bootstrap/Dropdown'


export default function Nav() {

  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getItemsData() {
      try {
        const { data } = await axios.get('/products/categories')
        setCategories(data)
      } catch (error) {
        console.error(error)
      }
    }
    getItemsData()
  }, [])

  function handleClick(category) {
    console.log(category)
    navigate(
      '/categories',
      {
        state: {
          category,
        },
      })
  }

  return (
    <>
      <nav className="header-nav">
        <Link to="/"><img src={Logo} className="nav-logo" alt="AFJH logo" /></Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.length > 0 ?
              categories.map(category => {
                return <Dropdown.Item key={category} onClick={() => handleClick(category)}>{category}</Dropdown.Item>
              })
              :
              'Error'
            }
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </>
  )
}




