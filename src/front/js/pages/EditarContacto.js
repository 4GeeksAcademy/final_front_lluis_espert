import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

export const EditarContacto = () => {

    const { store, actions} = useContext(Context);
    const navigate = useNavigate();

    const currentContact = store.currentContact;
    const [ name, setName ] = useState(currentContact.name);
    const [ phone, setPhone ] = useState(currentContact.phone) ; 
    const [ email, setEmail ] = useState(currentContact.email);
    const [ address, setAddres ] = useState(currentContact.address);

    const handleSubmitEdit = (event) =>{
        event.preventDefault();
        const dataToSend = {
            name, phone, email, address
        };
        actions.EditarContacto(currentContact.id, dataToSend);
        navigate("/Contactos");
    }


    return (
        <div className="container my-5 text-light">
        <h1>Edit contact</h1>
        <form onSubmit={handleSubmitEdit}> 
            <div className="mb-3">
                <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                <input 
                value={name}
                onChange={(event) =>setName(event.target.value)}
                type="text" className="form-control" id="exampleInputFullName" aria-describedby="nameHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                <input
                value={phone}
                onChange={(event) =>setPhone(event.target.value)}
                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                <input
                value={email}
                onChange={(event) =>setEmail(event.target.value)} type ="tel" id="exampleInputPhone" className="form-control" aria-describedby="phoneHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                <input
                value={address}
                onChange={(event) =>setAddres(event.target.value)}
                type="address" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" />
            </div>
            <button type="submit" className="btn btn-primary container">Save</button>
        </form>
        <Link to="/Contactos">or get back to contacts </Link>
    </div>
)
    
}