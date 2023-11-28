import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Formik } from 'formik';
import axios from "axios";
import { useParams , useNavigate } from 'react-router-dom'; 

function Edituser() {
const navigate = useNavigate()
const params = useParams()

console.log(params)
var id = params.id;
console.log(id)

const [User, SetUser] = useState({
    username: "",
    password: ""
})

useEffect(() => {

    const loadUser = async () => {
        const response = await axios.get(`http://localhost:3001/users/${id}`)
        console.log(response);
        SetUser({
            username: response.data.username,
            password: response.data.password
        })
    };
    loadUser(); 
}, []);

return (
    <>
        <div className="flex h-screen bg-white">
          <div className="col-span-3 bg-gray-200"><Sidebar/></div>
            <Formik
                initialValues={User}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    try{

                    }catch{

                    }
                    console.log(values)

                    var res = await axios.patch(`http://localhost:3001/users/${id}`, values)
                    actions.resetForm()
                        alert('Datos actualizados correctamente')
                    if (res.status == 200) {
                        //Redirecciomar 
                        navigate("/dashboard")
                    }
                    else {
                        alert("Succedio un error")
                    }

                }}
            >
                {({ handleChange, handleSubmit, values, handleBlur }) => (
                    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
                        <div>
                            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-username">
                                            Username
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Ejemplo: esotilin"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Contraseña
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="******"
                                            onChange={handleChange}
                                            value={values.password}
                                            onBlur={handleBlur} 
                                            required
                                        />
                                        <p className="text-gray-600 text-xs italic">Mínimo 6 caracteres</p>
                                    </div>
                                </div>
                                <br />
                                <button
                                    type="onSubmit"
                                    className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
                                >
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </main>
                )}
            </Formik>
        </div >
    </>
);

                }

export default Edituser