import React, { useEffect, useState } from 'react';
import fetchData from '../../util/axios';
import {useRouter} from "next/router";
import styles from '../../styles/appointment-detail.module.scss';

const Appointmentdetails = () => {
    const router = useRouter()
    const id = router.query.id
    const [appointment, setAppoiment] = useState([]);

    useEffect(()=>{
        (async()=>{
            const res = await fetchData.patch('/api/appointment/appointment', {id});
            setAppoiment(res.data.appointment);
        })()   
    },[])

    return (
        <div className={styles.content}>
            <article className={styles.appointment_detail}>
                <label>Name</label>
                <h3>{appointment.name}</h3>
                <label>Note</label>
                <p>{appointment.note}</p>
                <div>
                    <input type="button" value="editar"/>
                    <input type="button" value="remover"/>
                </div>
            </article>
        </div>
    );
}

export default Appointmentdetails;
