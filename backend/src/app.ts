import { addAliases } from "module-alias";

addAliases({
  "@": __dirname,
});

import express from "express";
import { PORT } from "@/data/env";

const app = express();

app.listen(PORT, () => console.log("Server running on port 3000"));
