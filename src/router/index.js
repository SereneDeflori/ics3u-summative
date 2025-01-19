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
    { path: '/movies', component: MoviesView, meta: { requiresAuth: true } },
    { path: '/movies/:id', component: DetailView, meta: { requiresAuth: true } },
    { path: '/feature', component: HomeView },
    { path: '/settings', component: SettingsView, meta: { requiresAuth: true } }, 
    { path: '/cart', component: CartView, meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    try {
        // Wait for the user state to be determined (authentication check)
        await userAuthorized;
        const store = useStore();

        // Check if the route requires authentication
        if (to.meta.requiresAuth && !store.isLoggedIn) {
            // If user is not logged in, redirect to login page
            next('/login');
        } else {
            // Proceed to the next route
            next();
        }
    } catch (error) {
        console.error('Error during authentication check:', error);
        // If there's an error in authentication, redirect to login page
        next('/login');
    }
});

export default router;

