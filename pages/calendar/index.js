import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../_app";
import fetchData from "../../util/axios";
import CalendarData from "./calendarData";
import CreateAppointment from "../../components/createappointment";
import Displayappointment from "../../components/displayappointment";
import styles from '../../styles/calendar.module.scss'


export default function  Calendar() {
    const {appoimentFile, eventDate} = useContext(AppContext);
    const [appointment, setAppointment] = useState([]);

    useEffect(()=>{
        getAppointment();
    }, []); 
    
    async function getAppointment(){
        const res = await fetchData.get('/api/appointment/appointment');
        setAppointment(res.data.appointments); 
    }

    return ( 
        <> 
            <div className={styles.container}>
                <div className="calendarContainer">
                    <CalendarData/>
                    <div className={ appoimentFile ? styles.appoiment_field : styles.appoiment_field_hide}>
                        <CreateAppointment eventDate_={eventDate}/>
                    </div> 
                </div>
                <aside>
                    {
                    appointment && appointment.length > 0 ? 
                        appointment.map((elem, index)=> <Displayappointment dataAppointment={elem} key={index}/>)
                    : ''
                    }
                </aside>
            </div>
        </>
        );    
}
// export async function getServerSideProps() { 
//     // Fetch data from external API
//     const data = await fetchData.get('/api/appointment/appointment');
//     // const data = await res.json()
  
//     // Pass data to the page via props
//     return { props: { data } }
//   }