import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { AppContext } from "../_app";
import styles from '../../styles/calendardata.module.scss'; 
import fetchData from '../../util/axios';

const  CalendarData = ({data})=> {
    const {setAppoimentFile, setEventDate, cancel, approve} = useContext(AppContext);
    const [dayList, setDayList] = useState();
    const [monthName, setmonthName] = useState();
    const [yearName, setYearName] = useState();
    // const [datetDisplay, setDatetDisplay] = useState();
    const [date, setDate] = useState(new Date());
    const [month, setMonth] = useState(date.getMonth()+1);
    // const [dataInPut, setDataInPut] = useState("");
    const [year, setYear] = useState(date.getFullYear());
    const [currentDay, setCurrentDay] = useState(date.getDate());
    const monthNames = ['January', 'February', 'March',  'April', 'May',
    'June', 'july', 'August',  'September', 'October', 'November', 'December'];
    const [appointment, setAppointment] = useState([]);

    useEffect(()=>{
        calendar();
        getDetail();
    }, [cancel, approve])
    

    const getDetail = async ()=>{
        const res = await fetchData.get('/api/appointment/appointment');
        setAppointment(res.data.appointment);
    }
    
    
    const handlerClickEvent = (e) =>{
        setEventDate({day:e.currentTarget.getAttribute('value'),month:month,year:year})
        setAppoimentFile(true);
    }

    const calendar = () => {
        let amountDaysInMonth = new Date(year, month, 0).getDate()
        let amountDaysAtWeek = new Date(year, month-1, 1).getDay()
         
        setmonthName(monthNames[month-1])
        setYearName(year)
        // setDatetDisplay(currentDay)

        let gaps;
        if(amountDaysAtWeek === 0){
             gaps = 6
        } else {
             gaps = amountDaysAtWeek -1
        }
        const daysArr = []
        
        for(let day = -gaps + 1; day <= amountDaysInMonth; day++){
            let days = React.createElement('li', {}, day)

             if(day <= 0){
                days = React.createElement('li', {key:day}, "")
                daysArr.push(days)
             } else if (day === currentDay && month === date.getMonth()+1 && year === date.getFullYear() ){
                days = React.createElement('li', {value: day, key:day,  className: `${styles.active}`, onClick:handlerClickEvent}, day)
                daysArr.push(days)        
            //  } else if( day === 31 && month === 8 && year === 2022){
            //     days = React.createElement('li', {value: day, key:day, className:`${styles.cancel}` ,  onClick:handlerClickEvent}, day)
            //     daysArr.push(days)
             } else  {
                 // if is aprrove && data matches 
                 // if is cancel && data matches 
                days = React.createElement('li', {value: day, key:day ,  onClick:handlerClickEvent}, day)
                daysArr.push(days)      
             }

        }
           setDayList(React.createElement('ul', {className: `${styles.days_of_week}`}, daysArr))
    }
    return (
       <section className={styles.calendarData}>
            <p style={{textAlign: "center"}}>{`${monthName +' '+ yearName}`} </p>
            <ul className={styles.weekdays}>
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul> 
            <div className={styles.days_of_week_conatiner}>
                {dayList}
            </div>  
        </section>
    )
}
export default CalendarData;