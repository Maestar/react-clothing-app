import React from 'react';

import SHOPDATA from './shop.data.jsx';
import PreviewCollection from '../../components/preview-collection-component/preview-collection.component';

class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOPDATA 
        }
    }

    render(){
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default ShopPage;