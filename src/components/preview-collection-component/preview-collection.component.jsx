import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

//takes title from shop.data and the array of items in shop.data and
//iterates through them with map, making a div for each item with it's name in it.
const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {   //you can do multiple .functions on a thing
                //thats all we've done here.
                items
                .filter((item,index) => index < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);

export default PreviewCollection;
