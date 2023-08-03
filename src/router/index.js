import {createRouter,createWebHistory } from 'vue-router'
import ActualizarEstudiante from '../modules/estudiante/pages/ActualizarEstudiante.vue';
import ConsultarEstudiante from '../modules/estudiante/pages/ConsultarEstudiante.vue';
import GuardaEstudiante from '../modules/estudiante/pages/GuardaEstudiante.vue';
import EliminarEstudiante from '../modules/estudiante/pages/EliminarEstudiante.vue';

const routes = [
    {
       path: '/actualizar',
       name: 'actualizar',
       component: ActualizarEstudiante
     },
     {
       path: '/consultar',
       name: 'consultar',
       component: ConsultarEstudiante
     }
     ,
     {
       path: '/guardar',
       name: 'guardar',
       component: GuardaEstudiante
     }
     ,
     {
       path: '/eliminar',
       name: 'eliminar',
       component: EliminarEstudiante
     }
   ]
   
   const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes
   })
   export default router