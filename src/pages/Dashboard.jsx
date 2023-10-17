import React, { useEffect, useState } from "react"
import axios from 'axios';

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
            const response = await axios.delete( `http://localhost:3000/users/${id}`);
            if(response.status == 200){
                alert("Se borro correctamente")
            }else{
                alert("Succedio un error")
            }
            fecthUsers()
        }
    
    return (
        <div>
            <div class="p-4 sm:ml-50">
                <div class="p-20 border-dashed">
                    <div class="flex items-center justify-center h-48 mb-4 rounded">
                        <div class="container">
                            <div class="relative  left-70 top-24">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                 UserName
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                createdAt
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                 authStrategy
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                password
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {Users.map((user) => (
                                            <tr class="border-b dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                    {user.createdAt}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {user.username}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {user.userName}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {user.password}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => HandeDelete(user.id)}>Eliminar</a>
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