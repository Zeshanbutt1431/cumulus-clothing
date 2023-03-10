import './collectionItem.scss';
import React from 'react'

const CollectionItem = ({id, imageUrl, name, price}) => {
  return (
    <div className='collection-item'>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
  )
}

export default CollectionItem