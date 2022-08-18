import React, { useEffect, useState } from "react";
import CalendarData from "./calendarData";
import styles from '../../styles/calendar.module.scss'

const  Calendar =  () => {
return ( 
    <> 
           <div className={styles.container}>
                <div className="calendarContainer">
                        <CalendarData/>
                </div>
            </div>
    </>
    );    
}
export default Calendar;