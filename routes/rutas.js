import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'

let controladorHabitacion= new ControladorHabitaciones()
let controladorReserva= new ControladorReserva()

//Para separar las rutas de la logica de negocio
//utilizare un metodo especial de EXPRESS
export let rutas=express.Router()

rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoTodasHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoUnaHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)

rutas.post('/reservar',controladorReserva.registrandoReserva)
rutas.get('/buscarReservas',controladorReserva.buscandoTodasReservas)

