const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/interaction',
  '@fullcalendar/timegrid',
  '@fullcalendar/daygrid',
])

module.exports = withTM({
  basePath: '',
  trailingSlash: true,
})