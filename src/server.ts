import { createConnection } from "typeorm";

createConnection().then(() => {
  import(".");
});
