import { ServicioReservas } from "../services/ServicioReserva.js"

export class ControladorReserva{

    constructor(){}

    async registrandoReserva(peticion,respuesta){
        let datosReserva=peticion.body
        let servicioReserva=new ServicioReservas()
        try{
            await servicioReserva.registrarReservan(datosReserva)
            respuesta.status(200).json({
                "mensaje":"Exito agregando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

    

    async buscandoTodasReservas(peticion,respuesta){
        let servicioReserva=new ServicioReservas()
        try{
            respuesta.status(200).json({

                "mensaje":"Exito buscando reservas",
                "reservas":await servicioReserva.buscarTodasReservas()
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

    

}