import React, {useContext, useState} from 'react';
import { AppContext } from '../../pages/_app';
import styles from "../../styles/appointment.module.scss";
import fetchData from '../../util/axios';

const CreateAppointment = ({eventDate}) => {
    const {setAppoimentFile} = useContext(AppContext);
    const {day, year, month} = eventDate;
    const [name, setName] = useState();
    const [note, setNote] = useState();

     async function saveEventHandler (e)  {
         e.preventDefault();
        //  setAppoimentFile(false); 
        const appointment = {name: "Rodrigo", note: "Ir a escola"} 
        const res = await fetchData.post('/api/appointment/send',  {name, note});
        alert(res.data.name)
    }
    const RemoveEventHandler = (e) => { 
         e.preventDefault();
         setAppoimentFile(false);    
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
                <h3>{month + "/"+ day +"/"+ year}</h3>
                <input onChange={nameChangeHandler} type="text" placeholder='Name'/>
                <div className={styles.note_area}>
                    <label htmlFor="area" >Notes</label>
                    <textarea onChange={noteChangeHandler} id='area'></textarea>
                </div>

                <div className={styles.buttons}>
                <input onClick={saveEventHandler}   type="submit" value="Save"/>
                <input onClick={RemoveEventHandler} type="submit" value="Remove"/>
                </div>
             </form>
        </div>
    );
}
export default CreateAppointment;
