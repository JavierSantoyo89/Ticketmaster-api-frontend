// import { Link } from "react-router-dom";
import style from "./EventItem.module.css";
import hearthFilled from "../../../../assets/hearth-filled.png";
import hearthUnfilled from "../../../../assets/hearth-unfilled.png";
import useLikeEvents from "../../../../hooks/useLiveEvents";

// eslint-disable-next-line react/prop-types
function EventItem({ info, id, name, image, onEventClick }) {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id);

  let handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  let handleHearthClick = () => {
    toggleEventLike();
  };
  return (
    <div className={style.eventItemContainer}>
      <div className={style.imageContainer}>
        <img
          src={isEventLiked ? hearthFilled : hearthUnfilled}
          onClick={handleHearthClick}
          alt="Hearth booton"
          className={style.hearthImage}
        />
        <img src={image} alt={name} width={200} height={200}></img>
      </div>
      <div className={style.eventItemInfoContainer}>
        <h4 className={style.eventName}>{name}</h4>
        <p className={style.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={style.seeMoreBtn}>
          {/* <Link to={`/detail/${id}`}>Ver mas</Link> */}
          Ver mas
        </button>
      </div>
    </div>
  );
}

export default EventItem;
