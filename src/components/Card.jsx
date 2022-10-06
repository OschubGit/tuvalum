import React from 'react'
import Button from './Button'

const Card = ({title, src, onclick, action, year, price}) => {
  const defaultImg = "https://idento.es/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
  return (
    <div className='card'>
        <div className='card__src'>
          <img src={src ? src : defaultImg} alt="product" />
        </div>
        <div className='card__content'>
          <h2 className='card__content-title title-xxs'>{title}</h2>
          <div className='card__content-info'>
            <span>{year}</span>
            <span className='title-xs'>{price}€</span>
          </div>
          <Button
            type="button"
            disabled={false}
            className="cButton cButton-primary cButton-xs cButton-fullwidth"
            onClick={onclick}
          >
            {action}
          </Button>
        </div>
    </div>
  )
}

export default Card