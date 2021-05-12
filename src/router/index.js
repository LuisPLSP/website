import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MuddyMatch from "../views/MuddyMatch.vue";
import Courses from "../views/Courses.vue";
//import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/muddy-match",
    name: "MuddyMatch",
    component: MuddyMatch
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
