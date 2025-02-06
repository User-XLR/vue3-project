import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/index";

const router = createRouter({
	history: createWebHashHistory(),
	routes
});
router.beforeEach((to, from, next) => {
	next();
});
export default router;
