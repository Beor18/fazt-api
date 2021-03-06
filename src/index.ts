import app from "./app";
import { makeConnection } from "./config/mongoose";

async function main() {
  await makeConnection();
  app.listen(3000);
  console.log("Server on port", app.get("port"));
}

main();