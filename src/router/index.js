import { createRouter, createWebHistory } from "vue-router";

// import helloApp from "../views/home-01.vue"

import antDaisy from "../views/antDaisy.vue"

// import liffshare from "../views/myliff.vue"

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [

        {
            path: "/daisy",
            component: antDaisy,
        },

        {
            path: "/",
            component: antDaisy,
        },

        {
            path: "",
            component: antDaisy,
        },

        {
            path: "/tangmo",
            component: antDaisy,
        },

    ],
});

export default router;