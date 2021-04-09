/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { Router } from "express";
import multer from "multer";

// eslint-disable-next-line import/extensions
import { listCategoriesController } from "../modules/cars/useCases/listCategory";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
