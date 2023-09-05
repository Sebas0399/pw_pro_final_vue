<template >
    <h1>Foro</h1>
    <div>
        <form class="row g-3 needs-validation">

            <div class="mb-3 ">
                <label for="temaInput" class="form-label">Tema</label>
                <input type="text" class="form-control" id="temaInput" required v-model="foro.tema">
            </div>


        </form>
        <button class="btn btn-primary" @click="insertarForo">Insertar</button>
    </div>
    <div class="alert" :class="mensaje.includes('correctamente') ? 'alert-success' : 'alert-danger'" role="alert"
        v-if="mostrarMensaje">
        {{ mensaje }}

    </div>
</template>
<script>
import { ingresarForoFachada } from "../helpers/ForoCliente.js";
export default {
    mounted() {

    },
    data() {
        return {
            msj:false,
            foro: {
                tema: "",

            }, mensaje: "",
            mostrarMensaje: false,
            }
        
    },
    methods: {
        async insertarForo() {
            if (!this.foro.tema) {
                this.mensaje = "El campo 'Tema' no puede estar en blanco.";
                this.mostrarMensaje = true;

            }
            else {
                const response = await ingresarForoFachada(this.foro);

                // Verifica el código de estado
                if (response.status === 201) {
                    this.mensaje = "Se insertó el foro correctamente";
                } else {
                    this.mensaje = "Hubo un error al insertar el foro";
                }

                this.mostrarMensaje = true;
            }

            this.msj=true;

        },


    },
};
</script>
<style scoped>
form {
    margin: 20px;
}
.alert{
    margin-top: 20px;
}
</style>