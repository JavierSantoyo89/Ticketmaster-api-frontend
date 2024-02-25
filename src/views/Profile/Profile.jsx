import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";

            //*********************/ Profile view *********************/
//*********************/  Show Profile data and liked events  *********************/

export default function Profile() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleTabClick = (path) => {
    navigate(`/profile/${path}`);
  };
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/" className={style.homeLink}>
        Inicio
      </Link>
      <div className={style.tabsContainer}>
        <span
          className={`${pathname.includes("my-info") ? style.active : ""} ${
            style.tab
          }`}
          onClick={() => handleTabClick("my-info")}
          style={{ marginRight: "8px" }}
        >
          Mi informacion
        </span>
        <span
          className={`${
            pathname.includes("liked-events") ? style.active : ""
          } ${style.tab}`}
          onClick={() => handleTabClick("liked-events")}
        >
          Favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
}
