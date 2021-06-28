import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MuddyMatch from "../views/MuddyMatch.vue";
import Courses from "../views/Courses.vue";
import LandingPageForks from "../views/LandingPageForks.vue";
import LandingPageShock from "../views/LandingPageShock.vue";
import LandingPageTechSession from "../views/LandingPageTechSession.vue";
import VueMeta from "vue-meta";
Vue.use(VueMeta);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/muddy-match",
    name: "MuddyMatch",
    component: MuddyMatch,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/frontforkscourse",
    name: "FrontForksCourse",
    component: LandingPageForks,
  },
  {
    path: "/rearshockcourse",
    name: "ShockCourse",
    component: LandingPageShock,
  },
  {
    path: "/technicalsessions",
    name: "TechSession",
    component: LandingPageTechSession,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
