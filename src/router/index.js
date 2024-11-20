import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Comunas from '../views/Comunas';
import Municipios from '../views/Municipios';
import Departamentos from '../views/Departamentos';
import Paises from '../views/Paises';
import EditarComuna from '../components/Comuna/EditarComuna.vue';
import NewComuna from '../components/Comuna/NewComuna.vue';
import EditarMunicipio from '../components/Municipio/EditarMunicipio.vue';
import NewMunicipio from '../components/Municipio/NewMunicipio.vue';
import EditarDepartamento from '../components/Departamento/EditarDepartamento.vue';
import NewDepartamento from '../components/Departamento/NewDepartamento.vue';
import EditarPais from '../components/Pais/EditarPais.vue';
import NewPais from '../components/Pais/NewPais.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna
  },
  {
    path: '/municipios',
    name: 'Municipios',
    component: Municipios
  },
  {
    path: '/editar-municipio/:id',
    name: 'EditarMunicipio',
    component: EditarMunicipio
  },
  {
    path: '/add-municipio/',
    name: 'NewMunicipio',
    component: NewMunicipio
  },
  {
    path: '/departamentos',
    name: 'Departamentos',
    component: Departamentos
  },
  {
    path: '/editar-departamento/:id',
    name: 'EditarDepartamento',
    component: EditarDepartamento
  },
  {
    path: '/add-departamento/',
    name: 'NewDepartamento',
    component: NewDepartamento
  },
  {
    path: '/paises',
    name: 'Paises',
    component: Paises
  },
  {
    path: '/editar-pais/:id',
    name: 'EditarPais',
    component: EditarPais
  },
  {
    path: '/add-pais/',
    name: 'NewPais',
    component: NewPais
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
