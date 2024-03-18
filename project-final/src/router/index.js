import Vue from 'vue'
import Router from 'vue-router'
import BlogPage from '@/components/pages/BlogPage.vue'
import BlogDetails from '@/components/pages/BlogDetails.vue'
import ProjectsPage from '@/components/pages/ProjectsPage.vue'
import ProjectDetails from '@/components/pages/ProjectDetails.vue'
import NotFound from '@/components/pages/NotFound.vue'
import HomePage from '@/components/pages/HomePage.vue'
import ProjectsKitchen from '@/components/blocks/ProjectsKitchen.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectsPage,
    },
    {
      path: "/project-details",
      name: "project-details",
      component: ProjectDetails,
    },
    {
      path: "/blog/:page?",
      name: "blog",
      component: BlogPage,
    },
    {
      path: "/blog-details",
      name: "blog-details",
      component: BlogDetails,
    },
    {
      path: "/projects-kitchen",
      name: "projects-kitchen",
      component: ProjectsKitchen,
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
