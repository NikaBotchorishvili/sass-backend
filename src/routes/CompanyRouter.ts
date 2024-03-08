import { Router } from "express";
import { RegisterCompanyHandler } from "../controllers/CompanyController";

const companyRouter = Router();

companyRouter.post("/reg", RegisterCompanyHandler);

export default companyRouter;
