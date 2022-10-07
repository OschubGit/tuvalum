import React from 'react'
import Button from './Button'

const Pagination = ({handleNextPage, handlePrevPage, currentPage, color, size, variant, fullwidth}) => {
  return (
    <div className='pagination'>
        <Button
        type="button"
        disabled={currentPage <= 1}
        className={`cButton cButton-${color} cButton-${size} cButton-${variant} ${fullwidth && "cButton-fullwidth"}`}
        onClick={handlePrevPage}
      >
        Anterior
      </Button>
      <p data-testid="current-page">{currentPage}</p>
      <Button
        type="button" 
        disabled={currentPage >= 14}
        className={`cButton cButton-${color} cButton-${size} cButton-${variant} ${fullwidth && "cButton-fullwidth"}`}
        onClick={handleNextPage}
      >
        Siguiente
      </Button>
    </div>
  )
}

export default Pagination