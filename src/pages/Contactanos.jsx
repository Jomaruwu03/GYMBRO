import React, { useRef} from 'react'; 
import Sidebar from '../components/Sidebar';
import emailjs from '@emailjs/browser';

function Contactanos() {
  
  const refForm = useRef ();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refForm.current);

    const serviceId = "service_3oxorl6";
    const templateId = "template_2rdmo7l";
    const apiKey = "VhH7cFTFgA2u_WmYF"

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .then((result) => {
      console.log(result.text);
      alert("Mensaje enviado con éxito!");
      window.location.reload();
    }, (error) => {
      console.log(error.text);
      alert("Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.");
    });
  }

  return (
    <div className="justify-center grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-white">
      <Sidebar />
      <div className="col-span-3 xl:col-span-5 p-10">
        <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Contáctanos</h1>
          <form ref={refForm} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-700">Nombre:</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                name="username" 
                type="text" 
                placeholder="Ej: Josias Kumul" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email:</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                name="email" 
                type="email" 
                placeholder="Ej: josiasranita@gmail.com" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700">Comentario:</label>
              <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                maxLength={500} 
                placeholder='Escribe tu comentario' 
                name="message" 
                rows={10} 
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
