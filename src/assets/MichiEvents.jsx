import React, { useState } from 'react';

const MichiEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, name: 'Tarde de Juegos con Gatos' },
    { id: 2, name: 'Clase de Yoga con Gatos' },
    { id: 3, name: 'Tarde de Películas con Gatos' },
  ];

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  return (
    <div className="events-container">
      <h2>Vota por el próximo evento en la MichiCafetería</h2>
      <form>
        {events.map((event) => (
          <div key={event.id} className="event-option">
            <input
              type="radio"
              id={`event-${event.id}`}
              name="event"
              value={event.id}
              checked={selectedEvent === String(event.id)}
              onChange={handleEventChange}
            />
            <label htmlFor={`event-${event.id}`}>{event.name}</label>
          </div>
        ))}
      </form>
      {selectedEvent && (
        <div className="selected-event">
          <h3>Has seleccionado:</h3>
          <p>{events.find((event) => event.id === parseInt(selectedEvent)).name}</p>
        </div>
      )}
    </div>
  );
};

export default MichiEvents;
