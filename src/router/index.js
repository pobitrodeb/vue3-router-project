import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/", 
        name: "home", 
        component: () => import('../components/Home.vue'), 
    }, 
    {
        path: "/about", 
        name: "about", 
        component: () => import('../components/About.vue'), 
    }, 
    {
        path: "/blog/:id", 
        name: "blog.id", 
        component: () => import('../components/Blog.vue'), 
    }, 
]
export default  createRouter({
    history:createWebHistory('/'),
    routes,
});