import HeadComponent from "../components/head";
import Calendar from "./calendar";

import styles from "../styles/index.module.scss"

export default function Home(){
  return (
      <div className={styles.app}>
        <HeadComponent title="home" />
        <Calendar/>
      </div>
  );

 } 