import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Item() {

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
        const { data } = await axios.get('/api/products/${itemId}')
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
      { item ? (
        <>
          <section className='item-single-container'>
            <div className='item-single-image' style={{ backgroundImage: `url(${item.image})` }}></div>
            <h1 className='featured'>{item.title}</h1>
            <p>£{item.price}</p>
            <p>{item.description}</p> 
          </section>
          <section>
            <Button variant="primary" onClick={handleShow}>
              Add to Basket
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add to basket!</Modal.Title>
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
      ) : (
        'Loading...'
        // <Spinner /> 
      )}
    </>
  )
}