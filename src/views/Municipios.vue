<template>
    <div class="container">
        <h1>Listado Municipios</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Departament</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(municipio,index) in municipios" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{municipio.muni_codi}}</td>
                    <td>{{municipio.muni_nomb}}</td>
                    <td>{{municipio.depa_nomb}}</td>
                </tr>

            </tbody>

        </table>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Municipio',
    data(){
        return{
            municipios: []
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/municipios')
        .then(response => (this.municipios =  response.data.municipios))
    },
}
</script>