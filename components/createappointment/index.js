import React, {useContext} from 'react';
import { AppContext } from '../../pages/_app';
import styles from "../../styles/appointment.module.scss";

const Appointment = ({eventDate}) => {
    const {setAppoimentFile} = useContext(AppContext);
    const saveEventHandler = (e) => {
         e.preventDefault();
         setAppoimentFile(false);    
    }
    return (
        <div className={styles.appointment_container}>
             <form onClick={saveEventHandler}>
                <legend>Create new appointment</legend>
                <h3>{eventDate}</h3>
                <input type="text" placeholder='Name'/>
                <div className={styles.note_area}>
                    <label htmlFor="area" >Notes</label>
                    <textarea id='area'></textarea>
                </div>
                <input type="submit" value="Save"/>
             </form>
        </div>
    );
}
export default Appointment;
