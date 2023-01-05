import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/home/HomeView.vue';
import { useMemberStore } from "../stores/member";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",

      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/platform",
          name: "platform",
          component: () => import("../views/PlatformView.vue"),
        },
        {
          path: "/forgetPwd",
          name: "forgetPwd",
          component: () => import("../views/ForgetPwdView.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/RegisterView.vue"),
        },
        {
          path: "/member",
          name: "member",
          component: () => import("../views/MemberView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  let memberStore = useMemberStore();
  let token = memberStore.token;
  if (to.name === "member") {
    if (token) {
      next();
    } else {
      router.push({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
