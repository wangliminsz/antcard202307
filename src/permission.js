import router from "./router";

// const whiteList = ["", "/", "/page01", "/page02"];

router.beforeEach((to, from, next) => {

    if (to.path === "/" || to.path === "") {
        next();
    }

    if (to.path === "/daisy") {
        next();
    }

    if (to.path === "/tangmo") {
        next();
    }

});