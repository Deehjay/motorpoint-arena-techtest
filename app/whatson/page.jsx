import getEvents from "../api/hello/route";
import EventListItem from "../components/EventListItem";
import "../styles/WhatsOn.css";

export default async function WhatsOn() {
  const events = await getEvents();
  events.sort(function (a, b) {
    return new Date(a.dates[0].date) - new Date(b.dates[0].date);
  });

  return (
    <main>
      <div className="whats-on-container">
        {events.map((event, index) => {
          return (
            <EventListItem
              event={event}
              oddOrEven={index % 2 === 1 ? "odd" : "even"}
            />
          );
        })}
      </div>
    </main>
  );
}
