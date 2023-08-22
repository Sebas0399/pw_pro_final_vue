<template >
    <h1>Foro</h1>
    <div>
        <form class="row g-3 needs-validation">

            <div class="mb-3 ">
                <label for="temaInput" class="form-label">Tema</label>
                <input type="text" class="form-control" id="temaInput" required v-model="foro.tema">
            </div>


            <button class="btn btn-primary" @click="insertarForo">Insertar</button>
        </form>
        <button class="btn btn-primary" @click="insertarForo">Insertar</button>
    </div>
    <div class="alert alert-success" role="alert">
        Se inserto el foro correctamente
    </div>
</template>
<script>
import { ingresarForoFachada } from "../helpers/ForoCliente.js";
export default {
    mounted() {

    },
    data() {
        return {
            foro: {
                tema: "",

            },
        };
    },
    methods: {
        async insertarForo() {
            await ingresarForoFachada(this.foro);


        },
    },
};
</script>
<style scoped>
form {
    margin: 20px;
}
</style>