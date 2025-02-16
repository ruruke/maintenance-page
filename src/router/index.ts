import { createRouter, createWebHistory } from 'vue-router'
import Maintenance from '../views/maintenance.vue'
// import Contact from "../views/Contact.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Maintenance
    }
    // ,
    // {
    //     path: '/contanct',
    //     name: 'Contact',
    //     component: Contact
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router