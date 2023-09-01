import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo.png'

import Modal from 'react-bootstrap/Modal'


export default function Nav() {

  const [show, setShow] = useState(false)

  return (
    <>
      <nav className="header-nav">
        <Link to="/"><img src={Logo} className="nav-logo" alt="AFJH logo" /></Link>
        <div className="nav-toggle" onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {/* <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header className="centred text-center" closeButton>
          <nav onClick={() => setShow(false)}>
            <Link className="" to="/categoriesList">Categories</Link>

          </nav>
        </Modal.Header>
      </Modal> */}
    </>
  )
}