<template>
    <nav class="center-nav">
        <ul>
            <li>
                <router-link to="/consultar">Consultar</router-link>
            </li>
            <li>
                <router-link to="/guardar">Guardar</router-link>
            </li>
            <li>
                <router-link to="/actualizar">Actualizar</router-link>
            </li>
            <li>
                <router-link to="/eliminar">Eliminar</router-link>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>
.center-nav {
  display: flex;
  justify-content: center;
  background-color: pink;
  margin-bottom: 50px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: pink;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: plum;
}
</style>