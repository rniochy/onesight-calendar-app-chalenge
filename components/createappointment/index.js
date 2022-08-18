import React from 'react';
import styles from "../../styles/appointment.module.scss";

const Appointment = ({dateOfEvent}) => {
    return (
        <div className={styles.appointment_container}>
             <form>
                <legend>Create new appointment</legend>
                <h3>{"18-8-2022"}</h3>
                <input type="text" placeholder='Name'/>
                <div className={styles.note_area}>
                    <label for="area" >Notes</label>
                    <textarea id='area'></textarea>
                </div>
                <input type="submit" value="Save"/>
             </form>
        </div>
    );
}
export default Appointment;
