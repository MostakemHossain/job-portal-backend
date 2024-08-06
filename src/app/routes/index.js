import express from "express";
import { authRoutes } from "../modules/auth/auth.routes.js";
import { companyRoutes } from "../modules/company/company.routes.js";
import { userRoutes } from "../modules/user/user.routes.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
    
  },
  {
    path: "/company",
    route: companyRoutes,
    
  }
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
