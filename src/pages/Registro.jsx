import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

function AddUser() {
  const handleSubmit = async (values, actions) => {
    try {
      const res = await axios.post('http://localhost:3001/users', values);
      actions.resetForm();
      alert('Datos agregados correctamente');
      window.location = '/Login';
    } catch (error) {
      alert('Hubo un error al agregar los datos');
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-400 flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center flex-1">
        <img
          className="mx-auto h-50 w-60" 
          src="public\imagenes\logo.png" 
          alt="GYMBRO" 
        />
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="font-semibold text-xl text-gray-800 text-center mb-6">Registrarse</h2>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit, values }) => (
                <Form onSubmit={handleSubmit} className="space-y-4">
                  <Form.Group>
                    <Form.Label className="text-gray-800">Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      className="mt-1 block w-full rounded-md bg-gray-50 border-transparent focus:border-orange-400 focus:bg-white focus:ring-0"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="text-gray-800">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      className="mt-1 block w-full rounded-md bg-gray-50 border-transparent focus:border-orange-400 focus:bg-white focus:ring-0"
                    />
                  </Form.Group>
                  <Button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Guardar
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
