import './preview.scss';
import CollectionItem from '../collection-item/CollectionItem';
 const Preview = ({title, items}) => {
  return (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((items, indx)=> indx < 4).map(({id, ...otherItemProps}) =>(
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
    
  )
}
export default Preview