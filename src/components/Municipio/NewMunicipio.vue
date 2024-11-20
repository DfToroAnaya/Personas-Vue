<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Municipio
            </div>
            <div class="card-body">
                <form @submit.prevent="saveMunicipio">
                    <div class="row mb-3">

                        <label for="muni_codi" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="muni_codi" placeholder="Codigo municipio" disabled
                            v-model="municipio.muni_codi"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="muni_nomb" class="form-label">Nombre :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="muni_nomb" placeholder="Nombre municipio"
                            v-model="municipio.muni_nomb"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="depa_codi" class="form-label">Departamento :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>

                            <select class="form-select" v-model="depa_codi">
                                <option selected value ="0">Seleccione un municipio</option>
                                <option v-for="departamento in departamentos" v-bind:value="departamento.depa_codi">{{departamento.depa_nomb}}</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: 'EditarMunicipio',
    data(){
        return{
            municipio:{
                muni_codi:0,
                muni_nomb:'',
                depa_codi:0
            },
            departamentos: [],
            depa_codi: "0"
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Departamentos'})
        },
        
        async saveMunicipio(){
            this.municipio.depa_codi = this.depa_codi
            const res = await axios.post(`http://127.0.0.1:8000/api/municipios`, this.municipio)
            console.log(res);
            if (res.status == 200){
                this.$router.push({name: 'Municipios'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Municipio has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted(){
        axios.get(`http://127.0.0.1:8000/api/departamentos/`)
        .then(response => {
            this.departamentos = response.data.departamentos
        })
    },
}
</script>