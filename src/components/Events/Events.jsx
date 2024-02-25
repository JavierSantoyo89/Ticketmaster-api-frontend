import EventItem from "./components/EventItem/EventItem";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

// eslint-disable-next-line react/prop-types
function Events({ searchTerm, events }) {
  const navigate = useNavigate();
  let handleEventItemClick = (id) => {
    console.log(`event clicked: ${id}`);
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    if (eventsFiltered.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }
    return (
      // let eventsComponent =
      eventsFiltered.map((eventItem) => (
        <EventItem
          key={`event-item ${eventItem.id}`}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images?.[0].url}
          onEventClick={handleEventItemClick}
          id={eventItem.id}
        />
      ))
    );
  };

  return (
    <div>
      {renderEvents()}
      {/* {eventsComponent} */}
      <EventItem/>
    </div>
  );
}

export default memo(Events);
