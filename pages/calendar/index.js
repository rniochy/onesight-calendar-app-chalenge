import React, { useEffect, useState } from "react";
import CalendarData from "./calendarData";
import styles from '../../styles/calendar.module.scss'
import Appointment from "../../components/createappointment";

const  Calendar =  () => {
return ( 
    <> 
           <div className={styles.container}>
                <div className="calendarContainer">
                        <CalendarData/>
                        <Appointment/>
                </div>
            </div>
    </>
    );    
}
export default Calendar;