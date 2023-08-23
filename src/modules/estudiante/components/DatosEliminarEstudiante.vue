<template>
    <input v-model="id" type="text">
    <button class="btn btn-danger" @click="eliminarEstudiante">Eliminar</button>
</template>

<script>
//Llamamos al estudiante de helpers
import { eliminarEstudianteFachada, obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    //Propiedad reactiva
    data() {
        return {
            id: null,
        };
    },
    methods: {
        async eliminarEstudiante() {
            const eliminar=eliminarEstudianteFachada(this.id);
            console.log(eliminar)
        },
    },
}
</script>

<style></style>