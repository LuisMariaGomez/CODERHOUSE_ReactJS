import { createContext, useState } from 'react';

// Creacion del contexto
const cartContext = createContext("valorInicial");

// Creacion del Custon Provider con la funciones con su propio Value, funciones y variables
export function CartProvider( {children} ){
    const [cartItems, setCartItems] = useState([]);

    function agregarAlCarrito(item, quantity){
        const quantityCount = quantity;
        const newCart = structuredClone(cartItems);
        const isInCart = cartItems.some(product => product.id === item.id);

        if(isInCart){
            const index = cartItems.findIndex(product => product.id === item.id);
            newCart[index].quantity += quantityCount;
            console.log("Ya estaba en el carrito, le sumamos 1");
        }
        else{
            item.quantity = quantityCount;
            newCart.push(item);
            console.log("No estaba en el carrito, lo agregamos");
        }
        setCartItems(newCart);
        alert("Producto agregado al carrito");
        console.log(cartItems);
    }
    function countCartItems(){
        let count = 0;
        cartItems.forEach(item => {
            count += item.quantity;
        // con reduce seria asi:
        // const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    });

return count;
    }
    function removeItem(idtem){
        const newCart = cartItems.filter(item => item.id !== idtem);
        setCartItems(newCart);
        console.log("Item eliminado");
    }

    //agregar total price
    function totalPrice(){
        const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
        return total;
    }

    // removeFromItem

    // Vaciar el carrito
    function clearCart(){
        setCartItems([]);
    }

    return(
        <cartContext.Provider value={{cartItems, agregarAlCarrito, countCartItems, removeItem, totalPrice, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}


export { cartContext };