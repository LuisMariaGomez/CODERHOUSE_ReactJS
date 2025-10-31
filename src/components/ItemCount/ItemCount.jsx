import { useState } from "react";

export default function ItemCount( {max, min, onAddToCart} ) {
    const [count, setCount] = useState(min);
    const handleIncrement = () => {
        if (count < max) {
            setCount(count + 1);
        }
    }
    const handleDecrement = () => {
        if (count > min) {
            setCount(count - 1);
        }
    }
    const handleAddToCart = () => {
        onAddToCart(count);
    }
    return (
        <div className="itemCount">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={ () => onAddToCart(count)}>Agregar al carrito</button>
        </div>
    );
}