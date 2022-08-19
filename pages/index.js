import Calendar from "./calendar";
import styles from "../styles/index.module.scss";

export default function Home(){
  return (
         <div className={styles.home_container}>
              <Calendar/>
         </div>
  );
 } 