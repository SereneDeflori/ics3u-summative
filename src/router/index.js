import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import MoviesView from '../views/MoviesView.vue';
import DetailView from '../views/DetailView.vue';
import SettingsView from '../views/SettingsView.vue';
import CartView from '../views/CartView.vue';
import { userAuthorized, useStore } from '../store';

const routes = [
    { path: '/', component: HomeView },
    { path: '/register', component: RegisterView },
    { path: '/login', component: LoginView },
    { path: '/movies', component: MoviesView },
    { path: '/movies/:id', component: DetailView },
    { path: '/feature', component: HomeView },
    { path: '/settings', component: SettingsView }, 
    { path: '/cart', component: CartView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_),
    routes,
});

router.beforeEach((to, from, next) => {
    userAuthorized.then(() => {
      const store = useStore();
  
      if (!store.user && to.meta.auth) {
        next("/login");
      } else {
        next();
      }
    });
  });  

export default router;
