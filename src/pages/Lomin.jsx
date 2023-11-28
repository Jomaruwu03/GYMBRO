import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GoogleLogin } from "@react-oauth/google";
import Footer from "../components/Footer";

function Admin() {
  const handleSubmit = async (values, actions) => {
    try {
      const res = await axios.post('http://localhost:3001/users/login', values);
      actions.resetForm();
      if (res.data.success) {
        alert("Inicio de sesión exitoso");
        window.location = "/home";
      } else {
        alert("Credenciales inválidas");
      }
    } catch (error) {
      alert("Hubo un error al iniciar sesión");
      console.error(error);
    }
  };

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="bg-gray-400/40 flex-grow flex items-center justify-center px-6 py-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-50 w-99"
              src="public\imagenes\logo.png"
              alt="GYMBRO"
            />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
  initialValues={{
    username: "",
    password: "",
  }}
>
              <Form className="space-y-6">
                <div>
                  <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    Ingresa a tu Espacio Personal
                  </h2>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Usuario
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="username"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                <a 
  href="/dashboard"
                    className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Entrar
                  </a>
                  <div>
                    <h2></h2>
                    <br />
                    <br />
                    <GoogleLogin
                      onSuccess={responseMessage}
                      onError={errorMessage}
                    />
                  </div>
                </div>
              </Form>
            </Formik>
            <p className="mt-10 text-center text-sm text-gray-500">
              ¿No tienes cuenta?{" "}
              <a
                href="/registro"
                className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
              >
                Regístrate
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Admin;
