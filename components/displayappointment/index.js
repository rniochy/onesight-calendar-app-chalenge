import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../../pages/_app';
import styles from '../../styles/displayappointment.module.scss';
import fetchData from '../../util/axios';

const Displayappointment = ({dataAppointment}) => {
    const router = useRouter();
    const {approve_, cancel_, setDate_} = useContext(AppContext);
    const {_id:id, name, eventDate}  = dataAppointment;
    
    const displayDetailHandler = () =>{
        router.push(`appointment-details/${id}`);

    }

    const approveHandler = async () => {
        await fetchData.put('/api/appointment/appointment', {id, cancel:false, approve: true});  
    }
    const cancelHandler = async () => {
       await fetchData.put('/api/appointment/appointment', {id, cancel:true, approve: false});
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
                                <input type="button" onClick={cancelHandler}   value='cancel'/>
                                <input type="button" onClick={approveHandler} value='approve'/>
                            </div>
                        </div>
                    </li>
               </ul>
        </article>
    );
}
export default Displayappointment;
