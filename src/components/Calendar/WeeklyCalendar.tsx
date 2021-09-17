import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
//import timeGridPlugin from '@fullcalendar/timegrid'

export default function WeeklyCalendar({ events }) {
  return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
        initialView='dayGridWeek'
        nowIndicator={true}
        editable={true}
        initialEvents={events}
        themeSystem='bootstrap'
        eventColor= "#222222"
        contentHeight= "auto"
      />
  )
}