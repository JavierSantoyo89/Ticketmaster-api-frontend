import style from "./Datail.module.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import eventFetcher from "../../utils/fetchevents"
console.log("el path es; " + window.location);

const pathname = window.location.pathname;
console.log(pathname);
const resource = eventFetcher(pathname.substring(8, pathname.length));

const Detail = () => {
  const eventData = resource.eventDetail.read();
  console.log("la data en Detail es: " + eventData);
  // const [eventData, setEventData] = useState({});
  return (
    <div className={style.container}>
      detail
      <div className={style.mainInfoContainer}>
        {/* {eventData.images[0].url === undefined ? <Loading/> : <img src={eventData.images[0].url} /> } */}
        <img
          src={eventData.images?.[0].url}
          alt={eventData.name}
          className={style.eventImage}
        />
        <h4 className={style.eventName}>{eventData.name}</h4>
        <p className={style.infoParagraph}> {eventData.info}</p>
        {eventData.dates?.start.dateTime ? (
          <p className={style.dateParagraph}>
            {format(
              new Date(eventData.dates?.start.dateTime),
              "dd/MM/yyyy H:mm",
              { locale: es }
            )}
            hrs
          </p>
        ) : null}
      </div>
      <div className={style.seatInfoContainer}>
        <h6 className={style.seatMapTitle}> Mapa del evento</h6>
        <img src={eventData.seatmap?.staticUrl} alt="Seatmap event" />
        <p className={style.pleaseNoteLegend}>{eventData.pleaseNote}</p>
        <p className={style.priceRangeLegend}>
          Rango de precios: {eventData.priceRanges?.[0].min} ~{" "}
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url} className={style.seeMoreBtn}>
        ir por tus boletos
      </a>
    </div>
  );
};

export default Detail;

// function Detail() {
//   return (
//     <div>Detail</div>
//   )
// }

// export default Detail
