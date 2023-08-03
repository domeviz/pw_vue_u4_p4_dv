<template>
    <label for="">ID</label>
    <input v-model="id" type="text">
    <label for="">Cedula</label>
    <input v-model="cedula" type="text">
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input v-model="apellido" type="text">
    <button @click="actualizarEstudiante">Actualizar</button>
</template>

<script>
//Llamamos al estudiante de helpers
import { actualizarEstudianteFachada, ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    //Propiedad reactiva
    data() {
        return {
            id:null,
            cedula: null,
            nombre: null,
            apellido: null
        };
    },
    methods: {
        async actualizarEstudiante() {
            const data ={
                cedula:this.cedula,
                nombre:this.nombre,
                apellido:this.apellido,
                provincia:"pichincha",
            }
            await actualizarEstudianteFachada(data,this.id);
        },
    },
};
</script>

<style></style>