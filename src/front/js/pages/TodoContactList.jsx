import React, { useEffect, useState } from "react";

export const TodoContactList = () => {

    const baseURL = 'https://playground.4geeks.com/contact';

    const usuario = 'lluisespert';

    const getTodos = async () => {
    
        const uri = `${baseURL}/agendas/${usuario}`;
         
        const opciones = {
    
          method: 'GET'
    
        }
         
        const response = await fetch(uri, opciones);
        
        if (!response.ok) {
          
          console.log('error:', response.status, response.statusText)
    
          
          if (response.status == 404) {
    
          }
    
          return   
        }
    
        const data = await response.json();

      }
    

      return(

        <div className="container my-5">

            

        </div>

      );

}