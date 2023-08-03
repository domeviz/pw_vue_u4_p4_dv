import axios from "axios";

//Siempre usar un metodo fachada para extraer cualquier funcionalidad
export const obtenerEstudianteFachada=async (cedula)=>{
    console.log('AXIOS')
    //Llamamos del fetch
    //Forma 1
    // return await obtenerEstudianteAPI(cedula);
    //Forma 2
    return await obtenerEstudianteAPIAxios(cedula);
}

export const ingresarEstudianteFachada=(bodyEstudiante)=>{
    ingresarEstudiante(bodyEstudiante)
}

export const actualizarEstudianteFachada=(bodyEstudiante,id)=>{
    actualizarEstudiante(bodyEstudiante,id)
}

export const eliminarEstudianteFachada=(id)=>{
    eliminarEstudiante(id)
}

//El fetch solo es para el verbo GET
//fetch es un metodo asincrono que debe tener await
const obtenerEstudianteAPI= async(cedula)=>{
    //Aqui debe ir el puerto en el que esta funcionando la api
    //Ejemplo: Spring esta en el 8080 y Visual en el 8081
    //Se debe poner el puerto 8080 de Spring
    //Y para buscar en el navegador es con el puerto 8081 de Visual 
    //http://localhost:8081/
    const data= await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios=(cedula)=>{
    console.log('AXIOS 2')
    const data= axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.data);
    console.log(data);
    return data;
}

const ingresarEstudiante=(bodyEstudiante)=>{
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,bodyEstudiante).then(r=>r.data);
}

const actualizarEstudiante=(bodyEstudiante,id)=>{
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,bodyEstudiante).then(r=>r.data);
}

const eliminarEstudiante=(id)=>{
    axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r=>r.data);
}
