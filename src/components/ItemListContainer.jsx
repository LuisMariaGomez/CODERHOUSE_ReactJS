import './ComponentsStyles/ComponentsCss.css'
import Item from './item';
import { useEffect, useState } from 'react';
import getProducts from '../data/mockAPI.js';
import { useParams } from 'react-router';
import { getProductsByMarca } from '../data/mockAPI.js';

export default function itemListContainer(){
    const [prod, setProd] = useState([]);
    const {marcaParam} = useParams();
    console.log(marcaParam);

    useEffect(() => {
        if(marcaParam === undefined){
            const ProductsDataPromise = getProducts();
            ProductsDataPromise.then((data) => {
                setProd(data);
            });
        } else {
            const ProductsByMarcaPromise = getProductsByMarca(marcaParam);
            ProductsByMarcaPromise.then((data) => {
                setProd(data);
            });
        }
    }, [marcaParam]);

    return(
        <div className='itemListContainer'>
            {
                prod.map((item) => { return <Item key={item.id} item={item}></Item>})
            }
        </div>
    )
}

