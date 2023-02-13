import './App.css'

import Data from './Products.json';

function Card() {
  return (
    <div className="Card">
        { 
          Data && Data.map( product => {
            return(
              <div className='box' key={ product.id }>
                  <img className='prod-img' src={product.image} alt="" />
                  <h2 className='brand'>{product.brand}</h2>
                  <p className='price'>Price: ${product.price}</p>
                  <a className='atc-btn' href="#">Add to cart</a>
              </div>
            )
          })
        }
    </div>
  )
}

export default Card
 