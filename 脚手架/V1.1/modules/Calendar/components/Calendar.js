import React from 'react'

class Calendar extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'essay due123123' },
      { id: 1, title: 'essay due' },
      { id: 2, title: 'essay due' },
      { id: 3, title: 'essay due' },
      { id: 4, title: 'essay due' },
      { id: 5, title: 'essay due' },
      { id: 6, title: 'essay due' },
      { id: 7, title: 'essay due' },
      { id: 8, title: 'essay due' },
      { id: 9, title: 'essay due' }
    ]

    return (
      <div>
        <h2>Calendar</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Calendar
