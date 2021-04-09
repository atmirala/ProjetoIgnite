/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import express from "express";

import { router } from "./routes";

// eslint-disable-next-line import/no-unresolved

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));
