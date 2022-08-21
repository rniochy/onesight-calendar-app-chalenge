import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/displayappointment.module.scss';

const Displayappointment = ({dataAppointment}) => {
    const router = useRouter();
    const {_id, name, eventDate}  = dataAppointment;
    
    const displayDetailHandler = () =>{
        router.push(`appointment-details/${_id}`);

    }
    const approveHandler = () => {
         
    }
    return (
        <article className={styles.displayappointment_container}>
               <ul className={styles.container}>
                    <li>
                        <div className={styles.content}>
                            <div onClick={displayDetailHandler} >
                                <h2>{name.substring(0,15)}</h2>
                                <p>{eventDate}</p>
                            </div>
                            <div className={styles.buttons}>
                                <input type="button" value='cancel'/>
                                <input type="button" onClick={approveHandler} value='approve'/>
                            </div>
                        </div>
                    </li>
               </ul>
        </article>
    );
}
export default Displayappointment;
