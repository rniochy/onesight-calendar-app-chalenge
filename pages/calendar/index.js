import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../_app";
import CalendarData from "./calendarData";
import styles from '../../styles/calendar.module.scss'
import Appointment from "../../components/createappointment";

const  Calendar =  () => {
    const {appoimentFile, eventDate} = useContext(AppContext);
return ( 
    <> 
        <div className={styles.container}>
            <div className="calendarContainer">
                    <CalendarData/>
                    <div className={ appoimentFile ? styles.appoiment_field : styles.appoiment_field_hide}>
                        <Appointment eventDate={eventDate}/>
                    </div>
            </div>
            <aside>
                 <p>Rodrigo</p>
            </aside>
        </div>
    </>
    );    
}
export default Calendar;