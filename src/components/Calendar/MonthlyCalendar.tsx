import { Row } from 'react-bootstrap';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
//import timeGridPlugin from '@fullcalendar/timegrid'

export default function MonthlyCalendar({ events }) {
  return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
        initialView='dayGridMonth'
        nowIndicator={true}
        editable={true}
        initialEvents={events}
        themeSystem='bootstrap'
        eventColor= "#6100FF"
      />
  )
}