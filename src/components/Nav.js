import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../images/logo.png'

import Dropdown from 'react-bootstrap/Dropdown'


export default function Nav() {

  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  // This function fetches a list of categories and sets them to the "categories" state.
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

  // This function is triggered whenever an item in the dropdown menu is clicked
  // Based on which dropdown item is clicked, it receives a 'category'
  // It navigates the user to the categories page and, in addition, sends the name of the category over with it
  function handleClick(category) {
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
      <nav className="nav-header">
        <Link to="/"><img src={Logo} className="nav-logo" alt="AFJH logo" /></Link>
        <Dropdown className="nav-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* For every item in the categories array, a dropdown item is created */}
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




