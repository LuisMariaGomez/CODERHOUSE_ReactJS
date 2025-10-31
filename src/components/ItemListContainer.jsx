import './ComponentsStyles/ComponentsCss.css'
import Item from './item';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByMarca } from '../data/firebase.js';
import { useParams } from 'react-router';

export default function itemListContainer(){
    const [prod, setProd] = useState([]);
    const {marcaParam} = useParams();
    // console.log(marcaParam);

    useEffect(() => {
        if(marcaParam === undefined){
            const ProductsDataPromise = getProducts();
            ProductsDataPromise.then((data) => {
                setProd(data);
            }).catch((error) => alert(`Error:  ${error}`));
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

