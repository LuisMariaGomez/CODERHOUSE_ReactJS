import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Form, Link } from "react-router";
import { createOrder } from "../../data/firebase";
import './CartContainer.css';
import FormCheckout from "../FormCheckout/FormCheckout";

function CartContainer() {
  const [orderCreated, setOrderCreated] = useState(false);
  const { cartItems, removeItem, clearCart, totalPrice } = useContext(cartContext);

  async function HandleCheckout(buyerData) {
    try {
      const buyer = {
        nombre: buyerData.nombre,
        email: buyerData.email,
        direccion: buyerData.direccion,
        telefono: buyerData.telefono
      };

      const total = totalPrice();
      const newOrderConfirmed = await createOrder({ cartItems, total, buyer, date: new Date() });
      setOrderCreated(newOrderConfirmed);
      clearCart();
    } catch (error) {
      console.log(error);
    }
  }

  if (orderCreated) {
    return (
      <div className="cartContainerLleno">
        <h2>¡Gracias por tu compra!</h2>
        <p>El ID de tu compra es: <strong>{orderCreated.id}</strong></p>
        <p>El total de tu compra es: <strong>${orderCreated.total}</strong></p>

        <h3>Resumen de tu compra:</h3>
        <div className="cartSummary">
          {orderCreated.cartItems.map(item => (
            <div className="cartItem" key={item.id}>
              <img className="cartItem-img" src={item.img} alt={item.name} />
              <div className="cartItem-info">
                <p className="cartItem-name-lleno">{item.nombre}</p>
                <p>Cantidad: <span>{item.quantity}</span></p>
                <p>Precio unitario: <span>${item.precio}</span></p>
                <p>Subtotal: <span>${item.precio * item.quantity}</span></p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className="Linkk">Volver al inicio</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cartContainter">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="Linkk">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <section className="cartContainerLleno">
      <h2>Carrito de compras</h2>

      <div className="cartSummary">
        {cartItems.map(item => (
            <div className="cartItem" key={item.id}>
            <img src={item.img} alt={item.nombre} className="cartItem-img" />
            <div className="cartItem-info">
                <p className="cartItem-name">{item.nombre}</p>
                <p className="cartItem-price">Precio: ${item.precio}</p>
                <p className="cartItem-qty">Cantidad: {item.quantity}</p>
                <p className="cartItem-subtotal">Subtotal: ${item.precio * item.quantity}</p>
                <button className="btnEliminar" onClick={() => removeItem(item.id)}>✕</button>
            </div>
            </div>
        ))}
      </div>

      <h4>Total a pagar: ${totalPrice()}</h4>
      <button className="btnVaciar" onClick={clearCart}>Vaciar carrito</button>

      <FormCheckout HandleCheckout={HandleCheckout}/>

      {/* <div className="cartButtons">
        <button className="btnFinalizar" onClick={HandleCheckout}>Finalizar compra</button>
        <Link to="/checkout">
          <button className="btnCheck">CheckOut</button>
        </Link>
      </div> */}
    </section>
  );
}

export default CartContainer;
