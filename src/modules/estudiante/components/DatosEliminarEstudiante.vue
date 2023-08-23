<template>
    <div class="student-box">
        <div class="form-group">
            <label for="id">ID</label>
            <input v-model="id" type="text" id="id">
        </div>
        <button class="btn btn-danger" @click="eliminarEstudiante">Eliminar</button>
    </div>
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