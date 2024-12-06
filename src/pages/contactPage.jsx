
import React from "react";
import "../components/contactComp/contact.css";

const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p>Si tienes alguna consulta o mensaje, por favor no dudes en contactarme.</p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
    <div style={{color:"#ffff", }}> AVISO: Este formulario no funciona, es una prueba de concepto, igual que toda esta pagina. </div>
    </>
  );
};

export default Contact;
