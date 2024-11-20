<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Departamento
            </div>
            <div class="card-body">
                <form @submit.prevent="saveDepartamento">
                    <div class="row mb-3">

                        <label for="depa_codi" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="depa_codi" placeholder="Codigo departamento" disabled
                            v-model="departamento.depa_codi"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="depa_nomb" class="form-label">Nombre :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="depa_nomb" placeholder="Nombre departamento"
                            v-model="departamento.depa_nomb"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="pais_codi" class="form-label">Pais :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>

                            <select class="form-select" v-model="pais_codi">
                                <option selected value ="0">Seleccione un pais</option>
                                <option v-for="pais in paises" v-bind:value="pais.pais_codi">{{pais.pais_nomb}}</option>
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
    name: 'EditarDepartamento',
    data(){
        return{
            departamento:{
                depa_codi:0,
                depa_nomb:'',
                pais_codi:0
            },
            paises: [],
            pais_codi: "0"
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Departamentos'})
        },
        
        async saveDepartamento(){
            this.departamento.pais_codi = this.pais_codi
            const res = await axios.post(`http://127.0.0.1:8000/api/departamentos`, this.departamento)
            console.log(res);
            if (res.status == 200){
                this.$router.push({name: 'Departamentos'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Departamento has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted(){
        axios.get(`http://127.0.0.1:8000/api/paises/`)
        .then(response => {
            this.paises = response.data.paises
        })
    },
}
</script>