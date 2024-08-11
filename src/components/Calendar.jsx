import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Obtener mantenimientos desde el backend
    axios.get('/maintenances')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.error('Error al obtener mantenimientos', error));
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const getEventDates = () => {
    return events.map(event => new Date(event.maintenance_date).toDateString());
  };

  const isDateHighlighted = (date) => {
    return getEventDates().includes(date.toDateString());
  };

  return (
    
    <div className="p-4">
      <h2 class="text-2xl font-bold mb-4">Programación de Mantenimientos</h2>
      <p class="mb-4">Calendario de mantenimientos vigentes.</p>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date }) => isDateHighlighted(date) ? 'bg-yellow-300' : null}
      />
      <div className="mt-4">
        <ul>
          {events.map(event => (
            <li key={event.id} className="py-2">
              <h3 className="text-lg font-medium">{event.title}</h3>
              <p>{event.description}</p>
              <p className="text-gray-500">{new Date(event.maintenance_date).toDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
