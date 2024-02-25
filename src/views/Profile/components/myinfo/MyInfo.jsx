import { useForm } from "react-hook-form";
import style from "./myInfo.module.css";
import { useEffect } from "react";
const USER_DATA = "userData";

       //*********************/ MyInfo view *********************/
//*********************/ Show form to update data *********************/

export default function MyInfo() {
  const {
    handleSubmit,
    register,
    // formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA));
      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      console.error(error);
    }
  }, [setValue]);

  const handleFormsubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert("Informacion guardada");
      // console.log(data);
    } catch (errors) {
      alert("Error en el formulario");
      console.log(errors);
    }
  };
  // console.log(errors);
  return (
    <div className={style.myInfo}>
      <div className={style.formContainer}>
        <h2>My info</h2>
        <form onSubmit={handleSubmit(handleFormsubmit)} className={style.form}>
          <div className={style.formGroup}>
            <label className={style.label}>
              name
              <input
                type="text"
                className={style.input}
                {...register("name", {
                  required: true,
                  minLength: 3,
                  maxLength: 100,
                })}
              />
            </label>
            <label className={style.label}>
              Email
              <input
                type="email"
                className={style.input}
                {...register("email", { required: true, min: 1, max: 120 })}
              />
            </label>
            <label className={style.label}>
              Age
              <input
                type="number"
                className={style.input}
                {...register("age", {
                  required: true,
                  min: 1,
                  max: 120,
                  valueAsNumber: true,
                })}
              />
            </label>
          </div>
          <button className={style.formSubmintButton} type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
