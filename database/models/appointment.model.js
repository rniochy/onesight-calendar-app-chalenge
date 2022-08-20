import mongoose from 'mongoose';

const Schema = mongoose.Schema
const AppointmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    note:{
        type: String,
        required: true,
    },
     approve:{
         type: Boolean,
         default: false
     },
     cancel: {
       type: Boolean,
       default: false  
     },
     createdAt: {
         type: Date,
         default: Date.now
     },
},
{
    timestamps: true
});

 let Appointment = mongoose.models.AppointmentModel || mongoose.model('Appointment', AppointmentSchema);
 export default Appointment; 