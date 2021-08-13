import { createRouter, createWebHistory } from 'vue-router';

import JobsList from './view/JobsList.vue';
import JobDetail from './view/JobDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    { path: '/jobs/:id', component: JobDetail },
  ],
});

export default router;
