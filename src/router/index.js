import { createRouter, createWebHistory } from 'vue-router';
import InicioDeSesion from '../components/InicioDeSesion.vue';
import Registrarse from '../components/Registrarse.vue';
import Dashboard from '../components/Dashboard.vue';
import BuscarPais from '@/components/BuscarPais.vue';
import Estadisticas from '@/components/Estadisticas.vue';
import TiposDeEnergia from '@/components/TiposDeEnergia.vue';
import Inicio from '@/components/Inicio.vue';
import EnergiaInfo from '@/components/EnergiaInfo.vue';
import AdministracionCuenta from '@/components/AdministracionCuenta.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Ruta principal (Login)
      name: 'login',
      component: InicioDeSesion,
    },
    {
      path: '/register', 
      name: 'register',
      component: Registrarse,
    },
    {
      path: '/dashboard', 
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {

        const user = localStorage.getItem('user');
        if (!user) {
          next('/');
        } else {
          next();
        }
      },
      children: [
        {
          path: 'search', 
          name: 'search',
          component: BuscarPais,
        },
        {
          path: 'stats', 
          name: 'stats',
          component: Estadisticas,
        },
        {
          path: 'energia-tipos', 
          name: 'energia-tipos',
          component: TiposDeEnergia,
        },
        {
          path: 'inicio', 
          name: 'inicio',
          component: Inicio,
        },
        {
          path: 'energia-info',
          name: 'energia-info',
          component: EnergiaInfo,
        },
        {
          path: 'cuenta',
          name: 'cuenta',
          component: AdministracionCuenta,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*', // Ruta para manejar páginas no encontradas
      name: 'not-found',
      component: {
        template: '<h2>Página no encontrada</h2>',
      },
    },
  ],
});

export default router;
