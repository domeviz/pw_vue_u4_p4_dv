<template>
  <input v-model="cedula" type="text">
  <button @click="consultarEstudiante">Consultar</button>
</template>

<script>
//Llamamos al estudiante de helpers
import {obtenerEstudianteFachada} from "../helpers/EstudianteCliente.js"
export default {
    //Propiedad reactiva
    data(){
        return{
            cedula:null,
        }
    },
    //Metodo para crear la funcionalidad
    methods:{
        //Cuando e sun metodo del ciclo de vida como el mounted no es necesario usar el asyn y await
        //En este caso el metodo si necesita el async y await
        async consultarEstudiante(){
            await obtenerEstudianteFachada(this.cedula);
        }
    }
}
</script>

<style>

</style>