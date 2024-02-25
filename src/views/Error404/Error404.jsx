import styles from "./Error404.module.css";
import { useRouteError } from "react-router-dom";


          //*********************  Error 404 view  *********************/
//*********************  Show this view when not found page  *********************/
const Error404 = () => {
    const error = useRouteError();
    console.log(error.data);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ops!</h3>
      <p className={styles.description}>
        {error.data || error.status} 
      </p>
    </div>
  );
};
export default Error404;
