import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";


export const CrearContactoAgenda = () => {

  const { store, actions } = useContext(Context)

  let navigate = useNavigate();

  const { id } = useParams(); 

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");

  function GuardarContacto(e) {

    e.preventDefault()

    if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {

        return null

    }

    const payload = {

        name: name,

        phone: phone,

        email: email,

        address: address

    };

    if (!id) {

        actions.CrearContacto(payload)

    } else {

        actions.EditarContacto(id, payload)

    }

    navigate("/");

    setName("");

    setPhone("");

    setEmail(""),

    setAddress("");

}

useEffect(() => {

    if (id && store.ListaContactos.length > 0) {

        const ContactoCorriente = store.ListaContactos.find(contacto => contacto.id == id)

        setName(ContactoCorriente.name)

        setPhone(ContactoCorriente.phone)

        setEmail(ContactoCorriente.email)

        setAddress(ContactoCorriente.address)

    }

}, [id, store.ListaContactos])
      

      return (

        <div className="container">
        
          <h1 className="text-center">{!id ? "Añadir Nuevo Contacto" : `Editing Contact: ${name}`}</h1>

          <form className="container" onSubmit={GuardarContacto}>

            <div className="mb-3 mt-3">

                <label htmlFor="formGroupExampleInput1" className="form-label">Nombre:</label>

                <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Nombre Completo" onChange={(e) => setName(e.target.value)} value={name} required />

            </div>

            <div className="mb-3 mt-3">

                <label htmlFor="formGroupExampleInput2" className="form-label">Email:</label>

                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Introducir el email" onChange={(e) => setEmail(e.target.value)} value={email} required />

            </div>

            <div className="mb-3 mt-3">

                <label htmlFor="formGroupExampleInput3" className="form-label">Teléfono</label>

                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Introducir Teléfono" onChange={(e) => setPhone(e.target.value)} value={phone} required />

            </div>

            <div className="mb-3 mt-3">

                <label htmlFor="formGroupExampleInput4" className="form-label">Dirección:</label>

                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Introduce la dirección" onChange={(e) => setAddress(e.target.value)} value={address} required />

            </div>

            <div className="mb-3 mt-3">

                <button type="submit" className="btn btn-primary" >Save</button>

            </div>

         </form>

        </div>

      );

}