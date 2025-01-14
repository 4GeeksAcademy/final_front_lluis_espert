import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import { TarjetaContacto } from "../component/TarjetaContacto.js";

export const Contactos = () => {

    const { store, actions } = useContext(Context)

    console.log(store.ListaContactos)

    return (

        <div className="w-75 mx-auto">

            <div className="d-flex justify-content-end">

                <Link to="/CrearContactoAgenda.js">

                    <button className="btn btn-success">Add New contact</button>

                </Link>

            </div>

            <ul className="list-group mt-3">

                {store.ListaContactos && store.ListaContactos.length > 0 && store.ListaContactos.map((contact, index) => {

                    return (

                        <TarjetaContacto contact={contact} key={index} />

                    )

                })}

            </ul>

        </div>

    );

};