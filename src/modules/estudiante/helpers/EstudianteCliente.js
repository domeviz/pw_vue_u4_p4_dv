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
    //En el config vamos a enviar todos los datos de cabecera
    //Se declara como si fuese un json
    const headers={
        "Autorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw",
        "Mensaje":"Valor1"
    }
    console.log('AXIOS 2')
    const data= axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r=>r.data);
    console.log(data);
    return data;
}

const ingresarEstudiante=(bodyEstudiante)=>{
    const headers={
        "Autorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw",
        "Mensaje":"Valor1"
    }
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,bodyEstudiante,{headers:headers}).then(r=>r.data);
}

const actualizarEstudiante=(bodyEstudiante,id)=>{
    const headers={
        "Autorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw",
        "Mensaje":"Valor1"
    }
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,bodyEstudiante,{headers:headers}).then(r=>r.data);
}

const eliminarEstudiante=async(id)=>{
    const headers={
        "Autorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw",
        "Mensaje":"Valor1"
    }
    return axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,{headers:headers}).then(r=>console.log(r.data));
}

// Nota:
// En los 3 proyectos poner los siguientes puertos
// Proyecto Spring API: 8080
// Proyecto Spring Autorizacion: 8082
// Proyecto Vue: 8081
// Para ejecutar:
// 1. Obtener el token ejecutando el Proyecto Spring Autorizacion
// - Ir a postman 
// - Poner GET con el link http://localhost:8082/API/v1.0/Autorizacion/tokens/obtener
// - En body poner el username y password como JSON
// Ojo: El password es diferente en postgres y en postman
//     En postman va el password del usuario, en este caso 123
//     En postgres guardamos el usuario pero con el password encriptado en https://bcrypt-generator.com/
//     Por lo tanto, 
//     En postgres está guardado como username: dome0 y password: $2a$12$u7jgdoGoHMbq1d2z/jobcufhVJEqGY29QM.XqiFq28sXRhR.nXw4y
//     En postman va el username: dome0 y password: 123
// - Al ejecutar el GET de la URL en Postman obtenemos el token temporal
// En este caso el token temporal fue: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw
// 2. Probar el API
// - Poner GET con el link http://localhost:8080/API/v1.0/Matricula/estudiantes/12345678
// - En headers crear un nuevo Key al final y poner
//   En el key -> Autorization
//   En el Value -> Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw
//   La estructura del Value es Bearer + espacio + token temporal
// - Ejecutamos el get y probamos si el api funciona haciendo la consulta de un estudiante por cedula
// 3. Ejecutar la pagina web
// - Dentro de cada metodo se crea una constante headers
// const headers={
//     "Autorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb21lMCIsImlhdCI6MTY5MjgwNTUwNCwiZXhwIjoxNjkzMzA1NTA0fQ.xZw8B2svODlsbiL2Opzh7Xhi5f0gkc3BYqbwJZ1zE8j-VZCVSYAaNQsZkMMt8wo1AJ5sRaC5ZfZ5gYb-gWl9qw",
//     "Mensaje":"Valor1"
// }
// - Dentro de cada verbo, se pone una coma y las llaves {headers:headers} para el config
// - Ejecutamos el programa y podemos usar normalmente la aplicacion con seguridad
