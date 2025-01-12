import React, { useEffect, useState } from "react";

export const CrearAgenda = () => {

    const baseURL = 'https://playground.4geeks.com/contact/agendas/';

    const usuario = 'lluisespert';

    const [agenda, setAgenda] = useState('');

    const handleSubmitAdd = async (event) => {
        event.preventDefault();
        
        const dataToSend = {
    
          label: agenda,
    
          is_done: false
    
        };
    
        const uri = `${baseURL}/contact/agendas/${usuario}`
    
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
        
        setAgenda('');

      }

      return (

        <div className="container my-5">

            <form onSubmit={handleSubmitAdd}>

                <div className="text-start mb-3">

                    <button type="button" className="btn btn-success" value={agenda} onChange={(event) => setAgenda(event.target.value)}>Crear Agenda</button>

                </div>

            </form>

        </div>

      );

}