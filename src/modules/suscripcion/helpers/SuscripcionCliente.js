import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Facultad/suscripciones"



export const ingresarSuscripcionFachada = (bodySuscripcion) => {
   console.log('ingresarSuscripcionFachada')
    ingresarSuscripcion(bodySuscripcion)
}
/*
export const obtenerTodasSuscripcionFachada = () => {
    return obtenerTodasSuscripcion()
}
export const obtenerSuscripcionFachada = (id) => {
    return obtenerSuscripcion(id)
}
export const eliminarSuscripcionFachada = async (id) => {
    await eliminarSuscripcion(id)
}
export const actualizarSuscripcionFachada = async (id) => {
    await actualizarSuscripcion(id)
}
const obtenerTodasSuscripcion = async () => {
    const data = axios.get(url).then(r => r.data)
    console.log(data)
    return data
}
const obtenerSuscripcion = async (id) => {
    const data = axios.get(url+ "/" + id).then(r => r.data)
    console.log(data)
    return data
}
const actualizarSuscripcion = (bodySuscripcion, id) => {
    axios.put(url , bodySuscripcion).then(r => r.data)
}
const eliminarSuscripcion = async (id) => {
    axios.delete(url + "/" + id).then(r => r.data)
}
*/


const ingresarSuscripcion = (bodySuscripcion) => {
    console.log(bodySuscripcion)

    axios.post(url, bodySuscripcion).then(r => r.data)
}