const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/project/formula_1", component: component_formula_1 },
  { path: "/project/apex_legends", component: component_apex_legends },
];

const router = VueRouter.createRouter({
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes,
});

// create and mount the root instance
const { createApp } = Vue;
const app = Vue.createApp({});

app.use(router);
app.mount("#main-content");
