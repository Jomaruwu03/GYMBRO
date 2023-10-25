import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Navigate, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fecthUsers();
    }, []);
    const fecthUsers = async () => {
        const response = await axios.get('http://localhost:3000/users')
        setUsers(response.data);
        console.log('Datos de la API')
        console.log(response)
    };
    const HandeDelete = async (id) => {
        const response = await axios.delete(`http://localhost:3000/users/${id}`);
        if (response.status == 200) {
            alert("Se borro correctamente")
        } else {
            alert("Succedio un error")
        }
        fecthUsers()
    }

    return (
        
        <div>
            <Sidebar/>
            <main className="lg:col-span-3 xl:grid-span-5 bg-white p-8 h-[100vh] overflow-scroll" />
            <div class="p-4 sm:ml-50">
                <div class="p-20 border-dashed">
                    <div class="flex items-center justify-center h-48 mb-4 rounded">
                        <div class="container">
                            <div class="relative  left-70 top-24">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Username
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Password
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Fecha de Creación
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Eliminar
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Editar
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {Users.map((user, i) => (
                                            <tr class="border-b dark:border-gray-700" key={i}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                    {i+1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {user.username}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {user.password}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {user.createdAt}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => Navigate(`EditUser/${user.id}`)}>Editar</button>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => HandeDelete (user.id)}>Eliminar</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" end-auto">
            </div>
        </div>

    );
}

export default Dashboard;