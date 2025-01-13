import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

export const TarjetaContacto = ({ contact }) => {

    const { store, actions } = useContext(Context)

    const eliminarContacto = () => {

        actions.deleteContact(contact.id);

    };

    return (

        <li className="list-group-item d-flex justify-content-center">

            <div className="d-flex align-items-center w-75">

                <div className="col-md-3 d-flex justify-content-center">

                    <img
                        className="rounded-circle"
                        src="https://picsum.photos/170/170/"
                        alt="Contact"

                    />

                </div>

                <div className="col-md-6">

                    <h5 className="card-title mb-1">{contact.name}</h5>

                    <p className="card-text mb-1">{contact.address}</p>

                    <p className="card-text mb-1">{contact.phone}</p>

                    <p className="card-text mb-1">{contact.email}</p>

                </div>

                <div className="col-md-3 d-flex justify-content-end">

                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">

                        <i className="fa fa-eraser"></i>

                    </Link>

                    <button type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                        <i className="fa fa-trash fa-lg"></i>
                    </button>


                    <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div className="modal-dialog">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Estás seguro?</h1>

                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>

                                </div>

                                <div className="modal-body">

                                    Vamos, vamos a borrar que el mundo se termina!!!

                                </div>
                                
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ooooooooh!</button>

                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Bora borra</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </li>

    )
    
}