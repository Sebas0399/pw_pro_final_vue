import axios from "axios";
const url = "http://localhost:8080/API/v1.0/Facultad/noticias";

export const ingresarNoticiaFachada = async (bodyNoticia) => {
  try {
    const response = await ingresarNoticia(bodyNoticia);
    const statusCode = response.status;

    console.log(`Código de estado de ingreso de noticia: ${statusCode}`);

    return response.data;
  } catch (error) {
    const statusCode = error.response ? error.response.status : null;

    console.error(`Error con código de estado en ingreso de noticia: ${statusCode}`);
    throw error;
  }
};

export const obtenerTodasNoticiasFachada = async () => {
  try {
    const response = await obtenerTodasNoticias();
    const statusCode = response.status;

    console.log(`Código de estado al obtener todas las noticias: ${statusCode}`);

    return response.data;
  } catch (error) {
    const statusCode = error.response ? error.response.status : null;

    console.error(`Error con código de estado al obtener todas las noticias: ${statusCode}`);
    throw error;
  }
};

const obtenerTodasNoticias = async () => {
  return axios.get(url);
};

const ingresarNoticia = async (bodyNoticia) => {
  return axios.post(url, bodyNoticia);
};
