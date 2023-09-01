import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo.png'

import Dropdown from 'react-bootstrap/Dropdown'


export default function Nav() {

  const [show, setShow] = useState(false)

  return (
    <>
      <nav className="header-nav">
        <Link to="/"><img src={Logo} className="nav-logo" alt="AFJH logo" /></Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >Men&apos;s Clothing</Dropdown.Item>
            <Dropdown.Item >Women&apos;s Clothing</Dropdown.Item>
            <Dropdown.Item >Jewellery</Dropdown.Item>
            <Dropdown.Item >Electronics</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>

    </>
  )
}




