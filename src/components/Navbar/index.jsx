import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p style={{ fontSize: 18, fontWeight: 'bold'}}>mi boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
        />
        <Link to='/profile/my-info' style={{marginLeft:24, color: '#fff', textDecoration: 'none'}}>Mi perfil </Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
