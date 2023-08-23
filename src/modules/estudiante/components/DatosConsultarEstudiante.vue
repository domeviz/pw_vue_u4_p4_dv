<template>
<<<<<<< HEAD
    <div class="student-box">
        <div class="form-group">
            <label for="cedula">Cedula</label>
            <input v-model="cedula" type="text" id="cedula">
        </div>
        <button class="btn btn-info" @click="consultarEstudiante">Consultar</button>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="nombre" type="text" id="nombre">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input v-model="apellido" type="text" id="apellido">
        </div>
    </div>
=======
    <input v-model="cedula" type="text">
    <button class="btn btn-info" @click="consultarEstudiante">Consultar</button>
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input v-model="apellido" type="text">
>>>>>>> 1d238b6 (Bootstrap)
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

<style scoped>
.student-box {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    font-weight: bold;
}
input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>