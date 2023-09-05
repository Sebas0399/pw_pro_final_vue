import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Facultad/foros"

export const ingresarForoFachada = (bodyForo) => {
    return ingresarForo(bodyForo);
}

export const obtenerTodasForoFachada = () => {
    return obtenerTodasForo();
}

export const obtenerForoFachada = (id) => {
    return obtenerForo(id);
}

export const eliminarEstudianteFachada = async (id) => {
    await eliminarEstudiante(id);
}

export const actualizarForoFachada = async (bodyForo, id) => {
    return actualizarForo(bodyForo, id);
}

const obtenerTodasForo = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.status); // Código de estado
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const obtenerForo = async (id) => {
    try {
        const response = await axios.get(url + "/" + id);
        console.log(response.status); // Código de estado
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const ingresarForo = async (bodyForo) => {
    try {
        const response = await axios.post(url, bodyForo);
        console.log(response.status); // Código de estado
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const actualizarForo = async (bodyForo, id) => {
    try {
        const response = await axios.put(url + "/" + id, bodyForo);
        console.log(response.status); // Código de estado
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
