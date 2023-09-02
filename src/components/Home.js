import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// import ExampleCarouselImage from 'components/ExampleCarouselImage'

export default function Home() {

  // ! State
  const [ item, setItem ] = useState(null)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { itemId } = useParams()
  // ! On initial render
  useEffect(() => {
    async function getItemData(){
      try {
        const { data } = await axios.get('/products/15')
        setItem(data)
        console.log(item)
      } catch (err) {
        console.error(err)
      }
    }
    getItemData()
  }, [itemId]) 
  return (
    <>
      <section className="banner-container">
        <img className="banner"
          src= "https://www.northfieldshopping.co.uk/wp-content/uploads/2017/03/vvvvvvBW5503-Northfield-Black-Friday-Banner-amends-Web-Banner.jpg"
          alt= "Black Friday Banner" />
      </section>
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100"
            src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
            alt="First slide" />
          <Carousel.Caption>
            <h3>ITEM TITLE</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src="https://food-images.files.bbci.co.uk/food/recipes/basic_white_bread_18916_16x9.jpg"
            alt="First slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      <section className="signup-container">
        <div className="neon">
        Sign up for 10% discount
        </div>
        <Button variant="primary" onClick={handleShow}>
          Sign Up
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  )
}

        