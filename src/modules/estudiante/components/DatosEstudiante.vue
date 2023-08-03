<template>
    <input v-model="cedula" type="text">
    <button @click="consultarEstudiante">Consultar</button>
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input v-model="apellido" type="text">
</template>

<script>
//Llamamos al estudiante de helpers
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    //Propiedad reactiva
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null
        };
    },
    //Metodo para crear la funcionalidad
    methods: {
        //Cuando e sun metodo del ciclo de vida como el mounted no es necesario usar el asyn y await
        //En este caso el metodo si necesita el async y await
        async consultarEstudiante() {
            const data = await obtenerEstudianteFachada(this.cedula);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            console.log(data)
        },
    },
}
</script>

<style></style>