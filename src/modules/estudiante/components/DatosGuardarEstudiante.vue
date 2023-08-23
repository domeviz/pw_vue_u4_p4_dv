<template>
<<<<<<< HEAD
    <div class="student-form">
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
      <div class="form-group">
        <label for="provincia">Provincia</label>
        <input v-model="provincia" type="text" id="provincia">
      </div>
      <button class="btn btn-success" @click="guardarEstudiante">Guardar</button>
    </div>
=======
    <label for="">Cedula</label>
    <input v-model="cedula" type="text">
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input v-model="apellido" type="text">
    <label for="">Provincia</label>
    <input v-model="provincia" type="text">
    <button class="btn btn-success" @click="guardarEstudiante">Guardar</button>
>>>>>>> 1d238b6 (Bootstrap)
</template>

<script>
//Llamamos al estudiante de helpers
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    //Propiedad reactiva
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            provincia:null
        };
    },
    methods: {
        async guardarEstudiante() {
            const data ={
                cedula:this.cedula,
                nombre:this.nombre,
                apellido:this.apellido,
                provincia:"pichincha"
            }
            await ingresarEstudianteFachada(data);
        },
    },
};
</script>

<style scoped>
.student-form {
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