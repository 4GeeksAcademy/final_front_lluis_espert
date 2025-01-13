import React, { useEffect, useState } from "react";

export const CrearContactoAgenda = () => {

    const baseURL = 'https://playground.4geeks.com/contact';

    const usuario = 'lluisespert';

    const [contact, setContact] = useState('');

    const handleSubmitAdd = async (event) => {
      event.preventDefault();
      
      const dataToSend = {
  
        label: contact,
  
        is_done: false
  
      };
  
      const uri = `${baseURL}/agendas/${usuario}/contacts`
  
      const opciones = {
  
        method: 'POST',
  
        headers: {
  
          "Content-Type": "application/json"
  
        },
  
        body: JSON.stringify(dataToSend)
  
      }
      
      const response = await fetch(uri, opciones);
  
      if (!response.ok) {
          
        console.log('error:', response.status, response.statusText)
  
        return; 
      }
  
      setContact('');
  
    }

      return (

        <div className="container my-5">

          <form onSubmit={handleSubmitAdd}>

            <div className="mb-3 mt-3">

              <label for="Nombre" className="form-label">Name:</label>

              <input type="text" className="form-control" id="name" placeholder="Introduce el nombre" name="name"></input>

            </div>

            <div className="mb-3 mt-3">

              <label for="Phone" className="form-label">Phone:</label>

              <input type="text" className="form-control" id="phone" placeholder="Introduce el número de teléfono" name="phone"></input>

            </div>

            <div className="mb-3 mt-3">

              <label for="Email" className="form-label">Email:</label>

              <input type="email" className="form-control" id="email" placeholder="Introduce el email" name="email"></input>

            </div>

            <div className="mb-3 mt-3">

              <label for="address" className="form-label">Address:</label>

              <input type="text" className="form-control" id="address" placeholder="Introduce tu dirección" name="address"></input>

            </div>

            <button type="submit" className="btn btn-primary">Introducir Contacto</button>

          </form>

        </div>

      );

}