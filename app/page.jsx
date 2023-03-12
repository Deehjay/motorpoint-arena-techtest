import getEvents from "./api/hello/route";
import ButtonLink from "./components/ButtonLink";
import Slideshow from "./components/Slideshow";
import "./styles/Home.css";

export default async function Home() {
  const events = await getEvents();

  // Sort the array by date so that closest events display first
  events.sort(function (a, b) {
    return new Date(a.dates[0].date) - new Date(b.dates[0].date);
  });

  // Slide images to be used with Slideshow component. Array is sliced so that only the closest 3 events show on slideshow
  const slideImages = events
    .map((event) => {
      return { url: event.image, caption: event.name, link: event.url };
    })
    .slice(0, 3);

  const sidebarLinks = [
    {
      img: "https://www.motorpointarenanottingham.com/ArticleMedia/Images/assets/seats-icon.png",
      text: "seating plan",
      class: "grey-card",
    },
    {
      img: "https://www.motorpointarenanottingham.com/ArticleMedia/Images/assets/panthers_logo.png",
      text: "nottingham panthers",
      class: "blue-card",
    },
    {
      img: "https://www.motorpointarenanottingham.com/ArticleMedia/Images/assets/hospitalityglass.png",
      text: "hospitality",
      class: "black-card",
    },
    {
      img: "https://www.motorpointarenanottingham.com/ArticleMedia/Images/Motorpoint/assets/icon-parking.png",
      text: "car parking",
      class: "grey-card",
    },
    {
      img: "https://www.motorpointarenanottingham.com/ArticleMedia/Images/Motorpoint/assets/icons8-Advertising-100.png",
      text: "advertise with us",
      class: "blue-card",
    },
  ];

  return (
    <main>
      <div className="content-container">
        <div className="slideshow-wrapper">
          <Slideshow slideImages={slideImages} />
        </div>
        <div className="article-wrapper">
          <div className="article-left">
            <div>
              <img
                src="https://www.motorpointarenanottingham.com/content/Images/Homepage%20advert/homeofpanthers_squareadvert.png"
                alt="Nottingham Panthers"
              />
            </div>
            {sidebarLinks.map((link, index) => {
              return (
                <div className={`link-card ${link.class}`} key={index}>
                  <div>
                    <img src={link.img} alt={link.text} />
                  </div>
                  <div className="link-text">
                    <h3>{link.text}</h3>
                  </div>
                  <div className="box-button"></div>
                </div>
              );
            })}
          </div>

          <div className="article-right">
            <div>
              <img
                src="https://www.motorpointarenanottingham.com/content/Images/FeaturedImages/signup_homepagebanner.png"
                alt=""
              />
            </div>
            <div id="whats-on">
              <h2>Whats on</h2>
            </div>
            <div className="events-container">
              {events.map((event) => {
                return (
                  <div className="event-card">
                    <div>
                      <img src={event.image} alt={event.name} />
                    </div>
                    <div id="event-card-info">
                      <h6>{event.name}</h6>
                      <ButtonLink url={event.url} text="Buy Tickets" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
