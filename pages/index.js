import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "./_app";
import fetchData from "../util/axios";
import CalendarData from "./calendar"
import CreateAppointment from "../components/createappointment";
import Displayappointment from "../components/displayappointment";
import styles from '../styles/calendar.module.scss'


export default function  Calendar({data}) {
    const {appoimentFile, appointment, setAppointment} = useContext(AppContext);
   

    useEffect(()=>{
        setAppointment(JSON.parse(data))
    }, []); 
    
    return ( 
        <> 
            <div className={styles.container}>
                <div className="calendarContainer">
                        {appointment ?  <CalendarData appointments={appointment}/> : ''}
                        <div className={ appoimentFile ? 'appoiment_field' : 'appoiment_field_hide'}>
                            { 
                                <CreateAppointment  edit={false}/> 
                            }
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

export async function getServerSideProps() { 
   const res = await fetchData.get('/api/appointment/appointment');
   const  appointment = JSON.stringify(res.data.appointments);

    return { props: { data:appointment } }
  }