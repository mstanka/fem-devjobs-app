import { createRouter, createWebHistory } from "vue-router";

import JobsList from "./view/JobsList.vue";
import JobDetail from "./view/JobDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/jobs" },
    { path: "/jobs", component: JobsList },
    { path: "/jobs/:id", component: JobDetail, props: true },
    { path: "/:notFound(.*)", redirect: "/jobs" },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
