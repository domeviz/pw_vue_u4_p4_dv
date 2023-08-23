<template>
    <div class="student-box">
        <div class="form-group">
            <label for="id">ID</label>
            <input v-model="id" type="text" id="id">
        </div>
        <div class="form-group">
            <label for="cedula">Cedula</label>
            <input v-model="cedula" type="text" id="cedula">
        </div>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="nombre" type="text" id="nombre">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input v-model="apellido" type="text" id="apellido">
        </div>
        <button class="btn btn-primary" @click="actualizarEstudiante">Actualizar</button>
    </div>
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

<style scoped>
.student-box {
    max-width: 400px;
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