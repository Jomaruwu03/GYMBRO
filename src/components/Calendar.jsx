import React, { useState, useEffect } from 'react';

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [newEventTitle, setNewEventTitle] = useState('');
  const [editingEvent, setEditingEvent] = useState(null);
  const [editedEventTitle, setEditedEventTitle] = useState('');

  useEffect(() => {
    // Este efecto se ejecuta solo cuando se monta el componente (equivalente a componentDidMount)
    // Aquí podrías cargar los eventos desde una fuente externa (por ejemplo, una API) si es necesario.
  }, []);

  const addEvent = () => {
    // Agrega un nuevo evento de manera local
    const newEvent = {
      id: Date.now(), // Podrías utilizar un identificador único, como un UUID, en lugar de Date.now()
      summary: newEventTitle,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEventTitle('');
  };

  const deleteEvent = (eventId) => {
    // Elimina un evento de manera local
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  const updateEvent = () => {
    // Actualiza un evento de manera local
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === editingEvent.id ? { ...event, summary: editedEventTitle } : event
      )
    );
    setEditingEvent(null);
    setEditedEventTitle('');
  };

  const startEditing = (event) => {
    // Inicia la edición de un evento
    setEditingEvent(event);
    setEditedEventTitle(event.summary);
  };

  const cancelEditing = () => {
    // Cancela la edición de un evento
    setEditingEvent(null);
    setEditedEventTitle('');
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-6 flex-col items-start justify-center">
      <div className="container mx-auto p-4 max-w-md bg-orange-300 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Próximos Eventos</h1>
        <div className="result mt-6">
          {error && (
            <p className="alert-message bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              {error}
            </p> 
          )}



          <div className="calendar-events p-4 text-center">
            <ul className="list-disc pl-4">
              {events.map((event) => (
                <li key={event.id} className="text-lg">
                  {editingEvent && editingEvent.id === event.id ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={editedEventTitle}
                        onChange={(e) => setEditedEventTitle(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                      <button
                        onClick={updateEvent}
                        className="px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        Actualizar
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md ml-2 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <>
                      {event.summary}
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="ml-2 text-red-500"
                      >
                        Eliminar
                      </button>
                      <button
                        onClick={() => startEditing(event)}
                        className="ml-2 text-blue-500"
                      >
                        Editar
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Nuevo evento"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
            <button
              onClick={addEvent}
              className="ml-2 px-4 py-2 bg-primary-500 text-white rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default CalendarEvents;
