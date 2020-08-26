import React, { useState } from 'react';
import './Events.css';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';

const EventsPage = () => {

  const [createEvent, setCreateEvent] = useState(false);

  const startCreateEventHandler = () => {
    setCreateEvent(true);
  }

  const modalConfirmHandler = () => {
    setCreateEvent(false);
  }

  return (
    <>
      {createEvent && <Backdrop />}
      {createEvent &&
        <Modal
          title="Add event"
          canCancel
          canConfirm
          onCancel={() => setCreateEvent(false)}
          onConfirm={() => modalConfirmHandler()}
        >
          <p>Modal Content</p>
        </Modal>
      }
      <div className="events-control">
        <p>Share your own events</p>
        <button className="btn" onClick={startCreateEventHandler}>Create Event</button>
      </div>
    </>
  )
}

export default EventsPage
