<template>
    <input v-model="id" type="text">
    <button @click="eliminarEstudiante">Eliminar</button>
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
            eliminarEstudianteFachada(this.id);
        },
    },
}
</script>

<style></style>