<template>
    <div class="container">
        <h1 class="text-start">Listado Paises |
            <button @click="newPais()"
            class="btn btn-success mx-2"><font-awesome-icon icon="plus" />
        </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Municipality</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pais,index) in paises" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{pais.pais_codi}}</td>
                    <td>{{pais.pais_nomb}}</td>
                    <td>{{pais.muni_nomb}}</td>
                    <td>
                        <button @click="deletePais(pais.pais_codi)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editPais(pais.pais_codi)"
                    class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" /></button>
                    </td>
                </tr>

            </tbody>

        </table>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2';

export default {
    name: 'Pais',
    data(){
        return{
            paises: []
        }
    },
    methods:{
        deletePais(codigo){
            Swal.fire({
                title: `Do you want to delete the Pais with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/paises/${codigo}`)
                    .then(response => {
                        if (response.data.success){
                            Swal.fire('Deleted!!', '', 'success')
                            this.paises = response.data.paises
                        }
                   })
                }
            })
        },
        editPais(id){
            this.$router.push({name: 'EditarPais', params: {id: `${id}`}})
        },
        newPais(){
            this.$router.push({name: 'NewPais'})
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/paises')
        .then(response => (this.paises =  response.data.paises))
    },
}
</script>