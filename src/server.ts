/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import express from "express";

// eslint-disable-next-line import/no-unresolved
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));
