import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import EventItem from "../../../../components/Events/components/EventItem/EventItem";

   //*********************/ Liked Events view *********************/
//*********************/  Show all liked events  *********************/

const LikedEvents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const likedEvents =
          JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const results = [];
        for (const eventId of likedEvents) {
          const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_TICKETMASTER_API_KEY
          }`;
          const response = await fetch(url);
          const data = await response.json();
          results.push(data);
          // setIsLoading(true);
        }
        // const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`);
        // const data = await response.json();
        setEvents(results);
        // console.log(likedEvents);
      } catch (e) {
        // console.log(error);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventDetails();
  }, []);

  const handleEventItemClick = (eventid) => {
    // console.log(`event clicked: ${eventid}`);
    navigate(`/detail/${eventid}`);
  };
  if (Object.keys(error).length > 0) {
    return <div>Error en LikedEvents</div>;
  }

  if (isLoading) {
    return <div>Cargando</div>;
  }
  return (
    <div>
      LikedEvents
      {events.map((event, index) => (
        <EventItem
          key={`liked-event-item-${event.id}-${index}`}
          name={event.name}
          info={event.info}
          // image = {event?.images[0].url}
          image={event.images[0].url}
          onEventClick={handleEventItemClick}
          id={event.id}
        />
      ))}
    </div>
  );
};
export default LikedEvents;
