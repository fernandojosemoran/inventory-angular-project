import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const environmentsPath = path.join(__dirname, "../src/environments");

function renameFileIfNotExist(source, destination) {
  const sourcePath = path.join(environmentsPath, source);
  const destinationPath = path.join(environmentsPath, destination);

  if (!fs.existsSync(destinationPath)) {
    fs.renameSync(sourcePath, destinationPath);
  }
}

renameFileIfNotExist(
  "environments.production.example.ts",
  "environments.production.ts",
);
renameFileIfNotExist("environments.example.ts", "environments.ts");
