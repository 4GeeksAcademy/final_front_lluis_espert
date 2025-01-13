const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

            ListaContactos: [] 

        },

        actions: {

            CrearUsuario: () => {

                fetch("https://playground.4geeks.com/contact/agendas/lluisespert", {

                    method: "POST",

                })
                    .then((response) => response.json())

                    .then((data) => {

                        console.log(data);

                    })

                    .catch((error) => console.log(error));
            },

            TraerInformacionContactos: () => {

                fetch("https://playground.4geeks.com/contact/agendas/lluisespert/contacts", {

                    method: "GET"

                })

                    .then((response) => {

                        if (response.status == 404) {

                            getActions().CrearUsuario()

                        }

                        if (response.ok) {

                            return response.json()

                        }

                    })

                    .then((data) => {

                        if (data) {

                            setStore({ ListaContactos: data.contacts })

                        }
                    })

                    .catch((error => console.log(error)))

            },

            AnyadirContactoALista: (contacto) => {

                const store = getStore();

                setStore({ ...store, ListaContactos: [...store.ListaContactos, contacto] })

            },

            CrearContacto: (payload) => {

                fetch("https://playground.4geeks.com/contact/agendas/lluisespert/contacts", {

                    method: "POST",

                    headers: {

                        'Content-Type': 'application/json'

                    },

                    body: JSON.stringify(

                        payload

                    ),

                })

                    .then((response) => response.json())

                    .then((data) => {

                        console.log(data);

                        const actions = getActions(); 

                        actions.AnyadirContactoALista(data);

                    })

                    .catch((error) => console.log(error));

            },

            BorrarContacto: (id) => {

                fetch(`https://playground.4geeks.com/contact/agendas/lluisespert/contacts/${id}`, {

                    method: "DELETE",

                })

                    .then((response) => {

                        if (response.ok) {

                            const store = getStore();

                            const actualizartContactos = store.listContacts.filter(contact => contact.id !== id);
                            setStore({ ListaContactos: actualizartContactos });

                        } else {

                            console.log("Error deleting contact");

                        }

                    })

                    .catch((error) => console.log(error));

            },

            EditarContacto: (id, contacto) => {

                const store = getStore()

                fetch(`https://playground.4geeks.com/contact/agendas/lluisespert/contacts/${id}`, {

                    method: "PUT",

                    headers: {

                        'Content-Type': 'application/json'

                    },

                    body: JSON.stringify(contact)

                })

                    .then((response) => {

                        if (response.ok) {

                            return response.json()

                        }

                    })

                    .then((data) => {

                        if (data) {

                            const actualizarLista = store.ListaContactos.map(contacto => {

                                if (contact.id == id) {

                                    contacto = data

                                }

                                return contact

                            })

                            setStore({ ListaContactos: actualizarLista })

                        }
						
                    })

                    .catch((error) => console.log(error));


            }

		}
		
    }

};

export default getState;
