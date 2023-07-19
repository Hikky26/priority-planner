import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


export class CalendarUI extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    );
  }
}

export default class DemoApp extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', padding:'5px' }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          eventContent={renderEventContent}
        />
      </div>
    );
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}