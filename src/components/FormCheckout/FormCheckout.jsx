import { useState } from "react";
export default function FormCheckout(props) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        direccion: '',
        telefono: ''
    });
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    function resetForm() {
        setFormData({
            nombre: '',
            email: '',
            direccion: '',
            telefono: ''
        });
    }
    function    handleSubmit(event) {
        event.preventDefault();
        console.log('Datos del formulario:', formData);
        props.HandleCheckout(formData);
        resetForm();
    }
  return (
    <div className="formCheckout">
      <h2>Formulario de Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input value={formData.nombre} onChange={handleInputChange} type="text" name="nombre" required />
        </label>
        <label>
          Email:
          <input value={formData.email} onChange={handleInputChange} type="email" name="email" required />
        </label>
        <label>
          Dirección:
          <input value={formData.direccion} onChange={handleInputChange} type="text" name="direccion" required />
        </label>
        <label>
            Teléfono:
            <input value={formData.telefono} onChange={handleInputChange} type="tel" name="telefono" required />
        </label>
        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>Resetear</button>
      </form>
    </div>
  );
}