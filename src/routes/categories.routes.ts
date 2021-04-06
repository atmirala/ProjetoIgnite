/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { Router } from "express";

// eslint-disable-next-line import/extensions
import { listCategoriesController } from "../modules/cars/useCases/listCategory";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
