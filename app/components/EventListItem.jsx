import Link from "next/link";
import React from "react";
import "../styles/EventList.css";
import { formatDates } from "../utils/utils";
import ButtonLink from "./ButtonLink";

function EventListItem({ event, oddOrEven }) {
  return (
    <div className={`event-list-container ${oddOrEven}`}>
      <div id="list-image-container">
        <Link href="/">
          <img src={event.image} alt={event.name} />
        </Link>
      </div>
      <div id="list-info-container">
        <h6>{event.name}</h6>
        <p>{formatDates(event.dates)}</p>
      </div>
      <div id="list-button-container">
        {/* I wanted to implement a way for the button to take you to another
        page that'd display the single event, but I couldn't think of a way to
        pass the props to the page */}
        <ButtonLink url={event.url} text="More Info" />
      </div>
    </div>
  );
}

export default EventListItem;
