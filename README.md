<h1 align="center"> White Tail Archery Shop </h1> <br>
<p align="center">
  <a href="https://coderhouse-react-js.vercel.app">
    <img alt="GitPoint" title="GitPoint" src="https://i.postimg.cc/T3yNRTRy/logo.png/" width="250">
  </a>
</p>

<p>
  White Tail Archery Shop es una aplicación web desarrollada con React.js que simula una tienda online de arcos compuestos.
Permite explorar productos por marca, ver detalles individuales, agregar ítems al carrito y generar órdenes de compra que se almacenan en Firebase Firestore.
</p>

## Tecnologias-Libreras

- React.js → Framework base del proyecto.

- Vite → Bundler para desarrollo rápido y eficiente.

- React Router DOM → Navegación entre vistas y rutas dinámicas (/marca/:marca, /item/:id, /cart).

- Firebase Firestore → Base de datos NoSQL en la nube para almacenar productos y órdenes.

- Context API → Manejo de estado global del carrito de compras.

- CSS modular → Estilos personalizados para los componentes.

- JavaScript moderno (ES6+) → Manejo de estados, promesas, async/await, y destructuring.

## Funcionalidades principales

**Listado de productos**

Se obtienen dinámicamente desde Firebase Firestore mediante la función getProducts().
Filtro por marca con getProductsByMarca(marca).

**Detalle de producto**

Muestra información completa de un producto usando getProductById(id).

**Carrito de compras (Context API)**

Agregar productos: agregarAlCarrito(item, quantity)
Eliminar producto: removeItem(id)
Vaciar carrito: clearCart()
Contador de items: countCartItems()
Total a pagar: totalPrice()
Estado global administrado con createContext y useState.

**Órdenes en Firestore**

Se crean con la función createOrder(orderData) que almacena la compra en la colección orders.


## Configuración del entorno

1 - Clonar el repositorio:

- git clone https://github.com/LuisMariaGomez/CODERHOUSE_ReactJS.git

2 - Instalar dependencias:

- npm install

3 - Configurar Firebase:

- Crear un proyecto en Firebase Console.

- Crear una base de datos Firestore.

- Copiar las credenciales del proyecto y pegarlas en firebaseConfig.js.

4 - Correr la aplicación:

- npm run dev

## Conceptos de React aplicados

- Componentes funcionales

- Props y children

- Hooks: useState, useEffect, useContext

- Context API para compartir estado global

- Rutas dinámicas con useParams

- Condicional rendering para manejar estados de carga y errores

- Eventos y manejo de formularios

## Posibles mejoras futuras

- Autenticación con Firebase Auth.

- Filtrado avanzado y búsqueda de productos.

- Persistencia del carrito en localStorage.

- Integración con pasarela de pagos (MercadoPago / Stripe).

- Diseño responsive con Tailwind o Material UI.

## Autor

Luis María Gómez

Proyecto ReactJS — Coderhouse

2025


