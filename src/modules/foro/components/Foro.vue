<template>
    <div class="card" style="margin: 1rem; padding: 1rem;">
        <p>{{ foro.tema }}</p>
        <h1>Comentarios</h1>
        <span class="badge bg-primary rounded-pill" v-if="this.foro.comentarios != null">{{ this.foro.comentarios.length
        }}</span>
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start"
                v-for="(comentario) in foro.comentarios" :key="comentario">
                <div class="ms-2 me-auto">
                    {{ comentario }}
                </div>

            </li>
        </ol>
        <p>Agregar comentario</p>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required v-model="newComentario" ></textarea>
        <button type="button" class="btn btn-primary" @click="ponerComentario">Comentar</button>
        <!-- <button @click="getID">Ckc</button>
        <div v-if="showModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" v-model="newComentario">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
                        <button type="button" class="btn btn-primary" @click="ponerComentario">Comentar</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
  
<script>
import { actualizarForoFachada } from "../helpers/ForoCliente.js";

export default {
    data() {
        return {
            showModal: false,
            newComentario: null
        };
    },
    mounted() {
        console.log(this.foro.id);
    },
    props: {
        foro: {
            name: Object,
            required: true,
        },
    },
    methods: {
        getID() {
            console.log(this.foro.id)
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
        async ponerComentario() {
            console.log(this.foro.id)
            this.showModal = false
            if (this.foro.comentarios != null) {
                this.foro.comentarios.push(this.newComentario)
                await actualizarForoFachada(this.foro, this.foro.id);
            }
            else{
                this.foro.comentarios=[this.newComentario]
                await actualizarForoFachada(this.foro, this.foro.id);
            }



        }
    },
};
</script>
  
<style></style>