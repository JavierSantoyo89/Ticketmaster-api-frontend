import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

      //*********************  Navbar  *********************/
//*********************/  Navbar component  *********************/
// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");
  //  let handleClickClear = () => {
  //     setSearch();
  //   };

  let handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  let handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
      console.log(search);
    }
  };

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
  }));
  // console.log(search);
  return (
    <div
      ref={ref}
      // style={{
      //   marginBottom: 14,
      //   width: "100%",
      //   display: "flex",
      //   justifyContent: "center",
      // }}
      className={style.container}
    >
      <div className={style.titleContainer}>
        <p className={style.pTitle}>Ticketmaster pirata...</p>
      </div>
      <div className={style.inputcontainer}
      >
        <input
          type="text"
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
        />
        <Link to='/profile/my-info' className={style.perfilLink}>Mi perfil </Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
