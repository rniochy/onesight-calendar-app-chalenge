import connect from "../../../database/connnect";
import Appointment from "../../../database/models/appointment.model";

connect();

export default async (req, res)=>{
    const {method} = req;
    const {name, note, eventDate} = req.body;

    switch(method){
        case 'POST':
            try {
                if(name && note){
                    const appointment = new Appointment({name, note, eventDate});
                    await appointment.save();
                    return res.send({name});
                }
                return res.status(400).send({})
    
            }catch(err){
                return res.status(400).send({msg: "Wasn't possivel cretae"})
             }
        
        case 'GET': 
            try {
                const appointments  = await Appointment.find({});
                return res.send({appointments});

            }catch(err){
                return res.status(400).send({msg: "Wasn't possivel get appointments"})
            }
        case 'DELETE': 
            try {
                await Appointment.findByIdAndDelete({_id: "6300ce6a5721032766149493"});
                return res.send({});

            }catch(err){
                return res.status(400).send({msg: "Wasn't possivel delete appointments"})
            }
        case 'PUT': 
            try {
                if(name && note){
                    await Appointment.updateOne({_id: "6300ce7a5721032766149496"}, {$set: {name, note}});
                    return res.send({});
                } else if(name){
                    await Appointment.updateOne({_id: "6300ce7a5721032766149496"}, {$set: {name}});
                    return res.send({});
                } else {
                    await Appointment.updateOne({_id: "6300ce7a5721032766149496"}, {$set: {note}});
                    return res.send({});
                }
            }catch(err){
                return res.status(400).send({msg: "Wasn't possivel update appointments"})
            }
        
    }
} 