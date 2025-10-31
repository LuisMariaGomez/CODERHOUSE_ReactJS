import { useState } from "react";
import "./FormCheckout.css"; // Importamos el CSS

export default function FormCheckout(props) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function resetForm() {
    setFormData({
      nombre: "",
      email: "",
      direccion: "",
      telefono: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Datos del formulario:", formData);
    props.HandleCheckout(formData);
    resetForm();
  }

  return (
    <div className="formCheckout-container">
      <form className="formCheckout-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            value={formData.nombre}
            onChange={handleInputChange}
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
            required
          />
        </label>

        <label>
          Email:
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
          />
        </label>

        <label>
          Dirección:
          <input
            value={formData.direccion}
            onChange={handleInputChange}
            type="text"
            name="direccion"
            placeholder="Calle y número"
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            value={formData.telefono}
            onChange={handleInputChange}
            type="tel"
            name="telefono"
            placeholder="Ej: 351-1234567"
            required
          />
        </label>

        <div className="formCheckout-buttons">
          <button type="submit" className="btn-submit">
            Enviar
          </button>
          <button type="button" className="btn-reset" onClick={resetForm}>
            Resetear
          </button>
        </div>
      </form>
    </div>
  );
}
