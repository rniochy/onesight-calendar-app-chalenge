import React, {useContext, useState} from 'react';
import { AppContext } from '../../pages/_app';
import styles from "../../styles/appointment.module.scss";
import fetchData from '../../util/axios';

const CreateAppointment = ({eventDate_}) => {
    const {setAppoimentFile} = useContext(AppContext);
    const {day, year, month} = eventDate_;
    const [name, setName] = useState();
    const [note, setNote] = useState();
    const eventDate =  year + "/"+ month +"/"+ day;

     async function saveEventHandler (e)  {
         e.preventDefault();
         setAppoimentFile(false); 
         await fetchData.post('/api/appointment/appointment',  {name, note, eventDate});
    }

    const noteChangeHandler =(e) =>{
        setNote(e.target.value);
    }
    const nameChangeHandler =(e) =>{
        setName(e.target.value);
    }
    return (
        <div className={styles.appointment_container}>
             <form>
                <legend>Create new appointment</legend>
                <h3>{eventDate}</h3>
                <input onChange={nameChangeHandler} type="text" placeholder='Name'/>
                <div className={styles.note_area}>
                    <label htmlFor="area" >Notes</label>
                    <textarea onChange={noteChangeHandler} id='area'></textarea>
                </div>

                <div className={styles.buttons}>
                <input onClick={saveEventHandler}   type="submit" value="Save"/>
                </div>
             </form>
        </div>
    );
}
export default CreateAppointment;
