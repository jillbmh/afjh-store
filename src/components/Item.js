import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Item() {

  // ! State
  const [ item, setItem ] = useState(null)

  const { itemId } = useParams()
  // ! On initial render
  useEffect(() => {
    async function getItemData(){
      try {
        const { data } = await axios.get('/products/${itemId}')
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

      { item ? 
        <Container className='item-single-container' fluid>
          <Col>
            <Row className='item-single-image' md="6" style={{ backgroundImage: `url(${item.image})` }}></Row>
            <Row className='item-single-detail' md="6">
              <h1 className='featured'>{item.title}</h1>
              <p>£{item.price}</p>
              <p className='bold'>
                <em>{item.description}</em>
              </p>
            </Row>
          </Col>
        </Container>
        :
        'Loading...'
        // <Spinner /> 
      }
    </>
  )
}