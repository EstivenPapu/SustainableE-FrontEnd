import { createRouter, createWebHistory } from 'vue-router';
import InicioDeSesion from '../pages/InicioDeSesion.vue';
import Registrarse from '../pages/Registrarse.vue';
import Dashboard from '../pages/Dashboard.vue';
import BuscarPais from '@/pages/BuscarPais.vue';
import Estadisticas from '@/pages/Estadisticas.vue';
import TiposDeEnergia from '@/components/TiposDeEnergia.vue';
import Inicio from '@/components/Inicio.vue';
import EnergiaInfo from '@/components/EnergiaInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Ruta principal (Login)
      name: 'login',
      component: InicioDeSesion,
    },
    {
      path: '/register', // Ruta de registro
      name: 'register',
      component: Registrarse,
    },
    {
      path: '/dashboard', // Ruta del Dashboard
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
          path: 'search', // Ruta para buscar países
          name: 'search',
          component: BuscarPais,
        },
        {
          path: 'stats', // Ruta para estadísticas
          name: 'stats',
          component: Estadisticas,
        },
        {
          path: 'energia-tipos', // Ruta para estadísticas
          name: 'energia-tipos',
          component: TiposDeEnergia,
        },
        {
          path: 'inicio', // Ruta para estadísticas
          name: 'inicio',
          component: Inicio,
        },
        {
          path: 'energia-info', // Ruta para estadísticas
          name: 'energia-info',
          component: EnergiaInfo,
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
