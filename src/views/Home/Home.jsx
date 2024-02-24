import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import SignupForm from "../../components/SingupForm";
// import Lista from '../../components/Lista/lista';
import ReactPaginate from "react-paginate";
import Events from "../../components/Events/Events";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading/Loading";
// import useEventsData from "../../hooks/useEventsData";
import styles from "./Home.module.css";
import useEventsResults from "../../state/events-results";
// const Home = () => {
//   <div>
//     <h1>home</h1>
//   </div>;
// };
// export default Home;

function Home() {
  const {data, isLoading, error, fetchEvents} = useEventsResults();
  const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events]);
  const page = useMemo(() => data?.page || {}, [data?.page]);
  const [contar, setContar] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  const fetchMyEventsRef = useRef();
  // const {  isLoading, error,    fetchEvents, page   } = useEventsData();
  const [isToggle, setIsToggle] = useState(false);

  fetchMyEventsRef.current = fetchEvents;

  let handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=` + term);
    // console.log("El paramatero es: " + term);
  };


  const handlePageClick = useCallback(({ selected }) => {
    console.log(selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected }`);
  }, [searchTerm, fetchEvents]);


  // const fetchMyEvents = () => fetchEvents()  
    fetchMyEventsRef.current = fetchEvents;
  useEffect(() => {
    // fetchEvents();
    console.log('useEffect');
        fetchMyEventsRef.current();
  }, []);

  setTimeout(() => {
    setContar(contar + 1);
  }, 1000);

  const renderEvents = () => {
    //   isLoading ? (<Loading />) : ( <Events searchTerm={searchTerm} events={events} />);
    //   {!!error && <div>Ha ocurrido un error</div>;}

    if (isLoading) {
      return <Loading />;
    } else if (error) {
      return <div>Ha ocurrido un error</div>;
    } else {
      return (
        <div>
          <button onClick={() => setIsToggle(!isToggle)}>{isToggle ? "On'" : "Off"}</button>
          <Events searchTerm={searchTerm} events={events} />
          <ReactPaginate
            className={styles.pagination}
            nextClassName={styles.next}
            previousClassName={styles.previous}
            pageClassName={styles.page}
            activeClassName={styles.active}
            disabledClassName={styles.disabledPage}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={page.totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      );
    }
  };

  return (
    <>
      <p>Contador: {contar}</p>

      {/* contar < 10 ? <Lista/> : <Navbar/> */}
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
      {/* <Lista /> */}
      {/* <SignupForm/> */}
    </>
  );
}

export default Home;
