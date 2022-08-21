import React, { useEffect } from 'react';

const Appointmentdetails = () => {

    useEffect(()=>{
    },[])
    return (
        <article>
            <label>Name</label>
            <h1>{"Title"}</h1>
            <label>Name</label>
            <p>{"Note"}</p>
            <div>
                <input type="button" value="editar"/>
                <input type="button" value="remover"/>
            </div>
        </article>
    );
}
export default Appointmentdetails;
