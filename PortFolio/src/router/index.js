import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import ProfileView from "../view/ProfileView.vue"
import LoginView from "../view/LoginView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: "Home"
        },
        {
            path: "/profile/:name",
            name: "profile",
            meta: "Page Profil",
            //route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: ProfileView,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginView,
        },
    ],
});

export default router;