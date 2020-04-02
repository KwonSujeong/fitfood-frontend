import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Graph from "../views/Graph.vue";
import Recommend from "../views/Recommend.vue";
import Review from "../views/Review.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    // {
    //     path: "/signup",
    //     name: "signup",
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/auth/Signup.vue")
    // },
    {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/auth/Login.vue")
    },
    {
        path: "/graph",
        name: "graph",
        component: Graph
    },
    {
        path: "/recommend",
        name: "recommend",
        component: Recommend
    },
    {
        path: "/review",
        name: "review",
        component: Review
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;