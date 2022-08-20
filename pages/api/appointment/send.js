import connect from "../../../database/connnect";
import AppointmentModel from "../../../database/models/appointment.model";

connect();

export default async (req, res)=>{
    // const {method} = req;
    const {name, note} = req.body;

    // if(method === "POST") {
    //     try {
            // const appointment = new Appointment({name, note});
            // await appointment.save();

             res.send({name});

    //     }catch(err){
    //         return res.status(400).send({msg: "Wasn't possivel cretae"})
    //     }
    // } res.send();
} 