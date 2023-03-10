import React from "react";
import ButtonLink from "./ButtonLink";
import "../styles/EventCard.css";

function EventCard({ event }) {
  console.log(event);
  return (
    <div className="event-card-container">
      <img src={event.image} alt={event.name} />
      <h6>{event.name}</h6>
      <ButtonLink url={event.url} text="Buy tickets" />
    </div>
  );
}

export default EventCard;
