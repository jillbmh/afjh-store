import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'



export default function CategorySingle() {


  // ! State
  const [ item, setItem ] = useState(null)

  const { itemId } = useParams()
  // ! On initial render
  useEffect(() => {
    async function getItemData(){
      try {
        const { data } = await axios.get(`/products/${Number(itemId)}`)
        setItem(data)
        console.log('Data received from API: ', itemId)
      } catch (err) {
        console.error(err)
      }
    }
    getItemData()
  }, [itemId]) 


  return (
    <>

      { item ? 
        <section className="product-container">
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${item.image})`,
              height: '300px',
              backgroundSize: 'cover',
            }}
          >
          </div>
          <div className="product-title">
            <p>{item.title}</p>
          </div>
          <div className="price">
            <p>£{item.price}</p>
          </div>
          <div className="item-description">
            <p>{item.description}</p>
          </div>
        </section>

        :
        'Loading...'
      }
    </>
  )
}
