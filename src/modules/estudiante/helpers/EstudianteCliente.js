import axios from "axios";

//Siempre usar un metodo fachada para extraer cualquier funcionalidad
export const obtenerEstudianteFachada=async (cedula)=>{
    //Llamamos del fetch
    return await obtenerEstudianteAPI(cedula);
}

export const ingresarEstudianteFachada=(bodyEstudiante)=>{

}

export const actualizarEstudianteFachada=(bodyEstudiante,id)=>{

}

export const eliminarEstudianteFachada=(id)=>{

}

//El fetch solo es para el verbo GET
//fetch es un metodo asincrono que debe tener await
const obtenerEstudianteAPI= async(cedula)=>{
    const data= await fetch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);
}

const obtenerEstudianteAPIAxios=(cedula)=>{
    
}

//No usamos export default
// export default
//Usamos el export defaurl en cada metodo
//Asi: export const metodo