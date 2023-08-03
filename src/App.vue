<template>
  <!-- <Estudiante/> -->
  <!-- <GuardaEstudiante/> -->
  <!-- <ActualizarEstudiante/> -->
  <EliminarEstudiante/>
</template>

<script>
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import Estudiante from './modules/estudiante/pages/Estudiante.vue'
import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue';
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue';

export default {
  name: 'App',
  components: {
    // Estudiante,
    // GuardaEstudiante,
    // ActualizarEstudiante,
    EliminarEstudiante
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
