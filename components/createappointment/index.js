import React, {useContext} from 'react';
import { AppContext } from '../../pages/_app';
import styles from "../../styles/appointment.module.scss";

const Appointment = ({eventDate}) => {
    const {setAppoimentFile} = useContext(AppContext);
    const {day, year, month} = eventDate;
    const saveEventHandler = (e) => {
         e.preventDefault();
         setAppoimentFile(false);    
    }
    const RemoveEventHandler = (e) => {
         e.preventDefault();
         setAppoimentFile(false);    
    }
    return (
        <div className={styles.appointment_container}>
             <form>
                <legend>Create new appointment</legend>
                <h3>{month + "/"+ day +"/"+ year}</h3>
                <input type="text" placeholder='Name'/>
                <div className={styles.note_area}>
                    <label htmlFor="area" >Notes</label>
                    <textarea id='area'></textarea>
                </div>

                <div className={styles.buttons}>
                <input onClick={saveEventHandler} type="submit" value="Save"/>
                <input onClick={RemoveEventHandler} type="submit" value="Remove"/>
                </div>
             </form>
        </div>
    );
}
export default Appointment;
