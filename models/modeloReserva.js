import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema;

//construimos el esquema persdonalizando la informacion
const Reserva=new Schema({
    nombre:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    hora:{
        type:String,
        required:true
    },
    dia:{
        type:String,
        required:true
    },
    tipo:{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.model('reserva',Reserva)