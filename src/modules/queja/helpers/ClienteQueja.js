import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Facultad/quejas"


export const ingresarFormularioFachada = (bodyFormulario) => {
    ingresarFormulario(bodyFormulario)
}

export const obtenerTodasFormularioFachada = () => {
    return obtenerTodasFormulario()
}
export const obtenerFormularioFachada = (id) => {
    return obtenerFormulario(id)
}


const obtenerTodasFormulario = async () => {
    const data = axios.get(url).then(r => r.data)
    console.log(data)
    return data

}
const obtenerFormulario = async (id) => {
    const data = axios.get(url+ "/" + id).then(r => r.data)
    console.log(data)
    return data

}
const ingresarFormulario = (bodyFormulario) => {
    console.log(bodyFormulario)

    axios.post(url, bodyFormulario).then(r => r.data)
}