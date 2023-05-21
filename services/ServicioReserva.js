import { modeloReserva } from "../models/modeloReserva.js";
export class ServicioReservas{

    constructor(){}

    async registrarReservan(datosReserva){

        let reservaNueva=new modeloReserva(datosReserva)
        return await reservaNueva.save()

    }
    async buscarTodasReservas(){
        let reservas=await modeloReserva.find()
        return reservas
    }
   
}