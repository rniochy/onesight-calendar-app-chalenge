import React from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/displayappointment.module.scss';

const Displayappointment = ({dataAppointment}) => {
    const router = useRouter()
    const {_id, name, note, eventDate}  = dataAppointment;
    
    const displayDetailHandler = () =>{
        router.push(`appointment-details/${_id}`);

    }

    return (
        <article className={styles.displayappointment_container}>
               <ul>
                    <li>
                        <div onClick={displayDetailHandler} className={styles.content}>
                            <h2>{name.substring(0,15)}</h2>
                            <p>{eventDate}</p>
                        </div>
                        <div className={styles.buttons}>
                            <input type="button" value='cancel'/>
                            <input type="button" value='approve'/>
                        </div>
                    </li>
               </ul>
        </article>
    );
}
export default Displayappointment;
