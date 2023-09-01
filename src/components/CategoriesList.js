import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CategoriesList() {

  const { state } = useLocation()
  const [items, setItems] = useState([])

  useEffect(() => {
    async function getItemsData() {
      try {
        const { data } = await axios.get('/products')
        setItems(data)
      } catch (error) {
        console.error(error)
      }
    }
    getItemsData()
  }, [state])

  return (
    <>
      <h1>{state.category}</h1>
      {items.length > 0 ?
        <Container fluid>
          <Row>
            {
              items.filter(item => item.category === state.category)
                .map(item => {
                  return (
                    <Col
                      className="item"
                      xs="6"
                      md="4"
                      lg="3"
                      key={item.id}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {item.title}
                    </Col>
                  )
                })
            }
          </Row>
        </Container >
        :
        'ERROR'
      }
    </>

  )
}