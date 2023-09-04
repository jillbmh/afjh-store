import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CategoriesList() {

  // The state of "category" was sent via Nav.js with useNavigate
  // useLocation unwraps this state so it can be accessed in this file
  const { state } = useLocation()
  const [items, setItems] = useState([])

  // This function fetches all the items
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
  }, [])

  return (
    <div className="category-page">
      <div className="category-inside">
        <h1>{state.category}</h1>
        {items.length > 0 ?
          <Container fluid >
            <Row>
              {
                // The items are filtered, returning only those whose category matches the current category state
                // Then, the remaining items are mapped, and, for each item, a new Col is created, displaying a picture and the title text
                items.filter(item => item.category === state.category)
                  .map(item => {
                    return (
                      <div key={item.id} className="item-container">
                        <Col
                          as={Link}
                          to={`/categories/${item.id}`}
                          className="item"
                          xs="6"
                          md="4"
                          lg="3"
                          style={{ backgroundImage: `url(${item.image})` }}
                        >
                        </Col>
                        <h3>{item.title}</h3>
                        <p>£{item.price}</p>
                      </div>
                    )
                  })
              }
            </Row>
          </Container >
          :
          'ERROR'
        }
      </div>

    </div>

  )
}