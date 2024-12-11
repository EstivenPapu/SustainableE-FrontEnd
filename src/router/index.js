import { createRouter, createWebHistory } from 'vue-router';
import InicioDeSesion from '../pages/InicioDeSesion.vue';
import Registrarse from '../pages/Registrarse.vue';
import Dashboard from '../pages/Dashboard.vue';
import BuscarPais from '@/pages/BuscarPais.vue';
import Estadisticas from '@/pages/Estadisticas.vue';
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
        // Verificar si hay un usuario autenticado
        const user = localStorage.getItem('user');
        if (!user) {
          next('/'); // Redirige al login si no está autenticado
        } else {
          next(); // Si está autenticado, permite el acceso
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
