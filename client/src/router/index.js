import Vue from "vue";
import VueRouter from "vue-router";
import ProblemPage from "@/components/templatePages/problemPage.vue";
import AdvicePage from "@/components/templatePages/advicePage.vue";
import OrgPage from "@/components/templatePages/orgPage.vue";
import LoginPage from "@/components/loginPage/loginPage.vue";
import RegistrationPage from "@/components/registrationPage/registrationPage.vue";
import ProfilePage from "@/components/templatePages/profilePage.vue";
import PhotoPage from "@/components/templatePages/photoPage.vue";
import VideoPage from "@/components/templatePages/videoPage.vue";
import ViewPage from "@/components/viewPage/viewPage.vue";
import AdminPage from "@/components/adminPage/adminPage.vue";
import FavouritePage from "@/components/templatePages/favouritePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: RegistrationPage,
  },
  {
    path: "/problem",
    name: "ProblemPage",
    component: ProblemPage,
  },
  {
    path: "/advice",
    name: "AdvicePage",
    component: AdvicePage,
  },
  {
    path: "/org",
    name: "OrgPage",
    component: OrgPage,
  },
  {
    path: "/photo",
    name: "Photo",
    component: PhotoPage,
  },
  {
    path: "/video",
    name: "Video",
    component: VideoPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/problem/:id",
    name: "ProblemArticle",
    component: ViewPage,
    props: true,
  },
  {
    path: "/advice/:id",
    name: "AdviceArticle",
    component: ViewPage,
    props: true,
  },
  {
    path: "/org/:id",
    name: "OrgArticle",
    component: ViewPage,
    props: true,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/favourite",
    name: "FavouritePage",
    component: FavouritePage,
  },
  {
    path: "*",
    redirect: "/problem",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
