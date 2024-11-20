<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Pais
            </div>
            <div class="card-body">
                <form @submit.prevent="savePais">
                    <div class="row mb-3">

                        <label for="pais_codi" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="pais_codi" placeholder="Codigo pais" disabled
                            v-model="pais.pais_codi"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="pais_nomb" class="form-label">Nombre :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="pais_nomb" placeholder="Nombre pais"
                            v-model="pais.pais_nomb"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="muni_codi" class="form-label">Municipio :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>

                            <select class="form-select" v-model="muni_codi">
                                <option selected value ="0">Seleccione un municipio</option>
                                <option v-for="municipio in municipios" v-bind:value="municipio.muni_codi">{{municipio.muni_nomb}}</option>
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
    name: 'EditarPais',
    data(){
        return{
            pais:{
                pais_codi:0,
                pais_nomb:'',
                muni_codi:0
            },
            municipios: [],
            muni_codi: "0"
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Paises'})
        },
        
        async savePais(){
            this.pais.muni_codi = this.muni_codi
            const res = await axios.post(`http://127.0.0.1:8000/api/paises`, this.pais)
            console.log(res);
            if (res.status == 200){
                this.$router.push({name: 'Paises'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Pais has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted(){
        axios.get(`http://127.0.0.1:8000/api/municipios/`)
        .then(response => {
            this.municipios = response.data.municipios
        })
    },
}
</script>