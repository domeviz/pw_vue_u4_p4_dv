<template>
    <div class="student-box">
        <div class="form-group">
            <label for="cedula">Cedula</label>
            <input v-model="cedula" type="text" id="cedula">
        </div>
        <button @click="consultarEstudiante">Consultar</button>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="nombre" type="text" id="nombre">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input v-model="apellido" type="text" id="apellido">
        </div>
    </div>
</template>
  
<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";

export default {
    data() {
        return {
            cedula: this.$route.params.cedula,
            nombre: null,
            apellido: null,
        };
    },
    methods: {
        async consultarEstudiante() {
            const data = await obtenerEstudianteFachada(this.cedula);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            console.log(data);
        },
    },
    mounted(){
        //this.$$route.params Va a obtener un arreglo de todos los path variables de la ruta que tengo
        //Vamos a desestructurar con lo que configure en la ruta que es cedula
        console.log(this.$route)
        const { cedula } = this.$route.params;
        console.log(cedula);
        this.cedula = cedula;
        //2 formas de llamar
        const prov=this.$route.query.provincia;
        console.log(prov)
        // const{prov1}=this.$route.query;
        this.consultarEstudiante();
    }
};
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

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
  