import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contacts } from "./pages/Contacts";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";
import { TodoListFetch } from "./pages/TodoListConFetch";

import { Characters } from "./pages/Characters.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Starships } from "./pages/Starships.jsx";
import { Character } from "./pages/Character.jsx";
import { Planet } from "./pages/Planet.jsx";
import { Starship } from "./pages/Starship.jsx";
import { Login } from "./pages/Login.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Contacts/>} path="/contacts" />
                        <Route element={<AddContact/>} path= "/add-contact" />
                        <Route element={<EditContact/>} path= "/edit-contact" />
                        <Route element={<TodoListFetch/>} path= "/todo-list" />
                        <Route element={<Characters/>} path= "/characters" />
                        <Route element={<Character/>} path= "/characters/:uid" />
                        <Route element={<Planets/>} path= "/planets" />
                        <Route element={<Starships/>} path= "/starships" />
                        <Route element={<Planet/>} path= "/planets/:uid" />
                        <Route element={<Starship/>} path= "/starships/:uid" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);