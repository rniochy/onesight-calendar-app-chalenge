import React, { useEffect, useState } from 'react';
import fetchData from '../../util/axios';
import {useRouter} from "next/router"

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
        <article>
            <label>Name</label>
            <h1>{appointment.name}</h1>
            <label>Name</label>
            <p>{appointment.note}</p>
            <div>
                <input type="button" value="editar"/>
                <input type="button" value="remover"/>
            </div>
        </article>
    );
}

export default Appointmentdetails;
