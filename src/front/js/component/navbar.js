import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	// Code JS 
	// (1) Desestructuro store y/o actions, (2) Utilizando el hook useContext de "react" 
	// (3) Enviadole el parámetro Context definido en appContex.js
	const { store, actions } = useContext(Context);
	// 4. Utilizo cualquier clave de store. o de actions. en mi componente

	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</Link>
							<ul className="dropdown-menu">
								<li><Link className="dropdown-item" to="/TodoListFetch.jsx">Todo List</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};