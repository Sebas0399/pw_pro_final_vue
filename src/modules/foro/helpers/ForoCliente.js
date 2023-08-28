import axios from "axios"
const url = "http://localhost:8081/API/v1.0/Facultad/foros"

export const obtenerEstudianteFachada = async (cedula) => {

    return await obtenerEstudianteAPIAxios(cedula);

}

export const ingresarForoFachada = (bodyForo) => {
    ingresarForo(bodyForo)
}

export const obtenerTodasForoFachada = () => {
    return obtenerTodasForo()
}
export const obtenerForoFachada = (id) => {
    return obtenerForo(id)
}

export const eliminarEstudianteFachada = async (id) => {
    await eliminarEstudiante(id)
}


export const actualizarForoFachada = async (id) => {
    await actualizarForo(id)
}



const obtenerTodasForo = async () => {
    const data = axios.get(url).then(r => r.data)
    console.log(data)
    return data

}
const obtenerForo = async (id) => {
    const data = axios.get(url+ "/" + id).then(r => r.data)
    console.log(data)
    return data

}
const ingresarForo = (bodyForo) => {
    console.log(bodyForo)

    axios.post(url, bodyForo).then(r => r.data)
}
const actualizarForo = (bodyForo, id) => {
    axios.put(url , bodyForo).then(r => r.data)
}
const eliminarEstudiante = async (id) => {
    axios.delete(url + "/" + id).then(r => r.data)
}