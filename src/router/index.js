import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/platform",
          name: "platform",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/PlatformView.vue"),
        },
        {
          path: "/member",
          name: "member",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
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
