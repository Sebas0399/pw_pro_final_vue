import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Facultad/noticias"

export const obtenerEstudianteFachada = async (cedula) => {

    return await obtenerEstudianteAPIAxios(cedula);

}

export const ingresarEstudianteFachada = (bodyEstudiante) => {
    ingresarEstudianteAPIAxios(bodyEstudiante)
}

export const obtenerTodasNoticiasFachada = () => {
    return obtenerTodasNoticias()
}

export const eliminarEstudianteFachada = async (id) => {
    await eliminarEstudiante(id)
}




const obtenerTodasNoticias = async () => {
    const data = axios.get(url).then(r => r.data)
    console.log(data)
    return data

}
const ingresarEstudianteAPIAxios = (bodyEstudiante) => {
    axios.post(url, bodyEstudiante).then(r => r.data)
}
const actualizarEstudiante = (bodyEstudiante, id) => {
    axios.put(url + "/" + id, bodyEstudiante).then(r => r.data)
}
const eliminarEstudiante = async (id) => {
    axios.delete(url + "/" + id).then(r => r.data)
}