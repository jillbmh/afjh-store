import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function Home() {
  // State
  const [topRatedItem1, setTopRatedItem1] = useState(null)
  const [topRatedItem2, setTopRatedItem2] = useState(null)
  const [topRatedItem3, setTopRatedItem3] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // On initial render
  useEffect(() => {
    async function fetchTopRatedItems() {
      try {
        const { data } = await axios.get('/products')
        const sortedItems = data.sort((a, b) => b.rate - a.rate)
        setTopRatedItem1(sortedItems[0])
        setTopRatedItem2(sortedItems[1])
        setTopRatedItem3(sortedItems[2])
        console.log('TOP', topRatedItem1.rating.rate)
        console.log('TOP', topRatedItem2.rating.rate)
        console.log('TOP', topRatedItem3.rating.rate)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTopRatedItems()
  }, [])

  return (
    <>
      <section className="banner-container">
        <img className="banner"
          src="https://www.northfieldshopping.co.uk/wp-content/uploads/2017/03/vvvvvvBW5503-Northfield-Black-Friday-Banner-amends-Web-Banner.jpg"
          alt="Black Friday Banner" />
      </section>

      <Carousel className= "carousel-container">
        {topRatedItem1 && (
          <Carousel.Item>
            <img className='carousel-image' src={topRatedItem1.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{topRatedItem1.title}</h3>
              <p className="black">Rated: {topRatedItem1.rating.rate}</p>
              <p>£{topRatedItem1.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {topRatedItem2 && (
          <Carousel.Item>
            <img className='carousel-image' src={topRatedItem2.image} alt="Second slide" />
            <Carousel.Caption>
              <h3>{topRatedItem2.title}</h3>
              <p>Rated: {topRatedItem2.rating.rate}</p>
              <p>£{topRatedItem2.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {topRatedItem3 && (
          <Carousel.Item>
            <img className='carousel-image' src={topRatedItem3.image} alt="Third slide" />
            <Carousel.Caption>
              <h3>{topRatedItem3.title}</h3>
              <p>Rated: {topRatedItem3.rating.rate}</p>
              <p>£{topRatedItem3.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
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
            <Modal.Title>Sign up now!</Modal.Title>
          </Modal.Header>
          <Modal.Body>We would love to link this to a register form in the future!</Modal.Body>
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