import React from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//Code JS
	return (
	<div class="container mt-3">                                     
	<div class="dropdown">
		<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
		Dropdown Menú
		</button>
		<ul class="dropdown-menu">
		<li><Link className="nav-link link-secondary" to="/starships">Starships</Link></li>
		<li><Link className="nav-link link-secondary" to="/planets">Planets</Link></li>
		<li><Link className="nav-link link-secondary" to="/characters">Characters</Link></li>	
		<li><Link className="nav-link link-secondary" to="/contacts">Contacts</Link></li>
		<li><Link className="nav-link link-secondary" to="/add-contact">Add Contacts</Link></li>
		<li><Link className="nav-link link-secondary" to="/todo-list">Todo</Link></li>
		<li><Link className="nav-link link-secondary" to="/">Home</Link></li>
		</ul>
	</div>
	</div>
	);
};