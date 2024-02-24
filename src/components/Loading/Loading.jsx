import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div>
      <span className={style.loader}></span>
      <h2>Loading...</h2>
    </div>
  );
};
export default Loading;
