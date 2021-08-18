import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './ShopData';

class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Collections: SHOP_DATA
        }
    }
    
    render() {
        const {Collections}=this.state;
        return (
            <div className='shop-page'>
                {
                    Collections.map(({id,...otherCollectionProps})=>
                    <CollectionPreview id={id} {...otherCollectionProps}/>
                    )
                }
            </div>
        )
    }
}

export default ShopPage;
