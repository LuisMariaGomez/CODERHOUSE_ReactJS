import './ComponentsStyles/ComponentsCss.css'
import Item from './item';
import { useEffect, useState } from 'react';
import getProducts from '../data/mockAPI.js';



export default function itemListContainer(){
    const [prod, setProd] = useState([]);
    useEffect(() => {
        const ProductsDataPromise = getProducts();
        ProductsDataPromise.then((data) => {
            setProd(data);
        });
    }, []);

    return(
        <div className='itemListContainer'>
            {
                prod.map((item) => { return <Item key={item.id} item={item}></Item>})
            }
        </div>
    )
}

